const Queue = require('./Queue');

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('reports a size of 0 for a new queue.', () => {
    expect(queue.size()).toBe(0);
  });

  test('reports a size of 2 after adding 2 items.', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.size()).toBe(2);
  });

  test('does not error when removing from an empty queue.', () => {
    expect(() => queue.dequeue()).not.toThrow();
  });

  test('reports a size of 1 after adding 2 items and removing one.', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    expect(queue.size()).toBe(1);
  });

  test('reports a size of 0 after removing more items than were added.', () => {
    queue.enqueue(1);
    queue.dequeue();
    queue.dequeue();
    expect(queue.size()).toBe(0);
  });

  test('reports true when queried if empty after removing more items than were added.', () => {
    queue.enqueue(1);
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  test('reports false when queried if empty after removing less items than were added.', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    expect(queue.isEmpty()).toBe(false);
  });

  test('allows sequentially adding and removing items.', () => {
    queue.enqueue(1);
    expect(queue.dequeue()).toBe(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(2);
  });

  test('removes the least recently added of two items.', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
  });

  test('removes the oldest item, after newer items have already been added and removed.', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(2);
  });
});
