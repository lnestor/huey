import React, { Component } from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { SliderPicker } from 'react-color';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200
  }
};

class App extends Component {
  constructor(props) {
    super(props)

    this.apiUrl = 'http://localhost:5000/'
  }

  handleChange = (color, event) => {
    this.postApi(color.rgb)
        .then(res => {})
        .catch(err => console.log(err));
  };

  postApi = async (color) => {
    const response = await fetch(this.apiUrl, {
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
          <Paper>
            <SliderPicker onChange={this.handleChange} />
          </Paper>
        </Grid>
        <Grid item xs>
        </Grid>
      </Grid>
    );
  }
}

export default App;
