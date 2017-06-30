const reverseLinkedList = linkedList => {
  if (linkedList.next === null) return linkedList;
  let prev = null;
  let next = linkedList.next;
  while (next) {
    linkedList.next = prev;
    prev = linkedList;
    linkedList = next;
    next = next.next;
  }
  linkedList.next = prev;
  return linkedList;
};

const reverseLinkedListClean = linkedList => {
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