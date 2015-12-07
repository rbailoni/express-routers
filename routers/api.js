'use strict';

var Router = require('express').Router;
var router = new Router();
var controllers = require('../controllers');


router
	.route('/users')
	.get(controllers.users.list)
	.post(controllers.users.create);

router
	.route('/users/:id')
	.get(controllers.users.get)
	.put(controllers.users.update)
	.delete(controllers.users.delete)

module.exports = router;
