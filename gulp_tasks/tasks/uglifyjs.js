var gulp = require('gulp');
var uglifyjs = require('gulp-uglifyjs');

var config = require('../config');
var paths = config.paths;

gulp.task('jsuglify', function () {
  gulp.src(paths.jsTmp + 'blocks.js')
    .pipe(uglifyjs())
    .pipe(gulp.dest(paths.js));
  gulp.src(paths.jsTmp + 'blocksjs.js')
    .pipe(uglifyjs())
    .pipe(gulp.dest(paths.js));
  gulp.src(paths.jsTmp + 'blocksco.js')
    .pipe(uglifyjs())
    .pipe(gulp.dest(paths.js));
  gulp.src(paths.jsTmp + 'global.js')
    .pipe(uglifyjs())
    .pipe(gulp.dest(paths.js));
  gulp.src(paths.jsTmp + 'script.js')
    .pipe(uglifyjs())
    .pipe(gulp.dest(paths.js));
});