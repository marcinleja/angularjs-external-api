module.exports = function karmaConfig (config) {
  config.set({
    frameworks: [
      'jasmine'
    ],
    reporters: [
      'progress',
      'coverage'
    ],
    files: [
      './src/app/app.module.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './test/*.js'
    ],
    preprocessors: {
      './src/app/app.module.js': ['webpack'],
      './test/*.js': ['webpack']
    },
    browsers: [
      'PhantomJS'
    ],
    singleRun: true,
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {type: 'text-summary'},
        {type: 'html'}
      ]
    },
    webpack: require('./webpack.config'),
    webpackMiddleware: {
      noInfo: 'errors-only'
    }
  });
};
