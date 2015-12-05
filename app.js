'use strict';
var express = require('express');
var app = express();
var controllers = require('./controllers');

// console.log(controllers);

app
	.route('/users')
	.get(controllers.users.list)
	.post(controllers.users.create);

app
	.route('/users/:id')
	.get(controllers.users.get)
	.put(controllers.users.update)
	.delete(controllers.users.delete)
	


app.listen(3000, serverLogInit);

function serverLogInit () {
	// console.log(process);
	console.log('> localhost:3000');
}

module.exports = app;