importScripts("bee.js")
const drone = new Bee.Drone()

drone.on("double", function(request, response){
  let x = request.data
  return response.send(x * 2)
})
