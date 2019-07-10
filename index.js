const express = require('express')
const app = express()
const convertRoute = require('./router/convert');
const { readStatistics, logMethod } = require("./controller/converter");

app.use(logMethod)
app.use('/convert', convertRoute)
app.get('/statistics', readStatistics);

const port = 3000






app.listen(port, () => console.log(`Example app listening on port ${port}!`))