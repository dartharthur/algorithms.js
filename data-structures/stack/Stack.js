const LinkedListNode = require('../linked-list/LinkedListNode');

class Stack {
  constructor() {
    this._first = null;
    this._size = 0;
  }

  push(value) {
    const oldFirst = this._first;
    this._first = new LinkedListNode(value);
    this._first.next = oldFirst;
    this._size += 1;
  }

  pop() {
    if (this._first) {
      const value = this._first.value;
      this._first = this._first.next;
      this._size -= 1;
      return value;
    }
  }

  size() {
    return this._size;
  }

  isEmpty() {
    return this._first === null;
  }
}

module.exports = Stack;

/* Alternative Object Based Implementation

class Stack {
  constructor() {
    this._storage = {};
    this._size = 0;
  }

  push(value) {
    this._storage[this._size] = value;
    this._size += 1;
  }

  pop() {
    if (this._size) {
      this._size -= 1;
      const result = this._storage[this._size];
      delete this._storage[this._size];
      return result;
    }
  }

  size() {
    return this._size;
  }

  isEmpty() {
    return this._size === 0;
  }
}

*/
