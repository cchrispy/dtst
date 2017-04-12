import { expect } from 'chai';
import Graph from '../src/data/Graph';
import Vertex from '../src/data/utils/Vertex';
import Edge from '../src/data/utils/Edge';

describe('Graph', () => {

  var GraphSample;
  beforeEach(() => {
    GraphSample = new Graph();
  })

  it('Should be a constructor', () => {
    expect(GraphSample).to.be.an.instanceof(Graph);
  })

  it('Should have addVertex, removeVertex, getVertices, getVertex, addEdge, removeEdge, getEdge methods', () => {
    expect(GraphSample.addVertex).to.be.a('function');
    expect(GraphSample.removeVertex).to.be.a('function');
    expect(GraphSample.getVertices).to.be.a('function');
    expect(GraphSample.getVertex).to.be.a('function');
    expect(GraphSample.addEdge).to.be.a('function');
    expect(GraphSample.removeEdge).to.be.a('function');
    expect(GraphSample.getEdge).to.be.a('function');
  })

  describe('Graph methods', () => {

    it('Should instantiate vertex nodes', () => {

    var graph = new Graph();
    graph.addVertex('Fremont');
    graph.addVertex('Palo Alto');
    graph.addVertex('Burlingame');
    graph.addVertex('San Jose');

    expect(graph.getVertex('Fremont')).to.be.an.instanceof(Vertex);
    expect(graph.getVertex('Palo Alto')).to.be.an.instanceof(Vertex);
    expect(graph.getVertex('Burlingame')).to.be.an.instanceof(Vertex);
    expect(graph.getVertex('San Jose')).to.be.an.instanceof(Vertex);

    });
  })
});