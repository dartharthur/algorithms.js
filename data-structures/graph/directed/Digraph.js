const Bag = require('../../linked-list/Bag');

class Digraph {
  constructor(V) {
    this._V = V;
    this._adj = Array.from({ length: V }, () => new Bag());
  }

  V() {
    return this._V;
  }

  addEdge(v, w) {
    this._adj[v].add(w);
  }

  adj(v) {
    return this._adj[v];
  }
}

module.exports = Digraph;
