const Queue = require('../../queue/Queue');
const Stack = require('../../stack/Stack');
const Graph = require('./Graph');

class BreadthFirstPaths {
  /**
   * Computes a path between s and every other vertex in graph G.
   * @param G the graph
   * @param s the source vertex
   * @throws Error unless 0 <= s < V
   */
  constructor(G, s) {
    this._s = s;
    this._edgeTo = new Array(G.V());
    this._marked = new Array(G.V()).fill(false);
    this._validateVertex(s);
    this._bfs(G, s);
  }

  _bfs(G, s) {
    const queue = new Queue();
    this._marked[s] = true;
    queue.enqueue(s);
    while (!queue.isEmpty()) {
      const v = queue.dequeue();
      const adjacentVertices = G.adj(v);
      adjacentVertices.iterate(w => {
        if (!this._marked[w]) {
          this._edgeTo[w] = v;
          this._marked[w] = true;
          queue.enqueue(w);
        }
      });
    }
  }

  hasPathTo(v) {
    this._validateVertex(v);
    return this._marked[v];
  }

  pathTo(v) {
    this._validateVertex(v);
    if (!this.hasPathTo(v)) return null;
    const path = new Stack();
    for (let x = v; x !== this._s; x = this._edgeTo[x]) {
      path.push(x);
    }
    path.push(this._s);
    return path;
  }

  _validateVertex(v) {
    const V = this._marked.length;
    if (v < 0 || v >= V) {
      throw new Error(`vertex ${v} is not between 0 and ${V - 1}`);
    }
  }
}

module.exports = BreadthFirstPaths;
