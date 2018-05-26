const Bag = require('../../linked-list/Bag');

class Graph {
  constructor(V) {
    this.V = V;
    this._adj = Array.from({ length: 10 }, () => new Bag());
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
