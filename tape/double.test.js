// test using tape module
const test = require('tape')

// double function
const double = x => x * 2

// test(component aspect is being tested>)
test('Double function outputs input', assert => {
  const actual = double(2)
  const expected = 4

  assert.equal(actual, expected)
  assert.end()
})

// results of test
// TAP version 13
// # Double function outputs input
// ok 1 should be equal

// 1..1
// # tests 1
// # pass  1

// # ok
