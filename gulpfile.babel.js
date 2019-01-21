import {parallel, series} from 'gulp';

import pug from './gulp/tasks/pug';
import favicon from './gulp/tasks/favicon';
import clear from './gulp/tasks/clean';
import webfonts from './gulp/tasks/fonts';

export const build = series(clear, parallel(favicon, webfonts, pug));
export const test = series(webfonts);

export const dev = series(pug);

export default dev;