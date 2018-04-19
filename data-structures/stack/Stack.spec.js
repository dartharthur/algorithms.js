const Stack = require('./Stack');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('reports a size of 0 for a new queue.', () => {
    expect(stack.size()).toBe(0);
  });

  test('reports a size of 2 after adding 2 items.', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.size()).toBe(2);
  });

  test('does not error when removing from an empty stack.', () => {
    expect(() => stack.pop()).not.toThrow();
  });

  test('reports a size of 1 after adding 2 items and removing one.', () => {
    stack.push(1);
    stack.push(2);
    stack.pop();
    expect(stack.size()).toBe(1);
  });

  test('reports a size of 0 after removing more items than were added.', () => {
    stack.push(1);
    stack.pop();
    stack.pop();
    expect(stack.size()).toBe(0);
  });

  test('reports true when queried if empty after removing more items than were added.', () => {
    stack.push(1);
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  test('reports false when queried if empty after removing less items than were added.', () => {
    stack.push(1);
    stack.push(2);
    stack.pop();
    expect(stack.isEmpty()).toBe(false);
  });

  test('allows sequentially adding and removing items.', () => {
    stack.push(1);
    expect(stack.pop()).toBe(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
  });

  test('removes the most recently added of two items.', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
  });

  test('removes the newest item, after newer items have already been added and removed.', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    expect(stack.pop()).toBe(2);
  });
});
