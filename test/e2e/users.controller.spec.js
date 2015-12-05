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
						.all.have.property('name')
						.to.be.an('string');
					done();
				});
		});
	});
});