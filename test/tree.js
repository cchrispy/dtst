import { expect } from 'chai';
import Tree from '../src/data/Tree';
import { Node_Tree as Node } from '../src/data/utils/Node';

describe('Tree', () => {

  var tree;
  beforeEach(() => {
    tree = new Tree();
  })

  it('Should be a constructor', () => {
    expect(tree).to.be.an.instanceof(Tree);
  });

  it('Should have searchDF, searchBF, contains, addNode, removeNode methods', () => {
    expect(tree.searchDF).to.be.a('function');
    expect(tree.searchBF).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.addNode).to.be.a('function');
    expect(tree.removeNode).to.be.a('function');
  })

  it('Should allow a tree to be initiated without a value', () => {
    expect(tree.size).to.equal(0);
    expect(tree._head).to.be.null;
  })

  it('Should allow a tree to be initiated with a value', () => {
    var newTree = new Tree('Root');
    expect(newTree.size).to.equal(1);
    expect(newTree._head).to.be.an.instanceof(Node);
    expect(newTree._head.val).to.equal('Root');
    expect(newTree._head.children).to.be.an('array').and.have.lengthOf(0);
  })

  it('Adding a value to an empty tree should set the root node', () => {
    expect(tree._head).to.be.null;
    expect(tree.size).to.equal(0);

    tree.addNode('Root');
    expect(tree._head).to.be.an.instanceof(Node);
    expect(tree._head.val).to.equal('Root');
    expect(tree.size).to.equal(1);
  })

  describe('Tree methods', () => {

    it('Add Nodes', () => {
      var tree = new Tree();
      var rootNode = tree.addNode('root');
      var child_1 = tree.addNode(1);
      var child_2 = tree.addNode(2);
      var child_3 = tree.addNode(3, child_1);
      var child_4 = tree.addNode(4, child_3);
      var child_5 = tree.addNode(5, child_2);

      var depthFirst = ['root', 1, 3, 4, 2, 5];
      var breadthFirst = ['root', 1, 2, 3, 5, 4];

      expect(tree.size).to.equal(6);
      
      var temp1 = [];
      var temp2 = [];
      tree.searchDF(node => temp1.push(node.val));
      tree.searchBF(node => temp2.push(node.val));

      expect(temp1).to.eql(depthFirst);
      expect(temp2).to.eql(breadthFirst);
      expect(tree.contains(5)).to.be.instanceof(Node);

    })

    it('Delete Nodes', () => {
      var tree = new Tree(1);
      var two = tree.addNode(2);
      var three = tree.addNode(3);
      var four = tree.addNode(4, two);
      var five = tree.addNode(5, two);
      var six = tree.addNode(6, three);
      tree.addNode(7, six);
      tree.addNode(8, six);

      var breadthFirst = [1, 2, 3, 4, 5, 6, 7, 8];

      var temp = [];
      tree.searchBF(node => temp.push(node.val));

      expect(temp).to.eql(breadthFirst);
      expect(tree.size).to.equal(8);

      tree.removeNode(six);

      var breadthFirst2 = [1, 2, 3, 4, 5];
      var temp2 = [];
      tree.searchBF(node => temp2.push(node.val));
      
      expect(temp2).to.eql(breadthFirst2);
      expect(tree.size).to.equal(5);
      expect(three.children).to.have.lengthOf(0);
      expect(tree.contains(6)).to.be.false;
    })
  })
})