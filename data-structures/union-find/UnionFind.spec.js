const {
  QuickFindUF,
  QuickUnionUF,
  WeightedQuickUnionUF
} = require("./UnionFind");

describe("QuickFindUF", () => {
  test("should check if two nodes are connected.", () => {
    const quickFindUF = new QuickFindUF(10);
    quickFindUF.union(5, 6);
    quickFindUF.union(4, 5);
    quickFindUF.union(3, 4);
    expect(quickFindUF.connected(3, 6)).toBe(true);
  });
});

describe("QuickUnionUF", () => {
  test("should check if two nodes are connected.", () => {
    const quickUnionUF = new QuickUnionUF(10);
    quickUnionUF.union(5, 6);
    quickUnionUF.union(4, 5);
    quickUnionUF.union(3, 4);
    expect(quickUnionUF.connected(3, 6)).toBe(true);
  });
});

describe("WeightedQuickUnionUF", () => {
  test("should check if two nodes are connected.", () => {
    const weightedquickUnionUF = new WeightedQuickUnionUF(10);
    weightedquickUnionUF.union(5, 6);
    weightedquickUnionUF.union(4, 5);
    weightedquickUnionUF.union(3, 4);
    expect(weightedquickUnionUF.connected(3, 6)).toBe(true);
  });
});
