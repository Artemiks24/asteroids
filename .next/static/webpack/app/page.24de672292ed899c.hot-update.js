"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/ButtonContainer/VisibleButton.tsx":
/*!******************************************************!*\
  !*** ./components/ButtonContainer/VisibleButton.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Button!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../consts */ \"(app-pages-browser)/./consts.ts\");\n/* harmony import */ var _redux_features_posts_postsSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/features/posts/postsSlice */ \"(app-pages-browser)/./redux/features/posts/postsSlice.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/database */ \"(app-pages-browser)/./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../firebase */ \"(app-pages-browser)/./firebase.ts\");\n/* eslint-disable no-prototype-builtins */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst VisibleButton = (param)=>{\n    let { o } = param;\n    _s();\n    const favoritePosts = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.posts.favoritePosts);\n    const hasKey = favoritePosts.hasOwnProperty(o.id);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n    const Auth = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.users.isAuth);\n    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.getAuth)(_firebase__WEBPACK_IMPORTED_MODULE_6__.app);\n    auth.onAuthStateChanged(()=>{});\n    const handleButtonClick = ()=>{\n        const user = auth.currentUser;\n        if (user) {\n            const database = (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.getDatabase)();\n            const userId = user.uid;\n            const userPostsRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.ref)(database, \"userPosts/\".concat(userId));\n            const newPostRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.push)(userPostsRef);\n            (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.set)(newPostRef, {\n                danger: o.danger,\n                date: o.date,\n                id: o.id,\n                name: o.name,\n                lunar: o.lunar,\n                diameter: o.diameter,\n                kilometers: o.kilometers\n            }).then(()=>{\n                dispatch((0,_redux_features_posts_postsSlice__WEBPACK_IMPORTED_MODULE_3__.addFavorites)(o)); // Обновление Redux Store после успешного добавления в базу данных\n            }).catch((error)=>{\n                console.error(\"Ошибка добавления поста в базу данных:\", error);\n            });\n        }\n        const favoritesFromStorage = localStorage.getItem(\"favorites\");\n        let favoritesArray = [];\n        if (favoritesFromStorage) {\n            favoritesArray = JSON.parse(favoritesFromStorage);\n        }\n        favoritesArray.push(o);\n        localStorage.setItem(\"favorites\", JSON.stringify(favoritesArray));\n        dispatch((0,_redux_features_posts_postsSlice__WEBPACK_IMPORTED_MODULE_3__.addFavorites)(o));\n    };\n    const handleRemoveButtonClick = ()=>{\n        const user = auth.currentUser;\n        if (user) {\n            const database = (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.getDatabase)();\n            const userId = user.uid;\n            const userPostsRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.ref)(database, \"userPosts/\".concat(userId));\n            (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.get)(userPostsRef).then((snapshot)=>{\n                if (snapshot.exists()) {\n                    snapshot.forEach((childSnapshot)=>{\n                        const postId = childSnapshot.val().id;\n                        if (postId === o.id) {\n                            const postIdToRemove = childSnapshot.key;\n                            const userPostRefToRemove = (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.ref)(database, \"userPosts/\".concat(userId, \"/\").concat(postIdToRemove));\n                            (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.remove)(userPostRefToRemove).then(()=>{\n                                console.log(\"Пост успешно удален из базы данных\");\n                                dispatch((0,_redux_features_posts_postsSlice__WEBPACK_IMPORTED_MODULE_3__.deleteFavorites)(o)); // Обновление Redux Store после успешного удаления из базы данных\n                            }).catch((error)=>{\n                                console.error(\"Ошибка удаления поста из базы данных:\", error);\n                            });\n                        }\n                    });\n                }\n            }).catch((error)=>{\n                console.error(\"Ошибка получения данных:\", error);\n            });\n        }\n        const favoritesFromStorage = localStorage.getItem(\"favorites\");\n        let favoritesArray = [];\n        if (favoritesFromStorage) {\n            favoritesArray = JSON.parse(favoritesFromStorage);\n        }\n        favoritesArray = favoritesArray.filter((item)=>item.id !== o.id);\n        localStorage.setItem(\"favorites\", JSON.stringify(favoritesArray));\n        dispatch((0,_redux_features_posts_postsSlice__WEBPACK_IMPORTED_MODULE_3__.deleteFavorites)(o));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: !Auth ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                width: 64,\n                height: 36\n            }\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\as\\\\asteroids\\\\components\\\\ButtonContainer\\\\VisibleButton.tsx\",\n            lineNumber: 102,\n            columnNumber: 17\n        }, undefined) : hasKey ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            onClick: handleRemoveButtonClick,\n            style: {\n                background: _consts__WEBPACK_IMPORTED_MODULE_2__.Gradient.basketButton\n            },\n            variant: \"contained\",\n            children: \"In the basket\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\as\\\\asteroids\\\\components\\\\ButtonContainer\\\\VisibleButton.tsx\",\n            lineNumber: 104,\n            columnNumber: 17\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            onClick: handleButtonClick,\n            style: {\n                background: _consts__WEBPACK_IMPORTED_MODULE_2__.Gradient.add\n            },\n            variant: \"contained\",\n            children: \"Add\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\as\\\\asteroids\\\\components\\\\ButtonContainer\\\\VisibleButton.tsx\",\n            lineNumber: 108,\n            columnNumber: 17\n        }, undefined)\n    }, void 0, false);\n};\n_s(VisibleButton, \"VyWXQpi9LE/ilHHdMBOswO0Xvgw=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector\n    ];\n});\n_c = VisibleButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VisibleButton);\nvar _c;\n$RefreshReg$(_c, \"VisibleButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQnV0dG9uQ29udGFpbmVyL1Zpc2libGVCdXR0b24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQXdDOztBQUNLO0FBQ047QUFDQztBQUM4QztBQUMvQjtBQUdzQjtBQUNyQztBQUNIO0FBR3JDLE1BQU1lLGdCQUF3QztRQUFDLEVBQUVDLENBQUMsRUFBRTs7SUFDaEQsTUFBTUMsZ0JBQWdCWix3REFBV0EsQ0FBQyxDQUFDYSxRQUFxQkEsTUFBTUMsS0FBSyxDQUFDRixhQUFhO0lBQ2pGLE1BQU1HLFNBQVNILGNBQWNJLGNBQWMsQ0FBQ0wsRUFBRU0sRUFBRTtJQUNoRCxNQUFNQyxXQUFXakIsd0RBQVdBO0lBQzVCLE1BQU1rQixPQUFPbkIsd0RBQVdBLENBQUMsQ0FBQ2EsUUFBcUJBLE1BQU1PLEtBQUssQ0FBQ0MsTUFBTTtJQUNqRSxNQUFNQyxPQUFPZCxzREFBT0EsQ0FBQ0MsMENBQUdBO0lBQ3hCYSxLQUFLQyxrQkFBa0IsQ0FBQyxLQUFRO0lBRWhDLE1BQU1DLG9CQUFvQjtRQUN0QixNQUFNQyxPQUFPSCxLQUFLSSxXQUFXO1FBRTdCLElBQUlELE1BQU07WUFDTixNQUFNRSxXQUFXekIsOERBQVdBO1lBQzVCLE1BQU0wQixTQUFTSCxLQUFLSSxHQUFHO1lBQ3ZCLE1BQU1DLGVBQWUzQixzREFBR0EsQ0FBQ3dCLFVBQVUsYUFBb0IsT0FBUEM7WUFDaEQsTUFBTUcsYUFBYTFCLHVEQUFJQSxDQUFDeUI7WUFDeEIxQixzREFBR0EsQ0FBQzJCLFlBQVk7Z0JBQ1pDLFFBQVFyQixFQUFFcUIsTUFBTTtnQkFDaEJDLE1BQU10QixFQUFFc0IsSUFBSTtnQkFDWmhCLElBQUlOLEVBQUVNLEVBQUU7Z0JBQ1JpQixNQUFNdkIsRUFBRXVCLElBQUk7Z0JBQ1pDLE9BQU94QixFQUFFd0IsS0FBSztnQkFDZEMsVUFBVXpCLEVBQUV5QixRQUFRO2dCQUNwQkMsWUFBWTFCLEVBQUUwQixVQUFVO1lBQzVCLEdBQ0tDLElBQUksQ0FBQztnQkFDRnBCLFNBQVNwQiw4RUFBWUEsQ0FBQ2EsS0FBSyxrRUFBa0U7WUFDakcsR0FDQzRCLEtBQUssQ0FBQyxDQUFDQztnQkFDSkMsUUFBUUQsS0FBSyxDQUFDLDBDQUEwQ0E7WUFDNUQ7UUFDUjtRQUNBLE1BQU1FLHVCQUF1QkMsYUFBYUMsT0FBTyxDQUFDO1FBQ2xELElBQUlDLGlCQUFpQixFQUFFO1FBRXZCLElBQUlILHNCQUFzQjtZQUN0QkcsaUJBQWlCQyxLQUFLQyxLQUFLLENBQUNMO1FBQ2hDO1FBQ0FHLGVBQWV4QyxJQUFJLENBQUNNO1FBQ3BCZ0MsYUFBYUssT0FBTyxDQUFDLGFBQWFGLEtBQUtHLFNBQVMsQ0FBQ0o7UUFDakQzQixTQUFTcEIsOEVBQVlBLENBQUNhO0lBQzFCO0lBRUEsTUFBTXVDLDBCQUEwQjtRQUM1QixNQUFNekIsT0FBT0gsS0FBS0ksV0FBVztRQUU3QixJQUFJRCxNQUFNO1lBQ04sTUFBTUUsV0FBV3pCLDhEQUFXQTtZQUM1QixNQUFNMEIsU0FBU0gsS0FBS0ksR0FBRztZQUN2QixNQUFNQyxlQUFlM0Isc0RBQUdBLENBQUN3QixVQUFVLGFBQW9CLE9BQVBDO1lBQ2hEckIsc0RBQUdBLENBQUN1QixjQUNDUSxJQUFJLENBQUMsQ0FBQ2E7Z0JBQ0gsSUFBSUEsU0FBU0MsTUFBTSxJQUFJO29CQUNuQkQsU0FBU0UsT0FBTyxDQUFDLENBQUNDO3dCQUNkLE1BQU1DLFNBQVNELGNBQWNFLEdBQUcsR0FBR3ZDLEVBQUU7d0JBQ3JDLElBQUlzQyxXQUFXNUMsRUFBRU0sRUFBRSxFQUFFOzRCQUNqQixNQUFNd0MsaUJBQWlCSCxjQUFjSSxHQUFHOzRCQUN4QyxNQUFNQyxzQkFBc0J4RCxzREFBR0EsQ0FBQ3dCLFVBQVUsYUFBdUI4QixPQUFWN0IsUUFBTyxLQUFrQixPQUFmNkI7NEJBQ2pFbkQseURBQU1BLENBQUNxRCxxQkFDRnJCLElBQUksQ0FBQztnQ0FDRkcsUUFBUW1CLEdBQUcsQ0FBQztnQ0FDWjFDLFNBQVNuQixpRkFBZUEsQ0FBQ1ksS0FBSyxpRUFBaUU7NEJBQ25HLEdBQ0M0QixLQUFLLENBQUMsQ0FBQ0M7Z0NBQ0pDLFFBQVFELEtBQUssQ0FBQyx5Q0FBeUNBOzRCQUMzRDt3QkFDUjtvQkFDSjtnQkFDSjtZQUNKLEdBQ0NELEtBQUssQ0FBQyxDQUFDQztnQkFDSkMsUUFBUUQsS0FBSyxDQUFDLDRCQUE0QkE7WUFDOUM7UUFDUjtRQUNBLE1BQU1FLHVCQUF1QkMsYUFBYUMsT0FBTyxDQUFDO1FBQ2xELElBQUlDLGlCQUFpQixFQUFFO1FBRXZCLElBQUlILHNCQUFzQjtZQUN0QkcsaUJBQWlCQyxLQUFLQyxLQUFLLENBQUNMO1FBQ2hDO1FBQ0FHLGlCQUFpQkEsZUFBZWdCLE1BQU0sQ0FBQyxDQUFDQyxPQUFxQkEsS0FBSzdDLEVBQUUsS0FBS04sRUFBRU0sRUFBRTtRQUM3RTBCLGFBQWFLLE9BQU8sQ0FBQyxhQUFhRixLQUFLRyxTQUFTLENBQUNKO1FBQ2pEM0IsU0FBU25CLGlGQUFlQSxDQUFDWTtJQUM3QjtJQUVBLHFCQUNJO2tCQUNLLENBQUNRLHFCQUNFLDhEQUFDNEM7WUFBSUMsT0FBTztnQkFBRUMsT0FBTztnQkFBSUMsUUFBUTtZQUFHOzs7Ozt3QkFDbkNuRCx1QkFDRCw4REFBQ25CLGtGQUFNQTtZQUFDdUUsU0FBU2pCO1lBQXlCYyxPQUFPO2dCQUFFSSxZQUFZdkUsNkNBQVFBLENBQUN3RSxZQUFZO1lBQUM7WUFBR0MsU0FBUTtzQkFBWTs7Ozs7c0NBSTVHLDhEQUFDMUUsa0ZBQU1BO1lBQUN1RSxTQUFTM0M7WUFBbUJ3QyxPQUFPO2dCQUFFSSxZQUFZdkUsNkNBQVFBLENBQUMwRSxHQUFHO1lBQUM7WUFBR0QsU0FBUTtzQkFBWTs7Ozs7OztBQVE3RztHQXRHTTVEOztRQUNvQlYsb0RBQVdBO1FBRWhCQyxvREFBV0E7UUFDZkQsb0RBQVdBOzs7S0FKdEJVO0FBd0dOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQnV0dG9uQ29udGFpbmVyL1Zpc2libGVCdXR0b24udHN4PzQ5NGYiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zICovXHJcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IHsgR3JhZGllbnQgfSBmcm9tICcuLi8uLi9jb25zdHMnO1xyXG5pbXBvcnQgeyBhZGRGYXZvcml0ZXMsIGRlbGV0ZUZhdm9yaXRlcyB9IGZyb20gJy4uLy4uL3JlZHV4L2ZlYXR1cmVzL3Bvc3RzL3Bvc3RzU2xpY2UnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJy4uLy4uL3JlZHV4L3N0b3JlJztcclxuaW1wb3J0IHR5cGUgeyBJcG9zdFByb3BzLCBWaXNpYmxlQnV0dG9uUHJvcHMgfSBmcm9tICcuLi8uLi9oZWxwZXIvdHlwZXMnO1xyXG5pbXBvcnQgeyBnZXREYXRhYmFzZSwgcmVmLCBzZXQsIHB1c2gsIHJlbW92ZSwgZ2V0IH0gZnJvbSBcImZpcmViYXNlL2RhdGFiYXNlXCI7XHJcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tICdmaXJlYmFzZS9hdXRoJztcclxuaW1wb3J0IHsgYXBwIH0gZnJvbSAnLi4vLi4vZmlyZWJhc2UnO1xyXG5cclxuXHJcbmNvbnN0IFZpc2libGVCdXR0b246IEZDPFZpc2libGVCdXR0b25Qcm9wcz4gPSAoeyBvIH0pID0+IHtcclxuICAgIGNvbnN0IGZhdm9yaXRlUG9zdHMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUucG9zdHMuZmF2b3JpdGVQb3N0cyk7XHJcbiAgICBjb25zdCBoYXNLZXkgPSBmYXZvcml0ZVBvc3RzLmhhc093blByb3BlcnR5KG8uaWQpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgQXV0aCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS51c2Vycy5pc0F1dGgpO1xyXG4gICAgY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcclxuICAgIGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKCgpID0+IHsgfSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF1dGguY3VycmVudFVzZXI7XHJcblxyXG4gICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFiYXNlID0gZ2V0RGF0YWJhc2UoKTtcclxuICAgICAgICAgICAgY29uc3QgdXNlcklkID0gdXNlci51aWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJQb3N0c1JlZiA9IHJlZihkYXRhYmFzZSwgYHVzZXJQb3N0cy8ke3VzZXJJZH1gKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3UG9zdFJlZiA9IHB1c2godXNlclBvc3RzUmVmKTtcclxuICAgICAgICAgICAgc2V0KG5ld1Bvc3RSZWYsIHtcclxuICAgICAgICAgICAgICAgIGRhbmdlcjogby5kYW5nZXIsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiBvLmRhdGUsXHJcbiAgICAgICAgICAgICAgICBpZDogby5pZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IG8ubmFtZSxcclxuICAgICAgICAgICAgICAgIGx1bmFyOiBvLmx1bmFyLFxyXG4gICAgICAgICAgICAgICAgZGlhbWV0ZXI6IG8uZGlhbWV0ZXIsXHJcbiAgICAgICAgICAgICAgICBraWxvbWV0ZXJzOiBvLmtpbG9tZXRlcnNcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChhZGRGYXZvcml0ZXMobykpOyAvLyDQntCx0L3QvtCy0LvQtdC90LjQtSBSZWR1eCBTdG9yZSDQv9C+0YHQu9C1INGD0YHQv9C10YjQvdC+0LPQviDQtNC+0LHQsNCy0LvQtdC90LjRjyDQsiDQsdCw0LfRgyDQtNCw0L3QvdGL0YVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign0J7RiNC40LHQutCwINC00L7QsdCw0LLQu9C10L3QuNGPINC/0L7RgdGC0LAg0LIg0LHQsNC30YMg0LTQsNC90L3Ri9GFOicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBmYXZvcml0ZXNGcm9tU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZXMnKTtcclxuICAgICAgICBsZXQgZmF2b3JpdGVzQXJyYXkgPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKGZhdm9yaXRlc0Zyb21TdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIGZhdm9yaXRlc0FycmF5ID0gSlNPTi5wYXJzZShmYXZvcml0ZXNGcm9tU3RvcmFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZhdm9yaXRlc0FycmF5LnB1c2gobyk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zhdm9yaXRlcycsIEpTT04uc3RyaW5naWZ5KGZhdm9yaXRlc0FycmF5KSk7XHJcbiAgICAgICAgZGlzcGF0Y2goYWRkRmF2b3JpdGVzKG8pKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUmVtb3ZlQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF1dGguY3VycmVudFVzZXI7XHJcblxyXG4gICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFiYXNlID0gZ2V0RGF0YWJhc2UoKTtcclxuICAgICAgICAgICAgY29uc3QgdXNlcklkID0gdXNlci51aWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJQb3N0c1JlZiA9IHJlZihkYXRhYmFzZSwgYHVzZXJQb3N0cy8ke3VzZXJJZH1gKTtcclxuICAgICAgICAgICAgZ2V0KHVzZXJQb3N0c1JlZilcclxuICAgICAgICAgICAgICAgIC50aGVuKChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzbmFwc2hvdC5leGlzdHMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbmFwc2hvdC5mb3JFYWNoKChjaGlsZFNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3N0SWQgPSBjaGlsZFNuYXBzaG90LnZhbCgpLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvc3RJZCA9PT0gby5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvc3RJZFRvUmVtb3ZlID0gY2hpbGRTbmFwc2hvdC5rZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlclBvc3RSZWZUb1JlbW92ZSA9IHJlZihkYXRhYmFzZSwgYHVzZXJQb3N0cy8ke3VzZXJJZH0vJHtwb3N0SWRUb1JlbW92ZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmUodXNlclBvc3RSZWZUb1JlbW92ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ9Cf0L7RgdGCINGD0YHQv9C10YjQvdC+INGD0LTQsNC70LXQvSDQuNC3INCx0LDQt9GLINC00LDQvdC90YvRhScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goZGVsZXRlRmF2b3JpdGVzKG8pKTsgLy8g0J7QsdC90L7QstC70LXQvdC40LUgUmVkdXggU3RvcmUg0L/QvtGB0LvQtSDRg9GB0L/QtdGI0L3QvtCz0L4g0YPQtNCw0LvQtdC90LjRjyDQuNC3INCx0LDQt9GLINC00LDQvdC90YvRhVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCfQntGI0LjQsdC60LAg0YPQtNCw0LvQtdC90LjRjyDQv9C+0YHRgtCwINC40Lcg0LHQsNC30Ysg0LTQsNC90L3Ri9GFOicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign0J7RiNC40LHQutCwINC/0L7Qu9GD0YfQtdC90LjRjyDQtNCw0L3QvdGL0YU6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGZhdm9yaXRlc0Zyb21TdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zhdm9yaXRlcycpO1xyXG4gICAgICAgIGxldCBmYXZvcml0ZXNBcnJheSA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoZmF2b3JpdGVzRnJvbVN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgZmF2b3JpdGVzQXJyYXkgPSBKU09OLnBhcnNlKGZhdm9yaXRlc0Zyb21TdG9yYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmF2b3JpdGVzQXJyYXkgPSBmYXZvcml0ZXNBcnJheS5maWx0ZXIoKGl0ZW06IElwb3N0UHJvcHMpID0+IGl0ZW0uaWQgIT09IG8uaWQpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmYXZvcml0ZXMnLCBKU09OLnN0cmluZ2lmeShmYXZvcml0ZXNBcnJheSkpO1xyXG4gICAgICAgIGRpc3BhdGNoKGRlbGV0ZUZhdm9yaXRlcyhvKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgeyFBdXRoID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogNjQsIGhlaWdodDogMzYgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoaGFzS2V5ID8gKFxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVSZW1vdmVCdXR0b25DbGlja30gc3R5bGU9e3sgYmFja2dyb3VuZDogR3JhZGllbnQuYmFza2V0QnV0dG9uIH19IHZhcmlhbnQ9XCJjb250YWluZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBJbiB0aGUgYmFza2V0XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQnV0dG9uQ2xpY2t9IHN0eWxlPXt7IGJhY2tncm91bmQ6IEdyYWRpZW50LmFkZCB9fSB2YXJpYW50PVwiY29udGFpbmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaXNpYmxlQnV0dG9uOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsIkdyYWRpZW50IiwiYWRkRmF2b3JpdGVzIiwiZGVsZXRlRmF2b3JpdGVzIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsImdldERhdGFiYXNlIiwicmVmIiwic2V0IiwicHVzaCIsInJlbW92ZSIsImdldCIsImdldEF1dGgiLCJhcHAiLCJWaXNpYmxlQnV0dG9uIiwibyIsImZhdm9yaXRlUG9zdHMiLCJzdGF0ZSIsInBvc3RzIiwiaGFzS2V5IiwiaGFzT3duUHJvcGVydHkiLCJpZCIsImRpc3BhdGNoIiwiQXV0aCIsInVzZXJzIiwiaXNBdXRoIiwiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImhhbmRsZUJ1dHRvbkNsaWNrIiwidXNlciIsImN1cnJlbnRVc2VyIiwiZGF0YWJhc2UiLCJ1c2VySWQiLCJ1aWQiLCJ1c2VyUG9zdHNSZWYiLCJuZXdQb3N0UmVmIiwiZGFuZ2VyIiwiZGF0ZSIsIm5hbWUiLCJsdW5hciIsImRpYW1ldGVyIiwia2lsb21ldGVycyIsInRoZW4iLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImZhdm9yaXRlc0Zyb21TdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZhdm9yaXRlc0FycmF5IiwiSlNPTiIsInBhcnNlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImhhbmRsZVJlbW92ZUJ1dHRvbkNsaWNrIiwic25hcHNob3QiLCJleGlzdHMiLCJmb3JFYWNoIiwiY2hpbGRTbmFwc2hvdCIsInBvc3RJZCIsInZhbCIsInBvc3RJZFRvUmVtb3ZlIiwia2V5IiwidXNlclBvc3RSZWZUb1JlbW92ZSIsImxvZyIsImZpbHRlciIsIml0ZW0iLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0Iiwib25DbGljayIsImJhY2tncm91bmQiLCJiYXNrZXRCdXR0b24iLCJ2YXJpYW50IiwiYWRkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ButtonContainer/VisibleButton.tsx\n"));

/***/ })

});