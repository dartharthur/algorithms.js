export default class MinHeap {
  constructor() {
    this.storage = [];
  }

  swap(index1, index2) {
    let temp = this.storage[index1];
    this.storage[index1] = this.storage[index2];
    this.storage[index2] = temp;
  }

  peak() {
    return this.storage[0];
  }

  size() {
    return this.storage.length;
  }

  insert(value) {
    this.storage.push(value);
    this.bubbleUp(this.size() - 1);
  }

  bubbleUp(childIndex) {
    let parentIndex = this.getParentIndex(childIndex);

    while (parentIndex >= 0 && this.storage[childIndex] < this.storage[parentIndex]) {
      this.swap(parentIndex, childIndex);

      childIndex = parentIndex;
      parentIndex = this.getParentIndex(childIndex);
    }
  }

  getParentIndex(childIndex) {
    if (childIndex % 2 === 0) {
      return (childIndex - 2) / 2;
    } else {
      return (childIndex - 1) / 2;
    }
  }

  removePeak() {
    /** do this first so you don't re-order all elements in array by shifting off peak immediately */
    this.swap(0, this.size() - 1);
    let result = this.storage.pop();
    this.bubbleDown(0);
    return result;
  }

  getChildIndex(parentIndex) {
    let ci1 = 2 * parentIndex + 1;
    let ci2 = 2 * parentIndex + 2;

    if (ci2 < this.size()) {
      return (this.storage[ci1] < this.storage[ci2]) ? ci1 : ci2;
    } else if (ci1 < this.size()) {
      return ci1;
    } else {
      return ci1;
    }
  }

  bubbleDown(parentIndex) {
    let childIndex = this.getChildIndex(parentIndex);

    while(childIndex < this.size() && this.storage[parentIndex] > this.storage[childIndex]) {
      this.swap(parentIndex, childIndex);

      parentIndex = childIndex;
      childIndex = this.getChildIndex(parentIndex);
    }
  }

  remove(value) {
    // Must be able to remove a value from anywhere within heap.
    // First step is to iterate through array until you find the index of the value.
    // This is linear time operation however, ideally don't want to do this.
    // Might get around this by adding a hash map to reference all elements in min heap
    // along with the indexes.
    // Every time perform a swap operation, need to update hash table.
    // Need to bubble up and bubble down after swapping.
    // This assumes unique elements - otherwise can't be using hash table.
  }
}

/** 
 * Popular Question:
 * Given an array of data, tell me most minimum or maximum elements for a particular range
 * as you move through array of data.
 */