/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycleS1 = head => {
  const nodesSeen = new Set();
  while (head !== null) {
    if (nodesSeen.has(head)) {
      return true;
    } else {
      nodesSeen.add(head)
    }
    head = head.next;
  }
  return false;
};

/**
 * Time Complexity: O(n + k) where k is at most length of cycle
 * Space Complexity: O(1)
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCyleS2 = head => {
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