const cities = [
  'Sand Point',
  'Yukon'
]

// We want to turn them into urls, like so:
// [
//   'https://example.com/city/sand-point',
//   'https://example.com/city/yukon'
// ]

let urls = []

// For all cities,
for (let i = 0; i < cities.length; i++) {

  // get the current city,
  let city = cities[i]

  // lowercase,
  city = city.toLowerCase()

  // replace spaces with hyphens,
  city = city.replace(' ', '-')

  // add the url part,


  // and add to the urls array.


}
