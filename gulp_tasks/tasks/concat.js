var gulp = require('gulp');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var browserSync = require('./browserSync');

// var wait = require('gulp-wait');
// var debug = require('gulp-debug');
// var cached = require('gulp-cached');

var config = require('../config');
var paths = config.paths;

gulp.task('concat:pug', function () {
  return gulp.src(paths.blocks + '**/*.pug')
    .pipe(concat('blocks.pug'))
    //.pipe(debug({title: 'debug-after'}))
    .pipe(gulp.dest(paths.pages + "layout/"));
});

gulp.task('concat:js', function () {
  return gulp.src([paths.scripts.src + '*.js'])
    .pipe(babel())
    .pipe(gulp.dest(paths.scripts.dest));
});

gulp.task('concat:js', function () {
    return gulp.src([paths.scripts.src + '*.js'])
        .pipe(gulp.dest(paths.scripts.dest));
});

gulp.task('concat:js:babel', function () {
    return gulp.src([paths.scripts.src + '*.js'])
        .pipe(babel())
        .pipe(gulp.dest(paths.scripts.dest));
});

gulp.task('concat:blockJs', function () {
  return gulp.src([paths.blocks + '**/*.js'])
    .pipe(concat('blocksjs.js'))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream());
});

gulp.task('concat:blockJs:babel', function () {
    return gulp.src([paths.blocks + '**/*.js'])
        .pipe(concat('blocksjs.js'))
        .pipe(babel())
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browserSync.stream());
});

gulp.task('concat:fonts', function () {
  return gulp.src([paths.fonts + '**/*.scss'])
    .pipe(concat('fonts.scss'))
    .pipe(gulp.dest(paths.styles.helpers));
});

gulp.task('concat:scss', function () {
  return gulp.src([paths.blocks + '**/*.scss'])
    .pipe(concat('_blocks.scss'))
    .pipe(gulp.dest(paths.styles.src));
});

gulp.task('concat', ['concat:pug', 'concat:blockJs', 'concat:js', 'concat:fonts', 'concat:scss']);
gulp.task('concat:babel', ['concat:pug', 'concat:blockJs:babel', 'concat:js:babel', 'concat:fonts', 'concat:scss']);