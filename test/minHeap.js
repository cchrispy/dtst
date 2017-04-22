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

  xdescribe('Min Heap methods', () => {

    var Heap;
    beforeEach(() => {

      Heap = new MinHeap();

      var numbers = [42, 9, 5, 12, 11, 99, 1, 23, 28, 33, 20];
      numbers.forEach(number => {
        Heap.insert(number);
      })

    })

    it('The root element should be the smallest', () => {
      expect(Heap.peek()).to.equal(1);
    })

    it('Delete and extract should rearrange the heap accordingly', () => {

    });

    it('Search and SearchForIndex', () => {
      
    })
  })
})