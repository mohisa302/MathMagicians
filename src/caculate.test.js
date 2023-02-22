import * as React from 'react';
import { render, screen } from '@testing-library/react';

import Calculator from './components/Calculator';

describe('Calculator', () => {
  it('renders Calculator component', () => {
    render(<Calculator />);
    const linkElement = screen.getByText(/do some math/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('check one of the calculator button exists', () => {
    render(<Calculator />);
    const btn = screen.getByDisplayValue('1');
    expect(btn).toBeInTheDocument();
  });

  it('check calculator\'s input exists', () => {
    render(<Calculator />);
    const input = screen.getByTestId('input-cal-text');
    expect(input).toHaveTextContent('0');
  });
});
