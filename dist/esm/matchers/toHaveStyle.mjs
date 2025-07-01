import { toHaveStyle as toHaveStyle$1 } from '@testing-library/jest-dom/matchers';

const colorMap = {
  red: 'rgb(255, 0, 0)',
  green: 'rgb(0, 128, 0)',
  blue: 'rgb(0, 0, 255)'
};
const baseToHaveStyle = toHaveStyle$1;
function toHaveStyle(element, expectedStyle) {
  const transformedColor = colorMap[expectedStyle.color];
  const transformedStyle = transformedColor ? {
    ...expectedStyle,
    color: transformedColor
  } : expectedStyle;
  return baseToHaveStyle.call(this, element, transformedStyle);
}

export { toHaveStyle };
