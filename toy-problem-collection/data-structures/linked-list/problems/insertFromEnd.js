const insertFromEnd = (linkedList, value, offset) => {
  let n = linkedList;
  let length = 0;
  while (n !== null) {
    length += 1;
    n = n.next;
  }
  if (offset > length) return linkedList;
  if (length === offset) return { value, next: linkedList };
  n = linkedList;
  for (let i = 1; i < length - offset; i += 1) {
    n = n.next;
  }
  const temp = n.next;
  n.next = { value, next: temp };
  return linkedList;
};

export default insertFromEnd;
