const express = require("express");
const convertRoute = express.Router();
// const {
//   keywordRGBHandler,
//   RGB2HSLHandler,
//   RGB2HexHandler,
//   Hex2RGBHandler
// } = require("../controller/converter");
const { ColorInQuery } = require("../controller/converter");
const { conversion } = require("../controller/converter");
const { addToStatistics } = require("../model/statistics");

convertRoute.use(ColorInQuery);
convertRoute.use("/keywordtorgb", addToStatistics);
convertRoute.get("/keywordtorgb", (req, res) => conversion(req, res, "keyword", "rgb"));
convertRoute.get("/rgbtohsl", (req, res) => conversion(req, res, "rgb", "hsl"));
convertRoute.get("/rgbtohex", (req, res) => conversion(req, res, "rgb", "hex"));
convertRoute.get("/hextorgb", (req, res) => conversion(req, res, "hex", "rgb"));

module.exports = convertRoute;
