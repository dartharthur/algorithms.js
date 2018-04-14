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
    const pid = this._id[p];
    const qid = this._id[q];
    for (let i = 0; i < this._id.length; i += 1) {
      if (this._id[i] == pid) {
        // change first id to be second id
        this._id[i] = qid;
      }
    }
  }
}

/*
 * Cost Model
 * Order of growth on number of array accesses.
 *
 * |  algorithm   |  initialize  |      union        |      find         |
 * |  quick-union |      N       |  tree-height (N)  |  tree-height (N)  |
 * 
 * Find too expensive (could be N array accesses).
 * Trees can get too tall.
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
      i = this._id[i];
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

/*
 * Cost Model
 * Order of growth on number of array accesses.
 *
 * |       algorithm       |  initialize  |  union  |  find   |
 * |  weighted quick-union |      N       |  log N  |  log N  |
 * 
 */

class WeightedQuickUnionUF {
  constructor(N) {
    this._parent = [];
    this._size = [];
    this._count = N;

    for (let i = 0; i < N; i += 1) {
      this._parent[i] = i;
      this._size[i] = 1;
    }
  }

  _root(p) {
    while (p !== this._parent[p]) {
      p = this._parent[p];
    }
    return p;
  }

  count() {
    return this._count;
  }

  connected(p, q) {
    return this._root(p) === this._root(q);
  }

  union(p, q) {
    let rootP = this._root(p);
    let rootQ = this._root(q);

    if (rootP === rootQ) return;

    // make smaller root (by size) point to larger one
    // size of a tree is its number of nodes
    if (this._size[rootP] < this._size[rootQ]) {
      this._parent[rootP] = rootQ;
      this._size[rootQ] += this._size[rootP];
    } else {
      this._parent[rootQ] = rootP;
      this._size[rootP] += this._size[rootQ];
    }

    this._count -= 1;
  }
}

module.exports = {
  QuickFindUF,
  QuickUnionUF,
  WeightedQuickUnionUF
};
