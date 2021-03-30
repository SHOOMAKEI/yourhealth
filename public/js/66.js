(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "./resources/js/Pages/ServiceProviderProfileCompletion/components/RegistrationNav.jsx":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviderProfileCompletion/components/RegistrationNav.jsx ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegistrationNav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function RegistrationNav(_ref) {
  var user = _ref.user;
  return /*#__PURE__*/React.createElement("div", {
    className: "col-sm-3 mb-2 mb-sm-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav flex-column nav-pills",
    id: "v-pills-tab",
    role: "tablist",
    "aria-orientation": "vertical"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link active show mb-2",
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
  }, "Profile Information")), user.provider_profile.account_category_type === 'company' && /*#__PURE__*/React.createElement("a", {
    className: "nav-link mb-2",
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
  }, "Company Information")), user.provider_profile.account_category_type === 'facility' && /*#__PURE__*/React.createElement("a", {
    className: "nav-link mb-2",
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
  }, "Facility Information")), user.provider_profile.account_category_type === 'individual' && /*#__PURE__*/React.createElement("a", {
    className: "nav-link mb-2",
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
  }, "Education Qualifications")), user.provider_profile.account_category_type === 'individual' && /*#__PURE__*/React.createElement("a", {
    className: "nav-link mb-2",
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
    className: "nav-link mb-2",
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
  }, "Services"))));
}

/***/ })

}]);