# Sorting Algorithms

In order to make a comparison between two items, they must exhibit total order.

Total order is a binary relation that satisifies the following properties:
- Antisymmetry: if _v <= w_ and _w <= v_, then _v === w_.
- Transitivity: if _v <= w_ and _w <= x_, then _v <= x_.
- Totality: either _v <= w_ or _w <= v_ or both.

Java implements a `Comparable` interface that has a `compareTo` method which serves as a callback used to compare two items.

This method returns 0 if the two items are equal, -1 if the item is less than the item it's being compared to (the argument to `compareTo`), and +1 if it's greater.

It is important that the `compareTo` method not perform any extraneous calcluations that can inadvertently violate one of the aforementioned principles. If this occurs, then the binary relation will no longer exhibit total order and it will not be possible to perform a correct sort.

## Selection Sort

**Algorithm**:

* Pointer scans from left to right.
* In iteration `i`, find the index `min` of smallest remaining entry.
* Swap `a[i]` and `a[min]`

**Invariants**:

* Entries to the left of, and including, the pointer are fixed and in ascending order.
* No entry to the right of the pointer is smaller than any entry to the left of the pointer.

**Proposition**:

* Running time is insenstive to input -- quadratic time, even if input is sorted, --> make 1/2 n<sup>2</sup> comparisons
* Minimal data movement -- linear number of exchanges.
* Summary: 1/2 n<sup>2</sup> comparisons, n exchanges

## Insertion Sort

**Algorithm**:

* Pointer scans from left to right.
* In iteration `i`, swap `a[i]` with each larger entry to its left.

**Invariants**:

* Entries to the left of, and including, the pointer are in ascending order.
* Entries to the right of the pointer have not yet been seen.

**Proposition**:

* ~ 1/4 n<sup>2</sup> compares and ~ 1/4 n<sup>2</sup> exchanges on average.
* Running time is sensitive to input.
* Insertion sort about twice as fast as selection sort.
* Best case, if array is in ascending order (already sorted), insertion sort makes N - 1 compares and 0 exchanges. Faster than selection sort.
* Worst case, if array is in descending order (and no duplicates), 1/2 n<sup>2</sup> comparisons, 1/2 n<sup>2</sup> exchanges. Slower than selection sort, because uses same number of compares, but many more exchanges.

## Insertion Sort: Partially Sorted Arrays

**Definitions**:

* An inversion is a pair of keys that are out of order.
* An array is partially sorted if the number of inversions is `<= c N`
    * Ex 1. A subarray of size 10 appended to a sorted subarray of size N.
    * Ex 2. An array of size N with only 10 entries out of place.

**Proposition**:

* For partially-sorted arrays, insertion sort runs in linear time.

**Proof**:

* Number of exchanges equals the number of inversions.

## Shellsort

**Idea**:

* Utilize insertion sort mechanics, but move entries more than one position at a time by `h-sorting` the array.
* An `h-sorted` array is h interleaved sorted subsequences

```
h = 4

L E E A M H L E P S O L T S X R

L ----- M ----- P ----- T

  E ----- H ----- S ----- S

    E ----- L ----- O ----- X

      A ----- E ----- L ----- R
```

**Algorithm**:

* `h-sort` array for decreasing sequence of values of `h`
* How to h-sort an array?
    * Use insertion sort, but instead of going one back, go `h` back i.e. insertion sort with stride length `h`.
* why?
    * if increments are big --> generate small subarrays
    * if increments are small --> nearly in order, array is partially sorted, insertion sort is fast

**Increment Sequences**:

* Shell -- `powers of two minus one` (1, 3, 7, 15, 31, 63...)
* Knuth -- `3x + 1` (1, 4, 13, 40, 121...)
* Sedgewick -- (1, 5, 19, 41, 109...)

**Analysis**:

* The worst case number of compares used by shellsort with the 3x + 1 increments is O(N<sup>3/2</sup>).

* Simple idea leads to substantial performance gains.

* Useful in practice --> Fast unless array size is huge.

## Shuffle Sort

**Proposition**:

* Shuffle sort produces a uniformly random permutation (assuming real numbers generated uniformly at random) of the input array, provided no duplicate values i.e. every possible way of shuffling the deck appears with equal probability.

**Goal**:

* Rearrange array so that result is a uniformly random permutation in `linear time`.

**Knuth Shuffle**:

