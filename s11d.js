// Here's an array of integers.
const integers = [1, 2, 3]

const double = x => x + x
const square = x => x * x

// Alright, let's try this again. Let's double AND square the integers.
// Could we write a function that does the doubling and squaring together?

const result = []
for (let i = 0; i < integers.length; i++) {
  const integer = integers[i]
  const doubled = double(integer)
  const squared = square(doubled)
  result.push(squared)
}

// Yep - here it is:
const doubleAndSquare = function(integer) {
  const doubled = double(integer)
  const squared = square(doubled)
  return squared
}
