import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Calculator from './components/Calculator';
import { fireEvent } from '@testing-library/react'
import renderer from "react-test-renderer";
import operate from './logic/operate'

describe('Calculator', () => {

  it("Matches DOM Snapshot", () => {
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
    
  it(`check aftre push number btn input change`, () => {
    render(<Calculator />);
    const eightBtn = screen.getByDisplayValue('8')
    fireEvent.click(eightBtn);
    expect(eightBtn).toHaveValue('8');
  });  

});