* In iteration `i`, pick integer `r` between `0` and `i` uniformly at random.
* Swap `a[i]` and `a[r]`.
* Knuth shuffle produces a uniformly random permutation in `linear time`.
* Key: uniform random integer `r` must be between `0` and `i`.
* Correct variant: integer `r` is between `i` and `N - 1`.
* Common bug: integer `r` is between `0` and `N - 1` (picking amongst entire array doesn't guarantee uniformly random result).

## Mergesort

**Goal**:

* Given two sorted subarrays `a[lo]` to `a[mid]` and `a[mid + 1]` to `a[hi]`, replace with sorted subarray `a[lo]` to `a[hi]`.

**Proposition**:

* Mergesort uses at most N log N compares and 6N log N array accesses to sort any array of size N.
* Mergesort uses extra space proportional to N -- array `aux[]` needs to be of size `N` for the last merge.

**Definition**:

* A sorting algorithm is in-place if it uses `<= c log N` extra memory.
* Examples: Insertion sort, selection sort, shellsort.

## Quicksort

**Algorithm**:
* Shuffle the array.
* Partition so that, for some `j`:
    - entry `a[j]` is in place
    - no larger entry to the left of `j`
    - no smaller entry to the right of `j`
* Sort each piece recursively.

**Partitioning Procedure**:
* Phase I (repeat until `i` and `j` pointers cross)
    - Scan `i` from left to right so long as `(a[i] < a[lo])`.
    - Scan `j` from right to left so long as `(a[j] > a[lo])`.
    - Exchange `a[i]` with `a[j]`.

* Phase II (when pointers cross)
    - Exchange `a[lo]` with `a[j]`.

**Implementation Details**:

* Partitioning in-place:
    - Using an extra array makes partitioning easier (and stable), but is not worth the cost.
    - Advantage over mergesort is that it doesn't take extra space. Does sort in-place.
* Terminating the loop:
    - Testing whether the pointers cross is trickier than it seems. (duplicate keys)
* Preserving randomness:
    - _Shuffling is needed for performance guarantee_.
* Equal keys:
    - When duplicates are present, it is (counter-intuitively) better to stop on keys equal to the partitioning item's key.

**Analysis**:

* Best case number of compares: ~ N log N

* Worst case number of compares: ~ 1/2 N<sup>2</sup>
    - Partitioning doesn't do anything if shuffle puts everything in order.
    - Assuming uniformly random shuffle, this is very unlikely, "more likely computer is struck by lightning".

* Average case number of compares: ~ 1.39N lg N
    - 39% more compares than mergesort.
    - Faster than mergesort in practice because of less data movement.

* Random shuffle:
    - Probabilistic guarantee against worst case.

* Caveat emptor (implementations go quadratic if array):
    - is sorted or reverse sorted.
    - has many duplicates (even if randomized).

**Properties**:

* Quicksort is an `in-place` sorting algorithm.
* Partitioning allows it to use constant extra space.
* Depth of recursion takes logarithmic extra space (with high probability).
* Quicksort is not stable.
* Too much overhead for small subarrays.
* Use insertion sort for arrays of up to ~ 20 items.
* Best pivot (partition center) is median.

## Complexity of Sorting

**Computational complexity**: Framework to study efficiency of algorithms for solving a particular problem X.

**Model of computation**: Allowable operations.

**Cost model**: Operation count(s).

**Upper bound**: Cost guarantee provided by some algorithm for X.

**Lower bound**: Proven limit on cost guarantee of all algorithms for X.

**Optimal algorithm**: Algorithm with be possible cost guarantee for X (ideally we can prove that upper and lower bound are the same).

**Example: sorting.**
* Model of computation: decision tree (can only access information through compares).
* Cost model: number of compares.
* Upper bound: ~ N log N from mergesort
* Lower bound: ~ N log N
* Optimal algorithm: mergesort

**First goal of algorithm design**: Finding optimal algorithm.

Compares? Mergesort is optimal with respect to number of compares.

Space? Mergesort is not optimal with respect to space usage.

Lower bound may not hold if the algorithm has information about:
* The initial order of the input.
* The distribution of key values.
* The representation of the keys.

Partially ordered arrays: Depending on the initial order of the input, may not need N log N compares (insertion sort requires only N - 1 compares if input array is sorted).

Duplicate keys: Depending on the input distribution of duplicates, may not need N log N compares (3-way quicksort).

Digital properties of keys: Can use digit/character compares instead of key compares for numbers and strings (radix sorts).

## Stability

A stable sort preserves the relative order of items with equal keys.

Insertion sort and mergesort are stable.
Selection sort and shellsort are not stable.

Insertion sort is stable because equal items never move past each other.

Selection sort is not stable because a long-distance exchange might move an item past some equal item.

Any long-distance exchange, where keys are moved past other keys that might be equal, is not stable.

## Sorting Applications

**Obvious Applications**:

* Sort a list of names.
* Organize an mp3 library.
* Display Google PageRank results.
* List RSS feed in reverse chronological order.

**Problems become easy once items are in sorted order**:

* Find the median.
* Binary search in a database.
* Identify statistical outliers.
* Find duplicates in a mailing list.

**Non-obvious applications**:

* Data compression.
* Computer graphics.
* Computational biology.
* Load balancing on a parallel computer.

## Sorting Summary


|               |  inplace?   |    stable?    |   worst           |  average          |   best            |     remarks                                          |
| :-----------: | :---------: | :-----------: | :---------------: | :---------------: | :---------------: | :--------------------------------------------------: |
|  selection    |   - [x]     |               | N<sup>2</sup> / 2 | N<sup>2</sup> / 2 | N<sup>2</sup> / 2 | N exchanges                                          |
|  insertion    |   - [x]     |     - [x]     | N<sup>2</sup> / 2 | N<sup>2</sup> / 4 |          N        | use for small N or partially ordered                 |
|  shell        |   - [x]     |               |          ?        |          ?        |          N        | tight code, subquadratic                             |
|  merge        |             |     - [x]     |      N log N      |      N log N      |      N log N      | N log N guarantee, stable                            |
|  quick        |   - [x]     |               | N<sup>2</sup> / 2 |     2 N log N     |      N log N      | N log N probabilistic guarantee, fastest in practice |
|  3-way quick  |   - [x]     |               | N<sup>2</sup> / 2 |     2 N log N     |          N        | improves quicksort in presence of duplicate keys     |
|  ???          |   - [x]     |     - [x]     |      N log N      |      N log N      |      N log N      | holy sorting grail                                   |
