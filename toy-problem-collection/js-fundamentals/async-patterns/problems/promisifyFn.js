/** 
 * promisifies a function that follows the traditional node callback signature
 * @param {function} fn
 * @return {function} promisifed version of fn
 */

const promisifyFn = fn => (...args) =>
  new Promise((resolve, reject) => {
    fn.call(null, ...args, (err, success) => {
      if (err) {
        reject(err);
      } else {
        resolve(success);
      }
    });
  });

export default promisifyFn;
