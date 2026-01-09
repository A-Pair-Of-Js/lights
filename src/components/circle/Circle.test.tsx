import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Circle } from './Circle';

describe('Circle', () => {
  it('renders the correct background colour to the circle', () => {
    const lightColor: string = 'green';

    const {container} = render(<Circle lightColor = {lightColor} />);

    const circle = container.firstChild as HTMLElement;

    expect(circle).toHaveStyle({ backgroundColor: "rgb(0, 128, 0)" });

  });
});
