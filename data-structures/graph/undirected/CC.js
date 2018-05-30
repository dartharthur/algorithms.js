class CC {
  constructor(G) {
    this._marked = new Array(G.V()).fill(false);
    this._id = new Array(G.V());
    this._count = 0;
    for (let s = 0; s < G.V(); s += 1) {
      if (!this._marked[s]) {
        this._dfs(G, s);
        this._count += 1;
      }
    }
  }

  _dfs(G, v) {
    this._marked[v] = true;
    this._id[v] = this._count;
    const adjacentVertices = G.adj(v);
    adjacentVertices.iterate(w => {
      if (!this._marked[w]) {
        this._dfs(G, w);
      }
    });
  }

  connected(v, w) {
    return this._id[v] === this._id[w];
  }

  id(v) {
    return this._id[v];
  }

  count() {
    return this._count;
  }
}

module.exports = CC;
