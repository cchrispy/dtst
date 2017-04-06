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

  searchDF(cb) {
    /*
    ** Depth-first traversal to visit the nodes of the tree
    ** and invoke a callback function on each node
    */
  }

  searchBF(cb) {
    /*
    ** Breadth-first traversal to visit the nodes of the tree
    ** and invoke a callback function on each node
    */
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
      */
      _node.parent = parent;
      parent.children.push(_node);
    }
    /*
    ** Increment the size of the tree.
    ** Return the new node to be used as a future reference if needed
    */
    this.size++;
    return _node;
  }
}

module.exports = Tree;