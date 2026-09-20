import { expect, type MatchersObject } from 'vitest';
import { toHaveStyle } from './matchers/toHaveStyle';

expect.extend({ toHaveStyle } as MatchersObject);
