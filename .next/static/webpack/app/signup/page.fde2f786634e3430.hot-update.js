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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchPosts: function() { return /* binding */ fetchPosts; },\n/* harmony export */   toggleAuth: function() { return /* binding */ toggleAuth; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst fetchPosts = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"posts/fetchPosts\", async ()=>{\n    const response = await fetch(\"https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-09-07&end_date=2023-09-08&api_key=a1ihh4BLJWaSwt11csJ3TMSWdLUcJVcuKtIwRskQ\");\n    const data = await response.json();\n    return data; // Верните данные в виде массива постов\n});\nconst initialState = {\n    isAuth: false,\n    posts: [],\n    status: \"idle\",\n    error: null\n};\nconst postsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"posts\",\n    initialState,\n    reducers: {\n        toggleAuth: (state)=>{\n            state.isAuth = !state.isAuth;\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(fetchPosts.pending, (state)=>{\n            state.status = \"idle\";\n        });\n        builder.addCase(fetchPosts.fulfilled, (state, action)=>{\n            state.status = \"succeeded\";\n            state.posts = action.payload;\n        });\n        builder.addCase(fetchPosts.rejected, (state, action)=>{\n            state.status = \"failed\";\n            state.error = action.payload;\n        });\n    }\n});\nconst { toggleAuth } = postsSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (postsSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3JlZHV4L2ZlYXR1cmVzL3Bvc3RzL3Bvc3RzU2xpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdGO0FBYXpFLE1BQU1FLGFBQWFELGtFQUFnQkEsQ0FDeEMsb0JBQ0E7SUFDRSxNQUFNRSxXQUFXLE1BQU1DLE1BQU07SUFDN0IsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO0lBQ2hDLE9BQU9ELE1BQWdCLHVDQUF1QztBQUNoRSxHQUNBO0FBRUYsTUFBTUUsZUFBMkI7SUFDL0JDLFFBQVE7SUFDUkMsT0FBTyxFQUFFO0lBQ1RDLFFBQVE7SUFDUkMsT0FBTztBQUNUO0FBRUEsTUFBTUMsYUFBYVosNkRBQVdBLENBQUM7SUFDN0JhLE1BQU07SUFDTk47SUFDQU8sVUFBVTtRQUNSQyxZQUFZLENBQUNDO1lBQ1hBLE1BQU1SLE1BQU0sR0FBRyxDQUFDUSxNQUFNUixNQUFNO1FBQzlCO0lBQ0Y7SUFDQVMsZUFBZSxDQUFDQztRQUNkQSxRQUFRQyxPQUFPLENBQUNqQixXQUFXa0IsT0FBTyxFQUFFLENBQUNKO1lBQ25DQSxNQUFNTixNQUFNLEdBQUc7UUFDakI7UUFDQVEsUUFBUUMsT0FBTyxDQUFDakIsV0FBV21CLFNBQVMsRUFBRSxDQUFDTCxPQUFPTTtZQUM1Q04sTUFBTU4sTUFBTSxHQUFHO1lBQ2ZNLE1BQU1QLEtBQUssR0FBR2EsT0FBT0MsT0FBTztRQUM5QjtRQUNBTCxRQUFRQyxPQUFPLENBQUNqQixXQUFXc0IsUUFBUSxFQUFFLENBQUNSLE9BQU9NO1lBQzNDTixNQUFNTixNQUFNLEdBQUc7WUFDZk0sTUFBTUwsS0FBSyxHQUFHVyxPQUFPQyxPQUFPO1FBQzlCO0lBQ0Y7QUFDRjtBQUVPLE1BQU0sRUFBRVIsVUFBVSxFQUFFLEdBQUdILFdBQVdhLE9BQU8sQ0FBQztBQUNqRCwrREFBZWIsV0FBV2MsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHV4L2ZlYXR1cmVzL3Bvc3RzL3Bvc3RzU2xpY2UudHM/MDJlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgY3JlYXRlQXN5bmNUaHVuaywgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5pbnRlcmZhY2UgUG9zdCB7XHJcbiAgLy8g0J7Qv9GA0LXQtNC10LvQuNGC0LUg0YLQuNC/INC00LDQvdC90YvRhSDQtNC70Y8g0L/QvtGB0YLQsCDQt9C00LXRgdGMXHJcbn1cclxuXHJcbmludGVyZmFjZSBQb3N0c1N0YXRlIHtcclxuICBpc0F1dGg6IGJvb2xlYW47XHJcbiAgcG9zdHM6IFBvc3RbXTtcclxuICBzdGF0dXM6ICdpZGxlJyB8ICdzdWNjZWVkZWQnIHwgJ2ZhaWxlZCc7XHJcbiAgZXJyb3I6IHN0cmluZyB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFBvc3RzID0gY3JlYXRlQXN5bmNUaHVuazxQb3N0W10+KFxyXG4gICdwb3N0cy9mZXRjaFBvc3RzJyxcclxuICBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5uYXNhLmdvdi9uZW8vcmVzdC92MS9mZWVkP3N0YXJ0X2RhdGU9MjAyMy0wOS0wNyZlbmRfZGF0ZT0yMDIzLTA5LTA4JmFwaV9rZXk9YTFpaGg0QkxKV2FTd3QxMWNzSjNUTVNXZExVY0pWY3VLdEl3UnNrUScpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiBkYXRhIGFzIFBvc3RbXTsgLy8g0JLQtdGA0L3QuNGC0LUg0LTQsNC90L3Ri9C1INCyINCy0LjQtNC1INC80LDRgdGB0LjQstCwINC/0L7RgdGC0L7QslxyXG4gIH1cclxuKTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogUG9zdHNTdGF0ZSA9IHtcclxuICBpc0F1dGg6IGZhbHNlLFxyXG4gIHBvc3RzOiBbXSxcclxuICBzdGF0dXM6ICdpZGxlJyxcclxuICBlcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IHBvc3RzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ3Bvc3RzJyxcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHRvZ2dsZUF1dGg6IChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS5pc0F1dGggPSAhc3RhdGUuaXNBdXRoO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XHJcbiAgICBidWlsZGVyLmFkZENhc2UoZmV0Y2hQb3N0cy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcclxuICAgICAgc3RhdGUuc3RhdHVzID0gJ2lkbGUnO1xyXG4gICAgfSk7XHJcbiAgICBidWlsZGVyLmFkZENhc2UoZmV0Y2hQb3N0cy5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFBvc3RbXT4pID0+IHtcclxuICAgICAgc3RhdGUuc3RhdHVzID0gJ3N1Y2NlZWRlZCc7XHJcbiAgICAgIHN0YXRlLnBvc3RzID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9KTtcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShmZXRjaFBvc3RzLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSA9PiB7XHJcbiAgICAgIHN0YXRlLnN0YXR1cyA9ICdmYWlsZWQnO1xyXG4gICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyB0b2dnbGVBdXRoIH0gPSBwb3N0c1NsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IHBvc3RzU2xpY2UucmVkdWNlcjsiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjcmVhdGVBc3luY1RodW5rIiwiZmV0Y2hQb3N0cyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImluaXRpYWxTdGF0ZSIsImlzQXV0aCIsInBvc3RzIiwic3RhdHVzIiwiZXJyb3IiLCJwb3N0c1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwidG9nZ2xlQXV0aCIsInN0YXRlIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsImZ1bGZpbGxlZCIsImFjdGlvbiIsInBheWxvYWQiLCJyZWplY3RlZCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./redux/features/posts/postsSlice.ts\n"));

/***/ })

});