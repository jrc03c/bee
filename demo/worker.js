/* eslint-disable no-undef */
importScripts("./bee.js")
const drone = new Bee.Drone()

drone.on("dubble", (request, response) => {
  return response.send(request.data * 2)
})

drone.on("add-full-name", (request, response) => {
  const person = request.data
  person.fullName = `${person.firstName} ${person.lastName}`
  person.reverseFullName = `${person.lastName}, ${person.firstName}`
  return response.send(person)
})
