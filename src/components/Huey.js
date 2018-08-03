import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import SolidColor from './SolidColor.js';
import Wave from './Wave.js';
import Off from './Off.js';
import '../styles/Huey.css';
import 'typeface-roboto';

const apiUrl = 'http://192.168.1.103:5000/';
//const apiUrl = 'http://localhost:5000/';

class Huey extends Component {

  changeBackground = (color) => {
    this.props.onColorChange(color);
  };

  sendToServer = (colorMode, params) => {
    this.postApi(colorMode, params)
        .then(res => {})
        .catch(err => console.log(err));
  };

  postApi = async (colorMode, params) => {
    const response = await fetch(apiUrl, {
      method: 'post',
      body: JSON.stringify({
        'colorMode': colorMode,
        'params': params
      }),
      headers: {
        'Content-type': 'application/json'
      }
    });
    // TODO: make this not call json() so we can send an empty string from the server
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  colorPicker = () => {
    if (this.props.colorMode === 'solid') {
      return <SolidColor changeBackground={this.changeBackground} sendToServer={this.sendToServer} color={this.props.color} /> ;
    } else if (this.props.colorMode === 'wave') {
      return <Wave changeBackground={this.changeBackground} sendToServer={this.sendToServer} color={this.props.color} /> ;
    } else if (this.props.colorMode === 'off') {
      return <Off changeBackground={this.changeBackground} sendToServer={this.sendToServer} /> ;
    }
  };

  render() {
    let colorPicker = this.colorPicker();

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
