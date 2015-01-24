# promise-every
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

Test each value in an array with [every][mdn] and return a [Promise][promise].

## Installation
```bash
$ npm install promise-every
```

## Usage
```js
const every = require('promise-every')

Promise.resolve(['bin', 'baz', 123])
  .then(every((val) => 'string' == typeof val))
// => false
```

## Why?
This module is basically equivalent to [`bluebird.every`][bluebird], but it's
handy to have the one function you need instead of a kitchen sink. Modularity!
Especially handy if you're serving to the browser and need to reduce your
javascript bundle size.

Works great in the browser with
[browserify](http://github.com/substack/node-browserify)!

## See Also
- [promise-filter](https://github.com/yoshuawuyts/promise-filter)
- [promise-forEach](https://github.com/yoshuawuyts/promise-forEach)
- [promise-map](https://github.com/yoshuawuyts/promise-map)
- [promise-reduce](https://github.com/yoshuawuyts/promise-reduce)
- [promise-some](https://github.com/yoshuawuyts/promise-some)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/promise-every.svg?style=flat-square
[npm-url]: https://npmjs.org/package/promise-every
[travis-image]: https://img.shields.io/travis/yoshuawuyts/promise-every.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/promise-every
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/promise-every.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/promise-every?branch=master
[downloads-image]: http://img.shields.io/npm/dm/promise-every.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/promise-every

[mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[bluebird]: https://github.com/petkaantonov/bluebird/blob/master/API.md#everyfunction-everyper--object-options---promise
