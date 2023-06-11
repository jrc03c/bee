const SubscriptionService = require("./subscription-service")

class Drone extends SubscriptionService {
  _worker = undefined

  constructor(filename) {
    super()

    if (filename) {
      this._worker = new Worker(filename)
      this.context = this._worker
    }
  }

  get isDead() {
    return this.hasBeenDestroyed
  }

  propose(path, payload) {
    return this.emit(path, payload)
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
