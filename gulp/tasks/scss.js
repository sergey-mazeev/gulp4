import {dest, series, src} from 'gulp';
import scss from 'gulp-sass';
import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import minify from 'gulp-clean-css';
import gulpif from 'gulp-if';
import autoprefixer from 'gulp-autoprefixer';

import settings from '../config';
import {production, bitrixFlag} from '../../gulpfile.babel';

const {paths} = settings;
//scss.compiler = require('node-sass');

import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass( dartSass );

export const concatBlocks = () =>
    src(`${paths.blocks}**/*.scss`)
        .pipe(sourcemaps.init())
        .pipe(concat('_blocks.scss'))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(`${paths.scss.src}generated/`));

// Не используется
export const vendorExt = () =>
    src(`${paths.scss.src}vendor/*.css`)
        .pipe(rename(function (path) {
            path.extname = '.scss';
        }))
        .pipe(dest(`${paths.scss.src}vendor/`));

export const buildCss = () =>
    src(['*.scss', '!_*.scss', 'helpers/*.scss', '!helpers/_*.scss'], {cwd: paths.scss.src})
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        //.pipe(gulpif(production, autoprefixer({
        //    browsers: settings.browsers,
        //})))
        .pipe(gulpif(production, minify()))
        .pipe(dest(`${bitrixFlag ? paths.scss.bitrix : paths.scss.built}`));

// const css = series(concatBlocks, vendorExt, buildCss);
const css = series(concatBlocks, buildCss);

export default css;