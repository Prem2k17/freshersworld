'use strict';

var gulp         = require('gulp'),
    debug		 = require('gulp-debug');
//var filesConfig = require('config/resources'); 
var concat = require('gulp-concat');  
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');  


var cssSrc1 =  [
                   './static/plugins/angular-material-icons/materialicons.css',
	               './node_modules/angular-material/angular-material.css',
	               './static/plugins/angular-carousal-3d/carousel-3d.css',
                   './static/plugins/jkcarousal/jk-carousel.min.css'               
	           ],
cssDest = 'dist/styles';
gulp.task('vendorStyles', function () {
	 return gulp.src(cssSrc1)
	 .pipe(debug())
     .pipe(minifyCSS({keepSpecialComments : 0}))
     //.pipe(rename('style.min.css'))
     //.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))	    
     .pipe(concat('vendor.min.css'))
     .pipe(gulp.dest(cssDest));   
});