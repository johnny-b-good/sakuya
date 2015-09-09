var Sakuya = {};

Sakuya.UI = function($root){
    this.$root = $root;
    this._ = {};
    this._bindings = {};
    this._lastDefinedProperty = undefined;
}

// ui.define('text1').as('html').of('.fixture1')
//   .value('Hello world!').convertWith(function(){}).listenTo(window, 'event')
//   .end();

Sakuya.UI.prototype.define = function(propertyName) {
    'use strict';
    if (typeof(propertyName) !== 'string' || propertyName.length === 0) {
        throw 'Incorrect property name';
    }
    if (this._.hasOwnProperty(propertyName)) {
        throw 'Property "' + propertyName + '" is already defined'
    }
    Object.defineProperty(this._, propertyName, {
        configurable: true,
        enumerable: true,
        value: 'NULL',
        writable: true
    });
    return this;
};

Sakuya.UI.prototype.as = function(propertyType) {
    'use strict';

};

Sakuya.UI.prototype.of = function(selector) {};




Sakuya.UI.prototype.value = function(value) {};
Sakuya.UI.prototype.convertWith = function(func) {};
Sakuya.UI.prototype.listenTo = function(obj, eventName) {};
Sakuya.UI.prototype.setCallback = function(func) {};

Sakuya.UI.prototype.end = function() {};






Sakuya.UI.prototype._html = function(){};
Sakuya.UI.prototype._class = function(){};
Sakuya.UI.prototype._value = function(){};
Sakuya.UI.prototype._attr = function(){};

