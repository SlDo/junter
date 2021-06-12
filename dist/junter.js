/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _junterDOM_components_renderComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./junterDOM/components/renderComponent */ \"./src/junterDOM/components/renderComponent.js\");\n/* harmony import */ var _junterDOM_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./junterDOM/createElement */ \"./src/junterDOM/createElement.js\");\n/* harmony import */ var _junterDOM_addAliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./junterDOM/addAliases */ \"./src/junterDOM/addAliases.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"./src/utils/index.js\");\n/* harmony import */ var _junterDOM_components_components_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./junterDOM/components/components.store */ \"./src/junterDOM/components/components.store.js\");\n/* harmony import */ var _junterDOM_components_registerComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./junterDOM/components/registerComponent */ \"./src/junterDOM/components/registerComponent.js\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\n\n\n\n\n\n\n\n\nwindow.Junter = function Junter(setting = {}) {\n  Object.entries(setting).forEach(([key, value]) => {\n    Object(_settings__WEBPACK_IMPORTED_MODULE_6__[\"editSetting\"])(key, value);\n  });\n\n  this.render = (object, aliases) => {\n    const parsed = Object(_junterDOM_addAliases__WEBPACK_IMPORTED_MODULE_2__[\"addAliases\"])(object, aliases);\n\n    Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"throwError\"])(!Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"isValidRoot\"])(parsed), 'Render object must be an object with once root element');\n\n    const tag = Object.keys(parsed)[0];\n\n    if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"isComponent\"])(tag) && _junterDOM_components_components_store__WEBPACK_IMPORTED_MODULE_4__[\"components\"][tag]) {\n      return Object(_junterDOM_components_renderComponent__WEBPACK_IMPORTED_MODULE_0__[\"renderComponent\"])(tag, { ...aliases, ...parsed[tag] });\n    }\n\n    return Object(_junterDOM_createElement__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(tag, Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"parseParams\"])(parsed[tag]), aliases);\n  };\n\n  this.registerComponent = _junterDOM_components_registerComponent__WEBPACK_IMPORTED_MODULE_5__[\"registerComponent\"];\n};\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/junterDOM/addAliases.js":
/*!*************************************!*\
  !*** ./src/junterDOM/addAliases.js ***!
  \*************************************/
/*! exports provided: addAliases */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addAliases\", function() { return addAliases; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aliases */ \"./src/junterDOM/aliases/index.js\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings */ \"./src/settings.js\");\n\n\n\n\nconst addAliases = (object, replacer = {}, excludeDelete = []) => {\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"throwError\"])(typeof replacer !== 'object' || Array.isArray(replacer), 'Replacer must be an object');\n\n  try {\n    const clonedObject = JSON.parse(object);\n\n    const replaceValue = (objectToReplace) => {\n      Object.entries(objectToReplace).forEach(([prop, value]) => {\n        if (typeof value !== 'string') {\n          return replaceValue(value);\n        }\n\n        if (Object(_aliases__WEBPACK_IMPORTED_MODULE_1__[\"hasAlias\"])(value)) {\n          const replacedValue = replacer[value];\n\n          if (!replacedValue && excludeDelete && !excludeDelete.includes(Object(_aliases__WEBPACK_IMPORTED_MODULE_1__[\"aliasName\"])(value)) && _settings__WEBPACK_IMPORTED_MODULE_2__[\"settings\"].removeUnnecessary) {\n            if (Array.isArray(objectToReplace)) {\n              return objectToReplace.splice(+prop, 1);\n            }\n\n            delete objectToReplace[prop];\n          } else objectToReplace[prop] = replacedValue == null ? value : replacedValue;\n        }\n      });\n    };\n\n    replaceValue(clonedObject, replacer);\n\n    return clonedObject;\n  } catch (e) {\n    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"throwError\"])(!!e, `Invalid JSON. Error message: ${e}`);\n  }\n};\n\n\n//# sourceURL=webpack:///./src/junterDOM/addAliases.js?");

/***/ }),

/***/ "./src/junterDOM/addChildren.js":
/*!**************************************!*\
  !*** ./src/junterDOM/addChildren.js ***!
  \**************************************/
