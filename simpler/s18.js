// Here's an array of integers.
const integers = [1, 2, 3]

const double = x => x + x
const square = x => x * x

// Now let's put each double/square in its own function.

const result = integers
  .map(integer => {
    return double(integer)
  })
  .map(integer => {
    return square(integer)
  })

console.log(result)
