const { describe, it } = require('mocha')
const assert = require('assert')

const { trimLeft } = require('..')

describe('Trim Left', () => {
  it('With empty string', () => {
    assert.equal(trimLeft('', ''), '')
  })

  it('With string', () => {
    assert.equal(trimLeft('      Eduardo   '), 'Eduardo   ')
  })

  it('With unicode', () => {
    assert.equal(trimLeft('  🐑 🐴  '), '🐑 🐴  ')
  })
})
