import {parallel, series, watch} from 'gulp';
import yargs from 'yargs';

import {default as pug, pugBlocksConcat, pugTemplate} from './gulp/tasks/pug';
import favicon from './gulp/tasks/favicon';
import clear from './gulp/tasks/clean';
import webfonts from './gulp/tasks/fonts';
import {buildCss, concatBlocks as scssBlocksConcat, default as css, vendorExt} from './gulp/tasks/scss';
import javascript from './gulp/tasks/js';
import serve from './gulp/tasks/browsersync';

import settings from './gulp/config';

const {paths} = settings;

const argv = yargs.argv;
export const production = !!argv.production;
export const babelFlag = !!argv.babel;

export const watchFiles = () => {
    watch(`${paths.blocks}**/*.pug`, pugBlocksConcat);
    watch(`${paths.templates}**/*.pug`, pugTemplate);
    watch(`${paths.blocks}**/*.scss`, scssBlocksConcat);
    watch(`${paths.scss.src}**/*.scss`, buildCss);
    watch(`${paths.scss.src}vendor/*.css`, vendorExt);
    watch(`${paths.js.src}**/*.js`, javascript);
};

export const build = series(clear, parallel(favicon, webfonts, pug, css, javascript));

export const dev = series(build, parallel(watchFiles, serve));

export const test = series(favicon);

export default dev;