"use strict";
(self["webpackChunkspace_project"] = self["webpackChunkspace_project"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  font-family: 'Roboto', sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #00081d;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding: 30px 50px;\r\n  justify-content: center;\r\n  background-color: rgba(239, 20, 20, 0.4);\r\n}\r\n\r\nheader span {\r\n  border: 2px solid rgb(240, 6, 6);\r\n  border-radius: 5%;\r\n  padding: 5px 5px;\r\n}\r\n\r\nheader span a {\r\n  text-decoration: none;\r\n  color: rgb(255, 255, 255);\r\n}\r\n\r\nheader h3 {\r\n  font-weight: 300;\r\n}\r\n\r\nheader nav ul {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding: 10px 0;\r\n}\r\n\r\nheader nav ul li {\r\n  padding: 0 40px;\r\n}\r\n\r\nheader nav ul li a {\r\n  text-decoration: none;\r\n  color: #fff;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 600;\r\n  transition: 0.4s;\r\n}\r\n\r\nheader nav ul li a:hover {\r\n  color: rgb(66, 244, 17);\r\n}\r\n\r\nheader nav ul li:first-child a {\r\n  text-decoration: underline;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 600;\r\n}\r\n\r\nfooter {\r\n  margin-top: auto;\r\n  padding: 20px 20px;\r\n  color: #fff;\r\n  background-color: rgba(239, 11, 11, 0.4);\r\n  text-align: center;\r\n}\r\n\r\n.cards-container {\r\n  padding: 50px 80px;\r\n  width: 84%;\r\n  display: flex;\r\n  margin: auto;\r\n}\r\n\r\n.cards {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n  height: 100%;\r\n  gap: 10px;\r\n  justify-content: space-between;\r\n  color: #fff;\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 15vw;\r\n  height: 100%;\r\n  border: 1px solid black;\r\n  background-color: #26073c;\r\n  border-radius: 3px;\r\n}\r\n\r\n.card button {\r\n  background-color: red;\r\n  border-radius: 2px;\r\n  margin: 3px;\r\n  font-size: 16px;\r\n  padding: 3px 0;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n  border: none;\r\n  color: #fff;\r\n}\r\n\r\n.card button:hover {\r\n  background-color: rgb(40, 40, 103);\r\n  color: #c9cbf2;\r\n}\r\n\r\n.likes {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-evenly;\r\n  padding: 8px 0;\r\n}\r\n\r\n.add-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.Likes-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.blur {\r\n  filter: blur(10px);\r\n  pointer-events: none;\r\n  user-select: none;\r\n}\r\n\r\n.fa-heart {\r\n  font-size: 30px;\r\n  color: red;\r\n  transition: 0.3s;\r\n}\r\n\r\n.fa-heart:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\n.add {\r\n  font-size: 20px;\r\n  color: #fff;\r\n}\r\n\r\n.Last-like {\r\n  color: red;\r\n}\r\n\r\n.popup-container {\r\n  position: fixed;\r\n  left: 50%;\r\n  transition: 0.5s ease-in-out;\r\n  width: 800px;\r\n  border: 2px solid brown;\r\n  height: 80%;\r\n  top: 5%;\r\n  transform: translate(-50%, 5%);\r\n  background: rgba(44, 3, 117, 0.6);\r\n  overflow: auto;\r\n  color: #fff;\r\n}\r\n\r\n.image {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 100%;\r\n}\r\n\r\n.image img {\r\n  padding-top: 10px;\r\n  width: 40%;\r\n  height: 50vh;\r\n  position: relative;\r\n  left: 10px;\r\n}\r\n\r\n.cross-btn {\r\n  display: flex;\r\n  position: relative;\r\n  left: 182px;\r\n  top: 20px;\r\n  font-size: 30px;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n.heading {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.ratingbox {\r\n  position: relative;\r\n  top: 20px;\r\n  width: 100%;\r\n  margin: auto;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.genresbox {\r\n  position: relative;\r\n  top: 40px;\r\n  width: 96%;\r\n  margin: auto;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.genresbox:last-child {\r\n  position: relative;\r\n  right: 20px;\r\n}\r\n\r\n.show-comments {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 700px;\r\n  margin: auto;\r\n  position: relative;\r\n  top: 88px;\r\n}\r\n\r\n.show-comments h3 {\r\n  display: flex;\r\n  justify-content: center;\r\n  font-size: 30px;\r\n}\r\n\r\n.show-comments p {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: 10px;\r\n  font-size: 20px;\r\n}\r\n\r\nform {\r\n  position: relative;\r\n  top: 119px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 600px;\r\n  margin: auto;\r\n}\r\n\r\nform h4 {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: 5px;\r\n  font-size: 30px;\r\n}\r\n\r\nform input {\r\n  padding: 10px;\r\n  margin: 20px 5px 5px 5px;\r\n  width: 285px;\r\n}\r\n\r\nform textarea {\r\n  padding: 10px;\r\n  margin: 5px;\r\n  outline: none;\r\n  border: 1px solid black;\r\n  resize: none;\r\n  width: 420px;\r\n}\r\n\r\n.popup-btn {\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  width: 107px;\r\n  margin-left: 4px;\r\n  margin-bottom: 5px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  font-family: 'Roboto', sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #00081d;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding: 30px 50px;\r\n  justify-content: center;\r\n  background-color: rgba(239, 20, 20, 0.4);\r\n}\r\n\r\nheader span {\r\n  border: 2px solid rgb(240, 6, 6);\r\n  border-radius: 5%;\r\n  padding: 5px 5px;\r\n}\r\n\r\nheader span a {\r\n  text-decoration: none;\r\n  color: rgb(255, 255, 255);\r\n}\r\n\r\nheader h3 {\r\n  font-weight: 300;\r\n}\r\n\r\nheader nav ul {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding: 10px 0;\r\n}\r\n\r\nheader nav ul li {\r\n  padding: 0 40px;\r\n}\r\n\r\nheader nav ul li a {\r\n  text-decoration: none;\r\n  color: #fff;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 600;\r\n  transition: 0.4s;\r\n}\r\n\r\nheader nav ul li a:hover {\r\n  color: rgb(66, 244, 17);\r\n}\r\n\r\nheader nav ul li:first-child a {\r\n  text-decoration: underline;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 600;\r\n}\r\n\r\nfooter {\r\n  margin-top: auto;\r\n  padding: 20px 20px;\r\n  color: #fff;\r\n  background-color: rgba(239, 11, 11, 0.4);\r\n  text-align: center;\r\n}\r\n\r\n.cards-container {\r\n  padding: 50px 80px;\r\n  width: 84%;\r\n  display: flex;\r\n  margin: auto;\r\n}\r\n\r\n.cards {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n  height: 100%;\r\n  gap: 10px;\r\n  justify-content: space-between;\r\n  color: #fff;\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 15vw;\r\n  height: 100%;\r\n  border: 1px solid black;\r\n  background-color: #26073c;\r\n  border-radius: 3px;\r\n}\r\n\r\n.card button {\r\n  background-color: red;\r\n  border-radius: 2px;\r\n  margin: 3px;\r\n  font-size: 16px;\r\n  padding: 3px 0;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n  border: none;\r\n  color: #fff;\r\n}\r\n\r\n.card button:hover {\r\n  background-color: rgb(40, 40, 103);\r\n  color: #c9cbf2;\r\n}\r\n\r\n.likes {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-evenly;\r\n  padding: 8px 0;\r\n}\r\n\r\n.add-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.Likes-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.blur {\r\n  filter: blur(10px);\r\n  pointer-events: none;\r\n  user-select: none;\r\n}\r\n\r\n.fa-heart {\r\n  font-size: 30px;\r\n  color: red;\r\n  transition: 0.3s;\r\n}\r\n\r\n.fa-heart:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\n.add {\r\n  font-size: 20px;\r\n  color: #fff;\r\n}\r\n\r\n.Last-like {\r\n  color: red;\r\n}\r\n\r\n.popup-container {\r\n  position: fixed;\r\n  left: 50%;\r\n  transition: 0.5s ease-in-out;\r\n  width: 800px;\r\n  border: 2px solid brown;\r\n  height: 80%;\r\n  top: 5%;\r\n  transform: translate(-50%, 5%);\r\n  background: rgba(44, 3, 117, 0.6);\r\n  overflow: auto;\r\n  color: #fff;\r\n}\r\n\r\n.image {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 100%;\r\n}\r\n\r\n.image img {\r\n  padding-top: 10px;\r\n  width: 40%;\r\n  height: 50vh;\r\n  position: relative;\r\n  left: 10px;\r\n}\r\n\r\n.cross-btn {\r\n  display: flex;\r\n  position: relative;\r\n  left: 182px;\r\n  top: 20px;\r\n  font-size: 30px;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n.heading {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.ratingbox {\r\n  position: relative;\r\n  top: 20px;\r\n  width: 100%;\r\n  margin: auto;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.genresbox {\r\n  position: relative;\r\n  top: 40px;\r\n  width: 96%;\r\n  margin: auto;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.genresbox:last-child {\r\n  position: relative;\r\n  right: 20px;\r\n}\r\n\r\n.show-comments {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 700px;\r\n  margin: auto;\r\n  position: relative;\r\n  top: 88px;\r\n}\r\n\r\n.show-comments h3 {\r\n  display: flex;\r\n  justify-content: center;\r\n  font-size: 30px;\r\n}\r\n\r\n.show-comments p {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: 10px;\r\n  font-size: 20px;\r\n}\r\n\r\nform {\r\n  position: relative;\r\n  top: 119px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 600px;\r\n  margin: auto;\r\n}\r\n\r\nform h4 {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: 5px;\r\n  font-size: 30px;\r\n}\r\n\r\nform input {\r\n  padding: 10px;\r\n  margin: 20px 5px 5px 5px;\r\n  width: 285px;\r\n}\r\n\r\nform textarea {\r\n  padding: 10px;\r\n  margin: 5px;\r\n  outline: none;\r\n  border: 1px solid black;\r\n  resize: none;\r\n  width: 420px;\r\n}\r\n\r\n.popup-btn {\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  width: 107px;\r\n  margin-left: 4px;\r\n  margin-bottom: 5px;\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display.js */ "./src/modules/display.js");



(0,_modules_display_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
document.addEventListener('DOMContentLoaded', _modules_display_js__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/modules/commentform.js":
/*!************************************!*\
  !*** ./src/modules/commentform.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commentform = () => (`<h4>Add a comment</h4>
    <input type="text" placeholder="Your name" required>
    <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Your Insights" required></textarea>
    <button class="popup-btn">Comment</button>`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentform);

/***/ }),

/***/ "./src/modules/commentscounter.js":
/*!****************************************!*\
  !*** ./src/modules/commentscounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commentcounter = () => {
  const showdivcontainer = document.querySelector('.show-comments');
  const showdivAllPtags = document.querySelectorAll('.show-comments p');
  const ptag = document.querySelector('.show-comments p');
  const h3 = document.createElement('h3');
  h3.innerText = `Comments (${showdivAllPtags.length})`;
  showdivcontainer.insertBefore(h3, ptag);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentcounter);

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _displaypopup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displaypopup.js */ "./src/modules/displaypopup.js");
/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLikes.js */ "./src/modules/getLikes.js");
/* harmony import */ var _likeCounts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likeCounts.js */ "./src/modules/likeCounts.js");




