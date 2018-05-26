const Bag = require('./Bag');

describe('Bag', () => {
  let bag;

  beforeEach(() => {
    bag = new Bag();
  });

  test('should have methods named "isEmpty", "size", "add", "remove", and "iterate"', () => {
    expect(typeof bag.isEmpty).toBe('function');
    expect(typeof bag.size).toBe('function');
    expect(typeof bag.add).toBe('function');
    expect(typeof bag.remove).toBe('function');
    expect(typeof bag.iterate).toBe('function');
  });

  test('should add an item to the bag', () => {
    const item = 5;
    bag.add(item);
    expect(bag.first.value).toBe(item);
  });

  test('should return the correct size of the bag after adding items', () => {
    bag.add(1);
    bag.add(2);
    expect(bag.size()).toBe(2);
  });

  test('should return true if the bag is empty', () => {
    expect(bag.isEmpty()).toBe(true);
  });

  test('should return false if the bag is not empty', () => {
    bag.add(1);
    expect(bag.isEmpty()).toBe(false);
  });

  test('should iterate across all items in the bag', () => {
    const values = [];
    const result = [3, 2, 1];
    bag.add(1);
    bag.add(2);
    bag.add(3);
    bag.iterate(value => values.push(value));
    expect(values).toEqual(result);
  });

  test('should remove an item from the bag if only one item was added to the bag', () => {
    bag.add(1);
    bag.remove(1);
    expect(bag.isEmpty()).toBe(true);
  });

  test('should report the correct size after removing an item from the bag', () => {
    bag.add(1);
    bag.remove(1);
    expect(bag.size()).toBe(0);
  });

  test('should remove an item from the bag if more than one item was added to the bag', () => {
    const values = [];
    const result = [1];
    bag.add(1);
    bag.add(2);
    bag.remove(2);
    bag.iterate(value => values.push(value));
    expect(values).toEqual(result);
  });

  test('should remove an item from the bag if more than one item was added to the bag', () => {
    const values = [];
    const result = [2];
    bag.add(1);
    bag.add(2);
    bag.remove(1);
    bag.iterate(value => values.push(value));
    expect(values).toEqual(result);
  });
});
