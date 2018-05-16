# Hash Table

Uniform hashing assumption: Each key is equally likely to hash to an integer between 0 and M - 1.

Collision: Two distinct keys hashing to same index.
* Birthday problem -> can't avoid collisions unless you have ridiculous (quadratic) amount of memory.
* Collisions will be evenly distributed.

Might implement separate chaining to deal with collisions.

In separate chaining, you have a linked list at any given position in a hash table's internal list.

Might implement linear probing / open addressing to deal with collisions.

In linear probing, when a new key collides, find next empty slot, and put it there.

If you can keep array half-full, search / insert / delete in linear probing will be a small constant number of operations.

Can use hash table to implement a symbol table. Note, can't do ordered operations on a hash table.

Uniform hashing assumption has practical consequences on performance.

One-way hash functions like MD4, MD5, SHA-0, SHA-1 (all insecure) too expensive to use in symbol table implementation.

**Separate chaining vs. linear probing**

Separate chaining
* Easier to implement delete.
* Performance degrades gracefully.
* Clustering less sensitive to poorly-designed hash function.

Linear probing
* Less wasted space.
* Better cache performance.

**Hash tables vs. balanced search trees**

Hash tables
* Simpler to code.
* No effective alternative for unordered keys.
* Faster for simple keys (a few arithmetic ops vs. `log N` compares).

Balanced search trees
* Stronger performance guarantee.
* Support for ordered ST operations.
* Easier to implement `compareTo()` correctly than `equals()` and `hashCode()`.