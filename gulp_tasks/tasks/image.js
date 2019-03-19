var gulp = require('gulp');
var imgMin = require('gulp-image');
var browserSync = require('./browserSync');

var debug = require('gulp-debug');

const changed = require('gulp-changed');

var config = require('../config');
var paths = config.paths;

gulp.task('img', function () {
  return gulp.src(paths.images.src)
    .pipe(debug({title: 'debug-after'}))
    .pipe(gulp.dest(paths.images.dest))
    .pipe(browserSync.stream())
});

gulp.task('imgChanged', function (obj) {
  return gulp.src(paths.images.src)
    // .pipe(debug({title: 'debug-after'}))
    .pipe(gulp.dest(paths.images.dest))
    .pipe(browserSync.stream())
});

gulp.task('imgMin', function () {
  return gulp.src(paths.images.src)
    .pipe(imgMin({
      optimizationLevel: 5,
      pngquant: true,
      optipng: true,
      zopflipng: false,
      jpegRecompress: true,
      jpegoptim: true,
      mozjpeg: true,
      gifsicle: true,
      svgo: true,
      concurrent: 5
    }))
    .pipe(gulp.dest(paths.images.dest))
    .pipe(browserSync.stream())
});