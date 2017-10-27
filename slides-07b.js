const cities = ['Sand Point', 'Yukon']



const urls = []

// For all cities,
for (let i = 0; i < cities.length; i++) {

  // get the current city,
  let city = cities[i]

  // lowercase,
  city = city.toLowerCase()

  // replace spaces with hyphens,
  city = city.replace(' ', '-')

  // add the url part,
  city = 'https://example.com/city/' + city

  // and add to the urls array.
  urls.push(city)

}
