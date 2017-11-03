const test = require('./test.js')
// double function
const double = x => x * 2

// test(component aspect is being tested>)
test('Double function outputs double input', assert => {
  const actual = double(2)
  const expected = 4

  assert.equal(actual, expected, 'double() returns double parameter passed to function')
})

// results of test
/*
  Double function outputs double input
  ok 1 - double() returns double parameter passed to function
*/