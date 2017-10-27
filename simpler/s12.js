// Here's an array of integers.
const integers = [1, 2, 3]

const double = x => x + x
const square = x => x * x

// Alright, let's try this again. Let's double AND square the integers.
// Ugh! for loops are so noisy! Let's do the same thing with map.

const result = []
for (let i = 0; i < integers.length; i++) {
  const integer = integers[i]
  const doubled = double(integer)
  const squared = square(doubled)
  result.push(squared)
}

console.log(result)
