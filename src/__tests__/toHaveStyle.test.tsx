import { screen, render } from '@testing-library/react';

describe('toHaveStyle', () => {
  test('object style', () => {
    render(
      <button
        style={{
          color: 'black',
          backgroundColor: 'brown',
          borderTopColor: 'orange',
          borderRightColor: 'green',
          borderBottomColor: 'gray',
          borderLeftColor: 'purple',
          outlineColor: 'blue',
          caretColor: 'transparent',

          // Color properties do not need to be patched
          columnRuleColor: 'yellow',
          textEmphasisColor: 'white',
          textDecorationColor: 'red',
        }}
      >
        test
      </button>,
    );
    const btn = screen.getByRole('button', { name: 'test' });
    expect(btn).toHaveStyle({
      color: 'black',
      backgroundColor: 'brown',
      borderTopColor: 'orange',
      borderRightColor: 'green',
      borderBottomColor: 'gray',
      borderLeftColor: 'purple',
      outlineColor: 'blue',
      caretColor: 'transparent',

      // Color properties do not need to be patched
      columnRuleColor: 'yellow',
      textEmphasisColor: 'white',
      textDecorationColor: 'red',
    });
  });

  test('string style', () => {
    render(
      <button style={{ color: 'transparent', backgroundColor: 'red' }}>test</button>,
    );
    const btn = screen.getByRole('button', { name: 'test' });
    expect(btn).toHaveStyle('color: transparent; background-color: red;');
  });

  test('hex color', () => {
    render(
      <button
        style={{ color: '#f00', backgroundColor: '#ABCDEF12', outlineColor: '#1234ff' }}
      >
        test
      </button>,
    );
    const btn = screen.getByRole('button', { name: 'test' });
    expect(btn).toHaveStyle({
      color: '#F00',
      backgroundColor: '#abcdef12',
      outlineColor: '#1234FF',
    });
  });
});
