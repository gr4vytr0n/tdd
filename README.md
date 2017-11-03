# Test-driven Development in JS

This repo contains files related to my study of this [article](https://medium.com/javascript-scene/tdd-the-rite-way-53c9b46f45e3)
-- the words here are just *notes* for my personal use.

Test-driven development cycle
1. Write test
2. Run test (expect FAILURE)
3. Write code
4. Run test again (expect SUCCESS)
5. Refactor code
6. Repeat steps (until test is SUCCESSFULL)

* Sometimes called RED, GREEN REFACTOR

Testing Frameworks
* see vanillatests.js - simple vanilla JS test framework

Types of Tests
* unit tests - test isolated components
* funtional/end-to-end(e2e) & integration tests - tests must be integrated
- tests should not have shared mutable state 

## Writing Good Unit Tests
* write tests first
* uses of unit tests:
  - design aid (write during design phase)
  - feature documentation & knowledge check of developers understanding of features
  - QA/continuous delivery - failure of tests will halt product deployment

Failing tests should read like high quality bug reports:
  1) what is being tested
  2) what it should do
  3) what was output (actual behavior)
  4) what was expecte output (expected behavior)

* what is being tested:
  - what should feature do - describe unit test in a string
  - what component aspect is being tested

* what is the output (expected and actual)
  - assertions - equal() or deepEqual()

* write function code to reproduce actual/expected behaviors
