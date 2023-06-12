const Drone = require("./drone")
const SubscriptionService = require("./subscription-service")

class Queen extends SubscriptionService {
  hive = []

  constructor(path, n) {
    super()

    if (path) {
      n = n || 1
      this.addDrones(path, n)
    }
  }

  get isDead() {
    return this.hasBeenDestroyed
  }

  set isDead(value) {
    throw new Error(
      `The \`isDead\` property of this Queen instance is read-only! To destroy this Queen instance, invoke her \`destroy\` method.`
    )
  }

  addDrone(path) {
    if (this.isDead) {
      throw new Error("The queen is dead!")
    }

    this.hive.push(new Drone(path))
    return this
  }

  addDrones(path, n) {
    for (let i = 0; i < n; i++) {
      this.addDrone(path)
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

  on(signal, callback) {
    const unsubs = this.hive.map(drone => {
      return drone.on(signal, callback)
    })

    const unsub = () => unsubs.forEach(unsub => unsub())
    this.unsubs.push(unsub)
    return unsub
  }

  emit(signal, payload) {
    if (this.isDead) {
      throw new Error("The queen is dead!")
    }

    if (this.hive.length === 0) {
      throw new Error(
        `The queen issued a "${signal}" command, but there are no drones in the hive!`
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

              drone.emit(signal, payload).then(result => {
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

  command(signal, payload) {
    return this.emit(signal, payload)
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
