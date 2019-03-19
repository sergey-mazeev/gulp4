var gulp = require('gulp');

var config = require('../config');
var paths = config.paths;

gulp.task('vendorCss', function () {
  gulp.src(paths.styles.vendor + '*')
    .pipe(gulp.dest(paths.styles.dest + 'vendor/'));
});

gulp.task('vendorJs', function () {
  gulp.src(paths.scripts.vendor + '*')
    .pipe(gulp.dest(paths.scripts.dest + 'vendor/'));
});
