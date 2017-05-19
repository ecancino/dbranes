const { describe, it } = require('mocha')
const assert = require('assert')

const { fromQuery } = require('..')

describe('From Query String', () => {
  it('With empty string', () => {
    assert.deepEqual(fromQuery(''), {})
  })

  it('With unicode', () => {
    assert.deepEqual(
      fromQuery('?firstname=Eduardo%F0%9F%90%91&lastname=Cancino%20Z%C3%A1rate&age=39&numbers=1&numbers=2&numbers=3'),
      { firstname: 'Eduardo🐑', lastname: 'Cancino Zárate', age: '39', numbers: [ '1', '2', '3' ] }
    )
  })
})
