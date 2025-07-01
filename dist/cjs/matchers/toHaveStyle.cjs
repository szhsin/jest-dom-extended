'use strict';

var matchers = require('@testing-library/jest-dom/matchers');

const colorMap = {
  red: 'rgb(255, 0, 0)',
  green: 'rgb(0, 128, 0)',
  blue: 'rgb(0, 0, 255)'
};
const baseToHaveStyle = matchers.toHaveStyle;
function toHaveStyle(element, expectedStyle) {
  const transformedColor = colorMap[expectedStyle.color];
  const transformedStyle = transformedColor ? {
    ...expectedStyle,
    color: transformedColor
  } : expectedStyle;
  return baseToHaveStyle.call(this, element, transformedStyle);
}

exports.toHaveStyle = toHaveStyle;
