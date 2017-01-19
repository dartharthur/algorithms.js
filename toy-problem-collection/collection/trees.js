var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.DFSelect = function(filter) {    
  /**
   * Key point:
   * If want to use a counter for tree depth 
   * Pass it in as a parameter to the recurse function 
   * This way the counter tracks tree depth via the call stack
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
      q.push( [current[0].children[i], current[1] + 1]);
    }
  }

  return results;
};

Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};

// this filter constructor produces a filter for the specified depth
var depthFilter = function (filterDepth) {
  return function (node, nodeDepth) {
    return filterDepth === nodeDepth;
  };
};

/**
 * Note:
 * Can't break out of forEach loops.
 * If solution requires breaking out of loop once an answer is found, forEach is wrong tool.
 * Use regular for loop instead.
 */
function twoSum(nums, target) {
  let storage = {};
  for (let i = 0; i < nums.length; i++) {
    let addend = target - nums[i];
    if (storage.hasOwnProperty(addend)) {
      return ([storage[addend], i]);
    } else {
      storage[nums[i]] = i;
    }
  }
};

var all = function () { return true; };
// keep a list of all nodes in breadth-first order to compare
// depth: 0
var root = new Tree(1);
var expected = [1];
// depth: 1
expected.push(3); root.addChild(3);
expected.push(2); root.addChild(2);
// depth: 2
expected.push(4); root.children[0].addChild(4);
expected.push(5); root.children[0].addChild(5);
expected.push(6); root.children[1].addChild(6);
expected.push(7); root.children[1].addChild(7);
// depth: 3 (sparse)
expected.push(8); root.children[0].children[0].addChild(8);
expected.push(9); root.children[1].children[1].addChild(9);

var simpleTree = new Tree(1);
var simple = [1];
simple.push(3); simpleTree.addChild(3);
simple.push(2); simpleTree.addChild(2);
simple.push(4); simpleTree.children[0].addChild(4);
simple.push(5); simpleTree.children[0].addChild(5);
simple.push(6); simpleTree.children[1].addChild(6);
simple.push(7); simpleTree.children[1].addChild(7);
simple.push(8); simpleTree.children[0].children[0].addChild(8);
simple.push(9); simpleTree.children[1].children[1].addChild(9);

var trueFilter = function (value, depth) {
  return value === true;
};
// this filter function should return all false nodes
var falseFilter = function (value, depth) {
  return value === false;
};
// keep a list of true and false nodes to compare
var trueNodes = [], falseNodes = [], trueResult = null; falseResult = null;
// depth: 0
var root2 = new Tree(false);
falseNodes.push(false);
// depth: 1
trueNodes.push(true);   root2.addChild(true);
falseNodes.push(false); root2.addChild(false);
// depth: 2
trueNodes.push(true);   root2.children[0].addChild(true);
trueNodes.push(true);   root2.children[1].addChild(true);
falseNodes.push(false); root2.children[0].addChild(false);
falseNodes.push(false); root2.children[1].addChild(false);
// depth: 3 (sparse)
trueNodes.push(true);   root2.children[0].children[0].addChild(true);
trueNodes.push(true);   root2.children[1].children[0].addChild(true);
falseNodes.push(false); root2.children[0].children[1].addChild(false);
falseNodes.push(false); root2.children[1].children[1].addChild(false);

// keep a list of nodes by depth to compare
var nodeDepths = [], deepNodes = [];
var root3 = new Tree(0);
// depth: 0
nodeDepths.push([0]);
// depth: 1
deepNodes = [];
deepNodes.push(1); root3.addChild(1);
deepNodes.push(2); root3.addChild(2);
nodeDepths.push(deepNodes);
// depth: 2
deepNodes = [];
deepNodes.push(3); root3.children[0].addChild(3);
deepNodes.push(4); root3.children[0].addChild(4);
deepNodes.push(5); root3.children[1].addChild(5);
deepNodes.push(6); root3.children[1].addChild(6);
nodeDepths.push(deepNodes);
// depth: 3 (sparse)
deepNodes = [];
deepNodes.push(3); root3.children[0].children[0].addChild(3);
deepNodes.push(4); root3.children[0].children[0].addChild(4);
deepNodes.push(5); root3.children[1].children[0].addChild(5);
deepNodes.push(6); root3.children[1].children[0].addChild(6);
nodeDepths.push(deepNodes);

// helper functions for the tests

// this filter constructor produces a filter for the specified depth
function depthFilter(filterDepth) {
  return function (node, nodeDepth) {
    return filterDepth === nodeDepth;
  };
};