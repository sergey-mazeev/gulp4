import {dest, src, parallel} from 'gulp';
import {bitrixFlag} from "../../gulpfile.babel";

import settings from '../config';

const {jsVendor, cssVendor} = settings.paths;

const moveVendorJs = () =>
  // src(['*.scss', '!_*.scss', 'helpers/*.scss', '!helpers/_*.scss'], {cwd: paths.scss.src})
  // src((`${jsVendor.src}*.js`))
  src([`${jsVendor.src}*.js`, `!${jsVendor.src}_*.js`])
    .pipe(dest(bitrixFlag ? jsVendor.bitrix : jsVendor.built));

const moveVendorCss = () =>
    //src((`${cssVendor.src}*.css`))
    src([`${cssVendor.src}*.css`,`!${cssVendor.src}_*.css`])
        .pipe(dest(bitrixFlag ? cssVendor.bitrix : cssVendor.built));

const vendor = parallel(moveVendorJs, moveVendorCss);

export default vendor;