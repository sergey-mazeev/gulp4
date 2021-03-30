// todo: Нужно переписать
/*
import {dest, src} from 'gulp';
import favicons from 'gulp-favicons';
import settings from '../config';
import {author, authorUrl, description, name, version} from '../../package.json';

const {paths} = settings;

const generateFavicon = () =>
    src(paths.favicon.src)
        .pipe(favicons({
            appName: name,
            appShortName: name,
            appDescription: description,
            lang: 'ru_RU',
            start_url: "../",
            developerName: author,
            developerURL: authorUrl,
            background: "transparent",
            path: "",
            version: version,
            replace: true
        }))
        .pipe(dest(paths.favicon.built));

export default generateFavicon;
 */