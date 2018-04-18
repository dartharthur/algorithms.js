import isAnagram from "../problems/isAnagram";

const a1 = "eleven plus two";
const a2 = "twelve plus one";

const b1 = "dormitory";
const b2 = "dirtyroom";

const c1 = "mrpibb";
const c2 = "drpepp";

describe("isAnagram", () => {
  test("should determine whether two input strings are anagrams of each other.", () => {
    expect(isAnagram(a1, a2)).toBe(true);
  });
  test("should determine whether two input strings are anagrams of each other.", () => {
    expect(isAnagram(b1, b2)).toBe(true);
  });
  test("should determine whether two input strings are anagrams of each other.", () => {
    expect(isAnagram(c1, c2)).toBe(false);
  });
});
