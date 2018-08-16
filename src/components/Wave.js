import React, { Component } from 'react';
import { HuePicker } from 'react-color';
import WavePointer from './WavePointer';
import '../styles/SolidColor.css';

const colorConverter = require('../support/ColorConverter.js');
const colorMode = 'wave';

class Wave extends Component {
  constructor(props) {
    super(props);
    this.state = { baseColor: props.color, currentColor: props.color.rgb, currentDirection: 'up' };
  }

  componentDidMount() {
    // TODO: make time interval configurable
    this.props.changeBackground(this.props.color);
    this.interval = setInterval(() => this.updateColor(), 10);
    this.props.sendToServer(colorMode, {
      baseColor: this.state.baseColor
    });
  }

  componentWillUnmount() {
    this.props.changeBackground(this.state.baseColor);
    clearInterval(this.interval);
  }

  handleChange = (color, event) => {
    let saturatedColor = colorConverter.fromHSL(color.hsl.h, 0.5, 0.5);
    this.resetColor(saturatedColor);
    this.props.changeBackground(saturatedColor);
    this.props.sendToServer(colorMode, {
      baseColor: color
    });
  };

  resetColor = (color) => this.setState({baseColor: color, currentColor: color.rgb, currentDirection: 'up'});

  // TODO: factor into library
  updateColor = () => {
    let baseColor = colorConverter.fromHSL(this.state.baseColor.hsl.h, 0.5, 0.5);
    let minColor = {
      r: baseColor.rgb.r * 0.85,
      g: baseColor.rgb.g * 0.85,
      b: baseColor.rgb.b * 0.85
    };
    let maxColor = {
      r: (255 - baseColor.rgb.r) * 0.25 + baseColor.rgb.r,
      g: (255 - baseColor.rgb.g) * 0.25 + baseColor.rgb.g,
      b: (255 - baseColor.rgb.b) * 0.25 + baseColor.rgb.b,
    };
    let intervalColor = {
      r: maxColor.r - minColor.r,
      g: maxColor.g - minColor.g,
      b: maxColor.b - minColor.b
    };

    let newColor = {};
    if (this.state.currentDirection === 'up') {
      newColor.r = this.state.currentColor.r + .01 * intervalColor.r;
      newColor.g = this.state.currentColor.g + .01 * intervalColor.g;
      newColor.b = this.state.currentColor.b + .01 * intervalColor.b;

      if (newColor.r > maxColor.r || newColor.g > maxColor.g || newColor.b > maxColor.b) {
        this.setState({currentDirection: 'down'});
      }
    } else {
      newColor.r = this.state.currentColor.r - .01 * intervalColor.r;
      newColor.g = this.state.currentColor.g - .01 * intervalColor.g;
      newColor.b = this.state.currentColor.b - .01 * intervalColor.b;

      if (newColor.r < minColor.r || newColor.g < minColor.g || newColor.b < minColor.b) {
        this.setState({currentDirection: 'up'});
      }
    }

    this.setState({currentColor: newColor});
    this.props.changeBackground(colorConverter.fromRGB(newColor.r, newColor.g, newColor.b));
  }

  render() {
    return (
      <div className={'inner-slider-box'}>
        <HuePicker height={12} width={'100%'} pointer={WavePointer} onChange={this.handleChange} color={this.state.baseColor} />
      </div>
    );
  }
}

export default Wave;
