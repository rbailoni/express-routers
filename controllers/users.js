'use strict';

let Users = require('../models/').users;

module.exports = {
	list: list,
	create: create,
	get: get,
	update: update,
	delete: del
};

function list (req, res) {
	Users
		.find({}, '-__v')
		.then(function (users) {
			res.json(users);
		});
	}

function create (req, res) {
	let user = new Users(req.body);

	let success = function (status) {
		console.log(status);
		res
			.status(201)
			.json({
				message: 'created'
			});
	};

	let error = function (err) {
		console.log(err);
		res.status(400).json({
			message: 'algo errado'
		});
	};
	user
		.save()
		.then(success, error);

}

function get (req, res) {
	Users
		.findById(req.params.id)
		.then(function (user) {
			res.json(user);
		});
	// // console.log(req.params);	
	// var user = {name: 'Ricardo'};
	// res.json(user);
}

function update (req, res) {
	res.json({
		message: 'updated'
	});
}

function del (req, res) {
	res.json({
		message: 'deleted'
	});
}