const { describe, it } = require('mocha')
const assert = require('assert')

const { suffix } = require('..')

describe('Suffix', () => {
  it('Add suffix', () => {
    assert.equal(suffix('-001', 'eduardo'), 'eduardo-001')
  })

  it('Add unicode suffix', () => {
    assert.equal(suffix('-🦄', 'eduardo'), 'eduardo-🦄')
  })
})
