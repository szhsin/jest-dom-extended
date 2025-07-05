import type { Properties } from 'csstype';
type Style = Partial<Record<keyof Properties, string>>;
declare function toHaveStyle(this: unknown, element: unknown, expected: Style | string): unknown;
export { toHaveStyle };
