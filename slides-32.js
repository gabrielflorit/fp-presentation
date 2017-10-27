// Let's make a toUrl function.

// It will take two strings: section (e.g. city) and page (e.g. new-york)
const toUrl = function(section, page) {

  // and combine them to create a url.
  const url = 'https://example.com/' + section + '/' + page

  return url

}
