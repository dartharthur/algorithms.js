const Bag = require('../../linked-list/Bag');

class Graph {
  constructor(V) {
    this._V = V;
    this._adj = Array.from({ length: V }, () => new Bag());
  }

  V() {
    return this._V;
  }

  addEdge(v, w) {
    this._adj[v].add(w);
    this._adj[w].add(v);
  }

  adj(v) {
    return this._adj[v];
  }
}

module.exports = Graph;
