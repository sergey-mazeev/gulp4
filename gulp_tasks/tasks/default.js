var gulp = require('gulp');
var	runSequence = require('run-sequence');

gulp.task('default', function() {
	return runSequence(
		'concat',
		['pugBlocks', 'pug', 'pugNocache', 'sass', 'scriptsMain'],
    ['vendorCss', 'vendorJs'],
		'img',
		'browserSync',
		'watch'
	);
});

gulp.task('default:babel', function() {
    return runSequence(
        'concat:babel',
        ['pugBlocks', 'pug', 'pugNocache', 'sass', 'scriptsMain:babel'],
        ['vendorCss', 'vendorJs'],
        'img',
        'browserSync',
        'watch:babel'
    );
});

gulp.task('minify', function() {
  return runSequence(
    'concat',
    ['pug', 'pugBlocks', 'sass', 'coffee'],
    'imgMin',
    'browserSync',
    'watch'
  );
});
//'png', 'jpg', 'jshint', 'jsuglify', 'csslint','cssuglify'