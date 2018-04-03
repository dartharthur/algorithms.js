/* eslint-disable consistent-return */
const Stack = require("./Stack");

const BinaryTree = function(strategy) {
  return class BinaryTreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this._strategy = strategy;
    }

    logValues() {
      this._strategy();
    }
  };
};

const inOrderRecursiveTraversalStrategy = function() {
  if (this.left === null && this.right === null) {
    return console.log(this.value);
  }

  if (this.left) {
    this.left._strategy();
  }

  console.log(this.value);

  if (this.right) {
    this.right._strategy();
  }
};

const inOrderIterativeTraversalStrategy = function() {
  const stack = new Stack();
  let current = this;
  while (!stack.isEmpty() || current !== null) {
    if (current !== null) {
      stack.push(current);
      current = current.left;
    } else {
      current = stack.pop();
      console.log(current.value);
      current = current.right;
    }
  }
};

const BT1 = BinaryTree(inOrderIterativeTraversalStrategy);

const BST1 = new BT1(4);
BST1.left = new BT1(2);
BST1.right = new BT1(6);
BST1.left.left = new BT1(1);
BST1.left.right = new BT1(3);
BST1.right.right = new BT1(7);
BST1.right.left = new BT1(5);

const BT2 = BinaryTree(inOrderRecursiveTraversalStrategy);

const BST2 = new BT2(4);
BST2.left = new BT2(2);
BST2.right = new BT2(6);
BST2.left.left = new BT2(1);
BST2.left.right = new BT2(3);
BST2.right.right = new BT2(7);
BST2.right.left = new BT2(5);

BST1.logValues();
BST2.logValues();

module.exports = BinaryTree;
