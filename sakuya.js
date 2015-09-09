// TODO: Избавиться от jquery
// TODO: ModelLight для BB основанная на defineproperty. Или расширение для библиотечной модели.

var Sakuya = {};

Sakuya.UI = function($root){
    this.$root = $root;
    this._values = {};
    this._elements = {};
    this._lastDefinedProperty = undefined;
}


Sakuya.UI.prototype.html = function(property, selector){

    Object.defineProperty(this, property, {
        set: function(newValue) {
            this._values[property] = newValue;
            $(selector, this.$root).html(newValue);
        },
        get: function() {
            return this._values[property];
        },
        configurable: true //to enable redefining the property later
    });

    this._lastDefinedProperty = property;

    return this;
};

// Sakuya.prototype.init = function (initialValue) {
Sakuya.UI.prototype.eq = function (initialValue) {
    if (this._lastDefinedProperty) {
        this[this._lastDefinedProperty] = initialValue;
        this._lastDefinedProperty = undefined;
    }
    else {
        throw '';
    }

    return this;
};



Sakuya.UI.prototype.class = function(property, selector){};
Sakuya.UI.prototype.value = function(property, selector){};
Sakuya.UI.prototype.attr = function(property, selector){};

Sakuya.UI.prototype.init = function(property, selector){};
Sakuya.UI.prototype.filter = function(property, selector){};

// Mirror models, outer variables and shit to pass them to a template renderer
// Не нужно, можно отправлять склеенный обхект из модели и гуя
Sakuya.UI.prototype.mirror = function(object, property, event){};

// UI elements cache - add "update all cached" method?
Sakuya.UI.prototype.el = function(name, selector){
    Object.defineProperty(this, name, {
        set: function(newValue) {
            this._elements[name] = $(selector, this.$root);
        },
        get: function() {
            return this._elements[name];
        },
        configurable: true //to enable redefining the property later
    });
};


// LOW PRIORITY
// Sakuya.prototype.enabled = function(property, selector){};
// Sakuya.prototype.disabled = function(property, selector){};
// Sakuya.prototype.checked = function(property, selector){};
// Sakuya.prototype.text = function(){};
// Sakuya.prototype.visible = function(){};
// Sakuya.prototype.error = function(){};