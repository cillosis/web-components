// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"components/base/template.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Template =
/*#__PURE__*/
function (_Object) {
  _inherits(Template, _Object);

  function Template() {
    var _this;

    _classCallCheck(this, Template);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Template).call(this));
    _this.template = document.createElement('template');
    return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
  }

  _createClass(Template, [{
    key: "setStyle",
    value: function setStyle(style) {
      this.style = style;
      this.immutableStyle = style;
      return this;
    }
  }, {
    key: "setHtml",
    value: function setHtml(html) {
      if (typeof html == 'string') {
        this.html = html;
        this.immutableHtml = html;
      } else if (typeof html == 'function') {
        this.html = html();
        this.immutableStyle = this.html;
      }

      return this;
    }
  }, {
    key: "setAttributes",
    value: function setAttributes(attributes) {
      if (_typeof(attributes) == 'object') {
        // Merge attributes
        this.attributes = _objectSpread({}, this.attributes, {}, attributes);
        this.render();
      }
    }
  }, {
    key: "getAttribute",
    value: function getAttribute(name) {
      return this.attributes[name] || null;
    }
  }, {
    key: "getTemplate",
    value: function getTemplate() {
      return this.template;
    }
  }, {
    key: "getCloned",
    value: function getCloned() {
      return this.template.content.cloneNode(true);
    }
  }, {
    key: "updateAttributePlaceholders",
    value: function updateAttributePlaceholders() {
      var that = this;
      var matcher = /({{)([a-zA-Z0-9\-_]*)(}})/gi;

      if (that.attributes) {
        if (matcher.test(this.immutableHtml)) {
          var newHtml = this.immutableHtml.replace(matcher, function ($match, $open, $attribute, $close) {
            return that.attributes[$attribute];
          });
          this.html = newHtml;
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.updateAttributePlaceholders();
      this.template.innerHTML = "<style>".concat(this.style, "</style>").concat(this.html);
      return this;
    }
  }]);

  return Template;
}(_wrapNativeSuper(Object));

var _default = Template;
exports.default = _default;
},{}],"components/base/webcomponent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _template = _interopRequireDefault(require("./template"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var WebComponent =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(WebComponent, _HTMLElement);

  function WebComponent() {
    _classCallCheck(this, WebComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(WebComponent).apply(this, arguments));
  }

  _createClass(WebComponent, [{
    key: "setTemplate",

    /**
     * Set Template
     *
     * @description Set the Template object that will be used for the component. This lets us isolate the
     *              composition of the template outside of the component logic.
     * @param {Template} template Instance of Template class.
     * @return {WebComponent} Returns self for method chaining.
     */
    value: function setTemplate(template) {
      // Ensure valid template instance
      if (!template instanceof _template.default) {
        throw Error('Template must be an instance of the Template class!');
      } // Assign template locally


      this.template = template;
      return this;
    }
    /**
     * Set Template
     *
     * @description Set the shadow DOM mode to open or closed. This is not necessary to call if you are ok with an
     *              open mode (highly recommended).
     * @param {String} mode Either "open" or "closed"
     * @return {WebComponent} Returns self for method chaining.
     */

  }, {
    key: "setMode",
    value: function setMode(mode) {
      // Ensure valid mode
      if (mode !== "open" && mode !== "closed") {
        throw Error('Invalid shadom mode set. Expecting "open" or "closed".');
      } // Assign mode locally


      this.mode = mode;
      return this;
    }
    /**
     * Set Attributes
     *
     * @description Set or update attributes in the Template instance.
     * @param {Object} attributes
     */

  }, {
    key: "setAttributes",
    value: function setAttributes(attributes) {
      // Pass attributes to the template
      if (this.template instanceof _template.default) {
        this.template.setAttributes(attributes);
      } // Method chaining


      return this;
    }
    /**
     * Connected Callback
     *
     * @description Called when the custom component connects to the DOM. If component inheriting this class
     *              implements an onConnect() method, we will call it.
     */

  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      // Ensure we have a template
      if (!this.template instanceof _template.default) {
        throw Error('Cannot append template to shadow. Please use setTemplate() in the constructor!');
      } // Attach component to shadow DOM and append the template


      this._shadowRoot = this.attachShadow({
        "mode": this.mode || "open"
      });

      this._shadowRoot.appendChild(this.template.getCloned()); // Call the component's own connectedCallback handler


      if (typeof this.onConnect == 'function') {
        return this.onConnect();
      }
    }
    /**
     * Disconnected Callback
     *
     * @description Called when the custom component disconnects from the DOM. If component inheriting this class
     *              implements an onDisconnect() method, we will call it.
     */

  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      // Call the component's own disconnectedCallback handler
      if (typeof this.onDisconnect == 'function') {
        return this.onDisconnect();
      }
    }
    /**
     * Attribute Changed Callback
     *
     * @description Automatic callback in web components when an observed attribute is modified as defined in the
     *              "static get observedAttributes()" method on the component. We take the new attribute and pass
     *              it on to the template. If an element contains a data attribute with a matching name, we will
     *              automatically update the value within the shadow DOM. Finally, if the component inheriting this
     *              class implements an onAttributeChanged method, we call it with the values as well.
     * @param {String} name Name of the attribute
     * @param {String} oldValue Previous value of the attribute
     * @param {String} newValue New value of the attribute
     */

  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      // Pass updated attribute to template
      var newAttributes = {};
      newAttributes[name] = newValue;
      this.setAttributes(newAttributes); // If a data-* selector exists, update the value

      this._updateDataElement(name, newValue); // Call downstream callback


      if (typeof this.onAttributeChanged == 'function') {
        return this.onAttributeChanged(name, oldValue, newValue);
      }
    }
    /**
     * Adopted Callback
     *
     * @description Called when the custom element is moved from on HTML document to another (such as an iframe)
     *              using the adoptNode() method. Only used in a multi-document context. If the component iheriting
     *              this class implements an onAdopted() method, we will call it.
     */

  }, {
    key: "adoptedCallback",
    value: function adoptedCallback() {
      if (typeof this.onAdopted == 'function') {
        return this.onAdopted();
      }
    }
    /**
     * Update element with data attribute
     *
     * @param {String} name Name of the data-* attribute
     * @param {Mixed} value Value to set in the inner HTML
     */

  }, {
    key: "_updateDataElement",
    value: function _updateDataElement(name, value) {
      // Only update if the shadow root has been defined
      if (this._shadowRoot) {
        var el = this._shadowRoot.querySelector('[data-' + name + ']');

        if (el) {
          el.innerHTML = value;
        }
      }
    }
    /**
     * Add Custom Element
     *
     * @static
     * @description Wrapper around addition of custom elements to the window
     * @param {String} name Name of custom component. Must be lowercase with a hyphen.
     * @param {HTMLElement} element The custom component class
     */

  }], [{
    key: "addCustomElement",
    value: function addCustomElement(name, element) {
      window.customElements.define(name, element);
    }
  }]);

  return WebComponent;
}(_wrapNativeSuper(HTMLElement));

