Array.prototype.remove = function (x) {
  let index = this.indexOf(x)

  while (index > -1) {
    this.splice(index, 1)
    index = this.indexOf(x)
  }

  return this
}
