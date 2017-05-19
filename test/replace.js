const { describe, it } = require('mocha')
const assert = require('assert')

const { replace } = require('..')

describe('Replace', () => {
  it('Replace single', () => {
    assert.equal(replace('coffee', 'tea', 'I want a some coffee'), 'I want a some tea')
  })

  it('Replace multiple', () => {
    assert.equal(replace('coffee', 'tea', 'I want a some coffee'), 'I want a some tea')
  })

  it('Replace multiple unicode', () => {
    assert.equal(
      replace(/🐳/g, '🐬', 'My friend has a 🐳. I want a 🐳 too'), 'My friend has a 🐬. I want a 🐬 too')
  })
})
