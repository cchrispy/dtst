import { expect } from 'chai';
import Tree from '../src/data/Tree';

describe('Tree', () => {

  const tree = new Tree();

  it('Should be a constructor', () => {
    expect(tree).to.be.an.instanceof(Tree);
  })

})