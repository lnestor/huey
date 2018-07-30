import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import SolidColor from './SolidColor.js';
import './Huey.css';
import 'typeface-roboto';

const apiUrl = 'http://192.168.0.3:5000/';

class Huey extends Component {
  state = {
    color: {
      hex: '#4093bf',
      hsl: {
        a: 1,
        h: 201,
        l: 0.5,
        s: 0.5
      }
    }
  };

  componentDidMount() {
    this.props.onColorChange(this.state.color.hex);
  }

  handleChange = (color, event) => {
    console.log(color);
    this.setState({color: color});
    this.props.onColorChange(color.hex);
    this.postApi(color.hex)
        .then(res => {})
        .catch(err => console.log(err));
  };

  postApi = async (color) => {
    const response = await fetch(apiUrl, {
      method: 'post',
      body: JSON.stringify({
        'color': color
      }),
      headers: {
        'Content-type': 'application/json'
      }
    });
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className={'outer-slider-box'}>
        <div className={'title'}>
          <Typography variant={'display4'} style={{color: this.state.color.hex}}>Huey.</Typography>
        </div>
        <SolidColor onChange={this.handleChange} color={this.state.color.hsl} />
      </div>
    );
  }
}

export default Huey;
