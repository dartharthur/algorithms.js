/* eslint-disable */
import BinaryTree from '../implementation';

const mergeBinaryTrees = (t1, t2) => {
  const mergedTree = new BinaryTree(t1.val + t2.val);
  mergedTree.left = somefunction(t1.left, t2.left);
  mergedTree.right = somefunction(t1.right, t2.right);
  return mergedTree;
};

const somefunction = (child1, child2) => {
  if (!child1 && !child2) {
    return null;
  } else if (child1 && child2) {
    return new BinaryTree(child1.val + child2.val)
  } else if (child1 || child2) {
    return new BinaryTree(child1 ? child1.val : child2.val)
  }
}

export default mergeBinaryTrees;
