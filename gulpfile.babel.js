import {parallel, series, watch} from 'gulp';
import yargs from 'yargs';

import {default as pug, pugBlocksConcat, pugTemplate} from './gulp/tasks/pug';
import clear from './gulp/tasks/clean';
import webfonts from './gulp/tasks/fonts';
// import {buildCss, concatBlocks as scssBlocksConcat, default as css, vendorExt} from './gulp/tasks/scss';
import {buildCss, concatBlocks as scssBlocksConcat, default as css} from './gulp/tasks/scss';
import javascript from './gulp/tasks/js';
import vendor from './gulp/tasks/vendor';
import {img, imgMinimization} from './gulp/tasks/img';
import serve from './gulp/tasks/browsersync';
import log from 'fancy-log';
import color from 'gulp-color';
import faviconSimple from "./gulp/tasks/faviconSimple";

import settings from './gulp/config';

const {paths} = settings;

const argv = yargs.argv;
export const production = !!argv.production;
export const babelFlag = !!argv.babel;
export const bitrixFlag = !!argv.bitrix;


const productionConsoleAlert = (cb) => {
    if (production) {
        log(color('=====================', 'MAGENTA'));
        log.info(color('   Production Mode   ', 'CYAN'));
        log(color('=====================', 'MAGENTA'));
    }
    cb();
};

const bitrixConsoleAlert = (cb) => {
    if (bitrixFlag) {
        log(color('=====================', 'MAGENTA'));
        log.info(color('   Bitrix Mode   ', 'CYAN'));
        log(color('=====================', 'MAGENTA'));
    }
    cb();
};

export const watchFiles = () => {
    watch(`${paths.blocks}**/*.pug`, pugBlocksConcat);
    watch(`${paths.templates}**/*.pug`, pugTemplate);
    watch(`${paths.blocks}**/*.scss`, scssBlocksConcat);
    watch(`${paths.scss.src}**/*.scss`, buildCss);
    // watch(`${paths.scss.src}vendor/*.css`, vendorExt);
    watch(`${paths.js.src}**/*.js`, javascript);
    watch(`${paths.img.src}**/*.{jpg,png,svg,gif}`, img);
};


export const build = series(productionConsoleAlert, clear, parallel(imgMinimization, webfonts, pug, css, javascript, vendor, faviconSimple), bitrixConsoleAlert);

export const images = imgMinimization;

export const bitrix = series(productionConsoleAlert,bitrixConsoleAlert, parallel(imgMinimization, webfonts, css, javascript, vendor), parallel(watchFiles, productionConsoleAlert, bitrixConsoleAlert));

export const dev = series(build, parallel(watchFiles, serve, productionConsoleAlert, bitrixConsoleAlert));

export default dev;