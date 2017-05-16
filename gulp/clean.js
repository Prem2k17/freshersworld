'use strict';

var gulp         = require('gulp'),
    clean        = require('gulp-clean');

gulp.task('clean', function () {
	  return gulp.src('dist/scripts/**/*.js', {read: false})
	    .pipe(clean({force: true}));
});