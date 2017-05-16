'use strict';

var gulp         = require('gulp'),
minifyHTML   = require('gulp-minify-html'),
removeHtmlComments = require('gulp-remove-html-comments'),
cachebust		 = require('gulp-cache-bust');

gulp.task('cacheBust',function () {
	gulp.src('dist/index.html')
	.pipe(removeHtmlComments())
	.pipe(minifyHTML({ quotes: true }))
    .pipe(cachebust({
        type: 'MD5'
    }))
    .pipe(gulp.dest('dist'));
});