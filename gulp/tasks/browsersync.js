import fs from 'fs';
import browserSync from 'browser-sync';
import settings from '../config';

const serve = () => browserSync({
    open: true,
    server: {
        baseDir: settings.paths.built,
        directory: false
    },
    // При необходимости
    // https: {
    //     key: 'src/ssl/server.key',
    //     cert: 'src/ssl/server.cert'
    // },
    files: `${settings.paths.built}**/*.*`,
});

export default serve;