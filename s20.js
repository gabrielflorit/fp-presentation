// Here's an array of integers.
const integers = [1, 2, 3]

const double = x => x + x
const square = x => x * x

// Notice how most of the for loop code is not about doubling and squaring.
// It's about traversing the array, taking out an integer, etc.

const doubleAndSquare = function(integer) {
  const doubled = double(integer)
  const squared = square(doubled)
  return squared
}

const result = []
for (let i = 0; i < integers.length; i++) {
  const output = doubleAndSquare(integers[i])
  result.push(output)
}
