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