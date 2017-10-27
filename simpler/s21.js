// Here's an array of integers.
const integers = [1, 2, 3]

const double = x => x + x
const square = x => x * x

// So clean!

const result = integers
  .map(double)
  .map(square)

console.log(result)
