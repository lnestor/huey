const colorConverter = require('color-convert');

function fromRGB(r, g, b) {
  return({
    hex: '#' + colorConverter.rgb.hex(r, g, b),
    hsl: {
      a: 1,
      h: colorConverter.rgb.hsl(r, g, b)[0],
      s: colorConverter.rgb.hsl(r, g, b)[1],
      l: colorConverter.rgb.hsl(r, g, b)[2]
    },
    rgb: {
      r: r,
      g: g,
      b: b
    }
  });
}

function fromHex(hex) {
  return({
    hex: hex,
    hsl: {
      a: 1,
      h: colorConverter.hex.hsl(hex.slice(1))[0],
      s: colorConverter.hex.hsl(hex.slice(1))[1],
      l: colorConverter.hex.hsl(hex.slice(1))[2]
    },
    rgb: {
      r: colorConverter.hex.rgb(hex.slice(1))[0],
      g: colorConverter.hex.rgb(hex.slice(1))[1],
      b: colorConverter.hex.rgb(hex.slice(1))[2]
    }
  });
}

function fromHSL(h, s, l) {
  return({
    hex: '#' + colorConverter.hsl.hex(h, s * 100, l * 100),
    hsl: {
      a: 1,
      h: h,
      s: s,
      l: l
    },
    rgb: {
      r: colorConverter.hsl.rgb([h, s * 100, l * 100])[0],
      g: colorConverter.hsl.rgb([h, s * 100, l * 100])[1],
      b: colorConverter.hsl.rgb([h, s * 100, l * 100])[2]
    }
  });
}

module.exports = { fromRGB, fromHex, fromHSL };
