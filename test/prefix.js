const { describe, it } = require('mocha')
const assert = require('assert')

const { prefix } = require('..')

describe('Prefix', () => {
  it('Add prefix', () => {
    assert.equal(prefix('001-', 'eduardo'), '001-eduardo')
  })

  it('Add unicode prefix', () => {
    assert.equal(prefix('🐑-', 'eduardo'), '🐑-eduardo')
  })
})
