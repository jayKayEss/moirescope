import React, { Component } from 'react';
import Constants from '../Constants.js';
import classnames from 'classnames';

class Animation extends Component {
  render() {
    return (
      <div className={classnames('panel', 'palette', {active: this.props.currentTab === Constants.Palette.Animation})}>
        <div className="controls">
          {this.props.layers.map((layer, i) =>
            <fieldset>
              <legend>{i+1}</legend>
              <div>
                <label><input type="radio" name={"animation_" + i} value={Constants.Animation.None} onChange={this.props.onAnimationChange(i)} checked={layer.animation === Constants.Animation.None} disabled={layer.type === Constants.Type.None}/>NONE </label>
                <label><input type="radio" name={"animation_" + i} value={Constants.Animation.Spin} onChange={this.props.onAnimationChange(i)} checked={layer.animation === Constants.Animation.Spin} disabled={layer.type === Constants.Type.None}/>SPIN </label>
                <label><input type="radio" name={"animation_" + i} value={Constants.Animation.Hover} onChange={this.props.onAnimationChange(i)} checked={layer.animation === Constants.Animation.Hover} disabled={layer.type === Constants.Type.None}/>HOVER </label>
                <label><input type="radio" name={"animation_" + i} value={Constants.Animation.Shuffle} onChange={this.props.onAnimationChange(i)} checked={layer.animation === Constants.Animation.Shuffle} disabled={layer.type === Constants.Type.None}/>SHUFFLE </label>
              </div>

              <div>
                <label><input type="radio" name={"speed_" + i} value={Constants.Speed.Slow} onChange={this.props.onSpeedChange(i)} checked={layer.speed === Constants.Speed.Slow} disabled={layer.type === Constants.Type.None || layer.animation === Constants.Animation.None}/>SLOW </label>
                <label><input type="radio" name={"speed_" + i} value={Constants.Speed.Medium} onChange={this.props.onSpeedChange(i)} checked={layer.speed === Constants.Speed.Medium} disabled={layer.type === Constants.Type.None || layer.animation === Constants.Animation.None}/>MEDIUM </label>
                <label><input type="radio" name={"speed_" + i} value={Constants.Speed.Fast} onChange={this.props.onSpeedChange(i)} checked={layer.speed === Constants.Speed.Fast} disabled={layer.type === Constants.Type.None || layer.animation === Constants.Animation.None}/>FAST </label>
              </div>
            </fieldset>
          )}
        </div>
      </div>
    )
  }
}

export default Animation;
