const BreadthFirstPaths = require('./BreadthFirstPaths');
const Graph = require('./Graph');

describe('BreadthFirstPaths', () => {
  let breadthFirstPaths;

  beforeAll(() => {
    const G = new Graph(6);
    G.addEdge(0, 2);
    G.addEdge(2, 1);
    G.addEdge(2, 3);
    G.addEdge(3, 5);
    G.addEdge(3, 4);
    breadthFirstPaths = new BreadthFirstPaths(G, 0);
  });

  test('should have methods named "hasPathTo" and "pathTo"', () => {
    expect(typeof breadthFirstPaths.hasPathTo).toBe('function');
    expect(typeof breadthFirstPaths.pathTo).toBe('function');
  });

  test('should return true if the source vertex has a path to the target vertex', () => {
    expect(breadthFirstPaths.hasPathTo(5)).toBe(true);
  });

  test('should return a path from the source vertex to the target vertex', () => {
    const result = [];
    const path = breadthFirstPaths.pathTo(5);
    while (!path.isEmpty()) {
      result.push(path.pop());
    }
    const expected = [0, 2, 3, 5];
    expect(result).toEqual(expected);
  });

  test('should return the length of the shortest path to a vertex', () => {
    expect(breadthFirstPaths.distTo(0)).toBe(0);
    expect(breadthFirstPaths.distTo(2)).toBe(1);
    expect(breadthFirstPaths.distTo(5)).toBe(3);
  });
});
