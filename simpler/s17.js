// Here's an array of integers.
const integers = [1, 2, 3]

const double = x => x + x
const square = x => x * x

// And let's return the output of the double/square functions
// directly - no need to create a temporary variable.

const result = integers
  .map(function(integer) {
    return double(integer)
  })
  .map(function(integer) {
    return square(integer)
  })
