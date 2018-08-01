import React, { Component } from 'react';
import { SliderPicker } from 'react-color';
import './SolidColor.css';

const colorMode = 'solid';

class SolidColor extends Component {

  handleChange = (color, event) => {
    this.props.onChange(colorMode, {
      color: color
    });
  };

  render() {
    return(
      <div className={'inner-slider-box'}>
        <SliderPicker onChange={this.handleChange} color={this.props.color} />
      </div>
    );
  }
}

export default SolidColor;
