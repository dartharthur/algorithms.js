import spyOn from "../problems/iSpy";

describe("The spyOn function", () => {
  test("should return a function.", () => {
    const spyAdd = spyOn((x, y) => x + y);
    expect(typeof spyAdd).toBe("function");
  });
});

describe("The function returned by spyOn", () => {
  const add = (x, y) => x + y;
  test("should have a method called callCount.", () => {
    const spyAdd = spyOn(add);
    expect(typeof spyAdd.callCount).toBe("function");
  });

  test("should have a method called wasCalledWith.", () => {
    const spyAdd = spyOn(add);
    expect(typeof spyAdd.wasCalledWith).toBe("function");
  });

  test("should have a method called returned.", () => {
    const spyAdd = spyOn(add);
    expect(typeof spyAdd.returned).toBe("function");
  });

  test("should return the correct callCount.", () => {
    const spyAdd = spyOn(add);
    const a = spyAdd(10, 5);
    const b = spyAdd(10, 15);
    const c = spyAdd(10, 50);
    expect(spyAdd.callCount()).toBe(3);
  });

  test("should return true if, given a value, it previously returned that value and false if not.", () => {
    const spyAdd = spyOn(add);
    const result = spyAdd(10, 5);
    expect(spyAdd.returned(15)).toBe(true);
  });
});
