const { BinaryTreeNode } = require('../../BinaryTree');
const levelOrder = require('../problems/levelOrder');

const bt = new BinaryTreeNode(3);
bt.left = new BinaryTreeNode(9);
bt.right = new BinaryTreeNode(20);
bt.right.left = new BinaryTreeNode(15);
bt.right.right = new BinaryTreeNode(7);

describe('Given a binary tree, levelOrder', () => {
  test('should return a matrix where each row is a level of node values in the binary tree.', () => {
    const result = [[3], [9, 20], [15, 7]];
    expect(levelOrder(bt)).toEqual(result);
  });
});
