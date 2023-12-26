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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Button,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Button,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _FormAuth_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormAuth.module.css */ \"(app-pages-browser)/./components/FormAuth/FormAuth.module.css\");\n/* harmony import */ var _FormAuth_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_FormAuth_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validate */ \"(app-pages-browser)/./components/FormAuth/validate.ts\");\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../consts */ \"(app-pages-browser)/./consts.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst FormAuth = (param)=>{\n    let { buttonText, onSubmit } = param;\n    var _errors_email, _errors_password;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { register, formState: { errors }, handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: (_FormAuth_module_css__WEBPACK_IMPORTED_MODULE_6___default().form),\n        onSubmit: handleSubmit(onSubmit),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                id: \"email\",\n                size: \"small\",\n                label: \"Email\",\n                type: \"email\",\n                color: \"success\",\n                ...register(\"email\", _validate__WEBPACK_IMPORTED_MODULE_2__.EmailValidate),\n                error: !!errors.email,\n                helperText: (_errors_email = errors.email) === null || _errors_email === void 0 ? void 0 : _errors_email.message\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\as\\\\asteroids\\\\components\\\\FormAuth\\\\FormAuth.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                id: \"password\",\n                label: \"Password\",\n                type: \"password\",\n                color: \"success\",\n                size: \"small\",\n                ...register(\"password\", _validate__WEBPACK_IMPORTED_MODULE_2__.PasswordValidate),\n                error: !!errors.password,\n                helperText: (_errors_password = errors.password) === null || _errors_password === void 0 ? void 0 : _errors_password.message\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\as\\\\asteroids\\\\components\\\\FormAuth\\\\FormAuth.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                className: (_FormAuth_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                type: \"submit\",\n                style: {\n                    background: _consts__WEBPACK_IMPORTED_MODULE_3__.Gradient.login\n                },\n                variant: \"contained\",\n                children: buttonText\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\as\\\\asteroids\\\\components\\\\FormAuth\\\\FormAuth.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\as\\\\asteroids\\\\components\\\\FormAuth\\\\FormAuth.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FormAuth, \"dcqw1t/U2/R1MY1WHR1w4g9P6cQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm\n    ];\n});\n_c = FormAuth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormAuth); // const onSubmit = async (event: ISignin) => {\n //   const data = {\n //     email: event.email,\n //     password: event.password,\n //   };\n //   const existingData = localStorage.getItem(\"userData\");\n //   let newData = [];\n //   if (existingData) {\n //     newData = JSON.parse(existingData);\n //     const emailExists = newData.some(\n //       (item: ISignin) => item.email === data.email\n //     );\n //     if (emailExists) {\n //       if (buttonText === \"Sign up\") {\n //         router.push(\"/modal\");\n //       }\n //       if (buttonText === \"Sign in\") {\n //         await handleToggleAuth();\n //         router.push(\"/\");\n //       }\n //     } else {\n //       newData.push(data);\n //       await handleToggleAuth();\n //       router.push(\"/\");\n //     }\n //   } else {\n //     if (buttonText === \"Sign in\") {\n //       router.push(\"/signup\");\n //     }\n //     else if (buttonText === \"Sign up\") {\n //       await handleToggleAuth();\n //       newData.push(data);\n //       router.push(\"/\");\n //     }\n //   }\n //   localStorage.setItem(\"userData\", JSON.stringify(newData));\n // };\nvar _c;\n$RefreshReg$(_c, \"FormAuth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRm9ybUF1dGgvRm9ybUF1dGgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNnQjtBQUNSO0FBQ0M7QUFDa0I7QUFDckI7QUFDSTtBQUk1QyxNQUFNUyxXQUFlO1FBQUMsRUFBRUMsVUFBVSxFQUFFQyxRQUFRLEVBQUU7UUFvQjFCQyxlQVVBQTs7SUE3QmxCLE1BQU1DLFNBQVNMLDBEQUFTQTtJQUV4QixNQUFNLEVBQ0pNLFFBQVEsRUFDUkMsV0FBVyxFQUFFSCxNQUFNLEVBQUUsRUFDckJJLFlBQVksRUFDYixHQUFHYix3REFBT0E7SUFHWCxxQkFDRSw4REFBQ2M7UUFBS0MsV0FBV2Qsa0VBQVc7UUFBRU8sVUFBVUssYUFBYUw7OzBCQUNuRCw4REFBQ1YsNEZBQVNBO2dCQUNSa0IsSUFBRztnQkFDSEMsTUFBSztnQkFDTEMsT0FBTTtnQkFDTkMsTUFBSztnQkFDTEMsT0FBTTtnQkFDTCxHQUFHVCxTQUFTLFNBQVNSLG9EQUFhQSxDQUFDO2dCQUNwQ2tCLE9BQU8sQ0FBQyxDQUFDWixPQUFPYSxLQUFLO2dCQUNyQkMsVUFBVSxHQUFFZCxnQkFBQUEsT0FBT2EsS0FBSyxjQUFaYixvQ0FBQUEsY0FBY2UsT0FBTzs7Ozs7OzBCQUVuQyw4REFBQzFCLDRGQUFTQTtnQkFDUmtCLElBQUc7Z0JBQ0hFLE9BQU07Z0JBQ05DLE1BQUs7Z0JBQ0xDLE9BQU07Z0JBQ05ILE1BQUs7Z0JBQ0osR0FBR04sU0FBUyxZQUFZVCx1REFBZ0JBLENBQUM7Z0JBQzFDbUIsT0FBTyxDQUFDLENBQUNaLE9BQU9nQixRQUFRO2dCQUN4QkYsVUFBVSxHQUFFZCxtQkFBQUEsT0FBT2dCLFFBQVEsY0FBZmhCLHVDQUFBQSxpQkFBaUJlLE9BQU87Ozs7OzswQkFFdEMsOERBQUN6Qiw0RkFBTUE7Z0JBQ0xnQixXQUFXZCxvRUFBYTtnQkFDeEJrQixNQUFLO2dCQUNMUSxPQUFPO29CQUFFQyxZQUFZeEIsNkNBQVFBLENBQUN5QixLQUFLO2dCQUFDO2dCQUNwQ0MsU0FBUTswQkFFUHZCOzs7Ozs7Ozs7Ozs7QUFJVDtHQTFDTUQ7O1FBQ1dELHNEQUFTQTtRQU1wQkwsb0RBQU9BOzs7S0FQUE07QUE0Q04sK0RBQWVBLFFBQVFBLEVBQUMsQ0FLeEIsK0NBQStDO0NBQy9DLG1CQUFtQjtDQUNuQiwwQkFBMEI7Q0FDMUIsZ0NBQWdDO0NBQ2hDLE9BQU87Q0FDUCwyREFBMkQ7Q0FDM0Qsc0JBQXNCO0NBQ3RCLHdCQUF3QjtDQUN4QiwwQ0FBMEM7Q0FDMUMsd0NBQXdDO0NBQ3hDLHFEQUFxRDtDQUNyRCxTQUFTO0NBQ1QseUJBQXlCO0NBQ3pCLHdDQUF3QztDQUN4QyxpQ0FBaUM7Q0FDakMsVUFBVTtDQUNWLHdDQUF3QztDQUN4QyxvQ0FBb0M7Q0FDcEMsNEJBQTRCO0NBQzVCLFVBQVU7Q0FFVixlQUFlO0NBQ2YsNEJBQTRCO0NBQzVCLGtDQUFrQztDQUNsQywwQkFBMEI7Q0FDMUIsUUFBUTtDQUNSLGFBQWE7Q0FDYixzQ0FBc0M7Q0FDdEMsZ0NBQWdDO0NBQ2hDLFFBQVE7Q0FDUiwyQ0FBMkM7Q0FDM0Msa0NBQWtDO0NBQ2xDLDRCQUE0QjtDQUM1QiwwQkFBMEI7Q0FDMUIsUUFBUTtDQUNSLE1BQU07Q0FDTiwrREFBK0Q7Q0FDL0QsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvcm1BdXRoL0Zvcm1BdXRoLnRzeD9hYTk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQsIEJ1dHRvbiB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRm9ybUF1dGgubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBQYXNzd29yZFZhbGlkYXRlLCBFbWFpbFZhbGlkYXRlIH0gZnJvbSBcIi4vdmFsaWRhdGVcIjtcclxuaW1wb3J0IHsgR3JhZGllbnQgfSBmcm9tIFwiLi4vLi4vY29uc3RzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgSVNpZ25pbiB9IGZyb20gXCIuLi8uLi9oZWxwZXIvdHlwZXNcIjtcclxuXHJcblxyXG5jb25zdCBGb3JtQXV0aDogRkMgPSAoeyBidXR0b25UZXh0LCBvblN1Ym1pdCB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHJlZ2lzdGVyLFxyXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxyXG4gICAgaGFuZGxlU3VibWl0LFxyXG4gIH0gPSB1c2VGb3JtPElTaWduaW4+KCk7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG4gICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICBsYWJlbD1cIkVtYWlsXCJcclxuICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXHJcbiAgICAgICAgey4uLnJlZ2lzdGVyKFwiZW1haWxcIiwgRW1haWxWYWxpZGF0ZSl9XHJcbiAgICAgICAgZXJyb3I9eyEhZXJyb3JzLmVtYWlsfVxyXG4gICAgICAgIGhlbHBlclRleHQ9e2Vycm9ycy5lbWFpbD8ubWVzc2FnZX1cclxuICAgICAgLz5cclxuICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgY29sb3I9XCJzdWNjZXNzXCJcclxuICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgIHsuLi5yZWdpc3RlcihcInBhc3N3b3JkXCIsIFBhc3N3b3JkVmFsaWRhdGUpfVxyXG4gICAgICAgIGVycm9yPXshIWVycm9ycy5wYXNzd29yZH1cclxuICAgICAgICBoZWxwZXJUZXh0PXtlcnJvcnMucGFzc3dvcmQ/Lm1lc3NhZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259XHJcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogR3JhZGllbnQubG9naW4gfX1cclxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgPlxyXG4gICAgICAgIHtidXR0b25UZXh0fVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUF1dGg7XHJcblxyXG5cclxuXHJcblxyXG4vLyBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChldmVudDogSVNpZ25pbikgPT4ge1xyXG4vLyAgIGNvbnN0IGRhdGEgPSB7XHJcbi8vICAgICBlbWFpbDogZXZlbnQuZW1haWwsXHJcbi8vICAgICBwYXNzd29yZDogZXZlbnQucGFzc3dvcmQsXHJcbi8vICAgfTtcclxuLy8gICBjb25zdCBleGlzdGluZ0RhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJEYXRhXCIpO1xyXG4vLyAgIGxldCBuZXdEYXRhID0gW107XHJcbi8vICAgaWYgKGV4aXN0aW5nRGF0YSkge1xyXG4vLyAgICAgbmV3RGF0YSA9IEpTT04ucGFyc2UoZXhpc3RpbmdEYXRhKTtcclxuLy8gICAgIGNvbnN0IGVtYWlsRXhpc3RzID0gbmV3RGF0YS5zb21lKFxyXG4vLyAgICAgICAoaXRlbTogSVNpZ25pbikgPT4gaXRlbS5lbWFpbCA9PT0gZGF0YS5lbWFpbFxyXG4vLyAgICAgKTtcclxuLy8gICAgIGlmIChlbWFpbEV4aXN0cykge1xyXG4vLyAgICAgICBpZiAoYnV0dG9uVGV4dCA9PT0gXCJTaWduIHVwXCIpIHtcclxuLy8gICAgICAgICByb3V0ZXIucHVzaChcIi9tb2RhbFwiKTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICBpZiAoYnV0dG9uVGV4dCA9PT0gXCJTaWduIGluXCIpIHtcclxuLy8gICAgICAgICBhd2FpdCBoYW5kbGVUb2dnbGVBdXRoKCk7XHJcbi8vICAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4vLyAgICAgICB9XHJcblxyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgbmV3RGF0YS5wdXNoKGRhdGEpO1xyXG4vLyAgICAgICBhd2FpdCBoYW5kbGVUb2dnbGVBdXRoKCk7XHJcbi8vICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuLy8gICAgIH1cclxuLy8gICB9IGVsc2Uge1xyXG4vLyAgICAgaWYgKGJ1dHRvblRleHQgPT09IFwiU2lnbiBpblwiKSB7XHJcbi8vICAgICAgIHJvdXRlci5wdXNoKFwiL3NpZ251cFwiKTtcclxuLy8gICAgIH1cclxuLy8gICAgIGVsc2UgaWYgKGJ1dHRvblRleHQgPT09IFwiU2lnbiB1cFwiKSB7XHJcbi8vICAgICAgIGF3YWl0IGhhbmRsZVRvZ2dsZUF1dGgoKTtcclxuLy8gICAgICAgbmV3RGF0YS5wdXNoKGRhdGEpO1xyXG4vLyAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlckRhdGFcIiwgSlNPTi5zdHJpbmdpZnkobmV3RGF0YSkpO1xyXG4vLyB9OyJdLCJuYW1lcyI6WyJSZWFjdCIsIlRleHRGaWVsZCIsIkJ1dHRvbiIsInVzZUZvcm0iLCJzdHlsZXMiLCJQYXNzd29yZFZhbGlkYXRlIiwiRW1haWxWYWxpZGF0ZSIsIkdyYWRpZW50IiwidXNlUm91dGVyIiwiRm9ybUF1dGgiLCJidXR0b25UZXh0Iiwib25TdWJtaXQiLCJlcnJvcnMiLCJyb3V0ZXIiLCJyZWdpc3RlciIsImZvcm1TdGF0ZSIsImhhbmRsZVN1Ym1pdCIsImZvcm0iLCJjbGFzc05hbWUiLCJpZCIsInNpemUiLCJsYWJlbCIsInR5cGUiLCJjb2xvciIsImVycm9yIiwiZW1haWwiLCJoZWxwZXJUZXh0IiwibWVzc2FnZSIsInBhc3N3b3JkIiwiYnV0dG9uIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwibG9naW4iLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/FormAuth/FormAuth.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/RegistrPage/RegistrPage.tsx":
/*!************************************************!*\
  !*** ./components/RegistrPage/RegistrPage.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _RegistrPage_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RegistrPage.module.css */ \"(app-pages-browser)/./components/RegistrPage/RegistrPage.module.css\");\n/* harmony import */ var _RegistrPage_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_RegistrPage_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _barrel_optimize_names_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _FormAuth_FormAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FormAuth/FormAuth */ \"(app-pages-browser)/./components/FormAuth/FormAuth.tsx\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase */ \"(app-pages-browser)/./firebase.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_features_users_usersSlices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/features/users/usersSlices */ \"(app-pages-browser)/./redux/features/users/usersSlices.ts\");\n/* harmony import */ var _helper_ToggleAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helper/ToggleAuth */ \"(app-pages-browser)/./helper/ToggleAuth.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst RegistrPage = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();\n    const handleRegister = (param)=>{\n        let { email, password } = param;\n        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)(_firebase__WEBPACK_IMPORTED_MODULE_4__.app);\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.createUserWithEmailAndPassword)(auth, email, password).then((param)=>{\n            let { user } = param;\n            console.log(user);\n            dispatch((0,_redux_features_users_usersSlices__WEBPACK_IMPORTED_MODULE_5__.setUser)({\n                email: user.email,\n                id: user.uid,\n                token: user.accessToken\n            }));\n            (0,_helper_ToggleAuth__WEBPACK_IMPORTED_MODULE_6__.handleToggleAuth)();\n            router.push(\"/\");\n        }).catch(console.error);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_RegistrPage_module_css__WEBPACK_IMPORTED_MODULE_9___default().wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                variant: \"h5\",\n                component: \"div\",\n                children: \"Welcome\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\as\\\\asteroids\\\\components\\\\RegistrPage\\\\RegistrPage.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FormAuth_FormAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                buttonText: \"Sign up\",\n                onSubmit: handleRegister\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\as\\\\asteroids\\\\components\\\\RegistrPage\\\\RegistrPage.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\as\\\\asteroids\\\\components\\\\RegistrPage\\\\RegistrPage.tsx\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, undefined);\n};\n_s(RegistrPage, \"zXnflAqd4rnyBpogtdAc6I4Vk2A=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch\n    ];\n});\n_c = RegistrPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegistrPage);\nvar _c;\n$RefreshReg$(_c, \"RegistrPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUmVnaXN0clBhZ2UvUmVnaXN0clBhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ2tDO0FBQ1k7QUFDSDtBQUNDO0FBQzRCO0FBQ25DO0FBQ0s7QUFDdUI7QUFDTjtBQUNmO0FBRzVDLE1BQU1XLGNBQWtCOztJQUNwQixNQUFNQyxTQUFTRiwwREFBU0E7SUFDeEIsTUFBTUcsV0FBV04sd0RBQVdBO0lBRTVCLE1BQU1PLGlCQUFpQjtZQUFDLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFO1FBQ3ZDLE1BQU1DLE9BQU9iLHNEQUFPQSxDQUFDRSwwQ0FBR0E7UUFDeEJELDZFQUE4QkEsQ0FBQ1ksTUFBTUYsT0FBT0MsVUFDdkNFLElBQUksQ0FBQztnQkFBQyxFQUFFQyxJQUFJLEVBQUU7WUFDWEMsUUFBUUMsR0FBRyxDQUFDRjtZQUNaTixTQUFTTCwwRUFBT0EsQ0FBQztnQkFDYk8sT0FBT0ksS0FBS0osS0FBSztnQkFDakJPLElBQUlILEtBQUtJLEdBQUc7Z0JBQ1pDLE9BQU9MLEtBQUtNLFdBQVc7WUFDM0I7WUFDQWhCLG9FQUFnQkE7WUFDaEJHLE9BQU9jLElBQUksQ0FBQztRQUNoQixHQUNDQyxLQUFLLENBQUNQLFFBQVFRLEtBQUs7SUFDNUI7SUFFQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVzdCLHdFQUFjOzswQkFDMUIsOERBQUNDLHVGQUFVQTtnQkFBQzhCLFNBQVE7Z0JBQUtDLFdBQVU7MEJBQU07Ozs7OzswQkFHekMsOERBQUM5QiwwREFBUUE7Z0JBQUMrQixZQUFXO2dCQUFVQyxVQUFVckI7Ozs7Ozs7Ozs7OztBQUdyRDtHQTVCTUg7O1FBQ2FELHNEQUFTQTtRQUNQSCxvREFBV0E7OztLQUYxQkk7QUE4Qk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWdpc3RyUGFnZS9SZWdpc3RyUGFnZS50c3g/ZjYxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUmVnaXN0clBhZ2UubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IEZvcm1BdXRoIGZyb20gJy4uL0Zvcm1BdXRoL0Zvcm1BdXRoJztcclxuaW1wb3J0IHsgZ2V0QXV0aCwgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgYXBwIH0gZnJvbSAnLi4vLi4vZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc2V0VXNlciB9IGZyb20gJy4uLy4uL3JlZHV4L2ZlYXR1cmVzL3VzZXJzL3VzZXJzU2xpY2VzJztcclxuaW1wb3J0IHsgaGFuZGxlVG9nZ2xlQXV0aCB9IGZyb20gJy4uLy4uL2hlbHBlci9Ub2dnbGVBdXRoJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuXHJcblxyXG5jb25zdCBSZWdpc3RyUGFnZTogRkMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVSZWdpc3RlciA9ICh7IGVtYWlsLCBwYXNzd29yZCB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcclxuICAgICAgICBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAgICAgICAudGhlbigoeyB1c2VyIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHVzZXIudWlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiB1c2VyLmFjY2Vzc1Rva2VuXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVUb2dnbGVBdXRoKCk7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICBXZWxjb21lXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEZvcm1BdXRoIGJ1dHRvblRleHQ9J1NpZ24gdXAnIG9uU3VibWl0PXtoYW5kbGVSZWdpc3Rlcn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyUGFnZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJUeXBvZ3JhcGh5IiwiRm9ybUF1dGgiLCJnZXRBdXRoIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiYXBwIiwidXNlRGlzcGF0Y2giLCJzZXRVc2VyIiwiaGFuZGxlVG9nZ2xlQXV0aCIsInVzZVJvdXRlciIsIlJlZ2lzdHJQYWdlIiwicm91dGVyIiwiZGlzcGF0Y2giLCJoYW5kbGVSZWdpc3RlciIsImVtYWlsIiwicGFzc3dvcmQiLCJhdXRoIiwidGhlbiIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJ1aWQiLCJ0b2tlbiIsImFjY2Vzc1Rva2VuIiwicHVzaCIsImNhdGNoIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJ3cmFwcGVyIiwidmFyaWFudCIsImNvbXBvbmVudCIsImJ1dHRvblRleHQiLCJvblN1Ym1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/RegistrPage/RegistrPage.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./helper/ToggleAuth.ts":
