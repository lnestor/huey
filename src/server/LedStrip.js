const leds = require('rpi-ws281x-native');
const solidColor = require('./SolidColor');
const wave = require('./Wave');
const off = require('./Off');


class LEDStrip {
  constructor() {
    // leds.init()
    this.latestColorMode = 'solid';
  }

  setMode(colorMode, params) {
    /*if (this.latestColorMode !== this.colorModes[colorMode]) {
      console.log('switched modes');
      this.latestColorMode.clear();
      might not need to do this for every mode
      this.latestColorMode = this.colorModes[colorMode];
    }*/

    switch(this.latestColorMode) {
      case 'wave':
        wave.clear();
        break;
    }

    switch(colorMode) {
      case 'solid':
        solidColor.setMode(leds, params.color);
        break;
      case 'wave':
        wave.setMode(leds, params.color);
        break;
      case 'off':
        off.setMode(leds);
        break;
    }

    this.latestColorMode = colorMode;
  }
}


module.exports = new LEDStrip();
