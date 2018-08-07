const colorConverter = require('color-convert');
const numLEDs = require('./Support.js').numLEDs;

class WaveMode {
  constructor() {
    this.currentDirection = 'up';
  }

  setMode(leds, color) {
    this.gettingBrighter = [];
    for(var i = 0; i < numLEDs / 3; i++) {
      if(Math.floor(Math.random() * 2) == 0) {
        this.gettingBrighter[i] = true;
      } else {
        this.gettingBrighter[i] = false;
      }
    }

    this.baseColor = color;

    this.rMin = this.baseColor.rgb.r * 0.25;
    this.gMin = this.baseColor.rgb.g * 0.25;
    this.bMin = this.baseColor.rgb.b * 0.25;

    this.rMax = this.baseColor.rgb.r;
    this.gMax = this.baseColor.rgb.g;
    this.bMax = this.baseColor.rgb.b;

    let rInterval = this.rMax - this.rMin;
    let gInterval = this.gMax - this.rMin;
    let bInterval = this.bMax - this.bMin;

    this.currentColors = [];
    for(var i = 0; i < numLEDs / 3; i++) {
      let dimPercent = Math.random();
      let currentR = this.rMin + dimPercent * rInterval;
      let currentG = this.gMin + dimPercent * gInterval;
      let currentB = this.bMin + dimPercent * bInterval;
      this.currentColors[i] = { r: currentR, g: currentG, b: currentB }
    }

    this.leds = leds;

    this.interval = setInterval(() => this.updateColor(), 20);
  }

  clear() {
    clearInterval(this.interval);
  }

  updateColor() {
    let rInterval = this.rMax - this.rMin;
    let gInterval = this.gMax - this.gMin;
    let bInterval = this.bMax - this.bMin;

    let colors = [];

    for(var i = 0; i < numLEDs / 3; i++) {
      let r;
      let g;
      let b;

      if (this.gettingBrighter[i]) {
        r = this.currentColors[i].r + .01 * rInterval;
        g = this.currentColors[i].g + .01 * gInterval;
        b = this.currentColors[i].b + .01 * bInterval;

        if (r > this.rMax || g > this.gMax || b > this.bMax) {
          this.gettingBrighter[i] = false;
        }
      } else {
        r = this.currentColors[i].r - .01 * rInterval;
        g = this.currentColors[i].g - .01 * gInterval;
        b = this.currentColors[i].b - .01 * bInterval;

        if (r < this.rMin || g < this.gMin || b < this.bMin) {
          this.gettingBrighter[i] = true;
        }
      }

      this.currentColors[i] = { r: r, g: g, b: b };
      let hex = colorConverter.rgb.hex(r, g, b);
      for(var j = 0; j < 3; j++) {
        colors[3 * i + j] = parseInt('0x' + hex);
      }
    }

    this.leds.render(colors);
  }
}

module.exports = new WaveMode();
