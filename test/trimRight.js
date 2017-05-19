const { describe, it } = require('mocha')
const assert = require('assert')

const { trimRight } = require('..')

describe('Trim Right', () => {
  it('With empty string', () => {
    assert.equal(trimRight('', ''), '')
  })

  it('With string', () => {
    assert.equal(trimRight('      Eduardo   '), '      Eduardo')
  })

  it('With unicode', () => {
    assert.equal(trimRight('  🐑 🐴  '), '  🐑 🐴')
  })
})
