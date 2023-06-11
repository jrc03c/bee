// eslint-disable-next-line no-undef
const { isEqual } = JSMathTools

async function test(desc, fn) {
  const container = document.getElementById("container")
  const el = document.createElement("div")
  el.classList.add("result")
  el.classList.add("running")
  el.innerHTML = `TEST: ${desc}`
  container.appendChild(el)

  try {
    await fn()
    el.classList.add("success")
  } catch (e) {
    const text = e ? e.toString() : ""
    el.innerHTML += `<span class="reason">(${text.toString()})</reason>`
    el.classList.add("error")
  }

  el.classList.remove("running")
}

function expect(v1) {
  return {
    toBe(v2) {
      if (!isEqual(v1, v2)) {
        throw new Error(
          `Expected ${v2} (${typeof v2}) but received ${v1} (${typeof v1})!`
        )
      }
    },

    toBeLessThan(v2) {
      if (v1 >= v2) {
        throw new Error(
          `${v1} is supposed to be less than ${v2}, but it's not!`
        )
      }
    },

    toBeGreaterThan(v2) {
      if (v1 <= v2) {
        throw new Error(
          `${v1} is supposed to be greater than ${v2}, but it's not!`
        )
      }
    },

    toThrow() {
      let threw = false

      try {
        v1()
      } catch (e) {
        threw = true
      }

      if (!threw) {
        throw new Error(
          "The function should've thrown an error, but it didn't!"
        )
      }
    },

    async toThrowAsync() {
      let threw = false

      try {
        await v1()
      } catch (e) {
        threw = true
      }

      if (!threw) {
        throw new Error(
          "The function should've thrown an error, but it didn't!"
        )
      }
    },
  }
}

window.test = test
window.expect = expect
