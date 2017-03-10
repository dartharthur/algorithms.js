var Stack = function() {
  var storage = [];

  this.push = function(val) {
    storage.push(val);
  };

  this.pop = function() {
    let temp = storage.pop();
    return temp;
  };

  this.size = function() {
    return storage.length;
  };
};

var Queue = function() {

  var inbox = new Stack();
  var outbox = new Stack();

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