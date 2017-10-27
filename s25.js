// Here's an array of integers.
const integers = [1, 2, 3]

const double = x => x + x
const square = x => x * x

// Let's get rid of the for loop - there, much better!
// We're going to focus on map for a bit.

const doubleAndSquare = function(integer) {
  const doubled = double(integer)
  const squared = square(doubled)
  return squared
}

const result = integers.map(function(integer) {
  const output = doubleAndSquare(integer)
  return output
})
