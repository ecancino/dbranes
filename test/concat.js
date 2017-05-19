const { describe, it } = require('mocha')
const assert = require('assert')

const { concat } = require('..')

describe('Concat', () => {
  it('Pair', () => {
    assert.equal(concat('0-', '-1'), '0--1')
  })

  it('Multiple', () => {
    assert.equal(concat('0-', '1-', '2-', '3-', 4), '0-1-2-3-4')
  })

  it('Multiple unicode', () => {
    assert.equal(concat('🐴', '➕', '🗡', '=', '🦄'), '🐴➕🗡=🦄')
  })
})
