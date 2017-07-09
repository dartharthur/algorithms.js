/* eslint-disable consistent-return */

/**
 * @param {BinarySearchTreeNode} root
 * @param {BinarySearchTreeNode} p
 * @param {BinarySearchTreeNode} q
 * @return {BinarySearchTreeNode}
 */
const lowestCommonAncestor = (rootNode, p, q) => {
  let pFound = false;
  let qFound = false;
  const findAncestors = (baseNode, targetNode, ancestors = []) => {
    if (baseNode === targetNode) {
      ancestors.push(baseNode);
      return ancestors;
    }
    ancestors.push(baseNode);
    if (targetNode.val < baseNode.val) return findAncestors(baseNode.left, targetNode, ancestors);
    if (targetNode.val > baseNode.val) return findAncestors(baseNode.right, targetNode, ancestors);
  };
  const pAncestors = findAncestors(root, p);
  const qAncestors = findAncestors(root, q);
  const length = pAncestors.length > qAncestors.length ? pAncestors.length : qAncestors.length;
  for (let i = length - 1; i >= 0; i -= 1) {
    if (pAncestors[i] === p) pFound = true;
    if (qAncestors[i] === q) qFound = true;
    if (pFound && qFound) {
      if (pAncestors[i] === qAncestors[i]) {
        return qAncestors[i];
      }
      return qAncestors[i - 1];
    }
  }
};

export default lowestCommonAncestor;
