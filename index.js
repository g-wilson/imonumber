'use strict'

/**
 * Ship IMO number validator
 *  - spec from Wikipedia (https://en.wikipedia.org/wiki/IMO_number)
 *
 * @param  {String}  imoStr - IMO Number string
 * @return {Boolean} isValid
 */
module.exports.validate = function validateImoNumber(imoStr) {
  if (typeof imoStr !== 'string') return false

  const str = imoStr.toUpperCase().split(' ').join('')

  if (str.length !== 10) return false
  if (str.indexOf('IMO') !== 0) return false

  const last = parseInt(str.slice(-1), 10)
  if (isNaN(last)) return false

  const check = [].map.call(str.slice(3, 9), d => parseInt(d, 10))
    .filter(d => !isNaN(d))
    .reduce((c, d, i) => {
      return c + ((7 - i) * d)
    }, 0)

  return last === parseInt(check.toString().slice(-1), 10)
}
