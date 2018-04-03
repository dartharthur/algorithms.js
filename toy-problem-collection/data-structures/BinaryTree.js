/* eslint-disable consistent-return */
const Stack = require("./Stack");

class BinaryTreeNode {
  constructor(value, strategy) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.strategy = strategy;
  }

  logValues() {
    this.strategy();
  }
}

const inOrderRecursiveTraversalStrategy = function() {
  if (this.left === null && this.right === null) {
    return console.log(this.value);
  }

  if (this.left) {
    this.left.strategy();
  }

  console.log(this.value);

  if (this.right) {
    this.right.strategy();
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

const BST1 = new BinaryTreeNode(4, inOrderIterativeTraversalStrategy);
BST1.left = new BinaryTreeNode(2, inOrderIterativeTraversalStrategy);
BST1.right = new BinaryTreeNode(6, inOrderIterativeTraversalStrategy);
BST1.left.left = new BinaryTreeNode(1, inOrderIterativeTraversalStrategy);
BST1.left.right = new BinaryTreeNode(3, inOrderIterativeTraversalStrategy);
BST1.right.right = new BinaryTreeNode(7, inOrderIterativeTraversalStrategy);
BST1.right.left = new BinaryTreeNode(5, inOrderIterativeTraversalStrategy);

const BST2 = new BinaryTreeNode(4, inOrderRecursiveTraversalStrategy);
BST2.left = new BinaryTreeNode(2, inOrderRecursiveTraversalStrategy);
BST2.right = new BinaryTreeNode(6, inOrderRecursiveTraversalStrategy);
BST2.left.left = new BinaryTreeNode(1, inOrderRecursiveTraversalStrategy);
BST2.left.right = new BinaryTreeNode(3, inOrderRecursiveTraversalStrategy);
BST2.right.right = new BinaryTreeNode(7, inOrderRecursiveTraversalStrategy);
BST2.right.left = new BinaryTreeNode(5, inOrderRecursiveTraversalStrategy);

BST1.logValues();
BST2.logValues();
