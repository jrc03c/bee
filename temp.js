const {
  DataFrame,
  random,
  range,
  normal,
  seed,
  diff,
  isEqual,
} = require("@jrc03c/js-math-tools")

const { stringify, parse } = require("@jrc03c/js-text-tools")
const makeKey = require("@jrc03c/make-key")

seed(12345)

let df1 = new DataFrame({
  ints: range(0, 10).map(() => Math.floor(random() * 10 - 5)),
  floats: normal(10),
  strings: range(0, 10).map(() => makeKey(8)),
  bools: range(0, 10).map(() => (random() < 0.5 ? true : false)),
  nans: range(0, 10).map(() =>
    random() < 0.33 ? Infinity : random() < 0.5 ? -Infinity : NaN
  ),
  nones: range(0, 10).map(() => (random() < 0.5 ? undefined : null)),
  symbols: range(0, 10).map(() => Symbol.for(makeKey(8))),
  dates: range(0, 10).map(() => new Date(Math.round(random() * 999999999))),
})

df1.print()

const temp = parse(stringify(df1))
const df2 = new DataFrame(temp.values)
df2.columns = temp.columns
df2.index = temp.index
df2.print()

df1.values.forEach((row, i) => {
  if (!isEqual(row, df2.values[i])) {
    console.log(row)
    console.log(df2.values[i])
    console.log("-------------------")
  }
})
