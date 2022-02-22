/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/fonts/Roboto-Medium.ttf */ "./src/assets/fonts/Roboto-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/fonts/BebasNeue-Regular.ttf */ "./src/assets/fonts/BebasNeue-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/img/headerstyle.png */ "./src/assets/img/headerstyle.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: \"Roboto\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"ttf\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Bebas Neue\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"ttf\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n@keyframes slide-up {\n  from {\n    margin-top: 500px;\n    opacity: 0;\n  }\n\n  to {\n    margin-top: 0px;\n    opacity: 1;\n  }\n}\n\n@keyframes slide-in {\n  from {\n    margin-left: 500px;\n    opacity: 0;\n  }\n\n  to {\n    margin-left: 0px;\n    opacity: 1;\n  }\n}\n\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\nbody {\n  background-color: #ff9100;\n  margin: 0;\n}\n\n.content {\n  margin: 0px;\n  padding: 0px;\n  background-color: #ff9100;\n  text-align: center;\n}\n\n.header {\n  border: solid 3px rgb(255, 255, 255);\n  background-color: #b7498e;\n  padding: 0px;\n}\n\n.title-container {\n  background-color: #b7498e;\n}\n\n.btn-container {\n  border-top: solid 3px white;\n  background-color: #b7498e;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: no-repeat;\n}\n\nbutton {\n  font-family: \"roboto\", sans-serif;\n  font-size: 25px;\n  margin: 10px 20px 20px;\n  padding: 15px;\n  border: solid 1px aliceblue;\n  border-radius: 10px;\n  color: aliceblue;\n  transition: 0.2s;\n}\n\nbutton:hover {\n  font-size: 30px;\n  transition: 0.2s;\n}\n\nbutton:active {\n  background-color: white;\n  font-size: 35px;\n  transition: 0.2s;\n}\n\n.home {\n  background-color: #b7498e;\n}\n\n.menu {\n  background-color: #007e91;\n}\n\n.contact {\n  background-color: #ff9100;\n}\n\n.title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 60px;\n  margin: 0;\n  background-color: #b7498e;\n  font-family: \"bebas neue\", cursive;\n  font-size: 45px;\n  color: rgb(255, 255, 255);\n  animation: slide-up 1s;\n  animation-fill-mode: both;\n}\n\n.subtitle {\n  background-color: #007e91;\n  border: solid 3px white;\n  font-family: \"bebas neue\", cursive;\n  color: white;\n  font-size: 45px;\n  margin: 0px;\n  animation: slide-up 1.2s;\n}\n\np {\n  border: solid 3px white;\n  background-color: #007e91;\n  padding: 115px;\n  color: white;\n  font-family: \"roboto\", sans-serif;\n  font-size: 30px;\n  animation: slide-up 1.5s;\n  animation-fill-mode: forwards;\n}\n\n.footer {\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n}\n\n.img {\n  opacity: 0;\n  /* both allows the image to be invisible before animation\n    and also keeps it visible after animation (set class opacity to 0!) */\n  animation: slide-in 3s ease 0.8s both;\n  background-color: #ff9100;\n}\n\n.image-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  animation: slide-in 3s ease 0.8s both;\n}\n\n.menu-img {\n  border-radius: 20px;\n  padding: 5px;\n}\n\n.menu-desc {\n  background-color: #b7498e;\n  padding: 45px;\n  margin: 0px;\n}\n\nul {\n  list-style: none;\n  margin: 25px;\n}\n\n.menu-list {\n  font-family: \"roboto\", sans-serif;\n  background-color: #007e91;\n  color: white;\n  font-size: 25px;\n  padding: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: solid 3px white;\n  animation: slide-up 1.6s ease;\n}\n\n.contact-desc {\n  font-family: \"roboto\", sans-serif;\n  background-color: #b7498e;\n  margin: 0;\n  padding: 35px;\n}\n\n.info {\n  font-family: \"roboto\", sans-serif;\n  border: solid 3px white;\n  background-color: #007e91;\n  padding: 60px;\n  color: white;\n  font-family: \"roboto\", sans-serif;\n  font-size: 30px;\n  animation: slide-up 1.5s;\n  animation-fill-mode: forwards;\n  list-style: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,0DAA+D;EAC/D,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,0DAAmE;EACnE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE;IACE,iBAAiB;IACjB,UAAU;EACZ;;EAEA;IACE,eAAe;IACf,UAAU;EACZ;AACF;;AAEA;EACE;IACE,kBAAkB;IAClB,UAAU;EACZ;;EAEA;IACE,gBAAgB;IAChB,UAAU;EACZ;AACF;;AAEA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;AACF;;AAEA;EACE,yBAAyB;EACzB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;EACpC,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;EAC3B,yBAAyB;EACzB,mDAAoD;EACpD,4BAA4B;AAC9B;;AAEA;EACE,iCAAiC;EACjC,eAAe;EACf,sBAAsB;EACtB,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;EACvB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,SAAS;EACT,yBAAyB;EACzB,kCAAkC;EAClC,eAAe;EACf,yBAAyB;EACzB,sBAAsB;EACtB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;EACvB,kCAAkC;EAClC,YAAY;EACZ,eAAe;EACf,WAAW;EACX,wBAAwB;AAC1B;;AAEA;EACE,uBAAuB;EACvB,yBAAyB;EACzB,cAAc;EACd,YAAY;EACZ,iCAAiC;EACjC,eAAe;EACf,wBAAwB;EACxB,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,eAAe;EACf,SAAS;AACX;;AAEA;EACE,UAAU;EACV;yEACuE;EACvE,qCAAqC;EACrC,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,qCAAqC;AACvC;;AAEA;EACE,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,iCAAiC;EACjC,yBAAyB;EACzB,YAAY;EACZ,eAAe;EACf,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,uBAAuB;EACvB,6BAA6B;AAC/B;;AAEA;EACE,iCAAiC;EACjC,yBAAyB;EACzB,SAAS;EACT,aAAa;AACf;;AAEA;EACE,iCAAiC;EACjC,uBAAuB;EACvB,yBAAyB;EACzB,aAAa;EACb,YAAY;EACZ,iCAAiC;EACjC,eAAe;EACf,wBAAwB;EACxB,6BAA6B;EAC7B,gBAAgB;AAClB","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: \"Roboto\";\n  src: url(\"../src/assets/fonts/Roboto-Medium.ttf\") format(\"ttf\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Bebas Neue\";\n  src: url(\"../src/assets/fonts/BebasNeue-Regular.ttf\") format(\"ttf\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n@keyframes slide-up {\n  from {\n    margin-top: 500px;\n    opacity: 0;\n  }\n\n  to {\n    margin-top: 0px;\n    opacity: 1;\n  }\n}\n\n@keyframes slide-in {\n  from {\n    margin-left: 500px;\n    opacity: 0;\n  }\n\n  to {\n    margin-left: 0px;\n    opacity: 1;\n  }\n}\n\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\nbody {\n  background-color: #ff9100;\n  margin: 0;\n}\n\n.content {\n  margin: 0px;\n  padding: 0px;\n  background-color: #ff9100;\n  text-align: center;\n}\n\n.header {\n  border: solid 3px rgb(255, 255, 255);\n  background-color: #b7498e;\n  padding: 0px;\n}\n\n.title-container {\n  background-color: #b7498e;\n}\n\n.btn-container {\n  border-top: solid 3px white;\n  background-color: #b7498e;\n  background: url(\"../src/assets/img/headerstyle.png\");\n  background-repeat: no-repeat;\n}\n\nbutton {\n  font-family: \"roboto\", sans-serif;\n  font-size: 25px;\n  margin: 10px 20px 20px;\n  padding: 15px;\n  border: solid 1px aliceblue;\n  border-radius: 10px;\n  color: aliceblue;\n  transition: 0.2s;\n}\n\nbutton:hover {\n  font-size: 30px;\n  transition: 0.2s;\n}\n\nbutton:active {\n  background-color: white;\n  font-size: 35px;\n  transition: 0.2s;\n}\n\n.home {\n  background-color: #b7498e;\n}\n\n.menu {\n  background-color: #007e91;\n}\n\n.contact {\n  background-color: #ff9100;\n}\n\n.title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 60px;\n  margin: 0;\n  background-color: #b7498e;\n  font-family: \"bebas neue\", cursive;\n  font-size: 45px;\n  color: rgb(255, 255, 255);\n  animation: slide-up 1s;\n  animation-fill-mode: both;\n}\n\n.subtitle {\n  background-color: #007e91;\n  border: solid 3px white;\n  font-family: \"bebas neue\", cursive;\n  color: white;\n  font-size: 45px;\n  margin: 0px;\n  animation: slide-up 1.2s;\n}\n\np {\n  border: solid 3px white;\n  background-color: #007e91;\n  padding: 115px;\n  color: white;\n  font-family: \"roboto\", sans-serif;\n  font-size: 30px;\n  animation: slide-up 1.5s;\n  animation-fill-mode: forwards;\n}\n\n.footer {\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n}\n\n.img {\n  opacity: 0;\n  /* both allows the image to be invisible before animation\n    and also keeps it visible after animation (set class opacity to 0!) */\n  animation: slide-in 3s ease 0.8s both;\n  background-color: #ff9100;\n}\n\n.image-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  animation: slide-in 3s ease 0.8s both;\n}\n\n.menu-img {\n  border-radius: 20px;\n  padding: 5px;\n}\n\n.menu-desc {\n  background-color: #b7498e;\n  padding: 45px;\n  margin: 0px;\n}\n\nul {\n  list-style: none;\n  margin: 25px;\n}\n\n.menu-list {\n  font-family: \"roboto\", sans-serif;\n  background-color: #007e91;\n  color: white;\n  font-size: 25px;\n  padding: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: solid 3px white;\n  animation: slide-up 1.6s ease;\n}\n\n.contact-desc {\n  font-family: \"roboto\", sans-serif;\n  background-color: #b7498e;\n  margin: 0;\n  padding: 35px;\n}\n\n.info {\n  font-family: \"roboto\", sans-serif;\n  border: solid 3px white;\n  background-color: #007e91;\n  padding: 60px;\n  color: white;\n  font-family: \"roboto\", sans-serif;\n  font-size: 30px;\n  animation: slide-up 1.5s;\n  animation-fill-mode: forwards;\n  list-style: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderContact)
/* harmony export */ });
function renderContact() {
  const section = document.createElement("div");
  const subtitle = document.createElement("h1");
  const desc = document.createElement("p");
  const image = document.createElement("img");
  const address = document.createElement("div");
  const info = document.createElement("ol");

  const days = [
    "HOURS",
    "Monday 12-8",
    "Tuesday 12-8",
    "Wednesday 12-8",
    "Thursday 12-8",
    "Friday 12-10",
    "Saturday 12-10",
    "Sunday 11-7",
  ];

  image.src = "../src/assets/img/map.png";
  image.alt = "A map of store location";

  desc.classList.add("contact-desc");
  image.classList.add("img");
  info.classList.add("info");
  section.classList.add("section");
  subtitle.classList.add("subtitle");

  subtitle.textContent = "Contact Us";
  desc.innerHTML = "6957 Santa Fe Ave SE, Albuquerque, NM<br>📞(123)456-7890";

  //create list element for each day and append to parent ol
  days.forEach((day) => {
    let li = document.createElement("li");
    li.innerText = day;
    info.appendChild(li);
  });

  section.appendChild(subtitle);
  section.appendChild(image);
  section.appendChild(desc);
  section.appendChild(info);

  return section;
}


