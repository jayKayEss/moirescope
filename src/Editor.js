import React, { Component } from 'react';
import Constants from './Constants.js';
import './Editor.css';
import Pattern from './Palette/Pattern.js';
import Animation from './Palette/Animation.js';
import Color from './Palette/Color.js';
import classnames from 'classnames';

class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: Constants.Palette.None
    };

    this.onTypeChange = this.onTypeChange.bind(this);
    this.onSizeChange = this.onSizeChange.bind(this);
    this.onWeightChange = this.onWeightChange.bind(this);
    this.onAnimationChange = this.onAnimationChange.bind(this);
    this.onSpeedChange = this.onSpeedChange.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
    this.onRandomizeLayers = this.onRandomizeLayers.bind(this);

    this.togglePatternPalette = this.togglePatternPalette.bind(this);
  }

  togglePatternPalette(palette) {
    return (e) =>
      this.setState((prevState, props) => {
        if (prevState.currentTab === palette) {
          return {currentTab: null};
        } else {
          return {currentTab: palette};
        }
      });
  }

  onTypeChange(i) {
    return (e) =>
      this.props.onTypeChange(i, e.target.value);
  }

  onSizeChange(i) {
    return (e) =>
      this.props.onSizeChange(i, parseInt(e.target.value, 10));
  }

  onWeightChange(i) {
    return (e) =>
      this.props.onWeightChange(i, parseInt(e.target.value, 10));
  }

  onAnimationChange(i) {
    return (e) =>
      this.props.onAnimationChange(i, e.target.value);
  }

  onSpeedChange(i) {
    return (e) =>
      this.props.onSpeedChange(i, parseInt(e.target.value, 10));
  }

  onColorChange(i) {
    return (e) =>
      this.props.onColorChange(i, e.target.value);
  }

  onRandomizeLayers(e) {
    e.preventDefault();
    this.props.onRandomizeLayers();
  }

  render() {
    return (
      <div className="editor">
        <Pattern
          onTypeChange={this.onTypeChange}
          onSizeChange={this.onSizeChange}
          onWeightChange={this.onWeightChange}
          currentTab={this.state.currentTab}
          layers={this.props.layers}
        />
        <Animation
          onAnimationChange={this.onAnimationChange}
          onSpeedChange={this.onSpeedChange}
          currentTab={this.state.currentTab}
          layers={this.props.layers}
        />
        <Color
          onColorChange={this.onColorChange}
          currentTab={this.state.currentTab}
          layers={this.props.layers}
        />
        <div className="panel taskbar">
          <div className="controls">
            <button className={classnames({active: this.state.currentTab === Constants.Palette.Pattern})} onClick={this.togglePatternPalette(Constants.Palette.Pattern)}>PATTERN</button>
            <button className={classnames({active: this.state.currentTab === Constants.Palette.Animation})} onClick={this.togglePatternPalette(Constants.Palette.Animation)}>ANIMATION</button>
            <button className={classnames({active: this.state.currentTab === Constants.Palette.Color})} onClick={this.togglePatternPalette(Constants.Palette.Color)}>COLOR</button>
            <button onClick={this.onRandomizeLayers}>RANDOMIZE</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Editor;
