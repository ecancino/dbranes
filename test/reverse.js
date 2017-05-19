const { describe, it } = require('mocha')
const assert = require('assert')

const { reverse } = require('..')

describe('Reverse', () => {
  it('Reverse', () => {
    assert.equal(reverse('I want a some coffee'), 'eeffoc emos a tnaw I')
  })

  it('Reverse unicode', () => {
    assert.equal(reverse('I want a 💆🏽 & some cafe\u0301'), 'éfac emos & 💆🏽 a tnaw I')
  })
})