/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderFooter)
/* harmony export */ });
function renderFooter() {
  const footer = document.createElement("div");
  const image = document.createElement("img");
  const userLink = document.createElement("a");

  footer.classList.add("footer");
  userLink.classList.add("user-link");

  image.src = "../src/assets/img/github.png";
  image.alt = "Bryant Meskill's GitHub";
  userLink.href = "https://www.github.com/BryantMeskill";

  userLink.appendChild(image);
  footer.appendChild(userLink);

  return footer;
}


/***/ }),

/***/ "./src/frontPage.js":
/*!**************************!*\
  !*** ./src/frontPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderMain)
/* harmony export */ });
function renderMain() {
  const section = document.createElement("div");
  const title = document.createElement("h1");
  const mainImage = document.createElement("img");
  const desc = document.createElement("p");

  mainImage.classList.add("img");
  section.classList.add("section");
  desc.classList.add("desc");

  mainImage.src = "../src/assets/img/spread.jpg";
  mainImage.alt = "A dish of chicken and rice.";

  desc.textContent =
    "Welcome to Tres Amigos Mexican restaraunt. We've been serving the\n";
  desc.textContent +=
    "local community delicious, authentic Mexican cuisine for over 40 years.\n";
  desc.textContent +=
    "We take pride in every customer served, and look forward to seeing you\n";
  desc.textContent +=
    "and your family for many more years to come. Thanks for your continued\n";
  desc.textContent +=
    "patronage! Check the menu and call us if you have any questions.";

  //setting this css style allows new line in textContent
  desc.setAttribute("style", "white-space: pre;");

  section.appendChild(mainImage);
  section.appendChild(desc);

  return section;
}


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderHeader)
/* harmony export */ });
function renderHeader() {
  const titleContainer = document.createElement("div");
  const title = document.createElement("h1");
  const header = document.createElement("div");
  const btnContainer = document.createElement("div");
  const homeBtn = document.createElement("button");
  const menuBtn = document.createElement("button");
  const contactBtn = document.createElement("button");

  title.textContent = "Tres Amigos Mexican Restaraunt";
  homeBtn.textContent = "Home";
  menuBtn.textContent = "Menu";
  contactBtn.textContent = "Contact";

  title.classList.add("title");
  titleContainer.classList.add("title-container");
  btnContainer.classList.add("btn-container");
  header.classList.add("header");
  homeBtn.classList.add("home");
  menuBtn.classList.add("menu");
  contactBtn.classList.add("contact");

  titleContainer.appendChild(title);
  btnContainer.appendChild(homeBtn);
  btnContainer.appendChild(menuBtn);
  btnContainer.appendChild(contactBtn);
  header.appendChild(titleContainer);
  header.appendChild(btnContainer);

  return header;
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderMenu)
/* harmony export */ });
function renderMenu() {
  const section = document.createElement("div");
  const subtitle = document.createElement("h1");
  const desc = document.createElement("p");
  const menu = document.createElement("div");
  const imageContainer = document.createElement("div");
  const image = document.createElement("img");
  const imageTwo = document.createElement("img");
  const beefMenu = document.createElement("ul");
  const chickenMenu = document.createElement("ul");
  const sidesMenu = document.createElement("ul");
  const drinksMenu = document.createElement("ul");

  const beef = [
    "BEEF:",
    "Quesadilla - $9.29",
    "Street Tacos - $11.99",
    "Beefy Nachos - $12.49",
    "Beefy Queso Dip - $6.49",
    "Kids Taco - $2.49",
  ];

  const chicken = [
    "CHICKEN:",
    "Quesadilla - $9.29",
    "Street Tacos - $11.99",
    "Chicken Nachos - $12.49",
    "Chicken and Rice - $13.49",
    "Kids Taco - $2.49",
  ];

  const sides = [
    "SIDES:",
    "Queso - $4.99",
    "Guac - $5.99",
    "Tortillas 3pc - $3.99",
    "Chips and Salsa - $4.99",
    "Flan - 5.99",
  ];

  const drinks = [
    "DRINKS:",
    "Soft Drinks - $1.99",
    "Sweet Tea - $1.99",
    "Tequila (shot) - $4.99",
    "Margarita - $7.99",
    "Virgin Daquiri - $6.99",
  ];

  createMenu(beef, beefMenu);
  createMenu(chicken, chickenMenu);
  createMenu(sides, sidesMenu);
  createMenu(drinks, drinksMenu);

  imageContainer.classList.add("image-container");
  image.classList.add("menu-img");
  imageTwo.classList.add("menu-img");
  menu.classList.add("menu-list");
  section.classList.add("section");
  subtitle.classList.add("subtitle");
  desc.classList.add("menu-desc");

  subtitle.textContent = "Menu";
  desc.textContent =
    "Some items are subject to availability of fresh local ingredients.";

  image.src = "../src/assets/img/chickenandrice.jpg";
  image.alt = "Dish of Chicken and Rice";
  imageTwo.src = "../src/assets/img/streettacos.jpg";
  imageTwo.alt = "Dish of tacos";

  menu.appendChild(beefMenu);
  menu.appendChild(chickenMenu);
  menu.appendChild(sidesMenu);
  menu.appendChild(drinksMenu);

  imageContainer.appendChild(image);
  imageContainer.appendChild(imageTwo);

  section.appendChild(subtitle);
  section.appendChild(imageContainer);
  section.appendChild(desc);
  section.appendChild(menu);

  return section;
}

