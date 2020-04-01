/**
 *  Letter case conversion functions
 *  [Letter case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles)
 *
 *  Converts only letter case-separated or hyphen-delimited strings
 */

/**
 *  Converts hyphen-delimited `string` to camel case
 *
 *  @example
 *  'foo-bar' => 'fooBar'
 *  'foo--bar' => 'fooBar'
 *
 *  @param {string} string
 */
function toCamelCase(string) {
  return string.replace(/(-+)([a-z])/g, ($0, $1, $2) => $2.toUpperCase())
}

/**
 *  Converts hyphen-delimited `string` to pascal case (aka upper camel case)
 *
 *  @example
 *  'foo-bar' => 'FooBar'
 *  'foo--bar' => 'FooBar'
 *
 *  @param {string} string
 */
function toPascalCase(string) {
  return toCamelCase(string.replace(/^[a-z]/, $0 => $0.toUpperCase()))
}

export { toCamelCase, toPascalCase }
