// FP functions are pure:
// given an input, they will always return the same output.

// This function is pure.
const square = function(x) {
  return x * x
}

// This one is not.
let counter = 0
const increment = function() {
  counter = counter + 1
  return counter
}

// Notice how each call returns a different value! Terrible.
console.log(increment())
console.log(increment())
console.log(increment())

