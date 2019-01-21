import del from 'del';
import settings from '../config';

const clean = () => del([settings.paths.built]);

export default clean;