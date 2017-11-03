// unit test framework
const test = (component, fn, count = 1) => {
  console.log(`${component}`)

  fn({
    equal (actual, expected, msg) {
      const passMsg = `ok ${count} - ${msg}`
      const failMsg = `not ok ${count} - ${msg}\n  expected:\n    ${expected}\n  actual:\n    ${actual}`
  
      if (actual === expected) {
        console.log(passMsg)
      } else {
        console.log(failMsg)
      }
    }
  })

  count++
}

module.exports = test