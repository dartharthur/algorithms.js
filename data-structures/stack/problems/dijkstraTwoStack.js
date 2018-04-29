const Stack = require('../Stack');

/**
 * An implementation of Djikstra's Two-Stack Algorithm for evaluating arithmetic expressions.
 * This implementation is limited to addition, subtraction, multiplication, and division.
 * Additionally, we assume the arithmetic expression is fully parenthesized. This is done
 * to maintain simplicity as not fully parenthesizing means we will need some way to
 * enforce the correct order of operations.
 */

const dijkstraTwoStack = function(expression) {
  const validOperators = new Set(['+', '-', '*', '/']);
  const operators = new Stack();
  const operands = new Stack();

  const cleanExpression = expression.replace(/\s/g, '');

  for (let i = 0; i < cleanExpression.length; i += 1) {
    let char = cleanExpression[i];
    if (char === '(') {
      continue;
    } else if (validOperators.has(char)) {
      operators.push(char);
    } else if (char === ')') {
      let a = Number(operands.pop());
      let b = Number(operands.pop());
      let c = operators.pop();
      if (c === '+') operands.push(b + a);
      if (c === '-') operands.push(b - a);
      if (c === '*') operands.push(b * a);
      if (c === '/') operands.push(b / a);
    } else if (!Number(char) && Number(char) !== 0) {
      throw new Error(`Character ${char} is not a valid number.`);
    } else {
      operands.push(char);
    }
  }

  return operands.pop();
};

module.exports = dijkstraTwoStack;
