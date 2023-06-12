const { stringify } = require("@jrc03c/js-text-tools")
const makeKey = require("@jrc03c/make-key")
require("./array-prototype-remove")

function betterStringify(x) {
  if (x === Infinity) {
    return "Infinity"
  }

  if (x === -Infinity) {
    return "-Infinity"
  }

  if (typeof x === "number" && isNaN(x)) {
    return "NaN"
  }

  if (typeof x === "symbol") {
    return x.toString()
  }

  return stringify(x)
}

function betterParse(x) {
  if (x === "Infinity") {
    return Infinity
  }

  if (x === "-Infinity") {
    return -Infinity
  }

  if (x === "NaN") {
    return NaN
  }

  if (x.match(/^Symbol\(.*?\)$/g)) {
    return Symbol.for(x.replace("Symbol(", "").slice(0, -1))
  }

  return JSON.parse(x)
}

class SubscriptionService {
  _hasBeenDestroyed = false
  context = undefined
  rejects = []
  resolves = []
  unsubs = []

  constructor() {
    this.context = globalThis
  }

  get hasBeenDestroyed() {
    return this._hasBeenDestroyed
  }

  on(signal, callback) {
    if (this.hasBeenDestroyed) {
      throw new Error(
        `This \`${this.constructor.name}\` instance has already been destroyed!`
      )
    }

    const inner = event => {
      if (event.data.signal === signal) {
        const cbid = event.data.cbid
        let payload = event.data.payload

        try {
          payload = betterParse(payload)
        } catch (e) {}

        const request = { data: payload }

        const response = {
          send: result => {
            try {
              result = betterStringify(result)
            } catch (e) {}

            if (!this.hasBeenDestroyed) {
              this.context.postMessage({
                signal: cbid,
                payload: result,
              })
            }
          },
        }

        callback(request, response)
      }
    }

    this.context.addEventListener("message", inner)
    const unsub = () => this.context.removeEventListener("message", inner)
    this.unsubs.push(unsub)
    return unsub
  }

  emit(signal, payload) {
    if (this.hasBeenDestroyed) {
      throw new Error(
        `This \`${this.constructor.name}\` instance has already been destroyed!`
      )
    }

    return new Promise((resolve, reject) => {
      try {
        const cbid = makeKey(8)

        const callback = event => {
          if (event.data.signal === cbid) {
            this.context.removeEventListener("message", callback)
            this.resolves.remove(resolve)
            this.rejects.remove(reject)

            let out = event.data.payload

            try {
              out = betterParse(out)
            } catch (e) {}

            return resolve(out)
          }
        }

        this.context.addEventListener("message", callback)
        this.resolves.push(resolve)
        this.rejects.push(reject)

        try {
          payload = betterStringify(payload)
        } catch (e) {}

        this.context.postMessage({
          cbid,
          signal,
          payload,
        })
      } catch (e) {
        this.resolves.remove(resolve)
        this.rejects.remove(reject)
        return reject(e)
      }
    })
  }

  destroy(error) {
    if (this.hasBeenDestroyed) {
      throw new Error(
        `This \`${this.constructor.name}\` instance has already been destroyed!`
      )
    }

    this._hasBeenDestroyed = true
    this.unsubs.forEach(unsub => unsub())

    if (error) {
      this.rejects.forEach(reject => reject(error))
    } else {
      this.resolves.forEach(resolve => resolve())
    }

    delete this.context
    delete this.rejects
    delete this.resolves
    delete this.unsubs
  }
}

module.exports = SubscriptionService
