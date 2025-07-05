'use strict';

var toHaveStyle = require('./matchers/toHaveStyle.cjs');

expect.extend({
  toHaveStyle: toHaveStyle.toHaveStyle
});
