import { expect } from 'chai';
import MinHeap from '../src/data/MinHeap';

describe('Min Heap', () => {
  var minHeapSample;
  beforeEach(() => {
    minHeapSample = new MinHeap();
  });

  it('Should be a constructor', () => {
    expect(minHeapSample).to.be.an.instanceof(MinHeap);
  });

  it('Should have insert, delete, extract, peek, search, searchForIndex methods', () => {
    expect(minHeapSample.insert).to.be.a('function');
    expect(minHeapSample.delete).to.be.a('function');
    expect(minHeapSample.extract).to.be.a('function');
    expect(minHeapSample.peek).to.be.a('function');
    expect(minHeapSample.search).to.be.a('function');
    expect(minHeapSample.searchForIndex).to.be.a('function');
  });

  describe('Min Heap methods', () => {

    var Heap;
    beforeEach(() => {

      Heap = new MinHeap();


    })

    it('The root element should be the smallest', () => {
      expect(Heap.peek()).to.be.undefined;

      var numbers = [42, 9, 5, 12, 11, 99, 1, 23, 28, 33, 20];
      numbers.forEach(number => {
        Heap.insert(number);
      });

      expect(Heap.peek()).to.equal(1);
      expect(Heap.extract()).to.equal(1);
      expect(Heap.peek()).to.equal(5);

      Heap.delete(1);
      expect(Heap.peek()).to.equal(9);

      Heap.insert(0);
      expect(Heap.peek()).to.equal(0);
      expect(Heap.size).to.equal(10);
    });

    it('Delete and extract should rearrange the heap accordingly', () => {

      var numbers = [4, 2, 5, 3, 1, 9, 7, 8, 6];
      numbers.forEach(number => {
        Heap.insert(number);
      });

      expect(Heap._storage.slice(1)).to.deep.equal([1, 2, 5, 4, 3, 9, 7, 8, 6]);

      Heap.extract();
      expect(Heap._storage.slice(1)).to.deep.equal([2, 3, 5, 4, 6, 9, 7, 8]);
      expect(Heap.delete(6)).to.equal(9);
      expect(Heap._storage.slice(1)).to.deep.equal([2, 3, 5, 4, 6, 8, 7]);
      expect(Heap.delete(2)).to.equal(3);
      expect(Heap._storage.slice(1)).to.deep.equal([2, 4, 5, 7, 6, 8]);
    });

    it('Search and SearchForIndex', () => {

      var numbers = [4, 2, 5, 3, 1, 9, 7, 8, 6];
      numbers.forEach(number => {
        Heap.insert(number);
      });

      expect(Heap.searchForIndex(5)).to.equal(3);

      var store = [];
      Heap.search(val => store.push(val));
      expect(store).to.deep.equal([1, 2, 5, 4, 3, 9, 7, 8, 6]);
    });
  })
})