import { Node_BST as Node } from './utils/Node';

class BinarySearchTree {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  /*
  ** Searches for the value corresponding to the key.
  ** Returns the value if found, otherwise return null.
  ** An optional node can be passed in as the starting point for the search,
  ** otherwise the search will begin from the root node
  */
  search(key, node = this.head) {

  }

  /*
  ** Inserts a key/value pair.
  ** Return the inserted node to be used as a reference.
  */
  insert(key, val) {

  }

  /*
  ** Removes the node corresponding to the key.
  ** If the node contains children, then the nodes will be shifted around appropriately
  ** Return the removed node.
  */
  remove(key) {

  }

  /*
  ** Traverses the Binary Search Tree and invokes a callback on each node.
  ** An optional node can be passed in as the starting point for the traversal.
  */
  traverse(cb, node = this.head) {

  }
}

export default BinarySearchTree;