if (typeof(window) !== "undefined"){
  class Bee {
    constructor(file){
      let self = this
      self.worker = new Worker(file)
    }

    do(path, payload){
      let self = this

      self.worker.postMessage({
        path,
        payload,
      })

      return self
    }
  }

  window.Bee = Bee
}

if (typeof(module) !== "undefined"){
  const bee = {
    subscriptions: {},

    on: function(path, callback){
      let self = this
      if (!self.subscriptions[path]) self.subscriptions[path] = []
      self.subscriptions[path].push(callback)
      return self
    },

    off: function(path, callback){
      let self = this
      self.subscriptions[path].splice(self.subscriptions[path].indexOf(callback), 1)
      if (self.subscriptions[path].length === 0) delete self.subscriptions[path]
      return self
    },
  }

  onmessage = function(event){
    let callbacks = bee.subscriptions[event.data.path]

    if (callbacks){
      callbacks.forEach(callback => {
        callback(event.data.payload)
      })
    }
  }

  module.exports = bee
}
