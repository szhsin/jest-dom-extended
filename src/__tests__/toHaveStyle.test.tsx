import { screen, render } from '@testing-library/react';

describe('toHaveStyle', () => {
  test('object style', () => {
    render(<button style={{ color: 'black', backgroundColor: 'brown' }}>test</button>);
    const btn = screen.getByRole('button', { name: 'test' });
    expect(btn).toHaveStyle({ color: 'black', backgroundColor: 'brown' });
  });

  test('string style', () => {
    render(<button style={{ color: 'red', backgroundColor: 'green' }}>test</button>);
    const btn = screen.getByRole('button', { name: 'test' });
    expect(btn).toHaveStyle('color: red; background-color: green;');
  });

  test('hex color', () => {
    render(<button style={{ color: '#f00', backgroundColor: '#ABCDEF' }}>test</button>);
    const btn = screen.getByRole('button', { name: 'test' });
    expect(btn).toHaveStyle({ color: '#F00', backgroundColor: '#abcdef' });
  });
});
