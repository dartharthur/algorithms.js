# Binary Search Tree

**Definition**: A BST is a binary tree in symmetric order.

A binary tree is either:
* Empty.
* Two disjoint binary trees (left and right).

Symmetric order. Each node has a key, and every node's key is:
* Larger than all keys in the left subtree.
* Smaller than all keys in its right subtree.
* (Contrast with heap where every node is larger (or smaller) than both its children).

If implementing BT nodes with keys and values, can implement symbol tables (associative arrays) using BSTs.

Tree Shape:
* Many BSTs correspond to same set of keys.
* Number of compares for search/insert is equal to 1 + depth of node.
* Tree shape depends on order of insertion (worst case it's inserted in order and looks like a linked list).

There is a correspondence between BSTs and quicksort partitioning.
As a result:
* If N distinct keys are inserted into a BST in random order, then the expected number of compares for a search/insert is ~ `2 ln N` i.e. `1.38 log`<sub>2</sub> `N`
* Worst-case height is N.
    - In quicksort, procedure is to shuffle keys to get probabilistic guarantee against worst-case number of compares.
    - In BST, exponentially small chance for worst case if keys inserted in random order, but can't randomize key insertion as they are inserted by the client.

## Symbol Tables

A Symbol Table is an Abstract Data Type (ADT) that can be implemented using a Binary Search Tree.

Symbol tables allow us to create key-value pair abstractions.
* Insert a value with specified key.
* Given a key, search for the corresponding value.

This sounds like a hash table, but a symbol table supports more complicated operations i.e. a symbol table allows for more than just lookups and insertions.

_Conventions_
* Values are not `null`.
* Method `get()` returns `null` if key not present.
* Method `put()` overwrites old value with new value.

### Basic API

Associative array abstraction --> associate one value with each key.

```java
 public class ST<Key, Value>
              ST()
         void put(Key key, Value val) // a[key] = val
        Value get(Key key)            // a[key]
         void delete(Key key)
      boolean contains(Key key)
      boolean isEmpty()
          int size()
Iterable<Key> keys()
```

Symbol table keys:
* should have a total order such that they can be compared to each other.
* should be immutable data types.

_See written notes for summary of Symbol Table implementations._

**order of growth of running time of ordered symbol table operations**

| operation          | sequential search | binary search | Binary Search Tree    |
| :----------------: | :---------------: | :-----------: | :-------------------: |
|  search            |   N               |   log N       |   h                   |
|  insert            |   1               |   N           |   h                   |
|  min / max         |   N               |   1           |   h                   |
|  floor / ceiling   |   N               |   log N       |   h                   |
|  rank              |   N               |   log N       |   h                   |
|  select            |   N               |   1           |   h                   |
|  ordered iteration |   N log N         |   N           |   N                   |
|  delete            |   N               |   N           |   sqrt(N)<sup>1</sup> |

h = height of BST (proportional to log N if keys inserted in random order)

1: Hibbard deletion is one algorithm for deleting nodes from a BST, but it has a defect. It unbalances the tree, leading to `sqrt(N)` height. So after enough deletions, then deleting, as well as searching and inserting, ends up taking time proportional to `sqrt(N)` as well.

Red-Black BST guarantees logarithmic performance for all operations, including delete.

## Balanced Search Trees

### 2-3 Tree

Allow 1 or 2 keys per node:
* 2-node: one key, two children.
* 3-node: two keys, three children (middle child is in between the two keys).

Perfect balance: Every path from root to null link has same length.
Symmetric order: Inorder traversal yields keys in ascending order.

Each transformation maintains symmetric order and perfect balance.

As a result of perfect balance, every path from root to null link has same length.

Tree height:
* Worst case: log<sub>2</sub> N (all 2-nodes)
* Worst case: log<sub>3</sub> N ~ .631 log<sub>2</sub> N (all 3-nodes)
* Between 12 and 30 for a million nodes.
* Between 18 and 30 for a billion nodes.

Note that the height of a 2-3 tree increases only when the root node splits. This happens only when every node on the search path from the root to the leaf where the new key should be inserted is a 3-node.

2-3 Tree is one way to implement a balanced tree and guarantee logarithmic time for all operations.

However, implementation is complicated:
* Maintaining multiple node types is cumbersome.
* Need multiple compares to move down tree.
* Need to mave back up the tree to split 4-nodes.
* Large number of cases for splitting.

### Left-Leaning Red-Black Binary Search Trees

1. Represent 2-3 tree as a BST.
2. Use "internal" left-leaning links as "glue" for 3-nodes.

Need a simple representation for 3-nodes. Larger of two nodes in a 3-node will always be the root of a BST of size two. The link between the two nodes in the 3-node is colored red to indicate this relationship. (_See written notes for visualization_).

In this way, any 2-3 tree corresponds to a left-leaning red-black BST. Relationship holds in the reverse.

**Equivalent Definition**

A BST such that:
* No node has two red links connected to it.
* Every path from root to null link has the same number of black links ("perfect black balance").
* Red links lean left.

**Key-Property**: 1-1 correspondence 2-3 and LLRB.

**Search**:
* Search implementation is the same as for elementary BST (we ignore color).
* Important because means we don't have to change code for more complicated operations like finding a key's floor.
* Note that due to better balance in a LLRB, search runs faster.

```java
public Val get(Key key)
{
    Node x = root;
    while (x != null)
    {
        int comp = key.compareTo(x.key);
        if (cmp < 0) x = x.left;
        else if (cmp > 0) x = x.right;
        else return x.val;
    }
    return null;
}
```

**Red-Black BST Representation**

```java
private static final boolean RED = true;
private static final boolean BLACK = false;

private class Node
{
    Key key;
    Value val;
    Node left, right;
    boolean color;  // color of parent link
}

private boolean isRed(Node x)
{
    if (x == null) return false; // null links are black
    return x.color == RED;
}
```

**Elementary Red-Black BST Operations**

1 - Left rotation: Orient a (temporarily) right-leaning red link to lean left.

Note that this is a local operation meaning it should only ever take a constant number of operations and it should not invalidate the tree.

```java
private Node rotateLeft(Node h)
{
    Node x = h.right;
    h.right = x.left;
    x.left = h;
    x.color = h.color;
    h.color = RED;
    return x;
}
```

2 - Right rotation: Orient a left-leaning red link to (temporarily) lean left.

```java
private Node rotateRight(Node h)
{
    Node x = h.left;
    h.left = x.right;
    x.right = h;
    x.color = h.color;
    h.color = RED;
    return x;
}
```

3 - Color flip: Recolor to split a (temporary) 4-node.

```java
private void flipColors(Node h)
{
    h.color = RED;
    h.left.color = BLACK;
    h.right.color = BLACK;
}
```

Key Property of Elementary Operations: Maintains symmetric order and perfect black balance.

**Insertion in a LLRB tree**

Strategy: Maintain 1-1 correspondence with 2-3 trees by applying elementary red-black BST operations.

Same code handles all cases:
* Right child red, left child black: `rotate left`.
* Left child and left-left grandchild red: `rotate right`.
* Both children red: `flip colors`.

```java
private Node put(Node h, Key key, Value val)
{
    if (h == null) return new Node(key, val, RED);
    int cmp = key.compareTo(h.key);
    if (cmp < 0) h.left = put(h.left, key, val);
    else if (cmp > 0) h.right = put(h.right, key, val);
    else h.val = val;

    if (isRed(h.right) && !isRed(h.left)) h = rotateLeft(h); // lean left
    if (isRed(h.left) && isRed(h.left.left)) h = rotateRight(h); // balance 4-node
    if (isRed(h.left) && isRed(h.right)) flipColors(h); // split 4-node

    return h;
}
```

**Summary**

Tree remains perfectly balanced when N is a power of 2.

Longest path is no more than twice as long as the shortest path (alternating red / black vs. all blacks).

Height of tree is ~ `2 log N` in worst case.

Hold true because:
* Every path from root to null link has same number of black links.
* Never two red links in a row.

Put another way, the height of any red–black BST on N keys (regardless of the order of insertion) is guaranteed to be between log<sub>2</sub> N and 2 log<sub>2</sub> N.

![st-summary](https://gist.githubusercontent.com/kamirdjanian/6253cd18ef37dab4de07e019f1f9e52f/raw/13479ac675fcf7fadb48edcb3dc2b10a64a9a622/st-implementations-summary.png)