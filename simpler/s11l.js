// Here's an array of integers.
const integers = [1, 2, 3]

const double = x => x + x
const square = x => x * x

// Do we really need the doubleAndSquare function?
// Maybe we can do that inside map directly.

const doubleAndSquare = function(integer) {
  const doubled = double(integer)
  const squared = square(doubled)
  return squared
}

const result = integers.map(function(integer) {
  const output = doubleAndSquare(integer)
  return output
})
