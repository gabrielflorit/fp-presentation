// Let's make a slugify function.

// It will take a string,
const slugify = function(string) {

  const newString = string
    // lowercase,
    .toLowerCase()
    // replace spaces with hyphens,
    .replace(' ', '-')

  // and return the new string.
  return newString

}
