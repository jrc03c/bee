const { parse, stringify } = require("@jrc03c/js-text-tools")
const makeKey = require("@jrc03c/make-key")
require("./array-prototype-remove")

const alive = {}

class SubscriptionService {
  context = undefined
  rejects = []
  resolves = []
  unsubs = []

  constructor() {
    this.context = globalThis
    const id = makeKey(8)

    Object.defineProperty(this, "id", {
      configurable: false,
      enumerable: true,
      get: () => id,

      set() {
        throw new Error(
          `The \`id\` property of this SubscriptionService instance is read-only!`
        )
      },
    })

    alive[this.id] = true
  }

  get hasBeenDestroyed() {
    return !alive[this.id]
  }

  set hasBeenDestroyed(value) {
    throw new Error(
      `The \`hasBeenDestroyed\` property of this SubscriptionService instance is read-only! To destroy this SubscriptionService instance, invoke its \`destroy\` method.`
    )
  }

  on(signal, callback) {
    if (this.hasBeenDestroyed) {
      throw new Error(
        `This SubscriptionService instance has already been destroyed!`
      )
    }

    const inner = event => {
      if (event.data.signal === signal) {
        const cbid = event.data.cbid
        let payload = event.data.payload

        try {
          payload = parse(payload)
        } catch (e) {}

        const request = { data: payload }

        const response = {
          send: result => {
            try {
              result = stringify(result)
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
        `This SubscriptionService instance has already been destroyed!`
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
              out = parse(out)
            } catch (e) {}

            return resolve(out)
          }
        }

        this.context.addEventListener("message", callback)
        this.resolves.push(resolve)
        this.rejects.push(reject)

        try {
          payload = stringify(payload)
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
        `This SubscriptionService instance has already been destroyed!`
      )
    }

    delete alive[this.id]
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
