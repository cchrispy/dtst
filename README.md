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
Trees are commonly used data structures for storing hierarchical information, such as a file system on a computer (think about navigating through directories and their sub-directories).  
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