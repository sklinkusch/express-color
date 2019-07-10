const express = require('express')
const app = express()
const router = require('./router/convert');
const { readStatistics } = require("./controller/converter");

app.use('/convert', router)
app.get('/statistics', readStatistics);

const port = 3000






app.listen(port, () => console.log(`Example app listening on port ${port}!`))