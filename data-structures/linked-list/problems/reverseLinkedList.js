export const reverseLinkedList = linkedList => {
  let linkedListRef = linkedList;
  if (linkedListRef.next === null) return linkedListRef;
  let prev = null;
  let next = linkedListRef.next;
  while (next) {
    linkedListRef.next = prev;
    prev = linkedListRef;
    linkedListRef = next;
    next = next.next;
  }
  linkedListRef.next = prev;
  return linkedListRef;
};

export const reverseLinkedListClean = linkedList => {
  let current = linkedList;
  let reverse = null;
  let head = current;
  while (current) {
    current = current.next;
    head.next = reverse;
    reverse = head;
    head = current;
  }
  return reverse;
};
