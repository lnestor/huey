import React, { Component } from 'react';
import { SliderPicker } from 'react-color';
import './SolidColor.css';

class SolidColor extends Component {
  render() {
    return (
      <div className={'inner-slider-box'}>
        <SliderPicker onChange={this.props.onChange} color={this.props.color} />
      </div>
    );
  }
}

export default SolidColor;
