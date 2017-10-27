// Here's an array of integers.
const integers = [1, 2, 3]

const double = x => x + x
const square = x => x * x

// When it comes to operating on arrays, for loops are the worst!
// Is there a better, more efficient way of doing things?

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

// Yes - map:
const myNewArray = integers.map(function(integer) {
  const output = doubleAndSquare(integer)
  return output
})
