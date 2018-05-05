# Binary Heap

Binary Tree
* Empty or node with links to left and right binary trees.

Complete Binary Tree
* Perfectly balanced, except for bottom level.
* **Property**: Height of complete tree with N nodes is the biggest integer less than log<sub>2</sub> N.
* **Proof**: Height only increases when N is a power of 2.

Binary Heap
* Array representation of a heap-ordered complete binary tree.

Heap-Ordered Binary Tree
* Keys in nodes.
* Parent's key no smaller than children's keys, true for every node in tree.

Array Representation
* Indices start at 1.
* Take nodes in level order (breadth-first).
* No explicit links needs, move around tree by performing arithmetic on the indices.

Binary Heap Properties

**Propositions**: 

* Largest key is `a[1]`, which is root of binary tree.
* Can use array indices to move through tree.
    - Parent of node at `k` is at `k / 2` (integer division).
    - Children of node at `k` are at `2k` and `2k + 1`.

## Binary Heap Operations

### Promotion in a Heap

**Scenario**: Child's key becomes `larger` key than its parent's key.

To eliminate violation:
* Exchange key in child with key in parent.
* Repeat until heap order restored.

```java
private void swim(int k)
/* parent = k / 2 */
/* child = k */
{
  /* while the parent is less than the child */
  while (k > 1 && less(k/2, k))
  {
    /* exchange child and parent */
    exch(k, k/2);
    /* child is now the parent */
    k = k/2;
  }
}
```

### Insertion in a Heap
* Insert node at end, then swim it up.
* Costs at most `1 + log N` compares

```java
public void insert(Key x)
{
  pq[++N] = x;
  swim(N);
}
```

### Demotion in a Heap

**Scenario**: Parent's key becomes smaller than one (or both) of its children's.

To eliminate violation:
* Exchange key in parent with key in larger child (not the smaller child).
* Repeat until heap order restored.

```java
private void sink(int k)
{
  while (2*k <= N)
  {
    int j = 2*k;
    /* j should be the larger of 2k or 2k + 1 (the larger of the two children) */
    if (j < N && less(j, j+1)) j++;
    /* if j (child) is less than the parent, done sinking */
    /* if k (parent) is not less than the child, done sinking */
    if (!less(k, j)) break;
    exch(k, j);
    /* update k to be whatever j (child) we swapped with */
    k = j;
  }
}
```

### Delete the Maximum in a Heap

* Delete max -- exchange root with node at end, then sink it down
* Costs at most `2 log N` compares.

```java
public Key delMax()
{
  Key max = pq[1];
  exch(1, N--);  // get value at N then decrement
  sink(1);  // new first value likely violates heap order, so must sink
  pq[N+1] = null;  // ensure memory is cleared of last value (prevent loitering)
  return max;
}
```
