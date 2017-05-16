'use strict';

var gulp         = require('gulp'),
	minifyHTML   = require('gulp-minify-html'),
	templateCache= require('gulp-angular-templatecache'),
	removeHtmlComments = require('gulp-remove-html-comments'),
	debug		 = require('gulp-debug');

gulp.task('templateCache', function () {
	  return gulp.src(['static/modules/**/*.html'])
	  	.pipe(removeHtmlComments())
	    .pipe(minifyHTML({ quotes: true }))
	    .pipe(debug())
	    .pipe(templateCache('htmlTemplateCache.js', { module:'HtmlTemplateCache', standalone:true }))
	    .pipe(gulp.dest('dist'));
	   
	});