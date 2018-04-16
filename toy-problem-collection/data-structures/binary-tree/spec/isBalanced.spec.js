const { BinaryTreeNode } = require('../../BinaryTree');
const isBalanced = require('../problems/isBalanced');

const bt1 = new BinaryTreeNode(3);
bt1.left = new BinaryTreeNode(9);
bt1.right = new BinaryTreeNode(20);
bt1.right.left = new BinaryTreeNode(15);
bt1.right.right = new BinaryTreeNode(7);

const bt2 = new BinaryTreeNode(1);
bt2.left = new BinaryTreeNode(2);
bt2.right = new BinaryTreeNode(2);
bt2.left.left = new BinaryTreeNode(3);
bt2.left.right = new BinaryTreeNode(3);
bt2.left.left.left = new BinaryTreeNode(4);
bt2.left.left.right = new BinaryTreeNode(4);

const bt3 = new BinaryTreeNode(1);
bt3.left = new BinaryTreeNode(2);
bt3.right = new BinaryTreeNode(2);
bt3.left.left = new BinaryTreeNode(3);
bt3.right.right = new BinaryTreeNode(3);
bt3.left.left.left = new BinaryTreeNode(4);
bt3.right.right.right = new BinaryTreeNode(4);

/**
 * A height-balanced binary tree is defined as:
 * A binary tree in which the depth of the two subtrees of every node never differ by more than 1.
 * 
 * Source: https://leetcode.com/problems/balanced-binary-tree/description/
 */

describe('isBalanced', () => {
  test('should determine if a binary tree is height-balanced.', () => {
    expect(isBalanced(bt1)).toBe(true);
  });
});

describe('isBalanced', () => {
  test('should determine if a binary tree is height-balanced.', () => {
    expect(isBalanced(bt2)).toBe(false);
  });
});

describe('isBalanced', () => {
  test('should determine if a binary tree is height-balanced.', () => {
    expect(isBalanced(bt3)).toBe(false);
  });
});
