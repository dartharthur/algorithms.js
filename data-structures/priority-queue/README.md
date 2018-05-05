# Priority Queue
* Remove the largest (or smallest) item.
* Useful for graph searching (Dijkstra's algorithm, Prim's algorithm).

## API

```java
void insert(Key v)  // insert a key into the priority queue
Key delMax()        // return and remove the largest key
boolean isEmpty()   // is the priority queue empty?
Key max()           // return the largest key
int size()          // number of keys in the priority queue
```

## Example

**Challenge**: Find largest `M` items in a stream of `N` items. Don't have space to store all `N` items.

```java
// using a min-oriented priority queue
MinPQ<Transaction> pq = new MinPQ<Transaction>();

while (StdIn.hasNextLine())
{
  String line = StdIn.readLine();
  Transaction item = new Transaction(item);
  pq.insert(item);
  // only storing M items
  // if inserting item causes pq to have more than M items
  if (pq.size() > M)
    // then we can delete the min item to maintain the largest M items
    pq.delMin();
}
```

| implementation  |    time     |     space     |
| :-------------: | :---------: | :-----------: |
|  sort           |   N log N   |   N           |
|  elementary PQ  |   M N       |   M           |
|  binary heap    |   N log M   |   M           |
|  best in theory |   N         |   M           |

## Implementations

**Challenge**: Implement all operations efficiently.

order-of-growth of running time for priority queue with N items

| implementation   |    insert     |     del max   |     max       |
| :--------------: | :-----------: | :-----------: | :-----------: |
|  unordered array |   1           |   N           |   N           |
|  ordered array   |   N           |   1           |   1           |
|  goal            |   log N       |   log N       |   log N       |

## Notes

The expected number of array accesses and compares, respectively, to insert a random key into an ordered-array implementation of a priority queue is linear and logarithmic.

We can use binary search to find the insertion point using a logarithmic number of compares. On average, the key to be inserted must be placed in the middle of the array. To keep the array in order, we must shift over all larger keys.
