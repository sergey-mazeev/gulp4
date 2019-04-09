import {dest, src, parallel} from 'gulp';

import settings from '../config';

const {jsVendor, cssVendor} = settings.paths;

const moveVendorJs = () =>
    src((`${jsVendor.src}*.js`))
        .pipe(dest(jsVendor.built));

const moveVendorCss = () =>
    src((`${cssVendor.src}*.css`))
        .pipe(dest(cssVendor.built));

const vendor = parallel(moveVendorJs, moveVendorCss);

export default vendor;