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
  context = undefined
  hasBeenDestroyed = false
  rejects = []
  resolves = []
  unsubs = []

  constructor() {
    this.context = globalThis
  }

  on(path, callback) {
    if (this.hasBeenDestroyed) {
      throw new Error(
        "This SubscriptionService instance has already been destroyed!"
      )
    }

    const inner = event => {
      if (event.data.path === path) {
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
                path: cbid,
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

  emit(path, payload) {
    if (this.hasBeenDestroyed) {
      throw new Error(
        "This SubscriptionService instance has already been destroyed!"
      )
    }

    return new Promise((resolve, reject) => {
      try {
        const cbid = makeKey(8)

        const callback = event => {
          if (event.data.path === cbid) {
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
          path,
          payload,
        })
      } catch (e) {
        this.resolves.remove(resolve)
        this.rejects.remove(reject)
        return reject(e)
      }
    })
  }

  trigger(path, payload) {
    return this.emit(path, payload)
  }

  destroy(error) {
    if (this.hasBeenDestroyed) {
      throw new Error(
        "This SubscriptionService instance has already been destroyed!"
      )
    }

    Object.defineProperty(this, "hasBeenDestroyed", {
      configurable: false,
      enumerable: true,

      get() {
        return true
      },

      set() {
        throw new Error(
          "This SubscriptionService instance has already been destroyed!"
        )
      },
    })

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
    // Question: Can web workers call their own `terminate` method?
  }
}

module.exports = SubscriptionService
