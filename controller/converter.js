const convert = require("color-convert");

exports.conversion = (req, res, from, to) => {
  const { color } = req.query;
  const convertedColor = new ColorConverter(from, to, color);
  if ("error" in convertedColor) {
    return res.status(400).json(convertedColor);
  }
  return res.json(convertedColor);
};

class ColorConverter {
  constructor(from, to, colorInput) {
    this.from = from;
    this.to = to;
    this.colorInput = colorInput;
    return this.convert();
  }
  convert() {
    switch (this.from) {
      case "keyword":
        if (!/^[a-z]*$/.test(this.colorInput)) {
          return this.typeError(
            `${this.colorInput} is not a valid input for keyword conversion.`
          );
        }
        switch (this.to) {
          case "rgb":
            return this.keywordRGBHandler(this.colorInput);
          default:
            return this.errorMessage(this.from, this.to, this.colorInput);
        }
      case "rgb":
        if (!/^[0-9]+,[0-9]+,[0-9]+$/.test(this.colorInput)) {
          return this.typeError(
            `${this.colorInput} is not a valid input for rgb conversion.`
          );
        }
        switch (this.to) {
          case "hsl":
            return this.RGB2HSLHandler(this.colorInput);
          case "hex":
            return this.RGB2HexHandler(this.colorInput);
          default:
            return this.errorMessage(this.from, this.to, this.colorInput);
        }
      case "hex":
        if (!/^[0-9abcdef]{6}$/i.test(this.colorInput)) {
          return this.typeError(
            `${this.colorInput} is not a valid input for hex conversion.`
          );
        }
        switch (this.to) {
          case "rgb":
            return this.Hex2RGBHandler(this.colorInput);
          default:
            return this.errorMessage(this.from, this.to, this.colorInput);
        }
      default:
        return this.errorMessage(this.from, this.to, this.colorInput);
    }
  }
  errorMessage(from, to, input) {
    return {
      error: {
        message: `The requested conversion of ${input} from ${from} to ${to} is currently not supported.`
      }
    };
  }
  keywordRGBHandler(colorInput) {
    try {
      const color = convert.keyword.rgb(colorInput);
      const [red, green, blue] = color;
      return { red, green, blue };
    } catch (error) {
      return { error: { message: `The color ${colorInput} does not exist.` } };
    }
  }
  RGB2HSLHandler(colorInput) {
    try {
      const [red, green, blue] = this.splitColors(colorInput);
      const exists = this.checkRGB(red, green, blue);
      if (!exists) {
        return {
          error: { message: `The color ${colorInput} does not exist.` }
        };
      }
      const [hue, saturation, luminance] = convert.rgb.hsl(red, green, blue);
      return { hue, saturation, luminance };
    } catch (error) {
      return { error: { message: `The color ${colorInput} does not exist.` } };
    }
  }
  RGB2HexHandler(colorInput) {
    try {
      const [red, green, blue] = this.splitColors(colorInput);
      const exists = this.checkRGB(red, green, blue);
      if (!exists) {
        return {
          error: { message: `The color ${colorInput} does not exist.` }
        };
      }
      const hex = convert.rgb.hex(red, green, blue);
      return { hex };
    } catch (error) {
      return { error: { message: `The color ${colorInput} does not exist.` } };
    }
  }
  Hex2RGBHandler(colorInput) {
    try {
      const [red, green, blue] = convert.hex.rgb(colorInput);
      return { red, green, blue };
    } catch (error) {
      return { error: { message: `The color ${colorInput} does not exist.` } };
    }
  }
  checkRGB(...values) {
    let decider = true;
    values.forEach(channel => {
      if (channel < 0 || channel > 255) {
        decider = false;
      }
    });
    return decider;
  }
  splitColors(colorInput) {
    return colorInput.split(",").map(channel => parseInt(channel));
  }
  typeError(message) {
    return { error: { message } };
  }
}

// exports.keywordRGBHandler = (req, res) => {
//   const color = convert.keyword.rgb(req.query.color);
//   const [red, green, blue] = color;
//   return res.json({ red, green, blue });
// };

// exports.RGB2HSLHandler = (req, res) => {
//   const colorInput = req.query.color
//     .split(",")
//     .map(channel => parseInt(channel));
//   const [hue, saturation, luminance] = convert.rgb.hsl(...colorInput);
//   return res.json({ hue, saturation, luminance });
// };

// exports.RGB2HexHandler = (req, res) => {
//   const colorInput = req.query.color
//     .split(",")
//     .map(channel => parseInt(channel));
//   const hex = convert.rgb.hex(...colorInput);
//   return res.json({ hex });
// };

// exports.Hex2RGBHandler = (req, res) => {
//   const { color: hex } = req.query;
//   const [r, g, b] = convert.hex.rgb(hex);
//   return res.json({ red: r, green: g, blue: b });
// };

// exports.readStatistics = (req, res) => {
//   const fs = require("fs");
//   const statistics = JSON.parse(fs.readFileSync("./statistic.json", "utf8"));
//   return res.json({ statistics });
// };

// exports.addToStatistics = (req, res, next) => {
//   const fs = require('fs');
//   const { color } = req.query;
//   const exists = fs.existsSync("./statistic.json");
//   let statistics = { colorStatistics: {} };
//   if (exists) {
//     statistics = JSON.parse(fs.readFileSync("./statistic.json", "utf8"));
//   }
//   if (color in statistics.colorStatistics) {
//     statistics.colorStatistics[color] = statistics.colorStatistics[color] + 1;
//   } else {
//     statistics.colorStatistics[color] = 1;
//   }
//   fs.writeFileSync("./statistic.json", JSON.stringify(statistics), { encoding: "utf8" })
//   next();
// }

exports.logMethod = (req, res, next) => {
  const { method, url } = req.socket.parser.incoming;
  console.log(`${method}: ${url}`);
  next();
};

exports.ColorInQuery = (req, res, next) => {
  if ("color" in req.query) {
    next();
  } else {
    res
      .status(422)
      .json({ error: { message: "missing query parameter 'color'" } });
  }
};

module.exports = ColorConverter;
