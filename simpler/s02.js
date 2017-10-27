// Here's an array of integers.
const integers = [1, 2, 3]

// Let's double AND square them.

// Also easy!
const result = []

for (let i = 0; i < integers.length; i++) {

  const integer = integers[i]

  const doubled = integer + integer

  const squared = doubled * doubled

  result.push(squared)

}

console.log(result)
