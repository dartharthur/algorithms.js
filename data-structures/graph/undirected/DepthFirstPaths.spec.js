const DepthFirstPaths = require('./DepthFirstPaths');
const Graph = require('./Graph');

describe('DepthFirstPaths', () => {
  let depthFirstPaths;

  beforeAll(() => {
    const G = new Graph(6);
    G.addEdge(0, 2);
    G.addEdge(2, 1);
    G.addEdge(2, 3);
    G.addEdge(3, 5);
    G.addEdge(3, 4);
    depthFirstPaths = new DepthFirstPaths(G, 0);
  });

  test('should have methods named "hasPathTo" and "pathTo"', () => {
    expect(typeof depthFirstPaths.hasPathTo).toBe('function');
    expect(typeof depthFirstPaths.pathTo).toBe('function');
  });

  test('should return true if the source vertex has a path to the target vertex', () => {
    expect(depthFirstPaths.hasPathTo(5)).toBe(true);
  });

  test('should return a path from the source vertex to the target vertex', () => {
    const result = [];
    const path = depthFirstPaths.pathTo(5);
    while (!path.isEmpty()) {
      result.push(path.pop());
    }
    const expected = [0, 2, 3, 5];
    expect(result).toEqual(expected);
  });
});
