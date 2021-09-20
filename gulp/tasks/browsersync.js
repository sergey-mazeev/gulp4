import fs from 'fs';
import browserSync from 'browser-sync';
import settings from '../config';
import {bitrixFlag} from "../../gulpfile.babel";

const serve = () => browserSync({
    open: true,
    server: {
        baseDir: bitrixFlag ? '../' : 'built',
        directory: false,
        index: bitrixFlag ? './scaffold/built/index.html' : '/index.html',
    },
    // При необходимости
    // https: {
    //     key: 'src/ssl/server.key',
    //     cert: 'src/ssl/server.cert'
    // },
    files: [`${settings.paths.built}**/*.*`, `${settings.paths.scss.built}**/*.css`, `${settings.paths.js.built}**/newStyles.js`],
});

export default serve;