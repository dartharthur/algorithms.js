import Stack from '../Stack';

const Queue = function() {

  let inbox = new Stack();
  let outbox = new Stack();

  this.enqueue = function(val) {
    inbox.push(val);
  };

  this.dequeue = function() {
    while (inbox.size() >= 1) {
      outbox.push(inbox.pop());
    }
    let temp = outbox.pop();
    while (outbox.size() >= 1) {
      inbox.push(outbox.pop());
    }
    return temp;
  };

  this.size = function() {
    return inbox.size();
  };
};