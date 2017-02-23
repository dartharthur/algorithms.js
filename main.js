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