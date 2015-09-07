'use strict'

var should = require('chai').should()
var noop = require('..')

describe('#noop', function () {
  it('should do nothing', function () {
    should.not.exist(noop())
  })
})
