const shuffleSort = array => {
  for (let i = 0; i < array.length; i += 1) {
    let r = Math.round(Math.random() * i);
    [array[i], array[r]] = [array[r], array[i]];
  }
  return array;
};

module.exports = shuffleSort;
