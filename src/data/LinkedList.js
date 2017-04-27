import { Node_LinkedList as Node } from './utils/Node';

/*
** Doubly Linked List
** Has pointers/references to the head and tail nodes
*/
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /*
  ** Adds a node to the front, representing a new head node
  ** Operates in O(1) time
  */
  addToHead(val) {
    let node = new Node(val);

    if (!this.size) {
      this.head = node;
      this.tail = node;
    } else {
      node.next      = this.head;
      this.head.prev = node;
      this.head      = node;
    }

    this.size++;
    return true;
  }

  /*
  ** Adds a node to the end, representing a new tail node
  ** Operates in O(1) time
  */
  addToTail(val) {
    let node = new Node(val);

    if (!this.size) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev      = this.tail;
      this.tail.next = node;
      this.tail      = node;
    }

    this.size++;
    return true;
  }

  /*
  ** Inserts a new node after a particular node
  ** Reassign the pointers to maintain the linked list order
  ** Operates in O(1) time given the reference node
  */
  insert(val, node) {
    if (!node) {
      throw new Error('Error: A valid reference node must be supplied for the new node to be inserted after.');
    }

    if (this.tail === node) { return this.addToTail(val) }

    let newNode  = new Node(val);
    newNode.prev = node;
    newNode.next = node.next;
    node.next    = newNode;

    this.size++;
    return true;
  }

  /*
  ** Remove the head node and shifts the head pointer to the next node
  ** Operates in O(1) time
  */
  deleteHead() {
    if (!this.size) { return null }

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head      = this.head.next;
      this.head.prev = null;
    }

    this.size--;
    return true;
  }

  /*
  ** Remove the tail node and shifts the tail pointer to the previos node
  ** Operates in O(1) time
  */
  deleteTail() {
    if (!this.size) { return null }

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail      = this.tail.prev;
      this.tail.next = null;
    }

    this.size--;
    return true;
  }

  /*
  ** Deletes a node and reassigns the pointers appropriately
  ** Operates in O(1) time
  */
  delete(node) {
    if (!node) {
      throw new Error('Error: A valid node must be supplied to be deleted.');
    }

    if (this.head === node) { return this.deleteHead() } 
    if (this.tail === node) { return this.deleteTail() }

    node.prev.next = node.next;
    node.next.prev = node.prev;

    this.size--;
    return true;
  }

  /*
  ** Iterates through the linked list to find a node corresponding to a given value
  ** Operates in O(n) time
  */
  search(val) {

  }

  /*
  ** Iterates through the linked list and invokes a callback function on each node
  ** Operates in O(n) time
  */
  traverse(cb) {

  }

  /*
  ** Return the number of elements in the linked list
  */
  getSize() {
    return this.size;
  }
}

export default LinkedList;