async function retrevingdata() {
  const results = [];
  for (let i = 1; i < 9; i += 1) {
    results.push(fetch(`https://api.tvmaze.com/shows/${i}`).then((res) => res.json()));
  }
  const dt = Promise.all(results);
  return dt;
}

const cardscounter = () => {
  const cardlen = document.querySelector('#cardlen');
  const cards = document.querySelectorAll('.cards .card');
  cardlen.innerHTML = `Show(${cards.length})`;
};

const display = async () => {
  const datas = await retrevingdata();
  const container = document.querySelector('.cards');
  datas.forEach((cur) => {
    container.innerHTML += `
  <div id=${cur.id} class="card">
  <img src="${cur.image.medium}" alt="">
  <div class="add-container">
  <div class="likes"><h4>${cur.name}</h4></div>
  <div class="Likes-container">
  <div class="Like-icon">
      <span><i class="fa-regular fa-heart like-btn" data-id="${cur.id}"></i></span>
  </div>
  <div class="Likes-Span">
      <span data-item-id="${cur.id}" class="add"></span>
      <span class="Last-like">Likes</span>
  </div>
  </div>
  <button class="comment-btn">Comments</button>
</div>
  `;
    (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const likeBtn = document.querySelectorAll('.like-btn');
    likeBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const val = Number(e.target.dataset.id);
        (0,_likeCounts_js__WEBPACK_IMPORTED_MODULE_2__["default"])(val);
      });
    });
  });
  cardscounter();
  (0,_displaypopup_js__WEBPACK_IMPORTED_MODULE_0__.popup)();
};

