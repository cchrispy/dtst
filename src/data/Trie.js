class Node {
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

class Trie {
  constructor() {
    /*
    ** The value of the root node of the Trie will be an empty string
    */
    this.root = new Node('');
  }

  add(word) {
    /*
    ** Inputs a string into the Trie
    */

  }

  remove(prefix) {
    /*
    ** Removes a string from the Trie, including all words that branch off the string
    */

  }

  contains(word) {
    /*
    ** Check if a given word/prefix exists in the Trie
    */

  }

  predict(prefix) {
    /*
    ** Return the words that branch off of a given prefix
    */

  }
}

export default Trie;