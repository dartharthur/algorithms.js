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

  printValues(node, action = console.log) {
    this.strategy(node, action);
  }
}

const preOrderRecursiveTraversalStrategy = function(node, action) {
  if (node.left === null && node.right === null) {
    return action(node.value);
  }

  action(node.value);

  if (node.left) {
    preOrderRecursiveTraversalStrategy(node.left, action);
  }

  if (node.right) {
    preOrderRecursiveTraversalStrategy(node.right, action);
  }
};

const inOrderRecursiveTraversalStrategy = function(node, action) {
  if (node.left === null && node.right === null) {
    return action(node.value);
  }

  if (node.left) {
    inOrderRecursiveTraversalStrategy(node.left, action);
  }

  action(node.value);

  if (node.right) {
    inOrderRecursiveTraversalStrategy(node.right, action);
  }
};

const postOrderRecursiveTraversalStrategy = function(node, action) {
  if (node.left === null && node.right === null) {
    return action(node.value);
  }

  if (node.left) {
    postOrderRecursiveTraversalStrategy(node.left, action);
  }

  if (node.right) {
    postOrderRecursiveTraversalStrategy(node.right, action);
  }

  action(node.value);
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

module.exports = {
  BinaryTreeNode,
  BinaryTreeAnalyzer,
  preOrderRecursiveTraversalStrategy,
  inOrderRecursiveTraversalStrategy,
  postOrderRecursiveTraversalStrategy,
  inOrderIterativeTraversalStrategy
};
