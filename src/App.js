import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';

import GithubLogo from './GithubLogo.js';
import Menu from './Menu.js';
import Huey from './Huey.js';

class App extends Component {
  state = { backgroundColor: '' };

  handleColorChange = (color) => this.setState({backgroundColor: color});

  render() {
    return (
      <Grid container id={'background'} style={{backgroundColor: this.state.backgroundColor}}>
        <Grid item md={3} xs={1}/>
        <Grid item md={6} xs={10}>
          <Huey onColorChange={this.handleColorChange} />
        </Grid>

        <GithubLogo />
        <Menu />
      </Grid>
    );
  }
}

export default App;
