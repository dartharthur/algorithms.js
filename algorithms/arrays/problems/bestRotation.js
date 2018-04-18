/*
  Given an array A, we may rotate it by a non-negative integer K so that the 
  array becomes A[K], A[K+1], A{K+2], ... A[A.length - 1], A[0], A[1], ..., A[K-1].
  Afterward, any entries that are less than or equal to their index are worth 1 point. 

  For example, if we have [2, 4, 1, 3, 0], and we rotate by K = 2, it 
  becomes [1, 3, 0, 2, 4]. This is worth 3 points because 1 > 0 [no points], 3 > 1 [no points],
  0 <= 2 [one point], 2 <= 3 [one point], 4 <= 4 [one point].

  Over all possible rotations, return the rotation index K that 
  corresponds to the highest score we could receive.

  If there are multiple answers, return the smallest such index K.

  Source: https://leetcode.com/contest/weekly-contest-75/problems/smallest-rotation-with-highest-score/
*/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
export const rotateAndGetScore = (A, K) => {
  /*
    Note that in this implementation, we do not ever generate an array for the rotated values.
    This is not necessary because each rotated value can be calculated and the score can be generated
    as they are calculated.

    This reduces the overall space and time complexity of the solution as we do not need additional space
    to store the rotated values, nor do we need to iterate across the rotated arrays to calculate
    the score per array.

    We can instead generate the values and calculate the score as we go.

    Within bestRotation, we can then see if this is the best score SO FAR.
    If it is, we update our score tracker, and if not we just continue with our calculations.
  */

  let count = 0;
  let score = 0;
  let index = 0;

  while (count < A.length) {
    let currentVal;
    if (K + index > A.length - 1) {
      currentVal = A[K + index - A.length];
    } else {
      currentVal = A[K + index];
    }
    if (currentVal <= index) {
      score += 1;
    }
    count += 1;
    index += 1;
  }

  return score;
};

/**
 * @param {number[]} A
 * @return {number}
 */
export const bestRotation = A => {
  let K = 0;
  let highestScoreSoFar = rotateAndGetScore(A, K);
  let bestKSoFar = 0;

  while (K < A.length - 1) {
    K += 1;
    const currentScore = rotateAndGetScore(A, K);
    if (currentScore > highestScoreSoFar) {
      highestScoreSoFar = currentScore;
      bestKSoFar = K;
    }
  }

  return bestKSoFar;
};
