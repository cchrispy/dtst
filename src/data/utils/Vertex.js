class Vertex {
  constructor(val) {
    this.value       = val;
    this.connections = {};
  }

  /*
  ** Draws a connection between this node to another node
  */
  connect(edge) {
    let toNodeValue = edge.toNode.value;
    this.connections[toNodeValue] = edge;
  }

  /*
  ** Returns the collection of vertices that this vertex links to
  ** Note: this is a directed graph (edges have a one-way connection)
  */
  getNeighbors() {
    let vertices = {};
    for (let prop in this.connections) {
      let edge = this.connections[prop];
      vertices[prop] = edge.toNode;
    }
    
    return vertices;
  }
}

export default Vertex;