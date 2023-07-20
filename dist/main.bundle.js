/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
"use strict";
(self["webpackChunkweb_pack_boilerplate"] = self["webpackChunkweb_pack_boilerplate"] || []).push([["main"],{

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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.to_do-container {
  width: 40%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 1px 1px 10px 1px black;
  margin: 100px auto;
}

.header,
.add_item {
  border-bottom: 1px solid lightgray;
  padding: 15px;
}

.add_item input {
  width: 100%;
  height: 30px;
  border: none;
  font-size: 17px;
  font-style: italic;
}

.refresh,
.delete,
.enter,
.menu {
  float: right;
  margin-right: 3px;
  font-size: 16px;
  cursor: pointer;
}

.hide {
  display: none;
}

.color {
  background-color: rgb(252, 252, 113);
}

.list-items li input {
  margin-right: 10px;
}

.add_item input:focus {
  outline: none;
}

.add_item input::placeholder {
  font-style: italic;
  font-size: 18px;
  padding: 2px;
}

.list-items li {
  border-bottom: 1px solid lightgray;
  padding: 15px;
  list-style: none;
  font-size: 18px;
  font-weight: 400;
}

.remove-all {
  text-align: center;
}

.remove-all button {
  width: 100%;
  padding: 15px;
  font-size: 18px;
  border: none;
  cursor: pointer;
}

.finished {
  text-decoration: line-through;
  color: rgb(107, 250, 107);
  background-color: rgb(252, 252, 113);
}

.check {
  cursor: pointer;
}

.txt {
  user-select: none;
}

.clear:hover {
  text-decoration: underline;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,4DAA4D;AAC9D;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kCAAkC;EAClC,kBAAkB;AACpB;;AAEA;;EAEE,kCAAkC;EAClC,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,kBAAkB;AACpB;;AAEA;;;;EAIE,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,kCAAkC;EAClC,aAAa;EACb,gBAAgB;EAChB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,eAAe;EACf,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,yBAAyB;EACzB,oCAAoC;AACtC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,0BAA0B;AAC5B","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.to_do-container {\r\n  width: 40%;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  box-shadow: 1px 1px 10px 1px black;\r\n  margin: 100px auto;\r\n}\r\n\r\n.header,\r\n.add_item {\r\n  border-bottom: 1px solid lightgray;\r\n  padding: 15px;\r\n}\r\n\r\n.add_item input {\r\n  width: 100%;\r\n  height: 30px;\r\n  border: none;\r\n  font-size: 17px;\r\n  font-style: italic;\r\n}\r\n\r\n.refresh,\r\n.delete,\r\n.enter,\r\n.menu {\r\n  float: right;\r\n  margin-right: 3px;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.color {\r\n  background-color: rgb(252, 252, 113);\r\n}\r\n\r\n.list-items li input {\r\n  margin-right: 10px;\r\n}\r\n\r\n.add_item input:focus {\r\n  outline: none;\r\n}\r\n\r\n.add_item input::placeholder {\r\n  font-style: italic;\r\n  font-size: 18px;\r\n  padding: 2px;\r\n}\r\n\r\n.list-items li {\r\n  border-bottom: 1px solid lightgray;\r\n  padding: 15px;\r\n  list-style: none;\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n}\r\n\r\n.remove-all {\r\n  text-align: center;\r\n}\r\n\r\n.remove-all button {\r\n  width: 100%;\r\n  padding: 15px;\r\n  font-size: 18px;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.finished {\r\n  text-decoration: line-through;\r\n  color: rgb(107, 250, 107);\r\n  background-color: rgb(252, 252, 113);\r\n}\r\n\r\n.check {\r\n  cursor: pointer;\r\n}\r\n\r\n.txt {\r\n  user-select: none;\r\n}\r\n\r\n.clear:hover {\r\n  text-decoration: underline;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/Modules/add.js":
/*!****************************!*\
  !*** ./src/Modules/add.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add)
/* harmony export */ });
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save */ "./src/Modules/save.js");

class Items {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}
function add(list) {
  const item = document.querySelector('.item-input');
  const itemValue = item.value.trim();
  if (itemValue === '') {
    return;
  } else {
    const index = list.length;
    const item_ = new Items(itemValue, false, index);
    list.push(item_);
    item_.index = list.length;
    (0,_save__WEBPACK_IMPORTED_MODULE_0__.save)(list);
  }
}



/***/ }),

/***/ "./src/Modules/clear.js":
/*!******************************!*\
  !*** ./src/Modules/clear.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clear: () => (/* binding */ clear)
/* harmony export */ });
const clear = () => {
  document.querySelector('.item-input').value = '';
};


