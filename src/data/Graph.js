import Vertex from './utils/Vertex';
import Edge from './utils/Edge';

class Graph {
  constructor() {
    this.size     = 0;
    this.vertices = {};
  }

  /*
  ** Creates a vertex node that contains a value
  ** The value should be stringified and stored in Graph.vertices
  ** An edge can be drawn to/from this vertex with addEdge()
  */
  addVertex(val) {

  }

  /*
  ** Removes the vertex corresponding to the value
  ** All participating edges to/from this vertex should be removed
  ** An edge can be removed to/from this vertex with removeEdge()
  */
  removeVertex(val) {

  }

  /*
  ** Returns the collection of vertices that this vertex links to
  ** Note: this is a directed graph (edges have a one-way connection)
  */
  getNeighbors(vertex) {

  }

  /*
  ** Creates an edge that links a vertex to another vertex
  ** An optional weight can be given to the edge, defaults to 0
  */
  addEdge(fromNode, toNode, weight) {

  }

  /*
  ** Removes an edge that links a vertex to another vertex
  */
  removeEdge(fromNode, toNode) {

  }

  /*
  ** Returns the edge that links a vertex to another vertex
  ** Useful for adjusting the weight of that edge
  */
  getEdge(fromNode, toNode) {

  }
}

export default Graph;