/*!******************************!*\
  !*** ./helper/ToggleAuth.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleToggleAuth: function() { return /* binding */ handleToggleAuth; }\n/* harmony export */ });\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../redux/store */ \"(app-pages-browser)/./redux/store.ts\");\n/* harmony import */ var _redux_features_posts_postsSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/features/posts/postsSlice */ \"(app-pages-browser)/./redux/features/posts/postsSlice.ts\");\n\n\nconst handleToggleAuth = async ()=>{\n    await _redux_store__WEBPACK_IMPORTED_MODULE_0__.store.dispatch((0,_redux_features_posts_postsSlice__WEBPACK_IMPORTED_MODULE_1__.toggleAuth)());\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2hlbHBlci9Ub2dnbGVBdXRoLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF1QztBQUN5QjtBQUV6RCxNQUFNRSxtQkFBbUI7SUFDNUIsTUFBTUYsK0NBQUtBLENBQUNHLFFBQVEsQ0FBQ0YsNEVBQVVBO0FBQ25DLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVyL1RvZ2dsZUF1dGgudHM/NmJhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uL3JlZHV4L3N0b3JlJztcclxuaW1wb3J0IHsgdG9nZ2xlQXV0aCB9IGZyb20gJy4uL3JlZHV4L2ZlYXR1cmVzL3Bvc3RzL3Bvc3RzU2xpY2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZVRvZ2dsZUF1dGggPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBzdG9yZS5kaXNwYXRjaCh0b2dnbGVBdXRoKCkpO1xyXG59OyJdLCJuYW1lcyI6WyJzdG9yZSIsInRvZ2dsZUF1dGgiLCJoYW5kbGVUb2dnbGVBdXRoIiwiZGlzcGF0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./helper/ToggleAuth.ts\n"));

/***/ })

});