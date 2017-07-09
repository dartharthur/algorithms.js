import isPalindrome from '../problems/isPalindrome';

const firstString = 'amanaplanacanalpanama';
const secondString = 'racecar';
const thirdString = 'raceacar';

describe('An implementation of isPalindrome', () => {
  test('should determine whether a given input string is a palindrome.', () => {
    expect(isPalindrome(firstString)).toBe(true);
  });
  test('should determine whether a given input string is a palindrome.', () => {
    expect(isPalindrome(secondString)).toBe(true);
  });
  test('should determine whether a given input string is a palindrome.', () => {
    expect(isPalindrome(thirdString)).toBe(false);
  });
});
