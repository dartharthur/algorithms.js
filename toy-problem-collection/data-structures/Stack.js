class Stack {
  constructor() {
    this._storage = [];
  }

  push(val) {
    this._storage.push(val);
  }

  pop() {
    const temp = this._storage.pop();
    return temp;
  }

  size() {
    return this._storage.length;
  }

  isEmpty() {
    return this.size() === 0;
  }
}

module.exports = Stack;
