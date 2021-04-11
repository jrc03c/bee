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
