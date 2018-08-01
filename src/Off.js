import React, { Component } from 'react';

const colorConvert = require('color-convert');

const colorMode = 'off';

class Off extends Component {
  componentDidMount() {
    let hex = '#505050';
    this.props.onMount(colorMode, {
      color: {
        hex: hex,
        hsl: {
          a: 1,
          h: colorConvert.hex.hsl(hex),
          s: colorConvert.hex.hsl(hex),
          l: colorConvert.hex.hsl(hex)
        },
        rgb: {
          r: colorConvert.hex.rgb(hex)[0],
          g: colorConvert.hex.rgb(hex)[1],
          b: colorConvert.hex.rgb(hex)[2]
        }
      }
    });
  }

  render() {
    return('');
  }
}

export default Off;
