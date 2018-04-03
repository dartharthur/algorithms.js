import BST from "../../BinaryTree";
import isValidBST from "../problems/validate";

const BST1 = new BST(4);
BST1.left = new BST(2);
BST1.right = new BST(6);
BST1.left.left = new BST(1);
BST1.left.right = new BST(3);
BST1.right.right = new BST(7);
BST1.right.left = new BST(5);

const BST2 = new BST(4);
BST2.left = new BST(2);
BST2.right = new BST(6);
BST2.left.left = new BST(1);
BST2.left.right = new BST(5);
BST2.right.right = new BST(7);
BST2.right.left = new BST(5);

const BST3 = new BST(0);
BST3.right = new BST(1);

const BST4 = new BST(1);
BST4.right = new BST(1);

describe("isValidBST", () => {
  test("should determine if a binary tree is a valid binary search tree.", () => {
    expect(isValidBST(BST1)).toBe(true);
  });

  test("should determine if a binary tree is a valid binary search tree.", () => {
    expect(isValidBST(BST2)).toBe(false);
  });

  test("should determine if a binary tree is a valid binary search tree.", () => {
    expect(isValidBST(BST3)).toBe(true);
  });

  test("should determine if a binary tree is a valid binary search tree.", () => {
    expect(isValidBST(BST4)).toBe(false);
  });
});
