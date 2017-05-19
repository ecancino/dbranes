const { describe, it } = require('mocha')
const assert = require('assert')

const { strip } = require('..')

describe('Strip', () => {
  it('With empty string', () => {
    assert.equal(strip('', ''), '')
  })

  it('With string', () => {
    assert.equal(strip('--', '--KEEP--'), 'KEEP')
  })

  it('With unicode', () => {
    assert.equal(strip('🚀', '🚀🌑🚀'), '🌑')
  })
})
