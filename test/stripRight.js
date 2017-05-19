const { describe, it } = require('mocha')
const assert = require('assert')

const { stripRight } = require('..')

describe('Strip Right', () => {
  it('With empty string', () => {
    assert.equal(stripRight('', ''), '')
  })

  it('With string', () => {
    assert.equal(stripRight('rdo', 'Eduardo'), 'Edua')
  })

  it('With unicode', () => {
    assert.equal(stripRight('🐑', '🐴🐑'), '🐴')
  })
})
