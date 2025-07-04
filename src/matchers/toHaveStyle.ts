import type { Properties, DataType } from 'csstype';
import { toHaveStyle as _toHaveStyle } from '@testing-library/jest-dom/matchers';

const COLOR_PROPERTIES: (keyof Properties)[] = ['color', 'backgroundColor'];

const COLOR_MAP: Partial<Record<DataType.NamedColor, string>> = {
  black: 'rgb(0, 0, 0)',
  white: 'rgb(255, 255, 255)',
  red: 'rgb(255, 0, 0)',
  green: 'rgb(0, 128, 0)',
  blue: 'rgb(0, 0, 255)',
  yellow: 'rgb(255, 255, 0)',
  orange: 'rgb(255, 165, 0)',
  pink: 'rgb(255, 192, 203)',
  purple: 'rgb(128, 0, 128)',
  gray: 'rgb(128, 128, 128)',
  lightgray: 'rgb(211, 211, 211)',
  darkgray: 'rgb(169, 169, 169)',
  cyan: 'rgb(0, 255, 255)',
  magenta: 'rgb(255, 0, 255)',
  lime: 'rgb(0, 255, 0)',
  navy: 'rgb(0, 0, 128)',
  teal: 'rgb(0, 128, 128)',
  maroon: 'rgb(128, 0, 0)',
  olive: 'rgb(128, 128, 0)',
  brown: 'rgb(165, 42, 42)',
};

type Style = Partial<Record<keyof Properties, string>>;

const baseToHaveStyle = _toHaveStyle as (
  element: unknown,
  style: Style | string,
) => unknown;

function parseStyleString(css: string): Style {
  const result: Style = {};

  css.split(';').forEach((declaration) => {
    const [property, value] = declaration.split(':').map((part) => part.trim());
    if (!property || !value) return;

    // Convert kebab-case to camelCase
    const camelCased = property.replace(/-([a-z])/g, (_, char: string) =>
      char.toUpperCase(),
    );
    result[camelCased as keyof Properties] = value;
  });

  return result;
}

function toHaveStyle(this: unknown, element: unknown, expected: Style | string) {
  const transformed =
    typeof expected === 'string' ? parseStyleString(expected) : { ...expected };

  for (const prop of COLOR_PROPERTIES) {
    const val = transformed[prop];
    const rgb = COLOR_MAP[val as DataType.NamedColor];
    if (rgb) transformed[prop] = rgb;
  }

  return baseToHaveStyle.call(this, element, transformed);
}

export { toHaveStyle };
