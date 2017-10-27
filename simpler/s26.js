// FP functions do not perform mutation.
// Mutation means changing a variable's value.

const integers = [1, 2, 3]

// This function does not mutate.
const squared = integers.map(function(integer) {
  return integer * integer
})
