
'use strict';

var gulp         = require('gulp'),
	path 		 = require('path'),
	flatten      = require('gulp-flatten'),
	filter		 = require('gulp-filter'),
	debug		 = require('gulp-debug'),
	$            = require('gulp-load-plugins')();

gulp.task('fonts', function ()
		{
		    return gulp.src(['node_modules/**/**'])
		        .pipe(filter('**/*.{eot,svg,ttf,woff,woff2}'))
		        .pipe(debug())
		        .pipe(flatten())
		        .pipe(gulp.dest(path.join('dist', '/fonts/')));
		});