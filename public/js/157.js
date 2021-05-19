(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[157],{

/***/ "./resources/js/Pages/Utilities/components/languages.jsx":
/*!***************************************************************!*\
  !*** ./resources/js/Pages/Utilities/components/languages.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Languages; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);


function Languages() {
  var _usePage$props = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["usePage"])().props,
      selectable_locale = _usePage$props.selectable_locale,
      locale = _usePage$props.locale;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "dropdown notification-list topbar-dropdown d-none d-lg-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    className: "nav-link dropdown-toggle arrow-none",
    "data-toggle": "dropdown",
    id: "topbar-languagedrop",
    href: locale.url,
    role: "button",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: locale.flag,
    alt: "user-image",
    className: "mr-1",
    width: locale.flag_width,
    height: "12"
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "align-middle"
  }, locale.name), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-chevron-down align-middle"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu",
    "aria-labelledby": "topbar-languagedrop"
  }, selectable_locale.map(function (lang) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
      href: lang.url,
      className: "dropdown-item notify-item",
      key: lang.code
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: lang.flag,
      alt: "user-image",
      className: "mr-1",
      width: lang.flag_width,
      height: 12
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "align-middle"
    }, lang.name));
  })));
}

/***/ })

}]);