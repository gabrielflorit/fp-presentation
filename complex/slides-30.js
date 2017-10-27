const slugify = string =>
  string
    .toLowerCase()
    .replace(' ', '-')

const cities = ['Sand Point', 'Yukon']
const urls = []

for (let i = 0; i < cities.length; i++) {
  let city = cities[i]

  // slugify
  city = slugify(city)


  city = 'https://example.com/city/' + city
  urls.push(city)
}
