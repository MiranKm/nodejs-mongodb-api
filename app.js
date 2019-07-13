const bodyParser = require('body-parser');
const express = require('express');


const app = express()

app.use(bodyParser.json())
app.use(bodyparser.urlencoded({
    extended: true
}));