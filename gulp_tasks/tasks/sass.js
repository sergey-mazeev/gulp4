var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('./browserSync');

var config = require('../config');
var paths = config.paths;

var browsers = config.browsers

gulp.task('sass', function () {
  gulp.src(['*.scss', '!_*.scss', 'helpers/*.scss', '!helpers/_*.scss'], {cwd: paths.styles.src})
	  .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: browsers,
      cascade: true,
      remove: false
    }))
	  .pipe(sourcemaps.write())
	  // .pipe(gulp.dest(paths.styles.cms))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
});

gulp.task('stylesVendor', function () {
  return gulp.src(paths.styles.vendor)
    .pipe(gulp.dest(paths.styles.dest))
    .on('end', browserSync.reload)
});
