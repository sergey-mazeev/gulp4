import {dest, src, parallel} from 'gulp';

import settings from '../config';

const {jsVendor, cssVendor} = settings.paths;

const moveVendorJs = () =>
  // src(['*.scss', '!_*.scss', 'helpers/*.scss', '!helpers/_*.scss'], {cwd: paths.scss.src})
  // src((`${jsVendor.src}*.js`))
  src([`${jsVendor.src}*.js`, `!${jsVendor.src}_*.js`])
    .pipe(dest(jsVendor.built));

const moveVendorCss = () =>
    //src((`${cssVendor.src}*.css`))
    src([`${cssVendor.src}*.css`,`!${cssVendor.src}_*.css`])
        .pipe(dest(cssVendor.built));

const vendor = parallel(moveVendorJs, moveVendorCss);

export default vendor;