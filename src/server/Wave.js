const colorConverter = require('color-convert');
const numLEDs = require('./Support.js').numLEDs;

class WaveMode {
  constructor() {
    this.currentDirection = 'up';
  }

  setMode(leds, color) {
    this.baseColor = color;
    this.currentColor = color.rgb;
    this.interval = setInterval(() => this.updateColor(), 100);
    console.log('wave');
  }

  clear() {
    clearInterval(this.interval);
    console.log('cleared wave');
  }

  updateColor() {
    let rMin = this.baseColor.rgb.r * 0.85;
    let gMin = this.baseColor.rgb.g * 0.85;
    let bMin = this.baseColor.rgb.b * 0.85;
    let rMax = (255 - this.baseColor.rgb.r) * 0.25 + this.baseColor.rgb.r;
    let gMax = (255 - this.baseColor.rgb.g) * 0.25 + this.baseColor.rgb.g;
    let bMax = (255 - this.baseColor.rgb.b) * 0.25 + this.baseColor.rgb.b;

    let rInterval = rMax - rMin;
    let gInterval = gMax - gMin;
    let bInterval = bMax - bMin;

    let r;
    let g;
    let b;
    switch(this.currentDirection) {
      case 'up':
        r = this.currentColor.r + .01 * rInterval;
        g = this.currentColor.g + .01 * gInterval;
        b = this.currentColor.b + .01 * bInterval;

        if (r > rMax || g > gMax || b > bMax) {
          this.currentDirection = 'down';
        }
        break;
      case 'down':
        r = this.currentColor.r - .01 * rInterval;
        g = this.currentColor.g - .01 * gInterval;
        b = this.currentColor.b - .01 * bInterval;

        if (r < rMin || g < gMin || b < bMin) {
          this.currentDirection = 'up';
        }
        break;
    }

    this.currentColor = {r: r, g: g, b: b};

    let colors = [];

    let hex = colorConverter.rgb.hex(r, g, b);
    console.log(hex);
    for(var i = 0; i < numLEDs; i++) {
      colors[i] = parseInt('0x' + hex);
    }

    leds.render(colors);
  }
}

module.exports = new WaveMode();
