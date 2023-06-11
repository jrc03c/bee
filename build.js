const { execSync } = require("child_process")
const process = require("process")
const watch = require("@jrc03c/watch")

function rebuild() {
  console.log("---")
  console.log(`Rebuilding... (${new Date().toLocaleString()})`)

  const commands = [
    `npx esbuild src/index.js --bundle --outfile=dist/bee.min.js --minify`,
    `npx esbuild src/index.js --bundle --outfile=dist/bee.js`,
    `npx esbuild src/index.js --bundle --outfile=tests/bee.js`,
  ]

  commands.forEach(command => {
    execSync(command, { encoding: "utf8" })
  })

  console.log(`\nRebuilt! (${new Date().toLocaleString()})\n`)
}

if (process.argv.indexOf("--watch") > -1) {
  watch({
    target: "src",
    scanRate: 1000,
    created: rebuild,
    modified: rebuild,
    deleted: rebuild,
  })
}

rebuild()