/***/ }),

/***/ "./src/Modules/clearAll.js":
/*!*********************************!*\
  !*** ./src/Modules/clearAll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearAll: () => (/* binding */ clearAll)
/* harmony export */ });
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save */ "./src/Modules/save.js");


const clearAll = (list) => {
  const clear = document.querySelector('.clear');
  clear.addEventListener('click', (e) => {
    e.preventDefault()
    const completedTasks = list.filter((task) => task.completed === true);
    completedTasks.forEach((completedTask) => {
      const index = list.indexOf(completedTask);
      list.splice(index, 1);
    });
    (0,_save__WEBPACK_IMPORTED_MODULE_0__.save)(list);
    location.reload();
  });
};


/***/ }),

/***/ "./src/Modules/edit.js":
/*!*****************************!*\
  !*** ./src/Modules/edit.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   edit: () => (/* binding */ edit)
/* harmony export */ });
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save */ "./src/Modules/save.js");


function edit(list) {
  const description = document.querySelectorAll('.txt');
  description.forEach(txt => {
    txt.addEventListener('dblclick', () => {
      const oldValue = txt.textContent;
      txt.contentEditable = true;
      txt.focus();

      txt.addEventListener('blur', () => {
        const newValue = txt.textContent;
        txt.contentEditable = false;

        if (newValue !== oldValue) {
          const key = txt.parentElement.querySelector('.check').dataset.id;
          const itemIndex = list.findIndex(item => item.index.toString() === key);
          if (itemIndex !== -1) {
            list[itemIndex].description = newValue;
            (0,_save__WEBPACK_IMPORTED_MODULE_0__.save)(list);
          }
        }
      });
    });
  });
}

/***/ }),

/***/ "./src/Modules/iconToggle.js":
/*!***********************************!*\
  !*** ./src/Modules/iconToggle.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iconToggle: () => (/* binding */ iconToggle)
/* harmony export */ });
function iconToggle() {
  const menuItems = document.querySelectorAll('.menu');

  menuItems.forEach((menuItem) => {
    const deleteIcon = menuItem.nextElementSibling;

    menuItem.addEventListener('click', (e) => {
      const targetMenuItem = e.target;
      const parentListItem = targetMenuItem.parentElement.parentElement;

      parentListItem.classList.toggle('color');
      targetMenuItem.classList.add('hide');
      deleteIcon.classList.remove('hide');
    });
  });
}


  
 
  




/***/ }),

/***/ "./src/Modules/load.js":
/*!*****************************!*\
  !*** ./src/Modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadList: () => (/* binding */ loadList)
/* harmony export */ });
/* harmony import */ var _iconToggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iconToggle */ "./src/Modules/iconToggle.js");
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status */ "./src/Modules/status.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove */ "./src/Modules/remove.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/Modules/save.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/Modules/edit.js");





let index=0;
let list=[];
const loadList=() =>{
  const itemList=document.querySelector('.list-items');
  const storedList = JSON.parse(localStorage.getItem('Todo' || 0));
  itemList.innerHTML = '';
  if (storedList) {
    list = storedList;
    let listHtml = '';
    list.forEach((item) => {
      listHtml += `<li><input class='check' type="checkbox" data-id="${item.index}"><span class='txt'>${item.description}</span><span><i class="menu fa">&#xf142;</i><i data-id="${item.index}" class="delete hide fa">&#xf014;</i></span></li>`;
      index=list.length;
    })
    itemList.innerHTML = listHtml;
    (0,_save__WEBPACK_IMPORTED_MODULE_3__.save)(list)
   
  }else {
    list;
    index;
  }

 (0,_iconToggle__WEBPACK_IMPORTED_MODULE_0__.iconToggle)();
 (0,_remove__WEBPACK_IMPORTED_MODULE_2__.del)(list);
 (0,_status__WEBPACK_IMPORTED_MODULE_1__.complete)(list);
 (0,_edit__WEBPACK_IMPORTED_MODULE_4__.edit)(list);

}


