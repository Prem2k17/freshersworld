var gulp = require('gulp');
var smushit = require('gulp-smushit');
var debug = require('gulp-debug');

gulp.task('imagemin', function () {
    return gulp.src(['static/temp-assets/*.png','static/temp-assets/*.jpg','static/temp-assets/*.gif'])
        .pipe(smushit({
            verbose: true
        }))
        .pipe(debug())
        .pipe(gulp.dest('dist/temp-assets'));
});