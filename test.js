/**
 * week <https://github.com/jonschlinkert/week>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

var should = require('should');
var moment = require('moment');
var week = require('./');

describe('week()', function () {
  it('should return an object with the number and name of the current week', function () {
    week().should.equal(moment(new Date()).format('WW'));
  });
});