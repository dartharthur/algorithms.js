import isPalindrome from '../problems/isPalindrome';

const firstString = 'amanaplanacanalpanama';
const secondString = 'racecar';
const thirdString = 'raceacar';
const fourthString = 'A man, a plan, a canal: Panama';
const fifthString = 'race a car';

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
  test('should determine whether a given input string is a palindrome.', () => {
    expect(isPalindrome(fourthString)).toBe(true);
  });
  test('should determine whether a given input string is a palindrome.', () => {
    expect(isPalindrome(fifthString)).toBe(false);
  });
});
