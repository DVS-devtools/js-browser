// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"jKkA":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @memberof JsBrowser
 * @function getQueryParams
 * @description Return the query params object (this will work only if query params
 * are after the hashbang)
 * @returns {Object} {queryParamsKey1: queryParamsValue1, queryParamsKey2: queryParamsValue2... }

 *
 * @example
 * import Browser from 'js-browser';
 *
 *
 * const queryParams = Browser.getQueryParams();
 */
var _default = function _default() {
  // take from BarneyBrowser.getQueryParams, we can change this after
  var url = window.location.href;
  var vars = {};
  var hash;

  if (url.indexOf('?') !== -1) {
    var querystring = url.slice(url.indexOf('?') + 1);

    if (querystring) {
      var hashes = querystring.split('&');

      for (var i = 0; i < hashes.length; i += 1) {
        if (hashes[i].indexOf('=') !== -1) {
          hash = hashes[i].split('=');
          vars[hash[0]] = window.decodeURIComponent(hash[1]);
        }
      }
    }
  }

  return vars;
};

exports.default = _default;
},{}],"Focm":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getQueryParams = _interopRequireDefault(require("./getQueryParams"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Browser =
/*#__PURE__*/
function () {
  function Browser() {
    _classCallCheck(this, Browser);

    this.currentPage = null;
    this.prevPage = null;
    /**
     * @see modules/getQueryParams
     */

    this.getQueryParams = _getQueryParams.default;
    this.shiftPage = this.shiftPage.bind(this);
    this.getPrevPage = this.getPrevPage.bind(this);
  }
  /**
   * @memberof JsBrowser
   * @function shiftPage
   * @description Adapt the Browser.prevPage and Browser.currentPage
   * according to route's changement.
   *
   * **NB:** route changements must be specified in your routing changement function observer
   * @param {String} currentPage set the previous page to the actual Browser.currentPage, then
   * set the Browser.currentPage to the given new value
   *
   * @example
   * // Browser.shiftPage();
   *
   * import Browser from 'js-browser';
   *
   *
   * Browser.shiftPage('/newPage');
   */


  _createClass(Browser, [{
    key: "shiftPage",
    value: function shiftPage(currentPage) {
      if (currentPage && this.currentPage !== currentPage) {
        this.prevPage = this.currentPage;
        this.currentPage = currentPage;
      }
    }
    /**
     * @memberof JsBrowser
     * @function getPrevPage
     * @description Return the previous page you visited, if is empty, then returns null.
     *
     * @returns {String} previous page visited (ie: '/home')
     *
     * @example
     * // Browser.getPrevPage();
     *
     * import Browser from 'js-browser';
     *
     *
     * const prevPage = Browser.getPrevPage(); // '/home'
     */

  }, {
    key: "getPrevPage",
    value: function getPrevPage() {
      return this.prevPage;
    }
  }]);

  return Browser;
}();

var _default = new Browser();

exports.default = _default;
},{"./getQueryParams":"jKkA"}]},{},["Focm"], null)