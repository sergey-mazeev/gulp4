var gulp = require('gulp');
var browserSync = require('./browserSync');
var babel = require('gulp-babel');

var config = require('../config');
var paths = config.paths;

gulp.task('scriptsMain', function () {
  gulp.src(paths.scripts.src + "*")
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream())
});

gulp.task('scriptsMain:babel', function () {
    gulp.src(paths.scripts.src + "*")
        .pipe(babel())
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browserSync.stream())
});