/***/ }),

/***/ "./src/Modules/refresh.js":
/*!********************************!*\
  !*** ./src/Modules/refresh.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   refresh: () => (/* binding */ refresh)
/* harmony export */ });
function refresh (){
  const refreshBtn=document.querySelector('.refresh');
  refreshBtn.addEventListener('click',()=>{
    location.reload();
  })
}

/***/ }),

/***/ "./src/Modules/remove.js":
/*!*******************************!*\
  !*** ./src/Modules/remove.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   del: () => (/* binding */ del)
/* harmony export */ });
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save */ "./src/Modules/save.js");


function del(list) {
  const itemList = document.querySelector('.list-items');
  itemList.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains('delete')) {
      const listItem = e.target.closest('li');
      if (listItem && itemList.contains(listItem)) {
        itemList.removeChild(listItem);
        const id = parseInt(e.target.getAttribute('data-id'));
        const index = list.findIndex(item => item.index === id);
        if (index !== -1) {
          list[index].index--;
          for (let i = index + 1; i < list.length; i++) {
            list[i].index--;
          }
          list.splice(index, 1);
          (0,_save__WEBPACK_IMPORTED_MODULE_0__.save)(list);
        }
      }
    }
  });
}


/***/ }),

/***/ "./src/Modules/save.js":
/*!*****************************!*\
  !*** ./src/Modules/save.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   save: () => (/* binding */ save)
/* harmony export */ });
function save (list) {
  localStorage.setItem('Todo', JSON.stringify(list));
}


/***/ }),

/***/ "./src/Modules/status.js":
/*!*******************************!*\
  !*** ./src/Modules/status.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   complete: () => (/* binding */ complete)
/* harmony export */ });
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save */ "./src/Modules/save.js");


function complete(list) {
  const itemList = document.querySelector('.list-items');
  const storedList = JSON.parse(localStorage.getItem('list')) || [];
  list.forEach((item, index) => {
    if (storedList[index] && storedList[index].completed) {
      item.completed = true;
    }
  });

  itemList.addEventListener('click', function (e) {
    if (e.target.classList.contains('check')) {
      const id = parseInt(e.target.getAttribute('data-id'));
      const index = list.findIndex(item => item.index === id);
      if (index !== -1) {
        list[index].completed = !list[index].completed;
        e.target.nextElementSibling.classList.toggle('finished');
        (0,_save__WEBPACK_IMPORTED_MODULE_0__.save)(list);
        e.target.checked = list[index].completed;
      }
    }
  });

  list.forEach((item) => {
    const checkbox = document.querySelector(`[data-id="${item.index}"]`);
    const label = checkbox.nextElementSibling;
    checkbox.checked = item.completed;
    if (item.completed) {
      label.classList.add('finished');
    }
  });
}






/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populate: () => (/* binding */ populate)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Modules_add_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/add.js */ "./src/Modules/add.js");
/* harmony import */ var _Modules_clear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/clear.js */ "./src/Modules/clear.js");
/* harmony import */ var _Modules_save_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modules/save.js */ "./src/Modules/save.js");
/* harmony import */ var _Modules_load_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modules/load.js */ "./src/Modules/load.js");
/* harmony import */ var _Modules_iconToggle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modules/iconToggle.js */ "./src/Modules/iconToggle.js");
/* harmony import */ var _Modules_remove_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Modules/remove.js */ "./src/Modules/remove.js");
/* harmony import */ var _Modules_status_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Modules/status.js */ "./src/Modules/status.js");
/* harmony import */ var _Modules_clearAll_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Modules/clearAll.js */ "./src/Modules/clearAll.js");
/* harmony import */ var _Modules_refresh_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Modules/refresh.js */ "./src/Modules/refresh.js");
/* harmony import */ var _Modules_edit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Modules/edit */ "./src/Modules/edit.js");












let list = [];
 


