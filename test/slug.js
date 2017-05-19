const { describe, it } = require('mocha')
const assert = require('assert')

const { slug } = require('..')

describe('Slug', () => {
  it('With empty string', () => {
    assert.equal(slug('', ''), '')
  })

  it('With string', () => {
    assert.equal(slug('Foo Bar'), 'foo-bar')
    assert.equal(slug(' a  b '), 'a-b')
    assert.equal(slug('Ä ä Ö ö Ü ü ß'), 'a-a-o-o-u-u-ss')
    assert.equal(slug('Đăng Khoa'), 'dang-khoa')
  })

  it('With unicode', () => {
    assert.equal(slug('🚀🌑🚀'), '🚀🌑🚀')
  })
})
