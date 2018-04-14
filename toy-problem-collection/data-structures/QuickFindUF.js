/*
 * Cost Model
 * Order of growth on number of array accesses.
 *
 * |  algorithm  |  initialize  |  union  |  find  |
 * |  quick-find |      N       |    N    |    1   |
 * 
 * Union too expensive.
 * Ex:
 * Takes N^2 array accesses to process sequence
 * of N union commands on N objects.
 */

class QuickFindUF {
  constructor(N) {
    // N array accesses
    this._id = [];
    for (let i = 0; i < N; i += 1) {
      this._id[i] = i;
    }
  }

  connected(p, q) {
    // 2 array accesses
    return this._id[p] === this._id[q];
  }

  union(p, q) {
    // at most 2N + 2 array accesses
    const pid = id[p];
    const qid = id[q];
    for (let i = 0; i < this._id.length; i += 1) {
      if (id[i] == pid) {
        // change first id to be second id
        id[i] = qid;
      }
    }
  }
}
