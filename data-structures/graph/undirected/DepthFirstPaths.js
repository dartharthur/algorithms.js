const Stack = require('../../stack/Stack');

class DepthFirstPaths {
  /**
   * Computes a path between s and every other vertex in graph G.
   * @param G the graph
   * @param s the source vertex
   * @throws Error unless 0 <= s < V
   */
  constructor(G, s) {
    this.s = s;
    this.edgeTo = new Array(G.V());
    this.marked = new Array(G.V()).fill(false);
    this._validateVertex(s);
    this._dfs(G, s);
  }

  _dfs(G, v) {
    this.marked[v] = true;
    const edges = G.adj(v);
    edges.iterate(w => {
      if (!this.marked[w]) {
        this.edgeTo[w] = v;
        this._dfs(G, w);
      }
    });
  }

  hasPathTo(v) {
    this._validateVertex(v);
    return this.marked[v];
  }

  pathTo(v) {
    this._validateVertex(v);
    if (!this.hasPathTo(v)) return null;
    const path = new Stack();
    for (let x = v; x !== this.s; x = this.edgeTo[x]) {
      path.push(x);
    }
    path.push(this.s);
    return path;
  }

  _validateVertex(v) {
    const V = this.marked.length;
    if (v < 0 || v >= V) {
      throw new Error(`vertex ${v} is not between 0 and ${V - 1}`);
    }
  }
}

module.exports = DepthFirstPaths;
