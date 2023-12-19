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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchPosts: function() { return /* binding */ fetchPosts; },\n/* harmony export */   toggleAuth: function() { return /* binding */ toggleAuth; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst fetchPosts = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"posts/fetchPosts\", async ()=>{\n    const response = await fetch(\"https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-09-07&end_date=2023-09-08&api_key=a1ihh4BLJWaSwt11csJ3TMSWdLUcJVcuKtIwRskQ\");\n    const data = await response.json();\n    return data;\n});\nconst initialState = {\n    isAuth: false,\n    posts: [],\n    status: \"idle\",\n    error: null\n};\nconst postsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"posts\",\n    initialState,\n    reducers: {\n        toggleAuth: (state)=>{\n            state.isAuth = !state.isAuth;\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(fetchPosts.pending, (state)=>{\n            state.status = \"idle\";\n        });\n        builder.addCase(fetchPosts.fulfilled, (state, action)=>{\n            state.status = \"succeeded\";\n            state.posts = action.payload;\n        });\n        builder.addCase(fetchPosts.rejected, (state, action)=>{\n            if (action.payload) {\n                state.status = \"failed\";\n                state.error = \"Error occurred: \" + action.payload;\n            } else {\n                state.status = \"failed\";\n                state.error = \"Unknown error occurred\";\n            }\n        });\n    }\n});\nconst { toggleAuth } = postsSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (postsSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3JlZHV4L2ZlYXR1cmVzL3Bvc3RzL3Bvc3RzU2xpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdGO0FBYXpFLE1BQU1FLGFBQWFELGtFQUFnQkEsQ0FDeEMsb0JBQ0E7SUFDRSxNQUFNRSxXQUFXLE1BQU1DLE1BQU07SUFDN0IsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO0lBQ2hDLE9BQU9EO0FBQ1QsR0FDQTtBQUVGLE1BQU1FLGVBQTJCO0lBQy9CQyxRQUFRO0lBQ1JDLE9BQU8sRUFBRTtJQUNUQyxRQUFRO0lBQ1JDLE9BQU87QUFDVDtBQUVBLE1BQU1DLGFBQWFaLDZEQUFXQSxDQUFDO0lBQzdCYSxNQUFNO0lBQ05OO0lBQ0FPLFVBQVU7UUFDUkMsWUFBWSxDQUFDQztZQUNYQSxNQUFNUixNQUFNLEdBQUcsQ0FBQ1EsTUFBTVIsTUFBTTtRQUM5QjtJQUNGO0lBQ0FTLGVBQWUsQ0FBQ0M7UUFDZEEsUUFBUUMsT0FBTyxDQUFDakIsV0FBV2tCLE9BQU8sRUFBRSxDQUFDSjtZQUNuQ0EsTUFBTU4sTUFBTSxHQUFHO1FBQ2pCO1FBQ0FRLFFBQVFDLE9BQU8sQ0FBQ2pCLFdBQVdtQixTQUFTLEVBQUUsQ0FBQ0wsT0FBT007WUFDNUNOLE1BQU1OLE1BQU0sR0FBRztZQUNmTSxNQUFNUCxLQUFLLEdBQUdhLE9BQU9DLE9BQU87UUFDOUI7UUFDQUwsUUFBUUMsT0FBTyxDQUFDakIsV0FBV3NCLFFBQVEsRUFBRSxDQUFDUixPQUFPTTtZQUN6QyxJQUFJQSxPQUFPQyxPQUFPLEVBQUU7Z0JBQ2xCUCxNQUFNTixNQUFNLEdBQUc7Z0JBQ2ZNLE1BQU1MLEtBQUssR0FBRyxxQkFBcUJXLE9BQU9DLE9BQU87WUFDbkQsT0FBTztnQkFDTFAsTUFBTU4sTUFBTSxHQUFHO2dCQUNmTSxNQUFNTCxLQUFLLEdBQUc7WUFDaEI7UUFDRjtJQUNKO0FBQ0Y7QUFFTyxNQUFNLEVBQUVJLFVBQVUsRUFBRSxHQUFHSCxXQUFXYSxPQUFPLENBQUM7QUFDakQsK0RBQWViLFdBQVdjLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWR1eC9mZWF0dXJlcy9wb3N0cy9wb3N0c1NsaWNlLnRzPzAyZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNyZWF0ZUFzeW5jVGh1bmssIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuaW50ZXJmYWNlIFBvc3Qge1xyXG4gIC8vINCe0L/RgNC10LTQtdC70LjRgtC1INGC0LjQvyDQtNCw0L3QvdGL0YUg0LTQu9GPINC/0L7RgdGC0LAg0LfQtNC10YHRjFxyXG59XHJcblxyXG5pbnRlcmZhY2UgUG9zdHNTdGF0ZSB7XHJcbiAgaXNBdXRoOiBib29sZWFuO1xyXG4gIHBvc3RzOiBQb3N0W107XHJcbiAgc3RhdHVzOiAnaWRsZScgfCAnc3VjY2VlZGVkJyB8ICdmYWlsZWQnO1xyXG4gIGVycm9yOiBzdHJpbmcgfCBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hQb3N0cyA9IGNyZWF0ZUFzeW5jVGh1bms8UG9zdFtdPihcclxuICAncG9zdHMvZmV0Y2hQb3N0cycsXHJcbiAgYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkubmFzYS5nb3YvbmVvL3Jlc3QvdjEvZmVlZD9zdGFydF9kYXRlPTIwMjMtMDktMDcmZW5kX2RhdGU9MjAyMy0wOS0wOCZhcGlfa2V5PWExaWhoNEJMSldhU3d0MTFjc0ozVE1TV2RMVWNKVmN1S3RJd1Jza1EnKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gZGF0YSBhcyBQb3N0W107XHJcbiAgfVxyXG4pO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBQb3N0c1N0YXRlID0ge1xyXG4gIGlzQXV0aDogZmFsc2UsXHJcbiAgcG9zdHM6IFtdLFxyXG4gIHN0YXR1czogJ2lkbGUnLFxyXG4gIGVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuY29uc3QgcG9zdHNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAncG9zdHMnLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgdG9nZ2xlQXV0aDogKHN0YXRlKSA9PiB7XHJcbiAgICAgIHN0YXRlLmlzQXV0aCA9ICFzdGF0ZS5pc0F1dGg7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShmZXRjaFBvc3RzLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS5zdGF0dXMgPSAnaWRsZSc7XHJcbiAgICB9KTtcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShmZXRjaFBvc3RzLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UG9zdFtdPikgPT4ge1xyXG4gICAgICBzdGF0ZS5zdGF0dXMgPSAnc3VjY2VlZGVkJztcclxuICAgICAgc3RhdGUucG9zdHMgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0pO1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKGZldGNoUG9zdHMucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnZmFpbGVkJztcclxuICAgICAgICAgIHN0YXRlLmVycm9yID0gJ0Vycm9yIG9jY3VycmVkOiAnICsgYWN0aW9uLnBheWxvYWQ7IFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnZmFpbGVkJztcclxuICAgICAgICAgIHN0YXRlLmVycm9yID0gJ1Vua25vd24gZXJyb3Igb2NjdXJyZWQnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyB0b2dnbGVBdXRoIH0gPSBwb3N0c1NsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IHBvc3RzU2xpY2UucmVkdWNlcjsiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjcmVhdGVBc3luY1RodW5rIiwiZmV0Y2hQb3N0cyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImluaXRpYWxTdGF0ZSIsImlzQXV0aCIsInBvc3RzIiwic3RhdHVzIiwiZXJyb3IiLCJwb3N0c1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwidG9nZ2xlQXV0aCIsInN0YXRlIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsImZ1bGZpbGxlZCIsImFjdGlvbiIsInBheWxvYWQiLCJyZWplY3RlZCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./redux/features/posts/postsSlice.ts\n"));

/***/ })

});