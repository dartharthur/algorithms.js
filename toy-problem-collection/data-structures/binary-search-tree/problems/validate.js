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
const isValidBST = function(root) {
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

export default isValidBST;
