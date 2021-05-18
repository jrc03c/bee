<p align="center">
  <img src="logo.png" width="256">
</p>

# Intro

**Bee.js** is a helper tool for working with Web Workers. It uses an [Express](http://expressjs.com/)-like syntax.

# Installation

```bash
npm install --save https://gitlab.com/jrc03c/bee.js
```

# Usage

First, include the main bee.js script in your web page:

```html
<script src="path/to/bee.js"></script>
```

Then create a "queen" bee, which will be used to send commands to the drone(s). Then add a drone using the path to the relevant Web Worker file.

```js
const queen = new Bee.Queen()
queen.addDrone("path/to/worker.js")
```

Then, issue commands:

```js
queen.command("double", 32).then(result => {
  console.log("The result is:", result)
})
```

Of course, nothing will happen yet because we haven't actually defined what's in `worker.js`! So, let's do that now. In `worker.js`, do:

```js
importScripts("path/to/bee.js")
const drone = new Bee.Drone()

drone.on("double", function(request, response){
  let x = request.data
  return response.send(x * 2)
})
```

Now, everything should work! Check out the [demo](./demo) to see more stuff!

We can also add multiple drones if we want to run many operations in "parallel." Of course, it's probably not really parallel. I don't know what's going on at a low level, but it's probably time-sliced or something to appear parallel. In any case, we can do:

```js
queen.addDrones("path/to/worker.js", 10)
```

Now the result of our commands will be an array of values rather than a single value (i.e., a single result from each drone).

If things get out of control and we need to stop all of the workers at once, we can do:

```js
queen.stop() // or queen.terminate()
```

This stops all of the drones at once but leaves them in the hive. However, if we want to be done with the queen completely and clean up after ourselves, we can do:

```js
queen.kill()
```

Which will stop all drones and remove them from the hive.
