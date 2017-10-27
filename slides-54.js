// Let's square an array of numbers.
const numbers = [1, 2, 3]



// Using a for loop:
const squares = []

for (let j = 0; j < numbers.length; j++) {
  const number = numbers[i]
  squares.push(number * number)
}



// Using map:
const squares = numbers.map(function(number) {
  return number * number
})



// Using map (and the latest JS):
const squares = numbers.map(number => number * number)
