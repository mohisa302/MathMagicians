import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from './components/Calculator';

import calculate from './logic/calculate';
import operate from './logic/operate';

describe('Calculator', () => {
  const obj = { total: null, next: null, operation: null };

  it('Matches DOM Snapshot', () => {
    const domTree = renderer.create(<Calculator />).toJSON();
    expect(domTree).toMatchSnapshot();
  });

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

  it('check aftre push number btn input change', () => {
    render(<Calculator />);
    const eightBtn = screen.getByDisplayValue('8');
    fireEvent.click(eightBtn);
    expect(eightBtn).toHaveValue('8');
  });

  test('Builds the snapchot of the Calculator component safely', () => {
    const rend = renderer.create(<Calculator />);
    expect(rend.toJSON()).toMatchSnapshot();
  });

  test('Render Calculator component', () => {
    render(<Calculator />);
  });

  it('Return null object if it is AC', () => {
    const result = calculate(obj, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('Test for modulus operation', () => {
    expect(operate(2, 5, '%')).toBe('2');
  });
});
