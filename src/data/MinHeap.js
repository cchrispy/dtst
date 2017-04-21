class MinHeap {
  /*
  ** Binary Min Heap
  ** Left child is at index 2i
  ** Right child is at index 2i + 1
  ** Parent is at index i/2 (floored)
  */
  constructor() {
    this._storage = [];
    this.size = 0;
  }

  /*
  ** Inserts an element into the heap at the next available position.
  ** The element will be bubbled up to the appropriate place: O(log n) complexity.
  */
  insert(n) {

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
  ** Remove and return the root (smallest) element in the heap: O(1) complexity.
  ** Replace it with the last element in the storage and sink it down to the appropriate place.
  */
  extract() {

  }

  /*
  ** Return the root (smallest) element in the heap, without removing it: O(1) complexity.
  */
  peek() {

  }
}

export default MinHeap;