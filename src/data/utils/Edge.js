class Edge {
  constructor(fromNode, toNode, weight) {
    this.weight   = weight || 0;
    this.fromNode = fromNode;
    this.toNode   = toNode;
  }

  adjustWeight(weight) {
    this.weight   = weight;
  }
}

export default Edge;