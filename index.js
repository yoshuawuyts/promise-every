const Promise = require('any-promise')
const assert= require('assert')

module.exports = every

// Apply a function to all values.
// @param {Mixed|Mixed[]} val
// @param {Mixed} ctx
// @return {Function}
function every(fn, ctx) {
  assert.equal(typeof fn, 'function')
  return function(val) {
    val = Array.isArray(val) ? val : [val]
    return Promise.resolve(val.every(fn, ctx))
  }
}
