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
function telephoneWordsV1(digitString, built = "", results = [], index = 0) {
  const keypad = {
    "0": ["0"],
    "1": ["1"],
    "2": ["A", "B", "C"],
    "3": ["D", "E", "F"],
    "4": ["G", "H", "I"],
    "5": ["J", "K", "L"],
    "6": ["M", "N", "O"],
    "7": ["P", "Q", "R", "S"],
    "8": ["T", "U", "V"],
    "9": ["W", "X", "Y", "Z"]
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
}

/** makes use of closure via an inner recursive function */
function telephoneWordsV2(digitString) {
  const results = [];
  const keypad = {
    "0": ["0"],
    "1": ["1"],
    "2": ["A", "B", "C"],
    "3": ["D", "E", "F"],
    "4": ["G", "H", "I"],
    "5": ["J", "K", "L"],
    "6": ["M", "N", "O"],
    "7": ["P", "Q", "R", "S"],
    "8": ["T", "U", "V"],
    "9": ["W", "X", "Y", "Z"]
  };

  if (digitString.length === 0) return results;

  const recurse = function(built, index) {
    if (built.length === digitString.length) {
      return results.push(built);
    } else {
      keypad[digitString[index]].forEach(digit => {
        /** not += b/c don't want to reassign built, just want to pass in a value */
        recurse(built + digit, index + 1);
      });
    }
  };

  recurse("", 0);
  return results;
}
