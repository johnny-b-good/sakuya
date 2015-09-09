QUnit.test( "Testing 'html' binding", function( assert ) {
    var $fixture = $( "#qunit-fixture" );
    $fixture.html('<div class= "fixture__message">Oops!</div>');

    var ui = new Sakuya.UI($fixture);
    ui.html('messageText', '.fixture__message');

    ui.messageText = 'Alright!!';
    assert.equal($('.fixture__message').html(), 'Alright!!', 'Set text to a div');
});


QUnit.test( "Testing initial value setting", function( assert ) {
    var $fixture = $( "#qunit-fixture" );
    $fixture.html('<div class= "fixture__message">Oops!</div>');

    var ui = new Sakuya.UI($fixture);
    ui.html('messageText', '.fixture__message').eq('Alright!!');

    assert.equal($('.fixture__message').html(), 'Alright!!', 'Set text to a div');
});


QUnit.test( "Testing multiple bindings", function( assert ) {
    var $fixture = $( "#qunit-fixture" );
    $fixture.html('\
        <div class= "fixture1">0</div>\
        <div class= "fixture2">0</div>\
        <div class= "fixture3">0</div>\
    ');

    var ui = new Sakuya.UI($fixture);
    ui
        .html('text1', '.fixture1').eq(1)
        .html('text2', '.fixture2').eq(2)
        .html('text3', '.fixture3').eq(3);


    // НЕ СТИРАЙ!!
    // ui = {val1: {el: '.fixture1'}}
    // ui.bind('html').of('.fixture1').as('text1')
    // ui.bind('text1').as('html').of('.fixture1').init('LOL').end()
    // ui.bind('text1').as('html').of('.fixture1').init('LOL').filter('f');    <-----
    // ui.prop('text1').bind('html', '.fixture1').init('LOL')

    // ui.define('text1').as('html').of('.fixture1')
    //   .value('Hello world!').convertWith(function(){}).listenTo(window, 'event');


    assert.equal($('.fixture1').html(), '1', 'Div #1 text');
    assert.equal($('.fixture2').html(), '2', 'Div #2 text');
    assert.equal($('.fixture3').html(), '3', 'Div #3 text');
});