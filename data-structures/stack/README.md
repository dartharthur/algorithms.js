# Stacks

## Stack Implementations

### Linked-List

Every operation takes constant time in the worst case.

Every method has a finite series of steps that mostly involve moving around pointers.

### Resizing Array

#### Naive Approach

`push()`: increase size of array by 1

`pop()`: decrease size of array by 1

Issue: Too expensive.
* Need to copy all items to a new array.
* Inserting first N items takes time proportional to 1 + 2 + ... + N ~ N<sup>2</sup> / 2.
  - For every item I insert into the stack, I must make a new array and copy all items from my old array into the new array.

Goal / Challenge: Ensure that resizing happens infrequently.

#### Optimal Approach

_How to grow array?_

**If array is full, create a new array of twice the size, and copy items.**

Consequence: Inserting first N items takes time proportional to N (not N<sup>2</sup>).

Cost of inserting first N items: N<sub>[a](#a)</sub> + (2 + 4 + 8 + ... + N)<sub>[b](#b)</sub> ~ 3N.
* Resizing only occurs when size of the stack is a power of 2.

_How to shrink array?_

Might think to halve size of array when array is one-half full.

Not ideal because leads to "thrashing" which makes this too expensive in worst case.

In scenario where array is full, following sequence of commands causes thrashing i.e. memory is in a "constant state of paging":
* `push()` --> doubles size of array
* `pop()` --> halves size of array
* `push()` --> doubles size of array
* `pop()` --> halves size of array

Each operation takes time proportional to N so K operations that each take time proportional to N is roughly N<sup>2</sup> operations which is undesirable.

**Efficient solution is to wait until array is one-quarter full to halve the size of the array.**

Array will then always be between 25% and 100% full.

## Tradeoffs

Linked-List Implementation:
* Every operation takes constant time in the WORST case.
* Uses extra time and space to deal with the links.

Resizing-Array Implementation:
* Every operation takes constant AMORTIZED time.
* Less wasted space.

## Footnotes
<a name="a">a</a>: 1 array access per push

<a name="b">b</a>: k array accesses to double size k (ignoring cost to create new array)
