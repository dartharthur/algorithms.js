const LinkedListNode = require('./LinkedListNode');

class Bag {
  constructor() {
    this.first = null;
    this.n = 0;
  }

  isEmpty() {
    return this.first === null;
  }

  size() {
    return this.n;
  }

  add(item) {
    const oldFirst = this.first;
    this.first = new LinkedListNode(item);
    this.first.next = oldFirst;
    this.n += 1;
  }

  remove(item) {
    if (this.first.value === item) {
      this.first = this.first.next;
      this.n -= 1;
    } else {
      let current = this.first;
      while (current && current.next) {
        if (current.next.value === item) {
          const newNext = current.next.next;
          current.next = newNext;
          this.n -= 1;
          return;
        }
        current = current.next;
      }
    }
  }

  iterate(callback) {
    let current = this.first;
    while (current) {
      callback(current.value);
      current = current.next;
    }
  }
}

module.exports = Bag;
