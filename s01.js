// Here's an array of integers.
const integers = [1, 2, 3]

// Let's double them.

// Easy!
const result = []

for (let i = 0; i < integers.length; i++) {

  const integer = integers[i]

  const doubled = integer + integer

  result.push(doubled)

}

console.log(result)
