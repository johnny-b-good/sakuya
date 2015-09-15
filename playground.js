var $root = $('#root');
var ui = new Sakuya.UI($root);

ui.define('text1').as('html').of('.fixture1')
  .value('Hello world!').convertWith(function(){}).listenTo(window, 'event')
  .end();

ui.define('text1').as('html').of('.fixture1')
  .define('text2').as('html').of('.fixture2')
  .define('text3').as('html').of('.fixture3')
  .end();


ui._.text1 = 'some text';
ui._.class1 = 'very__long-class--bem-style';
ui._.counterValue = 100500;
ui._.testButtonVisible = true;

ui.$text1 = 'some text';

ui.compute('computedProperty')
  .watch('prop1', 'prop2', 'prop3')
  .callback(function(){
      return this._.prop1 + this._.prop2 + this._.prop3;
  })
  .as('html')
  .of('div.fixture1')
  .end();
