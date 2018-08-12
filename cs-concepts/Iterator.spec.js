/* eslint-disable */
const Iterator = require('./Iterator');

// print everything in the array:
function testCase1(arr) {
  console.log('------------Test Case------------');
  let it = new Iterator(arr);
  while (it.hasNext()) {
    console.log(it.next());
  }
}

// out of range
function testCase2(arr) {
  console.log('------------Test Case------------');
  let it = new Iterator(arr);
  try {
    for (let i = 0; i < 20; i++) {
      console.log(it.next());
    }
  } catch (ex) {
    console.log(ex);
  }
}

// remove every 3rd element from the array:
function testCase3(arr) {
  console.log('------------Test Case------------');
  let it = new Iterator(arr);
  while (it.hasNext()) {
    let x = it.next();
    if (x % 3 === 0) it.remove();
  }
  console.log(JSON.stringify(arr));
}

// error when remove
function testCase4(arr) {
  console.log('------------Test Case------------');
  let it = new Iterator(arr);
  it.next();
  it.remove();
  try {
    it.remove();
  } catch (ex) {
    console.log(ex);
  }
  console.log(JSON.stringify(arr));
}

// remove everything
function testCase5(arr) {
  console.log('------------Test Case------------');
  let it = new Iterator(arr);
  while (it.hasNext()) {
    it.next();
    it.remove();
  }
  console.log(JSON.stringify(arr));
}

// nested array:
function arr() {
  return [[], [1, 2, 3], [4, 5], [], [], [6], [7, 8], [], [9], [10], []];
}
