class SeparateChainingHashTableST {
  constructor() {
    this._limit = 8;
    this._size = 0;
    this._storage = new LimitedArray(this._limit);
  }

  put(key, value) {
    const index = getIndexBelowMaxForKey(key, this._limit);

    const chain = this._storage.get(index) || new LinkedList();

    let current = chain.head;
    while (current) {
      if (key === current.key) {
        current.value = value;
        return null;
      }
      current = current.next;
    }

    chain.addToTail(key, value);
    this._storage.set(index, chain);
    this._size += 1;

    if (this._size > this._limit * 0.75) {
      this._resize(this._limit * 2);
    }

    return null;
  }

  get(key) {
    const index = getIndexBelowMaxForKey(key, this._limit);

    const chain = this._storage.get(index) || new LinkedList();

    return chain.getValue(key);
  }

  delete(key) {
    const index = getIndexBelowMaxForKey(key, this._limit);

    const chain = this._storage.get(index) || new LinkedList();

    chain.deleteNode(key);
    this._size -= 1;

    if (this._size < this._limit * 0.25) {
      this._resize(Math.floor(this._limit / 2));
    }

    return null;
  }

  contains(key) {
    const index = getIndexBelowMaxForKey(key, this._limit);

    const chain = this._storage.get(index) || new LinkedList();

    return chain.contains(key);
  }

  isEmpty() {
    return this._size === 0;
  }

  size() {
    return this._size;
  }

  keys() {
    const keys = [];

    this._storage.each(chain => {
      if (chain) {
        chain.each(node => {
          keys.push(node.key);
        });
      }
    });

    return keys;
  }

  _resize(newLimit) {
    newLimit = Math.max(newLimit, 8);

    if (newLimit === this._limit) {
      return null;
    }

    const oldStorage = this._storage;

    this._limit = newLimit;
    this._storage = new LimitedArray(this._limit);
    this._size = 0;

    oldStorage.each(chain => {
      if (chain) {
        chain.each(node => {
          this.put(node.key, node.value);
        });
      }
    });
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getValue(key) {
    let current = this.head;
    while (current) {
      if (key === current.key) {
        return current.value;
      }
      current = current.next;
    }
    return null;
  }

  each(callback) {
    let current = this.head;
    while (current) {
      callback(current);
      current = current.next;
    }
  }

  deleteNode(key) {
    let current = this.head;

    if (current.next) {
      while (current) {
        if (current.next && key === current.next.key) {
          const nodeToSwap = current.next.next;
          delete current.next;
          current.next = nodeToSwap;
          return null;
        }
        current = current.next;
      }
    } else {
      if (key === current.key) {
        this.head = null;
      }
    }

    return null;
  }

  addToTail(key, value) {
    const newNode = new LinkedListNode(key, value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const oldNode = this.tail;
      oldNode.next = newNode;
      this.tail = newNode;
    }
  }

  removeHead() {
    const nodeToDelete = this.head;
    this.head = this.head.next;
    return nodeToDelete.value;
  }

  contains(key) {
    let current = this.head;
    while (current) {
      if (key === current.key) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

class LinkedListNode {
  constructor(key = null, value = null) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class LimitedArray {
  constructor() {
    this._storage = [];
  }

  get(index) {
    this._checkLimit(index);
    return this._storage[index];
  }

  set(index, value) {
    this._checkLimit(index);
    this._storage[index] = value;
  }

  each(callback) {
    for (let i = 0; i < this._storage.length; i++) {
      callback(this._storage[i], i, this._storage);
    }
  }

  _checkLimit(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (this._limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  }
}

const getIndexBelowMaxForKey = (str, max) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash;
    hash = Math.abs(hash);
  }
  return hash % max;
};

module.exports = SeparateChainingHashTableST;
