var	gulp = require('gulp');
var csslint = require('gulp-csslint');
var config = require('../config');

var paths = config.paths;


var fileReporter = require('gulp-csslint-filereporter');

// set config
fileReporter.setConfig({
    "treshhold": 0,
    "directory": paths.reports
});

gulp.task('csslint', function() {
  gulp.src(paths.css.dest + '*.css')
    .pipe(csslint())
    .pipe(csslint.reporter(fileReporter.reporter));
});