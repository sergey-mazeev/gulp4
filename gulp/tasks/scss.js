import {dest, series, src} from 'gulp';
import scss from 'gulp-sass';
import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import minify from 'gulp-clean-css';
import gulpif from 'gulp-if';
import settings from '../config';
import {production} from '../../gulpfile.babel';

const {paths} = settings;
scss.compiler = require('node-sass');

const concatBlocks = () =>
    src(`${paths.blocks}**/*.scss`)
        .pipe(concat('_blocks.scss'))
        .pipe(dest(paths.scss.src));

const vendorExt = () =>
    src(`${paths.scss.src}vendor/*.css`)
        .pipe(rename(function (path) {
            path.extname = '.scss';
        }))
        .pipe(dest(`${paths.scss.src}vendor/`));

const buildCss = () =>
    src(['*.scss', '!_*.scss', 'helpers/*.scss', '!helpers/_*.scss'], {cwd: paths.scss.src})
        .pipe(sourcemaps.init())
        .pipe(scss().on('error', scss.logError))
        .pipe(gulpif(production, minify()))
        .pipe(sourcemaps.write('./maps'))
        .pipe(dest(`${paths.scss.built}`));

const css = series(concatBlocks, vendorExt, buildCss);

export default css;