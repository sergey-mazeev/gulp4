import {dest, parallel, src} from 'gulp';
import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';
import settings from '../config';

const woff = () =>
    src(`${settings.paths.fonts.src}*.ttf`)
        .pipe(ttf2woff())
        .pipe(dest(settings.paths.fonts.built));

const woff2 = () =>
    src(`${settings.paths.fonts.src}*.ttf`)
        .pipe(ttf2woff2())
        .pipe(dest(settings.paths.fonts.built));

const moveAlreadyConvertedFonts = () =>
    src((`${settings.paths.fonts.src}*.{woff,woff2}`))
        .pipe(dest(settings.paths.fonts.built));

const webfonts = parallel(woff, woff2, moveAlreadyConvertedFonts);

export default webfonts;