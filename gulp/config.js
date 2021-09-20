export default {
    paths: {
        built: 'built/',
        templates: 'src/templates/',
        blocks: 'src/blocks/',
        favicon: {
            src: 'src/favicon/',
            srcSimple: 'src/faviconSimple/',
            built: 'built/favicon/',
            builtSimple: 'built/',
        },
        fonts: {
            src: 'src/fonts/',
            built: 'built/fonts/',
            bitrix: '../fonts/',
        },
        scss: {
            src: 'src/scss/',
            built: 'built/css/',
            bitrix: '../css/',
        },
        cssVendor: {
            src: 'src/scss/vendor/',
            built: 'built/css/vendor/',
            bitrix: '../css/vendor/',
        },
        js: {
            src: 'src/js/',
            built: 'built/js/',
            bitrix: '../js/',
        },
        jsVendor: {
            src: 'src/js/vendor/',
            built: 'built/js/vendor/',
            bitrix: '../js/vendor/',
        },
        img: {
            src: 'src/img/',
            built: 'built/img/',
            bitrix: '../img/',
            temp: 'built/img/'
        }
    },

    browsers: ['ie >= 10', 'ff >= 29', 'Opera >= 12', 'iOS >= 6', 'Chrome >= 28', 'Android >= 2'],
}