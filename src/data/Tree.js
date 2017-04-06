class Node {
  constructor(val) {
    this.val = val;
    this.parent = null;
    this.children = [];
  }
}

class Tree {
  constructor(val) {
    /*
    ** If the tree is initialized with a value, set the root node
    ** otherwise set the root node as null
    ** Set the size of the tree appropriately
    */
    this._head = val ? new Node(val) : null;
    this.size = val ? 1 : 0;
  }

  searchDF(cb, node = this._head) {
    /*
    ** Depth-first traversal to visit the nodes of the tree
    ** and invoke a callback function on each node
    */
    cb(node);
    for (let i = 0; i < node.children.length; i++) {
      this.searchDF(cb, node.children[i]);
    }
  }

  searchBF(cb, queue = [this._head]) {
    /*
    ** Breadth-first traversal to visit the nodes of the tree
    ** and invoke a callback function on each node
    */
    var node = queue.shift();
    for (let i = 0; i < node.children.length; i++) {
      queue.push(node.children[i]);
    }
    cb(node);
    if (queue.length) {
      this.searchBF(cb, queue);
    }
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
}

module.exports = Tree;