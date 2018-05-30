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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./addChildrenToDiv.js":
/*!*****************************!*\
  !*** ./addChildrenToDiv.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(numbersArray){\r\n    var div = document.getElementsByClassName(\"list\")[0];\r\n    positions = [];\r\n    var position = 0;\r\n    for(var i = 0; i < numbersArray.length; i++){\r\n        var span = document.createElement(\"span\");\r\n        span.id = position++;\r\n        span.style.left = positionLeft + \"px\";\r\n        positions.push(positionLeft);\r\n        positionLeft += 15;\r\n        span.innerHTML = numbersArray[i];\r\n        div.appendChild(span);\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./addChildrenToDiv.js?");

/***/ }),

/***/ "./clearDiv.js":
/*!*********************!*\
  !*** ./clearDiv.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function() {\r\n    var div = document.getElementsByClassName(\"list\")[0];\r\n    var DivChildren = document.getElementsByTagName(\"span\");\r\n    for (var i = 0; i < DivChildren.length; )\r\n        div.removeChild(DivChildren[0]);\r\n    positionLeft = 10;\r\n}\n\n//# sourceURL=webpack:///./clearDiv.js?");

/***/ }),

/***/ "./createArrayFromString.js":
/*!**********************************!*\
  !*** ./createArrayFromString.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(string) {\r\n    var result = [];\r\n    for (var i = 0; i < string.length; i++) {\r\n        if (!Number.isInteger(+string[i]) || string[i] == \" \")\r\n            continue;\r\n        result.push(string[i]);\r\n    }\r\n    return result;\r\n}\n\n//# sourceURL=webpack:///./createArrayFromString.js?");

/***/ }),

/***/ "./getInput.js":
/*!*********************!*\
  !*** ./getInput.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var clearDiv = __webpack_require__( /*! ./clearDiv */ \"./clearDiv.js\" );\r\nvar createArrayFromString = __webpack_require__( /*! ./createArrayFromString */ \"./createArrayFromString.js\" );\r\nvar addChildrenToDiv = __webpack_require__( /*! ./addChildrenToDiv */ \"./addChildrenToDiv.js\" );\r\n\r\nmodule.exports = function getInput() {\r\n    clearDiv()\r\n    var input = document.getElementsByTagName(\"input\")[0];\r\n    var inputContent = input.value;\r\n    digitsFromUserInput = createArrayFromString(inputContent);\r\n    addChildrenToDiv(digitsFromUserInput);\r\n    input.value = digitsFromUserInput.join(\"\");\r\n};\n\n//# sourceURL=webpack:///./getInput.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var digitsFromUserInput;\r\nvar positionLeft;\r\nvar positions;\r\nvar sortOrder = {'ascending':1, 'descending':0};\r\n\r\nvar getInput = __webpack_require__(/*! ./getInput */ \"./getInput.js\"); \r\nvar sort = __webpack_require__(/*! ./sort */ \"./sort.js\"); \r\n\r\ninput.onchange = getInput;\r\nbutton.onclick = sort;\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./sort.js":
/*!*****************!*\
  !*** ./sort.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var swap = __webpack_require__(/*! ./swap */ \"./swap.js\");\r\nvar ascendingOrder = true;\r\n\r\nmodule.exports = function sort() {\r\n    if (ascendingOrder)\r\n        sortAscending();\r\n    else\r\n        sortDescending();\r\n}\r\n\r\nfunction sortAscending(){\r\n    for (var i = digitsFromUserInput.length - 1; i > 0; i--) {\r\n        if (digitsFromUserInput[i - 1] > digitsFromUserInput[i]) {\r\n            var previousSpan = document.getElementById(i - 1);\r\n            var currentSpan = document.getElementById(i);\r\n            previousSpan.style.color = currentSpan.style.color = \"red\";\r\n            setTimeout(function() {\r\n                currentSpan.style.color = previousSpan.style.color = \"black\";\r\n            }, 2100);\r\n            previousSpan.style.left = positions[i] + \"px\";\r\n            currentSpan.style.left = positions[i - 1] + \"px\";\r\n            swap(i, currentSpan, previousSpan);\r\n            break;\r\n        }\r\n    }\r\n    if (i == 0) {\r\n        ascendingOrder = false;\r\n    }\r\n}\r\n\r\nfunction sortDescending() {\r\n    for (var i = 0; i < digitsFromUserInput.length - 1; i++) {\r\n        if (digitsFromUserInput[i] < digitsFromUserInput[i + 1]) {\r\n            var currentSpan = document.getElementById(i);\r\n            var nextSpan = document.getElementById(i + 1);\r\n            currentSpan.style.color = nextSpan.style.color = \"red\";\r\n            setTimeout(function() {\r\n                currentSpan.style.color = nextSpan.style.color = \"black\";\r\n            }, 2100);\r\n            currentSpan.style.left = positions[i + 1] + \"px\";\r\n            nextSpan.style.left = positions[i] + \"px\";\r\n            swap(i+1, currentSpan, nextSpan);\r\n            break;\r\n        }\r\n    }\r\n    if (i == digitsFromUserInput.length - 1) {\r\n        ascendingOrder = true;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./sort.js?");

/***/ }),

/***/ "./swap.js":
/*!*****************!*\
  !*** ./swap.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(index, span1, span2) {\r\n    var temp = span1.id;\r\n    span1.id = span2.id;\r\n    span2.id = temp;\r\n    temp = digitsFromUserInput[index - 1];\r\n    digitsFromUserInput[index - 1] = digitsFromUserInput[index];\r\n    digitsFromUserInput[index] = temp;\r\n}\n\n//# sourceURL=webpack:///./swap.js?");

/***/ })

/******/ });