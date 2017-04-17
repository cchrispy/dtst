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
  ** Same as the 'search' method, but returns the entire node instead of the value.
  */
  searchNode(key, node = this.head) {
    this._validateKey(key);

    if (!node) {
      return null;
    }

    if (node.key === key) {
      return node;
    } else {
      return key < node.key ? this.searchNode(key, node.left) : this.searchNode(key, node.right);
    }
  }

  /*
  ** Inserts a key/value pair.
  ** The key must be a number. If no value is provided, an empty string is used by default.
  ** Return true.
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
    return true;
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
  ** Three cases:
  **   - Node has no children : set the corresponding link in the parent to NULL
  **   - Node has one child   : link the child directly to the parent of the removed node
  **   - Node has two children: take the node (N) with the smallest key in the right-subtree and replace
  **                            the removed node's key/value with N's key/value
  ** Return true.
  */
  remove(key) {
    var node = this.searchNode(key);

    if (!node.left && !node.right) {
      // the node has no children
      if (key < node.parent.key) {
        node.parent.left = null;
      } else {
        node.parent.right = null;
      }
    } else if ((node.left && !node.right) || (node.right && !node.left)) {
      // the node has one child
      if (key < node.parent.key) {
        node.parent.left = node.left ? node.left : node.right;
      } else {
        node.parent.right = node.left ? node.left : node.right;
      }
    } else {
      // the node has two children
      // grab the node with the minimum key from the right-subtree
      var min = node.right;
      this.traverse(item => {
        if (item.key < min.key) {
          min = item;
        }
      }, node.right);
      node.key = min.key;
      node.val = min.val;

      /*
      ** TODO:
      ** Remove that leaf node that was replaced!
      ** Handle the case if the removed node is the root node!
      */
    }

    this.size--;
    return true;
  }

  /*
  ** Traverses the Binary Search Tree and invokes a callback on each node.
  ** An optional node can be passed in as the starting point for the traversal.
  */
  traverse(cb, node = this.head) {
    if (!node) {
      return null;
    }

    cb(node);
    if (node.left) {
      this.traverse(cb, node.left);
    }
    if (node.right) {
      this.traverse(cb, node.right);
    }
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