function populate() {
  const itemList = document.querySelector('.list-items');
  const item = document.querySelector('.item-input');

  item.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      (0,_Modules_add_js__WEBPACK_IMPORTED_MODULE_1__.add)(list);
      const newItem = list[list.length - 1];
      const newItemElement = document.createElement('li');
      newItemElement.innerHTML = `
        <input class="check" type="checkbox" data-id="${newItem.index}">
        <span class='txt'>${newItem.description}</span>
        <span>
          <i class="menu fa">&#xf142;</i>
          <i data-id="${newItem.index}" class="delete hide fa">&#xf014;</i>
        </span>
      `;
      itemList.appendChild(newItemElement);
      (0,_Modules_save_js__WEBPACK_IMPORTED_MODULE_3__.save)(list);
      (0,_Modules_clear_js__WEBPACK_IMPORTED_MODULE_2__.clear)();
     
      
      (0,_Modules_iconToggle_js__WEBPACK_IMPORTED_MODULE_5__.iconToggle)()
      ;(0,_Modules_remove_js__WEBPACK_IMPORTED_MODULE_6__.del)(list);
      (0,_Modules_edit__WEBPACK_IMPORTED_MODULE_10__.edit)(list)
    }
  });
  
}

populate();
(0,_Modules_refresh_js__WEBPACK_IMPORTED_MODULE_9__.refresh)();
(0,_Modules_clearAll_js__WEBPACK_IMPORTED_MODULE_8__.clearAll)(list);
(0,_Modules_status_js__WEBPACK_IMPORTED_MODULE_7__.complete)(list);

