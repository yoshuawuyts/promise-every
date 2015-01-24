const test    = require('tape')
const every   = require('./')
const Promise = require('native-or-bluebird')

test('promise-every should assert input types', function(t) {
  t.plan(1)
  t.throws(every.bind(null, 123))
})

test('promise-every should be correct', function(t) {
  t.plan(1)
  const res = Promise.resolve([1, 2, 3])
    .then(every(everyFn))
    .then(checkFn)
    .catch(handleErr)

  function everyFn(val) {
    return typeof val == 'number'
  }

  function checkFn(val) {
    t.equal(val, true)
  }

  function handleErr() {
    t.fail('catch')
  }
})
