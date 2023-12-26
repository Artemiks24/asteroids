"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/favorites/page",{

/***/ "(app-pages-browser)/./components/FavoritesPage/Favorites.tsx":
/*!************************************************!*\
  !*** ./components/FavoritesPage/Favorites.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Favorites_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Favorites.module.css */ \"(app-pages-browser)/./components/FavoritesPage/Favorites.module.css\");\n/* harmony import */ var _Favorites_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Favorites_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helper_formatDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helper/formatDate */ \"(app-pages-browser)/./helper/formatDate.ts\");\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../consts */ \"(app-pages-browser)/./consts.ts\");\n/* harmony import */ var _barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Button!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _redux_features_posts_postsSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/features/posts/postsSlice */ \"(app-pages-browser)/./redux/features/posts/postsSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Favorites = ()=>{\n    _s();\n    const Auth = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.users.isAuth);\n    const favoritePosts = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.posts.favoritePosts);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    //   useEffect(() => {\n    //     if (!Auth) {\n    //       router.push(\"/signup\");\n    //     }\n    //   }, [Auth, router]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: Auth ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Favorites_module_css__WEBPACK_IMPORTED_MODULE_7___default().wrapper),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: (_Favorites_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                    children: \"Favorites\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\as\\\\asteroids\\\\components\\\\FavoritesPage\\\\Favorites.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Favorites_module_css__WEBPACK_IMPORTED_MODULE_7___default().favoriteList),\n                    children: Object.values(favoritePosts).map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Favorites_module_css__WEBPACK_IMPORTED_MODULE_7___default().postContainer),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: (_Favorites_module_css__WEBPACK_IMPORTED_MODULE_7___default().postTitle),\n                                    children: post.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\as\\\\asteroids\\\\components\\\\FavoritesPage\\\\Favorites.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_Favorites_module_css__WEBPACK_IMPORTED_MODULE_7___default().section),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"\".concat(Number(post.kilometers).toFixed(0), \" kilometers\")\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\as\\\\asteroids\\\\components\\\\FavoritesPage\\\\Favorites.tsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"\".concat(Number(post.lunar).toFixed(0), \" lunar distance\")\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\as\\\\asteroids\\\\components\\\\FavoritesPage\\\\Favorites.tsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\as\\\\asteroids\\\\components\\\\FavoritesPage\\\\Favorites.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_Favorites_module_css__WEBPACK_IMPORTED_MODULE_7___default().section),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"\\xd8 \".concat(post.diameter.toFixed(0), \" m\")\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\as\\\\asteroids\\\\components\\\\FavoritesPage\\\\Favorites.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: (0,_helper_formatDate__WEBPACK_IMPORTED_MODULE_3__.formatDate)(post.date)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\as\\\\asteroids\\\\components\\\\FavoritesPage\\\\Favorites.tsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\as\\\\asteroids\\\\components\\\\FavoritesPage\\\\Favorites.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_Favorites_module_css__WEBPACK_IMPORTED_MODULE_7___default().section),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            onClick: ()=>dispatch((0,_redux_features_posts_postsSlice__WEBPACK_IMPORTED_MODULE_5__.unCart)(post.id)),\n                                            style: {\n                                                background: _consts__WEBPACK_IMPORTED_MODULE_4__.Gradient.basketButton\n                                            },\n                                            variant: \"contained\",\n                                            children: \"Un-cart\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\as\\\\asteroids\\\\components\\\\FavoritesPage\\\\Favorites.tsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: post.danger ? \"⚠ Danger\" : \"Safe\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\as\\\\asteroids\\\\components\\\\FavoritesPage\\\\Favorites.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\as\\\\asteroids\\\\components\\\\FavoritesPage\\\\Favorites.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\as\\\\asteroids\\\\components\\\\FavoritesPage\\\\Favorites.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 15\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\as\\\\asteroids\\\\components\\\\FavoritesPage\\\\Favorites.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\as\\\\asteroids\\\\components\\\\FavoritesPage\\\\Favorites.tsx\",\n            lineNumber: 33,\n            columnNumber: 9\n        }, undefined) : null\n    }, void 0, false);\n};\n_s(Favorites, \"2UldIGS/kg73BqRSQWx8qBd1Kz0=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Favorites;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Favorites);\nvar _c;\n$RefreshReg$(_c, \"Favorites\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRmF2b3JpdGVzUGFnZS9GYXZvcml0ZXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNVO0FBRVc7QUFDWDtBQUtTO0FBQ2I7QUFDRDtBQUN3QjtBQUMvRCxNQUFNUyxZQUFnQjs7SUFFcEIsTUFBTUMsT0FBT1Isd0RBQVdBLENBQUMsQ0FBQ1MsUUFBcUJBLE1BQU1DLEtBQUssQ0FBQ0MsTUFBTTtJQUNqRSxNQUFNQyxnQkFBZ0JaLHdEQUFXQSxDQUMvQixDQUFDUyxRQUFxQkEsTUFBTUksS0FBSyxDQUFDRCxhQUFhO0lBR2pELE1BQU1FLFdBQVdiLHdEQUFXQTtJQUM1QixNQUFNYyxTQUFTYiwwREFBU0E7SUFFeEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsUUFBUTtJQUNSLHdCQUF3QjtJQUV4QixxQkFDRTtrQkFDR00scUJBQ0MsOERBQUNRO1lBQUlDLFdBQVdsQixzRUFBYzs7OEJBQzVCLDhEQUFDb0I7b0JBQUdGLFdBQVdsQixvRUFBWTs4QkFBRTs7Ozs7OzhCQUM3Qiw4REFBQ2lCO29CQUFJQyxXQUFXbEIsMkVBQW1COzhCQUNoQ3VCLE9BQU9DLE1BQU0sQ0FBQ1gsZUFBZVksR0FBRyxDQUFDLENBQUNDLHFCQUNqQyw4REFBQ1Q7NEJBQUlDLFdBQVdsQiw0RUFBb0I7OzhDQUNsQyw4REFBQzRCO29DQUFHVixXQUFXbEIsd0VBQWdCOzhDQUFHMEIsS0FBS0ksSUFBSTs7Ozs7OzhDQUMzQyw4REFBQ2I7b0NBQUlDLFdBQVdsQixzRUFBYzs7c0RBQzVCLDhEQUFDZ0M7c0RBQUcsR0FBc0MsT0FBbkNDLE9BQU9QLEtBQUtRLFVBQVUsRUFBRUMsT0FBTyxDQUFDLElBQUc7Ozs7OztzREFDMUMsOERBQUNIO3NEQUFHLEdBQWlDLE9BQTlCQyxPQUFPUCxLQUFLVSxLQUFLLEVBQUVELE9BQU8sQ0FBQyxJQUFHOzs7Ozs7Ozs7Ozs7OENBRXZDLDhEQUFDbEI7b0NBQUlDLFdBQVdsQixzRUFBYzs7c0RBQzVCLDhEQUFDZ0M7c0RBQUcsUUFBOEIsT0FBekJOLEtBQUtXLFFBQVEsQ0FBQ0YsT0FBTyxDQUFDLElBQUc7Ozs7OztzREFDbEMsOERBQUNIO3NEQUFHNUIsOERBQVVBLENBQUNzQixLQUFLWSxJQUFJOzs7Ozs7Ozs7Ozs7OENBRTFCLDhEQUFDckI7b0NBQUlDLFdBQVdsQixzRUFBYzs7c0RBQzVCLDhEQUFDTSxrRkFBTUE7NENBQUNpQyxTQUFTLElBQU14QixTQUFTUix3RUFBTUEsQ0FBQ21CLEtBQUtjLEVBQUU7NENBQUlDLE9BQU87Z0RBQUVDLFlBQVlyQyw2Q0FBUUEsQ0FBQ3NDLFlBQVk7NENBQUM7NENBQUdDLFNBQVE7c0RBQVk7Ozs7OztzREFHcEgsOERBQUNaO3NEQUFHTixLQUFLbUIsTUFBTSxHQUFHLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBTXZDOztBQUdWO0dBOUNNckM7O1FBRVNQLG9EQUFXQTtRQUNGQSxvREFBV0E7UUFJaEJDLG9EQUFXQTtRQUNiQyxzREFBU0E7OztLQVJwQks7QUFnRE4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GYXZvcml0ZXNQYWdlL0Zhdm9yaXRlcy50c3g/NTI4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9GYXZvcml0ZXMubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1eC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBJcG9zdFByb3BzIH0gZnJvbSBcIi4uLy4uL2hlbHBlci90eXBlc1wiO1xyXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSBcIi4uLy4uL2hlbHBlci9mb3JtYXREYXRlXCI7XHJcbmltcG9ydCB7IEdyYWRpZW50IH0gZnJvbSBcIi4uLy4uL2NvbnN0c1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyB1bkNhcnQgfSBmcm9tIFwiLi4vLi4vcmVkdXgvZmVhdHVyZXMvcG9zdHMvcG9zdHNTbGljZVwiO1xyXG5jb25zdCBGYXZvcml0ZXM6IEZDID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBBdXRoID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXJzLmlzQXV0aCk7XHJcbiAgY29uc3QgZmF2b3JpdGVQb3N0cyA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnBvc3RzLmZhdm9yaXRlUG9zdHNcclxuICApO1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgICBpZiAoIUF1dGgpIHtcclxuICAvLyAgICAgICByb3V0ZXIucHVzaChcIi9zaWdudXBcIik7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH0sIFtBdXRoLCByb3V0ZXJdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtBdXRoID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkZhdm9yaXRlczwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZhdm9yaXRlTGlzdH0+XHJcbiAgICAgICAgICAgIHtPYmplY3QudmFsdWVzKGZhdm9yaXRlUG9zdHMpLm1hcCgocG9zdDogSXBvc3RQcm9wcykgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMucG9zdFRpdGxlfT57cG9zdC5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb259PlxyXG4gICAgICAgICAgICAgICAgICA8cD57YCR7TnVtYmVyKHBvc3Qua2lsb21ldGVycykudG9GaXhlZCgwKX0ga2lsb21ldGVyc2B9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD57YCR7TnVtYmVyKHBvc3QubHVuYXIpLnRvRml4ZWQoMCl9IGx1bmFyIGRpc3RhbmNlYH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgIDxwPntgw5ggJHtwb3N0LmRpYW1ldGVyLnRvRml4ZWQoMCl9IG1gfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+e2Zvcm1hdERhdGUocG9zdC5kYXRlKX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gZGlzcGF0Y2godW5DYXJ0KHBvc3QuaWQpKX0gc3R5bGU9e3sgYmFja2dyb3VuZDogR3JhZGllbnQuYmFza2V0QnV0dG9uIH19IHZhcmlhbnQ9XCJjb250YWluZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBVbi1jYXJ0XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8cD57cG9zdC5kYW5nZXIgPyAn4pqgIERhbmdlcicgOiAnU2FmZSd9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhdm9yaXRlcztcclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsInVzZVJvdXRlciIsImZvcm1hdERhdGUiLCJHcmFkaWVudCIsIkJ1dHRvbiIsInVuQ2FydCIsIkZhdm9yaXRlcyIsIkF1dGgiLCJzdGF0ZSIsInVzZXJzIiwiaXNBdXRoIiwiZmF2b3JpdGVQb3N0cyIsInBvc3RzIiwiZGlzcGF0Y2giLCJyb3V0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJ3cmFwcGVyIiwiaDIiLCJ0aXRsZSIsImZhdm9yaXRlTGlzdCIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsInBvc3QiLCJwb3N0Q29udGFpbmVyIiwiaDMiLCJwb3N0VGl0bGUiLCJuYW1lIiwic2VjdGlvbiIsInAiLCJOdW1iZXIiLCJraWxvbWV0ZXJzIiwidG9GaXhlZCIsImx1bmFyIiwiZGlhbWV0ZXIiLCJkYXRlIiwib25DbGljayIsImlkIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiYmFza2V0QnV0dG9uIiwidmFyaWFudCIsImRhbmdlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/FavoritesPage/Favorites.tsx\n"));

/***/ })

});