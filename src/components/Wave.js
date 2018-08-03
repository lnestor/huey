import React, { Component } from 'react';
import { SliderPicker } from 'react-color';
import '../styles/SolidColor.css';

const colorConverter = require('../support/ColorConverter.js');
const colorMode = 'wave';

class Wave extends Component {
  constructor(props) {
    super(props);
    this.state = { baseColor: props.color, currentColor: props.color, currentDirection: 'up' };
  }

  componentDidMount() {
    // TODO: make time interval configurable
    this.resetColor(this.props.color);
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
    this.resetColor(color);
    this.props.changeBackground(color);
    this.props.sendToServer(colorMode, {
      baseColor: color
    });
  };

  resetColor = (color) => this.setState({baseColor: color, currentColor: color.rgb, currentDirection: 'up'});

  // TODO: factor into library
  updateColor = () => {
    let rMin = this.state.baseColor.rgb.r * 0.85;
    let gMin = this.state.baseColor.rgb.g * 0.85;
    let bMin = this.state.baseColor.rgb.b * 0.85;
    let rMax = (255 - this.state.baseColor.rgb.r) * 0.25 + this.state.baseColor.rgb.r;
    let gMax = (255 - this.state.baseColor.rgb.g) * 0.25 + this.state.baseColor.rgb.g;
    let bMax = (255 - this.state.baseColor.rgb.b) * 0.25 + this.state.baseColor.rgb.b;

    let rInterval = rMax - rMin;
    let gInterval = gMax - gMin;
    let bInterval = bMax - bMin;

    let r;
    let g;
    let b;
    switch(this.state.currentDirection) {
      case 'up':
        r = this.state.currentColor.r + .01 * rInterval;
        g = this.state.currentColor.g + .01 * gInterval;
        b = this.state.currentColor.b + .01 * bInterval;

        if (r > rMax || g > gMax || b > bMax) {
          this.setState({currentDirection: 'down'});
        }
        break;
      case 'down':
        r = this.state.currentColor.r - .01 * rInterval;
        g = this.state.currentColor.g - .01 * gInterval;
        b = this.state.currentColor.b - .01 * bInterval;

        if (r < rMin || g < gMin || b < bMin) {
          this.setState({currentDirection: 'up'});
        }
        break;
    }

    this.setState({currentColor: {r: r, g: g, b: b}});
    this.props.changeBackground(colorConverter.fromRGB(r, g, b));
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
