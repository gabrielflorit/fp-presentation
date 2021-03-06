// Here's an array of integers.
const integers = [1, 2, 3]

const double = x => x + x
const square = x => x * x

// Almost done. Let's collapse to one line.


const result = integers
  .map(integer => double(integer))
  .map(integer => square(integer))
