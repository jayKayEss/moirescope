import React, { Component } from 'react';
import Constants from './Constants.js';
import Viewer from './Viewer.js';
import Editor from './Editor.js';
import './App.css';

const filteredValues = (obj, remove) =>
  Object.values(obj).filter( v => v !== remove )

const randItem = (obj) => {
  var array = Object.values(obj);
  return array[Math.floor(Math.random()*array.length)];
}

const RandLayer = (i) => {
  return {
    type: randItem(filteredValues(Constants.Type, Constants.Type.None)),
    size: randItem(Constants.Size),
    weight: randItem(Constants.Weight),
    speed: randItem(Constants.Speed),
    animation: randItem(Constants.Animation),
    color: i === 0 ? randItem(filteredValues(Constants.Color, Constants.Color.Black)) : randItem(Constants.Color)
  }
}

const DefaultLayer = () => {
  return {
    type: Constants.Type.None,
    size: Constants.Size.S,
    weight: Constants.Weight.S,
    speed: Constants.Speed.Slow,
    animation: Constants.Animation.None,
    color: Constants.Color.White
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layers: this.getRandomLayers()
    }

    this.onTypeChange = this.onTypeChange.bind(this);
    this.onSizeChange = this.onSizeChange.bind(this);
    this.onWeightChange = this.onWeightChange.bind(this);
    this.onSpeedChange = this.onSpeedChange.bind(this);
    this.onAnimationChange = this.onAnimationChange.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
    this.onRandomizeLayers = this.onRandomizeLayers.bind(this);
  }

  getRandomLayers() {
    var numLayers = Math.floor(Math.random() * 2) + 2;
    return [...Array(4)].map( (_, i) => i < numLayers ? RandLayer(i) : DefaultLayer() );
  }

  onTypeChange(i, value) {
    this.setState((prevState, props) => {
      prevState.layers[i].type = value;

      return {
        layers: prevState.layers
      };
    });
  }

  onSizeChange(i, value) {
    this.setState((prevState, props) => {
      prevState.layers[i].size = value;

      return {
        layers: prevState.layers
      };
    });
  }

  onWeightChange(i, value) {
    this.setState((prevState, props) => {
      prevState.layers[i].weight = value;

      return {
        layers: prevState.layers
      };
    });
  }

  onSpeedChange(i, value) {
    this.setState((prevState, props) => {
      prevState.layers[i].speed = value;

      return {
        layers: prevState.layers
      };
    });
  }

  onAnimationChange(i, value) {
    this.setState((prevState, props) => {
      prevState.layers[i].animation = value;

      return {
        layers: prevState.layers
      };
    });
  }

  onColorChange(i, value) {
    this.setState((prevState, props) => {
      prevState.layers[i].color = value;

      return {
        layers: prevState.layers
      };
    });
  }

  onRandomizeLayers() {
    var newLayers = this.getRandomLayers();
    this.setState({ layers: newLayers });
  }

  render() {
    return (
      <div className="App">
        <Viewer layers={this.state.layers} />
        <Editor
          layers={this.state.layers}
          onTypeChange={this.onTypeChange}
          onSizeChange={this.onSizeChange}
          onWeightChange={this.onWeightChange}
          onSpeedChange={this.onSpeedChange}
          onAnimationChange={this.onAnimationChange}
          onColorChange={this.onColorChange}
          onRandomizeLayers={this.onRandomizeLayers}
        />
      </div>
    );
  }
}

export default App;
