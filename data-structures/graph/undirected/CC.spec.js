const CC = require('./CC');
const Graph = require('./Graph');

describe('CC', () => {
  let cc;

  beforeAll(() => {
    const G = new Graph(13);
    G.addEdge(0, 5);
    G.addEdge(0, 1);
    G.addEdge(0, 2);
    G.addEdge(0, 6);
    G.addEdge(6, 4);
    G.addEdge(4, 3);
    G.addEdge(4, 5);
    G.addEdge(5, 3);
    G.addEdge(7, 8);
    G.addEdge(9, 11);
    G.addEdge(9, 12);
    G.addEdge(9, 10);
    G.addEdge(11, 12);
    cc = new CC(G);
  });

  test('should have methods named "connected", "id", and "count"', () => {
    expect(typeof cc.connected).toBe('function');
    expect(typeof cc.id).toBe('function');
    expect(typeof cc.count).toBe('function');
  });

  test('should return the correct number of connected components', () => {
    expect(cc.count()).toBe(3);
  });

  test('should return the correct id of a connected component', () => {
    expect(cc.id(4)).toBe(0);
    expect(cc.id(6)).toBe(0);
    expect(cc.id(7)).toBe(1);
    expect(cc.id(8)).toBe(1);
    expect(cc.id(12)).toBe(2);
  });

  test('should return true if two vertices are connected', () => {
    expect(cc.connected(0, 4)).toBe(true);
    expect(cc.connected(7, 8)).toBe(true);
    expect(cc.connected(9, 12)).toBe(true);
  });

  test('should return false if two vertices are not connected', () => {
    expect(cc.connected(0, 12)).toBe(false);
    expect(cc.connected(7, 2)).toBe(false);
    expect(cc.connected(9, 4)).toBe(false);
  });
});
