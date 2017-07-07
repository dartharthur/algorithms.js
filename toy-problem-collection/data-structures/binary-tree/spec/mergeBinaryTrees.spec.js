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

const mergedTree1 = new BinaryTree(3);
mergedTree1.left = new BinaryTree(4);
mergedTree1.right = new BinaryTree(5);
mergedTree1.left.left = new BinaryTree(5);
mergedTree1.left.right = new BinaryTree(4);
mergedTree1.right.right = new BinaryTree(7);

const tree3 = new BinaryTree(5);
tree3.left = new BinaryTree(7);
tree3.right = new BinaryTree(4);

const tree4 = new BinaryTree(3);
tree4.left = new BinaryTree(2);
tree4.right = new BinaryTree(1);

const mergedTree2 = new BinaryTree(8);
mergedTree2.left = new BinaryTree(9);
mergedTree2.right = new BinaryTree(5);

test('it should return a merged binary tree', () => {
  expect(mergeBinaryTrees(tree3, tree4)).toEqual(mergedTree2);
});
