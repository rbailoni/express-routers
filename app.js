'use strict';
var express = require('express');
var app = express();
var routers = require('./routers/index.js');
let config = require('./config.js');
let mongoose = require('mongoose');

console.log(config);

app.use('/api', routers.api);

let urlDataBase = `mongodb://${config.db.host}/${config.db.name}`;

mongoose.connect(urlDataBase);

let db = mongoose.connection;

db.on('error', function () {
	console.log('database connection error');
});

db.once('open', function () {
	console.log('database connected');
	app.listen(3000, () => console.log('> localhost:3000'));
});

module.exports = app;