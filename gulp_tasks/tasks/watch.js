var gulp = require('gulp');
var watcher = require('gulp-watch');
var runSequence = require('run-sequence');
var browserSync = require('./browserSync');

var shell = require('gulp-shell');

var cached = require('gulp-cached');

var config = require('../config');
var paths = config.paths;

// gulp.task('clearcache', function () {
// 	return shell.task([
// 		'touch test.html'
// 	]);
// });

gulp.task('blocksTouch', function () {
    return gulp.src('*.js', {read: false})
        .pipe(shell([
            'touch build/test.html'
        ]))
});

gulp.task('watch', function () {

    // Добавляем файлы автоматически при добавлении блока
    // watcher([paths.blocks + '/'], function (file) {
    // 	gulp.start('blocksTouch');
    // 	console.log(file);
    // });
    // ! Добавляем файлы автоматически при добавлении блока


    watcher(paths.blocks + '**/*.pug', function () {
        cached.caches = {};
        gulp.start('concat:pug');
        // gulp.start('pugNocache');
        cached.caches = {};
        runSequence('concat:pug', function () {
            cached.caches = {};
            gulp.start('pugNocache');
        });
    });

    watcher([paths.blocks + '**/*.scss'], function () {
        gulp.start('concat:scss');
    });

    watcher(paths.blocks + '**/*.js', function () {
        gulp.start('concat:blockJs');
    });

    watcher(paths.scripts.src + '*.js', function () {
        gulp.start('scriptsMain');
    });

    watcher(paths.fonts + '**/*.scss', function () {
        gulp.start('concat:fonts');
    })

    watcher([paths.styles.src + '**/*.scss'], function () {
        gulp.start('sass');
    });

    watcher([paths.styles.vendor + '*.css'], function () {
        gulp.start('vendorCss');
    });

    watcher([paths.scripts.vendor + '*.js'], function () {
        gulp.start('vendorJs');
    });

    watcher([paths.pages + '**/*.pug'], function () {
        runSequence('pug', function () {
            browserSync.reload();
        });
    });

    watcher(paths.images.src, function () {
        gulp.start('imgMin');
    });

    // watcher({glob: './app/img/*'}, function (files) {
    //   // gulp.start('img');
    //   gulp.start('pug');
    // });


});

gulp.task('watch:babel', function () {

    watcher(paths.blocks + '**/*.pug', function () {
        cached.caches = {};
        gulp.start('concat:pug');
        // gulp.start('pugNocache');
        cached.caches = {};
        runSequence('concat:pug', function () {
            cached.caches = {};
            gulp.start('pugNocache');
        });
    });

    watcher([paths.blocks + '**/*.scss'], function () {
        gulp.start('concat:scss');
    });

    watcher(paths.blocks + '**/*.js', function () {
        gulp.start('concat:blockJs:babel');
    });

    watcher(paths.scripts.src + '*.js', function () {
        gulp.start('scriptsMain:babel');
    });

    watcher(paths.fonts + '**/*.scss', function () {
        gulp.start('concat:fonts');
    })

    watcher([paths.styles.src + '**/*.scss'], function () {
        gulp.start('sass');
    });

    watcher([paths.styles.vendor + '*.css'], function () {
        gulp.start('vendorCss');
    });

    watcher([paths.scripts.vendor + '*.js'], function () {
        gulp.start('vendorJs');
    });

    watcher([paths.pages + '**/*.pug'], function () {
        runSequence('pug', function () {
            browserSync.reload();
        });
    });

    watcher(paths.images.src, function () {
        gulp.start('imgMin');
    });

});
