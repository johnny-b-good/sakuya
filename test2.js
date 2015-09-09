QUnit.module('Step 0 -- Init');



QUnit.module('Step 1 -- Define');
QUnit.test('Define one binding', function(assert){
    var ui = new Sakuya.UI($('#qunit-fixture'));
    ui.define('p1');
    assert.equal(ui._.hasOwnProperty('p1'), true, 'Property added');
    assert.equal(ui._.hasOwnProperty('p100'), false, 'No unexpected properties');
});
QUnit.test('Define multiple bindings', function(assert){
    var ui = new Sakuya.UI($('#qunit-fixture'));
    ui.define('p1');
    ui.define('p2');
    ui.define('p3');
    assert.equal(ui._.hasOwnProperty('p1'), true, 'Property 1 added');
    assert.equal(ui._.hasOwnProperty('p2'), true, 'Property 2 added');
    assert.equal(ui._.hasOwnProperty('p3'), true, 'Property 3 added');
});
QUnit.test('Define multiple binding in one go', function(assert){
    var ui = new Sakuya.UI($('#qunit-fixture'));
    ui.define('p1')
      .define('p2')
      .define('p3');
    assert.equal(ui._.hasOwnProperty('p1'), true, 'Property 1 added');
    assert.equal(ui._.hasOwnProperty('p2'), true, 'Property 2 added');
    assert.equal(ui._.hasOwnProperty('p3'), true, 'Property 3 added');
});
QUnit.test('Store binding info', function(assert){
    var ui = new Sakuya.UI($('#qunit-fixture'));
    ui.define('p1');
    assert.equal(ui._bindings.p1, {}, 'Binding storage created');
});
QUnit.test('Check last defined binding', function(assert){});
QUnit.test('Prevent redefining bindings', function(assert){
    var ui = new Sakuya.UI($('#qunit-fixture'));
    ui.define('p1');
    assert.throws(
        function(){ ui.define('p1'); },
        'Property "p1" is already defined',
        'Property p1 already defined'
    );
});
QUnit.test('Prevent incorrect names', function(assert){
    var ui = new Sakuya.UI($('#qunit-fixture'));
    assert.throws(function(){ ui.define(null); },
        'Incorrect property name', 'Nulls are not allowed'
    );
    assert.throws(function(){ ui.define(undefined); },
        'Incorrect property name', 'Undefined are not allowed'
    );
    assert.throws(function(){ ui.define(100); },
        'Incorrect property name', 'Numbers are not allowed'
    );
    assert.throws(function(){ ui.define({}); },
        'Incorrect property name', 'Objects are not allowed'
    );
    assert.throws(function(){ ui.define(''); },
        'Incorrect property name', 'Empty strings are not allowed too!'
    );
});



QUnit.module('Step 2 -- As');
QUnit.test('Single define-as binding', function(assert){
    var ui = new Sakuya.UI($('#qunit-fixture'));
    ui.define('p1').as('html');
    assert.equal(ui._bindings.p1.type, 'html', 'Property p1 bound as html');
});
QUnit.test('Chained define-as combo', function(assert){
    var ui = new Sakuya.UI($('#qunit-fixture'));
    ui.define('p1').as('html')
      .define('p2').as('class');
    assert.equal(ui._bindings.p1.type, 'html', 'Property p1 bound as html');
    assert.equal(ui._bindings.p2.type, 'html', 'Property p2 bound as html');
});
QUnit.test('Store binding info', function(assert){});
QUnit.test('Prevent multiple as\'ses', function(assert){});
QUnit.test('Ensure correct definition order', function(assert){});
QUnit.test('Ensure correct binding type', function(assert){});
QUnit.test('Check binding functions existense', function(assert){});
QUnit.test('', function(assert){});