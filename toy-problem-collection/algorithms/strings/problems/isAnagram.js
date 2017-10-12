const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  // only need one object
  // increment letter count as you iterate through s
  // decrement letter count as you iterate through t
  // letter that doesn't exist in letters || letter count < 0 --> return false
  const letters = {};

  for (let i = 0; i < s.length; i += 1) {
    letters[s[i]] ? (letters[s[i]] += 1) : (letters[s[i]] = 1);
  }

  for (let i = 0; i < t.length; i += 1) {
    if (!letters[t[i]]) {
      return false;
    }

    letters[t[i]] -= 1;
    if (letters[t[i]] < 0) {
      return false;
    }
  }

  return true;
};

export default isAnagram;
