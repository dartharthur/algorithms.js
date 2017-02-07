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
