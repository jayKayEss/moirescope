import React, { Component } from 'react';
import Constants from '../Constants.js';
import classnames from 'classnames';

class Color extends Component {
  render() {
    return (
      <div className={classnames('panel', 'palette', {active: this.props.currentTab === Constants.Palette.Color})}>
        <div className="controls">
          {this.props.layers.map((layer, i) =>
            <fieldset key={i}>
              <legend>{i+1}</legend>
              <label><input type="radio" name={"color_" + i} value={Constants.Color.White} onChange={this.props.onColorChange(i)} checked={layer.color === Constants.Color.White} disabled={layer.type === Constants.Type.None}/>WHITE </label>
              <label><input type="radio" name={"color_" + i} value={Constants.Color.Red} onChange={this.props.onColorChange(i)} checked={layer.color === Constants.Color.Red} disabled={layer.type === Constants.Type.None}/>RED </label>
              <label><input type="radio" name={"color_" + i} value={Constants.Color.Yellow} onChange={this.props.onColorChange(i)} checked={layer.color === Constants.Color.Yellow} disabled={layer.type === Constants.Type.None}/>YELLOW </label>
              <label><input type="radio" name={"color_" + i} value={Constants.Color.Green} onChange={this.props.onColorChange(i)} checked={layer.color === Constants.Color.Green} disabled={layer.type === Constants.Type.None}/>GREEN </label>
              <label><input type="radio" name={"color_" + i} value={Constants.Color.Cyan} onChange={this.props.onColorChange(i)} checked={layer.color === Constants.Color.Cyan} disabled={layer.type === Constants.Type.None}/>CYAN </label>
              <label><input type="radio" name={"color_" + i} value={Constants.Color.Blue} onChange={this.props.onColorChange(i)} checked={layer.color === Constants.Color.Blue} disabled={layer.type === Constants.Type.None}/>BLUE </label>
              <label><input type="radio" name={"color_" + i} value={Constants.Color.Magenta} onChange={this.props.onColorChange(i)} checked={layer.color === Constants.Color.Magenta} disabled={layer.type === Constants.Type.None}/>MAGENTA </label>
              <label><input type="radio" name={"color_" + i} value={Constants.Color.Black} onChange={this.props.onColorChange(i)} checked={layer.color === Constants.Color.Black} disabled={layer.type === Constants.Type.None}/>BLACK </label>
            </fieldset>
          )}
        </div>
      </div>
    )
  }
}

export default Color;
