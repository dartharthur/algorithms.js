/** version 1 (explicit es5) */
function mixEventsV1(obj) {
  var events = {};
  // var proof = 'am a closure';

  obj.trigger = function(event) {
    // console.log('here is proof that I', proof);
    var boundArguments = Array.prototype.slice.call(arguments, 1);
    var eventListeners = events[event];
    if (eventListeners !== undefined) {
      for (var i = 0; i < eventListeners.length; i++) {
        eventListeners[i].apply(this, boundArguments);
      }
    }
  };

  obj.on = function(event, callback) {
    // console.log('here is proof that I', proof);
    var eventListeners = events[event];
    if (eventListeners !== undefined) {
      eventListeners.push(callback);
    } else {
      events[event] = [];
      events[event].push(callback);
    }
  };
  return obj;
}

/** version 2 (succinct es6) */
mixEventsV2 = obj => {
  const events = {};

  obj.trigger = function(event, ...args) {
    events[event] &&
      events[event].forEach(eventListener => eventListener.apply(this, args));
  };

  obj.on = function(event, callback) {
    events[event] ? events[event].push(callback) : (events[event] = [callback]);
  };
  return obj;
};
