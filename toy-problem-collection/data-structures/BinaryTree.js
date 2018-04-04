/* eslint-disable consistent-return */
const Stack = require("./Stack");

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTreeAnalyzer {
  constructor(strategy) {
    this.strategy = strategy;
  }

  logValues(node) {
    this.strategy(node, console.log);
  }
}

const inOrderRecursiveTraversalStrategy = function(node, action) {
  if (node.left === null && node.right === null) {
    return console.log(node.value);
  }

  if (node.left) {
    inOrderRecursiveTraversalStrategy(node.left, action);
  }

  action(node.value);

  if (node.right) {
    inOrderRecursiveTraversalStrategy(node.right, action);
  }
};

const inOrderIterativeTraversalStrategy = function(node, action) {
  const stack = new Stack();
  let current = node;
  while (!stack.isEmpty() || current !== null) {
    if (current !== null) {
      stack.push(current);
      current = current.left;
    } else {
      current = stack.pop();
      action(current.value);
      current = current.right;
    }
  }
};

const analyzerA = new BinaryTreeAnalyzer(inOrderRecursiveTraversalStrategy);
const analyzerB = new BinaryTreeAnalyzer(inOrderIterativeTraversalStrategy);

const BST = new BinaryTreeNode(4);
BST.left = new BinaryTreeNode(2);
BST.right = new BinaryTreeNode(6);
BST.left.left = new BinaryTreeNode(1);
BST.left.right = new BinaryTreeNode(3);
BST.right.right = new BinaryTreeNode(7);
BST.right.left = new BinaryTreeNode(5);

analyzerA.logValues(BST);
analyzerB.logValues(BST);

module.exports = BinaryTreeNode;
