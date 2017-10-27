// Benefits:

// - not mutating state means less bugs
//   - you can expect the function to always behave the same way

// - pure functions are easy to test and easy to read
//   - easy to test because there is no state to setup
//   - easy to read because they only do one thing

// - pure functions can be composed easily

// example: let's double THEN square:
const result = integers
  .map(double)
  .map(square)
