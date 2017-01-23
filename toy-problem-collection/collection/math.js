function reverseInteger(number) {
  let built = 0;
  let source = Math.abs(number);

  while (source > 0) {
    built = (built * 10) + (source % 10);
    /** max 32 bit integer */
    if (built > 2147483647) return 0;
    source = Math.floor(source / 10);
  }

  return number < 0 ? built * -1 : built;
};

/**
 * this implementation reverses half of the number and then makes a comparison
 * if the reversed second half is unequal to the non-reversed first half then it returns false
 */
function isPalindromeV1(number) {
  if (x === 0) return true;
  if (x < 0) return false;
  if (x % 10 === 0) return false;

  let reverse = 0;
  let source = number;

  while (source > reverse) {
    reverse = (reverse * 10) + (source % 10);
    source = Math.floor(source / 10);
  }

  return source === reverse || source === Math.floor(reverse / 10);
};

/**
 * this implementation compares first and last integers and moves inward
 * as it moves inward it removes the first and last integers from the number
 * if at any point the first and last integers are unequal it will return false
 */
function isPalindromeV2(number) {
  if (number < 0) return false;

  let divisor = 1;
  let source = number;

  while (source / divisor >= 10) {
    divisor *= 10;
  }

  while (source !== 0) {
    let first = Math.floor(source / divisor);
    let last = source % 10;
    if (first !== last) return false;
    source = Math.floor((source % divisor) / 10);
    divisor /= 100;
  }
  
  return true;
};