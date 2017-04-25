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

  }

  /*
  ** Adds a node to the end, representing a new tail node
  ** Operates in O(1) time
  */
  addToTail(val) {

  }

  /*
  ** Inserts a new node after a particular node
  ** Reassign the pointers to maintain the linked list order
  ** Operates in O(1) time given the reference node
  */
  insert(val, node) {

  }

  /*
  ** Remove the head node and shifts the head pointer to the next node
  ** Operates in O(1) time
  */
  deleteHead() {

  }

  /*
  ** Remove the tail node and shifts the tail pointer to the previos node
  ** Operates in O(1) time
  */
  deleteTail() {

  }

  /*
  ** Deletes a node and reassigns the pointers appropriately
  ** Operates in O(1) time
  */
  delete(node) {

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
}

export default LinkedList;