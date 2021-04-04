(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[112],{

/***/ "./resources/js/Pages/Utilities/components/ActiveMainLink.jsx":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Utilities/components/ActiveMainLink.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActiveMainLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function ActiveMainLink(_ref) {
  var title = _ref.title,
      iconName = _ref.iconName,
      compString = _ref.compString;
  var _true = true,
      asPath = _true.asPath;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "javascript: void(0);",
    className: "side-nav-link ".concat(asPath.includes(compString) && 'active')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: iconName
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " ", title, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "menu-arrow"
  }));
}

/***/ })

}]);