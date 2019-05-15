import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        latitude: 37.75,
        longitude: -122.43,
        zoom: 2,
      },
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeWindow);
    this.resizeWindow();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeWindow);
  }

  resizeWindow() {
    const { viewport } = this.state;
    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  }

  render() {
    const { viewport } = this.state;
    return (
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiZGFubWlyYW5kYSIsImEiOiJjanZuNHkzMTQxazRyNDhxbGluZ2E4YXpvIn0.8OPQ_CoSC3_dpHM71V0-Lg"
        onViewportChange={newViewport => this.setState({ viewport: newViewport })}
        mapStyle="mapbox://styles/mapbox/basic-v9"
      >
        <h1>Hello</h1>
      </ReactMapGL>
    );
  }
}
