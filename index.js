const express = require('express')
const app = express()
const convert = require('color-convert');
const port = 3000

app.get('/convert/keywordtorgb', (req, res) => {
  const color = convert.keyword.rgb(req.query.color)
  const [red, green, blue] = color
  return res.json({ red, green, blue })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))