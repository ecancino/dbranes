const chars = require('chars')
const { compose, curry, head, tail, toUpper, toLower, concat, flip, slice, split,
  converge, repeat, join, length, identity, useWith, ifElse, always, map, __,
  divide, partial, subtract, reverse, replace, when, is, of, addIndex, toPairs,
  pair, reduce, flatten, prop, lensProp, set, over, defaultTo, append, adjust
} = require('ramda')
const { round } = Math

const capitalize = converge(concat, [compose(toUpper, head), compose(toLower, tail)])

const half = divide(__, 2)
const middle = compose(round, half, length)
const lengthMinus = useWith(subtract, [ identity, length ])
const repeatChar = (ch, n) => compose(repeat(defaultTo(' ', ch)), lengthMinus(n))
const rightPad = curry((ch, n, str) => compose(concat(str), join(''), repeatChar(ch, n))(str))
const leftPad = curry((ch, n, str) => compose(join(''), append(str), repeatChar(ch, n))(str))
const adjustMiddle = (str) => converge(partial(adjust, [ always(str) ]), [ middle, identity ])
const pad = curry((ch, n, str) => compose(join(''), adjustMiddle(str), repeatChar(ch, n + 1))(str))

const startsWith = curry((q, str) => str.startsWith(q))
const endsWith = curry((q, str) => str.endsWith(q))
const reverseu = compose(join(''), reverse, chars)

const sliceLength = compose(slice, length)
const subtractLengths = useWith(subtract, [ length, length ])
const stripl = curry((q, str) => when(startsWith(q), converge(sliceLength(q), [ length, identity ]))(str))
const stripr = curry((q, str) => when(endsWith(q), slice(0, subtractLengths(q, str)))(str))
const strip = curry((q, str) => compose(stripl(q), stripr(q))(str))

const wordSeparators = /[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\\/:<=>?@\\[\]^_`{|}~]+/
const capitalizeTail = (word, i) => (i > 0) ? capitalize(word) : word
const camelCase = compose(join(''), addIndex(map)(capitalizeTail), split(wordSeparators), toLower)

const arrayQuery = ([k, v]) => when(is(Array), join(`&${k}=`))(v)
const toQuery = compose(encodeURI, concat('?'), join('&'), map(join('=')), map(([k, v]) => pair(k, arrayQuery([k, v]))), toPairs)

const setKey = (k, v) => set(lensProp(k), v)
const overKey = (k, f) => over(lensProp(k), f)
const concatKey = (a, k, v) => compose(flatten, concat([a[k]]), of, always(v))
const repeatedKeys = curry((a, [k, v]) => ifElse(prop(k), overKey(k, concatKey(a, k, v)), setKey(k, v))(a))
const fromQuery = compose(reduce(repeatedKeys, {}), map(split('=')), split('&'), tail, decodeURI)

const concatAll = (...s) => reduce(concat, '', [...s])

const isString = is(String)

module.exports = {
  toUpper,
  toLower,
  concat: concatAll,
  capitalize,
  leftPad,
  pad,
  rightPad,
  prefix: concat,
  suffix: flip(concat),
  startsWith,
  endsWith,
  reverse: reverseu,
  replace,
  stripl,
  stripr,
  strip,
  camelCase,
  toQuery,
  fromQuery,
  isString
}