display();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (retrevingdata);

/***/ }),

/***/ "./src/modules/displaypopup.js":
/*!*************************************!*\
  !*** ./src/modules/displaypopup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displaypopup": () => (/* binding */ displaypopup),
/* harmony export */   "popup": () => (/* binding */ popup)
/* harmony export */ });
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ "./src/modules/display.js");
/* harmony import */ var _commentform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentform.js */ "./src/modules/commentform.js");
/* harmony import */ var _showcomments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showcomments.js */ "./src/modules/showcomments.js");




const body = document.querySelector('body');
const header = document.querySelector('header');
const cardscontainer = document.querySelector('.cards-container');
const footer = document.querySelector('footer');
const addclasses = () => {
  header.classList.add('blur');
  cardscontainer.classList.add('blur');
  footer.classList.add('blur');
  body.style.overflow = 'hidden';
};

const removeclasses = () => {
  const crossbtn = document.querySelector('.cross-btn');
  crossbtn.addEventListener('click', () => {
    header.classList.remove('blur');
    cardscontainer.classList.remove('blur');
    footer.classList.remove('blur');
    body.lastElementChild.remove();
    body.style.overflow = 'auto';
  });
};
const displaypopup = async (index, index2) => {
  const array = await (0,_display_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const newarr = array[index];
  const div = document.createElement('div');
  div.className = 'popup-container';
  div.innerHTML = `
        <div class="image">
            <img src="${newarr.image.original}" alt="cardimg">
            <span class="cross-btn"><i class="fa-solid fa-x"></i></span>
        </div>
        <div class="heading">
            <h1>${newarr.name}</h1>
        </div>
        <div class="ratingbox">
            <h3>Rating: ${newarr.rating.average}</h3>
            <h3>Language: ${newarr.language}</h3>
        </div>
        <div class="genresbox">
            <h3>Genres: ${newarr.genres[0]},${newarr.genres[1]},${newarr.genres[2]}</h3>
            <h3>Premiered: ${newarr.premiered}</h3>
        </div>
        <form action="" id="forms" method="submit">
        <div class="show-comments">
        </div>
        <form action="#" method="">
            ${(0,_commentform_js__WEBPACK_IMPORTED_MODULE_1__["default"])()}
        </form>
        
    `;
  body.appendChild(div);
  (0,_showcomments_js__WEBPACK_IMPORTED_MODULE_2__.getformvalue)(index2);
  (0,_showcomments_js__WEBPACK_IMPORTED_MODULE_2__.showcomments)(index2);
  removeclasses();
};
const popup = () => {
  const commentbtn = document.querySelectorAll('.comment-btn');
  commentbtn.forEach((cmtbtn) => {
    cmtbtn.addEventListener('click', (btn) => {
      addclasses();
      const btnCall1 = btn.target.parentElement.parentElement.id - 1;
      const btnCall2 = btn.target.parentElement.parentElement.id;
      displaypopup(btnCall1, btnCall2);
    });
  });
};




/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getLikes = async () => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fy6DJ86u1eQhR7jHzpFg/likes')
    .then((res) => res.json())
    .then((data) => {
      const show = document.querySelectorAll('.add');
      show.forEach((cur) => {
        const id = Number(cur.getAttribute('data-item-id'));
        const matchingObject = data.find((obj) => obj.item_id === id);
        if (matchingObject) {
          cur.innerHTML = matchingObject.likes;
        } else {
          cur.innerHTML = '0';
        }
      });
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);

/***/ }),

