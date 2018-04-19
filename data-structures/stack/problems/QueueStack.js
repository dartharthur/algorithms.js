import Stack from '../../_constructors/Stack';

class QueueStack {
  constructor() {
    this._inbox = new Stack();
    this._outbox = new Stack();
  }

  enqueue(val) {
    this._inbox.push(val);
  }

  dequeue() {
    while (this._inbox.size() >= 1) {
      this._outbox.push(this._inbox.pop());
    }
    const temp = this._outbox.pop();
    while (this._outbox.size() >= 1) {
      this._inbox.push(this._outbox.pop());
    }
    return temp;
  }

  size() {
    return this._inbox.size();
  }
}

export default QueueStack;
