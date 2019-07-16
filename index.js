const express = require("express");
const app = express();
const convertRoute = require("./router/convert");
const { logMethod } = require("./controller/converter");
// const { readStatistics } = require("./controller/converter");
// const { readStatistics } = require("./model/statistics");

app.use(logMethod);
app.use("/convert", convertRoute);
// app.get("/statistics", readStatistics);

const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
