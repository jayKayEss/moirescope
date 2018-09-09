import React, { Component } from 'react';
import Constants from '../Constants.js';
import classnames from 'classnames';

class Pattern extends Component {
  render() {
    return (
      <div className={classnames('panel', 'palette', {active: this.props.currentTab === Constants.Palette.Pattern})}>
        <div className="controls">
          {this.props.layers.map((layer, i) =>
            <fieldset key={i}>
              <legend>{i+1}</legend>
              <div>
                <label><input type="radio" name={"type_"+i} value={Constants.Type.None} onChange={this.props.onTypeChange(i)} checked={layer.type === Constants.Type.None}/>NONE </label>
                <label><input type="radio" name={"type_"+i} value={Constants.Type.Lines} onChange={this.props.onTypeChange(i)} checked={layer.type === Constants.Type.Lines}/>LINES </label>
                <label><input type="radio" name={"type_"+i} value={Constants.Type.Dots} onChange={this.props.onTypeChange(i)} checked={layer.type === Constants.Type.Dots}/>DOTS </label>
                <label><input type="radio" name={"type_"+i} value={Constants.Type.Circles} onChange={this.props.onTypeChange(i)} checked={layer.type === Constants.Type.Circles}/>CIRCLES </label>
                <label><input type="radio" name={"type_"+i} value={Constants.Type.Squares} onChange={this.props.onTypeChange(i)} checked={layer.type === Constants.Type.Squares}/>SQUARES </label>
              </div>

              <div>
                <label>TIGHT <input type="range" name={"size_"+i} value={layer.spacing} onChange={this.props.onSizeChange(i)} min={Constants.Spacing.Min} max={Constants.Spacing.Max} disabled={layer.type === Constants.Type.None}/> LOOSE</label>
              </div>

              <div>
                <label>THIN <input type="range" name={"weight_"+i} value={layer.weight} onChange={this.props.onWeightChange(i)} min={Constants.Weight.Min} max={Constants.Weight.Max} disabled={layer.type === Constants.Type.None}/> THICK</label>
              </div>
            </fieldset>
          )}
        </div>
      </div>
    )
  }
}

export default Pattern;
