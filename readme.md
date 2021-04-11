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

Then create a "queen" bee, which will be used to send commands to the drone(s). You'll have to pass the path to the main Web Worker file to the constructor.

```js
const queen = new Bee.Queen("worker.js")
```

Then, issue commands:

```js
queen.command("double", 32).then(result => {
  console.log("The result is:", result)
})
```

Of course, nothing will happen yet because we haven't created any drones! So, let's do that now. In `worker.js`, do:

```js
importScripts("path/to/bee.js")
const drone = new Bee.Drone()

drone.on("double", function(request, response){
  let x = request.data
  return response.send(x * 2)
})
```

Now, everything should work! Check out the [demo](./demo) to see it in action!
