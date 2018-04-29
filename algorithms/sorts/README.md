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

## Shell Sort

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