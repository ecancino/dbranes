const { describe, it } = require('mocha')
const assert = require('assert')

const { capitalize } = require('..')

describe('Capitalize', () => {
  it('From lowercase', () => {
    assert.equal(capitalize('string'), 'String')
  })

  it('From uppercase', () => {
    assert.equal(capitalize('STRING'), 'String')
  })

  it('From capitalized', () => {
    assert.equal(capitalize('String'), 'String')
  })

  it('From unicode', () => {
    assert.equal(capitalize('🐑🐑🐑'), '🐑🐑🐑')
  })
})
