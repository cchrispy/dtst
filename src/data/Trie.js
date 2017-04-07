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
    this._root = new Node('');
  }

  /*
  ** Input a string into the Trie.
  ** Iterate through the word while traveling down the nodes.
  ** If a node does not have the next letter in its children, create a new child node and add it.
  */
  add(word) {

    /* Keep track of the current node while traveling down the tree, starting with the root */
    var currentNode = this._root;

    /* Iterate through the letters of the inputted word */
    for (let i = 0; i < word.length; i++) {
      let char = word[i];

      /* If the next character is not a child of the current node, create a new node and add it */
      if (!currentNode.children[char]) {
        var newNode = new Node(char);
        currentNode.children[char] = newNode;
      }

      /* Update the current node for the next character */
      currentNode = currentNode[char];
    }

    return true;
  }

  /*
  ** Removes a string from the Trie, including all words that branch off the string
  */
  remove(prefix) {

  }

  /*
  ** Check if a given word/prefix exists in the Trie.
  ** Iterate through the word while traveling down the nodes and checking for the appropriate child nodes.
  */
  contains(word) {

    /* Keep track of the current node while traveling down the tree, starting with the root */
    var currentNode = this._root;

    /* Iterate through the letters of the word */
    for (let i = 0; i < word.length; i++) {
      let char = word[i];

      /* If the next character is not a child, break out of the loop by returning false */
      if (!currentNode.children[char]) {
        return false;
      }

      /* Update the current node for the next character */
      currentNode = currentNode.children[char];
    }

    /* If the loop completes, the word/prefix must exist in the trie. Return true */
    return true;
  }

  /*
  ** Return the words that branch off of a given prefix
  */
  predict(prefix) {

  }
}

export default Trie;