import React, { Component } from 'react';
import Constants from '../Constants.js';
import classnames from 'classnames';

class Animation extends Component {
  render() {
    return (
      <div className={classnames('panel', 'palette', {active: this.props.currentTab === Constants.Palette.Animation})}>
        <div className="controls">
          {this.props.layers.map((layer, i) =>
            <fieldset key={i}>
              <legend>{i+1}</legend>
              <div>
                <label><input type="radio" name={"animation_" + i} value={Constants.Animation.None} onChange={this.props.onAnimationChange(i)} checked={layer.animation === Constants.Animation.None} disabled={layer.type === Constants.Type.None}/>NONE </label>
                <label><input type="radio" name={"animation_" + i} value={Constants.Animation.Spin} onChange={this.props.onAnimationChange(i)} checked={layer.animation === Constants.Animation.Spin} disabled={layer.type === Constants.Type.None}/>SPIN </label>
                <label><input type="radio" name={"animation_" + i} value={Constants.Animation.Hover} onChange={this.props.onAnimationChange(i)} checked={layer.animation === Constants.Animation.Hover} disabled={layer.type === Constants.Type.None}/>HOVER </label>
                <label><input type="radio" name={"animation_" + i} value={Constants.Animation.Slide} onChange={this.props.onAnimationChange(i)} checked={layer.animation === Constants.Animation.Slide} disabled={layer.type === Constants.Type.None}/>SLIDE </label>
                <label><input type="radio" name={"animation_" + i} value={Constants.Animation.Zoom} onChange={this.props.onAnimationChange(i)} checked={layer.animation === Constants.Animation.Zoom} disabled={layer.type === Constants.Type.None}/>ZOOM </label>
              </div>

              <div>
                <label>FAST <input type="range" name={"weight_"+i} value={layer.speed} onChange={this.props.onSpeedChange(i)} min={Constants.Speed.Min} max={Constants.Speed.Max} disabled={layer.type === Constants.Type.None}/> SLOW</label>
              </div>
            </fieldset>
          )}
        </div>
      </div>
    )
  }
}

export default Animation;
