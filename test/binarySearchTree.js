import { expect } from 'chai';
import BinarySearchTree from '../src/data/BinarySearchTree';

describe('Binary Search Tree', () => {

  var bstSample = new BinarySearchTree();

  it('Should be a constructor', () => {
    expect(bstSample).to.be.an.instanceof(BinarySearchTree);
  })

  it('Should have search, insert, update, remove, traverse methods', () => {
    expect(bstSample.search).to.be.a('function');
    expect(bstSample.insert).to.be.a('function');
    expect(bstSample.update).to.be.a('function');
    expect(bstSample.remove).to.be.a('function');
    expect(bstSample.traverse).to.be.a('function');
  })

  describe('Binary Search Tree methods', () => {

    var bst = new BinarySearchTree();
    bst.insert(4, 'four');
    bst.insert(2, 'two');
    bst.insert(3, 'three');
    bst.insert(1, 'one');
    bst.insert(0, 'zero');
    bst.insert(10, 'ten');
    bst.insert(8, 'eight');
    bst.insert(11, 'eleven');
    bst.insert(7, 'seven');
    bst.insert(6, 'six');

    it('Insert, update, search, traverse', () => {
      expect(bst.size).to.equal(10);
      expect(bst.search(10)).to.equal('ten');
      expect(bst.search(4)).to.equal('four');
      expect(bst.search(6)).to.equal('six');

      let store = [];
      bst.traverse(node => {
        store.push(node.val);
      })
      expect(store).to.have.lengthOf(10)
        .and.have.members(['four', 'two', 'three', 'one', 'zero', 
                      'ten', 'eight', 'eleven', 'seven', 'six']);
      bst.update(4, 'head');
      bst.update(6, 'six six six');
      expect(bst.search(4)).to.equal('head');
      expect(bst.search(6)).to.equal('six six six');
      expect(bst.size).to.equal(10);
    });

    it('Remove node', () => {
      bst.remove(6);
      expect(bst.size).to.equal(9);
      expect(bst.search(6)).to.be.null;

      bst.remove(4);
      expect(bst.size).to.equal(8);
      expect(bst.search(4)).to.be.null;
      expect(bst.head.key).to.equal(7);
    });
  })
})