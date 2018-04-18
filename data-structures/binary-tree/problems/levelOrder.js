const Queue = require('../../Queue');

/**
 * Definition for a binary tree node.
 * function BinaryTreeNode(value) {
 *     this.value = value;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {BinaryTreeNode} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
  if (!root) {
    return [];
  }

  const q = new Queue();
  const result = [];

  let current = [root];
  q.enqueue(current);

  while (!q.isEmpty()) {
    let level = [];
    let toQ = [];
    let toResult = [];

    current = q.dequeue();

    current.forEach(node => {
      level.push(node);
      toResult.push(node.value);
    });

    result.push(toResult);

    level.forEach(node => {
      if (node.left) {
        toQ.push(node.left);
      }

      if (node.right) {
        toQ.push(node.right);
      }
    });

    if (toQ.length) {
      q.enqueue(toQ);
    }
  }

  return result;
};

module.exports = levelOrder;
