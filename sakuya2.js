var Sakuya = {};

Sakuya.UI = function(rootElement){
    this._ = {};
    this.rootElement = rootElement;
    this._bindings = {};
    this._lastDefinedProperty = null;
    this._bindingTypes = {
        'class': this._class,
        'value': this._value,
        'html': this._html,
        'attr': this._attr
    };
    // Object.defineProperties(this, {
    //     '_rootElement': {emumerable: false, writable: true, value: rootElement},
    //     '_bindings': {emumerable: false, writable: true, value: {}},
    //     '_lastDefinedProperty': {emumerable: false, writable: true, value: null},
    //     '_bindingTypes': {emumerable: false, writable: true, value: {
    //         'class': this._class,
    //         'value': this._value,
    //         'html': this._html,
    //         'attr': this._attr
    //     }}
    // });
}

Sakuya.UI.prototype.define = function(propertyName) {
    'use strict';
    if (typeof(propertyName) !== 'string' || propertyName.length === 0) {
        throw 'Incorrect property name';
    }
    if (this._bindings.hasOwnProperty(propertyName)) {
        throw 'Property "' + propertyName + '" is already defined'
    }
    this._bindings[propertyName] = {};
    this._lastDefinedProperty = propertyName;
    return this;
};

Sakuya.UI.prototype.as = function(propertyType) {
    'use strict';
    if (
        typeof(propertyType) !== 'string' ||
        propertyType.length === 0 ||
        !this._bindingTypes.hasOwnProperty(propertyType)
    ) {
        throw 'Incorrect property type';
    }
    if (!this._lastDefinedProperty) {
        throw "Setting binding's params before defining it";
    }
    if (this._bindings[this._lastDefinedProperty].hasOwnProperty('type')) {
        throw "Multiple 'as' for single binding";
    }
    this._bindings[this._lastDefinedProperty].type = propertyType;
    return this;
};

Sakuya.UI.prototype.of = function(selector) {
    'use strict';
    if (typeof(selector) !== 'string' || selector.length === 0) {
        throw 'Incorrect element selector';
    }
    if (!this._lastDefinedProperty) {
        throw "Setting binding's params before defining it";
    }
    if (this._bindings[this._lastDefinedProperty].hasOwnProperty('selector')) {
        throw "Multiple 'of' for single binding";
    }
    this._bindings[this._lastDefinedProperty].selector = selector;
    return this;
};
Sakuya.UI.prototype.value = function(value) {
    'use strict';
};
Sakuya.UI.prototype.end = function() {
    'use strict';
};


Sakuya.UI.prototype.convertWith = function(func) {};
Sakuya.UI.prototype.listenTo = function(obj, eventName) {};
Sakuya.UI.prototype.setCallback = function(func) {};

Sakuya.UI.prototype.multiSet = function(func) {};


Sakuya.UI.prototype._html = function(html){};
Sakuya.UI.prototype._class = function(className, reverted){};
Sakuya.UI.prototype._value = function(value){};
Sakuya.UI.prototype._attr = function(attr){};
