const bind = function(func, context) {
  let boundArgs = Array.from(arguments).slice(2);
  return function() {
    let calledArgs = boundArgs.concat(Array.from(arguments));
    return func.apply(context, calledArgs);
  };
};

Function.prototype.bind = function(context) {
  let boundArgs = Array.from(arguments).slice(1);
  let func = this;
  return function() {
    let calledArgs = boundArgs.concat(Array.from(arguments));
    return func.apply(context, calledArgs)
  }
};

const compose = function() {
  let functions = Array.from(arguments);
  return function(arg) {
    return functions.reduceRight(function(input, func) {
      return func.call(null, input);
    }, arg);
  };
};

const pipe = function() {
  let functions = Array.from(arguments);
  return function(arg) {
    return functions.reduce(function(input, func) {
      return func.call(null, input);
    }, arg);
  };
};

/** 
 * eventing system
 * note: explain to students that you can check the console in the challenge app
 */
/** version 1 (explicit) */
var mixEventsV1 = (obj) => {
  var events = {};

  obj.trigger = function(event) {
    var boundArguments = Array.prototype.slice.call(arguments, 1);
    var eventHandlers = events[event];
    if (eventHandlers !== undefined) {
      for (var i = 0; i < eventHandlers.length; i++) {
        eventHandlers[i].apply(this, boundArguments);
      }
    }
  };

  obj.on = function(event, callback) {
    var eventHandlers = events[event];
    if (eventHandlers !== undefined) {
      eventHandlers.push(callback);
    } else {
      events[event] = []
      events[event].push(callback);
    }
  };
  return obj;
};

/** version 2 (succinct) */
const mixEventsV2 = (obj) => {
  const events = {};

  obj.trigger = function(event, ...args) {
    events[event] && events[event].forEach(event => event.apply(this, args));
  };

  obj.on = function(event, callback) {
    events[event] ? events[event].push(callback) : events[event] = [callback];
  };
  return obj;
};