class MaxPQ {
  constructor() {
    this._pq = [];
    this._n = 0;
  }

  size() {
    return this._n;
  }

  isEmpty() {
    return this._n === 0;
  }

  insert(key) {
    this._n += 1;
    this._pq[this._n] = key;
    this._swim(this._n);
  }

  max() {
    return this._pq[1];
  }

  delMax() {
    const max = this._pq[1];
    this._exch(1, this._n);
    this._n -= 1;
    this._sink(1);
    delete this._pq[this._n + 1];
    return max;
  }

  _swim(k) {
    while (k > 1 && this._less(Math.floor(k / 2), k)) {
      this._exch(k, Math.floor(k / 2));
      k = Math.floor(k / 2);
    }
  }

  _sink(k) {
    while (2 * k <= this._n) {
      let j = 2 * k;
      if (j < this._n && this._less(j, j + 1)) j += 1;
      if (this._less(j, k)) break;
      this._exch(k, j);
      k = j;
    }
  }

  _less(i, j) {
    return this._pq[i] < this._pq[j];
  }

  _exch(i, j) {
    const temp = this._pq[i];
    this._pq[i] = this._pq[j];
    this._pq[j] = temp;

    // [this._pq[i], this._pq[j]] = [this._pq[j], this._pq[i]];
  }
}

module.exports = MaxPQ;
