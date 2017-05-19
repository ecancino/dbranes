const { describe, it } = require('mocha')
const assert = require('assert')

const { toQuery } = require('..')

describe('To Query String', () => {
  it('With undefined', () => {
    assert.equal(toQuery(undefined), '?')
  })

  it('With empty object', () => {
    assert.equal(toQuery({}), '?')
  })

  it('With unicode', () => {
    assert.equal(
      toQuery({ firstname: 'Eduardo🐑', lastname: 'Cancino Zárate', age: 39, numbers: [1, 2, 3] }),
      '?firstname=Eduardo%F0%9F%90%91&lastname=Cancino%20Z%C3%A1rate&age=39&numbers=1&numbers=2&numbers=3'
    )
  })
})
