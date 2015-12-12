'use strict';

var gulp = require('gulp');

// gulp.task('default',['other'], function () {
// 	console.log('running task default');
// });

gulp.task('default', [
	'concatAndMinify'
]);

gulp.task('other', function () {
	console.log('running task other');
});

gulp.task('concatAndMinify', function () {
	// globbing file
	// var scripts = [
	// 	'./**/*.js'
	// ];

	var scripts = [
		'./app.js',
		'./config.js'
	];

	var concat = require('gulp-concat');

	gulp
		.src(scripts)
		.pipe(concat('concat.js'))
		.pipe(gulp.dest('./meuTeste'));
})