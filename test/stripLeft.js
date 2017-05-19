const { describe, it } = require('mocha')
const assert = require('assert')

const { stripLeft } = require('..')

describe('Strip Left', () => {
  it('With empty string', () => {
    assert.equal(stripLeft('', ''), '')
  })

  it('With string', () => {
    assert.equal(stripLeft('Edu', 'Eduardo'), 'ardo')
  })

  it('With unicode', () => {
    assert.equal(stripLeft('🐑', '🐑🐴'), '🐴')
  })
})
