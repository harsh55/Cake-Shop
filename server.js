'use strict'

var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mongoose       = require('mongoose');

var db = require('./config/db');
var port = process.env.PORT || 8080;
mongoose.connect(db.url);

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

require('./app/routes')(app); //
// helps to start app at 8080 port
app.listen(port);
console.log('Magic happens on port ' + port);

exports = module.exports = app;
