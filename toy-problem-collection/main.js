/**
 * note:
 * can't break out of forEach loops
 * if solution requires breaking out of loop once an answer is found, forEach is wrong tool
 * use regular for loop instead
 */
function twoSum(nums, target) {
  let storage = {};
  for (let i = 0; i < nums.length; i++) {
    let addend = target - nums[i];
    if (storage.hasOwnProperty(addend)) {
      return ([storage[addend], i]);
    } else {
      storage[nums[i]] = i;
    }
  }
};

// function spyOn(fn) {
//   var callCount = 0;
//   var savedArguments = [];
//   var savedValues = [];
  
//   var spyFunc = function () {
//     var args = Array.from(arguments);
//     for (var i = 0; i < args.length; i++) {
//       savedArguments.push(args[i]);
//     }
//     callCount++;
//     var value = fn.apply(this, arguments);
//     savedValues.push(value);
//     return value;
//   };
  
//   spyFunc.callCount = function() {
//     return callCount;
//   };
  
//   spyFunc.wasCalledWith = function(arg) {
//     var wasCalled = false;
//     for (var i = 0; i < savedArguments.length; i++) {
//       if (arg === savedArguments[i]) {
//         wasCalled = true;
//         break;
//       }
//     }
//     return wasCalled;
//   };
  
//   spyFunc.returned = function(val) {
//     var wasCalled = false;
//     for (var i = 0; i < savedValues.length; i++) {
//       if (val === savedValues[i]) {
//         wasCalled = true;
//         break;
//       }
//     }
//     return wasCalled;
//   };
  
//   return spyFunc;
// };