const createMenu = (array, ul) => {
  array.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    ul.appendChild(li);
  });
};


/***/ }),

/***/ "./src/assets/fonts/BebasNeue-Regular.ttf":
/*!************************************************!*\
  !*** ./src/assets/fonts/BebasNeue-Regular.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "12e3683f9192436a7be8.ttf";

/***/ }),

/***/ "./src/assets/fonts/Roboto-Medium.ttf":
/*!********************************************!*\
  !*** ./src/assets/fonts/Roboto-Medium.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7429a63c09f79a1760b0.ttf";

/***/ }),

/***/ "./src/assets/img/headerstyle.png":
/*!****************************************!*\
  !*** ./src/assets/img/headerstyle.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fde89307b8b7885102d9.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _frontPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./frontPage */ "./src/frontPage.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ "./src/contact.js");







const content = document.querySelector(".content");
content.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_1__["default"])());
content.appendChild((0,_frontPage__WEBPACK_IMPORTED_MODULE_3__["default"])());
content.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_2__["default"])());

const handleClick = (renderContentCallback) => {
  content.innerHTML = "";
  content.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_1__["default"])());
  content.appendChild(renderContentCallback());
  content.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_2__["default"])());
  render();
};

function render() {
  const homeBtn = document.querySelector(".home");
  const menuBtn = document.querySelector(".menu");
  const contactBtn = document.querySelector(".contact");

  homeBtn.addEventListener("click", () => {
    handleClick(_frontPage__WEBPACK_IMPORTED_MODULE_3__["default"]);
  });

  menuBtn.addEventListener("click", () => {
    handleClick(_menu__WEBPACK_IMPORTED_MODULE_4__["default"]);
  });

  contactBtn.addEventListener("click", () => {
    handleClick(_contact__WEBPACK_IMPORTED_MODULE_5__["default"]);
  });
}

