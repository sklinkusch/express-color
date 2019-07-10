const express = require('express')
const convertRoute = express.Router()
const { keywordRGBHandler, RGB2HSLHandler, RGB2HexHandler, Hex2RGBHandler, addToStatistics } = require('../controller/converter');

convertRoute.use(addToStatistics);
convertRoute.get('/convert/keywordtorgb', keywordRGBHandler);
convertRoute.get('/convert/rgbtohsl', RGB2HSLHandler);
convertRoute.get('/convert/rgbtohex', RGB2HexHandler);
convertRoute.get('/convert/hextorgb', Hex2RGBHandler);

module.exports = convertRoute;