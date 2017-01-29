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
    /** 
     * if the prefix exists in string[i], indexOf will return 0 
     * more specifically, it returns the index where the prefix begins
     * since we are searching for prefix, check for prefix at beginning of string
     * i.e. at index 0
     */
    while (strings[i].indexOf(prefix) !== 0) {
      /**
       * otherwise we need to trim the prefix until indexOf does return 0
       * this indicates to us that string[i] contains the prefix
       */
      prefix = prefix.substring(0, prefix.length - 1);
      /**
       * if the prefix is trimmed until it becomes an empty string
       * then we know that string[i] has no common prefix so we return ''
       */
      if (prefix === '') return '';
    }
  }

  return prefix;
};

function longestCommonPrefixVertical(strings) {
  if (strings === null || strings.length === 0) return '';

  for (let i = 0; i < strings[0].length; i++) {
    let c = strings[0].charAt(i);
    for (let j = 1; j < strings.length; j++) {
      /**
       * first part of the conditional is checking
       * if the first string (strings[0]) is longer than the string under comparison
       * 
       * we have already checked all of the previous characters, so if we reach the point
       * where i is equal to the length of the string under comparison, it means that the first
       * string is longer than the comparator string but we only want common prefixes so we have
       * to trim the first string to be the same length as the comparator string 
       * 
       * the conditional is checking for the two situations in which we would want to trim
       * the first string 
       */
      if (i === strings[j].length || strings[j].charAt(i) !== c) {
        return strings[0].substring(0, i);
      }
    }
  }

  return strings[0];
};