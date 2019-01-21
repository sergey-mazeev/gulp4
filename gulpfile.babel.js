import {series} from 'gulp';

import pug from './gulp/tasks/pug';

export const dev = series(pug);

export default dev;