# slide 1
- start with an array of cities
- use for loop to create the slug
- all good

`
  const slugify = function (string) {
    const slug = string.replace(/ /g, '-').toLowerCase()
    return slug
  }

# slide 2
- now introduce an array of people
- use for loop to create the full name, and then the slug
- refactor slugify code into a function
- 