/*! exports provided: addChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addChildren\", function() { return addChildren; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _transformComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transformComponent */ \"./src/junterDOM/transformComponent.js\");\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createElement */ \"./src/junterDOM/createElement.js\");\n/* harmony import */ var _components_components_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/components.store */ \"./src/junterDOM/components/components.store.js\");\n\n\n\n\n\nconst addChildren = (element, children, aliases) => {\n  Object.entries(children).forEach(([tag, params]) => {\n    if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"isComponent\"])(tag) && _components_components_store__WEBPACK_IMPORTED_MODULE_3__[\"components\"][tag]) {\n      const { props, slots } = children[tag] || {};\n\n      return addChildren(element, Object(_transformComponent__WEBPACK_IMPORTED_MODULE_1__[\"transformComponent\"])(tag, { ...aliases, ...props, ...slots }));\n    }\n\n    const { content, props } = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"parseParams\"])(params);\n\n    if (Array.isArray(content)) {\n      if (content.every((elem) => typeof elem.content !== 'string')) {\n        const child = Object(_createElement__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])(tag, { props, content });\n\n        return element.appendChild(child);\n      }\n\n      return content.forEach((elem) => {\n        if (typeof elem.content === 'string') {\n          const child = Object(_createElement__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])(tag, { props, content: elem.content });\n\n          element.appendChild(child);\n        }\n      });\n    }\n\n    const child = Object(_createElement__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])(tag, { props, content });\n\n    return element.appendChild(child);\n  });\n};\n\n\n//# sourceURL=webpack:///./src/junterDOM/addChildren.js?");

/***/ }),

/***/ "./src/junterDOM/addContent.js":
/*!*************************************!*\
  !*** ./src/junterDOM/addContent.js ***!
  \*************************************/
/*! exports provided: addContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addContent\", function() { return addContent; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _addStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addStyles */ \"./src/junterDOM/addStyles.js\");\n/* harmony import */ var _addText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addText */ \"./src/junterDOM/addText.js\");\n/* harmony import */ var _addChildren__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addChildren */ \"./src/junterDOM/addChildren.js\");\n\n\n\n\n\nconst addContent = (element, content) => {\n  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"isElementTag\"])(element, 'style')) {\n    return Object(_addStyles__WEBPACK_IMPORTED_MODULE_1__[\"addStyles\"])(element, content);\n  }\n\n  if (typeof content === 'string') {\n    return Object(_addText__WEBPACK_IMPORTED_MODULE_2__[\"addText\"])(element, content);\n  }\n\n  if (Array.isArray(content)) {\n    return content.forEach((elem) => {\n      addContent(element, elem);\n    });\n  }\n\n  if (content && Object.prototype.hasOwnProperty.call(content, 'content')) {\n    return addContent(element, content.content);\n  }\n\n  return Object(_addChildren__WEBPACK_IMPORTED_MODULE_3__[\"addChildren\"])(element, content);\n};\n\n\n//# sourceURL=webpack:///./src/junterDOM/addContent.js?");

/***/ }),

/***/ "./src/junterDOM/addProps.js":
/*!***********************************!*\
  !*** ./src/junterDOM/addProps.js ***!
  \***********************************/
/*! exports provided: addProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProps\", function() { return addProps; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\n\nconst addProps = (element, props) => {\n  Object.entries(props).forEach(([prop, value]) => {\n    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"throwError\"])(value == null || typeof value === 'object', `Invalid prop value. The prop value must be a string or number. Current type: ${typeof props[prop]}. Error: ${prop}: ${props[prop]}`);\n\n    element.setAttribute(prop.toString().toLowerCase().trim(), value.toString().trim());\n  });\n};\n\n\n//# sourceURL=webpack:///./src/junterDOM/addProps.js?");

/***/ }),

/***/ "./src/junterDOM/addStyles.js":
/*!************************************!*\
  !*** ./src/junterDOM/addStyles.js ***!
  \************************************/
/*! exports provided: addStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addStyles\", function() { return addStyles; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\n\nconst addStyles = (element, styles) => {\n  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"isElementTag\"])(element, 'style')) {\n    if (element.styleSheet) {\n      element.styleSheet.cssText = styles.trim();\n    } else {\n      element.appendChild(document.createTextNode(styles.trim()));\n    }\n  }\n};\n\n\n//# sourceURL=webpack:///./src/junterDOM/addStyles.js?");

/***/ }),

