'use strict';

var gulp         = require('gulp'),	
	runSequence  = require('run-sequence');


gulp.task('serve:prod', function(done) {
	 process.env.NODE_ENV = 'production';
	 runSequence('templateCache','appStyles','vendorStyles'/*,'imagemin'*/,'appScripts','vendorScripts','cacheBust','nodemon', function() {    	
	        done();        
	    });
});

gulp.task('serve:dev', function(done) {
	process.env.NODE_ENV = 'development';
	 runSequence('templateCacheDev','nodemon','watch', function() {    	
	        done();        
	    });
});