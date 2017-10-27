// Here's an array of integers.
const integers = [1, 2, 3]

const double = x => x + x
const square = x => x * x

// Alright, let's try this again. Let's double AND square the integers.
// Let's use our new function inside the for loop.

const result = []
for (let i = 0; i < integers.length; i++) {
  const output = doubleAndSquare(integers[i])
  result.push(output)
}

const doubleAndSquare = function(integer) {
  const doubled = double(integer)
  const squared = square(doubled)
  return squared
}
