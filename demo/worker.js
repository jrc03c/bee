importScripts("bee.js")
const drone = new Bee.Drone()

drone.on("do-slow-thing", function(request, response){
  setTimeout(() => {
    response.send("Slow thing is done!")
  }, 3000)
})

drone.on("do-fast-thing", function(request, response){
  return response.send("Fast thing is done!")
})
