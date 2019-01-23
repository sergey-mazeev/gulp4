import browserSync from 'browser-sync';
import settings from '../config';

const serve = () => browserSync({
    open: false,
    server: {
        baseDir: settings.paths.built,
        directory: false
    },
    files: `${settings.paths.built}*.html`,
});

export default serve;