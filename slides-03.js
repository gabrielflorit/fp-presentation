let cities = [
  'Sand Point',
  'Yukon'
]

// We want to turn them into urls, like so:
// const urls = [
//   'https://example.com/city/sand-point',
//   'https://example.com/city/yukon'
// ]

// For each city,
for (let i = 0; i < cities.length; i++) {

  // lowercase,
  cities[i] = cities[i].toLowerCase()

  // replace spaces with hyphens,
  cities[i] = cities[i].replace(' ', '-')

  // and add the url part.
  cities[i] = 'https://example.com/' + cities[i]

}
