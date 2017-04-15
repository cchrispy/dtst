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
  ** The key must be a number. If no value is provided, an empty string is used by default.
  ** Return the inserted node to be used as a reference.
  */
  insert(key, val = '') {
    if (typeof key !== 'number') {
      throw new Error('Error: key must be a number.');
    }

    let newNode = new Node(key, val);

    if (!this.head) {
      // If the head is null, set the new node as the root node
      this.head = newNode;
    } else {
      // Get the appropriate leaf node and set it as the parent for the new node
      // Attach the new node
      let parent = this._findLeaf(key, this.head);
      newNode.parent = parent;
      if (key <= parent.key) {
        parent.left = newNode;
      } else {
        parent.right = newNode;
      }
    }

    this.size++;
    return newNode;
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

  /*
  ** Helper function to find the leaf node to insert a new node into
  */
  _findLeaf(key, node) {
    if (key <= node.key) {
      if (!node.left) {
        return node;
      }
      return this._findLeaf(key, node.left);
    } else {
      if (!node.right) {
        return node;
      }
      return this._findLeaf(key, node.right);
    }
  }
}

export default BinarySearchTree;