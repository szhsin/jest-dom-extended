import { expect } from 'vitest';
import { toHaveStyle } from './matchers/toHaveStyle.mjs';

expect.extend({
  toHaveStyle
});
