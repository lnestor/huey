import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import SolidColor from './SolidColor.js';
import Wave from './Wave.js';
import './Huey.css';
import 'typeface-roboto';

const apiUrl = 'http://192.168.0.3:5000/';

class Huey extends Component {

  handleChange = (colorMode, params) => {
    this.changeBackground(params.color);
    this.postApi(params.color.hex)
        .then(res => {})
        .catch(err => console.log(err));
  }

  changeBackground = (color) => {
    this.props.onColorChange(color);
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
    let colorPicker;
    if (this.props.colorMode === 'solid') {
      colorPicker = <SolidColor onChange={this.handleChange} color={this.props.color.hsl} />;
    } else if (this.props.colorMode === 'wave') {
      colorPicker = <Wave color={this.props.color} handleColorChange={this.changeBackground} />;
    }

    return (
      <div className={'outer-slider-box'}>
        <div className={'title'}>
          <Typography variant={'display4'} style={{color: this.props.color.hex}}>
            Huey.
          </Typography>
        </div>
        {colorPicker}
      </div>
    );
  }
}

export default Huey;
