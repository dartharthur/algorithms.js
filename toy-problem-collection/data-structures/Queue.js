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

module.exports = Queue;
