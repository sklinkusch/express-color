const express = require('express')
const app = express()
const convert = require('color-convert');
const { keywordRGBHandler, RGB2HSLHandler, RGB2HexHandler, Hex2RGBHandler, readStatistics, addToStatistics } = require('./controller/converter');
const port = 3000

app.use(addToStatistics);

app.get('/convert/keywordtorgb', keywordRGBHandler);
app.get('/convert/rgbtohsl', RGB2HSLHandler);
app.get('/convert/rgbtohex', RGB2HexHandler);
app.get('/convert/hextorgb', Hex2RGBHandler);
app.get('/statistics', readStatistics);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))