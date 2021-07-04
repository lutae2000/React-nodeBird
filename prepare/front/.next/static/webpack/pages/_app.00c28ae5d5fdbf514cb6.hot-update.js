webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return userSaga; });\n/* harmony import */ var _Users_uitae_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_uitae_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_uitae_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _marked = /*#__PURE__*/_Users_uitae_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logout),\n    _marked2 = /*#__PURE__*/_Users_uitae_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(login),\n    _marked3 = /*#__PURE__*/_Users_uitae_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogin),\n    _marked4 = /*#__PURE__*/_Users_uitae_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogOut),\n    _marked5 = /*#__PURE__*/_Users_uitae_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);\n\n\n\n\nfunction loginAPI(data) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('api/login', data);\n}\n\nfunction logoutAPI() {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('api/post');\n}\n\nfunction logout() {\n  return _Users_uitae_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logout$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          _context.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: ADD_POST_SUCCEED,\n            data: result.data\n          });\n\n        case 3:\n          _context.next = 9;\n          break;\n\n        case 5:\n          _context.prev = 5;\n          _context.t0 = _context[\"catch\"](0);\n          _context.next = 9;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: ADD_POST_FAILURE,\n            data: _context.t0.result.data\n          });\n\n        case 9:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked, null, [[0, 5]]);\n}\n\nfunction login(action) {\n  return _Users_uitae_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function login$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.prev = 0;\n          _context2.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"delay\"])(1000);\n\n        case 3:\n          _context2.next = 5;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: LOG_IN_SUCCEED,\n            data: action.data\n          });\n\n        case 5:\n          _context2.next = 11;\n          break;\n\n        case 7:\n          _context2.prev = 7;\n          _context2.t0 = _context2[\"catch\"](0);\n          _context2.next = 11;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: LOG_IN_FAILURE,\n            data: _context2.t0.action.data\n          });\n\n        case 11:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _marked2, null, [[0, 7]]);\n}\n\nfunction watchLogin() {\n  return _Users_uitae_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogin$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          _context3.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(LOG_IN_REQUEST, login);\n\n        case 2:\n        case \"end\":\n          return _context3.stop();\n      }\n    }\n  }, _marked3);\n}\n\nfunction watchLogOut() {\n  return _Users_uitae_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogOut$(_context4) {\n    while (1) {\n      switch (_context4.prev = _context4.next) {\n        case 0:\n          _context4.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(LOG_OUT_REQUEST, logout);\n\n        case 2:\n        case \"end\":\n          return _context4.stop();\n      }\n    }\n  }, _marked4);\n}\n\nfunction userSaga() {\n  return _Users_uitae_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context5) {\n    while (1) {\n      switch (_context5.prev = _context5.next) {\n        case 0:\n          _context5.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchLogOut)]);\n\n        case 2:\n        case \"end\":\n          return _context5.stop();\n      }\n    }\n  }, _marked5);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcz9hMzg2Il0sIm5hbWVzIjpbImxvZ291dCIsImxvZ2luIiwid2F0Y2hMb2dpbiIsIndhdGNoTG9nT3V0IiwidXNlclNhZ2EiLCJsb2dpbkFQSSIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJsb2dvdXRBUEkiLCJwdXQiLCJ0eXBlIiwiQUREX1BPU1RfU1VDQ0VFRCIsInJlc3VsdCIsIkFERF9QT1NUX0ZBSUxVUkUiLCJhY3Rpb24iLCJkZWxheSIsIkxPR19JTl9TVUNDRUVEIiwiTE9HX0lOX0ZBSUxVUkUiLCJ0YWtlTGF0ZXN0IiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfT1VUX1JFUVVFU1QiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7d0pBWVVBLE07eUpBZUFDLEs7eUpBbUNBQyxVO3lKQUlBQyxXO3lKQUllQyxROztBQXRFekI7QUFDQTs7QUFHQSxTQUFTQyxRQUFULENBQWtCQyxJQUFsQixFQUF3QjtBQUNwQixTQUFPQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsV0FBWCxFQUF3QkYsSUFBeEIsQ0FBUDtBQUNIOztBQUVELFNBQVNHLFNBQVQsR0FBcUI7QUFDakIsU0FBT0YsNENBQUssQ0FBQ0MsSUFBTixDQUFXLFVBQVgsQ0FBUDtBQUNIOztBQUVELFNBQVVSLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHUSxpQkFBTVUsOERBQUcsQ0FBQztBQUNOQyxnQkFBSSxFQUFFQyxnQkFEQTtBQUVOTixnQkFBSSxFQUFFTyxNQUFNLENBQUNQO0FBRlAsV0FBRCxDQUFUOztBQUhSO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFRLGlCQUFNSSw4REFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUVHLGdCQURBO0FBRU5SLGdCQUFJLEVBQUUsWUFBSU8sTUFBSixDQUFXUDtBQUZYLFdBQUQsQ0FBVDs7QUFSUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFlQSxTQUFVTCxLQUFWLENBQWdCYyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdCUSxpQkFBTUMsZ0VBQUssQ0FBQyxJQUFELENBQVg7O0FBaEJSO0FBQUE7QUFrQlEsaUJBQU1OLDhEQUFHLENBQUM7QUFDTkMsZ0JBQUksRUFBRU0sY0FEQTtBQUVOWCxnQkFBSSxFQUFFUyxNQUFNLENBQUNUO0FBRlAsV0FBRCxDQUFUOztBQWxCUjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF1QlEsaUJBQU1JLDhEQUFHLENBQUM7QUFDTkMsZ0JBQUksRUFBRU8sY0FEQTtBQUVOWixnQkFBSSxFQUFFLGFBQUlTLE1BQUosQ0FBV1Q7QUFGWCxXQUFELENBQVQ7O0FBdkJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQW1DQSxTQUFVSixVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJLGlCQUFNaUIscUVBQVUsQ0FBQ0MsY0FBRCxFQUFpQm5CLEtBQWpCLENBQWhCOztBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlBLFNBQVVFLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0ksaUJBQU1nQixxRUFBVSxDQUFDRSxlQUFELEVBQWtCckIsTUFBbEIsQ0FBaEI7O0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSWUsU0FBVUksUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWCxpQkFBTWtCLDhEQUFHLENBQUMsQ0FDTkMsK0RBQUksQ0FBQ3JCLFVBQUQsQ0FERSxFQUVOcUIsK0RBQUksQ0FBQ3BCLFdBQUQsQ0FGRSxDQUFELENBQVQ7O0FBRFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiLi9zYWdhcy91c2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cblxuZnVuY3Rpb24gbG9naW5BUEkoZGF0YSkge1xuICAgIHJldHVybiBheGlvcy5wb3N0KCdhcGkvbG9naW4nLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24gbG9nb3V0QVBJKCkge1xuICAgIHJldHVybiBheGlvcy5wb3N0KCdhcGkvcG9zdCcpO1xufVxuXG5mdW5jdGlvbiogbG9nb3V0KCkge1xuICAgIHRyeSB7XG4gICAgICAgIC8vY29uc3QgcmVzdWx0ID0geWllbGQgZm9yayhsb2dpbkFQSSk7XG4gICAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRUVELFxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3VsdC5kYXRhLFxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZnVuY3Rpb24qIGxvZ2luKGFjdGlvbikge1xuICAgIHRyeSB7XG4gICAgICAgIC8vZm9ya+ulvCDsgqzsmqntlZjrqbQg67mE64+Z6riwIOyymOumrCDqsrDqs7zqsJIg7IOB6rSA7JeG7J20IOytiSDsi6TtlolcbiAgICAgICAgLy9jYWxs7J2EIOyCrOyaqe2VmOuptCAg6rKw6rO86rCSIOuwm+yVhOyZgOyEnCDsspjrpqwg7KeE7ZaJXG4gICAgICAgIFxuICAgICAgICAvL+yYiOyLnFxuICAgICAgICAvKlxuICAgICAgICBheGlvcy5wb3N0KCdhcGkvbG9naW4gJykudGhlbihcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgcHV0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdMT0dfSU5fU1VDQ0VFRCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgICovXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xuICAgICAgICAgICAgLy9jb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ2luQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VFRCxcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhXG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB5aWVsZCBwdXQoe1xuICAgICAgICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXG4gICAgICAgICAgICBkYXRhOiBlcnIuYWN0aW9uLmRhdGEsXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5cblxuXG5cblxuZnVuY3Rpb24qIHdhdGNoTG9naW4oKSB7XG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9naW4pO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ291dCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcbiAgICB5aWVsZCBhbGwoW1xuICAgICAgICBmb3JrKHdhdGNoTG9naW4pLFxuICAgICAgICBmb3JrKHdhdGNoTG9nT3V0KSxcbiAgICBdKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sagas/user.js\n");

/***/ })

})