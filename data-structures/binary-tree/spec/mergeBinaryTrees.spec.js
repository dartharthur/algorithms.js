const { BinaryTreeNode } = require('../BinaryTree');
const mergeBinaryTreesR = require('../problems/mergeBinaryTrees');

const treeA = new BinaryTreeNode(5);
treeA.left = new BinaryTreeNode(7);
treeA.right = new BinaryTreeNode(4);

const treeB = new BinaryTreeNode(3);
treeB.left = new BinaryTreeNode(2);
treeB.right = new BinaryTreeNode(1);

const treeAB = new BinaryTreeNode(8);
treeAB.left = new BinaryTreeNode(9);
treeAB.right = new BinaryTreeNode(5);

const treeC = new BinaryTreeNode(1);
treeC.left = new BinaryTreeNode(3);
treeC.right = new BinaryTreeNode(2);
treeC.left.left = new BinaryTreeNode(5);

const treeD = new BinaryTreeNode(2);
treeD.left = new BinaryTreeNode(1);
treeD.right = new BinaryTreeNode(3);
treeD.left.right = new BinaryTreeNode(4);
treeD.right.right = new BinaryTreeNode(7);

const treeCD = new BinaryTreeNode(3);
treeCD.left = new BinaryTreeNode(4);
treeCD.right = new BinaryTreeNode(5);
treeCD.left.left = new BinaryTreeNode(5);
treeCD.left.right = new BinaryTreeNode(4);
treeCD.right.right = new BinaryTreeNode(7);

describe('The recursive implementation of mergeBinaryTrees', () => {
  test('should merge two simple binary trees.', () => {
    expect(mergeBinaryTreesR(treeA, treeB)).toEqual(treeAB);
  });
  test('should merge two complex binary trees.', () => {
    expect(mergeBinaryTreesR(treeC, treeD)).toEqual(treeCD);
  });
});
