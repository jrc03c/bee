/* eslint-disable no-undef */
importScripts("../dist/bee.min.js")
const drone = new Bee.Drone()

drone.on("double", (request, response) => {
  return response.send(request.data * 2)
})

drone.on("wait", (request, response) => {
  setTimeout(() => response.send(), request.data)
})

drone.on("send-it-right-back", (request, response) => {
  return response.send(request.data)
})

drone.on("pulse", (request, response) => {
  const start = new Date()

  setInterval(() => {
    globalThis.postMessage({
      signal: "pulse-elapsed-time",
      payload: new Date() - start,
    })
  }, 10)

  response.send()
})

drone.on("set-random-number", (request, response) => {
  globalThis.randomNumber = Math.random()
  return response.send()
})

drone.on("get-random-number", (request, response) => {
  return response.send(globalThis.randomNumber)
})

drone.on("call-me-back", async (request, response) => {
  await drone.emit("called-you-back", 234)
  return response.send()
})

setTimeout(() => {
  drone.propose("message-initiated-by-worker", "The worker says hi!")
}, 500)
