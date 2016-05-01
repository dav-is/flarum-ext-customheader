var flarum = require('flarum-gulp');

flarum({
  modules: {
    'Davis/CustomHeader': [
      'src/**/*.js'
    ]
  }
});