window.onload = () => {
  
  (0,_Modules_load_js__WEBPACK_IMPORTED_MODULE_4__.loadList)()
  ;(0,_Modules_edit__WEBPACK_IMPORTED_MODULE_10__.edit)(list);
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBLHdEQUF3RCxjQUFjO0FBQ3RFLDRCQUE0QixvQkFBb0I7QUFDaEQ7QUFDQSxxQ0FBcUM7QUFDckMsd0JBQXdCLGNBQWMsaUNBQWlDO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLE1BQU0sc0RBQUk7QUFDVixNQUFNLHdEQUFLO0FBQ1g7QUFDQTtBQUNBLE1BQU0sa0VBQVU7QUFDaEIsTUFBTSx3REFBRztBQUNULE1BQU0sb0RBQUk7QUFDVjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUFPO0FBQ1AsOERBQVE7QUFDUiw0REFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMERBQVE7QUFDVixFQUFFLHFEQUFJO0FBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItcGFja19ib2lsZXJwbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2ViLXBhY2tfYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYi1wYWNrX2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2ViLXBhY2tfYm9pbGVycGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2ViLXBhY2tfYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2ViLXBhY2tfYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYi1wYWNrX2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYi1wYWNrX2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYi1wYWNrX2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2ViLXBhY2tfYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWItcGFja19ib2lsZXJwbGF0ZS8uL3NyYy9Nb2R1bGVzL2FkZC5qcyIsIndlYnBhY2s6Ly93ZWItcGFja19ib2lsZXJwbGF0ZS8uL3NyYy9Nb2R1bGVzL2NsZWFyLmpzIiwid2VicGFjazovL3dlYi1wYWNrX2JvaWxlcnBsYXRlLy4vc3JjL01vZHVsZXMvY2xlYXJBbGwuanMiLCJ3ZWJwYWNrOi8vd2ViLXBhY2tfYm9pbGVycGxhdGUvLi9zcmMvTW9kdWxlcy9lZGl0LmpzIiwid2VicGFjazovL3dlYi1wYWNrX2JvaWxlcnBsYXRlLy4vc3JjL01vZHVsZXMvaWNvblRvZ2dsZS5qcyIsIndlYnBhY2s6Ly93ZWItcGFja19ib2lsZXJwbGF0ZS8uL3NyYy9Nb2R1bGVzL2xvYWQuanMiLCJ3ZWJwYWNrOi8vd2ViLXBhY2tfYm9pbGVycGxhdGUvLi9zcmMvTW9kdWxlcy9yZWZyZXNoLmpzIiwid2VicGFjazovL3dlYi1wYWNrX2JvaWxlcnBsYXRlLy4vc3JjL01vZHVsZXMvcmVtb3ZlLmpzIiwid2VicGFjazovL3dlYi1wYWNrX2JvaWxlcnBsYXRlLy4vc3JjL01vZHVsZXMvc2F2ZS5qcyIsIndlYnBhY2s6Ly93ZWItcGFja19ib2lsZXJwbGF0ZS8uL3NyYy9Nb2R1bGVzL3N0YXR1cy5qcyIsIndlYnBhY2s6Ly93ZWItcGFja19ib2lsZXJwbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50b19kby1jb250YWluZXIge1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggMXB4IGJsYWNrO1xyXG4gIG1hcmdpbjogMTAwcHggYXV0bztcclxufVxyXG5cclxuLmhlYWRlcixcclxuLmFkZF9pdGVtIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5hZGRfaXRlbSBpbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4ucmVmcmVzaCxcclxuLmRlbGV0ZSxcclxuLmVudGVyLFxyXG4ubWVudSB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5oaWRlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY29sb3Ige1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDI1MiwgMTEzKTtcclxufVxyXG5cclxuLmxpc3QtaXRlbXMgbGkgaW5wdXQge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmFkZF9pdGVtIGlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uYWRkX2l0ZW0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBhZGRpbmc6IDJweDtcclxufVxyXG5cclxuLmxpc3QtaXRlbXMgbGkge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4ucmVtb3ZlLWFsbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucmVtb3ZlLWFsbCBidXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5maW5pc2hlZCB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgY29sb3I6IHJnYigxMDcsIDI1MCwgMTA3KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyNTIsIDExMyk7XHJcbn1cclxuXHJcbi5jaGVjayB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udHh0IHtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmNsZWFyOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qiw0REFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtDQUFrQztFQUNsQyxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsa0NBQWtDO0VBQ2xDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7RUFJRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvX2RvLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCAxcHggYmxhY2s7XFxyXFxuICBtYXJnaW46IDEwMHB4IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIsXFxyXFxuLmFkZF9pdGVtIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkX2l0ZW0gaW5wdXQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi5yZWZyZXNoLFxcclxcbi5kZWxldGUsXFxyXFxuLmVudGVyLFxcclxcbi5tZW51IHtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG4gIG1hcmdpbi1yaWdodDogM3B4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29sb3Ige1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjUyLCAxMTMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtcyBsaSBpbnB1dCB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5hZGRfaXRlbSBpbnB1dDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkX2l0ZW0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIHBhZGRpbmc6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbXMgbGkge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbW92ZS1hbGwge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVtb3ZlLWFsbCBidXR0b24ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmluaXNoZWQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICBjb2xvcjogcmdiKDEwNywgMjUwLCAxMDcpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjUyLCAxMTMpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2sge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udHh0IHtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXI6aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBzYXZlIH0gZnJvbSBcIi4vc2F2ZVwiO1xyXG5jbGFzcyBJdGVtcyB7XHJcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24sIGNvbXBsZXRlZCwgaW5kZXgpIHtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xyXG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYWRkKGxpc3QpIHtcclxuICBjb25zdCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0taW5wdXQnKTtcclxuICBjb25zdCBpdGVtVmFsdWUgPSBpdGVtLnZhbHVlLnRyaW0oKTtcclxuICBpZiAoaXRlbVZhbHVlID09PSAnJykge1xyXG4gICAgcmV0dXJuO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBpbmRleCA9IGxpc3QubGVuZ3RoO1xyXG4gICAgY29uc3QgaXRlbV8gPSBuZXcgSXRlbXMoaXRlbVZhbHVlLCBmYWxzZSwgaW5kZXgpO1xyXG4gICAgbGlzdC5wdXNoKGl0ZW1fKTtcclxuICAgIGl0ZW1fLmluZGV4ID0gbGlzdC5sZW5ndGg7XHJcbiAgICBzYXZlKGxpc3QpO1xyXG4gIH1cclxufVxyXG5cclxuIiwiZXhwb3J0IGNvbnN0IGNsZWFyID0gKCkgPT4ge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWlucHV0JykudmFsdWUgPSAnJztcclxufTtcclxuIiwiaW1wb3J0IHsgc2F2ZSB9IGZyb20gXCIuL3NhdmVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjbGVhckFsbCA9IChsaXN0KSA9PiB7XHJcbiAgY29uc3QgY2xlYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xlYXInKTtcclxuICBjbGVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IGNvbXBsZXRlZFRhc2tzID0gbGlzdC5maWx0ZXIoKHRhc2spID0+IHRhc2suY29tcGxldGVkID09PSB0cnVlKTtcclxuICAgIGNvbXBsZXRlZFRhc2tzLmZvckVhY2goKGNvbXBsZXRlZFRhc2spID0+IHtcclxuICAgICAgY29uc3QgaW5kZXggPSBsaXN0LmluZGV4T2YoY29tcGxldGVkVGFzayk7XHJcbiAgICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH0pO1xyXG4gICAgc2F2ZShsaXN0KTtcclxuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBzYXZlIH0gZnJvbSBcIi4vc2F2ZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVkaXQobGlzdCkge1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnR4dCcpO1xyXG4gIGRlc2NyaXB0aW9uLmZvckVhY2godHh0ID0+IHtcclxuICAgIHR4dC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc3Qgb2xkVmFsdWUgPSB0eHQudGV4dENvbnRlbnQ7XHJcbiAgICAgIHR4dC5jb250ZW50RWRpdGFibGUgPSB0cnVlO1xyXG4gICAgICB0eHQuZm9jdXMoKTtcclxuXHJcbiAgICAgIHR4dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdHh0LnRleHRDb250ZW50O1xyXG4gICAgICAgIHR4dC5jb250ZW50RWRpdGFibGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBvbGRWYWx1ZSkge1xyXG4gICAgICAgICAgY29uc3Qga2V5ID0gdHh0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrJykuZGF0YXNldC5pZDtcclxuICAgICAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IGxpc3QuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5pbmRleC50b1N0cmluZygpID09PSBrZXkpO1xyXG4gICAgICAgICAgaWYgKGl0ZW1JbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgbGlzdFtpdGVtSW5kZXhdLmRlc2NyaXB0aW9uID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgIHNhdmUobGlzdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGljb25Ub2dnbGUoKSB7XHJcbiAgY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUnKTtcclxuXHJcbiAgbWVudUl0ZW1zLmZvckVhY2goKG1lbnVJdGVtKSA9PiB7XHJcbiAgICBjb25zdCBkZWxldGVJY29uID0gbWVudUl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cclxuICAgIG1lbnVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0TWVudUl0ZW0gPSBlLnRhcmdldDtcclxuICAgICAgY29uc3QgcGFyZW50TGlzdEl0ZW0gPSB0YXJnZXRNZW51SXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICBwYXJlbnRMaXN0SXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdjb2xvcicpO1xyXG4gICAgICB0YXJnZXRNZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG4gIFxyXG4gXHJcbiAgXHJcblxyXG5cclxuIiwiaW1wb3J0IHsgaWNvblRvZ2dsZSB9IGZyb20gXCIuL2ljb25Ub2dnbGVcIjtcclxuaW1wb3J0IHsgY29tcGxldGUgfSBmcm9tIFwiLi9zdGF0dXNcIjtcclxuaW1wb3J0IHsgZGVsIH0gZnJvbSBcIi4vcmVtb3ZlXCI7XHJcbmltcG9ydCB7IHNhdmUgfSBmcm9tIFwiLi9zYXZlXCI7XHJcbmltcG9ydCB7IGVkaXQgfSBmcm9tIFwiLi9lZGl0XCI7XHJcbmxldCBpbmRleD0wO1xyXG5sZXQgbGlzdD1bXTtcclxuZXhwb3J0IGNvbnN0IGxvYWRMaXN0PSgpID0+e1xyXG4gIGNvbnN0IGl0ZW1MaXN0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LWl0ZW1zJyk7XHJcbiAgY29uc3Qgc3RvcmVkTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1RvZG8nIHx8IFtdKSk7XHJcbiAgaXRlbUxpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgaWYgKHN0b3JlZExpc3QpIHtcclxuICAgIGxpc3QgPSBzdG9yZWRMaXN0O1xyXG4gICAgbGV0IGxpc3RIdG1sID0gJyc7XHJcbiAgICBsaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgbGlzdEh0bWwgKz0gYDxsaT48aW5wdXQgY2xhc3M9J2NoZWNrJyB0eXBlPVwiY2hlY2tib3hcIiBkYXRhLWlkPVwiJHtpdGVtLmluZGV4fVwiPjxzcGFuIGNsYXNzPSd0eHQnPiR7aXRlbS5kZXNjcmlwdGlvbn08L3NwYW4+PHNwYW4+PGkgY2xhc3M9XCJtZW51IGZhXCI+JiN4ZjE0Mjs8L2k+PGkgZGF0YS1pZD1cIiR7aXRlbS5pbmRleH1cIiBjbGFzcz1cImRlbGV0ZSBoaWRlIGZhXCI+JiN4ZjAxNDs8L2k+PC9zcGFuPjwvbGk+YDtcclxuICAgICAgaW5kZXg9bGlzdC5sZW5ndGg7XHJcbiAgICB9KVxyXG4gICAgaXRlbUxpc3QuaW5uZXJIVE1MID0gbGlzdEh0bWw7XHJcbiAgICBzYXZlKGxpc3QpXHJcbiAgIFxyXG4gIH1lbHNlIHtcclxuICAgIGxpc3Q7XHJcbiAgICBpbmRleDtcclxuICB9XHJcblxyXG4gaWNvblRvZ2dsZSgpO1xyXG4gZGVsKGxpc3QpO1xyXG4gY29tcGxldGUobGlzdCk7XHJcbiBlZGl0KGxpc3QpO1xyXG5cclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gcmVmcmVzaCAoKXtcclxuICBjb25zdCByZWZyZXNoQnRuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWZyZXNoJyk7XHJcbiAgcmVmcmVzaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH0pXHJcbn0iLCJpbXBvcnQgeyBzYXZlIH0gZnJvbSBcIi4vc2F2ZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbChsaXN0KSB7XHJcbiAgY29uc3QgaXRlbUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1pdGVtcycpO1xyXG4gIGl0ZW1MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZScpKSB7XHJcbiAgICAgIGNvbnN0IGxpc3RJdGVtID0gZS50YXJnZXQuY2xvc2VzdCgnbGknKTtcclxuICAgICAgaWYgKGxpc3RJdGVtICYmIGl0ZW1MaXN0LmNvbnRhaW5zKGxpc3RJdGVtKSkge1xyXG4gICAgICAgIGl0ZW1MaXN0LnJlbW92ZUNoaWxkKGxpc3RJdGVtKTtcclxuICAgICAgICBjb25zdCBpZCA9IHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGxpc3QuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5pbmRleCA9PT0gaWQpO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgIGxpc3RbaW5kZXhdLmluZGV4LS07XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gaW5kZXggKyAxOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsaXN0W2ldLmluZGV4LS07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICBzYXZlKGxpc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBzYXZlIChsaXN0KSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1RvZG8nLCBKU09OLnN0cmluZ2lmeShsaXN0KSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgc2F2ZSB9IGZyb20gXCIuL3NhdmVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wbGV0ZShsaXN0KSB7XHJcbiAgY29uc3QgaXRlbUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1pdGVtcycpO1xyXG4gIGNvbnN0IHN0b3JlZExpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXN0JykpIHx8IFtdO1xyXG4gIGxpc3QuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgIGlmIChzdG9yZWRMaXN0W2luZGV4XSAmJiBzdG9yZWRMaXN0W2luZGV4XS5jb21wbGV0ZWQpIHtcclxuICAgICAgaXRlbS5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBpdGVtTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVjaycpKSB7XHJcbiAgICAgIGNvbnN0IGlkID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG4gICAgICBjb25zdCBpbmRleCA9IGxpc3QuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5pbmRleCA9PT0gaWQpO1xyXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgbGlzdFtpbmRleF0uY29tcGxldGVkID0gIWxpc3RbaW5kZXhdLmNvbXBsZXRlZDtcclxuICAgICAgICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZSgnZmluaXNoZWQnKTtcclxuICAgICAgICBzYXZlKGxpc3QpO1xyXG4gICAgICAgIGUudGFyZ2V0LmNoZWNrZWQgPSBsaXN0W2luZGV4XS5jb21wbGV0ZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgbGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtpdGVtLmluZGV4fVwiXWApO1xyXG4gICAgY29uc3QgbGFiZWwgPSBjaGVja2JveC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICBjaGVja2JveC5jaGVja2VkID0gaXRlbS5jb21wbGV0ZWQ7XHJcbiAgICBpZiAoaXRlbS5jb21wbGV0ZWQpIHtcclxuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZmluaXNoZWQnKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IGFkZCB9IGZyb20gXCIuL01vZHVsZXMvYWRkLmpzXCI7XHJcbmltcG9ydCB7IGNsZWFyIH0gZnJvbSAnLi9Nb2R1bGVzL2NsZWFyLmpzJztcclxuaW1wb3J0IHsgc2F2ZSB9IGZyb20gXCIuL01vZHVsZXMvc2F2ZS5qc1wiO1xyXG5pbXBvcnQgeyBsb2FkTGlzdCB9IGZyb20gJy4vTW9kdWxlcy9sb2FkLmpzJztcclxuaW1wb3J0IHsgaWNvblRvZ2dsZSB9IGZyb20gJy4vTW9kdWxlcy9pY29uVG9nZ2xlLmpzJztcclxuaW1wb3J0IHsgZGVsIH0gZnJvbSAnLi9Nb2R1bGVzL3JlbW92ZS5qcyc7XHJcbmltcG9ydCB7IGNvbXBsZXRlIH0gZnJvbSAnLi9Nb2R1bGVzL3N0YXR1cy5qcyc7XHJcbmltcG9ydCB7IGNsZWFyQWxsIH0gZnJvbSAnLi9Nb2R1bGVzL2NsZWFyQWxsLmpzJztcclxuaW1wb3J0IHsgcmVmcmVzaCB9IGZyb20gJy4vTW9kdWxlcy9yZWZyZXNoLmpzJztcclxuaW1wb3J0IHsgZWRpdCB9IGZyb20gJy4vTW9kdWxlcy9lZGl0JztcclxuXHJcbmxldCBsaXN0ID0gW107XHJcbiBcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGUoKSB7XHJcbiAgY29uc3QgaXRlbUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1pdGVtcycpO1xyXG4gIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1pbnB1dCcpO1xyXG5cclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcclxuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICBhZGQobGlzdCk7XHJcbiAgICAgIGNvbnN0IG5ld0l0ZW0gPSBsaXN0W2xpc3QubGVuZ3RoIC0gMV07XHJcbiAgICAgIGNvbnN0IG5ld0l0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgbmV3SXRlbUVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImNoZWNrXCIgdHlwZT1cImNoZWNrYm94XCIgZGF0YS1pZD1cIiR7bmV3SXRlbS5pbmRleH1cIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz0ndHh0Jz4ke25ld0l0ZW0uZGVzY3JpcHRpb259PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJtZW51IGZhXCI+JiN4ZjE0Mjs8L2k+XHJcbiAgICAgICAgICA8aSBkYXRhLWlkPVwiJHtuZXdJdGVtLmluZGV4fVwiIGNsYXNzPVwiZGVsZXRlIGhpZGUgZmFcIj4mI3hmMDE0OzwvaT5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIGA7XHJcbiAgICAgIGl0ZW1MaXN0LmFwcGVuZENoaWxkKG5ld0l0ZW1FbGVtZW50KTtcclxuICAgICAgc2F2ZShsaXN0KTtcclxuICAgICAgY2xlYXIoKTtcclxuICAgICBcclxuICAgICAgXHJcbiAgICAgIGljb25Ub2dnbGUoKVxyXG4gICAgICBkZWwobGlzdCk7XHJcbiAgICAgIGVkaXQobGlzdClcclxuICAgIH1cclxuICB9KTtcclxuICBcclxufVxyXG5cclxucG9wdWxhdGUoKTtcclxucmVmcmVzaCgpO1xyXG5jbGVhckFsbChsaXN0KTtcclxuY29tcGxldGUobGlzdCk7XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gIFxyXG4gIGxvYWRMaXN0KClcclxuICBlZGl0KGxpc3QpO1xyXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==