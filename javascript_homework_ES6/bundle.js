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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _superFunc = __webpack_require__(2);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function () {

	var SPACE = ' ';

	var $ = function $(id) {
		return document.getElementById(id);
	};
	var qs = function qs(s) {
		return document.querySelector(s);
	};

	var form = document.getElementsByTagName('form')[0];
	var menu = document.getElementsByTagName('nav')[0];
	var email = qs("#inputEmail");

	if (true) {
		var fillNav = function fillNav() {
			var menuArr = ['About us', 'History', 'Catalog', 'Contacts'];
			menuArr.map(function (elem) {
				var item = document.createElement("a");
				item.innerHTML = elem;
				item.setAttribute('href', '#');
				menu.appendChild(item);
				menu.appendChild(document.createTextNode(' | '));
			});
		};
		fillNav();
	}

	form.addEventListener("submit", function (event) {
		if (email.validity.typeMismatch) {
			event.preventDefault();
		}
	}, false);

	$("sortArr").addEventListener("click", function (event) {
		var arr = $("inputArr").value.split(',');
		arr.sort(function (a, b) {
			return a - b;
		});
		qs(".ResultSort").innerHTML = [].concat(_toConsumableArray(arr));
	}, false);

	var modifyArr = function modifyArr(arr) {
		var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'reverse';

		if (type = 'reverse') {
			return arr.reduceRight(function (a, b) {
				return a.concat(b);
			});
		}
	};

	var destr = function destr(_ref) {
		var first = _ref.first,
		    second = _ref.second,
		    third = _ref.third,
		    _ref$fourth = _ref.fourth,
		    fourth = _ref$fourth === undefined ? 'assignment!' : _ref$fourth;
		return first + SPACE + second + SPACE + third + SPACE + fourth;
	};

	$("reverseStr").addEventListener("click", function (event) {
		var str = $("inputStr").value;
		qs(".ResultReverse").innerHTML = modifyArr(str.split(''));
	}, false);

	$("destr").addEventListener("click", function (event) {
		var obj = {
			first: "It's",
			second: "example",
			third: "destructuring"
		};
		qs(".ResultDestr").innerHTML = destr(obj);
	}, false);

	$("calcArea").addEventListener("click", function (event) {
		var r = 7;
		qs(".ResultArea").innerHTML = 'A = ' + Math.PI * Math.pow(r, 2);
	}, false);

	$("superEx").addEventListener("click", function (event) {
		qs(".ResultSuper").innerHTML = (0, _superFunc.superExample)();
	}, false);
})();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.superExample = superExample;
function superExample() {
  var _obj;

  var Ukraine = {
    live: function live() {
      return "I live in Ukraine";
    }
  };

  var Kyiv = _obj = {
    live: function live() {
      return _get(_obj.__proto__ || Object.getPrototypeOf(_obj), "live", this).call(this) + ", in Kyiv !";
    }
  };

  Object.setPrototypeOf(Kyiv, Ukraine);
  return Kyiv.live();
}

/***/ })
/******/ ]);