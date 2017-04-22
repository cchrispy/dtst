/*
** Binary Min Heap
** Left child can be found at index 2i
** Right child can be found at index 2i + 1
** Parent is at index i/2 (floored)
*/

class MinHeap {
  constructor() {
    /*
    ** Use an array to store the information, since we only need indeces to reference an element.
    ** This is convenient because Node classes are not needed.
    ** The size will keep track of the last spot (index) in the storage.
    */
    this._storage = [];
    this.size = 0;
  }

  /*
  ** Inserts an element into the heap at the next available position.
  ** The element will be bubbled up to the appropriate place: O(log n) complexity.
  */
  insert(n) {
    this._storage[++this.size] = n;
    this._bubble(this.size);

    return true;
  }

  /*
  ** Deletes an element from the heap given its index location.
  ** Swap the element with the last element in the storage.
  ** Then perform the appropriate bubble or sink operations to place it
  ** in the appropriate spot: O(log n) complexity.
  */
  delete(i) {
    if (!this._storage[i]) {
      return null;
    }

    var deleted = this._storage[i];
    this._storage[i] = this._storage.pop();
    this.size--;
    
    if (this._verifyParent(i) && this._storage[i] < this._parent(i)) {
      this._bubble(i);
    } else {
      this._sink(i);
    }

    return deleted;
  }

  /*
  ** Remove and return the root (smallest) element in the heap: O(log n) complexity.
  ** Replace it with the last element in the storage and sink it down to the appropriate place.
  */
  extract() {
    if (!this.size) {
      return null;
    }

    var min = this._storage[1];
    var swapped = this._storage.pop();

    if (this.size > 1) {
      this._storage[1] = swapped;
      this._sink(1);
    }
    this.size--;

    return min;
  }

  /*
  ** Return the root (smallest) element in the heap, without removing it: O(1) complexity.
  */
  peek() {
    return this._storage[1] || null;
  }

  /*
  ** Iterates through the Min Heap and invokes a callback on each element: O(n) complexity.
  ** Note: The callback receives the element's index as a second argument.
  */
  search(cb) {
    for (let i = 1; i < this._storage.length; i++) {
      cb(this._storage[i], i);
    }
  }

  /*
  ** Searches the Min Heap for the index of a target value: O(n) complexity.
  */
  searchForIndex(value) {
    for (let i = 1; i < this._storage.length; i++) {
      if (this._storage[i] === value) {
        return i;
      }
    }
    return false;
  }

  /*
  ** Continuously swap the element with the parent if it is smaller
  */
  _bubble(i) {

    var current = i;

    while (this._verifyParent(current) && this._storage[current] < this._parent(current)) {
      var parent  = this._getParentIndex(i);
      var swap = this._storage[current];
      this._storage[current] = this._storage[parent];
      this._storage[parent]  = swap;
      current = parent;
    }

    return true;
  }

  /*
  ** Continuously swap the element with a child if it is larger.
  ** Note: if a swap needs to occur, it should occur with the smaller of the two children
  */
  _sink(i) {

    var current = i;
    var child   = this._getSmallerChildIndex(i);

    while (child && this._storage[current] > this._storage[child]) {
      var swap = this._storage[current];
      this._storage[current] = this._storage[child];
      this._storage[child]   = swap;
      current = child;
      child   = this._getSmallerChildIndex(current);
    }

    return true;
  }

  /*******************************
  **** HELPER FUNCTIONS BELOW ****
  ********************************/

  // Get index of the left child
  _getLeftChildIndex(i) {
    return 2 * i;
  }

  // Get index of the right child
  _getRightChildIndex(i) {
    return (2 * i) + 1;
  }

  // Get index of the parent
  _getParentIndex(i) {
    return Math.floor(2 / i);
  }

  // Check if left child exists
  _verifyLeftChild(i) {
    return this._getLeftChildIndex(i) <= this.size;
  }

  // Check if right child exists
  _verifyRightChild(i) {
    return this._getRightChildIndex(i) <= this.size;
  }

  // Check if parent exists
  _verifyParent(i) {
    return this._getParentIndex(i) > 0;
  }

  // Get the left child's value
  _left(i) {
    return this._storage[this._getLeftChildIndex(i)];
  }

  // Get the right child's value
  _right(i) {
    return this._storage[this._getRightChildIndex(i)];
  }

  // Get the parent's value
  _parent(i) {
    return this._storage[this._getParentIndex(i)];
  }

  // Get the index of the smaller child
  _getSmallerChildIndex(i) {
    if (!this._verifyLeftChild(i)) {
      return false;
    } else {
      var index = this._getLeftChildIndex(i);
      if (this._verifyRightChild(i) && this._left(i) > this._right(i)) {
        index = this._getRightChildIndex(i);
      }
      return index;
    }
  }
}

export default MinHeap;