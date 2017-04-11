class Vertex {
  constructor(val) {
    this.value       = val;
    this.connections = {};
  }

  /*
  ** Draws a connection between this node to another node
  */
  connect(edge) {

  }

  /*
  ** Returns the collection of vertices that this vertex links to
  ** Note: this is a directed graph (edges have a one-way connection)
  */
  getNeighbors() {

  }
}

export default Vertex;