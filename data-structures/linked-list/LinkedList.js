class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    const newNode = new LinkedListNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const oldNode = this.tail;
      oldNode.next = newNode;
      this.tail = newNode;
    }
  }

  removeHead() {
    const nodeToDelete = this.head;
    this.head = this.head.next;
    return nodeToDelete.value;
  }

  contains(target) {
    let current = this.head;
    while (current) {
      if (target === current.value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

class LinkedListNode {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

module.exports = LinkedList;
