import React, { Component } from 'react';
import Layer from './Layer.js';
import './Viewer.css';

class Viewer extends Component {
  render() {
    return (
      <div className="viewer">
        { this.props.layers.map((layer, i) => <Layer key={i} {...layer} />) }
      </div>
    );
  }
}

export default Viewer;
