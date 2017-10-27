// FP functions do not perform mutation.

const integers = [1, 2, 3]

// This function does not mutate.
const squared = integers.map(function(integer) {
  return integer * integer
})

// This one does.
const doubled = []
integers.forEach(function(integer) {
  doubled.push(integer + integer)
})

// Don't do that! Do this instead:
const doubled = integers.map(function(integer) {
  return integer + integer
})

// Or using the latest JS:
const doubled = integers.map(integer => integer + integer)