/***/ "./src/junterDOM/addText.js":
/*!**********************************!*\
  !*** ./src/junterDOM/addText.js ***!
  \**********************************/
/*! exports provided: addText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addText\", function() { return addText; });\nconst addText = (element, text) => {\n  element.innerHTML = text;\n};\n\n\n//# sourceURL=webpack:///./src/junterDOM/addText.js?");

/***/ }),

/***/ "./src/junterDOM/aliases/aliases.store.js":
/*!************************************************!*\
  !*** ./src/junterDOM/aliases/aliases.store.js ***!
  \************************************************/
/*! exports provided: aliasesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"aliasesList\", function() { return aliasesList; });\nconst aliasesList = {\n  slot: 'slot',\n  locale: 'locale',\n  prop: 'prop',\n  style: 'style',\n  alias: 'alias',\n};\n\n\n//# sourceURL=webpack:///./src/junterDOM/aliases/aliases.store.js?");

/***/ }),

/***/ "./src/junterDOM/aliases/getAliasName.js":
/*!***********************************************!*\
  !*** ./src/junterDOM/aliases/getAliasName.js ***!
  \***********************************************/
/*! exports provided: aliasName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"aliasName\", function() { return aliasName; });\nconst aliasName = (alias) => {\n  const aliasObject = /^(.*?):/g.exec(alias);\n\n  if (aliasObject) return aliasObject[1];\n\n  return null;\n};\n\n\n//# sourceURL=webpack:///./src/junterDOM/aliases/getAliasName.js?");

/***/ }),

/***/ "./src/junterDOM/aliases/hasAlias.js":
/*!*******************************************!*\
  !*** ./src/junterDOM/aliases/hasAlias.js ***!
  \*******************************************/
/*! exports provided: hasAlias */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasAlias\", function() { return hasAlias; });\n/* harmony import */ var _getAliasName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAliasName */ \"./src/junterDOM/aliases/getAliasName.js\");\n/* harmony import */ var _aliases_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aliases.store */ \"./src/junterDOM/aliases/aliases.store.js\");\n\n\n\nconst hasAlias = (alias) => {\n  const aliasType = Object(_getAliasName__WEBPACK_IMPORTED_MODULE_0__[\"aliasName\"])(alias);\n\n  if (aliasType) return !!_aliases_store__WEBPACK_IMPORTED_MODULE_1__[\"aliasesList\"][aliasType];\n\n  return false;\n};\n\n\n//# sourceURL=webpack:///./src/junterDOM/aliases/hasAlias.js?");

/***/ }),

/***/ "./src/junterDOM/aliases/index.js":
/*!****************************************!*\
  !*** ./src/junterDOM/aliases/index.js ***!
  \****************************************/
/*! exports provided: hasAlias, aliasName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hasAlias__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasAlias */ \"./src/junterDOM/aliases/hasAlias.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"hasAlias\", function() { return _hasAlias__WEBPACK_IMPORTED_MODULE_0__[\"hasAlias\"]; });\n\n/* harmony import */ var _getAliasName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getAliasName */ \"./src/junterDOM/aliases/getAliasName.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"aliasName\", function() { return _getAliasName__WEBPACK_IMPORTED_MODULE_1__[\"aliasName\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/junterDOM/aliases/index.js?");

/***/ }),

/***/ "./src/junterDOM/components/components.store.js":
/*!******************************************************!*\
  !*** ./src/junterDOM/components/components.store.js ***!
  \******************************************************/
/*! exports provided: components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"components\", function() { return components; });\nconst components = {};\n\n\n//# sourceURL=webpack:///./src/junterDOM/components/components.store.js?");

/***/ }),

/***/ "./src/junterDOM/components/registerComponent.js":
/*!*******************************************************!*\
  !*** ./src/junterDOM/components/registerComponent.js ***!
  \*******************************************************/
