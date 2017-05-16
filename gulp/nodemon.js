'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('nodemon', function (cb) {
	  var called = false;
	  return nodemon({
	    script: 'app.js',
	    ignore: [
	      'gulpfile.js',
	      'node_modules/',
	      'static/**/*.*',
	      'dist/**/*.*'
	    ]
	  })
	  .on('start', function () {
	    if (!called) {
	      called = true;
	      cb();
	    }
	  })
	  .on('restart', function () {
	   
	  })
	  .on('crash', function() {
			 console.log('server crashed..exiting application');
			 process.exit();
		})
	  .on('restart', function() {
			 console.log('server restarted');
		})
	  .once('quit', function () {
			// handle ctrl+c without a big weep
		    console.log('server stopped..application closed');
			process.exit();
		});
	});