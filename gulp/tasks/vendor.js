import {dest, series, src} from 'gulp';

const gulpif = require('gulp-if');

import settings from '../config';
const {paths} = settings;

// todo: Сделать через импорт
// import {cms} from '../../gulpfile.babel';
const argv = require('yargs').argv;
const cms = !!argv.cms ;

export const vendorCss = () =>
  src(`${paths.scss.vendor}**/*.css`)
    .pipe(gulpif(cms, dest(`${paths.scss.built}`)));

export const vendorJs = () =>
  src(`${paths.js.vendor}**/*.js`)
    .pipe(gulpif(cms, dest(`${paths.js.built}`)));

const vendor = series(vendorCss,vendorJs);

export default vendor;