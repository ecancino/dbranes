const { describe, it } = require('mocha')
const assert = require('assert')

const { camelCase } = require('..')

describe('Camel Case', () => {
  it('With empty string', () => {
    assert.equal(camelCase('', ''), '')
  })

  it('With string', () => {
    assert.equal(camelCase('Foo Bar'), 'fooBar')
    assert.equal(camelCase('--foo-bar--'), 'fooBar')
    assert.equal(camelCase('__FOO_BAR__'), 'fooBar')
  })

  it('With unicode', () => {
    assert.equal(camelCase('🚀🌑🚀'), '🚀🌑🚀')
  })
})
