'use strict';

var app = require('../../app.js');
var request = require('supertest');
var chai = require('chai');
chai.use(require('chai-things'));
var expect = chai.expect;
// console.log(app);

describe('Users controller', function () {
	describe('.list - GET /users', function () {
		it('should return a json array', function (done) {
			request(app)
				.get('/users')
				.end(function (err, res) {
					expect(res.statusCode).to.be.equal(200);
					expect(res.body).to.be.an('array');
					expect(res.body)
						.all.have.property('name');
					done();
				});
		});
	});
	describe('.create - POST /users', function () {
		it('should return a  json {message:\'created\'}', function (done) {
			request(app)
				.post('/users')
				.end(function (err, res) {
					expect(res.statusCode).to.be.equal(201);
					expect(res.body).have.property('message','created');
					done();
				});
		});
	});
	describe('.get - GET /users/:id', function () {
		it('should return an user', function (done) {
			request(app)
				.get('/users/1234')
				.end(function (err, res) {
					expect(res.statusCode).to.be.equal(200);
					expect(res.body).have.property('name','Ricardo');
					done();
				});
		});
	});
	describe('.update - PUT /users/:id', function () {
		it('should return a json {message:\'updated\'}', function (done) {
			request(app)
				.put('/users/1234')
				.end(function (err, res) {
					expect(res.statusCode).to.be.equal(200);
					expect(res.body).have.property('message','updated');
					done();
				});
		});
	});
	describe('.delete - DELETE /users/:id', function () {
		it('should return a json {message:\'deleted\'}', function (done) {
			request(app)
				.delete('/users/1234')
				.end(function (err, res) {
					expect(res.statusCode).to.be.equal(200);
					expect(res.body).have.property('message','deleted');
					done();
				});
		});
	});
});