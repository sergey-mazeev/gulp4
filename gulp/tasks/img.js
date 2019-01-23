import {dest, src} from 'gulp';
import imgMin from 'gulp-image';
import newer from 'gulp-newer';
import changed from 'gulp-changed';
import gulpif from 'gulp-if';

import settings from '../config';
import {production} from '../../gulpfile.babel';

const {paths} = settings;

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

const img = () =>
    src(paths.img.src)
        .pipe(newer(paths.img.built))
        //.pipe(changed(paths.img.built))
        .pipe(gulpif(production, imgMin(imgMinOptions)))
        .pipe(dest(paths.img.built));

export default img;