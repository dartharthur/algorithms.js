/** 
 * promisifies a function that follows the traditional node callback signature
 * @param {function} fn
 * @return {function} promisifed version of fn
 */

function promisifyFn(fn) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn.call(null, ...args, (err, success) => {
        if (err) {
          reject(err);
        } else {
          resolve(success);
        }
      });
    });
  };
}

function dummyMakeRequest(url, params, callback) {
  if (url === "https://www.apple.com" && params.foo === "bar") {
    callback(null, "response");
  } else {
    callback("invalid url");
  }
}
