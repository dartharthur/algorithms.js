/** helper function */
function Node(val) {
  let obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

/** helper list */
let list = Node('A');
let nodeB = list.next = Node('B');
let nodeC = nodeB.next = Node('C');
let nodeD = nodeC.next = Node('D');
let nodeE = nodeD.next = Node('E');

function insertFromEnd(linkedList, value, offset) {
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
}