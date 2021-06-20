module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9hbnRkL2Rpc3QvYW50ZC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/antd/dist/antd.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ \"./store/configureStore.js\");\n/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-saga */ \"next-redux-saga\");\n/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/uitae/react-nodebird/prepare/front/pages/_app.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\nconst nodeBird = ({\n  Component\n}) => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(\"head\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, __jsx(\"meta\", {\n    charSet: \"utf-8\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }), __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }\n  }, \"Node Bird\")), __jsx(Component, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }));\n};\n\nnodeBird.propTypes = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__[\"default\"].withRedux(next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default()(nodeBird)));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsibm9kZUJpcmQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Iiwid2l0aFJlZHV4U2FnYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBZ0I7QUFDN0IsU0FDSSxtRUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTSxXQUFPLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLENBREEsRUFLQSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxBLENBREo7QUFTSCxDQVZEOztBQVlBRCxRQUFRLENBQUNFLFNBQVQsR0FBcUI7QUFDakJELFdBQVMsRUFBR0UsaURBQVMsQ0FBQ0MsV0FBVixDQUFzQkM7QUFEakIsQ0FBckI7QUFJZUMsNEhBQU8sQ0FBQ0MsU0FBUixDQUFrQkMsc0RBQWEsQ0FBQ1IsUUFBRCxDQUEvQixDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcbmltcG9ydCB3aXRoUmVkdXhTYWdhIGZyb20gJ25leHQtcmVkdXgtc2FnYSc7XG5cbmNvbnN0IG5vZGVCaXJkID0gKHtDb21wb25lbnR9KSA9PntcbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgIDxoZWFkPlxuICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCI+PC9tZXRhPlxuICAgICAgICAgICAgPHRpdGxlPk5vZGUgQmlyZDwvdGl0bGU+XG4gICAgICAgIDwvaGVhZD5cbiAgICAgICAgPENvbXBvbmVudCAvPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxubm9kZUJpcmQucHJvcFR5cGVzID0ge1xuICAgIENvbXBvbmVudCA6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eCh3aXRoUmVkdXhTYWdhKG5vZGVCaXJkKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ \"./reducers/user.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ \"./reducers/post.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n //action creater\n\nconst changeNickname = data => {\n  return {\n    type: 'CHANGE_NICKNAME',\n    data: 'booicho'\n  };\n};\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"combineReducers\"])({\n  index: (state = {}, action) => {\n    switch (action.type) {\n      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"HYDRATE\"]:\n        console.log('HYDRATE', action);\n        return _objectSpread(_objectSpread({}, state), action.payload);\n\n      default:\n        return state;\n    }\n  },\n  user: _user__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  post: _post__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcz9jZThlIl0sIm5hbWVzIjpbImNoYW5nZU5pY2tuYW1lIiwiZGF0YSIsInR5cGUiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4Iiwic3RhdGUiLCJhY3Rpb24iLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJ1c2VyIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtDQUlFOztBQUNBLE1BQU1BLGNBQWMsR0FBSUMsSUFBRCxJQUFVO0FBQy9CLFNBQU87QUFDSEMsUUFBSSxFQUFFLGlCQURIO0FBRUhELFFBQUksRUFBRTtBQUZILEdBQVA7QUFJRCxDQUxEOztBQVFGLE1BQU1FLFdBQVcsR0FBR0MsNkRBQWUsQ0FBQztBQUNsQ0MsT0FBSyxFQUFFLENBQUNDLEtBQUssR0FBRyxFQUFULEVBQWFDLE1BQWIsS0FBd0I7QUFDN0IsWUFBUUEsTUFBTSxDQUFDTCxJQUFmO0FBQ0UsV0FBS00sMERBQUw7QUFDRUMsZUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkgsTUFBdkI7QUFDQSwrQ0FBWUQsS0FBWixHQUFzQkMsTUFBTSxDQUFDSSxPQUE3Qjs7QUFDRjtBQUNFLGVBQU9MLEtBQVA7QUFMSjtBQU9ELEdBVGlDO0FBVWxDTSxxREFWa0M7QUFXbENDLHFEQUFJQTtBQVg4QixDQUFELENBQW5DO0FBZWlCViwwRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnO1xuXG5cbiAgLy9hY3Rpb24gY3JlYXRlclxuICBjb25zdCBjaGFuZ2VOaWNrbmFtZSA9IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ0NIQU5HRV9OSUNLTkFNRScsXG4gICAgICAgIGRhdGE6ICdib29pY2hvJyxcbiAgICB9XG4gIH07IFxuXG4gIFxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBpbmRleDogKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgSFlEUkFURTpcbiAgICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLCBhY3Rpb24pO1xuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH0sXG4gIHVzZXIsXG4gIHBvc3QsXG59KTtcblxuICBcbiAgZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst initialState = {\n  mainPosts: [{\n    id: 1,\n    User: {\n      me: 1,\n      nickname: '이의태'\n    },\n    content: '첫 번째 게시글',\n    hashtag: '#해시태그 #익스프레스',\n    Images: [{\n      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726'\n    }, {\n      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg'\n    }, {\n      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg'\n    }],\n    Comments: [{\n      User: {\n        nickname: 'nero'\n      },\n      content: '우와 개정판이 나왔군요~'\n    }, {\n      User: {\n        nickname: 'hehe'\n      },\n      content: '얼른 사고싶어요~'\n    }]\n  }],\n  imagePaths: [],\n  postAdded: false\n};\nconst ADD_POST = 'ADD_POST';\nconst addPost = {\n  type: ADD_POST\n};\nconst dummyPost = {\n  id: 2,\n  content: '더미데이터입니다.',\n  User: {\n    id: 1,\n    nickname: '제로초'\n  },\n  Images: [],\n  Comments: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((state = initialState, action) => {\n  switch (action.type) {\n    case 'ADD_POST':\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          mainPosts: [dummyPost, ...state.mainPosts],\n          postAdded: true\n        });\n      }\n\n    default:\n      {\n        return _objectSpread({}, state);\n      }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzP2E3ZTMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibWUiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJoYXNodGFnIiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwicG9zdEFkZGVkIiwiQUREX1BPU1QiLCJhZGRQb3N0IiwidHlwZSIsImR1bW15UG9zdCIsInN0YXRlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBTyxNQUFNQSxZQUFZLEdBQUc7QUFDMUJDLFdBQVMsRUFBRSxDQUFDO0FBQ1ZDLE1BQUUsRUFBRSxDQURNO0FBRVZDLFFBQUksRUFBRTtBQUNKQyxRQUFFLEVBQUUsQ0FEQTtBQUVKQyxjQUFRLEVBQUU7QUFGTixLQUZJO0FBTVZDLFdBQU8sRUFBRSxVQU5DO0FBT1ZDLFdBQU8sRUFBRSxjQVBDO0FBUVZDLFVBQU0sRUFBRSxDQUFDO0FBQ1BDLFNBQUcsRUFBRTtBQURFLEtBQUQsRUFFTDtBQUNEQSxTQUFHLEVBQUU7QUFESixLQUZLLEVBSUw7QUFDREEsU0FBRyxFQUFFO0FBREosS0FKSyxDQVJFO0FBZVZDLFlBQVEsRUFBRSxDQUFDO0FBQ1RQLFVBQUksRUFBRTtBQUNKRSxnQkFBUSxFQUFFO0FBRE4sT0FERztBQUlUQyxhQUFPLEVBQUU7QUFKQSxLQUFELEVBS1A7QUFDREgsVUFBSSxFQUFFO0FBQ0pFLGdCQUFRLEVBQUU7QUFETixPQURMO0FBSURDLGFBQU8sRUFBRTtBQUpSLEtBTE87QUFmQSxHQUFELENBRGU7QUE0QjFCSyxZQUFVLEVBQUUsRUE1QmM7QUE2QjFCQyxXQUFTLEVBQUU7QUE3QmUsQ0FBckI7QUFnQ1AsTUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBRU8sTUFBTUMsT0FBTyxHQUFHO0FBQ3JCQyxNQUFJLEVBQUVGO0FBRGUsQ0FBaEI7QUFJUCxNQUFNRyxTQUFTLEdBQUc7QUFDaEJkLElBQUUsRUFBRSxDQURZO0FBRWhCSSxTQUFPLEVBQUUsV0FGTztBQUdoQkgsTUFBSSxFQUFFO0FBQ0pELE1BQUUsRUFBRSxDQURBO0FBRUpHLFlBQVEsRUFBRTtBQUZOLEdBSFU7QUFPaEJHLFFBQU0sRUFBRSxFQVBRO0FBUWhCRSxVQUFRLEVBQUU7QUFSTSxDQUFsQjtBQVdlLGdFQUFDTyxLQUFLLEdBQUdqQixZQUFULEVBQXVCa0IsTUFBdkIsS0FBa0M7QUFDL0MsVUFBUUEsTUFBTSxDQUFDSCxJQUFmO0FBQ0UsU0FBSyxVQUFMO0FBQWlCO0FBQ2YsK0NBQ0tFLEtBREw7QUFFRWhCLG1CQUFTLEVBQUUsQ0FBQ2UsU0FBRCxFQUFZLEdBQUdDLEtBQUssQ0FBQ2hCLFNBQXJCLENBRmI7QUFHRVcsbUJBQVMsRUFBRTtBQUhiO0FBS0Q7O0FBQ0Q7QUFBUztBQUNQLGlDQUNLSyxLQURMO0FBR0Q7QUFaSDtBQWNELENBZkQiLCJmaWxlIjoiLi9yZWR1Y2Vycy9wb3N0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbWFpblBvc3RzOiBbe1xuICAgIGlkOiAxLFxuICAgIFVzZXI6IHtcbiAgICAgIG1lOiAxLFxuICAgICAgbmlja25hbWU6ICfsnbTsnZjtg5wnLFxuICAgIH0sXG4gICAgY29udGVudDogJ+yyqyDrsojsp7gg6rKM7Iuc6riAJyxcbiAgICBoYXNodGFnOiAnI+2VtOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkJyxcbiAgICBJbWFnZXM6IFt7XG4gICAgICBzcmM6ICdodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91ZGF0ZT0yMDE4MDcyNicsXG4gICAgfSwge1xuICAgICAgc3JjOiAnaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTU4L3JuX3ZpZXdfQk4wMDE5NTguanBnJyxcbiAgICB9LCB7XG4gICAgICBzcmM6ICdodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5OTgvcm5fdmlld19CTjAwMTk5OC5qcGcnLFxuICAgIH1dLFxuICAgIENvbW1lbnRzOiBbe1xuICAgICAgVXNlcjoge1xuICAgICAgICBuaWNrbmFtZTogJ25lcm8nLFxuICAgICAgfSxcbiAgICAgIGNvbnRlbnQ6ICfsmrDsmYAg6rCc7KCV7YyQ7J20IOuCmOyZlOq1sOyalH4nLFxuICAgIH0sIHtcbiAgICAgIFVzZXI6IHtcbiAgICAgICAgbmlja25hbWU6ICdoZWhlJyxcbiAgICAgIH0sXG4gICAgICBjb250ZW50OiAn7Ja866W4IOyCrOqzoOyLtuyWtOyalH4nLFxuICAgIH1dXG4gIH1dLFxuICBpbWFnZVBhdGhzOiBbXSxcbiAgcG9zdEFkZGVkOiBmYWxzZSxcbn07XG5cbmNvbnN0IEFERF9QT1NUID0gJ0FERF9QT1NUJztcblxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSB7XG4gIHR5cGU6IEFERF9QT1NULFxufTtcblxuY29uc3QgZHVtbXlQb3N0ID0ge1xuICBpZDogMixcbiAgY29udGVudDogJ+uNlOuvuOuNsOydtO2EsOyeheuLiOuLpC4nLFxuICBVc2VyOiB7XG4gICAgaWQ6IDEsXG4gICAgbmlja25hbWU6ICfsoJzroZzstIgnLFxuICB9LFxuICBJbWFnZXM6IFtdLFxuICBDb21tZW50czogW10sXG59O1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnQUREX1BPU1QnOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0LCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxuICAgICAgICBwb3N0QWRkZWQ6IHRydWUsXG4gICAgICB9O1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gICAgfVxuICB9XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCEED, SIGN_UP_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_REQUEST\", function() { return LOG_IN_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_SUCCESS\", function() { return LOG_IN_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_FAILURE\", function() { return LOG_IN_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_REQUEST\", function() { return LOG_OUT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_SUCCESS\", function() { return LOG_OUT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_FAILURE\", function() { return LOG_OUT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_REQUEST\", function() { return SIGN_UP_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_SUCCEED\", function() { return SIGN_UP_SUCCEED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_FAILURE\", function() { return SIGN_UP_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOLLOW_REQUEST\", function() { return FOLLOW_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOLLOW_SUCCESS\", function() { return FOLLOW_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOLLOW_FAILURE\", function() { return FOLLOW_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNFOLLOW_REQUEST\", function() { return UNFOLLOW_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNFOLLOW_SUCCESS\", function() { return UNFOLLOW_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNFOLLOW_FAILURE\", function() { return UNFOLLOW_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginRequestAction\", function() { return loginRequestAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutRequestAction\", function() { return logoutRequestAction; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst initialState = {\n  loginLoading: false,\n  loginDone: false,\n  loginError: null,\n  logoutLoading: false,\n  logoutDone: false,\n  logoutFailure: null,\n  me: null,\n  signUpData: {},\n  loginData: {}\n};\nconst LOG_IN_REQUEST = 'LOG_IN_REQUEST';\nconst LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';\nconst LOG_IN_FAILURE = 'LOG_IN_FAILURE';\nconst LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';\nconst LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';\nconst LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';\nconst SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';\nconst SIGN_UP_SUCCEED = 'SIGN_UP_SUCCEED';\nconst SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';\nconst FOLLOW_REQUEST = 'FOLLOW_REQUEST';\nconst FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';\nconst FOLLOW_FAILURE = 'FOLLOW_FAILURE';\nconst UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';\nconst UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';\nconst UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';\nconst loginRequestAction = data => {\n  return {\n    type: LOG_IN_REQUEST,\n    data\n  };\n};\nconst logoutRequestAction = () => {\n  return {\n    type: LOG_OUT_REQUEST\n  };\n};\n\nconst dummyUser = data => _objectSpread(_objectSpread({}, data), {}, {\n  nickname: '제로초',\n  id: 1,\n  Posts: [{\n    id: 1\n  }]\n});\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case LOG_IN_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loginLoading: true,\n        loginError: null,\n        loginDone: false\n      });\n\n    case LOG_IN_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loginLoading: false,\n        loginDone: true,\n        me: dummyUser(action.data)\n      });\n\n    case LOG_IN_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loginLoading: false,\n        loginError: action.error,\n        me: action.data\n      });\n\n    case LOG_OUT_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        logoutLoading: true,\n        logoutError: null,\n        logoutDone: false\n      });\n\n    case LOG_OUT_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        logoutLoading: false,\n        logoutDone: true\n      });\n\n    case LOG_OUT_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        logoutLoading: false,\n        logoutError: action.error\n      });\n\n    default:\n      return _objectSpread({}, state);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzPzJjMDUiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibG9naW5Mb2FkaW5nIiwibG9naW5Eb25lIiwibG9naW5FcnJvciIsImxvZ291dExvYWRpbmciLCJsb2dvdXREb25lIiwibG9nb3V0RmFpbHVyZSIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VFRCIsIlNJR05fVVBfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsImR1bW15VXNlciIsIm5pY2tuYW1lIiwiaWQiLCJQb3N0cyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImVycm9yIiwibG9nb3V0RXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTyxNQUFNQSxZQUFZLEdBQUc7QUFDMUJDLGNBQVksRUFBRSxLQURZO0FBRTFCQyxXQUFTLEVBQUUsS0FGZTtBQUcxQkMsWUFBVSxFQUFFLElBSGM7QUFLMUJDLGVBQWEsRUFBRSxLQUxXO0FBTTFCQyxZQUFVLEVBQUUsS0FOYztBQU8xQkMsZUFBYSxFQUFFLElBUFc7QUFVMUJDLElBQUUsRUFBRSxJQVZzQjtBQVcxQkMsWUFBVSxFQUFFLEVBWGM7QUFZMUJDLFdBQVMsRUFBRTtBQVplLENBQXJCO0FBZUEsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBRUEsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBRUEsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBRUEsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBRUEsTUFBTUMsa0JBQWtCLEdBQUlDLElBQUQsSUFBVTtBQUN4QyxTQUFPO0FBQ0xDLFFBQUksRUFBRWpCLGNBREQ7QUFFTGdCO0FBRkssR0FBUDtBQUlELENBTEk7QUFPQSxNQUFNRSxtQkFBbUIsR0FBRyxNQUFNO0FBQ3ZDLFNBQU87QUFDSEQsUUFBSSxFQUFFZDtBQURILEdBQVA7QUFHRCxDQUpNOztBQU1QLE1BQU1nQixTQUFTLEdBQUlILElBQUQsb0NBQ2JBLElBRGE7QUFFaEJJLFVBQVEsRUFBRSxLQUZNO0FBR2hCQyxJQUFFLEVBQUUsQ0FIWTtBQUloQkMsT0FBSyxFQUFFLENBQUM7QUFBQ0QsTUFBRSxFQUFDO0FBQUosR0FBRDtBQUpTLEVBQWxCOztBQU9BLE1BQU1FLE9BQU8sR0FBSSxDQUFDQyxLQUFLLEdBQUdsQyxZQUFULEVBQXVCbUMsTUFBdkIsS0FBa0M7QUFDL0MsVUFBT0EsTUFBTSxDQUFDUixJQUFkO0FBQ0UsU0FBS2pCLGNBQUw7QUFDRSw2Q0FDS3dCLEtBREw7QUFFRWpDLG9CQUFZLEVBQUUsSUFGaEI7QUFHRUUsa0JBQVUsRUFBRSxJQUhkO0FBSUVELGlCQUFTLEVBQUU7QUFKYjs7QUFPRixTQUFLUyxjQUFMO0FBQ0UsNkNBQ091QixLQURQO0FBRUlqQyxvQkFBWSxFQUFFLEtBRmxCO0FBR0lDLGlCQUFTLEVBQUUsSUFIZjtBQUlJSyxVQUFFLEVBQUVzQixTQUFTLENBQUNNLE1BQU0sQ0FBQ1QsSUFBUjtBQUpqQjs7QUFPRixTQUFLZCxjQUFMO0FBQ0UsNkNBQ09zQixLQURQO0FBRUlqQyxvQkFBWSxFQUFFLEtBRmxCO0FBR0lFLGtCQUFVLEVBQUVnQyxNQUFNLENBQUNDLEtBSHZCO0FBSUk3QixVQUFFLEVBQUU0QixNQUFNLENBQUNUO0FBSmY7O0FBTUYsU0FBS2IsZUFBTDtBQUNFLDZDQUNLcUIsS0FETDtBQUVFOUIscUJBQWEsRUFBRSxJQUZqQjtBQUdFaUMsbUJBQVcsRUFBRSxJQUhmO0FBSUVoQyxrQkFBVSxFQUFFO0FBSmQ7O0FBTUYsU0FBS1MsZUFBTDtBQUNFLDZDQUNLb0IsS0FETDtBQUVFOUIscUJBQWEsRUFBRSxLQUZqQjtBQUdFQyxrQkFBVSxFQUFFO0FBSGQ7O0FBTUYsU0FBS1UsZUFBTDtBQUNFLDZDQUNLbUIsS0FETDtBQUVFOUIscUJBQWEsRUFBRSxLQUZqQjtBQUdFaUMsbUJBQVcsRUFBRUYsTUFBTSxDQUFDQztBQUh0Qjs7QUFLRjtBQUNFLCtCQUNLRixLQURMO0FBN0NKO0FBaURILENBbEREOztBQXNEZUQsc0VBQWYiLCJmaWxlIjoiLi9yZWR1Y2Vycy91c2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBsb2dpbkxvYWRpbmc6IGZhbHNlLFxuICBsb2dpbkRvbmU6IGZhbHNlLFxuICBsb2dpbkVycm9yOiBudWxsLFxuICBcbiAgbG9nb3V0TG9hZGluZzogZmFsc2UsXG4gIGxvZ291dERvbmU6IGZhbHNlLFxuICBsb2dvdXRGYWlsdXJlOiBudWxsLFxuICBcbiAgXG4gIG1lOiBudWxsLFxuICBzaWduVXBEYXRhOiB7fSxcbiAgbG9naW5EYXRhOiB7fSxcbn07XG5cbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRUVEID0gJ1NJR05fVVBfU1VDQ0VFRCc7XG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXG4gICAgICBkYXRhLFxuICAgIH1cbiAgfTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXG4gIH0gIFxufTtcblxuY29uc3QgZHVtbXlVc2VyID0gKGRhdGEpID0+ICh7XG4gIC4uLmRhdGEsXG4gIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyxcbiAgaWQ6IDEsXG4gIFBvc3RzOiBbe2lkOjF9XSxcbn0pXG5cbmNvbnN0IHJlZHVjZXIgID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xuICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcbiAgICAgICAgcmV0dXJue1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGxvZ2luTG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICBsb2dpbkVycm9yOiBudWxsLFxuICAgICAgICAgIGxvZ2luRG9uZTogZmFsc2UsXG4gICAgICAgIH07XG5cbiAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XG4gICAgICAgIHJldHVybntcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgbG9naW5Mb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGxvZ2luRG9uZTogdHJ1ZSxcbiAgICAgICAgICAgIG1lOiBkdW1teVVzZXIoYWN0aW9uLmRhdGEpLFxuICAgICAgICB9O1xuXG4gICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxuICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGxvZ2luTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBsb2dpbkVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICAgICAgICBtZTogYWN0aW9uLmRhdGEsXG4gICAgICAgIH07XG4gICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcbiAgICAgICAgcmV0dXJue1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGxvZ291dExvYWRpbmc6IHRydWUsXG4gICAgICAgICAgbG9nb3V0RXJyb3I6IG51bGwsXG4gICAgICAgICAgbG9nb3V0RG9uZTogZmFsc2UsXG4gICAgICAgIH1cbiAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxuICAgICAgICByZXR1cm57XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgbG9nb3V0TG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgbG9nb3V0RG9uZTogdHJ1ZSxcbiAgICAgICAgfVxuICBcbiAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxuICAgICAgICByZXR1cm57XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgbG9nb3V0TG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgbG9nb3V0RXJyb3I6IGFjdGlvbi5lcnJvcixcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rootSaga; });\n/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/core/effects */ \"@redux-saga/core/effects\");\n/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ \"./sagas/post.js\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ \"./sagas/user.js\");\n\n\n\nfunction* rootSaga() {\n  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(_post__WEBPACK_IMPORTED_MODULE_1__[\"default\"]), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcz83N2UzIl0sIm5hbWVzIjpbInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInBvc3RTYWdhIiwidXNlclNhZ2EiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdlLFVBQVVBLFFBQVYsR0FBcUI7QUFDaEMsUUFBTUMsb0VBQUcsQ0FBQyxDQUNOQyxxRUFBSSxDQUFDQyw2Q0FBRCxDQURFLEVBRU5ELHFFQUFJLENBQUNFLDZDQUFELENBRkUsQ0FBRCxDQUFUO0FBSUgiLCJmaWxlIjoiLi9zYWdhcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgZm9yaywgdGFrZUxhdGVzdCwgZGVsYXkgfSBmcm9tICdAcmVkdXgtc2FnYS9jb3JlL2VmZmVjdHMnO1xuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCc7XG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG4gICAgeWllbGQgYWxsKFtcbiAgICAgICAgZm9yayhwb3N0U2FnYSksXG4gICAgICAgIGZvcmsodXNlclNhZ2EpLFxuICAgIF0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sagas/index.js\n");

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return postSaga; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redux-saga/core/effects */ \"@redux-saga/core/effects\");\n/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction* addPost(action) {\n  try {\n    //const result = yield call(loginAPI, action.data);\n    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n      type: ADD_POST_SUCCEED,\n      data: result.data\n    });\n  } catch (err) {\n    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n      type: ADD_POST_FAILURE,\n      data: err.result.data\n    });\n  }\n}\n\nfunction addPostAPI(data) {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('api/post', data);\n} //takeEvery는 while 돌리는것처럼 매번 실행\n//takeLatest는 짧은시간내 여러번 이벤트 발생해도 맨 마지막것만 실행\n//takeLeading 짧은시간에 여러번의 이벤트시 첫번째것 실행\n\n\nfunction* watchAddPost() {\n  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])('ADD_POST_REQUEST');\n}\n\nfunction* postSaga() {\n  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__[\"all\"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchAddPost)]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9wb3N0LmpzPzNhYmEiXSwibmFtZXMiOlsiYWRkUG9zdCIsImFjdGlvbiIsInB1dCIsInR5cGUiLCJBRERfUE9TVF9TVUNDRUVEIiwiZGF0YSIsInJlc3VsdCIsImVyciIsIkFERF9QT1NUX0ZBSUxVUkUiLCJhZGRQb3N0QVBJIiwiYXhpb3MiLCJwb3N0Iiwid2F0Y2hBZGRQb3N0IiwidGFrZUxhdGVzdCIsInBvc3RTYWdhIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFHQSxVQUFVQSxPQUFWLENBQWtCQyxNQUFsQixFQUEwQjtBQUN0QixNQUFJO0FBQ0E7QUFDQSxVQUFNQyxvRUFBRyxDQUFDO0FBQ05DLFVBQUksRUFBRUMsZ0JBREE7QUFFTkMsVUFBSSxFQUFFQyxNQUFNLENBQUNEO0FBRlAsS0FBRCxDQUFUO0FBSUgsR0FORCxDQU1FLE9BQU9FLEdBQVAsRUFBWTtBQUNWLFVBQU1MLG9FQUFHLENBQUM7QUFDTkMsVUFBSSxFQUFFSyxnQkFEQTtBQUVOSCxVQUFJLEVBQUVFLEdBQUcsQ0FBQ0QsTUFBSixDQUFXRDtBQUZYLEtBQUQsQ0FBVDtBQUlIO0FBQ0o7O0FBRUQsU0FBU0ksVUFBVCxDQUFvQkosSUFBcEIsRUFBMEI7QUFDdEIsU0FBT0ssNENBQUssQ0FBQ0MsSUFBTixDQUFXLFVBQVgsRUFBdUJOLElBQXZCLENBQVA7QUFDSCxDLENBR0Q7QUFDQTtBQUNBOzs7QUFJQSxVQUFVTyxZQUFWLEdBQXlCO0FBQ3JCLFFBQU1DLDJFQUFVLENBQUMsa0JBQUQsQ0FBaEI7QUFDSDs7QUFHYyxVQUFVQyxRQUFWLEdBQXFCO0FBQ2hDLFFBQU1DLG9FQUFHLENBQUMsQ0FDTkMscUVBQUksQ0FBQ0osWUFBRCxDQURFLENBQUQsQ0FBVDtBQUdIIiwiZmlsZSI6Ii4vc2FnYXMvcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IGRlbGF5LCBwdXQsIHRha2VMYXRlc3QsIGFsbCwgZm9yayB9IGZyb20gJ0ByZWR1eC1zYWdhL2NvcmUvZWZmZWN0cyc7XG5cblxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgLy9jb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ2luQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRUVELFxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3VsdC5kYXRhLFxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJ2FwaS9wb3N0JywgZGF0YSk7XG59XG5cblxuLy90YWtlRXZlcnnripQgd2hpbGUg64+M66as64qU6rKD7LKY65+8IOunpOuyiCDsi6Ttlolcbi8vdGFrZUxhdGVzdOuKlCDsp6fsnYDsi5zqsITrgrQg7Jes65+s67KIIOydtOuypO2KuCDrsJzsg53tlbTrj4Qg66eoIOuniOyngOunieqyg+unjCDsi6Ttlolcbi8vdGFrZUxlYWRpbmcg7Ken7J2A7Iuc6rCE7JeQIOyXrOufrOuyiOydmCDsnbTrsqTtirjsi5wg7LKr67KI7Ke46rKDIOyLpO2WiVxuXG5cblxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KCdBRERfUE9TVF9SRVFVRVNUJyk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xuICAgIHlpZWxkIGFsbChbXG4gICAgICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcbiAgICBdKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sagas/post.js\n");

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return userSaga; });\nfunction loginAPI(data) {\n  return axios.post('api/login', data);\n}\n\nfunction logoutAPI() {\n  return axios.post('api/post');\n}\n\nfunction* logout() {\n  try {\n    //const result = yield fork(loginAPI);\n    yield put({\n      type: ADD_POST_SUCCEED,\n      data: result.data\n    });\n  } catch (err) {\n    yield put({\n      type: ADD_POST_FAILURE,\n      data: err.result.data\n    });\n  }\n}\n\nfunction* login(action) {\n  try {\n    //fork를 사용하면 비동기 처리 결과값 상관없이 쭉 실행\n    //call을 사용하면  결과값 받아와서 처리 진행\n    //예시\n\n    /*\n    axios.post('api/login ').then(\n        () => {\n                yield put({\n                    type: 'LOG_IN_SUCCEED',\n                    data: result.data,\n                })\n            }\n        )\n    */\n    yield delay(1000); //const result = yield call(loginAPI, action.data);\n\n    yield put({\n      type: LOG_IN_SUCCEED,\n      data: action.data\n    });\n  } catch (err) {\n    yield put({\n      type: LOG_IN_FAILURE,\n      data: err.action.data\n    });\n  }\n}\n\nfunction* watchLogin() {\n  yield takeLatest(LOG_IN_REQUEST, login);\n}\n\nfunction* watchLogOut() {\n  yield takeLatest(LOG_OUT_REQUEST, logout);\n}\n\nfunction* userSaga() {\n  yield all([fork(watchLogin), fork(watchLogOut)]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzP2EzODYiXSwibmFtZXMiOlsibG9naW5BUEkiLCJkYXRhIiwiYXhpb3MiLCJwb3N0IiwibG9nb3V0QVBJIiwibG9nb3V0IiwicHV0IiwidHlwZSIsIkFERF9QT1NUX1NVQ0NFRUQiLCJyZXN1bHQiLCJlcnIiLCJBRERfUE9TVF9GQUlMVVJFIiwibG9naW4iLCJhY3Rpb24iLCJkZWxheSIsIkxPR19JTl9TVUNDRUVEIiwiTE9HX0lOX0ZBSUxVUkUiLCJ3YXRjaExvZ2luIiwidGFrZUxhdGVzdCIsIkxPR19JTl9SRVFVRVNUIiwid2F0Y2hMb2dPdXQiLCJMT0dfT1VUX1JFUVVFU1QiLCJ1c2VyU2FnYSIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQSxTQUFTQSxRQUFULENBQWtCQyxJQUFsQixFQUF3QjtBQUNwQixTQUFPQyxLQUFLLENBQUNDLElBQU4sQ0FBVyxXQUFYLEVBQXdCRixJQUF4QixDQUFQO0FBQ0g7O0FBRUQsU0FBU0csU0FBVCxHQUFxQjtBQUNqQixTQUFPRixLQUFLLENBQUNDLElBQU4sQ0FBVyxVQUFYLENBQVA7QUFDSDs7QUFFRCxVQUFVRSxNQUFWLEdBQW1CO0FBQ2YsTUFBSTtBQUNBO0FBQ0EsVUFBTUMsR0FBRyxDQUFDO0FBQ05DLFVBQUksRUFBRUMsZ0JBREE7QUFFTlAsVUFBSSxFQUFFUSxNQUFNLENBQUNSO0FBRlAsS0FBRCxDQUFUO0FBSUgsR0FORCxDQU1FLE9BQU9TLEdBQVAsRUFBWTtBQUNWLFVBQU1KLEdBQUcsQ0FBQztBQUNOQyxVQUFJLEVBQUVJLGdCQURBO0FBRU5WLFVBQUksRUFBRVMsR0FBRyxDQUFDRCxNQUFKLENBQVdSO0FBRlgsS0FBRCxDQUFUO0FBSUg7QUFDSjs7QUFHRCxVQUFVVyxLQUFWLENBQWdCQyxNQUFoQixFQUF3QjtBQUNwQixNQUFJO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1EsVUFBTUMsS0FBSyxDQUFDLElBQUQsQ0FBWCxDQWZBLENBZ0JJOztBQUNKLFVBQU1SLEdBQUcsQ0FBQztBQUNOQyxVQUFJLEVBQUVRLGNBREE7QUFFTmQsVUFBSSxFQUFFWSxNQUFNLENBQUNaO0FBRlAsS0FBRCxDQUFUO0FBSUgsR0FyQkQsQ0FxQkUsT0FBT1MsR0FBUCxFQUFZO0FBQ1YsVUFBTUosR0FBRyxDQUFDO0FBQ05DLFVBQUksRUFBRVMsY0FEQTtBQUVOZixVQUFJLEVBQUVTLEdBQUcsQ0FBQ0csTUFBSixDQUFXWjtBQUZYLEtBQUQsQ0FBVDtBQUlIO0FBQ0o7O0FBT0QsVUFBVWdCLFVBQVYsR0FBdUI7QUFDbkIsUUFBTUMsVUFBVSxDQUFDQyxjQUFELEVBQWlCUCxLQUFqQixDQUFoQjtBQUNIOztBQUVELFVBQVVRLFdBQVYsR0FBd0I7QUFDcEIsUUFBTUYsVUFBVSxDQUFDRyxlQUFELEVBQWtCaEIsTUFBbEIsQ0FBaEI7QUFDSDs7QUFFYyxVQUFVaUIsUUFBVixHQUFxQjtBQUNoQyxRQUFNQyxHQUFHLENBQUMsQ0FDTkMsSUFBSSxDQUFDUCxVQUFELENBREUsRUFFTk8sSUFBSSxDQUFDSixXQUFELENBRkUsQ0FBRCxDQUFUO0FBSUgiLCJmaWxlIjoiLi9zYWdhcy91c2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbG9naW5BUEkoZGF0YSkge1xuICAgIHJldHVybiBheGlvcy5wb3N0KCdhcGkvbG9naW4nLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24gbG9nb3V0QVBJKCkge1xuICAgIHJldHVybiBheGlvcy5wb3N0KCdhcGkvcG9zdCcpO1xufVxuXG5mdW5jdGlvbiogbG9nb3V0KCkge1xuICAgIHRyeSB7XG4gICAgICAgIC8vY29uc3QgcmVzdWx0ID0geWllbGQgZm9yayhsb2dpbkFQSSk7XG4gICAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRUVELFxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3VsdC5kYXRhLFxuICAgICAgICB9KVxuICAgIH1cbn1cblxuXG5mdW5jdGlvbiogbG9naW4oYWN0aW9uKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgLy9mb3Jr66W8IOyCrOyaqe2VmOuptCDruYTrj5nquLAg7LKY66asIOqysOqzvOqwkiDsg4HqtIDsl4bsnbQg7K2JIOyLpO2WiVxuICAgICAgICAvL2NhbGzsnYQg7IKs7Jqp7ZWY66m0ICDqsrDqs7zqsJIg67Cb7JWE7JmA7IScIOyymOumrCDsp4TtlolcbiAgICAgICAgXG4gICAgICAgIC8v7JiI7IucXG4gICAgICAgIC8qXG4gICAgICAgIGF4aW9zLnBvc3QoJ2FwaS9sb2dpbiAnKS50aGVuKFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBwdXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0xPR19JTl9TVUNDRUVEJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgKi9cbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XG4gICAgICAgICAgICAvL2NvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9naW5BUEksIGFjdGlvbi5kYXRhKTtcbiAgICAgICAgeWllbGQgcHV0KHtcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9TVUNDRUVELFxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGFcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcbiAgICAgICAgICAgIGRhdGE6IGVyci5hY3Rpb24uZGF0YSxcbiAgICAgICAgfSlcbiAgICB9XG59XG5cblxuXG5cblxuXG5mdW5jdGlvbiogd2F0Y2hMb2dpbigpIHtcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dpbik7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nb3V0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xuICAgIHlpZWxkIGFsbChbXG4gICAgICAgIGZvcmsod2F0Y2hMb2dpbiksXG4gICAgICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxuICAgIF0pXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sagas/user.js\n");

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ \"./sagas/index.js\");\n\n\n\n\n\n\n\nconst loggerMiddleware = ({\n  dispatch,\n  getState\n}) => next => action => {\n  console.log(action);\n  return next(action);\n};\n\nconst configureStore = context => {\n  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_4___default()();\n  const middlewares = [sagaMiddleware, loggerMiddleware];\n  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(...middlewares));\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], enhancer);\n  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  return store;\n};\n\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"createWrapper\"])(configureStore, {\n  debug: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (wrapper);\n/*\n리액트 SAGA란?\n애플리케이션에서 일어나는 side effect(데이터를 불러오는 비동기 처리나 브라우저 캐쉬에 접근하는등)등을\n쉽게 관리하여 효과적인 실행, 손쉬운 테스트, 에러 핸들링을 쉽게 해줌\n\nhttps://uzihoon.com/post/181be130-63a7-11ea-a51b-d348fee141c4\nhttps://velog.io/@jeonghoheo/Redux-Saga%EC%9D%98-%EA%B8%B0%EB%B3%B8\nhttps://react.vlpt.us/redux-middleware/10-redux-saga.html\n*///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcz8wMTA5Il0sIm5hbWVzIjpbImxvZ2dlck1pZGRsZXdhcmUiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwibmV4dCIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJjb25maWd1cmVTdG9yZSIsImNvbnRleHQiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJzYWdhVGFzayIsInJ1biIsInJvb3RTYWdhIiwid3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxnQkFBZ0IsR0FBRyxDQUFDO0FBQUVDLFVBQUY7QUFBWUM7QUFBWixDQUFELEtBQTZCQyxJQUFELElBQVdDLE1BQUQsSUFBWTtBQUN2RUMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7QUFDQSxTQUFPRCxJQUFJLENBQUNDLE1BQUQsQ0FBWDtBQUNILENBSEQ7O0FBS0EsTUFBTUcsY0FBYyxHQUFJQyxPQUFELElBQWE7QUFDaEMsUUFBTUMsY0FBYyxHQUFHQyxpREFBb0IsRUFBM0M7QUFDQSxRQUFNQyxXQUFXLEdBQUcsQ0FBQ0YsY0FBRCxFQUFpQlQsZ0JBQWpCLENBQXBCO0FBQ0EsUUFBTVksUUFBUSxHQUFHLFFBQ2ZDLFNBRGUsR0FFZkMsb0ZBQW1CLENBQUNDLDZEQUFlLENBQUMsR0FBR0osV0FBSixDQUFoQixDQUZyQjtBQUdBLFFBQU1LLEtBQUssR0FBR0MseURBQVcsQ0FBQ0MsaURBQUQsRUFBVU4sUUFBVixDQUF6QjtBQUNBSSxPQUFLLENBQUNHLFFBQU4sR0FBaUJWLGNBQWMsQ0FBQ1csR0FBZixDQUFtQkMsOENBQW5CLENBQWpCO0FBRUEsU0FBT0wsS0FBUDtBQUNILENBVkQ7O0FBWUEsTUFBTU0sT0FBTyxHQUFHQyx3RUFBYSxDQUFDaEIsY0FBRCxFQUFpQjtBQUMxQ2lCLE9BQUs7QUFEcUMsQ0FBakIsQ0FBN0I7QUFJZUYsc0VBQWY7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IHsgY29tcG9zZSwgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcbmltcG9ydCB7Y29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnO1xuXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID0gKHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0pID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XG4gICAgY29uc29sZS5sb2coYWN0aW9uKTtcbiAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xufVxuXG5jb25zdCBjb25maWd1cmVTdG9yZSA9IChjb250ZXh0KSA9PiB7XG4gICAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xuICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlXTtcbiAgICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcbiAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XG4gICAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xuXG4gICAgcmV0dXJuIHN0b3JlO1xufTtcblxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcbiAgICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcblxuLypcbuumrOyVoe2KuCBTQUdB656AP1xu7JWg7ZSM66as7LyA7J207IWY7JeQ7IScIOydvOyWtOuCmOuKlCBzaWRlIGVmZmVjdCjrjbDsnbTthLDrpbwg67aI65+s7Jik64qUIOu5hOuPmeq4sCDsspjrpqzrgpgg67iM65287Jqw7KCAIOy6kOyJrOyXkCDsoJHqt7ztlZjripTrk7Ep65Ox7J2EXG7sib3qsowg6rSA66as7ZWY7JesIO2aqOqzvOyggeyduCDsi6TtloksIOyGkOyJrOyatCDthYzsiqTtirgsIOyXkOufrCDtlbjrk6Trp4HsnYQg7Im96rKMIO2VtOykjFxuXG5odHRwczovL3V6aWhvb24uY29tL3Bvc3QvMTgxYmUxMzAtNjNhNy0xMWVhLWE1MWItZDM0OGZlZTE0MWM0XG5odHRwczovL3ZlbG9nLmlvL0BqZW9uZ2hvaGVvL1JlZHV4LVNhZ2ElRUMlOUQlOTgtJUVBJUI4JUIwJUVCJUIzJUI4XG5odHRwczovL3JlYWN0LnZscHQudXMvcmVkdXgtbWlkZGxld2FyZS8xMC1yZWR1eC1zYWdhLmh0bWxcbiovIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/configureStore.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@redux-saga/core/effects":
/*!*******************************************!*\
  !*** external "@redux-saga/core/effects" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@redux-saga/core/effects\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkdXgtc2FnYS9jb3JlL2VmZmVjdHNcIj9hY2I5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkByZWR1eC1zYWdhL2NvcmUvZWZmZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eC1zYWdhL2NvcmUvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@redux-saga/core/effects\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-saga\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXNhZ2FcIj81MGI1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtc2FnYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtc2FnYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-saga\n");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCI/Mzg3YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWR1eC1zYWdhLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga\n");

/***/ })

/******/ });