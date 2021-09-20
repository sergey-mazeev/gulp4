import {dest, src} from 'gulp';
import imgMin from 'gulp-image';
import newer from 'gulp-newer';
import changed from 'gulp-changed';
import gulpif from 'gulp-if';
import debug from 'gulp-debug';

import settings from '../config';
import {production} from '../../gulpfile.babel';
import {bitrixFlag} from "../../gulpfile.babel";

const {paths} = settings;
const builtPath = bitrixFlag ? paths.img.bitrix : paths.img.built;

const imgMinOptions = {
    optimizationLevel: 5,
    pngquant: true,
    optipng: true,
    zopflipng: false,
    jpegRecompress: true,
    jpegoptim: true,
    mozjpeg: true,
    gifsicle: true,
    svgo: true,
    concurrent: 5
};

export const img = () =>
    src(`${paths.img.src}**/*.{jpg,png,svg,gif}`)
        .pipe(gulpif(production, imgMin(imgMinOptions), changed(builtPath)))
        .pipe(dest(paths.img.temp))
        .pipe(dest(builtPath));

export const imgMinimization = (done) => {
    src(`${paths.img.src}**/*.{jpg,png,svg,gif}`)
        // .pipe(imgMin(imgMinOptions))
        .pipe(gulpif(production, imgMin(imgMinOptions), changed(builtPath)))
        .pipe(dest(paths.img.temp))
        .pipe(dest(builtPath));
    done();
};

export default img;