(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[105],{

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
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Pages_Services_packages_PackageFeature__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Pages/Services/packages/PackageFeature */ "./resources/js/Pages/Services/packages/PackageFeature.jsx");
/* harmony import */ var _Pages_Services_packages_PackageMemberRange__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Pages/Services/packages/PackageMemberRange */ "./resources/js/Pages/Services/packages/PackageMemberRange.jsx");









var ManagePackages = function ManagePackages() {
  var _usePage$props = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__["usePage"])().props,
      memberships = _usePage$props.memberships,
      packages = _usePage$props.packages,
      ranges = _usePage$props.ranges,
      features = _usePage$props.features,
      services = _usePage$props.services;
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
    id: "v-pills-packages-feature-tab",
    "data-toggle": "pill",
    href: "#v-pills-packages-feature",
    role: "tab",
    "aria-controls": "v-pills-packages-feature",
    "aria-selected": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "mdi mdi-account-circle d-md-none d-block"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "d-none d-md-block"
  }, "Package Features")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "nav-link",
    id: "v-pills-packages-member-range-tab",
    "data-toggle": "pill",
    href: "#v-pills-packages-member-range",
    role: "tab",
    "aria-controls": "v-pills-packages-member-range",
    "aria-selected": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "mdi mdi-account-circle d-md-none d-block"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "d-none d-md-block"
  }, "Member Range")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Pages_Services_packages_Memberships__WEBPACK_IMPORTED_MODULE_2__["default"], {
    memberships: memberships
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tab-pane fade",
    id: "v-pills-packages-feature",
    role: "tabpanel",
    "aria-labelledby": "v-pills-packages-feature-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Pages_Services_packages_PackageFeature__WEBPACK_IMPORTED_MODULE_6__["default"], {
    packages: features,
    services: services
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tab-pane fade",
    id: "v-pills-packages-member-range",
    role: "tabpanel",
    "aria-labelledby": "v-pills-packages-member-range-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Pages_Services_packages_PackageMemberRange__WEBPACK_IMPORTED_MODULE_7__["default"], {
    packages: ranges
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tab-pane fade",
    id: "v-pills-packages",
    role: "tabpanel",
    "aria-labelledby": "v-pills-packages-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Pages_Services_packages_Packages__WEBPACK_IMPORTED_MODULE_3__["default"], {
    packages: packages,
    memberships: memberships,
    features: features,
    ranges: ranges
  })))));
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