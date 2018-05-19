
/**
 * Substitude specified parameters in a string with the corespondings value in the 
 * specfied parameters.
 *
 * E.g. Given the following subject:
 *
 *    "/users/:id"
 *
 * With the following params:
 *
 *    {id: 123}
 *
 * The result is:
 *
 *    "/users/123"
 *
 * @param {String} A string representing a source string that contains prefixed parameters.
 * @param {Object} An object to which the key/value pairs are replaced in the subject string.
 * @param {String} A string specifing the prefix used to identify parameters in the subject.
 * @return {String}
 */
export const replaceParams = (subject, params, prefix = ':') => {
  Object.keys(params).map(key => {
    subject = subject.replace(new RegExp(`${prefix}${key}`, 'g'), params[key]);
  });

  return subject;
}

/**
 * Takes an object with key/value pairs and returns an array containing the key/value pair
 * concatenated by the specified seperator.
 *
 * E.g. Given the following params:
 *
 *    {foo: 123, bar: 'xyz'}
 *
 * The result is:
 *
 *    ['foo=123', 'bar=xyz']
 *
 * @param {Object} An object containing the key/value pairs.
 * @param {String} An optional seperator character.
 * @return {Array}
 */
export const toQueryParams = (params, seperator = '=') => {
  const query = [];

  Object.keys(params).map(key => {
    if (params[key] !== undefined) {
      query.push(`${key}${seperator}${params[key]}`)
    }
  });

  return query;
}
