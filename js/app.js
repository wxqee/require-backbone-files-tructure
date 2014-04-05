define([], function () {
  var tpl = _.template('Hi <%= name %>, welcome to my project.');
  return {
    initialize: function () {
      $(document).ready(function () {
        $('#message').text(tpl({name: 'Xiaoqiang'}));
      });
    }
  }
});
