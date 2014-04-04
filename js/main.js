require.config({
  paths: {
    'jquery': 'libs/jquery/jquery.min',
    'underscore': 'libs/underscore/underscore',
    'backbone': 'libs/backbone/backbone'
  },
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});

define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
  $(document).ready(function () {
    $('#message').text('Hello There.');
  });
});