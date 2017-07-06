import BinaryTree from '../implementation';
import mergeBinaryTrees from '../problems/mergeBinaryTrees';

const tree1 = new BinaryTree(1);
tree1.left = new BinaryTree(3);
tree1.right = new BinaryTree(2);
tree1.left.left = new BinaryTree(5);

const tree2 = new BinaryTree(2);
tree2.left = new BinaryTree(1);
tree2.right = new BinaryTree(3);
tree2.left.right = new BinaryTree(4);
tree2.right.right = new BinaryTree(7);

const mergedTree = new BinaryTree(3);
mergedTree.left = new BinaryTree(4);
mergedTree.right = new BinaryTree(5);
mergedTree.left.left = new BinaryTree(5);
mergedTree.left.right = new BinaryTree(4);
mergedTree.right.right = new BinaryTree(7);

test('it should return a merged binary tree', () => {
  expect(tree1).toEqual(mergedTree);
});
