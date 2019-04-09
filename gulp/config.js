export default {
    paths: {
        built: 'built/',
        templates: 'src/templates/',
        blocks: 'src/blocks/',
        favicon: {
            src: 'src/favicon/logo.*',
            built: 'built/favicon',
        },
        fonts: {
            src: 'src/fonts/',
            built: 'built/fonts/',
        },
        scss: {
            src: 'src/scss/',
            vendor: 'src/scss/vendor',
            built: 'built/css/',
        },
        js: {
            src: 'src/js/',
            vendor: 'src/js/vendor',
            built: 'built/js/',
        },
        img: {
            src: 'src/img/',
            built: 'built/img/',
        }
    },

    browsers: ['ie >= 10', 'ff >= 29', 'Opera >= 12', 'iOS >= 6', 'Chrome >= 28', 'Android >= 2'],
}