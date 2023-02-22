import operate from './logic/operate';

describe('Calculator', () => {
  it(`check operate add functionality`, () => {
    const result = operate(2, 3, '+');
    expect(result).toBe('5');
  });

  it(`check operate add functionality`, () => {
    const result = operate(2, 3, '-');
    expect(result).toBe('-1');
  });

  it(`check operate division functionality`, () => {
    const result = operate(10, 2, '÷');
    expect(result).toBe('5');
  });

  it(`check operate multiplication functionality`, () => {
    const result = operate(2, 2, 'x');
    expect(result).toBe('4');
  });
});
