import {parallel, series, watch} from 'gulp';
import yargs from 'yargs';

import pug from './gulp/tasks/pug';
import favicon from './gulp/tasks/favicon';
import clear from './gulp/tasks/clean';
import webfonts from './gulp/tasks/fonts';
import css from './gulp/tasks/scss';
import js from './gulp/tasks/js';

const argv = yargs.argv;
export const production = !!argv.production;
export const babelFlag = !!argv.babel;

export const watchFiles = () => {

}

export const build = series(clear, parallel(favicon, webfonts, pug, css, js));
export const test = series(js);

export const dev = series(pug);

export default dev;