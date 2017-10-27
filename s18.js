// Here's an array of integers.
const integers = [1, 2, 3]

const double = x => x + x
const square = x => x * x

// Could we write a function that does the doubling and squaring together?
// Yep - here it is:

const doubleAndSquare = function(integer) {
  const doubled = double(integer)
  const squared = square(doubled)
  return squared
}

const result = []
for (let i = 0; i < integers.length; i++) {
  const integer = integers[i]
  const doubled = double(integer)
  const squared = square(doubled)
  result.push(squared)
}
