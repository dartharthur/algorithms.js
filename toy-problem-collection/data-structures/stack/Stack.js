class Stack {
  constructor() {
    this.storage = [];
  }

  push(val) {
    this.storage.push(val);
  }

  pop() {
    const temp = this.storage.pop();
    return temp;
  }

  size() {
    return this.storage.length;
  }
}

export default Stack;