var _default = WebComponent;
exports.default = _default;
},{"./template":"components/base/template.js"}],"components/dropdown/dropdown.js":[function(require,module,exports) {
"use strict";

var _template = _interopRequireDefault(require("../base/template"));

var _webcomponent = _interopRequireDefault(require("../base/webcomponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Build Template
 *
 * Wrap template build inside a function so we can pass the component context through
 * @param {WebComponent}
 */
var _DropDownTemplate = function _DropDownTemplate(context) {
  var options = {
    toggleHeight: "4.7rem",
    menuHeight: "4.8rem",
    // Account for borders
    colors: {
      toggleBackground: '#335E7A',
      // SLATE D1
      toggleText: '#FFFFFF',
      // WHITE
      menuBorder: '#EAEEF1',
      // MYSTICK GREY L3
      menuBackground: '#F6F8FA',
      // MYSTICK GREY L2
      menuText: '#335E7A',
      // SLATE D1
      menuHoverBackground: '#EAEEF1',
      // MYSTICK GREY L3
      menuHoverText: '#335E7A' // SLATE D1

    }
  };
  return new _template.default(context).setStyle(
  /*css*/
  "\n            *, *:after {\n                box-sizing: border-box;\n            }\n            :host {\n                display: flex;\n                flex-direction: column;\n                width: auto;\n                padding: 0rem;\n                border: 0px;\n            }\n            :host([hidden]) { display: none }\n            .ux-dropdown {\n                display: flex;\n                flex-direction: column;\n                position: relative;\n                width: 100%;\n            }\n            .ux-dropdown__toggle {\n                display: flex;\n                flex-direction: row;\n                width: 100%;\n                padding: 0rem;\n                background-color: ".concat(options.colors.toggleBackground, ";\n                color: ").concat(options.colors.toggleText, ";\n                border: 1px solid ").concat(options.colors.toggleBackground, ";\n                height: ").concat(options.toggleHeight, ";\n            }\n            .ux-dropdown__toggle__label {\n                display: inline-block;\n                width: 90%;\n                color: ").concat(options.colors.toggleText, ";\n                margin: 0.8rem;\n                line-height: 3rem;\n            }\n            .ux-dropdown__toggle:hover {\n                cursor: pointer;\n            }\n            .ux-dropdown__toggle__icon {\n                display: inline-block;\n                width: 30px; /* Fixed width image can rotate centered */\n                text-align: right;\n                color: ").concat(options.colors.toggleText, ";\n                margin: 0.8rem;\n                -webkit-transform:rotate(-360deg);\n                -moz-transform: rotate(-360deg);\n                -ms-transform: rotate(-360deg);\n                -o-transform: rotate(-360deg);\n                transform: rotate(-360deg);\n                transition: transform 150ms ease;\n            }\n            .ux-dropdown__toggle__icon svg {\n                fill: ").concat(options.colors.toggleText, ";\n                max-height: 3rem;\n            }\n            .ux-dropdown--open .ux-dropdown__toggle__icon {\n                -webkit-transform:rotate(-180deg);\n                -moz-transform: rotate(-180deg);\n                -ms-transform: rotate(-180deg);\n                -o-transform: rotate(-180deg);\n                transform: rotate(-180deg);\n                transition: transform 150ms ease;\n            }\n            .ux-dropdown__menu {\n                display: flex;\n                flex-direction: column;\n                overflow: hidden;\n                position: absolute;\n                top: ").concat(options.toggleHeight, ";\n                width: 100%;\n                padding: 0rem;\n                border-width: 0px;\n                max-height: 0;\n                visibility: hidden;\n                -webkit-animation: slideUp 0.3s ease-out forwards;\n                -moz-animation: slideUp 0.3s ease-out forwards;\n                -o-animation: slideUp 0.3s ease-out forwards;\n                animation: slideUp 0.3s ease-out forwards;\n            }\n            .ux-dropdown--open > .ux-dropdown__menu {\n                overflow: initial;\n                z-index: 10000;\n                visibility: visible;\n                overflow-y: hidden;\n                -webkit-animation: slideDown 10s ease-out forwards;\n                -moz-animation: slideDown 10s ease-out forwards;\n                -o-animation: slideDown 10s ease-out forwards;\n                animation: slideDown 10s ease-out forwards;\n            }\n            .ux-dropdown__menu__item {\n                display: flex;\n                flex-direction: column;\n                width: 100%;\n                background-color: ").concat(options.colors.menuBackground, ";\n                color: ").concat(options.colors.menuText, ";\n                list-style: none;\n                margin: 0rem;\n                padding: 0rem;\n            }\n            .ux-dropdown__menu__item:hover {\n                background-color: ").concat(options.colors.menuHoverBackground, ";\n                color: ").concat(options.colors.menuHoverText, ";\n                cursor: pointer;\n            }\n            .ux-dropdown__menu__divider {\n                display: flex;\n                flex-direction: column;\n                width: 100%;\n                background-color: ").concat(options.colors.menuBackground, ";\n                color: ").concat(options.colors.menuText, ";\n                list-style: none;\n                margin: 0rem;\n                padding: 0rem;\n            }\n            .ux-dropdown__menu__divider hr {\n                border: 1px solid transparent;\n                border-top: 1px solid ").concat(options.colors.menuBorder, ";\n                height: 1px;\n                width: 100%;\n                margin: 0rem;\n            }\n            .ux-dropdown__menu__item span,\n            .ux-dropdown__menu__item a {\n                margin: 0.8rem;\n            }\n            .ux-dropdown__menu__item a,\n            .ux-dropdown__menu__item a:hover,\n            .ux-dropdown__menu__item a:visited,\n            .ux-dropdown__menu__item a:active {\n                text-decoration: none;\n                color: ").concat(options.colors.menuText, ";\n            }\n            @keyframes slideDown {\n                from {\n                    max-height: 0;\n                }\n                to {\n                    max-height: 5000px;\n                }\n            }\n            @keyframes slideUp {\n                from {\n                    max-height: 5000px;\n                }\n                to {\n                    max-height: 0px;\n                }\n            }\n        ")).setHtml(
  /*html*/
  "\n            <div class=\"ux-dropdown\">\n                <div class=\"ux-dropdown__toggle\">\n                    <div class=\"ux-dropdown__toggle__label\" data-label>\n                        ".concat(context.getAttribute('label'), "\n                    </div>\n                    <div class=\"ux-dropdown__toggle__icon\" data-icon>\n                        ").concat(context.getAttribute('icon') == "false" ? "" : context.getAttribute('icon'), "\n                    </div>\n                </div>\n                <div class=\"ux-dropdown__menu\"></div>\n            </div>\n        "));
};

var DropDown =
/*#__PURE__*/
function (_WebComponent) {
  _inherits(DropDown, _WebComponent);

  _createClass(DropDown, null, [{
    key: "observedAttributes",

    /**
     * Attributes MUST be set here in order to use within components onAttributeChanged event
     */
    get: function get() {
      return ['id', 'label', 'icon', 'trigger'];
    }
    /**
     * Initialize Component
     *
     * @description We setup the dynamic icon, initialize the template, set the component mode, and then
     *              render the template content with dynamic contextual parameters.
     */

  }]);

  function DropDown() {
    var _this;

    _classCallCheck(this, DropDown);

    //Parent initialization
    _this = _possibleConstructorReturn(this, _getPrototypeOf(DropDown).call(this)); // Dynamically set the icon

    _this._setIcon(_this.getAttribute('icon')); // Set the template instance to be used with component. We pass this component to the template for
    // variable context, which allows for dynamic templating.


    _this.setTemplate(_DropDownTemplate(_assertThisInitialized(_this))); // Set the default mode of the component to open. There is almost never a reason to use "closed".


    _this.setMode("open"); // Make the template render with it's context


    _this.template.render();

    return _this;
  }
  /**
   * On Connect
   *
   * @description This is a callback from the parent when "connectedCallback" is called. The WebComponent we extend
   *              handles the initialization of the template and attaches the shadow DOM for us. Here we want to
   *              get element references, load the menu items, and setup event listeners.
   */


  _createClass(DropDown, [{
    key: "onConnect",
    value: function onConnect() {
      console.log('[COMPONENT_NOTICE] <drop-down> component connected.'); // Init

      this._id = this.getAttribute('id');
      this._toggleTrigger = this.getAttribute('trigger');
      this._mouseOnElement = false; // Store Element References

      this.$dropDown = this._shadowRoot.querySelector('.ux-dropdown');
      this.$dropDownToggle = this._shadowRoot.querySelector('.ux-dropdown__toggle');
      this.$dropDownMenu = this._shadowRoot.querySelector('.ux-dropdown__menu'); // Load items

      this._loadMenuItems(); // Set open close handler based on the trigger mode: "click" or "hover". Click is default.


      if (this._toggleTrigger == "hover") {
        this.$dropDown.addEventListener('mouseover', this._handleMouseOver.bind(this));
        this.$dropDown.addEventListener('mouseout', this._handleMouseOut.bind(this));
      } else {
        this.$dropDownToggle.addEventListener('click', this._toggleOpen.bind(this));
      }
    }
    /**
     * On Disconnect
     *
     * @description This is a callback from the parent when "disconnectedCallback" is called. We can perform any 
     *              cleanup we need to do here.
     */

  }, {
    key: "onDisconnect",
    value: function onDisconnect() {
      console.log('[COMPONENT_NOTICE] <drop-down> component disconnected.');
    }
    /**
     * On Attribute Changed
     *
     * @description This is a callback from the parent when "attributeChangedCallback" is called. The parent
     *              WebComponent class handles notifying the template of attribute updates and any dynamic
     *              updates by using data-* attributes matching the attribute name.
     */

  }, {
    key: "onAttributeChanged",
    value: function onAttributeChanged(name, oldVal, newVal) {
      console.log("[COMPONENT_NOTICE] <drop-down> component attribtute changed: ".concat(name, " changed from \"").concat(oldVal, "\" to \"").concat(newVal, "\""));
    }
    /**
     * On Adopted
     *
     * @description This is a callback from the parent when "adoptedCallback" is called. This occurs when component
     *              moves to another document, such as an iframe, using adoptNode(). This is not a common behavior
     *              and handling this method within your component is often unnecessary.
     */

  }, {
    key: "onAdopted",
    value: function onAdopted() {
      console.log('[COMPONENT_NOTICE] <drop-down> component adopted.');
    }
    /**
     * Toggle Menu Class to Open Menu
     *
     * @description Toggle the CSS class on the dropdown in order to open/close the menu.
     * @param {Event} event
     * @param {Boolean} force An option to force the toggle despite mouse position
     */

  }, {
    key: "_toggleOpen",
    value: function _toggleOpen(event, force) {
      if (force) {
        this._mouseOnElement = false;
      }

      this.$dropDown.classList.toggle('ux-dropdown--open');
    }
  }, {
    key: "_handleMouseOver",
    value: function _handleMouseOver(e) {
      e.stopPropagation();

      if (this._mouseOnElement === false) {
        this._mouseOnElement = true;

        this._toggleOpen();
      }
    }
  }, {
    key: "_handleMouseOut",
    value: function _handleMouseOut(e) {
      e.stopPropagation();

      if (this._mouseOnElement === true) {
        this._mouseOnElement = false;

        this._toggleOpen();
      }
    }
    /**
     * Set Toggle Icon
     *
     * @param {String} icon An image path, "false" to disable, or empty to default to chevron
     */

  }, {
    key: "_setIcon",
    value: function _setIcon(icon) {
      // No icon option
      if (icon === false || icon === "false") {
        return;
      } // Image source option


      if (typeof icon === 'string' && icon.length > 1) {
        this.setAttribute('icon', "\n                <img src=\"".concat(icon, "\" alt=\"Toggle Dropdown\" width=\"30px\" />\n            "));
        return;
      } // Default option -- uses SVG chevron that Google Material UI uses


      this.setAttribute('icon', "\n            <svg\n                focusable=\"false\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n                viewBox=\"0 0 24 24\"\n            >\n                <path d=\"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z\"></path>\n            </svg>\n        ");
    }
    /**
     * Load Menu Items
     *
     * @description Pull in the elements inside the <drop-down> and initialize them as menu items.
     */

  }, {
    key: "_loadMenuItems",
    value: function _loadMenuItems() {
      var _this2 = this;

      // IMPORTANT NOTE: A unique ID is REQUIRED to be placed as an attribute on the component
      // or loading the menu items will not work correctly!
      var items = document.querySelectorAll("drop-down[id=\"".concat(this._id, "\"] > *"));

      if (items.length > 0) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          var _loop = function _loop() {
            var item = _step.value;
            // Set handler to close dropdown when item is selected
            var that = _this2;

            item.onclick = function (event) {
              that._toggleOpen(event, true);

              return event;
            };

            if (item.getAttribute('type') === "divider") {
              // Divider type
              item.className = "ux-dropdown__menu__item ux-dropdown__menu__divider";
              item.innerHTML = "<hr />";
            } else if (item.getAttribute('type') === "link") {
              // Link type
              var href = item.getAttribute('href');
              item.className = "ux-dropdown__menu__item";
              item.innerHTML = "<a href=\"" + href + "\">" + item.innerHTML + "</a>";
            } else {
              item.className = "ux-dropdown__menu__item";
              item.innerHTML = "<span>" + item.innerHTML + "</span>";
            }

            _this2.$dropDownMenu.appendChild(item);
          };

          for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            _loop();
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } else {
        console.log('[COMPONENT_ERROR] <drop-down> component cannot initialize with empty items.');
      }
    }
  }]);

  return DropDown;
}(_webcomponent.default);

_webcomponent.default.addCustomElement('drop-down', DropDown);
},{"../base/template":"components/base/template.js","../base/webcomponent":"components/base/webcomponent.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56262" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","components/dropdown/dropdown.js"], null)
//# sourceMappingURL=/dropdown.a91f52d8.js.map