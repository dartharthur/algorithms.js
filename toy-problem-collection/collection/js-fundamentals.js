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
    // let initialArgs = Array.from(arguments);
    return functions.reduceRight(function(input, func) {
      return func.call(null, input);
    }, arg);
  };
};

const pipe = function() {
  let functions = Array.from(arguments);
  return function(arg) {
    // let initialArgs = Array.from(arguments);
    return functions.reduce(function(input, func) {
      return func.call(null, input);
    }, arg);
  };
};

const compose = (...args) => v => args.reduceRight((a, f) => f(a), v);  
