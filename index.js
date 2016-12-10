/**
 * week <https://github.com/jonschlinkert/week>
 *
 * Copyright (c) 2014-2016 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function week(date) {
  date = date instanceof Date ? date : new Date();
  var first = new Date(date.getFullYear(), 0, 1);
  var diff = ((date - first) / 86400000);
  var days = (diff + first.getDay());
  return Math.floor(days / 7).toString();
};
