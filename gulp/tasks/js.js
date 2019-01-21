import {dest} from 'gulp';

import sourcemaps from 'gulp-sourcemaps';
import rollup from 'rollup-stream';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import settings from '../config';

const paths = settings.paths;

const buildScripts = () =>
    rollup({
        input: `${paths.js.src}main.js`,
        sourcemap: true,
        format: 'cjs',
    })
        .pipe(source('main.js', paths.js.src))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(paths.js.built));

export default buildScripts;