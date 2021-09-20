import {dest, parallel, src} from 'gulp';
import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';
import settings from '../config';
import {bitrixFlag} from "../../gulpfile.babel";

const builtPath = bitrixFlag ? settings.paths.fonts.bitrix : settings.paths.fonts.built;

const woff = () =>
    src(`${settings.paths.fonts.src}*.ttf`)
        .pipe(ttf2woff())
        .pipe(dest(builtPath));

const woff2 = () =>
    src(`${settings.paths.fonts.src}*.ttf`)
        .pipe(ttf2woff2())
        .pipe(dest(builtPath));

const moveAlreadyConvertedFonts = () =>
    src((`${settings.paths.fonts.src}*.{woff,woff2}`))
        .pipe(dest(builtPath));

const webfonts = parallel(woff, woff2, moveAlreadyConvertedFonts);

export default webfonts;