/* eslint-disable consistent-return */

class BinarySearchTreeNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }

  inOrderTraverse(callback) {
    if (!this.left && !this.right) return callback(this);

    if (this.left) this.left.inOrderTraverse(callback);
    callback(this);
    if (this.right) this.right.inOrderTraverse(callback);
  }

  validate() {
    let flag = true;
    let previousNodeValue = Number.MIN_SAFE_INTEGER;

    const checkOrder = (node) => {
      if (flag === false) return;
      if (previousNodeValue > node.value) {
        flag = false;
        return;
      }
      previousNodeValue = node.value;
    };

    this.inOrderTraverse(checkOrder);
    return flag;
  }
}

export default BinarySearchTreeNode;
