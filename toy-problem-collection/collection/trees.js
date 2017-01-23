function Tree(value) {
  this.value = value;
  this.children = [];
};

function BinaryTreeNode(value) {
  this.value = value;
  this.left = this.right = null;
}

Tree.prototype.DFSelect = function(filter) {    
  /**
   * note:
   * if want to use a counter for tree depth 
   * pass it in as a parameter to the recurse function 
   * this way the counter tracks tree depth via the call stack
   */  
  let result = [];
  recurse = (node, nodeDepth) => {
    if (filter(node.value, nodeDepth)) {
      result.push(node.value);
    }
    node.children.forEach(child => {
      recurse(child, nodeDepth + 1);
    })
  };
  recurse(this, 0);
  return result;
};

Tree.prototype.BFSelect = function(filter) {
  let q = [ [this, 0] ];
  let results = [];
  let current;

  while (q.length > 0) {
    current = q.shift();
    if (filter(current[0].value, current[1])) {
      results.push(current[0].value);
    }

    if (current[0].children.length === 0) {
      continue;
    }

    for (let i = 0; i < current[0].children.length; i++) {
      q.push([current[0].children[i], current[1] + 1]);
    }
  }

  return results;
};

Tree.prototype.countLeaves = function() {
  let counter = 0;
  recurse = (node) => {
    if (node.children.length === 0) {
      counter++;
      return;
    }
    node.children.forEach(child => {
      recurse(child);
    })
  };
  recurse(this);
  return counter;
};

Tree.prototype.map = function(callback) {
  let mappedTree = new Tree(callback(this.value));
  recurse = (current, newCurrent) => {
    current.children.forEach(child => {
      let newChild = newCurrent.addChild(callback(child.value));
      recurse(child, newChild);
    })
  };
  recurse(this, mappedTree);
  return mappedTree;
};

Tree.prototype.addChild = function(child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }
  if (!this.isDescendant(child)){
    this.children.push(child);
  } else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index,1);
  } else {
    throw new Error("That node is not an immediate child of this tree");
  }
};

/** 
 * note:
 * this solution needs to be modified
 * only solves for topmost left and right subtrees but child nodes must also be balanced
 * i.e. if a child node's left and right subtrees have height diff > 1 then whole tree is unbalanced
 */
const isBalanced = function(root) {
  let leftDepth = 0;
  let rightDepth = 0;
  
  const findDepth = function(node) {
    let q = [ [node, 1] ];
    let current;
    let depth;
    while (q.length > 0) {
      current = q.shift();
      current[0] && current[0].left && q.push([current[0].left, current[1] + 1]);
      current[0] && current[0].right && q.push(current[0].right, current[1] + 1);
      current[0] ? depth = current[1] : depth;
    } 
    return depth;
  };
  
  root.left ? leftDepth = findDepth(root.left) : leftDepth;
  root.right ? rightDepth = findDepth(root.right) : rightDepth;

  return Math.abs(leftDepth - rightDepth) > 1 ? false : true;
};