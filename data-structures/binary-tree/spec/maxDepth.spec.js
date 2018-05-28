const { BinaryTreeNode } = require('../BinaryTree');
const maxDepth = require('../problems/maxDepth');

const bt1 = new BinaryTreeNode(3);
bt1.left = new BinaryTreeNode(9);
bt1.right = new BinaryTreeNode(20);
bt1.right.left = new BinaryTreeNode(15);
bt1.right.right = new BinaryTreeNode(7);

const bt2 = new BinaryTreeNode(3);
bt2.left = new BinaryTreeNode(9);
bt2.right = new BinaryTreeNode(20);
bt2.left.left = new BinaryTreeNode(15);
bt2.left.right = new BinaryTreeNode(7);

const bt3 = new BinaryTreeNode(5);
bt3.right = new BinaryTreeNode(5);
bt3.right.right = new BinaryTreeNode(5);
bt3.right.right.right = new BinaryTreeNode(5);
bt3.right.right.right.right = new BinaryTreeNode(5);

describe('Given a binary tree, maxDepth', () => {
  test('should return the max depth of the tree i.e. the number of nodes along the longest path from the root node down to the farthest leaf node.', () => {
    const result = 3;
    expect(maxDepth(bt1)).toBe(result);
  });
});

describe('Given a binary tree, maxDepth', () => {
  test('should return the max depth of the tree i.e. the number of nodes along the longest path from the root node down to the farthest leaf node.', () => {
    const result = 3;
    expect(maxDepth(bt2)).toBe(result);
  });
});

describe('Given a binary tree, maxDepth', () => {
  test('should return the max depth of the tree i.e. the number of nodes along the longest path from the root node down to the farthest leaf node.', () => {
    const result = 5;
    expect(maxDepth(bt3)).toBe(result);
  });
});
