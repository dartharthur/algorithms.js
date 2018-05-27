const Graph = require('./Graph');

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph(10);
  });

  test('should have methods named "V", "addEdge", and "adj"', () => {
    expect(typeof graph.addEdge).toBe('function');
    expect(typeof graph.adj).toBe('function');
  });

  test('should add edges to vertices', () => {
    const values = [];
    const result = [2];
    graph.addEdge(1, 2);
    const edges = graph.adj(1);
    edges.iterate(value => values.push(value));
    expect(values).toEqual(result);
  });

  test('should add edges to vertices', () => {
    const values = [];
    const result = [9, 5, 2];
    graph.addEdge(1, 2);
    graph.addEdge(1, 5);
    graph.addEdge(1, 9);
    const edges = graph.adj(1);
    edges.iterate(value => values.push(value));
    expect(values).toEqual(result);
  });
});
