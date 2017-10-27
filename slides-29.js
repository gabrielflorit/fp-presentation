const slugify = string =>
  string
    .toLowerCase()
    .replace(' ', '-')

const cities = ['Sand Point', 'Yukon']
const urls = []

for (let i = 0; i < cities.length; i++) {
  let city = cities[i]

  // slugify
  city = city.toLowerCase()
  city = city.replace(' ', '-')

  city = 'https://example.com/city/' + city
  urls.push(city)
}
