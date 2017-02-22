/**
 * key takeaway:
 * 
 * need to use the call stack to control the length of built
 * attempting to iterate through choices and add to built BEFORE making the recursive call
 * results in built continually growing as we iterate through choices and append to it
 * 
 * instead we need to iterate through choices and make the recursive call on EACH iteration
 * passing in built + a choice
 * 
 * the result is that when the recursive call resolves, we return up the call stack
 * to a state where built is one character shorter
 */

/** no inner recursive function, instead passes variables between function calls */
function rockPaperPermutationV1(roundCount, built = '', results = []) {
  const choices = ['r', 'p', 's'];
  if (roundCount === 0) return [];
  if (built.length === roundCount) {
    results.push(built);
    return;
  } else {
    choices.forEach(choice => {
      rockPaperPermutationV1(roundCount, built + choice, results);
    });
  }
  return results;
};

/** makes use of closure via an inner recursive function */
function rockPaperPermutationV2(roundCount) {
  const choices = ['r', 'p', 's'];
  const results = [];
  if (roundCount === 0) return [];
  const recurse = function(built) {
      if (built.length === roundCount) {
        results.push(built);
        return;
      } else {
        choices.forEach(choice => {
          recurse(built + choice);
      });
    };
  };
  recurse('');
  return results;
};

/** gibberish that works */
function rockPaperPermutationV3(c, b = '', r = []) {
  const a = ['r', 'p', 's'];
  if (c === 0) return [];
  b.length === c ? r.push(b) : a.forEach(d => rockPaperPermutationV3(c, b + d, r));
  return r;
};

function telephoneWords(digitString) {
  const results = [];
  const keypad = {
    '0': ['0'],
    '1': ['1'],
    '2': ['A','B','C'],
    '3': ['D','E','F'],
    '4': ['G','H','I'],
    '5': ['J','K','L'],
    '6': ['M','N','O'],
    '7': ['P','Q','R','S'],
    '8': ['T','U','V'],
    '9': ['W','X','Y','Z']
  };
  
  const recurse = function(built, round) {
    if (built.length === digitString.length) {
      results.push(built);
      return;
    } else {
      for (let i = 0; i < digitString.length; i++) {
        // recurse(built + keypad[digitString[i]][0], round + 1)
        if (digitString[i] === '0') recurse(built + '0');
        if (digitString[i] === '1') recurse(built + '1');
        // keypad[digitString[i]].forEach(digit => {
        //   recurse(built += digit);
        // });
      }
    }
  };
  
  recurse('', 0);
  return results;
};