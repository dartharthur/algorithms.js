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

module.exports = Stack;
