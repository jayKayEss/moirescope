import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import Constants from './Constants.js';
import './Layer.css';

const Lines = (props) => {
    var size = parseInt(props.size, 10),
        weight = parseInt(props.weight, 10),
        fullsize = weight + (weight * size),
        mid = fullsize / 2;

    return (
      <svg width={fullsize} height={fullsize} xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1={mid} x2={fullsize} y2={mid} style={{
          stroke: props.color,
          strokeWidth: weight
        }}/>
        <line x1={mid} y1="0" x2={mid} y2={fullsize} style={{
          stroke: props.color,
          strokeWidth: weight
        }}/>
      </svg>
    );
}

const Dots = (props) => {
  var size = parseInt(props.size, 10),
      weight = parseInt(props.weight, 10),
      fullsize = weight + (weight * size),
      mid = fullsize / 2;

  return (
    <svg width={fullsize} height={fullsize} xmlns="http://www.w3.org/2000/svg">
      <circle
        cx={mid}
        cy={mid}
        r={weight}
        fill={props.color}
      />
    </svg>
  );
}

const Circles = (props) => {
  var size = parseInt(props.size, 10),
      weight = parseInt(props.weight, 10),
      fullsize = 100,
      step = (weight + size * weight) * 2,
      count = Math.floor(fullsize * 3 / step / 2),
      mid = fullsize / 2;

  return (
    <svg width={fullsize} height={fullsize} xmlns="http://www.w3.org/2000/svg">
      {[...Array(count)].map((_, i) =>
        <circle
          key={i}
          cx={mid}
          cy={mid}
          r={step * i / 2}
          fill="none"
          stroke={props.color}
          strokeWidth={weight}
        />
      )}
    </svg>
  );
}

const Squares = (props) => {
  var size = parseInt(props.size, 10),
      weight = parseInt(props.weight, 10),
      fullsize = 100,
      step = (weight + size * weight),
      count = Math.floor(fullsize * 3 / step / 2);

  return (
    <svg width={fullsize} height={fullsize} xmlns="http://www.w3.org/2000/svg">
      {[...Array(count)].map((_, i) =>
        <rect
          key={i}
          x={step * i}
          y={step * i}
          width={fullsize - step * i * 2}
          height={fullsize - step * i * 2}
          fill="none"
          stroke={props.color}
          strokeWidth={weight}
        />
      )}
    </svg>
  );
}

class Layer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      running: true
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.speed !== this.props.speed) {
      // animation-duration is not "animateable," so we need to briefly
      // stop the animation and retstart it for it to take effect.
      this.stopAnimation();
      setTimeout(this.startAnimation.bind(this), 300);
    }
  }

  stopAnimation() {
    this.setState({ running: false });
  }

  startAnimation() {
    this.setState({ running: true });
  }

  render() {
    var svg;

    switch (this.props.type) {
      case Constants.Type.Dots:
        svg = Dots(this.props);
        break;
      case Constants.Type.Lines:
        svg = Lines(this.props);
        break;
      case Constants.Type.Circles:
        svg = Circles(this.props);
        break;
      case Constants.Type.Squares:
        svg = Squares(this.props);
        break;
      default: return null;
    }

    const svgString = encodeURIComponent(ReactDOMServer.renderToStaticMarkup(svg));
    const dataUri = `url("data:image/svg+xml,${svgString}")`;

    return (
      <div className="layer" style={{
        backgroundImage: dataUri,
        backgroundPosition: "center center",
        animationName: this.state.running ? this.props.animation : null,
        animationDuration: `${this.props.speed}s`,
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear'
      }}>&nbsp;</div>
    )
  }
}

export default Layer;
