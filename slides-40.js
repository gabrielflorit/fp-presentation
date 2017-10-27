const toUrl = (section, page) =>
  `https://example.com/${section}/${page}`

const slugify = string =>
  string.toLowerCase().replace(' ', '-')

const cities = ['Sand Point', 'Yukon']
const urls = []

for (let i = 0; i < cities.length; i++) {
  let city = cities[i]
  city = slugify(city)
  city = 'https://example.com/city/' + city
  urls.push(city)
}

console.log(urls)