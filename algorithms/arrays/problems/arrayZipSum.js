const arrayZipSum = (xs, ys) =>
  xs.slice(0, ys.length).map((val, i) => val + ys[i]);

export default arrayZipSum;
