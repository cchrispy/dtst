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
  ** Deletes an element from the heap.
  ** Start by finding the index location of the element, and swapping it with
  ** the last element in the storage.
  ** Then perform the appropriate bubble or sink operations to place it
  ** in the appropriate spot: O(log n) complexity.
  */
  delete(n) {

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
  ** Continuously swap the element with the parent if it is smaller
  */
  _bubble(i) {

  }

  /*
  ** Continuously swap the element with a child if it is larger
  */
  _sink(i) {

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
}

export default MinHeap;