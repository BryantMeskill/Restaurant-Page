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

  image.src = "a0f8a4358407b9aa07cd.png";
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

  image.src = "266ca63177bca6f330a7.png";
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

  mainImage.src = "d248d26897f3f67b219e.jpg";
  mainImage.alt = "A dish of chicken and rice.";

  desc.innerHTML =
    "Welcome to Tres Amigos Mexican restaraunt. We've been serving the<br>local community delicious, authentic Mexican cuisine for over 40 years.<br>We take pride in every customer served, and look forward to seeing you<br>and your family for many more years to come. Thanks for your continued<br>patronage! Check the menu and call us if you have any questions.";

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

  image.src = "34cf90e00bbacf8ada4c.jpg";
  image.alt = "Dish of Chicken and Rice";
  imageTwo.src = "32f6edc86281c98dccd9.jpg";
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

/***/ "./src/assets/img/chickenandrice.jpg":
/*!*******************************************!*\
  !*** ./src/assets/img/chickenandrice.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34cf90e00bbacf8ada4c.jpg";

/***/ }),

/***/ "./src/assets/img/github.png":
/*!***********************************!*\
  !*** ./src/assets/img/github.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "266ca63177bca6f330a7.png";

/***/ }),

/***/ "./src/assets/img/headerstyle.png":
/*!****************************************!*\
  !*** ./src/assets/img/headerstyle.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fde89307b8b7885102d9.png";

/***/ }),

/***/ "./src/assets/img/map.png":
/*!********************************!*\
  !*** ./src/assets/img/map.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0f8a4358407b9aa07cd.png";

/***/ }),

/***/ "./src/assets/img/spread.jpg":
/*!***********************************!*\
  !*** ./src/assets/img/spread.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d248d26897f3f67b219e.jpg";

/***/ }),

/***/ "./src/assets/img/streettacos.jpg":
/*!****************************************!*\
  !*** ./src/assets/img/streettacos.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "32f6edc86281c98dccd9.jpg";

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
/* harmony import */ var _assets_img_chickenandrice_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/img/chickenandrice.jpg */ "./src/assets/img/chickenandrice.jpg");
/* harmony import */ var _assets_img_streettacos_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/img/streettacos.jpg */ "./src/assets/img/streettacos.jpg");
/* harmony import */ var _assets_img_github_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/img/github.png */ "./src/assets/img/github.png");
/* harmony import */ var _assets_img_headerstyle_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/img/headerstyle.png */ "./src/assets/img/headerstyle.png");
/* harmony import */ var _assets_img_map_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/img/map.png */ "./src/assets/img/map.png");
/* harmony import */ var _assets_img_spread_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/img/spread.jpg */ "./src/assets/img/spread.jpg");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _frontPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./frontPage */ "./src/frontPage.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact */ "./src/contact.js");













const content = document.querySelector(".content");
content.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_7__["default"])());
content.appendChild((0,_frontPage__WEBPACK_IMPORTED_MODULE_9__["default"])());
content.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_8__["default"])());

const handleClick = (renderContentCallback) => {
  content.innerHTML = "";
  content.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_7__["default"])());
  content.appendChild(renderContentCallback());
  content.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_8__["default"])());
  render();
};

function render() {
  const homeBtn = document.querySelector(".home");
  const menuBtn = document.querySelector(".menu");
  const contactBtn = document.querySelector(".contact");

  homeBtn.addEventListener("click", () => {
    handleClick(_frontPage__WEBPACK_IMPORTED_MODULE_9__["default"]);
  });

  menuBtn.addEventListener("click", () => {
    handleClick(_menu__WEBPACK_IMPORTED_MODULE_10__["default"]);
  });

  contactBtn.addEventListener("click", () => {
    handleClick(_contact__WEBPACK_IMPORTED_MODULE_11__["default"]);
  });
}

