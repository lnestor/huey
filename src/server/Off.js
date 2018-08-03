const numLEDs = require('./Support.js').numLEDs;

function setMode(leds) {
  let colors = [];

  for(var i = 0; i < numLEDs; i++) {
    colors[i] = 0;
  }

  leds.render(colors);
  console.log('off');
}

module.exports = { setMode };
