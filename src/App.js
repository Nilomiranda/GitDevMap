import React, { Component, Fragment } from 'react';
import ReactMapGL from 'react-map-gl';

// custom components
import GlobalStyle from './GlobalStyle';
import CardContainer from './components/Card';
import UsersList from './components/UsersList';

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
      modalOn: false,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeWindow);
    this.resizeWindow();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeWindow);
  }

  resizeWindow = () => {
    const { viewport } = this.state;
    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  showModal = () => {
    console.log('opening modal');
    this.setState({ modalOn: true });
  };

  cancelEvent = e => {
    e.stopPropagation();
    this.closeModal();
  };

  closeModal = () => {
    this.setState({ modalOn: false });
  };

  render() {
    const { viewport } = this.state;
    return (
      // TODO: FIX mouse click event
      <Fragment>
        <GlobalStyle />
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken="pk.eyJ1IjoiZGFubWlyYW5kYSIsImEiOiJjanZuNHkzMTQxazRyNDhxbGluZ2E4YXpvIn0.8OPQ_CoSC3_dpHM71V0-Lg"
          onViewportChange={newViewport => this.setState({ viewport: newViewport })}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          onMouseUp={this.showModal}
          className="map-container"
        >
          <UsersList />
          {this.state.modalOn ? <CardContainer cancel={e => this.cancelEvent(e)} /> : ''}
        </ReactMapGL>
      </Fragment>
    );
  }
}