/*! exports provided: registerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registerComponent\", function() { return registerComponent; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _addAliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addAliases */ \"./src/junterDOM/addAliases.js\");\n/* harmony import */ var _components_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components.store */ \"./src/junterDOM/components/components.store.js\");\n\n\n\n\nconst registerComponent = (name, content, aliases = {}) => {\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"throwError\"])(!Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"isComponent\"])(name), 'The component name must start with a capital letter');\n\n  const component = Object(_addAliases__WEBPACK_IMPORTED_MODULE_1__[\"addAliases\"])(content, aliases, ['slot', 'prop']);\n\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"throwError\"])(!Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"isValidRoot\"])(component), `${name} component object must be an object with once root element`);\n\n  _components_store__WEBPACK_IMPORTED_MODULE_2__[\"components\"][name] = JSON.stringify(component);\n};\n\n\n//# sourceURL=webpack:///./src/junterDOM/components/registerComponent.js?");

/***/ }),

/***/ "./src/junterDOM/components/renderComponent.js":
/*!*****************************************************!*\
  !*** ./src/junterDOM/components/renderComponent.js ***!
  \*****************************************************/
/*! exports provided: renderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderComponent\", function() { return renderComponent; });\n/* harmony import */ var _transformComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transformComponent */ \"./src/junterDOM/transformComponent.js\");\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createElement */ \"./src/junterDOM/createElement.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ \"./src/utils/index.js\");\n\n\n\n\nconst renderComponent = (name, props) => {\n  const { props: componentProps, slots, ...aliases } = props;\n\n  const component = Object(_transformComponent__WEBPACK_IMPORTED_MODULE_0__[\"transformComponent\"])(name, { ...componentProps, ...slots, ...aliases });\n  const tag = Object.keys(component)[0];\n\n  return Object(_createElement__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(tag, Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"parseParams\"])(component[tag]));\n};\n\n\n//# sourceURL=webpack:///./src/junterDOM/components/renderComponent.js?");

/***/ }),

/***/ "./src/junterDOM/createElement.js":
/*!****************************************!*\
  !*** ./src/junterDOM/createElement.js ***!
  \****************************************/
/*! exports provided: createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony import */ var _addContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addContent */ \"./src/junterDOM/addContent.js\");\n/* harmony import */ var _addProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addProps */ \"./src/junterDOM/addProps.js\");\n\n\n\nconst createElement = (tag, params) => {\n  const { props, content } = params || {};\n\n  const element = document.createElement(tag);\n\n  if (content) Object(_addContent__WEBPACK_IMPORTED_MODULE_0__[\"addContent\"])(element, content);\n  if (props) Object(_addProps__WEBPACK_IMPORTED_MODULE_1__[\"addProps\"])(element, props);\n\n  return element;\n};\n\n\n//# sourceURL=webpack:///./src/junterDOM/createElement.js?");

/***/ }),

/***/ "./src/junterDOM/transformComponent.js":
/*!*********************************************!*\
  !*** ./src/junterDOM/transformComponent.js ***!
  \*********************************************/
/*! exports provided: transformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"transformComponent\", function() { return transformComponent; });\n/* harmony import */ var _addAliases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addAliases */ \"./src/junterDOM/addAliases.js\");\n/* harmony import */ var _components_components_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/components.store */ \"./src/junterDOM/components/components.store.js\");\n\n\n\nconst transformComponent = (name, props) => Object(_addAliases__WEBPACK_IMPORTED_MODULE_0__[\"addAliases\"])(_components_components_store__WEBPACK_IMPORTED_MODULE_1__[\"components\"][name], props);\n\n\n//# sourceURL=webpack:///./src/junterDOM/transformComponent.js?");

/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/*! exports provided: settings, editSetting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editSetting\", function() { return editSetting; });\nconst settings = {\n  removeUnnecessary: true,\n};\n\nconst editSetting = (name, value) => {\n  if (settings[name]) settings[name] = value;\n};\n\n\n//# sourceURL=webpack:///./src/settings.js?");

/***/ }),

/***/ "./src/utils/getFirstLetter.js":
/*!*************************************!*\
  !*** ./src/utils/getFirstLetter.js ***!
  \*************************************/
