'use strict';

var gulp         = require('gulp'),
    debug		 = require('gulp-debug'),
    strip = require('gulp-strip-comments'),
    ngAnnotate   = require('gulp-ng-annotate'),
    clean        = require('gulp-clean');
var concat = require('gulp-concat');  
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');  
var uglify = require('gulp-uglify');

var jsFiles = [                           
               'node_modules/angular/angular.js',
               'node_modules/angular-animate/angular-animate.js',
               'node_modules/angular-aria/angular-aria.js',
               'node_modules/angular-material/angular-material.js',
               'node_modules/angular-sanitize/angular-sanitize.js',
               'node_modules//angular-ui-router/release/angular-ui-router.js',
               'static/plugins/angular-carousal-3d/angular-swipe.js',
               'static/plugins/angular-carousal-3d/carousel-3d.js',
               'static/plugins/jkcarousal/jk-carousel.min.js'
               ], 

jsDest = 'dist/scripts';
gulp.task('vendorScripts', function () {
	 return gulp.src(jsFiles)
	 .pipe(debug())
	 .pipe(strip())
     .pipe(concat('vendor.js',{newLine: ';'}).on('error', function(e){
         console.log("Concat error:",e);
     }))     
    .pipe(ngAnnotate({add: true}).on('error', function(e){
         console.log("Annotate error:",e);
     }))
     .pipe(gulp.dest(jsDest))
     .pipe(rename('vendor.min.js'))    	    
     .pipe(uglify().on('error', function(e){
            console.log(e);
         }))
     .pipe(gulp.dest(jsDest));   
});