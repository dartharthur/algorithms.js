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
