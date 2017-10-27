



for (let j = 0; j < people.length; j++) {
  const person = people[j]
  let fullName = person.firstName + ' ' + person.lastName
  fullName = slugify(fullName)
  fullName = toUrl('person', fullName)
  urls.push(fullName)
}

people.forEach(function(person) {
  let fullName = person.firstName + ' ' + person.lastName
  fullName = slugify(fullName)
  fullName = toUrl('person', fullName)
  urls.push(fullName)
})



