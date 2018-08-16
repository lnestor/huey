import { Component } from 'react';

const colorConverter = require('../support/ColorConverter');
const colorMode = 'off';

class Off extends Component {
  constructor(props) {
    super(props);
    this.state = { lastColor: this.props.color };
  }

  componentDidMount() {
    let color = colorConverter.fromHex('#505050');
    this.props.changeBackground(color);
    this.props.sendToServer(colorMode, {
      color: color
    });
  }

  componentWillUnmount() {
    this.props.changeBackground(this.state.lastColor);
  }

  render() {
    return('');
  }
}

export default Off;
