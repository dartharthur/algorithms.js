const insertFromEnd = (linkedList, value, offset) => {
  let n = linkedList;
  let length = 0;

  while (n !== null) {
    length += 1;
    n = n.next;
  }

  if (offset > length) return linkedList;
  if (length === offset) return {value: value, next: linkedList};

  n = linkedList;
  for (let i = 1; i < length - offset; i++) {
    n = n.next;
  }

  let temp = n.next;
  n.next = {value: value, next: temp};

  return linkedList;
};