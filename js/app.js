define(['i18n!nls/app'], function (I18n) {
  var tpl = _.template(I18n.message.hello);
  return {
    initialize: function () {
      $(document).ready(function () {
        $('#message').text(tpl({name: 'Xiaoqiang'}));
      });
    }
  }
});