/***/ "./src/modules/likeCounts.js":
/*!***********************************!*\
  !*** ./src/modules/likeCounts.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLikes.js */ "./src/modules/getLikes.js");


async function LikesAdd(id) {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fy6DJ86u1eQhR7jHzpFg/likes/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LikesAdd);

/***/ }),

/***/ "./src/modules/showcomments.js":
/*!*************************************!*\
  !*** ./src/modules/showcomments.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getformvalue": () => (/* binding */ getformvalue),
/* harmony export */   "showcomments": () => (/* binding */ showcomments),
/* harmony export */   "updatecomments": () => (/* binding */ updatecomments)
/* harmony export */ });
/* harmony import */ var _commentscounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentscounter.js */ "./src/modules/commentscounter.js");
/* harmony import */ var _displaypopup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displaypopup.js */ "./src/modules/displaypopup.js");



const updatecomments = () => {
  const popupcontainer = document.querySelector('.popup-container');
  popupcontainer.remove();
};

const showcomments = async (index2) => {
  const popupcontainer = document.querySelector('.popup-container');
  const form = document.querySelector('form');
  const showdiv = document.createElement('div');
  showdiv.className = 'show-comments';
  const h3 = document.createElement('h3');
  const p = document.createElement('p');

  const commentData = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Gv3n01pNZoeZ0ZE7nWSD/comments?item_id=${index2}`, {
    method: 'GET',
  });
  const data = await commentData.json();

  if (!commentData.ok) {
    h3.innerText = 'Comments (0)';
    showdiv.appendChild(h3);
    p.innerText = 'No comments available for now';
    h3.after(p);
    popupcontainer.insertBefore(showdiv, form);
    throw new Error(`No comments are present in ID: ${index2}`);
  }

  data.forEach((item) => {
    showdiv.innerHTML += `
    <p>${item.creation_date} ${item.username}: ${item.comment}</p> `;
  });

  popupcontainer.insertBefore(showdiv, form);
  (0,_commentscounter_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
};

const getformvalue = async (index) => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const inputvalue = document.querySelector('input').value;
    const textareavalue = document.querySelector('textarea').value;
    fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Gv3n01pNZoeZ0ZE7nWSD/comments', {
      method: 'POST',
      body: JSON.stringify({
        item_id: index,
        username: inputvalue,
        comment: textareavalue,
      }),
      headers: {
        'Content-Type': 'application/json; charset=Utf-8',
      },
    }).then((response) => {
      response.json();
    }).then(() => {
      updatecomments();
      (0,_displaypopup_js__WEBPACK_IMPORTED_MODULE_1__.displaypopup)(index - 1, index);
    });
    form.reset();
  });
};



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RixZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFB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dHlsZXMuY3NzIiwid2VicGFjazovL3NwYWNlLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NwYWNlLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zcGFjZS1wcm9qZWN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9zcGFjZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3NwYWNlLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3NwYWNlLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc3BhY2UtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zcGFjZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc3BhY2UtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NwYWNlLXByb2plY3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3BhY2UtcHJvamVjdC8uL3NyYy9tb2R1bGVzL2NvbW1lbnRmb3JtLmpzIiwid2VicGFjazovL3NwYWNlLXByb2plY3QvLi9zcmMvbW9kdWxlcy9jb21tZW50c2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vc3BhY2UtcHJvamVjdC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vc3BhY2UtcHJvamVjdC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlwb3B1cC5qcyIsIndlYnBhY2s6Ly9zcGFjZS1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvZ2V0TGlrZXMuanMiLCJ3ZWJwYWNrOi8vc3BhY2UtcHJvamVjdC8uL3NyYy9tb2R1bGVzL2xpa2VDb3VudHMuanMiLCJ3ZWJwYWNrOi8vc3BhY2UtcHJvamVjdC8uL3NyYy9tb2R1bGVzL3Nob3djb21tZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA4MWQ7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIHBhZGRpbmc6IDMwcHggNTBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzksIDIwLCAyMCwgMC40KTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHNwYW4ge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDI0MCwgNiwgNik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1JTtcXHJcXG4gIHBhZGRpbmc6IDVweCA1cHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBzcGFuIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGgzIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgcGFkZGluZzogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIGxpIHtcXHJcXG4gIHBhZGRpbmc6IDAgNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bCBsaSBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwgbGkgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogcmdiKDY2LCAyNDQsIDE3KTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bCBsaTpmaXJzdC1jaGlsZCBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICBwYWRkaW5nOiAyMHB4IDIwcHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM5LCAxMSwgMTEsIDAuNCk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJkcy1jb250YWluZXIge1xcclxcbiAgcGFkZGluZzogNTBweCA4MHB4O1xcclxcbiAgd2lkdGg6IDg0JTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jYXJkcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDE1dnc7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjA3M2M7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBtYXJnaW46IDNweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHBhZGRpbmc6IDNweCAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCBidXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCA0MCwgMTAzKTtcXHJcXG4gIGNvbG9yOiAjYzljYmYyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIHBhZGRpbmc6IDhweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uTGlrZXMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbi5ibHVyIHtcXHJcXG4gIGZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mYS1oZWFydCB7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhlYXJ0OmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZCB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLkxhc3QtbGlrZSB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICB3aWR0aDogODAwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBicm93bjtcXHJcXG4gIGhlaWdodDogODAlO1xcclxcbiAgdG9wOiA1JTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUlKTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDQsIDMsIDExNywgMC42KTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlIGltZyB7XFxyXFxuICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBoZWlnaHQ6IDUwdmg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBsZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY3Jvc3MtYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBsZWZ0OiAxODJweDtcXHJcXG4gIHRvcDogMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRpbmcge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmF0aW5nYm94IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogMjBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2VucmVzYm94IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogNDBweDtcXHJcXG4gIHdpZHRoOiA5NiU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5nZW5yZXNib3g6bGFzdC1jaGlsZCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICByaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctY29tbWVudHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA3MDBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogODhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctY29tbWVudHMgaDMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1jb21tZW50cyBwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAxMTlweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogNjAwcHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbmZvcm0gaDQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW46IDIwcHggNXB4IDVweCA1cHg7XFxyXFxuICB3aWR0aDogMjg1cHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0gdGV4dGFyZWEge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIG1hcmdpbjogNXB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbiAgd2lkdGg6IDQyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB3aWR0aDogMTA3cHg7XFxyXFxuICBtYXJnaW4tbGVmdDogNHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlDQUFpQztFQUNqQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsaUNBQWlDO0VBQ2pDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHdDQUF3QztFQUN4QyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCw4QkFBOEI7RUFDOUIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxPQUFPO0VBQ1AsOEJBQThCO0VBQzlCLGlDQUFpQztFQUNqQyxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDgxZDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgcGFkZGluZzogMzBweCA1MHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOSwgMjAsIDIwLCAwLjQpO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgc3BhbiB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjQwLCA2LCA2KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xcclxcbiAgcGFkZGluZzogNXB4IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHNwYW4gYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaDMge1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwgbGkge1xcclxcbiAgcGFkZGluZzogMCA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIGxpIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgdHJhbnNpdGlvbjogMC40cztcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bCBsaSBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZ2IoNjYsIDI0NCwgMTcpO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIGxpOmZpcnN0LWNoaWxkIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDIwcHggMjBweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzksIDExLCAxMSwgMC40KTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRzLWNvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiA1MHB4IDgwcHg7XFxyXFxuICB3aWR0aDogODQlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTV2dztcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MDczYztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIG1hcmdpbjogM3B4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgcGFkZGluZzogM3B4IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDAsIDQwLCAxMDMpO1xcclxcbiAgY29sb3I6ICNjOWNiZjI7XFxyXFxufVxcclxcblxcclxcbi5saWtlcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgcGFkZGluZzogOHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5MaWtlcy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLmJsdXIge1xcclxcbiAgZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhlYXJ0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtaGVhcnQ6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uTGFzdC1saWtlIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXHJcXG4gIHdpZHRoOiA4MDBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJyb3duO1xcclxcbiAgaGVpZ2h0OiA4MCU7XFxyXFxuICB0b3A6IDUlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNSUpO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSg0NCwgMywgMTE3LCAwLjYpO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UgaW1nIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIGhlaWdodDogNTB2aDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jcm9zcy1idG4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGxlZnQ6IDE4MnB4O1xcclxcbiAgdG9wOiAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGluZyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yYXRpbmdib3gge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAyMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5nZW5yZXNib3gge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiA0MHB4O1xcclxcbiAgd2lkdGg6IDk2JTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmdlbnJlc2JveDpsYXN0LWNoaWxkIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHJpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1jb21tZW50cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDcwMHB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiA4OHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1jb21tZW50cyBoMyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaG93LWNvbW1lbnRzIHAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDExOXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA2MDBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBoNCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXQge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIG1hcmdpbjogMjBweCA1cHggNXB4IDVweDtcXHJcXG4gIHdpZHRoOiAyODVweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWFyZ2luOiA1cHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICB3aWR0aDogNDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1idG4ge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDdweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHJldHJldmluZ2RhdGEgZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXkuanMnO1xyXG5cclxucmV0cmV2aW5nZGF0YSgpO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgcmV0cmV2aW5nZGF0YSk7XHJcbiIsImNvbnN0IGNvbW1lbnRmb3JtID0gKCkgPT4gKGA8aDQ+QWRkIGEgY29tbWVudDwvaDQ+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiIHJlcXVpcmVkPlxyXG4gICAgPHRleHRhcmVhIG5hbWU9XCJjb21tZW50XCIgaWQ9XCJjb21tZW50XCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCIgcGxhY2Vob2xkZXI9XCJZb3VyIEluc2lnaHRzXCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cclxuICAgIDxidXR0b24gY2xhc3M9XCJwb3B1cC1idG5cIj5Db21tZW50PC9idXR0b24+YCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21tZW50Zm9ybTsiLCJjb25zdCBjb21tZW50Y291bnRlciA9ICgpID0+IHtcclxuICBjb25zdCBzaG93ZGl2Y29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3ctY29tbWVudHMnKTtcclxuICBjb25zdCBzaG93ZGl2QWxsUHRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hvdy1jb21tZW50cyBwJyk7XHJcbiAgY29uc3QgcHRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93LWNvbW1lbnRzIHAnKTtcclxuICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgaDMuaW5uZXJUZXh0ID0gYENvbW1lbnRzICgke3Nob3dkaXZBbGxQdGFncy5sZW5ndGh9KWA7XHJcbiAgc2hvd2RpdmNvbnRhaW5lci5pbnNlcnRCZWZvcmUoaDMsIHB0YWcpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tbWVudGNvdW50ZXI7IiwiaW1wb3J0IHsgcG9wdXAgfSBmcm9tICcuL2Rpc3BsYXlwb3B1cC5qcyc7XHJcbmltcG9ydCBnZXRMaWtlcyBmcm9tICcuL2dldExpa2VzLmpzJztcclxuaW1wb3J0IExpa2VzQWRkIGZyb20gJy4vbGlrZUNvdW50cy5qcyc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiByZXRyZXZpbmdkYXRhKCkge1xyXG4gIGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMTsgaSA8IDk7IGkgKz0gMSkge1xyXG4gICAgcmVzdWx0cy5wdXNoKGZldGNoKGBodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzLyR7aX1gKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpKTtcclxuICB9XHJcbiAgY29uc3QgZHQgPSBQcm9taXNlLmFsbChyZXN1bHRzKTtcclxuICByZXR1cm4gZHQ7XHJcbn1cclxuXHJcbmNvbnN0IGNhcmRzY291bnRlciA9ICgpID0+IHtcclxuICBjb25zdCBjYXJkbGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcmRsZW4nKTtcclxuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkcyAuY2FyZCcpO1xyXG4gIGNhcmRsZW4uaW5uZXJIVE1MID0gYFNob3coJHtjYXJkcy5sZW5ndGh9KWA7XHJcbn07XHJcblxyXG5jb25zdCBkaXNwbGF5ID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGFzID0gYXdhaXQgcmV0cmV2aW5nZGF0YSgpO1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcycpO1xyXG4gIGRhdGFzLmZvckVhY2goKGN1cikgPT4ge1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCArPSBgXHJcbiAgPGRpdiBpZD0ke2N1ci5pZH0gY2xhc3M9XCJjYXJkXCI+XHJcbiAgPGltZyBzcmM9XCIke2N1ci5pbWFnZS5tZWRpdW19XCIgYWx0PVwiXCI+XHJcbiAgPGRpdiBjbGFzcz1cImFkZC1jb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwibGlrZXNcIj48aDQ+JHtjdXIubmFtZX08L2g0PjwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJMaWtlcy1jb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwiTGlrZS1pY29uXCI+XHJcbiAgICAgIDxzcGFuPjxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1oZWFydCBsaWtlLWJ0blwiIGRhdGEtaWQ9XCIke2N1ci5pZH1cIj48L2k+PC9zcGFuPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJMaWtlcy1TcGFuXCI+XHJcbiAgICAgIDxzcGFuIGRhdGEtaXRlbS1pZD1cIiR7Y3VyLmlkfVwiIGNsYXNzPVwiYWRkXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cIkxhc3QtbGlrZVwiPkxpa2VzPC9zcGFuPlxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxidXR0b24gY2xhc3M9XCJjb21tZW50LWJ0blwiPkNvbW1lbnRzPC9idXR0b24+XHJcbjwvZGl2PlxyXG4gIGA7XHJcbiAgICBnZXRMaWtlcygpO1xyXG4gICAgY29uc3QgbGlrZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlLWJ0bicpO1xyXG4gICAgbGlrZUJ0bi5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCB2YWwgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5pZCk7XHJcbiAgICAgICAgTGlrZXNBZGQodmFsKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBjYXJkc2NvdW50ZXIoKTtcclxuICBwb3B1cCgpO1xyXG59O1xyXG5cclxuZGlzcGxheSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmV0cmV2aW5nZGF0YTsiLCJpbXBvcnQgcmV0cmV2aW5nZGF0YSBmcm9tICcuL2Rpc3BsYXkuanMnO1xyXG5pbXBvcnQgY29tbWVudGZvcm0gZnJvbSAnLi9jb21tZW50Zm9ybS5qcyc7XHJcbmltcG9ydCB7IHNob3djb21tZW50cywgZ2V0Zm9ybXZhbHVlIH0gZnJvbSAnLi9zaG93Y29tbWVudHMuanMnO1xyXG5cclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XHJcbmNvbnN0IGNhcmRzY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzLWNvbnRhaW5lcicpO1xyXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcclxuY29uc3QgYWRkY2xhc3NlcyA9ICgpID0+IHtcclxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnYmx1cicpO1xyXG4gIGNhcmRzY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JsdXInKTtcclxuICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnYmx1cicpO1xyXG4gIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxufTtcclxuXHJcbmNvbnN0IHJlbW92ZWNsYXNzZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgY3Jvc3NidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3Jvc3MtYnRuJyk7XHJcbiAgY3Jvc3NidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnYmx1cicpO1xyXG4gICAgY2FyZHNjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYmx1cicpO1xyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2JsdXInKTtcclxuICAgIGJvZHkubGFzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTtcclxuICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XHJcbiAgfSk7XHJcbn07XHJcbmNvbnN0IGRpc3BsYXlwb3B1cCA9IGFzeW5jIChpbmRleCwgaW5kZXgyKSA9PiB7XHJcbiAgY29uc3QgYXJyYXkgPSBhd2FpdCByZXRyZXZpbmdkYXRhKCk7XHJcbiAgY29uc3QgbmV3YXJyID0gYXJyYXlbaW5kZXhdO1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRpdi5jbGFzc05hbWUgPSAncG9wdXAtY29udGFpbmVyJztcclxuICBkaXYuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7bmV3YXJyLmltYWdlLm9yaWdpbmFsfVwiIGFsdD1cImNhcmRpbWdcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjcm9zcy1idG5cIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLXhcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkaW5nXCI+XHJcbiAgICAgICAgICAgIDxoMT4ke25ld2Fyci5uYW1lfTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJhdGluZ2JveFwiPlxyXG4gICAgICAgICAgICA8aDM+UmF0aW5nOiAke25ld2Fyci5yYXRpbmcuYXZlcmFnZX08L2gzPlxyXG4gICAgICAgICAgICA8aDM+TGFuZ3VhZ2U6ICR7bmV3YXJyLmxhbmd1YWdlfTwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImdlbnJlc2JveFwiPlxyXG4gICAgICAgICAgICA8aDM+R2VucmVzOiAke25ld2Fyci5nZW5yZXNbMF19LCR7bmV3YXJyLmdlbnJlc1sxXX0sJHtuZXdhcnIuZ2VucmVzWzJdfTwvaDM+XHJcbiAgICAgICAgICAgIDxoMz5QcmVtaWVyZWQ6ICR7bmV3YXJyLnByZW1pZXJlZH08L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIGlkPVwiZm9ybXNcIiBtZXRob2Q9XCJzdWJtaXRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2hvdy1jb21tZW50c1wiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiBtZXRob2Q9XCJcIj5cclxuICAgICAgICAgICAgJHtjb21tZW50Zm9ybSgpfVxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICBcclxuICAgIGA7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gIGdldGZvcm12YWx1ZShpbmRleDIpO1xyXG4gIHNob3djb21tZW50cyhpbmRleDIpO1xyXG4gIHJlbW92ZWNsYXNzZXMoKTtcclxufTtcclxuY29uc3QgcG9wdXAgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29tbWVudGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50LWJ0bicpO1xyXG4gIGNvbW1lbnRidG4uZm9yRWFjaCgoY210YnRuKSA9PiB7XHJcbiAgICBjbXRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoYnRuKSA9PiB7XHJcbiAgICAgIGFkZGNsYXNzZXMoKTtcclxuICAgICAgY29uc3QgYnRuQ2FsbDEgPSBidG4udGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZCAtIDE7XHJcbiAgICAgIGNvbnN0IGJ0bkNhbGwyID0gYnRuLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQ7XHJcbiAgICAgIGRpc3BsYXlwb3B1cChidG5DYWxsMSwgYnRuQ2FsbDIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBwb3B1cCwgZGlzcGxheXBvcHVwIH07XHJcbiIsImNvbnN0IGdldExpa2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9meTZESjg2dTFlUWhSN2pIenBGZy9saWtlcycpXHJcbiAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgY29uc3Qgc2hvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGQnKTtcclxuICAgICAgc2hvdy5mb3JFYWNoKChjdXIpID0+IHtcclxuICAgICAgICBjb25zdCBpZCA9IE51bWJlcihjdXIuZ2V0QXR0cmlidXRlKCdkYXRhLWl0ZW0taWQnKSk7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hpbmdPYmplY3QgPSBkYXRhLmZpbmQoKG9iaikgPT4gb2JqLml0ZW1faWQgPT09IGlkKTtcclxuICAgICAgICBpZiAobWF0Y2hpbmdPYmplY3QpIHtcclxuICAgICAgICAgIGN1ci5pbm5lckhUTUwgPSBtYXRjaGluZ09iamVjdC5saWtlcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY3VyLmlubmVySFRNTCA9ICcwJztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGdldExpa2VzOyIsImltcG9ydCBnZXRMaWtlcyBmcm9tICcuL2dldExpa2VzLmpzJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIExpa2VzQWRkKGlkKSB7XHJcbiAgYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2Z5NkRKODZ1MWVRaFI3akh6cEZnL2xpa2VzLycsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgaXRlbV9pZDogaWQsXHJcbiAgICB9KSxcclxuICB9KTtcclxuICBnZXRMaWtlcygpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWtlc0FkZDsiLCJpbXBvcnQgY29tbWVudGNvdW50ZXIgZnJvbSAnLi9jb21tZW50c2NvdW50ZXIuanMnO1xyXG5pbXBvcnQgeyBkaXNwbGF5cG9wdXAgfSBmcm9tICcuL2Rpc3BsYXlwb3B1cC5qcyc7XHJcblxyXG5jb25zdCB1cGRhdGVjb21tZW50cyA9ICgpID0+IHtcclxuICBjb25zdCBwb3B1cGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jb250YWluZXInKTtcclxuICBwb3B1cGNvbnRhaW5lci5yZW1vdmUoKTtcclxufTtcclxuXHJcbmNvbnN0IHNob3djb21tZW50cyA9IGFzeW5jIChpbmRleDIpID0+IHtcclxuICBjb25zdCBwb3B1cGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jb250YWluZXInKTtcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xyXG4gIGNvbnN0IHNob3dkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBzaG93ZGl2LmNsYXNzTmFtZSA9ICdzaG93LWNvbW1lbnRzJztcclxuICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgY29uc3QgY29tbWVudERhdGEgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvR3YzbjAxcE5ab2VaMFpFN25XU0QvY29tbWVudHM/aXRlbV9pZD0ke2luZGV4Mn1gLCB7XHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBjb21tZW50RGF0YS5qc29uKCk7XHJcblxyXG4gIGlmICghY29tbWVudERhdGEub2spIHtcclxuICAgIGgzLmlubmVyVGV4dCA9ICdDb21tZW50cyAoMCknO1xyXG4gICAgc2hvd2Rpdi5hcHBlbmRDaGlsZChoMyk7XHJcbiAgICBwLmlubmVyVGV4dCA9ICdObyBjb21tZW50cyBhdmFpbGFibGUgZm9yIG5vdyc7XHJcbiAgICBoMy5hZnRlcihwKTtcclxuICAgIHBvcHVwY29udGFpbmVyLmluc2VydEJlZm9yZShzaG93ZGl2LCBmb3JtKTtcclxuICAgIHRocm93IG5ldyBFcnJvcihgTm8gY29tbWVudHMgYXJlIHByZXNlbnQgaW4gSUQ6ICR7aW5kZXgyfWApO1xyXG4gIH1cclxuXHJcbiAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBzaG93ZGl2LmlubmVySFRNTCArPSBgXHJcbiAgICA8cD4ke2l0ZW0uY3JlYXRpb25fZGF0ZX0gJHtpdGVtLnVzZXJuYW1lfTogJHtpdGVtLmNvbW1lbnR9PC9wPiBgO1xyXG4gIH0pO1xyXG5cclxuICBwb3B1cGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoc2hvd2RpdiwgZm9ybSk7XHJcbiAgY29tbWVudGNvdW50ZXIoKTtcclxufTtcclxuXHJcbmNvbnN0IGdldGZvcm12YWx1ZSA9IGFzeW5jIChpbmRleCkgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IGlucHV0dmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlO1xyXG4gICAgY29uc3QgdGV4dGFyZWF2YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJykudmFsdWU7XHJcbiAgICBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvR3YzbjAxcE5ab2VaMFpFN25XU0QvY29tbWVudHMnLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgaXRlbV9pZDogaW5kZXgsXHJcbiAgICAgICAgdXNlcm5hbWU6IGlucHV0dmFsdWUsXHJcbiAgICAgICAgY29tbWVudDogdGV4dGFyZWF2YWx1ZSxcclxuICAgICAgfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VXRmLTgnLFxyXG4gICAgICB9LFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgIHVwZGF0ZWNvbW1lbnRzKCk7XHJcbiAgICAgIGRpc3BsYXlwb3B1cChpbmRleCAtIDEsIGluZGV4KTtcclxuICAgIH0pO1xyXG4gICAgZm9ybS5yZXNldCgpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgc2hvd2NvbW1lbnRzLCBnZXRmb3JtdmFsdWUsIHVwZGF0ZWNvbW1lbnRzIH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9