// Here's an array of integers.
const integers = [1, 2, 3]

const double = x => x + x
const square = x => x * x

// And because we're using arrow notation,
// we get implicit returns! Yay!

const result = integers
  .map(integer =>
    double(integer)
  )
  .map(integer =>
    square(integer)
  )
