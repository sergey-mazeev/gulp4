module.exports = {
  paths: {
    base: './build/',

    images: {
      src: ['app/img/*.png','app/img/*.jpg','app/img/*.svg','app/img/**/*.png','app/img/**/*.jpg','app/img/**/*.svg'],
      dest: 'build/img/'
    },

    fonts: {
      src: 'app/fonts/**/*',
      dest: 'build/fonts/'
    },

    scripts: {
      src: 'app/js/',
      coffee: 'app/js/',
      dest: 'build/js/',
      vendor: 'app/js/vendor/'
    },

    styles: {
      src: 'app/css/',
      dest: 'build/css/',
      cms: 'drupal/themes/sitexxi/default/css/',
      helpers: 'app/css/helpers/',
      vendor: 'app/css/vendor/'
    },

    blocks: 'app/blocks/',

    pages: 'app/templates/',

    reports: 'app/reports/'

  },
  browsers: ['ie >= 8', 'ff >= 29', 'Opera >= 12', 'iOS >= 6', 'Chrome >= 28', 'Android >= 2']
};
