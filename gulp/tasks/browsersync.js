import browserSync from 'browser-sync';
import settings from '../config';

const serve = () => browserSync({
    open: true,
    server: {
        baseDir: settings.paths.built,
        directory: false
    },
    files: `${settings.paths.built}**/*.*`,
});

export default serve;