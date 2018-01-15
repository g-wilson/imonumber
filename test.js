'use strict'

const assert = require('assert')
const imonumber = require('./index')

const expected = [ true, true, false, false, false, false, false, false, false ]
const cases = [
  'IMO 9074729',
  'IMO9074729',
  'sdfsdf',
  '',
  '23425',
  false,
  32134,
  [],
  {},
]

cases.forEach((v, i) => {
  assert.equal(imonumber.validate(v), expected[i], `Failed for case ${v}`)
})
