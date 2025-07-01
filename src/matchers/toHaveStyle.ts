import type { Properties, DataType } from 'csstype';
import { toHaveStyle as _toHaveStyle } from '@testing-library/jest-dom/matchers';

const colorMap: Partial<Record<DataType.NamedColor, string>> = {
  red: 'rgb(255, 0, 0)',
  green: 'rgb(0, 128, 0)',
  blue: 'rgb(0, 0, 255)'
};

const baseToHaveStyle = _toHaveStyle as unknown as (
  element: unknown,
  expectedStyle: Properties
) => jest.CustomMatcherResult;

function toHaveStyle(
  this: jest.MatcherContext,
  element: unknown,
  expectedStyle: Properties
) {
  const transformedColor = colorMap[expectedStyle.color as DataType.NamedColor];
  const transformedStyle = transformedColor
    ? { ...expectedStyle, color: transformedColor }
    : expectedStyle;
  return baseToHaveStyle.call(this, element, transformedStyle);
}

export { toHaveStyle };
