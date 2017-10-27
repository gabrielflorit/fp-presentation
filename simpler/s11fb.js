// Here's an array of integers.
const integers = [1, 2, 3]

const double = x => x + x
const square = x => x * x

// Actually - what would happen if only keep the bit that matters?
// Watch:

const result = []

  const output = doubleAndSquare(integers[i])



const doubleAndSquare = function(integer) {
  const doubled = double(integer)
  const squared = square(doubled)
  return squared
}
