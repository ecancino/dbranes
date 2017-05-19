const { describe, it } = require('mocha')
const assert = require('assert')

const { startsWith } = require('..')

describe('Starts with', () => {
  it('startsWith', () => {
    assert.equal(startsWith('S', 'String'), true)
  })

  it('startsWith unicode char', () => {
    assert.equal(startsWith('é', 'éduardo'), true)
  })

  it('startsWith unicode symbol', () => {
    assert.equal(startsWith('🐑', '🐑s'), true)
  })
})
