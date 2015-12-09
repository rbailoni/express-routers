'use strict';

let mongoose = require('mongoose');
let Schema = require('mongoose').Schema;
// let Model = require('mongoose').Model;

let schema = new Schema({
	firstname: {type: String, required: true},
	email: {type: String, required:true, unique: true},
	createdAt: {type: Date, set: Date.now}
});


let model = mongoose.model('users', schema);
module.exports = model;