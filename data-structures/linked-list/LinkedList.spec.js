const LinkedList = require('./LinkedList');

describe('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  test('should have a head and tail', () => {
    expect(linkedList).toHaveProperty('head');
    expect(linkedList).toHaveProperty('tail');
  });

  test('should have methods named "addToTail", "removeHead", and "contains"', () => {
    expect(typeof linkedList.addToTail).toBe('function');
    expect(typeof linkedList.removeHead).toBe('function');
    expect(typeof linkedList.contains).toBe('function');
  });

  test('should designate a new tail when new nodes are added', () => {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).toBe(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).toBe(5);
  });

  test('should remove the head from the list when removeHead is called', () => {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).toBe(4);
    linkedList.removeHead();
    expect(linkedList.head.value).toBe(5);
  });

  test('should return the value of the former head when removeHead is called', () => {
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).toBe(4);
  });

  test('should contain a value that was added', () => {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).toBe(true);
    expect(linkedList.contains(5)).toBe(true);
    expect(linkedList.contains(6)).toBe(false);
  });

  test('should not contain a value that was removed', () => {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).toBe(false);
  });
});
