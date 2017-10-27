const people = [
  { first: 'Jane', middle: 'Fonda', last: 'Doe' },
  { first: 'John', middle: 'Williams', last: 'Roe' },
  { first: 'John', middle: 'James', last: 'William Henry' }
]

// How do we turn this into:
// const output = [
//   'jane-fonda-doe',
//   'john-williams-roe',
//   'john-james-william-henry'
// ]

let slugs = []

const slugify = function (string) {
  const slug = string.replace(/ /g, '-').toLowerCase()
  return slug
}

for (let i = 0; i < people.length; i++) {
  const person = people[i]
  const fullName = person.first + ' ' + person.middle + ' ' + person.last
  const slug = slugify(fullName)
  slugs.push(slug)
}

// What do we want to do?
// - slugify the full name of a person

// for (let i = 0; i < people.length; i++) {
//   const person = people[i]
  const fullName = person.first + ' ' + person.middle + ' ' + person.last
  const slug = slugify(fullName)
  // slugs.push(slug)
// }

const cities = ['Anchorage', 'Sand Point']

slugs = []

for (let j = 0; j < cities.length; j++) {
  const city = cities[j]
  const slug = slugify(city)
  slugs.push(slug)
}

console.log(JSON.stringify(slugs, null, 2))
