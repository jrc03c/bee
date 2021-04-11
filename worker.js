importScripts("subscription-service.js")

class Bee extends SubscriptionService {
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

const bee = new Bee()

bee.on("double", function(request, response){
  let x = request.data
  return response.send(x * 2)
})
