const cities = ['Sand Point', 'Yukon']
let urls = []

for (let i = 0; i < cities.length; i++) {
  let city = cities[i]
  city = city.toLowerCase()
  city = city.replace(' ', '-')
  city = 'https://example.com/city/' + city
  urls.push(city)
}

//---------------------------------------------//

const people = [
  { firstName: 'Jane', lastName: 'Doe' },
  { firstName: 'John', lastName: 'James' }
]

// We want to turn them into urls, like so:
// [
//   'https://example.com/person/jane-doe',
//   'https://example.com/person/john-james'
// ]

// Clear out the urls array.
urls = []

// For all people,
for (let j = 0; j < people.length; j++) {

  // get the current person,
  const person = people[j]

  // create full name,
  let fullName = person.firstName + ' ' + person.lastName

  // lowercase,
  fullName = fullName.toLowerCase()

  // replace spaces with hyphens,
  fullName = fullName.replace(' ', '-')

  // add the url part,
  fullName = 'https://example.com/person/' + fullName

  // and add to the urls array.
  urls.push(fullName)

}
