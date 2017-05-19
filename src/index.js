const chars = require('chars')
const { compose, curry, curryN, head, tail, toUpper, toLower, concat, flip, slice,
  split, converge, repeat, join, length, identity, useWith, ifElse, always, map, __,
  filter, divide, subtract, reverse, replace, when, is, toPairs, pair, trim, reduce,
  flatten, prop, lensProp, set, over, defaultTo, append, take, takeLast, equals,
  toString, of
} = require('ramda')
const deburr = require('lodash/deburr')
const { floor, ceil, max } = Math

const concatAll = (...s) => reduce(concat, '', [...s])

const capitalize = converge(concat, [compose(toUpper, head), compose(toLower, tail)])

const size = compose(length, deburr)
const half = divide(__, 2)
const lengthMinus = useWith(subtract, [ identity, size ])
const repeatChar = (ch, n) => compose(repeat(defaultTo(' ', ch)), lengthMinus(n))
const rightPad = curry((ch, n, str) => compose(concat(str), join(''), repeatChar(ch, n))(str))
const leftPad = curry((ch, n, str) => compose(join(''), append(str), repeatChar(ch, n))(str))

const overZero = curryN(2, max)(0)
const mid = compose(half, overZero, subtract)
const repeatCh = (ch, rounder) => compose(join(''), repeat(ch), rounder, useWith(mid, [ identity, size ]))
const pad = (ch, n, str) => curryN(3, concatAll)(repeatCh(ch, floor)(n, str), str, repeatCh(ch, ceil)(n, str))

const startsWith = curry((q, str) => equals(take(length(q), str), q))
const endsWith = curry((q, str) => equals(takeLast(length(q), str), q))
const reverseu = compose(join(''), reverse, chars)

const sliceLength = compose(slice, length)
const subtractLengths = useWith(subtract, [ length, length ])
const stripLeft = curry((q, str) => when(startsWith(q), converge(sliceLength(q), [ length, identity ]))(str))
const stripRight = curry((q, str) => when(endsWith(q), take(subtractLengths(str, q)))(str))
const strip = curry((q, str) => compose(stripRight(q), stripLeft(q))(str))

const wordSeparators = /[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\\/:<=>?@\\[\]^_`{|}~]+/
const words = split(wordSeparators)

const capitalizeAll = map(capitalize)
const headToLower = compose(of, toLower, defaultTo(''), head)
const camelList = converge(concat, [headToLower, tail])
const removeEmpty = filter(Boolean)
const camelCase = compose(join(''), camelList, removeEmpty, capitalizeAll, words)
const kebabCase = compose(join('-'), removeEmpty, words, toLower)
const slug = compose(kebabCase, deburr, trim)

const arrayQuery = ([k, v]) => when(is(Array), join(`&${k}=`))(v)
const createPairs = ([k, v]) => pair(k, arrayQuery([k, v]))
const toQuery = compose(encodeURI, concat('?'), join('&'), map(join('=')), map(createPairs), toPairs)

const setKey = (k, v) => set(lensProp(k), v)
const overKey = (k, f) => over(lensProp(k), f)
const concatKey = (a, k, v) => compose(flatten, concat([a[k]]), of, always(v))
const repeatedKeys = curry((a, [k, v]) => ifElse(prop(k), overKey(k, concatKey(a, k, v)), setKey(k, v))(a))
const fromQuery = compose(reduce(repeatedKeys, {}), map(split('=')), filter(identity), split('&'), tail, decodeURI, trim)

const isString = is(String)

const trimLeft = replace(/^[\s\uFEFF\u00A0]+/, '')
const trimRight = compose(reverseu, trimLeft, reverseu)

module.exports = {
  toString, // ramda
  toUpper, // ramda
  toLower, // ramda
  concat: concatAll,
  capitalize,
  leftPad,
  pad,
  rightPad,
  prefix: concat, // ramda
  suffix: flip(concat), // ramda
  startsWith,
  endsWith,
  reverse: reverseu,
  replace, // ramda
  stripLeft,
  strip,
  stripRight,
  trimLeft,
  trim, // ramda
  trimRight,
  camelCase,
  kebabCase,
  deburr, // lodash
  slug,
  toQuery,
  fromQuery,
  isString, // ramda
  chars, // chars
  words
}
