export const compose = args => arg =>
  args.reduceRight((input, func) => func.call(null, input), arg);

export const pipe = (...args) => arg =>
  args.reduce((input, func) => func.call(null, input), arg);
