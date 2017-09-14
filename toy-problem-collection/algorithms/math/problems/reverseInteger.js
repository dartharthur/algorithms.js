const reverseInteger = number => {
  let built = 0;
  let source = Math.abs(number);

  while (source > 0) {
    built = built * 10 + source % 10;
    /** max 32 bit integer */
    if (built > 2147483647) return 0;
    source = Math.floor(source / 10);
  }

  return number < 0 ? built * -1 : built;
};

export default reverseInteger;
