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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 50,\n        y: 50\n    });\n    const [size, setSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(100);\n    const movePolygon = ()=>{\n        setPosition({\n            x: Math.random() * 80 + 10,\n            y: Math.random() * 80 + 10\n        });\n    };\n    const resizePolygon = ()=>{\n        setSize(Math.random() * 60 + 40); // Adjusted range for better fit\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center w-screen h-screen bg-gray-900\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center w-full h-full\",\n            children: [\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    viewBox: \"0 0 100 100\",\n                    preserveAspectRatio: \"xMidYMid meet\",\n                    className: \"w-full h-full\",\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"defs\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"linearGradient\", {\n                                id: \"grad1\",\n                                x1: \"0%\",\n                                y1: \"0%\",\n                                x2: \"100%\",\n                                y2: \"0%\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                                        offset: \"0%\",\n                                        style: {\n                                            stopColor: \"red\",\n                                            stopOpacity: 1\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/keiraschoolcraft/Documents/Webware/creative-exercise-keiraSchoolcraft/pages/index.js\",\n                                        lineNumber: 24,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                                        offset: \"100%\",\n                                        style: {\n                                            stopColor: \"blue\",\n                                            stopOpacity: 1\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/keiraschoolcraft/Documents/Webware/creative-exercise-keiraSchoolcraft/pages/index.js\",\n                                        lineNumber: 25,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/keiraschoolcraft/Documents/Webware/creative-exercise-keiraSchoolcraft/pages/index.js\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/keiraschoolcraft/Documents/Webware/creative-exercise-keiraSchoolcraft/pages/index.js\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"polygon\", {\n                            points: \"\".concat(position.x, \",\").concat(position.y, \" \").concat(position.x + size, \",\").concat(position.y, \" \").concat(position.x + size / 2, \",\").concat(position.y + size),\n                            fill: \"url(#grad1)\",\n                            stroke: \"black\",\n                            strokeWidth: \"2\"\n                        }, void 0, false, {\n                            fileName: \"/Users/keiraschoolcraft/Documents/Webware/creative-exercise-keiraSchoolcraft/pages/index.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                            cx: \"50\",\n                            cy: \"80\",\n                            r: \"10\",\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"animate\", {\n                                    attributeName: \"r\",\n                                    from: \"5\",\n                                    to: \"15\",\n                                    dur: \"1s\",\n                                    repeatCount: \"indefinite\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/keiraschoolcraft/Documents/Webware/creative-exercise-keiraSchoolcraft/pages/index.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/keiraschoolcraft/Documents/Webware/creative-exercise-keiraSchoolcraft/pages/index.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/keiraschoolcraft/Documents/Webware/creative-exercise-keiraSchoolcraft/pages/index.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: movePolygon,\n                            className: \"p-2 bg-blue-500 text-white mr-2 rounded\",\n                            children: \"Move Polygon\"\n                        }, void 0, false, {\n                            fileName: \"/Users/keiraschoolcraft/Documents/Webware/creative-exercise-keiraSchoolcraft/pages/index.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: resizePolygon,\n                            className: \"p-2 bg-green-500 text-white rounded\",\n                            children: \"Resize Polygon\"\n                        }, void 0, false, {\n                            fileName: \"/Users/keiraschoolcraft/Documents/Webware/creative-exercise-keiraSchoolcraft/pages/index.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/keiraschoolcraft/Documents/Webware/creative-exercise-keiraSchoolcraft/pages/index.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/keiraschoolcraft/Documents/Webware/creative-exercise-keiraSchoolcraft/pages/index.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/keiraschoolcraft/Documents/Webware/creative-exercise-keiraSchoolcraft/pages/index.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"clVbs8U6MKFhQIYhtrXSOZXzIqw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBRWxCLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsK0NBQVFBLENBQUM7UUFBRUksR0FBRztRQUFJQyxHQUFHO0lBQUc7SUFDeEQsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO0lBRWpDLE1BQU1RLGNBQWM7UUFDbEJMLFlBQVk7WUFDVkMsR0FBR0ssS0FBS0MsTUFBTSxLQUFLLEtBQUs7WUFDeEJMLEdBQUdJLEtBQUtDLE1BQU0sS0FBSyxLQUFLO1FBQzFCO0lBQ0Y7SUFFQSxNQUFNQyxnQkFBZ0I7UUFDcEJKLFFBQVFFLEtBQUtDLE1BQU0sS0FBSyxLQUFLLEtBQUssZ0NBQWdDO0lBQ3BFO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7O2dCQUEyQzs4QkFDeEQsOERBQUNDO29CQUFJQyxTQUFRO29CQUFjQyxxQkFBb0I7b0JBQWdCSCxXQUFVOzt3QkFBZ0I7c0NBQ3ZGLDhEQUFDSTtzQ0FDQyw0RUFBQ0M7Z0NBQWVDLElBQUc7Z0NBQVFDLElBQUc7Z0NBQUtDLElBQUc7Z0NBQUtDLElBQUc7Z0NBQU9DLElBQUc7O2tEQUN0RCw4REFBQ0M7d0NBQUtDLFFBQU87d0NBQUtDLE9BQU87NENBQUVDLFdBQVc7NENBQU9DLGFBQWE7d0NBQUU7Ozs7OztrREFDNUQsOERBQUNKO3dDQUFLQyxRQUFPO3dDQUFPQyxPQUFPOzRDQUFFQyxXQUFXOzRDQUFRQyxhQUFhO3dDQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJbkUsOERBQUNDOzRCQUNDQyxRQUFRLEdBQWlCNUIsT0FBZEEsU0FBU0UsQ0FBQyxFQUFDLEtBQWlCRixPQUFkQSxTQUFTRyxDQUFDLEVBQUMsS0FBd0JILE9BQXJCQSxTQUFTRSxDQUFDLEdBQUdFLE1BQUssS0FBaUJKLE9BQWRBLFNBQVNHLENBQUMsRUFBQyxLQUE0QkgsT0FBekJBLFNBQVNFLENBQUMsR0FBR0UsT0FBTyxHQUFFLEtBQXFCLE9BQWxCSixTQUFTRyxDQUFDLEdBQUdDOzRCQUNoSHlCLE1BQUs7NEJBQ0xDLFFBQU87NEJBQ1BDLGFBQVk7Ozs7OztzQ0FHZCw4REFBQ0M7NEJBQU9DLElBQUc7NEJBQUtDLElBQUc7NEJBQUtDLEdBQUU7O2dDQUFLOzhDQUM3Qiw4REFBQ0M7b0NBQ0NDLGVBQWM7b0NBQ2RDLE1BQUs7b0NBQ0xDLElBQUc7b0NBQ0hDLEtBQUk7b0NBQ0pDLGFBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFLbEIsOERBQUMvQjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUMrQjs0QkFBT0MsU0FBU3JDOzRCQUFhSyxXQUFVO3NDQUEwQzs7Ozs7O3NDQUdsRiw4REFBQytCOzRCQUFPQyxTQUFTbEM7NEJBQWVFLFdBQVU7c0NBQXNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8xRjtHQXZEd0JaO0tBQUFBIiwic291cmNlcyI6WyIvVXNlcnMva2VpcmFzY2hvb2xjcmFmdC9Eb2N1bWVudHMvV2Vid2FyZS9jcmVhdGl2ZS1leGVyY2lzZS1rZWlyYVNjaG9vbGNyYWZ0L3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtwb3NpdGlvbiwgc2V0UG9zaXRpb25dID0gdXNlU3RhdGUoeyB4OiA1MCwgeTogNTAgfSk7XG4gIGNvbnN0IFtzaXplLCBzZXRTaXplXSA9IHVzZVN0YXRlKDEwMCk7XG5cbiAgY29uc3QgbW92ZVBvbHlnb24gPSAoKSA9PiB7XG4gICAgc2V0UG9zaXRpb24oe1xuICAgICAgeDogTWF0aC5yYW5kb20oKSAqIDgwICsgMTAsICAvLyBBZGp1c3RlZCByYW5nZSBmb3IgYmV0dGVyIGZpdFxuICAgICAgeTogTWF0aC5yYW5kb20oKSAqIDgwICsgMTAsICAvLyBBZGp1c3RlZCByYW5nZSBmb3IgYmV0dGVyIGZpdFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlc2l6ZVBvbHlnb24gPSAoKSA9PiB7XG4gICAgc2V0U2l6ZShNYXRoLnJhbmRvbSgpICogNjAgKyA0MCk7IC8vIEFkanVzdGVkIHJhbmdlIGZvciBiZXR0ZXIgZml0XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctc2NyZWVuIGgtc2NyZWVuIGJnLWdyYXktOTAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHctZnVsbCBoLWZ1bGxcIj4gey8qIE1ha2UgaW5uZXIgZGl2IGZpbGwgc2NyZWVuICovfVxuICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbFwiPiB7LyogTWFrZSBTVkcgcmVzcG9uc2l2ZSAqL31cbiAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImdyYWQxXCIgeDE9XCIwJVwiIHkxPVwiMCVcIiB4Mj1cIjEwMCVcIiB5Mj1cIjAlXCI+XG4gICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAlXCIgc3R5bGU9e3sgc3RvcENvbG9yOiBcInJlZFwiLCBzdG9wT3BhY2l0eTogMSB9fSAvPlxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxMDAlXCIgc3R5bGU9e3sgc3RvcENvbG9yOiBcImJsdWVcIiwgc3RvcE9wYWNpdHk6IDEgfX0gLz5cbiAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgPC9kZWZzPlxuXG4gICAgICAgICAgPHBvbHlnb25cbiAgICAgICAgICAgIHBvaW50cz17YCR7cG9zaXRpb24ueH0sJHtwb3NpdGlvbi55fSAke3Bvc2l0aW9uLnggKyBzaXplfSwke3Bvc2l0aW9uLnl9ICR7cG9zaXRpb24ueCArIHNpemUgLyAyfSwke3Bvc2l0aW9uLnkgKyBzaXplfWB9XG4gICAgICAgICAgICBmaWxsPVwidXJsKCNncmFkMSlcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiYmxhY2tcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGNpcmNsZSBjeD1cIjUwXCIgY3k9XCI4MFwiIHI9XCIxMFwiPiB7LyogQWRqdXN0ZWQgY2lyY2xlIHBvc2l0aW9uIGFuZCBzaXplICovfVxuICAgICAgICAgICAgPGFuaW1hdGVcbiAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cInJcIlxuICAgICAgICAgICAgICBmcm9tPVwiNVwiXG4gICAgICAgICAgICAgIHRvPVwiMTVcIlxuICAgICAgICAgICAgICBkdXI9XCIxc1wiXG4gICAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvY2lyY2xlPlxuICAgICAgICA8L3N2Zz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTVcIj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e21vdmVQb2x5Z29ufSBjbGFzc05hbWU9XCJwLTIgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBtci0yIHJvdW5kZWRcIj5cbiAgICAgICAgICAgIE1vdmUgUG9seWdvblxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVzaXplUG9seWdvbn0gY2xhc3NOYW1lPVwicC0yIGJnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWRcIj5cbiAgICAgICAgICAgIFJlc2l6ZSBQb2x5Z29uXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSG9tZSIsInBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJ4IiwieSIsInNpemUiLCJzZXRTaXplIiwibW92ZVBvbHlnb24iLCJNYXRoIiwicmFuZG9tIiwicmVzaXplUG9seWdvbiIsImRpdiIsImNsYXNzTmFtZSIsInN2ZyIsInZpZXdCb3giLCJwcmVzZXJ2ZUFzcGVjdFJhdGlvIiwiZGVmcyIsImxpbmVhckdyYWRpZW50IiwiaWQiLCJ4MSIsInkxIiwieDIiLCJ5MiIsInN0b3AiLCJvZmZzZXQiLCJzdHlsZSIsInN0b3BDb2xvciIsInN0b3BPcGFjaXR5IiwicG9seWdvbiIsInBvaW50cyIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsImNpcmNsZSIsImN4IiwiY3kiLCJyIiwiYW5pbWF0ZSIsImF0dHJpYnV0ZU5hbWUiLCJmcm9tIiwidG8iLCJkdXIiLCJyZXBlYXRDb3VudCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});