const express = require('express')
const convertRoute = express.Router()
const { keywordRGBHandler, RGB2HSLHandler, RGB2HexHandler, Hex2RGBHandler, addToStatistics } = require('../controller/converter');

convertRoute.use('/keywordtorgb', addToStatistics);
convertRoute.get('/keywordtorgb', keywordRGBHandler);
convertRoute.get('/rgbtohsl', RGB2HSLHandler);
convertRoute.get('/rgbtohex', RGB2HexHandler);
convertRoute.get('/hextorgb', Hex2RGBHandler);

module.exports = convertRoute;