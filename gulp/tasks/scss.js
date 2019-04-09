import {dest, series, src} from 'gulp';
import scss from 'gulp-sass';
import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import minify from 'gulp-clean-css';
import gulpif from 'gulp-if';
import autoprefixer from 'gulp-autoprefixer';

import settings from '../config';

const {paths} = settings;
scss.compiler = require('node-sass');

export const concatBlocks = () =>
    src(`${paths.blocks}**/*.scss`)
        .pipe(sourcemaps.init())
        .pipe(concat('_blocks.scss'))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(`${paths.scss.src}helpers/`));

// todo: Сделать через импорт
// import {cms, production} from '../../gulpfile.babel';
const argv = require('yargs').argv;
export const production = !!argv.production;
const cms = !!argv.cms ;

const isNotCms = () => {
  if (typeof cms === "undefined" || cms === false) {
    return true;
  }
  return false;
};

export const vendorExt = () =>
    src(`${paths.scss.src}vendor/*.css`)
        .pipe(gulpif(isNotCms(), rename(function (path) {
          path.extname = '.scss';
        })))
        .pipe(gulpif(isNotCms(), dest(`${paths.scss.src}vendor/`)));

export const buildCss = () =>
    src(['*.scss', '!_*.scss', 'helpers/*.scss', '!helpers/_*.scss'], {cwd: paths.scss.src})
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(scss().on('error', scss.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulpif(production, autoprefixer({
            browsers: settings.browsers,
        })))
        .pipe(gulpif(production, minify()))
        .pipe(dest(`${paths.scss.built}`));

const css = series(concatBlocks, vendorExt, buildCss);

export default css;