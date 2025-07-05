'use strict';

var vitest = require('vitest');
var toHaveStyle = require('./matchers/toHaveStyle.cjs');

vitest.expect.extend({
  toHaveStyle: toHaveStyle.toHaveStyle
});
