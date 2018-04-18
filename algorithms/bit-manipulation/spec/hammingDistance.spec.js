import hammingDistance from "../problems/hammingDistance";

const intA1 = 1;
const intB1 = 4;

const intA2 = 1;
const intB2 = 3;

const intA3 = 23;
const intB3 = 89;

describe("An implementation of hammingDistance", () => {
  test("should determine determine the number of positions at which the corresponding bits between two integers are different.", () => {
    expect(hammingDistance(intA1, intB1)).toBe(2);
  });
  test("should determine determine the number of positions at which the corresponding bits between two integers are different.", () => {
    expect(hammingDistance(intA2, intB2)).toBe(1);
  });
  test("should determine determine the number of positions at which the corresponding bits between two integers are different.", () => {
    expect(hammingDistance(intA3, intB3)).toBe(4);
  });
});
