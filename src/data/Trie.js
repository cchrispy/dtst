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

    /* Keep track of the current node while traveling down the tree, starting with the root     */
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
      currentNode = currentNode.children[char];
    }

    return true;
  }

  /*
  ** Removes a word/prefix from the Trie, including all words that branch off the word/prefix.
  ** Keep track of the most recent fork in the Trie while iterating through the word/prefix,
  ** and remove the appropriate child node from that branching node to delete the word.
  */
  remove(prefix) {

    /* If the inputted string does not exist in the Trie, throw an Error                      */
    if (!this.contains(prefix)) {
      throw new Error('Invalid input: word not found');
    }

    /* Keep track of the current node while traveling down the tree, starting with the root   */
    var currentNode = this._root;
    /* Keep track of the latest branching node and the next character, stored as a tuple      */
    /* After iterating through the prefix, we can remove the word from the most recent branch */
    var branchPoint = [this._root, prefix[0]];

    for (let i = 0; i < prefix.length; i++) {
      let char = prefix[i];

      /* If there is more than 1 child node, there must be a branch point from that letter    */
      /* Update the branchPoint with the current node and the next letter                     */
      if (Object.keys(currentNode.children).length > 1) {
        branchPoint = [currentNode, char];
      }

      currentNode = currentNode.children[char];
    }

    /* From the most recent branch, delete the next letter                                    */
    delete branchPoint[0][branchPoint[1]];

    return true;
  }

  /*
  ** Check if a given word/prefix exists in the Trie.
  ** Iterate through the word while traveling down the nodes and checking for the appropriate child nodes.
  */
  contains(word) {

    /* Keep track of the current node while traveling down the tree, starting with the root */
    var currentNode = this._root;

    /* Iterate through the letters of the word                                              */
    for (let i = 0; i < word.length; i++) {
      let char = word[i];

      /* If the next character is not a child, break out of the loop by returning false     */
      if (!currentNode.children[char]) {
        return false;
      }

      /* Update the current node for the next character                                     */
      currentNode = currentNode.children[char];
    }

    /* If the loop completes, the word/prefix must exist in the trie. Return true           */
    return true;
  }

  /*
  ** Return the words that branch off of a given prefix.
  ** Identify the node corresponding to the last letter, and travel down the child nodes to the leaves
  ** while remembering the sequence of nodes/letters visited.
  ** Return an array of all the predicted words
  */
  predict(prefix) {

    /* If the inputted string does not exist in the Trie, throw an Error     */
    if (!this.contains(prefix)) {
      throw new Error('Invalid input: word not found');
    }

    var currentNode = this._root;

    /* Iterate to the end of the prefix to grab a reference of the last node */
    for (let i = 0; i < prefix.length; i++) {
      let char = prefix[i];
      currentNode = currentNode.children[char];
    }

    /* Utilize _gatherWords() to gather all sequences of letters             */
    /* that branch from the last node, down to the leaves.                   */
    /* Prepend the prefix to each of these words; return the resulting array */
    return this._gatherWords(currentNode).map(word => prefix + word);
  }

  /*
  ** Helper function to gather completed words by traveling down from a given node to the leaves of the trie.
  ** 3 inputs: the current node, the current sequence of letters gathered so far, and the 
  ** collection of words that have already been completed (when a leaf has been reached).
  */
  _gatherWords(node, str = '', words = []) {

    /* Take the child nodes (branches) of the current node */
    var chars = Object.keys(node.children);

    /* Base case: we have reached a leaf node, thus a word is complete                                 */
    /* If there are no child nodes, the current node must be a leaf                                    */
    /* If the sequence of letters is non-empty, push the completed word to the words array             */
    /* Otherwise return an empty array                                                                 */
    if (!chars.length) {
      if (str) {
        words.push(str);
      }
    }

    /* Go through the nodes that branch off the current node and add the letters to the growing string */
    /* Travel down child nodes recursively; continue building the word until the base case is reached  */
    chars.forEach(char => {
      this._gatherWords(node.children[char], str + char, words);
    })

    return words;
  }
}

export default Trie;
export { Node };