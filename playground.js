var $root = $('#root');
var ui = new Sakuya.UI($root);

ui.define('text1').as('html').of('.fixture1')
  .value('Hello world!').convertWith(function(){}).listenTo(window, 'event')
  .end();

ui._.text1 = 'some text';
ui._.class1 = 'very__long-class--bem-style';
ui._.counterValue = 100500;
ui._.testButtonVisible = true;

ui.$text1 = 'some text';