render();
//removes child Nodes, but will leave behind event handlers, which can cause memory leak.
//content.innerHTML = "";

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQzs7QUFFL0M7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMvQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzdGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnFCO0FBQ2U7QUFDQTtBQUNDO0FBQ0w7QUFDTTs7QUFFdEM7QUFDQSxvQkFBb0IsbURBQVk7QUFDaEMsb0JBQW9CLHNEQUFVO0FBQzlCLG9CQUFvQixtREFBWTs7QUFFaEM7QUFDQTtBQUNBLHNCQUFzQixtREFBWTtBQUNsQztBQUNBLHNCQUFzQixtREFBWTtBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLGtEQUFVO0FBQzFCLEdBQUc7O0FBRUg7QUFDQSxnQkFBZ0IsNkNBQVU7QUFDMUIsR0FBRzs7QUFFSDtBQUNBLGdCQUFnQixnREFBYTtBQUM3QixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3JwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ycC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcnAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ycC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9ycC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ycC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcnAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcnAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcnAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ycC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3JwLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcnAvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3JwLy4vc3JjL2Zyb250UGFnZS5qcyIsIndlYnBhY2s6Ly9ycC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcnAvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9ycC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ycC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ycC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcnAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9ycC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcnAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcnAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL3NyYy9hc3NldHMvZm9udHMvUm9ib3RvLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvYXNzZXRzL2ZvbnRzL0JlYmFzTmV1ZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL3NyYy9hc3NldHMvaW1nL2hlYWRlcnN0eWxlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcInR0ZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJlYmFzIE5ldWVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwidHRmXFxcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcXG4gIGZyb20ge1xcbiAgICBtYXJnaW4tdG9wOiA1MDBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWluIHtcXG4gIGZyb20ge1xcbiAgICBtYXJnaW4tbGVmdDogNTAwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZSB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5MTAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjkxMDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYm9yZGVyOiBzb2xpZCAzcHggcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I3NDk4ZTtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuLnRpdGxlLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjc0OThlO1xcbn1cXG5cXG4uYnRuLWNvbnRhaW5lciB7XFxuICBib3JkZXItdG9wOiBzb2xpZCAzcHggd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjc0OThlO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogXFxcInJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBtYXJnaW46IDEwcHggMjBweCAyMHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlcjogc29saWQgMXB4IGFsaWNlYmx1ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDM1cHg7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4uaG9tZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjc0OThlO1xcbn1cXG5cXG4ubWVudSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3ZTkxO1xcbn1cXG5cXG4uY29udGFjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5MTAwO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDYwcHg7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjc0OThlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJiZWJhcyBuZXVlXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogNDVweDtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBhbmltYXRpb246IHNsaWRlLXVwIDFzO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG59XFxuXFxuLnN1YnRpdGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdlOTE7XFxuICBib3JkZXI6IHNvbGlkIDNweCB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiYmViYXMgbmV1ZVxcXCIsIGN1cnNpdmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDQ1cHg7XFxuICBtYXJnaW46IDBweDtcXG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMS4ycztcXG59XFxuXFxucCB7XFxuICBib3JkZXI6IHNvbGlkIDNweCB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdlOTE7XFxuICBwYWRkaW5nOiAxMTVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMS41cztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG4uaW1nIHtcXG4gIG9wYWNpdHk6IDA7XFxuICAvKiBib3RoIGFsbG93cyB0aGUgaW1hZ2UgdG8gYmUgaW52aXNpYmxlIGJlZm9yZSBhbmltYXRpb25cXG4gICAgYW5kIGFsc28ga2VlcHMgaXQgdmlzaWJsZSBhZnRlciBhbmltYXRpb24gKHNldCBjbGFzcyBvcGFjaXR5IHRvIDAhKSAqL1xcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbiAzcyBlYXNlIDAuOHMgYm90aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjkxMDA7XFxufVxcblxcbi5pbWFnZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFuaW1hdGlvbjogc2xpZGUtaW4gM3MgZWFzZSAwLjhzIGJvdGg7XFxufVxcblxcbi5tZW51LWltZyB7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ubWVudS1kZXNjIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNzQ5OGU7XFxuICBwYWRkaW5nOiA0NXB4O1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDI1cHg7XFxufVxcblxcbi5tZW51LWxpc3Qge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJyb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2U5MTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIHBhZGRpbmc6IDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiBzb2xpZCAzcHggd2hpdGU7XFxuICBhbmltYXRpb246IHNsaWRlLXVwIDEuNnMgZWFzZTtcXG59XFxuXFxuLmNvbnRhY3QtZGVzYyB7XFxuICBmb250LWZhbWlseTogXFxcInJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjc0OThlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMzVweDtcXG59XFxuXFxuLmluZm8ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJyb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgYm9yZGVyOiBzb2xpZCAzcHggd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3ZTkxO1xcbiAgcGFkZGluZzogNjBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMS41cztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwwREFBK0Q7RUFDL0QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwwREFBbUU7RUFDbkUsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGVBQWU7SUFDZixVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLG1EQUFvRDtFQUNwRCw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsY0FBYztFQUNkLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLHdCQUF3QjtFQUN4Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFVBQVU7RUFDVjt5RUFDdUU7RUFDdkUscUNBQXFDO0VBQ3JDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9zcmMvYXNzZXRzL2ZvbnRzL1JvYm90by1NZWRpdW0udHRmXFxcIikgZm9ybWF0KFxcXCJ0dGZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCZWJhcyBOZXVlXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9zcmMvYXNzZXRzL2ZvbnRzL0JlYmFzTmV1ZS1SZWd1bGFyLnR0ZlxcXCIpIGZvcm1hdChcXFwidHRmXFxcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcXG4gIGZyb20ge1xcbiAgICBtYXJnaW4tdG9wOiA1MDBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWluIHtcXG4gIGZyb20ge1xcbiAgICBtYXJnaW4tbGVmdDogNTAwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZSB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5MTAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjkxMDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYm9yZGVyOiBzb2xpZCAzcHggcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I3NDk4ZTtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuLnRpdGxlLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjc0OThlO1xcbn1cXG5cXG4uYnRuLWNvbnRhaW5lciB7XFxuICBib3JkZXItdG9wOiBzb2xpZCAzcHggd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjc0OThlO1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi9zcmMvYXNzZXRzL2ltZy9oZWFkZXJzdHlsZS5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogXFxcInJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBtYXJnaW46IDEwcHggMjBweCAyMHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlcjogc29saWQgMXB4IGFsaWNlYmx1ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDM1cHg7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4uaG9tZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjc0OThlO1xcbn1cXG5cXG4ubWVudSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3ZTkxO1xcbn1cXG5cXG4uY29udGFjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5MTAwO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDYwcHg7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjc0OThlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJiZWJhcyBuZXVlXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogNDVweDtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBhbmltYXRpb246IHNsaWRlLXVwIDFzO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG59XFxuXFxuLnN1YnRpdGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdlOTE7XFxuICBib3JkZXI6IHNvbGlkIDNweCB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiYmViYXMgbmV1ZVxcXCIsIGN1cnNpdmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDQ1cHg7XFxuICBtYXJnaW46IDBweDtcXG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMS4ycztcXG59XFxuXFxucCB7XFxuICBib3JkZXI6IHNvbGlkIDNweCB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdlOTE7XFxuICBwYWRkaW5nOiAxMTVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMS41cztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG4uaW1nIHtcXG4gIG9wYWNpdHk6IDA7XFxuICAvKiBib3RoIGFsbG93cyB0aGUgaW1hZ2UgdG8gYmUgaW52aXNpYmxlIGJlZm9yZSBhbmltYXRpb25cXG4gICAgYW5kIGFsc28ga2VlcHMgaXQgdmlzaWJsZSBhZnRlciBhbmltYXRpb24gKHNldCBjbGFzcyBvcGFjaXR5IHRvIDAhKSAqL1xcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbiAzcyBlYXNlIDAuOHMgYm90aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjkxMDA7XFxufVxcblxcbi5pbWFnZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFuaW1hdGlvbjogc2xpZGUtaW4gM3MgZWFzZSAwLjhzIGJvdGg7XFxufVxcblxcbi5tZW51LWltZyB7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ubWVudS1kZXNjIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNzQ5OGU7XFxuICBwYWRkaW5nOiA0NXB4O1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDI1cHg7XFxufVxcblxcbi5tZW51LWxpc3Qge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJyb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2U5MTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIHBhZGRpbmc6IDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiBzb2xpZCAzcHggd2hpdGU7XFxuICBhbmltYXRpb246IHNsaWRlLXVwIDEuNnMgZWFzZTtcXG59XFxuXFxuLmNvbnRhY3QtZGVzYyB7XFxuICBmb250LWZhbWlseTogXFxcInJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjc0OThlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMzVweDtcXG59XFxuXFxuLmluZm8ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJyb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgYm9yZGVyOiBzb2xpZCAzcHggd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3ZTkxO1xcbiAgcGFkZGluZzogNjBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMS41cztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckNvbnRhY3QoKSB7XG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9sXCIpO1xuXG4gIGNvbnN0IGRheXMgPSBbXG4gICAgXCJIT1VSU1wiLFxuICAgIFwiTW9uZGF5IDEyLThcIixcbiAgICBcIlR1ZXNkYXkgMTItOFwiLFxuICAgIFwiV2VkbmVzZGF5IDEyLThcIixcbiAgICBcIlRodXJzZGF5IDEyLThcIixcbiAgICBcIkZyaWRheSAxMi0xMFwiLFxuICAgIFwiU2F0dXJkYXkgMTItMTBcIixcbiAgICBcIlN1bmRheSAxMS03XCIsXG4gIF07XG5cbiAgaW1hZ2Uuc3JjID0gXCIuLi9zcmMvYXNzZXRzL2ltZy9tYXAucG5nXCI7XG4gIGltYWdlLmFsdCA9IFwiQSBtYXAgb2Ygc3RvcmUgbG9jYXRpb25cIjtcblxuICBkZXNjLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWRlc2NcIik7XG4gIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJpbWdcIik7XG4gIGluZm8uY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gIHNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInNlY3Rpb25cIik7XG4gIHN1YnRpdGxlLmNsYXNzTGlzdC5hZGQoXCJzdWJ0aXRsZVwiKTtcblxuICBzdWJ0aXRsZS50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiO1xuICBkZXNjLmlubmVySFRNTCA9IFwiNjk1NyBTYW50YSBGZSBBdmUgU0UsIEFsYnVxdWVycXVlLCBOTTxicj7wn5OeKDEyMyk0NTYtNzg5MFwiO1xuXG4gIC8vY3JlYXRlIGxpc3QgZWxlbWVudCBmb3IgZWFjaCBkYXkgYW5kIGFwcGVuZCB0byBwYXJlbnQgb2xcbiAgZGF5cy5mb3JFYWNoKChkYXkpID0+IHtcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGkuaW5uZXJUZXh0ID0gZGF5O1xuICAgIGluZm8uYXBwZW5kQ2hpbGQobGkpO1xuICB9KTtcblxuICBzZWN0aW9uLmFwcGVuZENoaWxkKHN1YnRpdGxlKTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChpbWFnZSk7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoZGVzYyk7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgcmV0dXJuIHNlY3Rpb247XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgdXNlckxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxuICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcbiAgdXNlckxpbmsuY2xhc3NMaXN0LmFkZChcInVzZXItbGlua1wiKTtcblxuICBpbWFnZS5zcmMgPSBcIi4uL3NyYy9hc3NldHMvaW1nL2dpdGh1Yi5wbmdcIjtcbiAgaW1hZ2UuYWx0ID0gXCJCcnlhbnQgTWVza2lsbCdzIEdpdEh1YlwiO1xuICB1c2VyTGluay5ocmVmID0gXCJodHRwczovL3d3dy5naXRodWIuY29tL0JyeWFudE1lc2tpbGxcIjtcblxuICB1c2VyTGluay5hcHBlbmRDaGlsZChpbWFnZSk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZCh1c2VyTGluayk7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlck1haW4oKSB7XG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgbWFpbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIG1haW5JbWFnZS5jbGFzc0xpc3QuYWRkKFwiaW1nXCIpO1xuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uXCIpO1xuICBkZXNjLmNsYXNzTGlzdC5hZGQoXCJkZXNjXCIpO1xuXG4gIG1haW5JbWFnZS5zcmMgPSBcIi4uL3NyYy9hc3NldHMvaW1nL3NwcmVhZC5qcGdcIjtcbiAgbWFpbkltYWdlLmFsdCA9IFwiQSBkaXNoIG9mIGNoaWNrZW4gYW5kIHJpY2UuXCI7XG5cbiAgZGVzYy50ZXh0Q29udGVudCA9XG4gICAgXCJXZWxjb21lIHRvIFRyZXMgQW1pZ29zIE1leGljYW4gcmVzdGFyYXVudC4gV2UndmUgYmVlbiBzZXJ2aW5nIHRoZVxcblwiO1xuICBkZXNjLnRleHRDb250ZW50ICs9XG4gICAgXCJsb2NhbCBjb21tdW5pdHkgZGVsaWNpb3VzLCBhdXRoZW50aWMgTWV4aWNhbiBjdWlzaW5lIGZvciBvdmVyIDQwIHllYXJzLlxcblwiO1xuICBkZXNjLnRleHRDb250ZW50ICs9XG4gICAgXCJXZSB0YWtlIHByaWRlIGluIGV2ZXJ5IGN1c3RvbWVyIHNlcnZlZCwgYW5kIGxvb2sgZm9yd2FyZCB0byBzZWVpbmcgeW91XFxuXCI7XG4gIGRlc2MudGV4dENvbnRlbnQgKz1cbiAgICBcImFuZCB5b3VyIGZhbWlseSBmb3IgbWFueSBtb3JlIHllYXJzIHRvIGNvbWUuIFRoYW5rcyBmb3IgeW91ciBjb250aW51ZWRcXG5cIjtcbiAgZGVzYy50ZXh0Q29udGVudCArPVxuICAgIFwicGF0cm9uYWdlISBDaGVjayB0aGUgbWVudSBhbmQgY2FsbCB1cyBpZiB5b3UgaGF2ZSBhbnkgcXVlc3Rpb25zLlwiO1xuXG4gIC8vc2V0dGluZyB0aGlzIGNzcyBzdHlsZSBhbGxvd3MgbmV3IGxpbmUgaW4gdGV4dENvbnRlbnRcbiAgZGVzYy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndoaXRlLXNwYWNlOiBwcmU7XCIpO1xuXG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQobWFpbkltYWdlKTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChkZXNjKTtcblxuICByZXR1cm4gc2VjdGlvbjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckhlYWRlcigpIHtcbiAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiVHJlcyBBbWlnb3MgTWV4aWNhbiBSZXN0YXJhdW50XCI7XG4gIGhvbWVCdG4udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgbWVudUJ0bi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG5cbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICB0aXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGl0bGUtY29udGFpbmVyXCIpO1xuICBidG5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ0bi1jb250YWluZXJcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICBob21lQnRuLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuXG4gIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVCdG4pO1xuICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG4gIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlck1lbnUoKSB7XG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IGltYWdlVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgYmVlZk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbnN0IGNoaWNrZW5NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBzaWRlc01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbnN0IGRyaW5rc01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cbiAgY29uc3QgYmVlZiA9IFtcbiAgICBcIkJFRUY6XCIsXG4gICAgXCJRdWVzYWRpbGxhIC0gJDkuMjlcIixcbiAgICBcIlN0cmVldCBUYWNvcyAtICQxMS45OVwiLFxuICAgIFwiQmVlZnkgTmFjaG9zIC0gJDEyLjQ5XCIsXG4gICAgXCJCZWVmeSBRdWVzbyBEaXAgLSAkNi40OVwiLFxuICAgIFwiS2lkcyBUYWNvIC0gJDIuNDlcIixcbiAgXTtcblxuICBjb25zdCBjaGlja2VuID0gW1xuICAgIFwiQ0hJQ0tFTjpcIixcbiAgICBcIlF1ZXNhZGlsbGEgLSAkOS4yOVwiLFxuICAgIFwiU3RyZWV0IFRhY29zIC0gJDExLjk5XCIsXG4gICAgXCJDaGlja2VuIE5hY2hvcyAtICQxMi40OVwiLFxuICAgIFwiQ2hpY2tlbiBhbmQgUmljZSAtICQxMy40OVwiLFxuICAgIFwiS2lkcyBUYWNvIC0gJDIuNDlcIixcbiAgXTtcblxuICBjb25zdCBzaWRlcyA9IFtcbiAgICBcIlNJREVTOlwiLFxuICAgIFwiUXVlc28gLSAkNC45OVwiLFxuICAgIFwiR3VhYyAtICQ1Ljk5XCIsXG4gICAgXCJUb3J0aWxsYXMgM3BjIC0gJDMuOTlcIixcbiAgICBcIkNoaXBzIGFuZCBTYWxzYSAtICQ0Ljk5XCIsXG4gICAgXCJGbGFuIC0gNS45OVwiLFxuICBdO1xuXG4gIGNvbnN0IGRyaW5rcyA9IFtcbiAgICBcIkRSSU5LUzpcIixcbiAgICBcIlNvZnQgRHJpbmtzIC0gJDEuOTlcIixcbiAgICBcIlN3ZWV0IFRlYSAtICQxLjk5XCIsXG4gICAgXCJUZXF1aWxhIChzaG90KSAtICQ0Ljk5XCIsXG4gICAgXCJNYXJnYXJpdGEgLSAkNy45OVwiLFxuICAgIFwiVmlyZ2luIERhcXVpcmkgLSAkNi45OVwiLFxuICBdO1xuXG4gIGNyZWF0ZU1lbnUoYmVlZiwgYmVlZk1lbnUpO1xuICBjcmVhdGVNZW51KGNoaWNrZW4sIGNoaWNrZW5NZW51KTtcbiAgY3JlYXRlTWVudShzaWRlcywgc2lkZXNNZW51KTtcbiAgY3JlYXRlTWVudShkcmlua3MsIGRyaW5rc01lbnUpO1xuXG4gIGltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbWFnZS1jb250YWluZXJcIik7XG4gIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJtZW51LWltZ1wiKTtcbiAgaW1hZ2VUd28uY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1nXCIpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51LWxpc3RcIik7XG4gIHNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInNlY3Rpb25cIik7XG4gIHN1YnRpdGxlLmNsYXNzTGlzdC5hZGQoXCJzdWJ0aXRsZVwiKTtcbiAgZGVzYy5jbGFzc0xpc3QuYWRkKFwibWVudS1kZXNjXCIpO1xuXG4gIHN1YnRpdGxlLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIGRlc2MudGV4dENvbnRlbnQgPVxuICAgIFwiU29tZSBpdGVtcyBhcmUgc3ViamVjdCB0byBhdmFpbGFiaWxpdHkgb2YgZnJlc2ggbG9jYWwgaW5ncmVkaWVudHMuXCI7XG5cbiAgaW1hZ2Uuc3JjID0gXCIuLi9zcmMvYXNzZXRzL2ltZy9jaGlja2VuYW5kcmljZS5qcGdcIjtcbiAgaW1hZ2UuYWx0ID0gXCJEaXNoIG9mIENoaWNrZW4gYW5kIFJpY2VcIjtcbiAgaW1hZ2VUd28uc3JjID0gXCIuLi9zcmMvYXNzZXRzL2ltZy9zdHJlZXR0YWNvcy5qcGdcIjtcbiAgaW1hZ2VUd28uYWx0ID0gXCJEaXNoIG9mIHRhY29zXCI7XG5cbiAgbWVudS5hcHBlbmRDaGlsZChiZWVmTWVudSk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoY2hpY2tlbk1lbnUpO1xuICBtZW51LmFwcGVuZENoaWxkKHNpZGVzTWVudSk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoZHJpbmtzTWVudSk7XG5cbiAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZVR3byk7XG5cbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChzdWJ0aXRsZSk7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaW1hZ2VDb250YWluZXIpO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKGRlc2MpO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gIHJldHVybiBzZWN0aW9uO1xufVxuXG5jb25zdCBjcmVhdGVNZW51ID0gKGFycmF5LCB1bCkgPT4ge1xuICBhcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpLmlubmVyVGV4dCA9IGl0ZW07XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICB9KTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgcmVuZGVySGVhZGVyIGZyb20gXCIuL2hlYWRlclwiO1xuaW1wb3J0IHJlbmRlckZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCByZW5kZXJNYWluIGZyb20gXCIuL2Zyb250UGFnZVwiO1xuaW1wb3J0IHJlbmRlck1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHJlbmRlckNvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuY29udGVudC5hcHBlbmRDaGlsZChyZW5kZXJIZWFkZXIoKSk7XG5jb250ZW50LmFwcGVuZENoaWxkKHJlbmRlck1haW4oKSk7XG5jb250ZW50LmFwcGVuZENoaWxkKHJlbmRlckZvb3RlcigpKTtcblxuY29uc3QgaGFuZGxlQ2xpY2sgPSAocmVuZGVyQ29udGVudENhbGxiYWNrKSA9PiB7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29udGVudC5hcHBlbmRDaGlsZChyZW5kZXJIZWFkZXIoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmVuZGVyQ29udGVudENhbGxiYWNrKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHJlbmRlckZvb3RlcigpKTtcbiAgcmVuZGVyKCk7XG59O1xuXG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVcIik7XG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XG4gIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3RcIik7XG5cbiAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGhhbmRsZUNsaWNrKHJlbmRlck1haW4pO1xuICB9KTtcblxuICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaGFuZGxlQ2xpY2socmVuZGVyTWVudSk7XG4gIH0pO1xuXG4gIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBoYW5kbGVDbGljayhyZW5kZXJDb250YWN0KTtcbiAgfSk7XG59XG5cbnJlbmRlcigpO1xuLy9yZW1vdmVzIGNoaWxkIE5vZGVzLCBidXQgd2lsbCBsZWF2ZSBiZWhpbmQgZXZlbnQgaGFuZGxlcnMsIHdoaWNoIGNhbiBjYXVzZSBtZW1vcnkgbGVhay5cbi8vY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9