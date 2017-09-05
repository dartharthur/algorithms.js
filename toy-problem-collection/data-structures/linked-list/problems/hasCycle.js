/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {ListNode} head
 * @return {boolean}
 */
export const hasCycleS1 = head => {
  let linkedList = head;
  const nodesSeen = new Set();
  while (linkedList !== null) {
    if (nodesSeen.has(linkedList)) return true;
    nodesSeen.add(linkedList);
    linkedList = linkedList.next;
  }
  return false;
};

/**
 * Time Complexity: O(n + k) where k is at most length of cycle
 * Space Complexity: O(1)
 * @param {ListNode} head
 * @return {boolean}
 */
export const hasCyleS2 = head => {
  if (head === null || head.next === null) return false;
  let trailer = head;
  let runner = head;
  while (trailer.next && runner.next && runner.next.next) {
    trailer = trailer.next;
    runner = runner.next.next;
    if (trailer === runner) return true;
  }
  return false;
};
