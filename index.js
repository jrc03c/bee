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
    if (self.subscriptions[path].length === 0) delete self.subscriptions[path]
    return self
  }

  run(path, payload){
    let self = this
    let callbacks = self.subscriptions[path]

    if (callbacks){
      callbacks.forEach(callback => {
        callback(payload)
      })
    }

    return self
  }
}

if (typeof(window) !== "undefined"){
  class Bee extends SubscriptionService {
    constructor(file){
      super()

      let self = this
      self.worker = new Worker(file)
    }

    run(path, payload){
      let self = this
      self.worker.postMessage({path, payload})
    }
  }

  window.Bee = Bee
}

if (typeof(module) !== "undefined"){
  const bee = new SubscriptionService()
  onmessage = (event) => bee.run(event.data.path, event.data.payload)
  module.exports = bee
}
