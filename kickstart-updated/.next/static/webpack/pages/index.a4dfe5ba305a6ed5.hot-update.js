"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./ethereum/factory.js":
/*!*****************************!*\
  !*** ./ethereum/factory.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("var __dirname = \"/\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _build_CampaignFactory_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build/CampaignFactory.json */ \"./ethereum/build/CampaignFactory.json\");\n\n\nconst path = __webpack_require__(/*! path */ \"./node_modules/next/dist/compiled/path-browserify/index.js\");\n(__webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\").config)({\n    path: path.resolve(__dirname, \"../.env\")\n});\nconst address1 = \"0x41f38e37f8334953077BD18A422Dd38C7ce91877\";\n//const address1= '0x41f38e37f8334953077BD18A422Dd38C7ce91877';\nconsole.log(\"Environment variables in use: \\n \".concat(address1));\nconst instance = new _web3__WEBPACK_IMPORTED_MODULE_0__[\"default\"].eth.Contract(_build_CampaignFactory_json__WEBPACK_IMPORTED_MODULE_1__.abi, address1);\n/* harmony default export */ __webpack_exports__[\"default\"] = (instance);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ldGhlcmV1bS9mYWN0b3J5LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBMEI7QUFDaUM7QUFDM0QsTUFBTUUsT0FBT0MsbUJBQU9BLENBQUM7QUFDckJBLCtFQUF3QixDQUFDO0lBQUVELE1BQU1BLEtBQUtHLE9BQU8sQ0FBQ0MsU0FBU0EsRUFBRTtBQUFXO0FBR3BFLE1BQU1DLFdBQVdDLDRDQUErQjtBQUVoRCwrREFBK0Q7QUFFL0RHLFFBQVFDLEdBQUcsQ0FBQyxvQ0FBNkMsT0FBVEw7QUFHaEQsTUFBTU0sV0FBVyxJQUFJYixpREFBUSxDQUFDZSxRQUFRLENBQ3BDZCw0REFBbUIsRUFDbkJNO0FBR0YsK0RBQWVNLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZXRoZXJldW0vZmFjdG9yeS5qcz9kMjQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZWIzIGZyb20gXCIuL3dlYjNcIjtcbmltcG9ydCBDYW1wYWlnbkZhY3RvcnkgZnJvbSBcIi4vYnVpbGQvQ2FtcGFpZ25GYWN0b3J5Lmpzb25cIjtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbnJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZyh7IHBhdGg6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uZW52JykgfSlcbiAgXG5cbmNvbnN0IGFkZHJlc3MxID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQUREUkVTUztcblxuLy9jb25zdCBhZGRyZXNzMT0gJzB4NDFmMzhlMzdmODMzNDk1MzA3N0JEMThBNDIyRGQzOEM3Y2U5MTg3Nyc7XG5cbmNvbnNvbGUubG9nKGBFbnZpcm9ubWVudCB2YXJpYWJsZXMgaW4gdXNlOiBcXG4gJHthZGRyZXNzMX1gKTtcblxuIFxuY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXG4gIENhbXBhaWduRmFjdG9yeS5hYmksXG4gIGFkZHJlc3MxXG4pO1xuIFxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7Il0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbkZhY3RvcnkiLCJwYXRoIiwicmVxdWlyZSIsImNvbmZpZyIsInJlc29sdmUiLCJfX2Rpcm5hbWUiLCJhZGRyZXNzMSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BRERSRVNTIiwiY29uc29sZSIsImxvZyIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJhYmkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./ethereum/factory.js\n"));

/***/ })

});