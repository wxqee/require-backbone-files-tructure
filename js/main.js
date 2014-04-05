require.config({
  paths: {
    'jquery': 'libs/jquery/jquery.min',
    'underscore': 'libs/underscore/underscore',
    'backbone': 'libs/backbone/backbone',
    'i18n': 'libs/require-i18n/i18n',
  },
  shim: {
    'jquery': {
      exports: '$'
    },
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});

define(['jquery', 'underscore', 'backbone', 'i18n'], function ($, _, Backbone, I18n) {
  require(['app'], function (App) {
    App.initialize();
  })
});
