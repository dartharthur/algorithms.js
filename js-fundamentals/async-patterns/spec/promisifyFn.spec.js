import promisifyFn from "../problems/promisifyFn";

const dummyMakeRequest = (url, params, callback) => {
  if (url === "https://www.apple.com" && params.foo === "bar") {
    callback(null, "response");
  } else {
    callback("invalid url");
  }
};

// Example Request w/ Callback
// dummyMakeRequest('https://www.apple.com', { foo: 'bar' }, (err, result) => {
//   err ? console.log(err) : console.log(result);
// });

describe("promisifyFn", () => {
  const promisifiedFn = promisifyFn(dummyMakeRequest);
  test("should return a function.", () => {
    expect(typeof promisifiedFn).toBe("function");
  });
});

describe("The function returned by promisifyFn", () => {
  const promisifiedFn = promisifyFn(dummyMakeRequest);
  test("should return a promise.", () => {
    expect(
      promisifiedFn("https://www.apple.com", { foo: "bar" }) instanceof Promise
    ).toBe(true);
  });
  test("should output an error if it receives an incorrect url.", () => {
    let result;
    promisifiedFn("https://www.google.com", { foo: "bar" })
      .then(data => {
        result = data;
        expect(result).toBe("invalid url");
      })
      .catch(err => {
        result = err;
        expect(result).toBe("invalid url");
      });
  });
  test("should output an error if it receives an incorrect parameter.", () => {
    let result;
    promisifiedFn("https://www.apple.com", { foo: "baz" })
      .then(data => {
        result = data;
        expect(result).toBe("invalid url");
      })
      .catch(err => {
        result = err;
        expect(result).toBe("invalid url");
      });
  });
  test("should output a response if it receives a correct url and parameter.", () => {
    let result;
    promisifiedFn("https://www.apple.com", { foo: "bar" })
      .then(data => {
        result = data;
        expect(result).toBe("response");
      })
      .catch(err => {
        result = err;
        expect(result).toBe("response");
      });
  });
});
