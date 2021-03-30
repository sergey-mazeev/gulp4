import {dest, src} from 'gulp';

import settings from '../config';

const {favicon} = settings.paths;

const faviconSimple = () =>
  src(favicon.srcSimple + '*')
    .pipe(dest(favicon.builtSimple));

export default faviconSimple;