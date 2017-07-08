/**
 * Given an array of integers, every element appears twice except for one. Find that single one.
 * Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 */

/** using extra memory */
function singleNumberV1(nums) {
  let storage = {};
  nums.forEach(num => {
    storage[num] ? storage[num] = 'duplicate' : storage[num] = 'unique';
  });
  for (let value in storage) {
    if (storage[value] === 'unique') return +value; 
  }
};

/** not using extra memory */
function singleNumberV2(nums) {
  
};

/** O(n) - traverses array twice */
function getMaxProfitV1(stockPricesYesterday) {
  let maxNumAtIndex = 0;
  let minNumAtIndex = 0;
  for (let i = 1; i < stockPricesYesterday.length; i++) {
    if (stockPricesYesterday[i] > stockPricesYesterday[maxNumAtIndex]) maxNumAtIndex = i;
  }
  for (let i = 1; i < maxNumAtIndex; i++) {
    if (stockPricesYesterday[i] < stockPricesYesterday[minNumAtIndex]) minNumAtIndex = i;
  }
  return stockPricesYesterday[maxNumAtIndex] - stockPricesYesterday[minNumAtIndex];
};

/** greedy - O(n) time - traverses array once */
function getMaxProfitV2(stockPricesYesterday) {
  if (stockPricesYesterday.length < 2) throw new Error('Getting a profit requires at least 2 prices');
  
  let minPrice = stockPricesYesterday[0];
  let maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];

  for (let i = 1; i < stockPricesYesterday.length; i++) {
    let currentPrice = stockPricesYesterday[i];

    /** potential profit if we bought at min and sold at current price */
    let potentialProfit = currentPrice - minPrice;

    /** update max profit if we can do better */
    maxProfit = Math.max(maxProfit, potentialProfit);

    /** update min price to be lowest we've seen so far AFTER updating max profit */
    minPrice = Math.min(minPrice, currentPrice);
  }

  return maxProfit;
};

/** greedy - O(n) time & O(n) space */
function getProductsOfAllIntsExceptAtIndex(array) {
  if (array.length === 1) throw new Error('Getting products requires at least 2 integers');

  let productsOfAllIntsExceptAtIndex = [];
  let productSoFar = 1;

  for (let i = 0; i < array.length; i++) {
    productsOfAllIntsExceptAtIndex[i] = productSoFar;
    productSoFar *= array[i];
  }

  productSoFar = 1;

  for (let j = array.length - 1; j >= 0; j--) {
    productsOfAllIntsExceptAtIndex[j] *= productSoFar;
    productSoFar *= array[j];
  }

  return productsOfAllIntsExceptAtIndex;
};

/**
 * break problem into sub-problems
 * need to know highest and lowest products of two
 * can then multipy with current number to check for highest product of three
 * need to keep track of and set highest and lowest numbers at end of iteration
 */
function highestProductOf3(arrayOfInts) {
  if (arrayOfInts.length < 3) throw new Error('Less than 3 items!');

  let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);

  let highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  let lowestProductOf2 = arrayOfInts[0] * arrayOfInts[1];

  let highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

  for (let i = 2; i < arrayOfInts.length; i++) {
    let current = arrayOfInts[i];

    highestProductOf3 = Math.max(
      highestProductOf3,
      current * highestProductOf2,
      current * lowestProductOf2
    )

    highestProductOf2 = Math.max(
      highestProductOf2,
      current * highest,
      current * lowest
    )

    lowestProductOf2 = Math.min(
      lowestProductOf2,
      current * highest,
      current * lowest
    )

    highest = Math.max(highest, current);
    lowest = Math.min(lowest, current);
  }
  return highestProductOf3;
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) nums.push(nums.splice(i, 1)[0]);
  }
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicates(nums) {
  const library = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (library.has(nums[i])) return true;
    library.add(nums[i]);
  }
  return false;
}

// given array of arrays, flatten array and remove duplicates
// approach would be to recurisvely iterate through and store
// values in an object
// then when done, grab the keys of the object as my resultant array
// or put them in a set? hashset might be better
