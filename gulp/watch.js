var gulp = require('gulp');
gulp.task('watch', function() {
  gulp.watch('static/**/*.html', ['templateCacheDev']);
});