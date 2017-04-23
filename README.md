# dtst
A collection of data structures to use, with comments and examples. Still a work in progress!  

### What's included  
- [Tree](./src/data/Tree.js)  
- [Trie](./src/data/Trie.js)  
- [Binary Search Tree](./src/data/BinarySearchTree.js)  
- [Graph](./src/data/Graph.js)  
- [Min Heap](./src/data/MinHeap.js)  

## Usage  
#### Tree  
[Trees](https://en.wikipedia.org/wiki/Tree_(data_structure)) are commonly used data structures for storing hierarchical information, such as a file system on a computer (think about navigating through directories and their sub-directories).  
```javascript
import { Tree } from 'dtst';

// create an instance of Tree
var tree = new Tree();

// create the first node in the tree and store the node instance in variable "root"
var root = tree.addNode('Head node');

// add three child nodes, which are attached to the root node by default
var child_1 = tree.addNode('First child');
var child_2 = tree.addNode('Second child');
var child_3 = tree.addNode('Third child');

// attach children to different nodes by specifying a parent node as a second argument
var grandChild_1 = tree.addNode('Child of child_1', child_1);
var grandChild_2 = tree.addNode('Another child of child_1', child_1);
var grandChild_3 = tree.addNode('Child of child_2', child_2);
var greatGrandChild_1 = tree.addNode('Child of grandChild_3', grandChild_3);

/*
** Tree structure:

   root 
     + child_1
       + grandChild_1
       + grandChild_2
     + child_2
       + grandChild_3
         + greatGrandChild_1
     + child_3

**
*/

// check if the tree contains a value
tree.contains('Second child');   // -> returns child_2
tree.contains('I do not exist'); // -> returns false

// delete a node and its descendants
tree.removeNode(child_2);
tree.contains('Second child');          // -> returns false
tree.contains('Child of child_2');      // -> returns false
tree.contains('Child of grandChild_3'); // -> returns false
var size = tree.size;                   // -> 5
```  

#### Trie  
[Tries](https://en.wikipedia.org/wiki/Trie) (also known as radix trees or prefix trees) have an ordered data structure that is efficient for information re*trie*val. There are several ways to construct a Trie, but they all share a tree structure. Each node can represent a single character string, and traversing down a tree can build words or prefixes. A few useful application for Tries: dictionary suggestions, autocomplete dictionaries, searching through a contact list, or searching through phone directories.  
```javascript
import { Trie } from 'dtst';

// create an instance of Trie
var trie = new Trie();

// populate the Trie with a collection of 100 words
const collection = [
  "abrupt", "acid", "adventurous", "ahead", "amused", "appliance", "attach", "bee", "better", 
  "borrow", "bouncy", "branch", "brave", "bushes", "business", "cagey", "carpenter", "cattle", 
  "chin", "cloth", "confuse", "consist", "cool", "count", "craven", "deep", "digestion", "ear", 
  "escape", "evasive", "even", "examine", "fit", "flood", "frequent", "furtive", "gather", 
  "graceful", "grumpy", "guiltless", "half", "hand", "handy", "hate", "hose", "ill-fated", "jail", 
  "kaput", "likeable", "limit", "look", "malicious", "meaty", "mere", "mine", "moaning", "monkey", 
  "nail", "neck", "nippy", "noise", "obedient", "obeisant", "observant", "order", "park", 
  "penitent", "perform", "press", "queue", "quickest", "quince", "racial", "remember", "remind", 
  "replace", "ripe", "roll", "safe", "satisfy", "school", "serious", "shop", "slip", "slope", 
  "small", "spark", "squeamish", "stiff", "store", "supply", "swim", "taste", "tiny", "trees", 
  "use", "useful", "volcano", "vulgar", "whispering"
];
collection.forEach(word => trie.add(word));

// check if certain words or prefixes exist
trie.contains('monkey');   // -> true
trie.contains('monk');     // -> true
trie.contains('abrupt');   // -> true
trie.contains('abruptly'); // -> false

// autocomplete or predict words based off a given prefix
trie.predict('a');   // -> ["abrupt", "acid", "adventurous", "ahead", "amused", "appliance", "attach"]
trie.predict('con'); // -> ["confuse", "consist"]
trie.predict('z');   // -> []

// remove prefixes and their descendant words
trie.remove('rem');
trie.contains('remember'); // -> false
trie.contains('remind');   // -> false
trie.contains('replace');  // -> true
trie.predict('r');         // -> ["racial", "replace", "ripe", "roll"]
```