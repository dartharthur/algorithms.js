class MinStack {
  constructor() {
    this.minStorage = [];
    this.storage = [];
  }

  push(x) {
    const currentMin = this.getMin();
    this.storage.push(x);
    if (this.minStorage.length === 0 || x < currentMin) {
      this.minStorage.push(x);
    } else {
      this.minStorage.push(currentMin);
    }
  }

  pop() {
    if (this.storage.length) {
      const current = this.storage.pop();
      this.minStorage.pop();
      return current;
    }
  }

  top() {
    return this.storage[this.storage.length - 1];
  }

  getMin() {
    return this.minStorage[this.minStorage.length - 1];
  }
}
