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
    this._validateKey(key);

    if (!node) {
      return null;
    }

    if (node.key === key) {
      return node.val;
    } else {
      return key < node.key ? this.search(key, node.left) : this.search(key, node.right);
    }
  }

  /*
  ** Inserts a key/value pair.
  ** The key must be a number. If no value is provided, an empty string is used by default.
  ** Return the inserted node to be used as a reference.
  */
  insert(key, val = '') {
    this._validateKey(key);

    let newNode = new Node(key, val);

    if (!this.head) {
      // If the head is null, set the new node as the root node
      this.head = newNode;
    } else {
      // Get the appropriate leaf node and set it as the parent for the new node
      // Attach the new node
      let parent = this._findLeaf(key, this.head);
      newNode.parent = parent;
      if (key < parent.key) {
        parent.left  = newNode;
      } else {
        parent.right = newNode;
      }
    }

    this.size++;
    return newNode;
  }

  /*
  ** Updates the value corresponding to an existing key.
  */
  update(key, val, _node = this.head) {
    this._validateKey(key);
    if (val === undefined) {
      throw new Error('Error: enter an appropriate value.');
    }

    if (!_node) {
      throw new Error('Error: that key does not exist.');
    }

    if (_node.key === key) {
      _node.val = val;
      return _node;
    } else if (key < _node.key) {
      return this.update(key, val, _node.left);
    } else if (key > _node.key) {
      return this.update(key, val, _node.right);
    }
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
  ** Helper function to find the leaf node to insert a new node into.
  ** Throws an error when inserting a key/value pair where the key already exists.
  */
  _findLeaf(key, node) {
    if (key === node.key) {
      throw new Error('Error: key already exists. Use update() method to change an existing key/value pair.');
    }

    if (key < node.key) {
      if (!node.left) {
        return node;
      }
      return this._findLeaf(key, node.left);
    } else if (key > node.key) {
      if (!node.right) {
        return node;
      }
      return this._findLeaf(key, node.right);
    }
  }

  _validateKey(key) {
    if (typeof key !== 'number') {
      throw new Error('Error: key must be a number.');
    }
  }
}

export default BinarySearchTree;