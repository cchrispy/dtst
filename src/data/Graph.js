import Vertex from './utils/Vertex';
import Edge from './utils/Edge';

class Graph {
  constructor() {
    this.size     = 0;
    this._vertices = {};
  }

  /*
  ** Creates a vertex node that contains a value
  ** The value should be stringified and stored in Graph.vertices
  ** An edge can be drawn to/from this vertex with addEdge()
  ** Vertices must have unique values
  */
  addVertex(val) {
    // Convert the value to a string if it isn't already
    let value = this._stringify(val);
    // Throw an error if the value already exists as a vertex
    if (this._vertices[value]) {
      throw new Error('Error: a vertex with that value already exists.');
    }

    // Create a new Vertex node; store it and return the vertex
    let newVertex = new Vertex(value);
    this._vertices[value] = newVertex;
    return newVertex;
  }

  /*
  ** Removes the vertex corresponding to the input value or vertex
  ** All participating edges to/from this vertex should be removed
  ** An edge can be removed to/from this vertex with removeEdge()
  */
  removeVertex(val) {
    // Convert the value to a string if it isn't already
    // If the inputted value is a Vertex, then grab the value directly
    let value = val instanceof Vertex ? val.value : this._stringify(val);
    // Throw an error if a vertex with that value does not exist
    if (!this._vertices[value]) {
      throw new Error('Error: a vertex with that value does not exist.');
    }

    let removedVertex = this._vertices[value];
    delete this._vertices[value];

    /****************************************************
    ****************************************************/
    /****************************************************
    ** TODO: Remove all edges connected to this Vertex **
    ****************************************************/
    /****************************************************
    ****************************************************/

  }

  /*
  ** Returns all the vertices in the graph
  */
  getVertices() {
    return this._vertices;
  }

  /*
  ** Returns the vertex node corresponding to the inputted value
  */
  getVertex(val) {
    let value = this._stringify(val);
    if (!this._vertices[value]) {
      throw new Error('Error: a vertex with that value does not exist.');
    }

    return this._vertices[value];
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

  /*
  ** Helper function: convert the input value into a string if it isn't already
  ** Throw errors for inappropriate input values
  */
  _stringify(val) {
    if (val === null || val === undefined || typeof val === 'function') {
      throw new Error('Error: invalid input value.');
    }

    return typeof val === 'string' ? val : JSON.stringify(val);
  }
}

export default Graph;