// Here's an array of integers.
const integers = [1, 2, 3]

const double = x => x + x
const square = x => x * x

// So much better. Let's rearrange things a bit.


const result = integers
  .map(function(integer) {
    const doubled = double(integer)
    const squared = square(doubled)
    return squared
  })
