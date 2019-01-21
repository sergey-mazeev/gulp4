import {parallel, series} from 'gulp';

import pug from './gulp/tasks/pug';
import favicon from './gulp/tasks/favicon';
import clear from './gulp/tasks/clean';

export const build = series(clear, parallel(favicon, pug));

export const dev = series(pug);

export default dev;