parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"jKkA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(){var e,t=window.location.href,i={};if(-1!==t.indexOf("?")){var o=t.slice(t.indexOf("?")+1);if(o)for(var r=o.split("&"),n=0;n<r.length;n+=1)-1!==r[n].indexOf("=")&&(i[(e=r[n].split("="))[0]]=window.decodeURIComponent(e[1]))}return i};exports.default=e;
},{}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./getQueryParams"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}var i=function(){function t(){r(this,t),this.currentPage=null,this.prevPage=null,this.getQueryParams=e.default,this.shiftPage=this.shiftPage.bind(this),this.getPrevPage=this.getPrevPage.bind(this)}return a(t,[{key:"shiftPage",value:function(e){e&&this.currentPage!==e&&(this.prevPage=this.currentPage,this.currentPage=e)}},{key:"getPrevPage",value:function(){return this.prevPage}}]),t}(),u=new i;exports.default=u;
},{"./getQueryParams":"jKkA"}]},{},["Focm"], "JsBrowser")
//# sourceMappingURL=/index.umd.map