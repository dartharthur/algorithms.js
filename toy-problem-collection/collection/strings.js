function longestCommonPrefixBruteForce(strings) {
  if (strings.length === 0) return '';
  if (strings.length === 1) return strings[0];

  let character = 0;
  let flag = true;
  let built = '';
  while (flag) {
    let temp = {};
    for (let target = 0; target < strings.length; target++) {
      if (strings[target][character] === undefined) {
        flag = false;
        return built;
      } else {
        temp[strings[target][character]] = 1;
      }
    }
    let characters = Object.keys(temp);
    if (characters.length > 1) {
      return built;
    } else {
      built += characters[0];
    }
    character++;
  }
};