/* eslint-disable no-param-reassign */
const mergeBinaryTreesR = (t1, t2) => {
  if (t1 === null) return t2;
  if (t2 === null) return t1;
  t1.value += t2.value;
  t1.left = mergeBinaryTreesR(t1.left, t2.left);
  t1.right = mergeBinaryTreesR(t1.right, t2.right);
  return t1;
};

export default mergeBinaryTreesR;
