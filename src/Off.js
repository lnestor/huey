import React, { Component } from 'react';

const colorConvert = require('color-convert');

const colorMode = 'off';

class Off extends Component {
  componentDidMount() {
    let hex = '#505050';
    let color = {
      hex: hex,
      hsl: {
        a: 1,
        h: colorConvert.hex.hsl(hex.slice(1)),
        s: colorConvert.hex.hsl(hex.slice(1)),
        l: colorConvert.hex.hsl(hex.slice(1))
      },
      rgb: {
        r: colorConvert.hex.rgb(hex.slice(1))[0],
        g: colorConvert.hex.rgb(hex.slice(1))[1],
        b: colorConvert.hex.rgb(hex.slice(1))[2]
      }
    };

    this.props.changeBackground(color);
    this.props.sendToServer(colorMode, {
      color: color
    });
  }

  render() {
    return('');
  }
}

export default Off;
