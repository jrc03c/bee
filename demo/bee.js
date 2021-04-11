function makeKey(n){
  let alpha = "abcdefghijklmnopqrstuvwxyz1234567890"
  let out = ""
  for (let i=0; i<n; i++) out += alpha[parseInt(Math.random() * alpha.length)]
  return out
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
    self.worker = new Worker(filename)

    self.worker.onmessage = (event) => super.run(event.data.path, event.data.payload)
  }

  run(path, payload){
    let self = this

    return new Promise((resolve, reject) => {
      try {
        let cbid = makeKey(32)

        self.on(cbid, result => {
          self.off(cbid, this)
          resolve(result)
        })

        self.worker.postMessage({path, payload, cbid})
      } catch(e) {
        reject(e)
      }
    })
  }

  command(path, payload){
    let self = this
    return self.run(path, payload)
  }
}

const Bee = {Drone, Queen}

if (typeof(module) !== "undefined"){
  module.exports = Bee
}

if (typeof(window) !== "undefined"){
  window.Bee = Bee
}
