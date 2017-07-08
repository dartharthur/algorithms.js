const romanToInt = (str) => {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  if (str === '') return null;
  for (let i = 0; i < str.length; i += 1) {
    if (!values[str[i]]) return null;
    (values[str[i + 1]] > values[str[i]]) ? sum -= values[str[i]] : sum += values[str[i]];
  }
  return sum;
};

export default romanToInt;