/*! exports provided: getFirstLetter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFirstLetter\", function() { return getFirstLetter; });\nconst getFirstLetter = (str) => str.substr(0, 1);\n\n\n//# sourceURL=webpack:///./src/utils/getFirstLetter.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: getFirstLetter, isComponent, isElementTag, isValidRoot, parseParams, throwError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getFirstLetter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFirstLetter */ \"./src/utils/getFirstLetter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getFirstLetter\", function() { return _getFirstLetter__WEBPACK_IMPORTED_MODULE_0__[\"getFirstLetter\"]; });\n\n/* harmony import */ var _isComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isComponent */ \"./src/utils/isComponent.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isComponent\", function() { return _isComponent__WEBPACK_IMPORTED_MODULE_1__[\"isComponent\"]; });\n\n/* harmony import */ var _isElementTag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isElementTag */ \"./src/utils/isElementTag.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isElementTag\", function() { return _isElementTag__WEBPACK_IMPORTED_MODULE_2__[\"isElementTag\"]; });\n\n/* harmony import */ var _isValidRoot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isValidRoot */ \"./src/utils/isValidRoot.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isValidRoot\", function() { return _isValidRoot__WEBPACK_IMPORTED_MODULE_3__[\"isValidRoot\"]; });\n\n/* harmony import */ var _parseParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parseParams */ \"./src/utils/parseParams.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"parseParams\", function() { return _parseParams__WEBPACK_IMPORTED_MODULE_4__[\"parseParams\"]; });\n\n/* harmony import */ var _throwError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./throwError */ \"./src/utils/throwError.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"throwError\", function() { return _throwError__WEBPACK_IMPORTED_MODULE_5__[\"throwError\"]; });\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/utils/index.js?");

/***/ }),

/***/ "./src/utils/isComponent.js":
/*!**********************************!*\
  !*** ./src/utils/isComponent.js ***!
  \**********************************/
/*! exports provided: isComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isComponent\", function() { return isComponent; });\n/* harmony import */ var _getFirstLetter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFirstLetter */ \"./src/utils/getFirstLetter.js\");\n\n\nconst isComponent = (name) => Object(_getFirstLetter__WEBPACK_IMPORTED_MODULE_0__[\"getFirstLetter\"])(name) === Object(_getFirstLetter__WEBPACK_IMPORTED_MODULE_0__[\"getFirstLetter\"])(name).toUpperCase();\n\n\n//# sourceURL=webpack:///./src/utils/isComponent.js?");

/***/ }),

/***/ "./src/utils/isElementTag.js":
/*!***********************************!*\
  !*** ./src/utils/isElementTag.js ***!
  \***********************************/
/*! exports provided: isElementTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isElementTag\", function() { return isElementTag; });\nconst isElementTag = (element, tagName) => element.nodeName === tagName.toUpperCase();\n\n\n//# sourceURL=webpack:///./src/utils/isElementTag.js?");

/***/ }),

/***/ "./src/utils/isValidRoot.js":
/*!**********************************!*\
  !*** ./src/utils/isValidRoot.js ***!
  \**********************************/
/*! exports provided: isValidRoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isValidRoot\", function() { return isValidRoot; });\nconst isValidRoot = (object) => typeof object === 'object' && !Array.isArray(object) && Object.keys(object).length === 1;\n\n\n//# sourceURL=webpack:///./src/utils/isValidRoot.js?");

/***/ }),

/***/ "./src/utils/parseParams.js":
/*!**********************************!*\
  !*** ./src/utils/parseParams.js ***!
  \**********************************/
/*! exports provided: parseParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseParams\", function() { return parseParams; });\nconst parseParams = (params) => {\n  const type = typeof params;\n\n  if (type === 'string' || type === 'number') {\n    return {\n      props: null,\n      content: params.toString(),\n    };\n  }\n\n  if (Array.isArray(params)) {\n    return {\n      props: null,\n      content: params.map((param) => parseParams(param)),\n    };\n  }\n\n  if (params && Object.prototype.hasOwnProperty.call(params, 'content')) {\n    const { props, content } = params || {};\n\n    return {\n      props, content: parseParams(content).content,\n    };\n  }\n\n  const { props, ...content } = params || {};\n\n  return { props, content };\n};\n\n\n//# sourceURL=webpack:///./src/utils/parseParams.js?");

/***/ }),

/***/ "./src/utils/throwError.js":
/*!*********************************!*\
  !*** ./src/utils/throwError.js ***!
  \*********************************/
/*! exports provided: throwError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"throwError\", function() { return throwError; });\nconst throwError = (condition, msg) => {\n  if (condition) throw new Error(msg);\n};\n\n\n//# sourceURL=webpack:///./src/utils/throwError.js?");

/***/ })

/******/ });