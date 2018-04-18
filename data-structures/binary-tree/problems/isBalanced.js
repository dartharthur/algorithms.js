const maxDepth = require('./maxDepth');

/**
 * A height-balanced binary tree is defined as:
 * A binary tree in which the depth of the two subtrees of every node never differ by more than 1.
 * In other words, every subtree must be height-balanced.
 * 
 * Source: https://leetcode.com/problems/balanced-binary-tree/description/
 */

/**
 * Definition for a binary tree node.
 * function BinaryTreeNode(value) {
 *     this.value = value;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {BinaryTreeNode} node
 * @return {boolean}
 */
const isBalanced = function(node) {
  if (!node) {
    return true;
  }

  const left = maxDepth(node.left);
  const right = maxDepth(node.right);

  return (
    Math.abs(left - right) <= 1 &&
    isBalanced(node.left) &&
    isBalanced(node.right)
  );
};

module.exports = isBalanced;
