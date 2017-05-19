const { describe, it } = require('mocha')
const assert = require('assert')

const { kebabCase } = require('..')

describe('Kebab Case', () => {
  it('With empty string', () => {
    assert.equal(kebabCase('', ''), '')
  })

  it('With string', () => {
    assert.equal(kebabCase('Foo Bar'), 'foo-bar')
    assert.equal(kebabCase('--foo-bar--'), 'foo-bar')
    assert.equal(kebabCase('__FOO_BAR__'), 'foo-bar')
  })

  it('With unicode', () => {
    assert.equal(kebabCase('🚀🌑🚀'), '🚀🌑🚀')
  })
})
