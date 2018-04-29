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
