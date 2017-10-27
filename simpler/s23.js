// FP functions are pure:
// given an input, they will always return the same output.

// This function is pure.
const square = function(x) {
  return x * x
}

// No matter how many times we call it, we get the same output.
console.log(square(3))
console.log(square(3))
console.log(square(3))
