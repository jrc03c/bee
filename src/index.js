const { stringify } = require("@jrc03c/js-text-tools")
const makeKey = require("@jrc03c/make-key")

class SubscriptionService {
  constructor() {
    const self = this
    self.subscriptions = {}
  }

  on(path, callback) {
    const self = this
    if (!self.subscriptions[path]) self.subscriptions[path] = []
    self.subscriptions[path].push(callback)
    return self
  }

  off(path, callback) {
    const self = this

    self.subscriptions[path].splice(
      self.subscriptions[path].indexOf(callback),
      1
    )

    return self
  }

  run(path, payload) {
    const self = this
    const callbacks = self.subscriptions[path]
    if (callbacks) callbacks.forEach(cb => cb(payload))
    return self
  }
}

class Drone extends SubscriptionService {
  constructor() {
    super()
    const self = this

    onmessage = event =>
      self.run(event.data.path, event.data.payload, event.data.cbid)
  }

  run(path, payload, cbid) {
    const self = this

    const request = {
      data: payload,
    }

    const response = {
      send: function (result) {
        result = JSON.parse(stringify(result))

        postMessage({
          path: cbid,
          payload: result,
        })
      },
    }

    const callbacks = self.subscriptions[path]
    if (callbacks) callbacks.forEach(cb => cb(request, response))
    else response.send(null)
    return self
  }
}

class Queen extends SubscriptionService {
  constructor(filename, n) {
    super()
    const self = this
    self.hive = []

    if (filename) {
      self.addDrones(filename, n || 1)
    }
  }

  addDrone(filename) {
    const self = this
    const drone = new Worker(filename)
    drone.onmessage = event => super.run(event.data.path, event.data.payload)
    self.hive.push(drone)
    return drone
  }

  addDrones(filename, n) {
    const self = this
    for (let i = 0; i < n; i++) self.addDrone(filename)
    return self
  }

  removeDrone(drone) {
    const self = this
    self.hive = self.hive.filter(other => other !== drone)
    drone.terminate()
    return self
  }

  removeDrones(drones) {
    const self = this
    drones.forEach(drone => self.removeDrone(drone))
    return self
  }

  run(path, payload) {
    const self = this

    if (self.hive.length === 0) {
      console.warn(
        "The queen issued a command, but there are no drones in the hive! Use the queen's `addDrone` method to add a drone to the hive! (https://github.com/jrc03c/bee.js)"
      )
      return null
    }

    return new Promise((resolve, reject) => {
      try {
        payload = JSON.parse(stringify(payload))
        const results = new Array(self.hive.length)

        const promises = self.hive.map(function (drone, i) {
          return new Promise(function (innerResolve, innerReject) {
            try {
              const cbid = makeKey(32)

              self.on(cbid, result => {
                self.off(cbid, this)
                results[i] = result
                innerResolve()
              })

              drone.postMessage({ path, payload, cbid })
            } catch (e) {
              innerReject(e)
            }
          })
        })

        Promise.all(promises).then(() => {
          if (self.hive.length === 1) resolve(results[0])
          else resolve(results)
        })
      } catch (e) {
        reject(e)
      }
    })
  }

  command(path, payload) {
    const self = this
    return self.run(path, payload)
  }

  kill() {
    const self = this
    self.stop()
    self.removeDrones(self.hive)
    return null
  }

  stop() {
    const self = this
    self.hive.forEach(drone => drone.terminate())
    return self
  }

  terminate() {
    const self = this
    return self.stop()
  }
}

const Bee = { Drone, Queen }

if (typeof module !== "undefined") {
  module.exports = Bee
}

if (typeof globalThis !== "undefined") {
  // eslint-disable-next-line no-undef
  globalThis.Bee = Bee
}
