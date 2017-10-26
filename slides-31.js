const slugify = string =>
  string
    .toLowerCase()
    .replace(' ', '-')

const cities = ['Sand Point', 'Yukon']
let urls = []

for (let i = 0; i < cities.length; i++) {
  let city = cities[i]
  city = slugify(city)

  city = 'https://example.com/city/' + city
  urls.push(city)
}

console.log(urls)
