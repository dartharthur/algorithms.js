function bind(func, context) {
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

function compose() {
  let functions = Array.from(arguments);
  return function(arg) {
    return functions.reduceRight(function(input, func) {
      return func.call(null, input);
    }, arg);
  };
};

function pipe() {
  let functions = Array.from(arguments);
  return function(arg) {
    return functions.reduce(function(input, func) {
      return func.call(null, input);
    }, arg);
  };
};

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
      events[event] = []
      events[event].push(callback);
    }
  };
  return obj;
};

/** version 2 (succinct es6) */
mixEventsV2 = (obj) => {
  const events = {};

  obj.trigger = function(event, ...args) {
    events[event] && events[event].forEach(eventListener => eventListener.apply(this, args));
  };

  obj.on = function(event, callback) {
    events[event] ? events[event].push(callback) : events[event] = [callback];
  };
  return obj;
};

function spyOn(fn) {
  let callCount = 0;
  let answerKey = {};
  
  const spyFunc = function() {
    let args = Array.from(arguments);
    let answer = fn.apply(null, args);
    args.forEach(arg => answerKey[JSON.stringify(arg)] = answer);
    callCount++;
    return answer;
  };
  
  spyFunc.callCount = function() {
    return callCount;
  };
  
  spyFunc.wasCalledWith = function(arg) {
    return !!answerKey[JSON.stringify(arg)];
  };
  
  spyFunc.returned = function(val) {
    for (let key in answerKey) {
      return answerKey[key] === val;
    }
  };
  return spyFunc;
};