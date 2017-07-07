/* eslint-disable consistent-return */
class BinaryTree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  dfTraverse(cb) {
    if (!this.left && !this.right) return cb(this);
    cb(this);
    if (this.left) this.left.dfTraverse(cb);
    if (this.right) this.right.dfTraverse(cb);
  }
}

export default BinaryTree;
