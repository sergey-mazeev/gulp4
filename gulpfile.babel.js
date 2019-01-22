import {parallel, series, watch} from 'gulp';
import yargs from 'yargs';

import {default as pug, pugBlocksConcat, pugTemplate} from './gulp/tasks/pug';
import favicon from './gulp/tasks/favicon';
import clear from './gulp/tasks/clean';
import webfonts from './gulp/tasks/fonts';
import {buildCss, concatBlocks as scssBlocksConcat, default as css, vendorExt} from './gulp/tasks/scss';
import javascript from './gulp/tasks/js';

import settings from './gulp/config';

const {blocks, templates, scss, js} = settings.paths;

const argv = yargs.argv;
export const production = !!argv.production;
export const babelFlag = !!argv.babel;

export const watchFiles = () => {
    watch(`${blocks}**/*.pug`, pugBlocksConcat);
    watch(`${templates}**/*.pug`, pugTemplate);
    watch(`${blocks}**/*.scss`, scssBlocksConcat);
    watch(`${scss.src}**/*.scss`, buildCss);
    watch(`${scss.src}vendor/*.css`, vendorExt);
    watch(`${js.src}**/*.js`, javascript);
};

export const build = series(clear, parallel(favicon, webfonts, pug, css, javascript));

export const dev = series(build, watchFiles);

export default dev;