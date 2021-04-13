function makeKey(n){
  let alpha = "abcdefghijklmnopqrstuvwxyz1234567890"
  let out = ""
  for (let i=0; i<n; i++) out += alpha[parseInt(Math.random() * alpha.length)]
  return out
}

Array.prototype.remove = function(item){
  return this.filter(other => other !== item)
}

class SubscriptionService {
  constructor(){
    let self = this
    self.subscriptions = {}
  }

  on(path, callback){
    let self = this
    if (!self.subscriptions[path]) self.subscriptions[path] = []
    self.subscriptions[path].push(callback)
    return self
  }

  off(path, callback){
    let self = this
    self.subscriptions[path].splice(self.subscriptions[path].indexOf(callback), 1)
    return self
  }

  run(path, payload){
    let self = this
    let callbacks = self.subscriptions[path]
    if (callbacks) callbacks.forEach(cb => cb(payload))
    return self
  }
}

class Drone extends SubscriptionService {
  constructor(){
    super()
    let self = this
    onmessage = (event) => self.run(event.data.path, event.data.payload, event.data.cbid)
  }

  run(path, payload, cbid){
    let self = this

    let request = {
      data: payload,
    }

    let response = {
      send: function(result){
        postMessage({
          path: cbid,
          payload: result,
        })
      },
    }

    let callbacks = self.subscriptions[path]
    if (callbacks) callbacks.forEach(cb => cb(request, response))
    return self
  }
}

class Queen extends SubscriptionService {
  constructor(filename){
    super()
    let self = this
    self.hive = []
  }

  addDrone(filename){
    let self = this
    let drone = new Worker(filename)
    drone.onmessage = (event) => super.run(event.data.path, event.data.payload)
    self.hive.push(drone)
    return drone
  }

  addDrones(filename, n){
    let self = this
    for (let i=0; i<n; i++) self.addDrone(filename)
    return self
  }

  removeDrone(drone){
    let self = this
    self.hive = self.hive.remove(drone)
    drone.terminate()
    return self
  }

  removeDrones(drones){
    let self = this
    drones.forEach(drone => self.removeDrone(drone))
    return self
  }

  run(path, payload){
    let self = this

    if (self.hive.length === 0){
      console.warn("The queen issued a command, but there are no drones in the hive! Use the queen's `addDrone` method to add a drone to the hive! (https://github.com/jrc03c/bee.js)")
      return null
    }

    return new Promise((resolve, reject) => {
      try {
        let results = new Array(self.hive.length)

        let promises = self.hive.map(function(drone, i){
          return new Promise(function(innerResolve, innerReject){
            try {
              let cbid = makeKey(32)

              self.on(cbid, result => {
                self.off(cbid, this)
                results[i] = result
                innerResolve()
              })

              drone.postMessage({path, payload, cbid})
            } catch(e){
              innerReject(e)
            }
          })
        })

        Promise.all(promises).then(() => {
          if (self.hive.length === 1) resolve(results[0])
          else resolve(results)
        })
      } catch(e) {
        reject(e)
      }
    })
  }

  command(path, payload){
    let self = this
    return self.run(path, payload)
  }

  kill(){
    let self = this
    self.stop()
    self.removeDrones(self.hive)
    return null
  }

  stop(){
    let self = this
    self.hive.forEach(drone => drone.terminate())
    return self
  }

  terminate(){
    let self = this
    return self.terminate()
  }
}

const Bee = {Drone, Queen}

if (typeof(module) !== "undefined"){
  module.exports = Bee
}

if (typeof(window) !== "undefined"){
  window.Bee = Bee
}
