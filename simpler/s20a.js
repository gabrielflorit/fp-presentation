// Here's an array of integers.
const integers = [1, 2, 3]

const double = x => x + x
const square = x => x * x

// Could we pass the double/square functions to map,
// directly? So we don't have to mention integer?

const result = integers
  .map(integer => double(integer))
  .map(integer => square(integer))
