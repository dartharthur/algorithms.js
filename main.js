import * as arrays from './toy-problem-collection/arrays';
import * as jsFundamentals from './toy-problem-collection/js-fundamentals';
import * as linkedLists from './toy-problem-collection/linked-lists';
import * as logic from './toy-problem-collection/logic';
import * as math from './toy-problem-collection/math';
import * as permutations from './toy-problem-collection/permutations';
import * as sortingAlgorithms from './toy-problem-collection/sorting-algorithms';
import * as strings from './toy-problem-collection/strings';
import * as trees from './toy-problem-collection/trees';
// function mergeSort(arr){
  
//   if (arr.length < 2) return arr;
//   let midpoint = Math.floor((arr.length) / 2);
//   let leftArray = arr.slice(0, midpoint);
//   let rightArray = arr.slice(midpoint, arr.length);
  
//   return merge(mergeSort(leftArray), mergeSort(rightArray));
  
//   function merge(leftArray, rightArray) {
//     let output = [];
//     while (leftArray.length && rightArray.length) {
//       output.push(leftArray[0] > rightArray[0] ? rightArray.shift() : leftArray.shift());
//     }
//     while (leftArray.length) {
//       output.push(leftArray.shift());
//     }
//     while (rightArray.length) {
//       output.push(rightArray.shift());
//     }
//     return output;
//   };

// };

// function telephoneWords(digitString) {

//   let result = [];
//   const keypad = {
//     '0': ['0'],
//     '1': ['1'],
//     '2': ['A','B','C'],
//     '3': ['D','E','F'],
//     '4': ['G','H','I'],
//     '5': ['J','K','L'],
//     '6': ['M','N','O'],
//     '7': ['P','Q','R','S'],
//     '8': ['T','U','V'],
//     '9': ['W','X','Y','Z']
//   };
  
//   if (digitString.length === 0) return result;
  
//   const recursivePermutation = function(built, index) {
//     if (built.length === digitString.length) {
//       result.push(built);
//       return;
//     }
//     let options = keypad[digitString.charAt(index)];
//     for (let i = 0; i < options.length; i++) {
//       recursivePermutation(built+options[i], index+1); 
//     }
//   };
  
//   recursivePermutation('', 0);
  
//   return result;
  
// };