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

    var graph;
    beforeEach(() => {
      graph = new Graph();
      graph.addVertex('Fremont');
      graph.addVertex('Palo Alto');
      graph.addVertex('Burlingame');
      graph.addVertex('San Jose');
    })

    it('Should instantiate and remove vertex nodes', () => {

      expect(graph.getVertex('Fremont')).to.be.an.instanceof(Vertex);
      expect(graph.getVertex('Palo Alto')).to.be.an.instanceof(Vertex);
      expect(graph.getVertex('Burlingame')).to.be.an.instanceof(Vertex);
      expect(graph.getVertex('San Jose')).to.be.an.instanceof(Vertex);
      expect(graph.size).to.equal(4);

      var vertex = graph.getVertex('Palo Alto');
      graph.removeVertex(vertex);
      graph.removeVertex('Fremont');

      expect(graph.size).to.equal(2);
      expect(Object.keys(graph._vertices)).to.have.lengthOf(2);
      expect(graph.getVertex.bind(graph, 'Fremont')).to.throw(Error);
      expect(graph.getVertex.bind(graph, 'Palo Alto')).to.throw(Error);

    });

    it('Should allow edges to connect and disconnect from vertices', () => {

      let fremont = graph.getVertex('Fremont');
      let paloAlto = graph.getVertex('Palo Alto');
      let burlingame = graph.getVertex('Burlingame');
      let sanJose = graph.getVertex('San Jose');

      graph.addEdge(fremont, paloAlto, 4);
      graph.addEdge(fremont, burlingame);
      graph.addEdge(paloAlto, burlingame, 10);
      graph.addEdge(burlingame, paloAlto, 8);

      expect(graph.getEdge(fremont, paloAlto)).to.be.an.instanceof(Edge);
      expect(graph.getEdge(fremont, burlingame)).to.be.an.instanceof(Edge);
      expect(graph.getEdge(paloAlto, burlingame)).to.be.an.instanceof(Edge);
      expect(graph.getEdge(burlingame, paloAlto)).to.be.an.instanceof(Edge);

      graph.removeEdge(burlingame, paloAlto);
      expect(graph.getEdge.bind(graph, 'Burlingame', 'Palo Alto')).to.throw(Error);
      expect(graph.getEdge.bind(graph, 'Fremont', 'San Jose')).to.throw(Error);

    });
  });
});