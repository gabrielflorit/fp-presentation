const toUrl = (section, page) =>
  `https://example.com/${section}/${page}`

const slugify = string =>
  string.toLowerCase().replace(' ', '-')

const cities = ['Sand Point', 'Yukon']
let urls = []

for (let i = 0; i < cities.length; i++) {
  let city = cities[i]
  city = slugify(city)
  city = toUrl('city', city)
  urls.push(city)
}

//---------------------------------------------//

const people = [
  { firstName: 'Jane', lastName: 'Doe' },
  { firstName: 'John', lastName: 'James' }
]
urls = []

for (let j = 0; j < people.length; j++) {
  const person = people[j]
  let fullName = person.firstName + ' ' + person.lastName

  fullName = slugify(fullName)
  fullName = 'https://example.com/person/' + fullName
  urls.push(fullName)
}

console.log(urls)
