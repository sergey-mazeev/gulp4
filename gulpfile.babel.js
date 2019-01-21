import {parallel, series} from 'gulp';

import pug from './gulp/tasks/pug';

import favicon from './gulp/tasks/favicon';

export const build = series(parallel(favicon, pug));

export const dev = series(pug);

export default dev;