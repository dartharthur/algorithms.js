import { 
  reverseStringJS,
  reverseStringDecrement,
  reverseStringRecursively
} from '../problems/reverseString';

const firstString = 'Hello';
const secondString = 'Hello There';
const thirdString = 'What\'s up doc?';

const firstStringRev = 'olleH';
const secondStringRev = 'erehT olleH';
const thirdStringRev = '?cod pu s\'tahW';

describe('An implementation of reverseString using built in JS methods', () => {
  test('should reverse a string.', () => {
    expect(reverseStringJS(firstString)).toBe(firstStringRev);
  });
  test('should reverse a string.', () => {
    expect(reverseStringJS(secondString)).toBe(secondStringRev);
  });
  test('should reverse a string.', () => {
    expect(reverseStringJS(thirdString)).toBe(thirdStringRev);
  });
});

describe('An implementation of reverseString iterating backwards over the input string', () => {
  test('should reverse a string.', () => {
    expect(reverseStringDecrement(firstString)).toBe(firstStringRev);
  });
  test('should reverse a string.', () => {
    expect(reverseStringDecrement(secondString)).toBe(secondStringRev);
  });
  test('should reverse a string.', () => {
    expect(reverseStringDecrement(thirdString)).toBe(thirdStringRev);
  });
});

describe('An implementation of reverseString iterating backwards over the input string', () => {
  test('should reverse a string.', () => {
    expect(reverseStringRecursively(firstString)).toBe(firstStringRev);
  });
  test('should reverse a string.', () => {
    expect(reverseStringRecursively(secondString)).toBe(secondStringRev);
  });
  test('should reverse a string.', () => {
    expect(reverseStringRecursively(thirdString)).toBe(thirdStringRev);
  });
});
