// var gulp = require('gulp');
// var uglifycss = require('gulp-uglifycss');
//
// var config = require('../config');
// var paths = config.paths;
//
// gulp.task('cssuglify', function () {
//   gulp.src(paths.cssTmp + '*.css')
//     .pipe(uglifycss({
//       "maxLineLen": 80,
//       "uglyComments": true
//     }))
//     .pipe(gulp.dest(paths.css));
// });