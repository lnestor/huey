const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const leds = require('rpi-ws281x-native');

const numLeds = 16;

leds.init(numLeds);

app.use(bodyParser.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.post('/', (req, res) => {
  var colors = [];
  for(var i = 0; i < numLeds; i++) {
    colors[i] = parseInt('0x' + req.body.color.slice(1));
  }
  leds.render(colors);

  res.send('');
});

app.listen(port, () => console.log('Listening on 5000'));
