QUnit.module('Step 0 -- Init');
// QUnit.test('General initialization', function(assert){});
// QUnit.test('Private stuff containment', function(assert){});


QUnit.module('Step 1 -- Define');
QUnit.test('Define multiple bindings', function(assert){
    var ui = new Sakuya.UI($('#qunit-fixture'));
    ui.define('p1');
    ui.define('p2');
    console.log(ui._bindings.p1);
    assert.equal(ui._bindings.hasOwnProperty('p1'), true, 'Property 1 binding added');
    assert.equal(ui._bindings.hasOwnProperty('p2'), true, 'Property 2 binding added');
});
QUnit.test('Define multiple binding in one go', function(assert){
    var ui = new Sakuya.UI($('#qunit-fixture'));
    ui.define('p1')
      .define('p2');
    assert.equal(ui._bindings.hasOwnProperty('p1'), true, 'Property 1 binding added');
    assert.equal(ui._bindings.hasOwnProperty('p2'), true, 'Property 2 binding added');
});
QUnit.test('Check last defined binding', function(assert){
    var ui = new Sakuya.UI($('#qunit-fixture'));
    ui.define('p1');
    assert.equal(ui._lastDefinedProperty, 'p1', '_lastDefinedProperty reference updated (1)');
    ui.define('p2');
    assert.equal(ui._lastDefinedProperty, 'p2', '_lastDefinedProperty reference updated (2)');
});
QUnit.test('Prevent redefining bindings', function(assert){
    var ui = new Sakuya.UI($('#qunit-fixture'));
    ui.define('p1');
    assert.throws(function(){ ui.define('p1'); },
        'Property "p1" is already defined', 'Property p1 already defined'
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
    assert.equal(ui._bindings.p2.type, 'class', 'Property p2 bound as html');
});
QUnit.test('Prevent multiple as\'ses', function(assert){
    var ui = new Sakuya.UI($('#qunit-fixture'));
    assert.throws(function(){ ui.define('p1').as('html').as('class'); },
        "Multiple 'as' for single binding", "Multiple 'as' for single binding"
    );
});
QUnit.test('Ensure correct definition order', function(assert){
    var ui = new Sakuya.UI($('#qunit-fixture'));
    assert.throws(function(){ ui.as('html').define('p1'); },
        "Setting binding's params before defining it", "Mixed up binding construction order"
    );
});
QUnit.test('Ensure correct binding type', function(assert){
    var ui = new Sakuya.UI($('#qunit-fixture'));
    assert.throws(function(){ ui.define('p1').as(''); },
        "Incorrect property type", "Empty string in property type"
    );
    assert.throws(function(){ ui.define('p2').as(undefined); },
        "Incorrect property type", "Undefined in property type"
    );
    assert.throws(function(){ ui.define('p3').as(100500); },
        "Incorrect property type", "Number in property type"
    );
});
QUnit.test('Check binding functions existense', function(assert){
    var ui = new Sakuya.UI($('#qunit-fixture'));
    var type, func;
    for (type in ui._bindingTypes) {
        func = ui._bindingTypes[type];
        assert.equal(typeof(func), 'function', "Property type '" + type + "' exists");
    }
});


// QUnit.test('', function(assert){});
QUnit.module('Step 3 -- Of');
QUnit.test('Single define-as-of combo', function(assert){
    var ui = new Sakuya.UI($('#qunit-fixture'));
    ui.define('p1').as('html').of('.div1');
    assert.equal(ui._bindings.p1.selector, '.div1', 'Property p1 bound as html of div1');
});
QUnit.test('Chained define-as-of combo', function(assert){
    var ui = new Sakuya.UI($('#qunit-fixture'));
    ui.define('p1').as('html').of('.div1')
      .define('p2').as('class').of('.div2');

    assert.equal(ui._bindings.p1.selector, '.div1', 'Property p1 bound as html of div1');
    assert.equal(ui._bindings.p2.selector, '.div2', 'Property p2 bound as html of div2');
});
QUnit.test('Prevent multiple of\'s', function(assert){
    var ui = new Sakuya.UI($('#qunit-fixture'));
    assert.throws(function(){ ui.define('p1').as('html').of('html').of('class'); },
        "Multiple 'of' for single binding", "Multiple 'of' for single binding"
    );
});
QUnit.test('Ensure correct definition order', function(assert){
    var ui = new Sakuya.UI($('#qunit-fixture'));
    assert.throws(function(){ ui.of('html').define('p1'); },
        "Setting binding's params before defining it", "Mixed up binding construction order"
    );
});
QUnit.test('Ensure correct selector type', function(assert){
    var ui = new Sakuya.UI($('#qunit-fixture'));
    assert.throws(function(){ ui.define('p1').as('html').of(''); },
        "Incorrect selector", "Empty string as selector"
    );
    assert.throws(function(){ ui.define('p2').as('html').of(undefined); },
        "Incorrect selector", "Undefined as selector"
    );
    assert.throws(function(){ ui.define('p3').as('html').of(100500); },
        "Incorrect selector", "Number as selector"
    );
});
