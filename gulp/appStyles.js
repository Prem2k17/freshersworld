'use strict';

var gulp         = require('gulp'),
    debug		 = require('gulp-debug'),
    
    clean        = require('gulp-clean');
var concat = require('gulp-concat');  
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');  


var cssSrc2 = [             	
                './static/modules/home/css/home.css'              
           ],
cssDest = 'dist/styles';
gulp.task('appStyles', function () {
	 return gulp.src(cssSrc2)
	 .pipe(debug())
     .pipe(minifyCSS({keepSpecialComments : 0}))
     //.pipe(rename('style.min.css'))
     //.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))	    
     .pipe(concat('app.min.css'))
     .pipe(gulp.dest(cssDest));   
});