import { expect } from 'chai';
import Trie, { Node as TrieNode } from '../src/data/Trie';

describe('Trie', () => {

  var trie = new Trie();

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

  it('Should be a constructor', () => {
    expect(trie).to.be.an.instanceof(Trie);
  });

  it('Should have add, remove, contains, predict methods', () => {
    expect(trie.add).to.be.a('function');
    expect(trie.remove).to.be.a('function');
    expect(trie.contains).to.be.a('function');
    expect(trie.predict).to.be.a('function');
  });

  describe('Trie methods', () => {

    // populate the Trie with random words
    collection.forEach(word => trie.add(word));

    it('Contains() returns appropriate boolean values', () => {
      expect(trie.contains('monkey')).to.be.true;
      expect(trie.contains('m')).to.be.true;
      expect(trie.contains('frequent')).to.be.true;
      expect(trie.contains('frequently')).to.be.false;
      expect(trie.contains('')).to.be.true;
    });

    it('Predict() returns words with the appropriate prefix', () => {
      expect(trie.predict('a')).to.have.lengthOf(7)
        .and.have.members(["abrupt", "acid", "adventurous", "ahead", "amused", "appliance", "attach"]);
      expect(trie.predict('mo')).to.have.lengthOf(2)
        .and.have.members(["moaning", "monkey"]);
      expect(trie.predict('monkey')).to.have.lengthOf(0);
      expect(trie.predict('')).to.have.lengthOf(collection.length - 2);
      // Note: the words "hand" and "use" are not predicted because they are overwritten
      //       by the words "handy" and "useful".
    });

    it('Remove() throws Error for invalid inputs', () => {
      expect(trie.remove.bind(trie, '')).to.throw(Error);
      expect(trie.remove.bind(trie)).to.throw(Error);
      expect(trie.remove.bind(trie, 'abcd')).to.throw(Error);
    })

    it('Remove() removes the prefix and all descendent words', () => {
      trie.remove('bushes');
      expect(trie.contains('bushes')).to.be.false;
      expect(trie.predict('b')).to.have.lengthOf(6)
        .and.have.members(["bee", "better", "borrow", "bouncy", "branch", "brave", "business"]);
    })

  });
});