render();
//removes child Nodes, but will leave behind event handlers, which can cause memory leak.
//content.innerHTML = "";

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDOztBQUUvQztBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5QmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3RkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJxQjtBQUNzQztBQUNIO0FBQ047QUFDSztBQUNYO0FBQ0k7QUFDWjtBQUNBO0FBQ0M7QUFDTDtBQUNNOztBQUV0QztBQUNBLG9CQUFvQixtREFBWTtBQUNoQyxvQkFBb0Isc0RBQVU7QUFDOUIsb0JBQW9CLG1EQUFZOztBQUVoQztBQUNBO0FBQ0Esc0JBQXNCLG1EQUFZO0FBQ2xDO0FBQ0Esc0JBQXNCLG1EQUFZO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isa0RBQVU7QUFDMUIsR0FBRzs7QUFFSDtBQUNBLGdCQUFnQiw4Q0FBVTtBQUMxQixHQUFHOztBQUVIO0FBQ0EsZ0JBQWdCLGlEQUFhO0FBQzdCLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ycC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcnAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3JwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9ycC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3JwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3JwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3JwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ycC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ycC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ycC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3JwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcnAvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9ycC8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcnAvLi9zcmMvZnJvbnRQYWdlLmpzIiwid2VicGFjazovL3JwLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9ycC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3JwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3JwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ycC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3JwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcnAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ycC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9ycC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9ycC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2Fzc2V0cy9mb250cy9Sb2JvdG8tTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL3NyYy9hc3NldHMvZm9udHMvQmViYXNOZXVlLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2Fzc2V0cy9pbWcvaGVhZGVyc3R5bGUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwidHRmXFxcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmViYXMgTmV1ZVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ0dGZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xcbiAgZnJvbSB7XFxuICAgIG1hcmdpbi10b3A6IDUwMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtaW4ge1xcbiAgZnJvbSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MDBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjkxMDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTEwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBib3JkZXI6IHNvbGlkIDNweCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjc0OThlO1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG4udGl0bGUtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNzQ5OGU7XFxufVxcblxcbi5idG4tY29udGFpbmVyIHtcXG4gIGJvcmRlci10b3A6IHNvbGlkIDNweCB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNzQ5OGU7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIG1hcmdpbjogMTBweCAyMHB4IDIwcHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYWxpY2VibHVlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5ob21lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNzQ5OGU7XFxufVxcblxcbi5tZW51IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdlOTE7XFxufVxcblxcbi5jb250YWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjkxMDA7XFxufVxcblxcbi50aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNjBweDtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNzQ5OGU7XFxuICBmb250LWZhbWlseTogXFxcImJlYmFzIG5ldWVcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiA0NXB4O1xcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbn1cXG5cXG4uc3VidGl0bGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2U5MTtcXG4gIGJvcmRlcjogc29saWQgM3B4IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJiZWJhcyBuZXVlXFxcIiwgY3Vyc2l2ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogNDVweDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAxLjJzO1xcbn1cXG5cXG5wIHtcXG4gIGJvcmRlcjogc29saWQgM3B4IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2U5MTtcXG4gIHBhZGRpbmc6IDExNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJyb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAxLjVzO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbi5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxufVxcblxcbi5pbWcge1xcbiAgb3BhY2l0eTogMDtcXG4gIC8qIGJvdGggYWxsb3dzIHRoZSBpbWFnZSB0byBiZSBpbnZpc2libGUgYmVmb3JlIGFuaW1hdGlvblxcbiAgICBhbmQgYWxzbyBrZWVwcyBpdCB2aXNpYmxlIGFmdGVyIGFuaW1hdGlvbiAoc2V0IGNsYXNzIG9wYWNpdHkgdG8gMCEpICovXFxuICBhbmltYXRpb246IHNsaWRlLWluIDNzIGVhc2UgMC44cyBib3RoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTEwMDtcXG59XFxuXFxuLmltYWdlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbiAzcyBlYXNlIDAuOHMgYm90aDtcXG59XFxuXFxuLm1lbnUtaW1nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5tZW51LWRlc2Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I3NDk4ZTtcXG4gIHBhZGRpbmc6IDQ1cHg7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMjVweDtcXG59XFxuXFxuLm1lbnUtbGlzdCB7XFxuICBmb250LWZhbWlseTogXFxcInJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3ZTkxO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgcGFkZGluZzogNDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IHNvbGlkIDNweCB3aGl0ZTtcXG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMS42cyBlYXNlO1xcbn1cXG5cXG4uY29udGFjdC1kZXNjIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNzQ5OGU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAzNXB4O1xcbn1cXG5cXG4uaW5mbyB7XFxuICBmb250LWZhbWlseTogXFxcInJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBib3JkZXI6IHNvbGlkIDNweCB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdlOTE7XFxuICBwYWRkaW5nOiA2MHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJyb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAxLjVzO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDBEQUErRDtFQUMvRCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDBEQUFtRTtFQUNuRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsbURBQW9EO0VBQ3BELDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsU0FBUztFQUNULHlCQUF5QjtFQUN6QixrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTtFQUNWO3lFQUN1RTtFQUN2RSxxQ0FBcUM7RUFDckMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyx5QkFBeUI7RUFDekIsU0FBUztFQUNULGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL3NyYy9hc3NldHMvZm9udHMvUm9ib3RvLU1lZGl1bS50dGZcXFwiKSBmb3JtYXQoXFxcInR0ZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJlYmFzIE5ldWVcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL3NyYy9hc3NldHMvZm9udHMvQmViYXNOZXVlLVJlZ3VsYXIudHRmXFxcIikgZm9ybWF0KFxcXCJ0dGZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xcbiAgZnJvbSB7XFxuICAgIG1hcmdpbi10b3A6IDUwMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtaW4ge1xcbiAgZnJvbSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MDBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjkxMDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTEwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBib3JkZXI6IHNvbGlkIDNweCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjc0OThlO1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG4udGl0bGUtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNzQ5OGU7XFxufVxcblxcbi5idG4tY29udGFpbmVyIHtcXG4gIGJvcmRlci10b3A6IHNvbGlkIDNweCB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNzQ5OGU7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uL3NyYy9hc3NldHMvaW1nL2hlYWRlcnN0eWxlLnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIG1hcmdpbjogMTBweCAyMHB4IDIwcHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYWxpY2VibHVlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5ob21lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNzQ5OGU7XFxufVxcblxcbi5tZW51IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdlOTE7XFxufVxcblxcbi5jb250YWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjkxMDA7XFxufVxcblxcbi50aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNjBweDtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNzQ5OGU7XFxuICBmb250LWZhbWlseTogXFxcImJlYmFzIG5ldWVcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiA0NXB4O1xcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbn1cXG5cXG4uc3VidGl0bGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2U5MTtcXG4gIGJvcmRlcjogc29saWQgM3B4IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJiZWJhcyBuZXVlXFxcIiwgY3Vyc2l2ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogNDVweDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAxLjJzO1xcbn1cXG5cXG5wIHtcXG4gIGJvcmRlcjogc29saWQgM3B4IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2U5MTtcXG4gIHBhZGRpbmc6IDExNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJyb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAxLjVzO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbi5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxufVxcblxcbi5pbWcge1xcbiAgb3BhY2l0eTogMDtcXG4gIC8qIGJvdGggYWxsb3dzIHRoZSBpbWFnZSB0byBiZSBpbnZpc2libGUgYmVmb3JlIGFuaW1hdGlvblxcbiAgICBhbmQgYWxzbyBrZWVwcyBpdCB2aXNpYmxlIGFmdGVyIGFuaW1hdGlvbiAoc2V0IGNsYXNzIG9wYWNpdHkgdG8gMCEpICovXFxuICBhbmltYXRpb246IHNsaWRlLWluIDNzIGVhc2UgMC44cyBib3RoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTEwMDtcXG59XFxuXFxuLmltYWdlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbiAzcyBlYXNlIDAuOHMgYm90aDtcXG59XFxuXFxuLm1lbnUtaW1nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5tZW51LWRlc2Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I3NDk4ZTtcXG4gIHBhZGRpbmc6IDQ1cHg7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMjVweDtcXG59XFxuXFxuLm1lbnUtbGlzdCB7XFxuICBmb250LWZhbWlseTogXFxcInJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3ZTkxO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgcGFkZGluZzogNDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IHNvbGlkIDNweCB3aGl0ZTtcXG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMS42cyBlYXNlO1xcbn1cXG5cXG4uY29udGFjdC1kZXNjIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNzQ5OGU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAzNXB4O1xcbn1cXG5cXG4uaW5mbyB7XFxuICBmb250LWZhbWlseTogXFxcInJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBib3JkZXI6IHNvbGlkIDNweCB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdlOTE7XFxuICBwYWRkaW5nOiA2MHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJyb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAxLjVzO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyQ29udGFjdCgpIHtcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib2xcIik7XG5cbiAgY29uc3QgZGF5cyA9IFtcbiAgICBcIkhPVVJTXCIsXG4gICAgXCJNb25kYXkgMTItOFwiLFxuICAgIFwiVHVlc2RheSAxMi04XCIsXG4gICAgXCJXZWRuZXNkYXkgMTItOFwiLFxuICAgIFwiVGh1cnNkYXkgMTItOFwiLFxuICAgIFwiRnJpZGF5IDEyLTEwXCIsXG4gICAgXCJTYXR1cmRheSAxMi0xMFwiLFxuICAgIFwiU3VuZGF5IDExLTdcIixcbiAgXTtcblxuICBpbWFnZS5zcmMgPSBcImEwZjhhNDM1ODQwN2I5YWEwN2NkLnBuZ1wiO1xuICBpbWFnZS5hbHQgPSBcIkEgbWFwIG9mIHN0b3JlIGxvY2F0aW9uXCI7XG5cbiAgZGVzYy5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1kZXNjXCIpO1xuICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwiaW1nXCIpO1xuICBpbmZvLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uXCIpO1xuICBzdWJ0aXRsZS5jbGFzc0xpc3QuYWRkKFwic3VidGl0bGVcIik7XG5cbiAgc3VidGl0bGUudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXNcIjtcbiAgZGVzYy5pbm5lckhUTUwgPSBcIjY5NTcgU2FudGEgRmUgQXZlIFNFLCBBbGJ1cXVlcnF1ZSwgTk08YnI+8J+TnigxMjMpNDU2LTc4OTBcIjtcblxuICAvL2NyZWF0ZSBsaXN0IGVsZW1lbnQgZm9yIGVhY2ggZGF5IGFuZCBhcHBlbmQgdG8gcGFyZW50IG9sXG4gIGRheXMuZm9yRWFjaCgoZGF5KSA9PiB7XG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpLmlubmVyVGV4dCA9IGRheTtcbiAgICBpbmZvLmFwcGVuZENoaWxkKGxpKTtcbiAgfSk7XG5cbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChzdWJ0aXRsZSk7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKGRlc2MpO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gIHJldHVybiBzZWN0aW9uO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IHVzZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG4gIHVzZXJMaW5rLmNsYXNzTGlzdC5hZGQoXCJ1c2VyLWxpbmtcIik7XG5cbiAgaW1hZ2Uuc3JjID0gXCIyNjZjYTYzMTc3YmNhNmYzMzBhNy5wbmdcIjtcbiAgaW1hZ2UuYWx0ID0gXCJCcnlhbnQgTWVza2lsbCdzIEdpdEh1YlwiO1xuICB1c2VyTGluay5ocmVmID0gXCJodHRwczovL3d3dy5naXRodWIuY29tL0JyeWFudE1lc2tpbGxcIjtcblxuICB1c2VyTGluay5hcHBlbmRDaGlsZChpbWFnZSk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZCh1c2VyTGluayk7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlck1haW4oKSB7XG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgbWFpbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIG1haW5JbWFnZS5jbGFzc0xpc3QuYWRkKFwiaW1nXCIpO1xuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uXCIpO1xuICBkZXNjLmNsYXNzTGlzdC5hZGQoXCJkZXNjXCIpO1xuXG4gIG1haW5JbWFnZS5zcmMgPSBcImQyNDhkMjY4OTdmM2Y2N2IyMTllLmpwZ1wiO1xuICBtYWluSW1hZ2UuYWx0ID0gXCJBIGRpc2ggb2YgY2hpY2tlbiBhbmQgcmljZS5cIjtcblxuICBkZXNjLmlubmVySFRNTCA9XG4gICAgXCJXZWxjb21lIHRvIFRyZXMgQW1pZ29zIE1leGljYW4gcmVzdGFyYXVudC4gV2UndmUgYmVlbiBzZXJ2aW5nIHRoZTxicj5sb2NhbCBjb21tdW5pdHkgZGVsaWNpb3VzLCBhdXRoZW50aWMgTWV4aWNhbiBjdWlzaW5lIGZvciBvdmVyIDQwIHllYXJzLjxicj5XZSB0YWtlIHByaWRlIGluIGV2ZXJ5IGN1c3RvbWVyIHNlcnZlZCwgYW5kIGxvb2sgZm9yd2FyZCB0byBzZWVpbmcgeW91PGJyPmFuZCB5b3VyIGZhbWlseSBmb3IgbWFueSBtb3JlIHllYXJzIHRvIGNvbWUuIFRoYW5rcyBmb3IgeW91ciBjb250aW51ZWQ8YnI+cGF0cm9uYWdlISBDaGVjayB0aGUgbWVudSBhbmQgY2FsbCB1cyBpZiB5b3UgaGF2ZSBhbnkgcXVlc3Rpb25zLlwiO1xuXG4gIC8vc2V0dGluZyB0aGlzIGNzcyBzdHlsZSBhbGxvd3MgbmV3IGxpbmUgaW4gdGV4dENvbnRlbnRcbiAgZGVzYy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndoaXRlLXNwYWNlOiBwcmU7XCIpO1xuXG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQobWFpbkltYWdlKTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChkZXNjKTtcblxuICByZXR1cm4gc2VjdGlvbjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckhlYWRlcigpIHtcbiAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiVHJlcyBBbWlnb3MgTWV4aWNhbiBSZXN0YXJhdW50XCI7XG4gIGhvbWVCdG4udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgbWVudUJ0bi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG5cbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICB0aXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGl0bGUtY29udGFpbmVyXCIpO1xuICBidG5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ0bi1jb250YWluZXJcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICBob21lQnRuLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuXG4gIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVCdG4pO1xuICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG4gIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlck1lbnUoKSB7XG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IGltYWdlVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgYmVlZk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbnN0IGNoaWNrZW5NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBzaWRlc01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbnN0IGRyaW5rc01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cbiAgY29uc3QgYmVlZiA9IFtcbiAgICBcIkJFRUY6XCIsXG4gICAgXCJRdWVzYWRpbGxhIC0gJDkuMjlcIixcbiAgICBcIlN0cmVldCBUYWNvcyAtICQxMS45OVwiLFxuICAgIFwiQmVlZnkgTmFjaG9zIC0gJDEyLjQ5XCIsXG4gICAgXCJCZWVmeSBRdWVzbyBEaXAgLSAkNi40OVwiLFxuICAgIFwiS2lkcyBUYWNvIC0gJDIuNDlcIixcbiAgXTtcblxuICBjb25zdCBjaGlja2VuID0gW1xuICAgIFwiQ0hJQ0tFTjpcIixcbiAgICBcIlF1ZXNhZGlsbGEgLSAkOS4yOVwiLFxuICAgIFwiU3RyZWV0IFRhY29zIC0gJDExLjk5XCIsXG4gICAgXCJDaGlja2VuIE5hY2hvcyAtICQxMi40OVwiLFxuICAgIFwiQ2hpY2tlbiBhbmQgUmljZSAtICQxMy40OVwiLFxuICAgIFwiS2lkcyBUYWNvIC0gJDIuNDlcIixcbiAgXTtcblxuICBjb25zdCBzaWRlcyA9IFtcbiAgICBcIlNJREVTOlwiLFxuICAgIFwiUXVlc28gLSAkNC45OVwiLFxuICAgIFwiR3VhYyAtICQ1Ljk5XCIsXG4gICAgXCJUb3J0aWxsYXMgM3BjIC0gJDMuOTlcIixcbiAgICBcIkNoaXBzIGFuZCBTYWxzYSAtICQ0Ljk5XCIsXG4gICAgXCJGbGFuIC0gNS45OVwiLFxuICBdO1xuXG4gIGNvbnN0IGRyaW5rcyA9IFtcbiAgICBcIkRSSU5LUzpcIixcbiAgICBcIlNvZnQgRHJpbmtzIC0gJDEuOTlcIixcbiAgICBcIlN3ZWV0IFRlYSAtICQxLjk5XCIsXG4gICAgXCJUZXF1aWxhIChzaG90KSAtICQ0Ljk5XCIsXG4gICAgXCJNYXJnYXJpdGEgLSAkNy45OVwiLFxuICAgIFwiVmlyZ2luIERhcXVpcmkgLSAkNi45OVwiLFxuICBdO1xuXG4gIGNyZWF0ZU1lbnUoYmVlZiwgYmVlZk1lbnUpO1xuICBjcmVhdGVNZW51KGNoaWNrZW4sIGNoaWNrZW5NZW51KTtcbiAgY3JlYXRlTWVudShzaWRlcywgc2lkZXNNZW51KTtcbiAgY3JlYXRlTWVudShkcmlua3MsIGRyaW5rc01lbnUpO1xuXG4gIGltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbWFnZS1jb250YWluZXJcIik7XG4gIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJtZW51LWltZ1wiKTtcbiAgaW1hZ2VUd28uY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1nXCIpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51LWxpc3RcIik7XG4gIHNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInNlY3Rpb25cIik7XG4gIHN1YnRpdGxlLmNsYXNzTGlzdC5hZGQoXCJzdWJ0aXRsZVwiKTtcbiAgZGVzYy5jbGFzc0xpc3QuYWRkKFwibWVudS1kZXNjXCIpO1xuXG4gIHN1YnRpdGxlLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIGRlc2MudGV4dENvbnRlbnQgPVxuICAgIFwiU29tZSBpdGVtcyBhcmUgc3ViamVjdCB0byBhdmFpbGFiaWxpdHkgb2YgZnJlc2ggbG9jYWwgaW5ncmVkaWVudHMuXCI7XG5cbiAgaW1hZ2Uuc3JjID0gXCIzNGNmOTBlMDBiYmFjZjhhZGE0Yy5qcGdcIjtcbiAgaW1hZ2UuYWx0ID0gXCJEaXNoIG9mIENoaWNrZW4gYW5kIFJpY2VcIjtcbiAgaW1hZ2VUd28uc3JjID0gXCIzMmY2ZWRjODYyODFjOThkY2NkOS5qcGdcIjtcbiAgaW1hZ2VUd28uYWx0ID0gXCJEaXNoIG9mIHRhY29zXCI7XG5cbiAgbWVudS5hcHBlbmRDaGlsZChiZWVmTWVudSk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoY2hpY2tlbk1lbnUpO1xuICBtZW51LmFwcGVuZENoaWxkKHNpZGVzTWVudSk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoZHJpbmtzTWVudSk7XG5cbiAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZVR3byk7XG5cbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChzdWJ0aXRsZSk7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaW1hZ2VDb250YWluZXIpO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKGRlc2MpO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gIHJldHVybiBzZWN0aW9uO1xufVxuXG5jb25zdCBjcmVhdGVNZW51ID0gKGFycmF5LCB1bCkgPT4ge1xuICBhcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpLmlubmVyVGV4dCA9IGl0ZW07XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICB9KTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgbWVudUltYWdlT25lIGZyb20gXCIuL2Fzc2V0cy9pbWcvY2hpY2tlbmFuZHJpY2UuanBnXCI7XG5pbXBvcnQgbWVudUltYWdlVHdvIGZyb20gXCIuL2Fzc2V0cy9pbWcvc3RyZWV0dGFjb3MuanBnXCI7XG5pbXBvcnQgZm9vdGVySW1hZ2UgZnJvbSBcIi4vYXNzZXRzL2ltZy9naXRodWIucG5nXCI7XG5pbXBvcnQgaGVhZGVySW1hZ2UgZnJvbSBcIi4vYXNzZXRzL2ltZy9oZWFkZXJzdHlsZS5wbmdcIjtcbmltcG9ydCBtYXBJbWFnZSBmcm9tIFwiLi9hc3NldHMvaW1nL21hcC5wbmdcIjtcbmltcG9ydCBtYWluSW1hZ2UgZnJvbSBcIi4vYXNzZXRzL2ltZy9zcHJlYWQuanBnXCI7XG5pbXBvcnQgcmVuZGVySGVhZGVyIGZyb20gXCIuL2hlYWRlclwiO1xuaW1wb3J0IHJlbmRlckZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCByZW5kZXJNYWluIGZyb20gXCIuL2Zyb250UGFnZVwiO1xuaW1wb3J0IHJlbmRlck1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHJlbmRlckNvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuY29udGVudC5hcHBlbmRDaGlsZChyZW5kZXJIZWFkZXIoKSk7XG5jb250ZW50LmFwcGVuZENoaWxkKHJlbmRlck1haW4oKSk7XG5jb250ZW50LmFwcGVuZENoaWxkKHJlbmRlckZvb3RlcigpKTtcblxuY29uc3QgaGFuZGxlQ2xpY2sgPSAocmVuZGVyQ29udGVudENhbGxiYWNrKSA9PiB7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29udGVudC5hcHBlbmRDaGlsZChyZW5kZXJIZWFkZXIoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmVuZGVyQ29udGVudENhbGxiYWNrKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHJlbmRlckZvb3RlcigpKTtcbiAgcmVuZGVyKCk7XG59O1xuXG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVcIik7XG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XG4gIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3RcIik7XG5cbiAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGhhbmRsZUNsaWNrKHJlbmRlck1haW4pO1xuICB9KTtcblxuICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaGFuZGxlQ2xpY2socmVuZGVyTWVudSk7XG4gIH0pO1xuXG4gIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBoYW5kbGVDbGljayhyZW5kZXJDb250YWN0KTtcbiAgfSk7XG59XG5cbnJlbmRlcigpO1xuLy9yZW1vdmVzIGNoaWxkIE5vZGVzLCBidXQgd2lsbCBsZWF2ZSBiZWhpbmQgZXZlbnQgaGFuZGxlcnMsIHdoaWNoIGNhbiBjYXVzZSBtZW1vcnkgbGVhay5cbi8vY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9