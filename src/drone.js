const SubscriptionService = require("./subscription-service")

class Drone extends SubscriptionService {
  _worker = undefined

  constructor(path) {
    super()

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
