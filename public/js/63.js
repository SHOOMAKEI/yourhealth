(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./resources/js/Pages/Services/packages/Packages.jsx":
/*!***********************************************************!*\
  !*** ./resources/js/Pages/Services/packages/Packages.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Packages; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Packages() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Packages from components"));
}

/***/ }),

/***/ "./resources/js/Pages/Services/packages/manage.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/Pages/Services/packages/manage.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pages_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Pages/framework */ "./resources/js/Pages/framework.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Pages_Services_packages_Memberships__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Pages/Services/packages/Memberships */ "./resources/js/Pages/Services/packages/Memberships.jsx");
/* harmony import */ var _Pages_Services_packages_Packages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Pages/Services/packages/Packages */ "./resources/js/Pages/Services/packages/Packages.jsx");
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.js");






var ManagePackages = function ManagePackages() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row",
    style: {
      paddingTop: 30 + 'px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-sm-2 mb-2 mb-sm-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "nav flex-column nav-pills",
    id: "v-pills-tab",
    role: "tablist",
    "aria-orientation": "vertical"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "nav-link active show my-2",
    id: "v-pills-home-tab",
    "data-toggle": "pill",
    href: "#v-pills-memberships",
    role: "tab",
    "aria-controls": "v-pills-memberships",
    "aria-selected": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "mdi mdi-home-variant d-md-none d-block"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "d-none d-md-block"
  }, "Memberships")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "nav-link",
    id: "v-pills-packages-tab",
    "data-toggle": "pill",
    href: "#v-pills-packages",
    role: "tab",
    "aria-controls": "v-pills-packages",
    "aria-selected": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "mdi mdi-account-circle d-md-none d-block"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "d-none d-md-block"
  }, "Packages")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-sm-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tab-content",
    id: "v-pills-tabContent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tab-pane fade active show",
    id: "v-pills-memberships",
    role: "tabpanel",
    "aria-labelledby": "v-pills-memberships-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Pages_Services_packages_Memberships__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tab-pane fade",
    id: "v-pills-packages",
    role: "tabpanel",
    "aria-labelledby": "v-pills-packages-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Pages_Services_packages_Packages__WEBPACK_IMPORTED_MODULE_3__["default"], null))))));
};

ManagePackages.layout = function (page) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: page
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ManagePackages);

/***/ }),

/***/ "./resources/js/Pages/framework.jsx":
/*!******************************************!*\
  !*** ./resources/js/Pages/framework.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utilities_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utilities/sidenav */ "./resources/js/Pages/Utilities/sidenav.jsx");
/* harmony import */ var _Utilities_topnav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utilities/topnav */ "./resources/js/Pages/Utilities/topnav.jsx");




function Framework(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utilities_topnav__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utilities_sidenav__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, children)))));
}

/* harmony default export */ __webpack_exports__["default"] = (Framework);

/***/ })

}]);