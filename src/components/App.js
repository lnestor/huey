import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import '../styles/App.css';

import GithubLogo from './GithubLogo.js';
import Menu from './Menu.js';
import Huey from './Huey.js';

class App extends Component {
  state = {
    backgroundColor: {
      hex: '#4093bf',
      hsl: {
        a: 1,
        h: 201,
        l: 0.5,
        s: 0.5
      },
      rgb: {
        r: 64,
        g: 147,
        b: 191
      }
    },
    colorMode: 'solid'
  };

  handleColorChange = (color) => this.setState({backgroundColor: color});
  setColorMode = (mode) => this.setState({colorMode: mode});

  render() {
    return (
      <Grid container id={'background'} style={{backgroundColor: this.state.backgroundColor.hex}}>
        <Grid item md={3} xs={1}/>
        <Grid item md={6} xs={10}>
          <Huey onColorChange={this.handleColorChange} colorMode={this.state.colorMode} color={this.state.backgroundColor}/>
        </Grid>

        <GithubLogo />
        <Menu handleModeSelect={this.setColorMode} />
      </Grid>
    );
  }
}

export default App;
