// unit test framework
const test = (component, fn, count = 1) => {
  console.log(`${component}`)

  fn({
    same (actual, expected, msg) {
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

// function to test
const double = x => x * 2

// test suite
test('double', assert => {
  const msg = 'double() should take a number x and return the product of x and 2'

  // passing test
  const actual = double(4)
  const expected = 8

  assert.same(actual, expected, msg)

  // failing test
  const actual2 = false
  const expected2 = true

  assert.same(actual2, expected2, msg)
})
