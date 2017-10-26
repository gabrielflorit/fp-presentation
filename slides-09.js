const cities = ['Sand Point', 'Yukon']
let urls = []

for (let i = 0; i < cities.length; i++) {
  let city = cities[i]
  city = city.toLowerCase()
  city = city.replace(' ', '-')
  city = 'https://example.com/city/' + city
  urls.push(city)
}
