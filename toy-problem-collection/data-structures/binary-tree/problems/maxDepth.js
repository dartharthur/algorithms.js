/**
 * Definition for a binary tree node.
 * function BinaryTreeNode(value) {
 *     this.value = value;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {BinaryTreeNode} node
 * @return {number}
 */
const maxDepth = function(node) {
  if (!node) {
    return 0;
  }

  if (node.left === null && node.right === null) {
    return 1;
  }

  return Math.max(1 + maxDepth(node.left), 1 + maxDepth(node.right));
};

module.exports = maxDepth;
