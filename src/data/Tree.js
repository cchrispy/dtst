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
      searchDF(cb, node.children[i]);
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
    } else if (parent) {
      /*
      ** Attach the new node to the referenced node (parent -> child)
      */
      _node.parent = parent;
      parent.children.push(_node);
    } else {
      /*
      ** If there is no referenced parent node, throw Error
      */
      throw new Error('Need a parent node to add the new node to.');
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