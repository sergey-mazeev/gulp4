import {dest, series, src} from 'gulp';
import pug from 'gulp-pug';
import concat from 'gulp-concat';
import plumber from 'gulp-plumber';
import settings from '../config';

const paths = settings.paths;

export const pugTemplate = () =>
    src(`${paths.templates}*.pug`)
        .pipe(plumber(function (error) {
            console.log('Ошибка в сборке pug' + error.message);
        }))
        .pipe(pug({
            pretty: true,
        }))
        .pipe(dest(paths.built));

export const pugBlocksConcat = () =>
    src(`${paths.blocks}**/*.pug`)
        .pipe(concat(`blocks.pug`))
        .pipe(dest(`${paths.templates}layout/`));

export default series(pugBlocksConcat, pugTemplate);