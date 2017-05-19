const { describe, it } = require('mocha')
const assert = require('assert')

const { pad } = require('..')

describe('Pad', () => {
  it('With no length', () => {
    assert.equal(pad('-', 0, 'padding'), 'padding')
  })

  it('With no padding string', () => {
    assert.equal(pad('', 8, ''), '')
  })

  it('With string', () => {
    assert.equal(pad('-', 10, 'KEEP'), '---KEEP---')
  })

  it('With unicode', () => {
    assert.equal(pad('🚀', 5, '🌑'), '🚀🌑🚀🚀')
  })
})
