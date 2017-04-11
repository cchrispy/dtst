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
    // Throw an error for invalid input vertex nodes
    let error = new Error('Error: edges can only be added to two valid vertices.');
    this._validate(fromNode, toNode, error);

    let newEdge = new Edge(fromNode, toNode, weight);
    fromNode.connect(newEdge);
    return newEdge;
  }

  /*
  ** Removes an edge that links a vertex to another vertex
  ** The input can either be a fromNode & toNode
  ** or the input can be an edge
  */
  removeEdge(fromNode, toNode) {
    // Set the startNode and endNode appropriately depending on the type of input
    var startNode, endNode;

    if (fromNode instanceof Edge) {
      // If the first argument is an Edge node instead of a Vertex node
      let edge  = fromNode;
      startNode = edge.fromNode;
      endNode   = edge.toNode;
    } else {
      // If the first argument is a Vertex node instead of an Edge node
      let error = new Error('Error: inputs must be valid Vertices');
      this._validate(fromNode, toNode, error);

      startNode = fromNode;
      endNode   = toNode;
    }

    let endNodeValue = endNode.value;
    let removedEdge  = startNode.connections[endNodeValue];
    delete startNode.connections[endNodeValue];

    return removedEdge;
  }

  /*
  ** Returns the edge that links a vertex to another vertex
  ** Useful for adjusting the weight of that edge
  */
  getEdge(fromNode, toNode) {
    // Throw an error for invalid input vertex nodes
    let error = new Error('Error: inputs must be valid Vertices.');
    this._validate(fromNode, toNode, error);

    // Return the edge if it exists, otherwise return false
    let edge = fromNode.connections[toNode.value]
    return edge ? edge : false;
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

  /*
  ** Throw a custom error if the nodes are not vertices in the Graph
  */
  _validate(fromNode, toNode, err) {
    if (!(fromNode instanceof Vertex) || !(toNode instanceof Vertex)) {
      throw err;
    }
    if (!this._vertices[fromNode.value] || !this._vertices[toNode.value]) {
      throw err;
    }

    return true;
  }
}

export default Graph;