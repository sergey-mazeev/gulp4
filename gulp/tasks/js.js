import {dest} from 'gulp';

import sourcemaps from 'gulp-sourcemaps';
// import rollup from 'rollup-stream';
import rollupStream from '@rollup/stream';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
import commonjs from '@rollup/plugin-commonjs';
// import minify from 'rollup-plugin-babel-minify';
import {terser} from 'rollup-plugin-terser';
// import babel from 'rollup-plugin-babel';
import babel from '@rollup/plugin-babel';
import browserSync from 'browser-sync';

import settings from '../config';
import {babelFlag, production, bitrixFlag} from '../../gulpfile.babel';

const paths = settings.paths;

const buildScripts = () => {
    let rollupPlugins;
    if (production) {
        rollupPlugins = [
            resolve({
                module: true,
                jsnext: true,
                main: true,
            }),
            commonjs({
                include: 'node_modules/**',
            }),
            babel({
                exclude: 'node_modules/**',
            }),
            terser({
                format: {
                    comments: false,
                },
                compress: true,
            }),
        ]
    } else if (babelFlag) {
        rollupPlugins = [
            resolve({
                module: true,
                jsnext: true,
                main: true,
            }),
            commonjs({
                include: 'node_modules/**',
            }),
            babel({
                exclude: 'node_modules/**',
            }),
        ];
    } else {
        rollupPlugins = [
            resolve({
                module: true,
                jsnext: true,
                main: true,
            }),
            commonjs({
                include: 'node_modules/**',
            }),
        ];
    }

    const rollupOptions = {
        input: `${paths.js.src}mainBundle.js`,
        output: {sourcemap: true},
        // sourcemap: true,
        // format: 'cjs',
        plugins: rollupPlugins,
    };

    return rollupStream(rollupOptions)
        .pipe(source('mainBundle.js', paths.js.src))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('.'))
        // .pipe(terser({ keep_fnames: true, mangle: false }))
        .pipe(dest(bitrixFlag ? paths.js.bitrix : paths.js.built))
        .pipe(browserSync.stream());
};

export default buildScripts;