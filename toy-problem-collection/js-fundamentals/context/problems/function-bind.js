const bind = (func, context) => {
  const boundArgs = Array.from(arguments).slice(2);
  return (...args) => {
    const calledArgs = boundArgs.concat(args);
    return func.apply(context, calledArgs);
  };
};

Function.prototype.bind = context => {
  const boundArgs = Array.from(arguments).slice(1);
  const func = this;
  return (...args) => {
    const calledArgs = boundArgs.concat(args);
    return func.apply(context, calledArgs);
  };
};
