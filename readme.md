<p align="center">
  <img src="logo.png" width="256">
</p>

# Intro

**Bee.js** is a helper tool for working with Web Workers. It uses an [Express](http://expressjs.com/)-like syntax.

# Installation

```bash
npm install --save @jrc03c/bee
```

# Usage

First, include the main bee.js script in your web page:

```html
<script src="path/to/dist/bee.js"></script>
```

Then create a "queen" bee, which will be used to send commands to the drone(s). Then add a drone using the path to the relevant Web Worker file.

```js
const queen = new Bee.Queen()
queen.addDrone("path/to/worker.js")
```

Then issue commands:

```js
queen.command("double", 32).then(result => {
  console.log("The result is:", result)
})
```

Of course, nothing will happen yet because we haven't actually defined what's in `worker.js`! So, let's do that now. In `worker.js`, do:

```js
importScripts("path/to/dist/bee.js")
const drone = new Bee.Drone()

drone.on("double", function (request, response) {
  let x = request.data
  return response.send(x * 2)
})
```

Now, everything should work!

We can also add multiple drones if we want to run many operations in "parallel." Of course, it's probably not really parallel. I don't know what's going on at a low level, but it's probably time-sliced or something to appear parallel. In any case, we can do:

```js
queen.addDrones("path/to/worker.js", 10)
```

Now the result of our commands will be an array of values rather than a single value (i.e., a single result from each drone).

To shut everything down, call:

```js
queen.destroy()
```

This terminates the queen and all workers such that none of them can be used again.

# API

## `Bee.Queen(path=undefined, n=1)` (constructor)

Creates a new `Queen` instance. If a `path` to a web worker file is provided, then `n` drones will be created automatically using the `addDrone` method; otherwise, no drones will be created.

## `queen.addDrone(path)`

Creates a new drone given a `path` to a web worker file and adds it to the `hive`.

## `queen.addDrones(path, n)`

Creates `n` new drones given a `path` to a webworker file and adds them to the `hive`.

## `queen.on(signal, callback)`

Causes the queen to listen for `signal` and invoke the `callback` function when she hears it. The function must accept `request` and `response` parameters and must call the `response.send` method when finished. The `on` method returns an unsubscribe function that removes the `callback` from the list of functions invoked by the queen when she hears `signal`. For example:

```js
const queen = new Bee.Queen("worker.js")

const unsub = queen.on("one-time-event", (request, response) => {
  unsub() // stop listening for "one-time-event"
  const result = someFunctionOf(request.data)
  return response.send(result)
})
```
