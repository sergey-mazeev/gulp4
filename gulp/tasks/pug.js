import {dest, lastRun, series, src} from 'gulp';
import pug from 'gulp-pug';
import concat from 'gulp-concat';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';

import settings from '../config';

const paths = settings.paths;

export const pugTemplate = () =>
    src(`${paths.templates}*.pug`)
        .pipe(plumber({
            errorHandler: function (err) {
                notify.onError({
                    title: 'Ошибка Pug',
                    message: '<%= error.message %>',
                })(err);
            }
        }))
        .pipe(pug({
            pretty: true,
        }))
        .pipe(plumber.stop())
        .pipe(dest(paths.built));

export const pugBlocksConcat = () =>
    src(`${paths.blocks}**/*.pug`)
        .pipe(concat(`blocks.pug`))
        .pipe(dest(`${paths.templates}layout/generated/`));

const buildPug = series(pugBlocksConcat, pugTemplate);

export default buildPug;