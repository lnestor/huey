import React, { Component } from 'react';
import './App.css';
import { SliderPicker } from 'react-color';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto'
import githubLogo from './github-logo.svg';

const apiUrl = 'http://192.168.0.3:5000/';
const githubUrl = 'https://github.com/lnestor/huey';

class App extends Component {
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

  handleChange = (color, event) => {
    this.setState({color: color});
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
      <Grid container id={'background'} style={{backgroundColor: this.state.color.hex}}>
        <Grid item md={3} xs={1}/>
        <Grid item md={6} xs={10} className={'outer-slider-box'}>
          <div className={'box-title'}>
            <Typography variant={'display4'} style={{color: this.state.color.hex}}>Huey.</Typography>
          </div>
          <div className={'inner-slider-box'}>
            <SliderPicker onChange={this.handleChange} color={this.state.color.hsl} />
          </div>
        </Grid>
        <div className={'github-logo'}>
          <a href={githubUrl}>
            <img src={githubLogo} width={64} height={64} alt={'Github Repository'} />
          </a>
        </div>
      </Grid>
    );
  }
}

export default App;
