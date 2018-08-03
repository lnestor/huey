import React, { Component } from 'react';
import { SliderPicker } from 'react-color';
import './SolidColor.css';

const colorConvert = require('color-convert');
const colorMode = 'wave';

class Wave extends Component {
  constructor(props) {
    super(props);
    this.state = { baseColor: props.color };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.updateColor(), 200);
    this.props.sendToServer(colorMode, {
      baseColor: this.state.baseColor
    });
  }

  componentWillUnmount() {
    this.props.changeBackground(this.state.baseColor);
    clearInterval(this.interval);
  }

  handleChange = (color, event) => {
    this.setState({baseColor: color});
    this.props.sendToServer(colorMode, {
      baseColor: color
    });
  };

  // TODO: factor into library
  updateColor = () => {
    let min = -8;
    let max = 8;

    let r = this.state.baseColor.rgb.r + Math.floor(Math.random() * (max - min)) + min;
    let g = this.state.baseColor.rgb.g + Math.floor(Math.random() * (max - min)) + min;
    let b = this.state.baseColor.rgb.b + Math.floor(Math.random() * (max - min)) + min;
    let color = {
      hex: '#' + colorConvert.rgb.hex(r, g, b),
      hsl: {
        a: 1,
        h: colorConvert.rgb.hsl(r, g, b)[0],
        s: colorConvert.rgb.hsl(r, g, b)[1],
        l: colorConvert.rgb.hsl(r, g, b)[2]
      },
      rgb: {
        r: r,
        g: g,
        b: b
      }
    }

    this.props.changeBackground(color);
  }

  render() {
    return (
      <div className={'inner-slider-box'}>
        <SliderPicker onChange={this.handleChange} color={this.state.baseColor} />
      </div>
    );
  }
}

export default Wave;
