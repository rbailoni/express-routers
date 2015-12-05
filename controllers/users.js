'use stricts';

module.exports = {
	list: list,
	create: create,
	get: get,
	update: update,
	delete: del
};

function list (req, res) {
	var users = [
		{name: 'Ricardo'},
		{name: 'Wanderley'}
	];
	res.json(users);
}

function create (req, res) {
	res
		.status(201)
		.json({
			message: 'created'
		});
}

function get (req, res) {
	// console.log(req.params);	
	var user = {name: 'Ricardo'};
	res.json(user);
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