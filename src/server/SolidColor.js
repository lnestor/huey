const numLEDs = require('./Support.js').numLEDs;

function setMode(leds, color) {
  let colors = [];

  for(var i = 0; i < numLEDs; i++) {
    colors[i] = parseInt('0x' + color.hex.slice(1));
  }

  leds.render(colors);
  console.log('solid');
}

module.exports = { setMode };
