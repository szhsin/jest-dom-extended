import { expect } from 'vitest';
import type { MatchersObject } from '@vitest/expect';
import { toHaveStyle } from './matchers/toHaveStyle';

expect.extend({ toHaveStyle } as MatchersObject);
