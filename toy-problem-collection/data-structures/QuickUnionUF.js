/*
 * Cost Model
 * Order of growth on number of array accesses.
 *
 * |  algorithm   |  initialize  |  union  |  find  |
 * |  quick-union |      N       |    N    |    N   |
 * 
 * Find too expensive (could be N array accesses).
 */

class QuickUnionUF {
  constructor(N) {
    // set id of each object to itself
    // (N array accesses)
    this._id = [];
    for (let i = 0; i < N; i += 1) {
      this._id[i] = i;
    }
  }

  _root(i) {
    // chase parent pointers until reach root
    // (depth of i array accesses)
    while (i !== this._id[i]) {
      i = id[i];
    }
    return i;
  }

  connected(p, q) {
    // check if p and q have same root
    // (depth of p and q array accesses)
    return this._root(p) === this._root(q);
  }

  union(p, q) {
    // change root of p to root of q
    // (depth of p and q array accesses)
    let i = this._root(p);
    let j = this._root(q);
    this._id[i] = j;
  }
}
