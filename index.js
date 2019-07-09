const express = require('express')
const app = express()
const convert = require('color-convert');
const port = 3000

app.get('/convert/keywordtorgb', (req, res) => {
  const color = convert.keyword.rgb(req.query.color)
  const [red, green, blue] = color
  return res.json({ red, green, blue })
});
app.get('/convert/rgbtohsl', (req, res) => {
  const { red, green, blue } = req.query;
  const color = convert.rgb.hsl(r, g, b);
  const [hue, saturation, luminance] = color;
  return res.json({ hue, saturation, luminance });
});

app.get('/convert/rgbtohex', (req, res) => {
  const { red, green, blue } = req.query;
  const hex = convert.rgb.hex(r, g, b);
  return res.json({ hex });
});

app.get('/convert/hextorgb', (req, res) => {
  const { hex } = req.query;
  const [red, green, blue] = convert.hex.rgb(hex);
  return res.json({ red, green, blue });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))