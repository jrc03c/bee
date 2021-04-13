importScripts("bee.js")
const drone = new Bee.Drone()

drone.on("thing1", function(request, response){
  return response.send("thing1 finished!")
})

drone.on("thing3", function(request, response){
  return response.send("thing3 finished!")
})
