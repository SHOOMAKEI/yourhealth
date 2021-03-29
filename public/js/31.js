(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./resources/js/Pages/ServiceProviderProfileCompletion/Register.jsx":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviderProfileCompletion/Register.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pages_ServiceProviderProfileCompletion_components_profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Pages/ServiceProviderProfileCompletion/components/profile */ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/index.jsx");
/* harmony import */ var _Pages_ServiceProviderProfileCompletion_components_RegistrationNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Pages/ServiceProviderProfileCompletion/components/RegistrationNav */ "./resources/js/Pages/ServiceProviderProfileCompletion/components/RegistrationNav.jsx");
/* harmony import */ var _Pages_ServiceProviderProfileCompletion_components_Topnav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Pages/ServiceProviderProfileCompletion/components/Topnav */ "./resources/js/Pages/ServiceProviderProfileCompletion/components/Topnav.jsx");




function Register(_ref) {
  var user = _ref.user;
  return /*#__PURE__*/React.createElement("div", {
    className: "account-pages mt-5 mb-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement(_Pages_ServiceProviderProfileCompletion_components_Topnav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    user: user
  }), user.provider_profile.is_submitted && /*#__PURE__*/React.createElement("div", {
    className: "alert alert-success alert-dismissible bg-success text-white border-0 fade show topnav-logo",
    role: "alert"
  }, /*#__PURE__*/React.createElement("strong", null, "Request submitted, please wait for verification. ")), /*#__PURE__*/React.createElement("div", {
    className: "card-body p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(_Pages_ServiceProviderProfileCompletion_components_RegistrationNav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    user: user
  }), /*#__PURE__*/React.createElement("div", {
    className: "col-sm-9"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tab-content",
    id: "v-pills-tabContent"
  }, /*#__PURE__*/React.createElement(_Pages_ServiceProviderProfileCompletion_components_profile__WEBPACK_IMPORTED_MODULE_0__["ProfileInfo"], {
    user: user
  }), user.provider_profile.account_category_type === 'individual' && /*#__PURE__*/React.createElement(_Pages_ServiceProviderProfileCompletion_components_profile__WEBPACK_IMPORTED_MODULE_0__["Qualifications"], null), user.provider_profile.account_category_type === 'company' && /*#__PURE__*/React.createElement(_Pages_ServiceProviderProfileCompletion_components_profile__WEBPACK_IMPORTED_MODULE_0__["Company"], null), user.provider_profile.account_category_type === 'individual' && /*#__PURE__*/React.createElement(_Pages_ServiceProviderProfileCompletion_components_profile__WEBPACK_IMPORTED_MODULE_0__["MedicalRegistrations"], null), /*#__PURE__*/React.createElement(_Pages_ServiceProviderProfileCompletion_components_profile__WEBPACK_IMPORTED_MODULE_0__["Services"], {
    user: user
  }), user.provider_profile.account_category_type === 'facility' && /*#__PURE__*/React.createElement(_Pages_ServiceProviderProfileCompletion_components_profile__WEBPACK_IMPORTED_MODULE_0__["Facility"], null))))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ }),

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

/***/ }),

/***/ "./resources/js/Pages/ServiceProviderProfileCompletion/components/Topnav.jsx":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviderProfileCompletion/components/Topnav.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopNav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// import Languages from '@/Pages/constants/components/languages'

function TopNav(_ref) {
  var user = _ref.user;
  return /*#__PURE__*/React.createElement("div", {
    className: "navbar-custom topnav-navbar topnav-navbar-dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "list-unstyled topbar-right-menu float-right mb-0"
  }, /*#__PURE__*/React.createElement("li", {
    className: "dropdown notification-list"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link dropdown-toggle nav-user arrow-none mr-0",
    "data-toggle": "dropdown",
    id: "topbar-userdrop",
    href: "#",
    role: "button",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, /*#__PURE__*/React.createElement("span", {
    className: "account-user-avatar"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/images/avatar.jpg",
    alt: "user-image",
    className: "rounded-circle"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "account-user-name"
  }, user.name), /*#__PURE__*/React.createElement("span", {
    className: "account-position"
  }, user.roles[0].name))), /*#__PURE__*/React.createElement("div", {
    className: "dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu profile-dropdown",
    "aria-labelledby": "topbar-userdrop"
  }, /*#__PURE__*/React.createElement("div", {
    className: " dropdown-header noti-title"
  }, /*#__PURE__*/React.createElement("h6", {
    className: "text-overflow m-0"
  }, "Welcome !")), /*#__PURE__*/React.createElement("a", {
    href: "javascript:void(0);",
    className: "dropdown-item notify-item"
  }, /*#__PURE__*/React.createElement("i", {
    className: "mdi mdi-lifebuoy mr-1"
  }), /*#__PURE__*/React.createElement("span", null, "Support")), /*#__PURE__*/React.createElement("a", {
    href: "javascript:void(0);",
    className: "dropdown-item notify-item",
    onClick: logoutUser
  }, /*#__PURE__*/React.createElement("i", {
    className: "mdi mdi-logout mr-1"
  }), /*#__PURE__*/React.createElement("span", null, "Logout"))))), /*#__PURE__*/React.createElement("a", {
    className: "button-menu-mobile disable-btn"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lines"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)))));
}

/***/ })

}]);