const { describe, it } = require('mocha')
const assert = require('assert')

const { endsWith } = require('..')

describe('Ends with', () => {
  it('endsWith', () => {
    assert.equal(endsWith('g', 'String'), true)
  })

  it('endsWith unicode char', () => {
    assert.equal(endsWith('ø', 'eduardø'), true)
  })

  it('endsWith unicode symbol', () => {
    assert.equal(endsWith('🐑', 'Jordan is the 🐑'), true)
  })
})
