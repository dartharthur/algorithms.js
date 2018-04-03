import BinaryTree from "../../BinaryTree";
import mergeBinaryTreesR from "../problems/mergeBinaryTrees";

const treeA = new BinaryTree(5);
treeA.left = new BinaryTree(7);
treeA.right = new BinaryTree(4);

const treeB = new BinaryTree(3);
treeB.left = new BinaryTree(2);
treeB.right = new BinaryTree(1);

const treeAB = new BinaryTree(8);
treeAB.left = new BinaryTree(9);
treeAB.right = new BinaryTree(5);

const treeC = new BinaryTree(1);
treeC.left = new BinaryTree(3);
treeC.right = new BinaryTree(2);
treeC.left.left = new BinaryTree(5);

const treeD = new BinaryTree(2);
treeD.left = new BinaryTree(1);
treeD.right = new BinaryTree(3);
treeD.left.right = new BinaryTree(4);
treeD.right.right = new BinaryTree(7);

const treeCD = new BinaryTree(3);
treeCD.left = new BinaryTree(4);
treeCD.right = new BinaryTree(5);
treeCD.left.left = new BinaryTree(5);
treeCD.left.right = new BinaryTree(4);
treeCD.right.right = new BinaryTree(7);

describe("The recursive implementation of mergeBinaryTrees", () => {
  test("should merge two simple binary trees.", () => {
    expect(mergeBinaryTreesR(treeA, treeB)).toEqual(treeAB);
  });
  test("should merge two complex binary trees.", () => {
    expect(mergeBinaryTreesR(treeC, treeD)).toEqual(treeCD);
  });
});
