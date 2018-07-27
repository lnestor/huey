import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import { SliderPicker } from 'react-color';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200
  }
};

const apiUrl = 'http://192.168.0.3:5000/';

class App extends Component {
  handleChange = (color, event) => {
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
      <Grid container spacing={24} style={styles.container}>
        <Grid item xs>
        </Grid>
        <Grid item xs={6}>
	  <SliderPicker onChange={this.handleChange} />
        </Grid>
        <Grid item xs>
        </Grid>
      </Grid>
    );
  }
}

export default App;
