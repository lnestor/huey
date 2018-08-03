class WaveMode {
  setMode(leds, color) {
    // TODO: make this interval call an actual function
    this.interval = setInterval(() => {}, 100);
    console.log('wave');
  }

  clear() {
    clearInterval(this.interval);
    console.log('cleared wave');
  }
}

module.exports = new WaveMode();
