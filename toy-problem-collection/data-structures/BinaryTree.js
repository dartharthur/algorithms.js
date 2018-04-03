/* eslint-disable consistent-return */

class BinaryTreeNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }

  recurInOrder(callback) {
    if (this.left === null && this.right === null) {
      return callback(this);
    }

    if (this.left) {
      this.left.recurInOrder(callback);
    }

    callback(this);

    if (this.right) {
      this.right.recurInOrder(callback);
    }
  }

  iterInOrder(callback) {}
}

export default BinaryTreeNode;
