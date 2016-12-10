/**
 * week <https://github.com/jonschlinkert/week>
 *
 * Copyright (c) 2014-2016 Jon Schlinkert.
 * Licensed under the MIT license.
 */

require('mocha');
var assert = require('assert');
var moment = require('moment');
var week = require('./');

describe('week()', function () {
  it('should return an object with the number and name of the current week', function () {
    assert.equal(week(), moment(new Date()).format('WW'));
  });
});
