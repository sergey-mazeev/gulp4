var	gulp = require('gulp');
var browserSync = require('browser-sync').create();
var config = require('../config');

var paths = config.paths;

// http://www.browsersync.io/docs/options/

gulp.task('browserSync', function() {
	browserSync.init({
		open: false,
		server: {
			baseDir: paths.base,
			directory: false
		}
	});
});

module.exports = browserSync;
