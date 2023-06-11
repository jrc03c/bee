const Bee = {
  Drone: require("./drone"),
  Queen: require("./queen"),
}

if (typeof module !== "undefined") {
  module.exports = Bee
}

if (typeof globalThis !== "undefined") {
  // eslint-disable-next-line no-undef
  globalThis.Bee = Bee
}
