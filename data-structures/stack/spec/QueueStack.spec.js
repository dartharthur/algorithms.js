import QueueStack from '../problems/QueueStack';

describe('A QueueStack', () => {
  test('should enqueue a value in the correct order.', () => {
    const queueStack = new QueueStack();
    queueStack.enqueue(5);
    queueStack.enqueue(8);
    const a = queueStack.dequeue();
    expect(a).toBe(5);
  });

  test('should return the correct size.', () => {
    const queueStack = new QueueStack();
    queueStack.enqueue(5);
    queueStack.enqueue(8);
    queueStack.enqueue(15);
    expect(queueStack.size()).toBe(3);
  });
});
