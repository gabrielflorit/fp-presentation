const people = [
  { firstName: 'Jane', lastName: 'Doe' },
  { firstName: 'John', lastName: 'James' }
]
const urls = []

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


  // and add to the urls array.


}
