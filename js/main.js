require.config({
  paths: {
    jquery: 'libs/jquery/jquery.min',
    underscore: 'libs/underscore/underscore',
    backbone: 'libs/backbone/backbone',
    i18n: 'libs/require-i18n/i18n',
  },
  shim: {
    jquery: {
      exports: '$'
    },
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});

requirejs.config({
  config: {
    i18n: {
      locale: 'zh'
    }
  }
});

define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
  require(['app'], function (App) {
    App.initialize();
  });
});
