const MaxPQ = require('./MaxPriorityQueue');

describe('Max Priority Queue', () => {
  let pq;

  beforeEach(() => {
    pq = new MaxPQ();
  });

  test('reports a size of 0 for a new priority queue.', () => {
    expect(pq.size()).toBe(0);
  });

  test('reports a size of 2 after adding 2 items.', () => {
    pq.insert(1);
    pq.insert(2);
    expect(pq.size()).toBe(2);
  });

  test('returns the max item in the priority queue.', () => {
    pq.insert(3);
    pq.insert(2);
    pq.insert(4);
    pq.insert(1);
    const result = pq.delMax();
    expect(result).toBe(4);
  });

  test('deletes the max item in the priority queue, maintaining correct heap order.', () => {
    pq.insert('T');
    pq.insert('S');
    pq.insert('R');
    pq.insert('N');
    pq.insert('P');
    pq.insert('O');
    pq.insert('A');
    pq.insert('E');
    pq.insert('I');
    pq.insert('G');
    pq.insert('H');
    pq.delMax();
    const result = pq.max();
    expect(result).toBe('S');
  });

  test('maintains correct heap order after inserting key at end.', () => {
    pq.insert('T');
    pq.insert('P');
    pq.insert('R');
    pq.insert('N');
    pq.insert('H');
    pq.insert('O');
    pq.insert('A');
    pq.insert('E');
    pq.insert('I');
    pq.insert('G');
    expect(pq._pq[pq._n]).toBe('G');
    pq.insert('S');
    expect(pq._pq[pq._n]).toBe('H');
    expect(pq._pq[2]).toBe('S');
  });
});
