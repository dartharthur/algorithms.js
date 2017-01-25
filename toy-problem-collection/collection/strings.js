/**
 * initial attempt at vertial scanning
 * i.e. check same character index of the strings
 * before moving on to the next column/character index
 */
function longestCommonPrefix(strings) {
  if (strings.length === 0) return '';
  if (strings.length === 1) return strings[0];

  let character = 0;
  let flag = true;
  let built = '';

  while (flag) {
    let temp = {};
    for (let target = 0; target < strings.length; target++) {
      /** iterating through all strings one character at a time */
      if (strings[target][character] === undefined) {
        flag = false;
        return built;
      } else {
        temp[strings[target][character]] = 1;
      }
    }
    /** if common character should only be one character in Object */
    let characters = Object.keys(temp);
    if (characters.length > 1) {
      return built;
    } else {
      built += characters[0];
    }
    character++;
  }
};

/**
 * LCP(S1...Sn) = LCP(LCP(LCP(S1,S2),S3),...Sn)
 * at each iteration i find the longest common prefix of two strings
 * i.e. making a comparison between two strings at a time
 */
function longestCommonPrefixHorizontal(strings) {
  if (strings.length === 0) return '';

  let prefix = strings[0];

  for (let i = 1; i < strings.length; i++) {
    debugger;
    /** if the prefix exists in string[i], indexOf will return 0 */
    while (strings[i].indexOf(prefix) !== 0) {
      debugger;
      /**
       * otherwise we need to trim the prefix until indexOf does return 0
       * this indicates to us that string[i] contains the prefix
       */
      prefix = prefix.substring(0, prefix.length - 1);
      debugger;
      /**
       * if the prefix is trimmed until it becomes an empty string
       * then we know that string[i] has no common prefix so we return ''
       */
      if (prefix === '') return '';
    }
  }

  return prefix;
};