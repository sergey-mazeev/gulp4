import {dest, series, src} from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import rollup from 'gulp-better-rollup';
import babel from 'rollup-plugin-babel';

import {production} from '../../gulpfile.babel';
import settings from '../config';

const paths = settings.paths;

//todo попробовать gulp-rollup

const buildScripts = () =>
    src(`${paths.js.src}main.js`)
        .pipe(sourcemaps.init())
        .pipe(rollup({
            plugins: [babel()]
        }, {
            format: 'cjs',
        }))
        .pipe(sourcemaps.write())
        .pipe(dest(paths.js.built));

export default buildScripts;