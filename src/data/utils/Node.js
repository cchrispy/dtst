class Node_Tree {
  constructor(val) {
    this.val = val;
    this.parent = null;
    this.children = [];
  }
}

class Node_Trie {
  constructor(val) {
    /*
    ** The node stores a single character as its value.
    ** Child nodes are stored in an object instead of an array for constant-time lookup
    ** because every child node will have a unique value/letter
    */
    this.val = val;
    this.children = {};
  }
}

class Node_BST {
  constructor(key, val) {
    /*
    ** Key should be an integer, for proper placement of the node in a Binary Search Tree
    */
    this.key    = key;
    this.val    = val;
    this.parent = null;
    this.left   = null;
    this.right  = null;
  }
}

class Node_LinkedList {
  constructor(val) {
    /*
    ** A block of information stored in a doubly linked list.
    ** Stores references to the next and previous nodes.
    */
    this.val  = val;
    this.next = null;
    this.prev = null;
  }
}


export { Node_Tree, Node_Trie, Node_BST, Node_LinkedList };