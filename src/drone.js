const SubscriptionService = require("./subscription-service")

class Drone extends SubscriptionService {
  _worker = undefined

  constructor(path) {
    super()

    if (typeof window === "undefined") {
      if (typeof path !== "undefined") {
        throw new Error(
          "You must not pass a `path` to a `Drone` created in a web worker context! (Passing a `path` only makes sense when creating a `Drone` in a window context.)"
        )
      }
    } else if (typeof path === "undefined") {
      throw new Error("You must pass a `path` into the `Drone` constructor!")
    }

    if (path) {
      this._worker = new Worker(path)
      this.context = this._worker
    }
  }

  get isDead() {
    return this.hasBeenDestroyed
  }

  propose(signal, payload) {
    return this.emit(signal, payload)
  }

  destroy() {
    if (this._worker) {
      this._worker.terminate()
      delete this._worker
    }

    return super.destroy()
  }
}

module.exports = Drone
