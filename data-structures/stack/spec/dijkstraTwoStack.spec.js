import dijkstraTwoStack from '../problems/dijkstraTwoStack';

describe("Dijkstra's Two Stack Algorithm", () => {
  test('should evaluate a simple arithmetic expression.', () => {
    const expression = '(1+2)';
    const result = 3;
    expect(dijkstraTwoStack(expression)).toBe(result);
  });

  test('should evaluate a moderately complicated arithmetic expression.', () => {
    const expression = '(1+((2*4)/8))';
    const result = 2;
    expect(dijkstraTwoStack(expression)).toBe(result);
  });

  test('should evaluate a complicated arithmetic expression.', () => {
    const expression = '((1+((2*4)/8))+(3+((5-4)*7)))';
    const result = 12;
    expect(dijkstraTwoStack(expression)).toBe(result);
  });

  test('should throw an error when attempting to perform arithmetic on a non-integer.', () => {
    const expression = '((1+((n*4)/8))+(3+((5-4)*7)))';
    expect(() => dijkstraTwoStack(expression)).toThrow();
  });

  test('should evaluate an arithmetic expression while disregarding whitespace.', () => {
    const expression =
      '( ( 1 + ( ( 2 * 4 ) / 8 ) ) + ( 3 + ( ( 5 - 4 ) * 7 ) ) )';
    const result = 12;
    expect(dijkstraTwoStack(expression)).toBe(result);
  });
});
