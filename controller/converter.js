const convert = require('color-convert');

exports.keywordRGBHandler = (req, res) => {
  const color = convert.keyword.rgb(req.query.color)
  const [red, green, blue] = color
  return res.json({ red, green, blue })
}

exports.RGB2HSLHandler = (req, res) => {
  const colorInput = req.query.color.split(",").map(channel => parseInt(channel));
  const [hue, saturation, luminance] = convert.rgb.hsl(...colorInput);
  return res.json({ hue, saturation, luminance });
}

exports.RGB2HexHandler = (req, res) => {
  const colorInput = req.query.color.split(",").map(channel => parseInt(channel));
  const hex = convert.rgb.hex(...colorInput);
  return res.json({ hex });
}

exports.Hex2RGBHandler = (req, res) => {
  const { color: hex } = req.query;
  const [r, g, b] = convert.hex.rgb(hex);
  return res.json({ red, green, blue });
}

exports.readStatistics = (req, res) => {
  const fs = require('fs');
  const statistics = JSON.parse(fs.readFileSync('./statistic.json', 'utf8'));
  return res.json({ statistics })
}

exports.addToStatistics = (req, res, next) => {
  const fs = require('fs');
  if ("color" in req.query) {
    const { color } = req.query;
    const exists = fs.existsSync("./statistic.json");
    let statistics = { colorStatistics: {} };
    if (exists) {
      statistics = JSON.parse(fs.readFileSync("./statistic.json", "utf8"));
    }
    if (color in statistics.colorStatistics) {
      statistics.colorStatistics[color] = statistics.colorStatistics[color] + 1;
    } else {
      statistics.colorStatistics[color] = 1;
    }
    fs.writeFileSync("./statistic.json", JSON.stringify(statistics), { encoding: "utf8" })
  }
  next();
}

exports.logMethod = (req, res, next) => {
  const { method, url } = req.socket.parser.incoming
  console.log(`${method}: ${url}`)
  next()
}