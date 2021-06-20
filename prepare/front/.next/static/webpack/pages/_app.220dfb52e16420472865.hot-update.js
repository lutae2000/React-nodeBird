webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginAction\", function() { return loginAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutAction\", function() { return logoutAction; });\n/* harmony import */ var _Users_uitae_react_nodebird_prepare_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_uitae_react_nodebird_prepare_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar dummyUser = {\n  id: 1,\n  nickname: '제로초',\n  Posts: [],\n  Followings: [],\n  Followers: []\n};\nvar initialState = {\n  isLoggedIn: false,\n  isLoggingIn: false,\n  isLoggingOut: false,\n  me: null,\n  signUpData: {},\n  loginData: {}\n};\nvar loginAction = function loginAction(data) {\n  return {\n    type: 'LOG_IN',\n    data: data\n  };\n};\nvar logoutAction = {\n  type: 'LOG_OUT'\n};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'LOG_IN_REQUEST':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggedIn: true,\n        me: action.data\n      });\n\n    case 'LOG_IN_SUCCEED':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggedIn: true,\n        me: action.data\n      });\n\n    case 'LOG_IN_FAILURE':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggedIn: true,\n        me: action.data\n      });\n\n    case 'LOG_OUT':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggedIn: false,\n        me: null\n      });\n\n    default:\n      return _objectSpread({}, state);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcz8yYzA1Il0sIm5hbWVzIjpbImR1bW15VXNlciIsImlkIiwibmlja25hbWUiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJpbml0aWFsU3RhdGUiLCJpc0xvZ2dlZEluIiwiaXNMb2dnaW5nSW4iLCJpc0xvZ2dpbmdPdXQiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJsb2dpbkFjdGlvbiIsImRhdGEiLCJ0eXBlIiwibG9nb3V0QWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLElBQU1BLFNBQVMsR0FBRztBQUNoQkMsSUFBRSxFQUFFLENBRFk7QUFFaEJDLFVBQVEsRUFBRSxLQUZNO0FBR2hCQyxPQUFLLEVBQUUsRUFIUztBQUloQkMsWUFBVSxFQUFFLEVBSkk7QUFLaEJDLFdBQVMsRUFBRTtBQUxLLENBQWxCO0FBUU8sSUFBTUMsWUFBWSxHQUFHO0FBQzFCQyxZQUFVLEVBQUUsS0FEYztBQUUxQkMsYUFBVyxFQUFFLEtBRmE7QUFHMUJDLGNBQVksRUFBRSxLQUhZO0FBSTFCQyxJQUFFLEVBQUUsSUFKc0I7QUFLMUJDLFlBQVUsRUFBRSxFQUxjO0FBTTFCQyxXQUFTLEVBQUU7QUFOZSxDQUFyQjtBQVNBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLElBQUQsRUFBVTtBQUNqQyxTQUFPO0FBQ0xDLFFBQUksRUFBRSxRQUREO0FBRUxELFFBQUksRUFBSkE7QUFGSyxHQUFQO0FBSUQsQ0FMSTtBQU9BLElBQU1FLFlBQVksR0FBRztBQUN4QkQsTUFBSSxFQUFFO0FBRGtCLENBQXJCOztBQUlQLElBQU1FLE9BQU8sR0FBSSxTQUFYQSxPQUFXLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QlosWUFBeUI7QUFBQSxNQUFYYSxNQUFXOztBQUMvQyxVQUFPQSxNQUFNLENBQUNKLElBQWQ7QUFDRSxTQUFLLGdCQUFMO0FBQ0EsNkNBQ1NHLEtBRFQ7QUFFTVgsa0JBQVUsRUFBRSxJQUZsQjtBQUdNRyxVQUFFLEVBQUVTLE1BQU0sQ0FBQ0w7QUFIakI7O0FBS0EsU0FBSyxnQkFBTDtBQUNJLDZDQUNXSSxLQURYO0FBRVFYLGtCQUFVLEVBQUUsSUFGcEI7QUFHUUcsVUFBRSxFQUFFUyxNQUFNLENBQUNMO0FBSG5COztBQU1KLFNBQUssZ0JBQUw7QUFDQSw2Q0FDV0ksS0FEWDtBQUVRWCxrQkFBVSxFQUFFLElBRnBCO0FBR1FHLFVBQUUsRUFBRVMsTUFBTSxDQUFDTDtBQUhuQjs7QUFLQSxTQUFLLFNBQUw7QUFDSSw2Q0FDT0ksS0FEUDtBQUVJWCxrQkFBVSxFQUFFLEtBRmhCO0FBR0lHLFVBQUUsRUFBRTtBQUhSOztBQUtGO0FBQ0ksK0JBQ0tRLEtBREw7QUEzQlI7QUErQkgsQ0FoQ0Q7O0FBb0NlRCxzRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL3VzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgIFxuY29uc3QgZHVtbXlVc2VyID0ge1xuICBpZDogMSxcbiAgbmlja25hbWU6ICfsoJzroZzstIgnLFxuICBQb3N0czogW10sXG4gIEZvbGxvd2luZ3M6IFtdLFxuICBGb2xsb3dlcnM6IFtdLFxufTtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaXNMb2dnZWRJbjogZmFsc2UsXG4gIGlzTG9nZ2luZ0luOiBmYWxzZSxcbiAgaXNMb2dnaW5nT3V0OiBmYWxzZSxcbiAgbWU6IG51bGwsXG4gIHNpZ25VcERhdGE6IHt9LFxuICBsb2dpbkRhdGE6IHt9LFxufTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ0xPR19JTicsXG4gICAgICBkYXRhLFxuICAgIH1cbiAgfTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dEFjdGlvbiA9IHtcbiAgICB0eXBlOiAnTE9HX09VVCcsXG59O1xuXG5jb25zdCByZWR1Y2VyICA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcbiAgICAgIGNhc2UgJ0xPR19JTl9SRVFVRVNUJzpcbiAgICAgIHJldHVybntcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcbiAgICAgICAgICAgIG1lOiBhY3Rpb24uZGF0YSxcbiAgICAgIH07ICBcbiAgICAgIGNhc2UgJ0xPR19JTl9TVUNDRUVEJzpcbiAgICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXG4gICAgICAgICAgICAgICAgICBtZTogYWN0aW9uLmRhdGEsXG4gICAgICAgICAgfTtcblxuICAgICAgY2FzZSAnTE9HX0lOX0ZBSUxVUkUnOlxuICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcbiAgICAgICAgICAgICAgbWU6IGFjdGlvbi5kYXRhLFxuICAgICAgfTtcbiAgICAgIGNhc2UgJ0xPR19PVVQnOlxuICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxuICAgICAgICAgICAgICBtZTogbnVsbCxcbiAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIH1cbiAgICB9XG59O1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ })

})