import { expect } from 'chai';
import LinkedList from '../src/data/LinkedList';

// Helper function to list the items in a linked list in order
const listItems = linkedList => {
  var items = [];
  linkedList.traverse(node => items.push(node.val));
  return items;
}

describe('Doubly Linked List', () => {

  it('Should be a constructor', () => {
    const listSample = new LinkedList();
    expect(listSample).to.be.an.instanceof(LinkedList);
  });

  describe('Doubly Linked List methods', () => {

    var list = new LinkedList();

    it('Inserting nodes', () => {

      const letters = ['A', 'B', 'C', 'D', 'E'];
      letters.forEach(letter => list.addToTail(letter));

      expect(listItems(list)).to.deep.equal(letters);

      list.addToHead('ZERO');
      expect(list.head.val === 'ZERO').to.be.true;
      expect(listItems(list)).to.deep.equal(['ZERO', 'A', 'B', 'C', 'D', 'E']);
      expect(list.getSize()).to.equal(6);

      list.insert('foo', list.search('C'));
      list.addToTail('F');
      list.insert('bar', list.search('F'));
      expect(listItems(list)).to.deep.equal(['ZERO', 'A', 'B', 'C', 'foo', 'D', 'E', 'F', 'bar']);
      expect(list.getSize()).to.equal(9);

      expect(list.head.val === 'ZERO').to.be.true;
      expect(list.head.next.val === 'A').to.be.true;
      expect(list.tail.val === 'bar').to.be.true;
      expect(list.tail.prev.val === 'F').to.be.true;
    })

    it('Deleting nodes', () => {
      list.deleteHead();
      list.deleteTail();
      expect(listItems(list)).to.deep.equal(['A', 'B', 'C', 'foo', 'D', 'E', 'F']);

      list.delete(list.search('foo'));
      list.delete(list.search('F'));
      expect(listItems(list)).to.deep.equal(['A', 'B', 'C', 'D', 'E']);
      expect(list.head.val === 'A' && list.tail.val === 'E').to.be.true;
    })

    it('Reversing the linked list', () => {
      list.reverse();
      expect(listItems(list)).to.deep.equal(['E', 'D', 'C', 'B', 'A']);
      expect(list.head.val === 'E' && list.tail.val === 'A').to.be.true;
    })
  })
})