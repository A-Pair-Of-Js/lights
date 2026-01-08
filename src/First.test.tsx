import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { First } from './First';

describe('First', () => {
  it('renders the provided title', () => {
    const title: string = 'Hello from Vitest';

    render(<First title={title} />);

    const heading = screen.getByRole('heading', {
      name: title,
    });

    expect(heading).toBeInTheDocument();
  });
});
