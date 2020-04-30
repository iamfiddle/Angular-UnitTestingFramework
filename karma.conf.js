// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      // Jasmine Karma Teamcity reporter
      require('karma-teamcity-reporter')
    ],
    client: {
      // leave Jasmine Spec Runner output visible in browser
      clearContext: false
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/UT'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true,
      thresholds: {
        // thresholds for all files
        global: {
          statements: 0,
          lines: 0,
          branches: 0,
          functions: 0
        },
         // thresholds per file
        each: {
          statements: 0,
          lines: 0,
          branches: 0,
          functions: 0
        }
      }
    },    
    reporters: ['progress', 'kjhtml'],    
    jasmineHtmlReporter: {
      // Jasmine Reporter Settings to Suppress all messages (overrides other suppress settings) failed messages
      suppressAll: true, 
      suppressFailed: true
    },
    port: 4203,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true,  
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    }
  });
};
