"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/signin/page",{

/***/ "(app-pages-browser)/./redux/features/posts/postsSlice.ts":
/*!********************************************!*\
  !*** ./redux/features/posts/postsSlice.ts ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchPosts: function() { return /* binding */ fetchPosts; },\n/* harmony export */   toggleAuth: function() { return /* binding */ toggleAuth; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst fetchPosts = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"posts/fetchPosts\", async ()=>{\n    const response = await fetch(\"https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-11-18&end_date=2015-09-08&api_key=a1ihh4BLJWaSwt11csJ3TMSWdLUcJVcuKtIwRskQ\");\n    const data = await response.json();\n    return data;\n});\nconst postsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"posts\",\n    initialState: {\n        isAuth: false\n    },\n    reducers: {\n        toggleAuth: (state)=>{\n            state.isAuth = !state.isAuth;\n        }\n    }\n});\nconst { toggleAuth } = postsSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (postsSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3JlZHV4L2ZlYXR1cmVzL3Bvc3RzL3Bvc3RzU2xpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlFO0FBRTFELE1BQU1FLGFBQWFELGtFQUFnQkEsQ0FBQyxvQkFBb0I7SUFDM0QsTUFBTUUsV0FBVyxNQUFNQyxNQUFNO0lBQzdCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtJQUNoQyxPQUFPRDtBQUNULEdBQUc7QUFFTCxNQUFNRSxhQUFhUCw2REFBV0EsQ0FBQztJQUMzQlEsTUFBTTtJQUNOQyxjQUFjO1FBQ1ZDLFFBQVE7SUFDWjtJQUNBQyxVQUFTO1FBQ0xDLFlBQVksQ0FBQ0M7WUFBV0EsTUFBTUgsTUFBTSxHQUFHLENBQUNHLE1BQU1ILE1BQU07UUFBQztJQUN6RDtBQUVKO0FBQ08sTUFBTSxFQUFDRSxVQUFVLEVBQUMsR0FBR0wsV0FBV08sT0FBTyxDQUFDO0FBQy9DLCtEQUFlUCxXQUFXUSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvZmVhdHVyZXMvcG9zdHMvcG9zdHNTbGljZS50cz8wMmVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFBvc3RzID0gY3JlYXRlQXN5bmNUaHVuaygncG9zdHMvZmV0Y2hQb3N0cycsIGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLm5hc2EuZ292L25lby9yZXN0L3YxL2ZlZWQ/c3RhcnRfZGF0ZT0yMDIzLTExLTE4JmVuZF9kYXRlPTIwMTUtMDktMDgmYXBpX2tleT1hMWloaDRCTEpXYVN3dDExY3NKM1RNU1dkTFVjSlZjdUt0SXdSc2tRJyk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfSk7XHJcblxyXG5jb25zdCBwb3N0c1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ3Bvc3RzJyxcclxuICAgIGluaXRpYWxTdGF0ZToge1xyXG4gICAgICAgIGlzQXV0aDogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgcmVkdWNlcnM6e1xyXG4gICAgICAgIHRvZ2dsZUF1dGg6IChzdGF0ZSkgPT4ge3N0YXRlLmlzQXV0aCA9ICFzdGF0ZS5pc0F1dGg7fSxcclxuICAgIH1cclxuXHJcbn0pO1xyXG5leHBvcnQgY29uc3Qge3RvZ2dsZUF1dGh9ID0gcG9zdHNTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBwb3N0c1NsaWNlLnJlZHVjZXI7Il0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiY3JlYXRlQXN5bmNUaHVuayIsImZldGNoUG9zdHMiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwb3N0c1NsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsImlzQXV0aCIsInJlZHVjZXJzIiwidG9nZ2xlQXV0aCIsInN0YXRlIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./redux/features/posts/postsSlice.ts\n"));

/***/ })

});