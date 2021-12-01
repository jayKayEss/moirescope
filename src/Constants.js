const Constants = {
  Type: {
    None: '',
    Grid: "grid",
    Lines: "lines",
    Dots: "dots",
    Circles: "circles",
    Squares: "squares"
  },
  Spacing: {
    Min: 1,
    Max: 10
  },
  Weight: {
    Min: 1,
    Max: 5
  },
  Speed: {
    Min: 5000,
    Max: 100000
  },
  Animation: {
    None: '',
    Spin: 'spin',
    Hover: 'hover',
    Slide: 'slide',
    Zoom: 'zoom',
    Stretch: 'stretch'
  },
  Timing: {
    '': '',
    spin: 'linear',
    hover: 'linear',
    slide: 'ease-in-out',
    zoom: 'ease-in-out',
    stretch: 'ease-in-out'
  },
  Color: {
    White: '#fff',
    Red: '#f00',
    Yellow: '#ff0',
    Green: '#0f0',
    Cyan: '#0ff',
    Blue: '#00f',
    Magenta: '#f0f',
    Black: '#000'
  },
  Palette: {
    None: null,
    Pattern: "pattern",
    Animation: "animation",
    Color: "color"
  }
}

export default Constants;
