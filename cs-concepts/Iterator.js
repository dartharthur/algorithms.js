/* eslint-disable no-underscore-dangle */

/*

Given an array of arrays, implement an iterator class
to allow the client to traverse and remove elements in the
array list. This iterator should provide three public class
member functions:

-- hasNext()
    -- return true or false if there is another element in the array
-- next()
    -- return the value of the next element in the array
-- void remove()
    -- remove the last element return by the iterator i.e. remove
       the element that the previous next() returned

The code should be well structured, and robust enough to handle
any access pattern. Additionally, write code to demonstrate that
the class can be used for the following basic scenarios:

Print elements
    Given: [[], [1,2,3], [4,5], [], [], [6], [7,8], [], [9], [10], []]
    Print: 1 2 3 4 5 6 7 8 9 10

Remove multiples of 3
    Given: [[], [1,2,3], [4,5], [], [], [6], [7,8], [], [9], [10], []]
    Output: [[], [1,2], [4,5], [], [], [], [7,8], [], [], [10], []]
*/

class Iterator {
  constructor(arr) {
    this._arr = arr;
  }
}

module.exports = Iterator;

/*
there needs to be some initialization in the constructor to find the starting sub-array
and the starting index of the sub-array

hasNext should really just be a look-up for the most part

*/
