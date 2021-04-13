importScripts("bee.js")
const drone = new Bee.Drone()

drone.on("thing2", function(request, response){
  return response.send("thing2 finished!")
})

drone.on("thing3", function(request, response){
  return response.send("thing3 finished!")
})
