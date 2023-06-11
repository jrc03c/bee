const Drone = require("./drone")
const SubscriptionService = require("./subscription-service")

class Queen extends SubscriptionService {
  hive = []

  constructor(filename, n) {
    super()

    if (filename) {
      n = n || 1
      this.addDrones(filename, n)
    }
  }

  get isDead() {
    return this.hasBeenDestroyed
  }

  addDrone(filename) {
    if (this.isDead) {
      throw new Error("The queen is dead!")
    }

    this.hive.push(new Drone(filename))
    return this
  }

  addDrones(filename, n) {
    for (let i = 0; i < n; i++) {
      this.addDrone(filename)
    }

    return this
  }

  removeDrone(drone) {
    if (this.isDead) {
      throw new Error("The queen is dead!")
    }

    drone.destroy()
    this.hive.remove(drone)
    return this
  }

  removeDrones(drones) {
    drones.forEach(drone => this.removeDrone(drone))
    return this
  }

  on(path, callback) {
    this.hive.forEach(drone => {
      drone.on(path, callback)
    })
  }

  off(path, callback) {
    this.hive.forEach(drone => {
      drone.off(path, callback)
    })
  }

  emit(path, payload) {
    if (this.isDead) {
      throw new Error("The queen is dead!")
    }

    if (this.hive.length === 0) {
      throw new Error(
        `The queen issued a "${path}" command, but there are no drones in the hive!`
      )
    }

    return new Promise((resolve, reject) => {
      try {
        const results = new Array(this.hive.length)

        const promises = this.hive.map((drone, i) => {
          return new Promise((resolve, reject) => {
            try {
              this.resolves.push(resolve)
              this.rejects.push(reject)

              drone.emit(path, payload).then(result => {
                if (!this.hasBeenDestroyed) {
                  this.resolves.remove(resolve)
                  this.rejects.remove(reject)
                  results[i] = result
                  resolve()
                }
              })
            } catch (e) {
              this.resolves.remove(resolve)
              this.rejects.remove(reject)
              return reject(e)
            }
          })
        })

        this.resolves.push(resolve)
        this.rejects.push(reject)

        Promise.all(promises).then(() => {
          if (!this.hasBeenDestroyed) {
            this.resolves.remove(resolve)
            this.rejects.remove(reject)

            if (results.length === 1) {
              return resolve(results[0])
            } else {
              return resolve(results)
            }
          }
        })
      } catch (e) {
        this.resolves.remove(resolve)
        this.rejects.remove(reject)
        return reject(e)
      }
    })
  }

  command(path, payload) {
    return this.emit(path, payload)
  }

  destroy(error) {
    if (this.isDead) {
      throw new Error("The queen is dead!")
    }

    const out = super.destroy(error)

    this.hive.forEach(drone => {
      drone.destroy(error)
    })

    delete this.hive
    return out
  }
}

module.exports = Queen
