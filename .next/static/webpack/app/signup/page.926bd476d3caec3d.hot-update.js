"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/signup/page",{

/***/ "(app-pages-browser)/./redux/features/posts/postsSlice.ts":
/*!********************************************!*\
  !*** ./redux/features/posts/postsSlice.ts ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toggleAuth: function() { return /* binding */ toggleAuth; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst postsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"posts\",\n    initialState: {\n        isAuth: false\n    },\n    reducers: {\n        toggleAuth: (state)=>{\n            state.isAuth = true;\n        }\n    }\n});\nconst { toggleAuth } = postsSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (postsSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3JlZHV4L2ZlYXR1cmVzL3Bvc3RzL3Bvc3RzU2xpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBK0M7QUFFL0MsTUFBTUMsYUFBYUQsNkRBQVdBLENBQUM7SUFDM0JFLE1BQU07SUFDTkMsY0FBYztRQUNWQyxRQUFRO0lBQ1o7SUFDQUMsVUFBUztRQUNMQyxZQUFZLENBQUNDO1lBQVdBLE1BQU1ILE1BQU0sR0FBRztRQUFLO0lBQ2hEO0FBRUo7QUFDTyxNQUFNLEVBQUNFLFVBQVUsRUFBQyxHQUFHTCxXQUFXTyxPQUFPLENBQUM7QUFDL0MsK0RBQWVQLFdBQVdRLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWR1eC9mZWF0dXJlcy9wb3N0cy9wb3N0c1NsaWNlLnRzPzAyZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuY29uc3QgcG9zdHNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6ICdwb3N0cycsXHJcbiAgICBpbml0aWFsU3RhdGU6IHtcclxuICAgICAgICBpc0F1dGg6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHJlZHVjZXJzOntcclxuICAgICAgICB0b2dnbGVBdXRoOiAoc3RhdGUpID0+IHtzdGF0ZS5pc0F1dGggPSB0cnVlO30sXHJcbiAgICB9XHJcblxyXG59KTtcclxuZXhwb3J0IGNvbnN0IHt0b2dnbGVBdXRofSA9IHBvc3RzU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgcG9zdHNTbGljZS5yZWR1Y2VyOyJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsInBvc3RzU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwiaXNBdXRoIiwicmVkdWNlcnMiLCJ0b2dnbGVBdXRoIiwic3RhdGUiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./redux/features/posts/postsSlice.ts\n"));

/***/ })

});