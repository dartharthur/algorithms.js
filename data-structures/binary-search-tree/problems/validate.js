const Stack = require('../../stack/Stack');

/**
 * Definition for a binary tree node.
 * function BinaryTreeNode(value) {
 *     this.value = value;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {BinaryTreeNode} root
 * @return {boolean}
 */
const recursive = function(root) {
  if (!root) {
    return true;
  }

  let prev = null;
  let flag = true;

  const traverse = function(node) {
    if (node.left === null && node.right === null) {
      if (prev === null || prev < node.value) {
        prev = node.value;
        return;
      } else {
        flag = false;
        return;
      }
    }

    if (node.left) {
      traverse(node.left);
    }

    if (prev !== null && prev >= node.value) {
      flag = false;
    } else {
      prev = node.value;
    }

    if (node.right) {
      traverse(node.right);
    }
  };
  traverse(root);

  return flag;
};

const iterative = function(root) {
  if (!root) {
    return true;
  }

  const stack = new Stack();
  let prev = null;
  let current = root;

  while (!stack.isEmpty() || current !== null) {
    if (current !== null) {
      stack.push(current);
      current = current.left;
    } else {
      current = stack.pop();
      if (prev === null) {
        prev = current;
      } else if (prev.value >= current.value) {
        return false;
      }
      prev = current;
      current = current.right;
    }
  }

  return true;
};

const isValidBST = { recursive, iterative };

module.exports = isValidBST;
