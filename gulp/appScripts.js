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
                           
               'static/app.controller.js',               
               'static/app.routes.js',
               'static/modules/home/controllers/homeCtrl.js',
               'static/app.js', 
               ], 

jsDest = 'dist/scripts';
gulp.task('appScripts', function () {
	 return gulp.src(jsFiles)
	 .pipe(debug())
	 .pipe(strip())
     .pipe(concat('app.js',{newLine: ';'}).on('error', function(e){
         console.log("Concat error:",e);
     }))     
    .pipe(ngAnnotate({add: true}).on('error', function(e){
         console.log("Annotate error:",e);
     }))
     .pipe(gulp.dest(jsDest))
     .pipe(rename('app.min.js'))    	    
     .pipe(uglify().on('error', function(e){
            console.log(e);
         }))
     .pipe(gulp.dest(jsDest));   
});