import React, { Component } from 'react';
import Constants from '../Constants.js';
import classnames from 'classnames';

class Pattern extends Component {
  render() {
    return (
      <div className={classnames('panel', 'palette', {active: this.props.currentTab === Constants.Palette.Pattern})}>
        <div className="controls">
          {this.props.layers.map((layer, i) =>
            <fieldset>
              <legend>{i+1}</legend>
              <div>
                <label><input type="radio" name={"type_"+i} value={Constants.Type.None} onChange={this.props.onTypeChange(i)} checked={layer.type === Constants.Type.None}/>NONE </label>
                <label><input type="radio" name={"type_"+i} value={Constants.Type.Lines} onChange={this.props.onTypeChange(i)} checked={layer.type === Constants.Type.Lines}/>LINES </label>
                <label><input type="radio" name={"type_"+i} value={Constants.Type.Dots} onChange={this.props.onTypeChange(i)} checked={layer.type === Constants.Type.Dots}/>DOTS </label>
                <label><input type="radio" name={"type_"+i} value={Constants.Type.Circles} onChange={this.props.onTypeChange(i)} checked={layer.type === Constants.Type.Circles}/>CIRCLES </label>
                <label><input type="radio" name={"type_"+i} value={Constants.Type.Squares} onChange={this.props.onTypeChange(i)} checked={layer.type === Constants.Type.Squares}/>SQUARES </label>
              </div>

              <div>
                <label><input type="radio" name={"size_"+i} value={Constants.Size.S} onChange={this.props.onSizeChange(i)} checked={layer.size === Constants.Size.S} disabled={layer.type === Constants.Type.None}/>TIGHT </label>
                <label><input type="radio" name={"size_"+i} value={Constants.Size.M} onChange={this.props.onSizeChange(i)} checked={layer.size === Constants.Size.M} disabled={layer.type === Constants.Type.None}/>MEDIUM </label>
                <label><input type="radio" name={"size_"+i} value={Constants.Size.L} onChange={this.props.onSizeChange(i)} checked={layer.size === Constants.Size.L} disabled={layer.type === Constants.Type.None}/>LOOSE </label>
              </div>

              <div>
                <label><input type="radio" name={"weight_"+i} value={Constants.Weight.S} onChange={this.props.onWeightChange(i)} checked={layer.weight === Constants.Weight.S} disabled={layer.type === Constants.Type.None}/>THIN </label>
                <label><input type="radio" name={"weight_"+i} value={Constants.Weight.M} onChange={this.props.onWeightChange(i)} checked={layer.weight === Constants.Weight.M} disabled={layer.type === Constants.Type.None}/>MEDIUM </label>
                <label><input type="radio" name={"weight_"+i} value={Constants.Weight.L} onChange={this.props.onWeightChange(i)} checked={layer.weight === Constants.Weight.L} disabled={layer.type === Constants.Type.None}/>THICK </label>
              </div>
            </fieldset>
          )}
        </div>
      </div>
    )
  }
}

export default Pattern;
