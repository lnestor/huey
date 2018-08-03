import { Component } from 'react';

const colorConverter = require('../support/ColorConverter');
const colorMode = 'off';

class Off extends Component {
  componentDidMount() {
    let color = colorConverter.fromHex('#505050');
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
