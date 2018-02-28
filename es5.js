'use strict';

/**
 * Ship IMO number validator
 *  - spec from Wikipedia (https://en.wikipedia.org/wiki/IMO_number)
 *
 * @param  {String}  imoStr - IMO Number string
 * @return {Boolean} isValid
 */

module.exports.validate = function validateImoNumber(imoStr) {
  if (typeof imoStr !== 'string') return false;

  var str = imoStr.toUpperCase().split(' ').join('');

  if (str.length !== 10) return false;
  if (str.indexOf('IMO') !== 0) return false;

  var last = parseInt(str.slice(-1), 10);
  if (isNaN(last)) return false;

  var check = [].map.call(str.slice(3, 9), function (d) {
    return parseInt(d, 10);
  }).filter(function (d) {
    return !isNaN(d);
  }).reduce(function (c, d, i) {
    return c + (7 - i) * d;
  }, 0);

  return last === parseInt(check.toString().slice(-1), 10);
};
