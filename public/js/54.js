(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./resources/js/Pages/ServiceProviders/requests/components/ProfileNav.jsx":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviders/requests/components/ProfileNav.jsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProfileNav; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./resources/js/Pages/ServiceProviders/requests/components/index.jsx");

function ProfileNav(_ref) {
  var provider = _ref.provider;
  return /*#__PURE__*/React.createElement("div", {
    className: "col-sm-2 mb-2 mb-sm-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav flex-column nav-pills",
    id: "v-pills-tab",
    role: "tablist",
    "aria-orientation": "vertical"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link active show mb-1",
    id: "v-pills-home-tab",
    "data-toggle": "pill",
    href: "#v-pills-profile",
    role: "tab",
    "aria-controls": "v-pills-profile",
    "aria-selected": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: "mdi mdi-home-variant d-md-none d-block"
  }), /*#__PURE__*/React.createElement("span", {
    className: "d-none d-md-block"
  }, "Profile Information")), provider.account_category_type === 'individual' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
    className: "nav-link mb-1",
    id: "v-pills-profile-tab",
    "data-toggle": "pill",
    href: "#v-pills-qualifications",
    role: "tab",
    "aria-controls": "v-pills-qualifications",
    "aria-selected": "false"
  }, /*#__PURE__*/React.createElement("i", {
    className: "mdi mdi-account-circle d-md-none d-block"
  }), /*#__PURE__*/React.createElement("span", {
    className: "d-none d-md-block"
  }, "Education Qualifications")), /*#__PURE__*/React.createElement("a", {
    className: "nav-link mb-1",
    id: "v-pills-settings-tab",
    "data-toggle": "pill",
    href: "#v-pills-medical-registration",
    role: "tab",
    "aria-controls": "v-pills-medical-registration",
    "aria-selected": "false"
  }, /*#__PURE__*/React.createElement("i", {
    className: "mdi mdi-settings-outline d-md-none d-block"
  }), /*#__PURE__*/React.createElement("span", {
    className: "d-none d-md-block"
  }, "Medical Registration")), /*#__PURE__*/React.createElement("a", {
    className: "nav-link mb-1",
    id: "v-pills-settings-tab",
    "data-toggle": "pill",
    href: "#v-pills-services",
    role: "tab",
    "aria-controls": "v-pills-services",
    "aria-selected": "false"
  }, /*#__PURE__*/React.createElement("i", {
    className: "mdi mdi-settings-outline d-md-none d-block"
  }), /*#__PURE__*/React.createElement("span", {
    className: "d-none d-md-block"
  }, "Services"))), provider.account_category_type === 'company' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
    className: "nav-link mb-1",
    id: "v-pills-settings-tab",
    "data-toggle": "pill",
    href: "#v-pills-company",
    role: "tab",
    "aria-controls": "v-pills-company",
    "aria-selected": "false"
  }, /*#__PURE__*/React.createElement("i", {
    className: "mdi mdi-settings-outline d-md-none d-block"
  }), /*#__PURE__*/React.createElement("span", {
    className: "d-none d-md-block"
  }, "Company Information")), /*#__PURE__*/React.createElement("a", {
    className: "nav-link mb-1",
    id: "v-pills-settings-tab",
    "data-toggle": "pill",
    href: "#v-pills-facility",
    role: "tab",
    "aria-controls": "v-pills-facility",
    "aria-selected": "false"
  }, /*#__PURE__*/React.createElement("i", {
    className: "mdi mdi-settings-outline d-md-none d-block"
  }), /*#__PURE__*/React.createElement("span", {
    className: "d-none d-md-block"
  }, "Facility Information")), /*#__PURE__*/React.createElement("a", {
    className: "nav-link mb-1",
    id: "v-pills-settings-tab",
    "data-toggle": "pill",
    href: "#v-pills-facility-services",
    role: "tab",
    "aria-controls": "v-pills-facility-services",
    "aria-selected": "false"
  }, /*#__PURE__*/React.createElement("i", {
    className: "mdi mdi-settings-outline d-md-none d-block"
  }), /*#__PURE__*/React.createElement("span", {
    className: "d-none d-md-block"
  }, "Facility Services"))), provider.account_category_type === 'company' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
    className: "nav-link mb-1",
    id: "v-pills-settings-tab",
    "data-toggle": "pill",
    href: "#v-pills-facility",
    role: "tab",
    "aria-controls": "v-pills-facility",
    "aria-selected": "false"
  }, /*#__PURE__*/React.createElement("i", {
    className: "mdi mdi-settings-outline d-md-none d-block"
  }), /*#__PURE__*/React.createElement("span", {
    className: "d-none d-md-block"
  }, "Facility Information")), /*#__PURE__*/React.createElement("a", {
    className: "nav-link mb-1",
    id: "v-pills-settings-tab",
    "data-toggle": "pill",
    href: "#v-pills-facility-services",
    role: "tab",
    "aria-controls": "v-pills-facility-services",
    "aria-selected": "false"
  }, /*#__PURE__*/React.createElement("i", {
    className: "mdi mdi-settings-outline d-md-none d-block"
  }), /*#__PURE__*/React.createElement("span", {
    className: "d-none d-md-block"
  }, "Facility Services")))));
}

/***/ }),

/***/ "./resources/js/Pages/ServiceProviders/requests/components/index.jsx":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviders/requests/components/index.jsx ***!
  \***************************************************************************/
/*! exports provided: Heading, ServiceProvidersTable, ServiceProvider, ProfileNav, ServiceProviderValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/service-providers/requests/components/Heading'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
throw new Error("Cannot find module '@pages/service-providers/requests/components/Heading'");
!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/service-providers/requests/components/ServiceProvidersTable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
throw new Error("Cannot find module '@pages/service-providers/requests/components/ServiceProvidersTable'");
!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/service-providers/requests/components/ServiceProvider'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
throw new Error("Cannot find module '@pages/service-providers/requests/components/ServiceProvider'");
throw new Error("Cannot find module '@pages/service-providers/requests/components/ServiceProvider'");
!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/service-providers/requests/components/ProfileNav'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
throw new Error("Cannot find module '@pages/service-providers/requests/components/ProfileNav'");







/***/ })

}]);