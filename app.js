var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var quotes = require('./routes/quotes');
var index = require('./routes/index');

var app = express();
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', index);
app.use('/quotes', quotes);


module.exports = app;
