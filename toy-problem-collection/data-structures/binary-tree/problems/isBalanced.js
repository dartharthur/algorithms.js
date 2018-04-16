const maxDepth = require('./maxDepth');

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
