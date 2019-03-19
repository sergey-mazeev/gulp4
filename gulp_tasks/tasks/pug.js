var gulp = require('gulp');
var pug = require('gulp-pug');
var plumber = require('gulp-plumber');

var browserSync = require('./browserSync');

const changed = require('gulp-changed');

var cached = require('gulp-cached');
var pugInheritance = require('gulp-pug-inheritance');
var data = require('gulp-data');
var livereload = require('gulp-livereload');
const filter = require('gulp-filter');
var debug = require('gulp-debug');

var config = require('../config');
var paths = config.paths;

gulp.task('pug', function () {

  return gulp.src(paths.pages + '*.pug')
    .pipe(plumber(function (error) {
      console.log('Ошибка кажется ' + error.message);
      this.emit('end');
    }))
    .pipe(changed(paths.base, {extension: '.html'}))
    .pipe(cached('pug'))
    .pipe(pugInheritance({basedir: 'app/templates', skip: 'node_modules'}))


    .pipe(filter(function (file) {
      return !/\/_/.test(file.path) && !/^_/.test(file.relative);
    }))

    .pipe(pug({
      //basedir: [paths.pages + '*.pug'],
      basedir: ['./build/'],
      pretty: true
    }))
    .pipe(gulp.dest(paths.base))
    //.pipe(debug({title: 'debug-after'}))
    .pipe(livereload());
});


gulp.task('pugBlocks', function () {

  return gulp.src(paths.blocks + '**/*.pug')
    .pipe(plumber(function (error) {
      console.log('Ошибка кажется ' + error.message);
      this.emit('end');
    }))
    .pipe(changed(paths.base, {extension: '.html'}))
    .pipe(cached('pug'))
    .pipe(pugInheritance({basedir: 'app/templates/blocks', skip: 'node_modules'}))

    .pipe(filter(function (file) {
      return !/\/_/.test(file.path) && !/^_/.test(file.relative);
    }))

    .pipe(pug({
      //basedir: [paths.pages + '*.pug'],
      basedir: ['./build/'],
      pretty: 'true'
    }))
    // .pipe(gulp.dest(paths.base))
    //.pipe(debug({title: 'debug-after'}))
    .pipe(livereload());
});

gulp.task('pugNocache', function () {
  return gulp.src(paths.pages + '*.pug')
    .pipe(plumber(function (error) {
      console.log('Ошибка кажется ' + error.message);
      this.emit('end');
    }))
    .pipe(pug({
        pretty: true
    }))
    //.pipe(debug({title: 'debug-after-pages'}))
    .pipe(gulp.dest(paths.base));
});