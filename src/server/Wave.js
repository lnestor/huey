class WaveMode {
  setMode(leds, color) {
    // TODO: make this interval call an actual function
    this.interval = setInterval(() => this.updateColor(), 100);
    console.log('wave');
  }

  clear() {
    clearInterval(this.interval);
    console.log('cleared wave');
  }

  updateColor = () => {
  
  }
}

module.exports = new WaveMode();
