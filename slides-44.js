const toUrl = (section, page) =>
  `https://example.com/${section}/${page}`

const slugify = string =>
  string.toLowerCase().replace(' ', '-')

const people = [
  { firstName: 'Jane', lastName: 'Doe' },
  { firstName: 'John', lastName: 'James' }
]
const urls = []

for (let j = 0; j < people.length; j++) {
  const person = people[j]
  let fullName = person.firstName + ' ' + person.lastName
  fullName = slugify(fullName)

  fullName = toUrl('person', fullName)
  urls.push(fullName)
}

console.log(urls)
