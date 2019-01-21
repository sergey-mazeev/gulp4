import {parallel, series} from 'gulp';
import yargs from 'yargs';

import pug from './gulp/tasks/pug';
import favicon from './gulp/tasks/favicon';
import clear from './gulp/tasks/clean';
import webfonts from './gulp/tasks/fonts';
import css from './gulp/tasks/scss';
import js from './gulp/tasks/js';

const argv = yargs.argv;
export const production = !!argv.production;

export const build = series(clear, parallel(favicon, webfonts, pug, css));
export const test = series(js);

export const dev = series(pug);

export default dev;