// FP functions do not perform mutation.
// Mutation means changing a variable's value.

const integers = [1, 2, 3]

// This function does not mutate.
const squared = integers.map(function(integer) {
  return integer * integer
})

// This one does.
const doubled = []
integers.forEach(function(integer) {
  doubled.push(integer + integer) // this changes the array.
})

console.log(doubled)

// If we call it again, we'll get different results:
integers.forEach(function(integer) {
  doubled.push(integer + integer)
})

console.log(doubled)

// Terrible!
