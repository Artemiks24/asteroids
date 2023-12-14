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

/***/ "(app-pages-browser)/./components/FormAuth/FormAuth.tsx":
/*!******************************************!*\
  !*** ./components/FormAuth/FormAuth.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Button,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Button,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _FormAuth_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormAuth.module.css */ \"(app-pages-browser)/./components/FormAuth/FormAuth.module.css\");\n/* harmony import */ var _FormAuth_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_FormAuth_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validate */ \"(app-pages-browser)/./components/FormAuth/validate.ts\");\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../consts */ \"(app-pages-browser)/./consts.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst FormAuth = (param)=>{\n    let { buttonText } = param;\n    var _errors_email, _errors_password;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { register, formState: { errors }, handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();\n    const onSubmit = async (event)=>{\n        const data = {\n            email: event.email,\n            password: event.password\n        };\n        const existingData = localStorage.getItem(\"userData\");\n        let newData = [];\n        if (existingData) {\n            newData = JSON.parse(existingData);\n            const emailExists = newData.some((item)=>item.email === data.email);\n            if (emailExists) {\n                if (buttonText === \"Зарегестрироваться\") {\n                    router.push(\"/signin\");\n                }\n                if (buttonText === \"Войти\") {\n                    router.push(\"/modal\");\n                }\n            } else {\n                newData.push(data);\n            }\n        } else {\n            newData.push(data);\n        }\n        localStorage.setItem(\"userData\", JSON.stringify(newData));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: (_FormAuth_module_css__WEBPACK_IMPORTED_MODULE_6___default().form),\n        onSubmit: handleSubmit(onSubmit),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                id: \"email\",\n                size: \"small\",\n                label: \"Email\",\n                type: \"email\",\n                color: \"success\",\n                ...register(\"email\", _validate__WEBPACK_IMPORTED_MODULE_2__.EmailValidate),\n                error: !!errors.email,\n                helperText: (_errors_email = errors.email) === null || _errors_email === void 0 ? void 0 : _errors_email.message\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\t\\\\asteroids\\\\components\\\\FormAuth\\\\FormAuth.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                id: \"password\",\n                label: \"Password\",\n                type: \"password\",\n                color: \"success\",\n                size: \"small\",\n                ...register(\"password\", _validate__WEBPACK_IMPORTED_MODULE_2__.PasswordValidate),\n                error: !!errors.password,\n                helperText: (_errors_password = errors.password) === null || _errors_password === void 0 ? void 0 : _errors_password.message\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\t\\\\asteroids\\\\components\\\\FormAuth\\\\FormAuth.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                className: (_FormAuth_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                type: \"submit\",\n                style: {\n                    background: _consts__WEBPACK_IMPORTED_MODULE_3__.Gradient.login\n                },\n                variant: \"contained\",\n                children: buttonText\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\t\\\\asteroids\\\\components\\\\FormAuth\\\\FormAuth.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\t\\\\asteroids\\\\components\\\\FormAuth\\\\FormAuth.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FormAuth, \"dcqw1t/U2/R1MY1WHR1w4g9P6cQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm\n    ];\n});\n_c = FormAuth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormAuth);\nvar _c;\n$RefreshReg$(_c, \"FormAuth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRm9ybUF1dGgvRm9ybUF1dGgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNrQztBQUNnQjtBQUNSO0FBQ0M7QUFDa0I7QUFDckI7QUFDSTtBQU01QyxNQUFNUyxXQUE4QjtRQUFDLEVBQUVDLFVBQVUsRUFBRTtRQW9EL0JDLGVBVUFBOztJQTdEbEIsTUFBTUMsU0FBU0osMERBQVNBO0lBT3hCLE1BQU0sRUFDSkssUUFBUSxFQUNSQyxXQUFXLEVBQUVILE1BQU0sRUFBRSxFQUNyQkksWUFBWSxFQUNiLEdBQUdaLHdEQUFPQTtJQUVYLE1BQU1hLFdBQVcsT0FBT0M7UUFDdEIsTUFBTUMsT0FBTztZQUNYQyxPQUFPRixNQUFNRSxLQUFLO1lBQ2xCQyxVQUFVSCxNQUFNRyxRQUFRO1FBQzFCO1FBQ0EsTUFBTUMsZUFBZUMsYUFBYUMsT0FBTyxDQUFDO1FBQzFDLElBQUlDLFVBQVUsRUFBRTtRQUNoQixJQUFJSCxjQUFjO1lBQ2hCRyxVQUFVQyxLQUFLQyxLQUFLLENBQUNMO1lBQ3JCLE1BQU1NLGNBQWNILFFBQVFJLElBQUksQ0FDOUIsQ0FBQ0MsT0FBa0JBLEtBQUtWLEtBQUssS0FBS0QsS0FBS0MsS0FBSztZQUU5QyxJQUFJUSxhQUFhO2dCQUNmLElBQUlqQixlQUFlLHNCQUFzQjtvQkFDdkNFLE9BQU9rQixJQUFJLENBQUM7Z0JBQ2Q7Z0JBQ0EsSUFBSXBCLGVBQWUsU0FBUztvQkFDeEJFLE9BQU9rQixJQUFJLENBQUM7Z0JBQ2hCO1lBRUYsT0FBTztnQkFDTE4sUUFBUU0sSUFBSSxDQUFDWjtZQUNmO1FBQ0YsT0FBTztZQUNMTSxRQUFRTSxJQUFJLENBQUNaO1FBQ2Y7UUFDQUksYUFBYVMsT0FBTyxDQUFDLFlBQVlOLEtBQUtPLFNBQVMsQ0FBQ1I7SUFDbEQ7SUFDQSxxQkFDRSw4REFBQ1M7UUFBS0MsV0FBVzlCLGtFQUFXO1FBQUVZLFVBQVVELGFBQWFDOzswQkFDbkQsOERBQUNmLDRGQUFTQTtnQkFDUmtDLElBQUc7Z0JBQ0hDLE1BQUs7Z0JBQ0xDLE9BQU07Z0JBQ05DLE1BQUs7Z0JBQ0xDLE9BQU07Z0JBQ0wsR0FBRzFCLFNBQVMsU0FBU1Asb0RBQWFBLENBQUM7Z0JBQ3BDa0MsT0FBTyxDQUFDLENBQUM3QixPQUFPUSxLQUFLO2dCQUNyQnNCLFVBQVUsR0FBRTlCLGdCQUFBQSxPQUFPUSxLQUFLLGNBQVpSLG9DQUFBQSxjQUFjK0IsT0FBTzs7Ozs7OzBCQUVuQyw4REFBQ3pDLDRGQUFTQTtnQkFDUmtDLElBQUc7Z0JBQ0hFLE9BQU07Z0JBQ05DLE1BQUs7Z0JBQ0xDLE9BQU07Z0JBQ05ILE1BQUs7Z0JBQ0osR0FBR3ZCLFNBQVMsWUFBWVIsdURBQWdCQSxDQUFDO2dCQUMxQ21DLE9BQU8sQ0FBQyxDQUFDN0IsT0FBT1MsUUFBUTtnQkFDeEJxQixVQUFVLEdBQUU5QixtQkFBQUEsT0FBT1MsUUFBUSxjQUFmVCx1Q0FBQUEsaUJBQWlCK0IsT0FBTzs7Ozs7OzBCQUV0Qyw4REFBQ3hDLDRGQUFNQTtnQkFDTGdDLFdBQVc5QixvRUFBYTtnQkFDeEJrQyxNQUFLO2dCQUNMTSxPQUFPO29CQUFFQyxZQUFZdEMsNkNBQVFBLENBQUN1QyxLQUFLO2dCQUFDO2dCQUNwQ0MsU0FBUTswQkFFUHJDOzs7Ozs7Ozs7Ozs7QUFJVDtHQTFFTUQ7O1FBQ1dELHNEQUFTQTtRQVdwQkwsb0RBQU9BOzs7S0FaUE07QUE0RU4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtQXV0aC9Gb3JtQXV0aC50c3g/YWE5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCwgQnV0dG9uIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Gb3JtQXV0aC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IFBhc3N3b3JkVmFsaWRhdGUsIEVtYWlsVmFsaWRhdGUgfSBmcm9tIFwiLi92YWxpZGF0ZVwiO1xyXG5pbXBvcnQgeyBHcmFkaWVudCB9IGZyb20gXCIuLi8uLi9jb25zdHNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxuaW50ZXJmYWNlIEZvcm1BdXRoUHJvcHMge1xyXG4gIGJ1dHRvblRleHQ6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgRm9ybUF1dGg6IEZDPEZvcm1BdXRoUHJvcHM+ID0gKHsgYnV0dG9uVGV4dCB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGludGVyZmFjZSBJU2lnbmluIHtcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qge1xyXG4gICAgcmVnaXN0ZXIsXHJcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXHJcbiAgICBoYW5kbGVTdWJtaXQsXHJcbiAgfSA9IHVzZUZvcm08SVNpZ25pbj4oKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQ6IElTaWduaW4pID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGVtYWlsOiBldmVudC5lbWFpbCxcclxuICAgICAgcGFzc3dvcmQ6IGV2ZW50LnBhc3N3b3JkLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IGV4aXN0aW5nRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlckRhdGFcIik7XHJcbiAgICBsZXQgbmV3RGF0YSA9IFtdO1xyXG4gICAgaWYgKGV4aXN0aW5nRGF0YSkge1xyXG4gICAgICBuZXdEYXRhID0gSlNPTi5wYXJzZShleGlzdGluZ0RhdGEpO1xyXG4gICAgICBjb25zdCBlbWFpbEV4aXN0cyA9IG5ld0RhdGEuc29tZShcclxuICAgICAgICAoaXRlbTogSVNpZ25pbikgPT4gaXRlbS5lbWFpbCA9PT0gZGF0YS5lbWFpbFxyXG4gICAgICApO1xyXG4gICAgICBpZiAoZW1haWxFeGlzdHMpIHtcclxuICAgICAgICBpZiAoYnV0dG9uVGV4dCA9PT0gXCLQl9Cw0YDQtdCz0LXRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y9cIikge1xyXG4gICAgICAgICAgcm91dGVyLnB1c2goXCIvc2lnbmluXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYnV0dG9uVGV4dCA9PT0gXCLQktC+0LnRgtC4XCIpIHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvbW9kYWxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld0RhdGEucHVzaChkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV3RGF0YS5wdXNoKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyRGF0YVwiLCBKU09OLnN0cmluZ2lmeShuZXdEYXRhKSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG4gICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICBsYWJlbD1cIkVtYWlsXCJcclxuICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXHJcbiAgICAgICAgey4uLnJlZ2lzdGVyKFwiZW1haWxcIiwgRW1haWxWYWxpZGF0ZSl9XHJcbiAgICAgICAgZXJyb3I9eyEhZXJyb3JzLmVtYWlsfVxyXG4gICAgICAgIGhlbHBlclRleHQ9e2Vycm9ycy5lbWFpbD8ubWVzc2FnZX1cclxuICAgICAgLz5cclxuICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgY29sb3I9XCJzdWNjZXNzXCJcclxuICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgIHsuLi5yZWdpc3RlcihcInBhc3N3b3JkXCIsIFBhc3N3b3JkVmFsaWRhdGUpfVxyXG4gICAgICAgIGVycm9yPXshIWVycm9ycy5wYXNzd29yZH1cclxuICAgICAgICBoZWxwZXJUZXh0PXtlcnJvcnMucGFzc3dvcmQ/Lm1lc3NhZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259XHJcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogR3JhZGllbnQubG9naW4gfX1cclxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgPlxyXG4gICAgICAgIHtidXR0b25UZXh0fVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUF1dGg7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlRleHRGaWVsZCIsIkJ1dHRvbiIsInVzZUZvcm0iLCJzdHlsZXMiLCJQYXNzd29yZFZhbGlkYXRlIiwiRW1haWxWYWxpZGF0ZSIsIkdyYWRpZW50IiwidXNlUm91dGVyIiwiRm9ybUF1dGgiLCJidXR0b25UZXh0IiwiZXJyb3JzIiwicm91dGVyIiwicmVnaXN0ZXIiLCJmb3JtU3RhdGUiLCJoYW5kbGVTdWJtaXQiLCJvblN1Ym1pdCIsImV2ZW50IiwiZGF0YSIsImVtYWlsIiwicGFzc3dvcmQiLCJleGlzdGluZ0RhdGEiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibmV3RGF0YSIsIkpTT04iLCJwYXJzZSIsImVtYWlsRXhpc3RzIiwic29tZSIsIml0ZW0iLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImZvcm0iLCJjbGFzc05hbWUiLCJpZCIsInNpemUiLCJsYWJlbCIsInR5cGUiLCJjb2xvciIsImVycm9yIiwiaGVscGVyVGV4dCIsIm1lc3NhZ2UiLCJidXR0b24iLCJzdHlsZSIsImJhY2tncm91bmQiLCJsb2dpbiIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/FormAuth/FormAuth.tsx\n"));

/***/ })

});