import Node from './utils/Node';

class Tree {
  constructor(val) {
    /*
    ** If the tree is initialized with a value, set the root node
    ** otherwise set the root node as null
    ** Set the size of the tree appropriately
    */
    this._head = val !== undefined ? new Node(val) : null;
    this.size = val !== undefined ? 1 : 0;
  }

  searchDF(cb, _node = this._head) {
    /*
    ** Depth-first traversal to visit the nodes of the tree
    ** and invoke a callback function on each node
    */
    cb(_node);
    for (let i = 0; i < _node.children.length; i++) {
      this.searchDF(cb, _node.children[i]);
    }
  }

  searchBF(cb, _queue = [this._head]) {
    /*
    ** Breadth-first traversal to visit the nodes of the tree
    ** and invoke a callback function on each node
    */
    var node = _queue.shift();
    for (let i = 0; i < node.children.length; i++) {
      _queue.push(node.children[i]);
    }
    cb(node);
    if (_queue.length) {
      this.searchBF(cb, _queue);
    }
  }

  contains(val, cb) {
    /*
    ** Search the tree for a particular value or node.
    ** An optional callback can be passed to be invoked on the node, if it exists.
    ** The result of the callback will be returned, otherwise the node will be returned
    ** If the value or node does not exist, return false.
    ** By default, this function will utilize a breadth-first search
    */
    var result = false;
    this.searchBF(node => {
      if (node.val === val || node === val) {
        result = cb ? cb(node) : node;
      }
    })
    return result;
  }

  addNode(val, parent) {
    const _node = new Node(val);

    if (!this._head) {
      /*
      ** Assign the node to the root if no root node exists in the tree
      */
      this._head = _node;
    } else {
      /*
      ** Attach the new node to the referenced node (parent -> child)
      ** If no parent node is supplied, add it to the root node
      */
      var _parent = parent || this._head;
      _node.parent = _parent;
      _parent.children.push(_node);
    }
    /*
    ** Increment the size of the tree.
    ** Return the new node to be used as a future reference if needed
    */
    this.size++;
    return _node;
  }

  removeNode(node) {
    /*
    ** Removes a node and all of its descendent children from the tree.
    ** Keep a count of the number of descendents, so the tree's size can be adjusted.
    ** Return the removed node.
    */
    var count = 0;
    this.searchDF(() => count++, node);

    /*
    ** Splice out the node from the parent's children
    */
    node.parent.children = node.parent.children.filter(child => child !== node);

    this.size -= count;
    return node;
  }
}

export default Tree;