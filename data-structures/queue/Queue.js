const LinkedListNode = require('../linked-list/LinkedListNode');

class Queue {
  constructor() {
    this._first = null;
    this._last = null;
    this._size = 0;
  }

  enqueue(value) {
    const oldLast = this._last;
    this._last = new LinkedListNode(value);
    if (this.isEmpty()) {
      this._first = this._last;
    } else {
      oldLast.next = this._last;
    }
    this._size += 1;
  }

  dequeue() {
    if (this._first) {
      const value = this._first.value;
      this._first = this._first.next;
      if (this.isEmpty()) {
        this._last = null;
      }
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

module.exports = Queue;

/* Alternative Object Based Implementation

class Queue {
  constructor() {
    this._storage = {};
    this._start = 0;
    this._end = 0;
  }

  enqueue(value) {
    this._storage[this._end] = value;
    this._end += 1;
  }

  dequeue() {
    if (!this.isEmpty()) {
      const result = this._storage[this._start];
      delete this._storage[this._start];
      this._start += 1;
      return result;
    }
  }

  size() {
    return this._end - this._start;
  }

  isEmpty() {
    return this.size() === 0;
  }
}

*/
