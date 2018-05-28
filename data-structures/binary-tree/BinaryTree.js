/* eslint-disable consistent-return */
const Stack = require('../stack/Stack');
const Queue = require('../queue/Queue');

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

/**
 * print root
 * print everything on left
 * print everything on right
 */
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

const preOrderIterativeTraversalStrategy = function(node, action) {
  if (!node) {
    return;
  }

  const stack = new Stack();
  let current = node;

  while (true) {
    if (current !== null) {
      action(current.value);
      stack.push(current);
      current = current.left;
    } else {
      if (stack.isEmpty()) {
        break;
      }
      current = stack.pop();
      current = current.right;
    }
  }
};

/**
 * print everything on left
 * print root
 * print everything on right
 */
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

const inOrderIterativeTraversalStrategy = function(node, action) {
  if (!node) {
    return;
  }

  const stack = new Stack();
  let current = node;

  while (true) {
    if (current !== null) {
      stack.push(current);
      current = current.left;
    } else {
      if (stack.isEmpty()) {
        break;
      }
      current = stack.pop();
      action(current.value);
      current = current.right;
    }
  }
};

/**
 * print everything on left
 * print everything on right
 * print root
 */
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

const postOrderIterativeTraversalStrategy = function(node, action) {
  if (!node) {
    return;
  }

  const s1 = new Stack();
  const s2 = new Stack();

  let current = node;
  s1.push(current);

  while (!s1.isEmpty()) {
    current = s1.pop();
    s2.push(current);
    if (current.left) {
      s1.push(current.left);
    }
    if (current.right) {
      s1.push(current.right);
    }
  }

  while (!s2.isEmpty()) {
    let bt = s2.pop();
    action(bt.value);
  }
};

/**
 * print every level
 */
const levelOrderTraversalStrategy = function(node, action) {
  if (!node) {
    return;
  }

  const q = new Queue();

  let current = node;
  q.enqueue(current);

  while (!q.isEmpty()) {
    current = q.dequeue();
    action(current.value);

    if (current.left) {
      q.enqueue(current.left);
    }

    if (current.right) {
      q.enqueue(current.right);
    }
  }
};

module.exports = {
  BinaryTreeNode,
  BinaryTreeAnalyzer,
  preOrderRecursiveTraversalStrategy,
  inOrderRecursiveTraversalStrategy,
  postOrderRecursiveTraversalStrategy,
  preOrderIterativeTraversalStrategy,
  inOrderIterativeTraversalStrategy,
  postOrderIterativeTraversalStrategy,
  levelOrderTraversalStrategy,
};
