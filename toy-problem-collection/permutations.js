/**
 * rps key takeaway:
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

/**
 * telephone words key takeaway:
 * 
 * initial thought was to use a loop to iterate over the digitString
 * to ensure we capture all permutations
 * 
 * this is wrong because our loop would reset every time we recurse and 
 * we would be duplicating our answers. we can just use our round counter 
 * to iterate over the digitString. 
 * 
 * the idea is that for each digit in the digitString, we
 * want to build up our answer by recursively adding all values
 * in the next position of the digitString to our built answer
 */

/** no inner recursive function, instead passes variables between function calls */
function telephoneWordsV1(digitString, built = '', results = [], index = 0) {
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
  
  if (digitString.length === 0) return results;
  if (built.length === digitString.length) {
    return results.push(built);
  } else {
    keypad[digitString[index]].forEach(digit => {
      telephoneWordsV1(digitString, built + digit, results, index + 1);
    });
  }

  return results;
};

/** makes use of closure via an inner recursive function */
function telephoneWordsV2(digitString) {
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
  
  if (digitString.length === 0) return results;

  const recurse = function(built, index) {
    if (built.length === digitString.length) {
      return results.push(built);
    } else {
      keypad[digitString[index]].forEach(digit => {
        recurse(built + digit, index + 1);
      });
    }
  };

  recurse('', 0);
  return results;
};