(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./resources/js/Pages/ServiceProviderProfileCompletion/Register.jsx":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviderProfileCompletion/Register.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pages_ServiceProviderProfileCompletion_components_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Pages/ServiceProviderProfileCompletion/components/profile */ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/index.jsx");
/* harmony import */ var _Pages_ServiceProviderProfileCompletion_components_RegistrationNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Pages/ServiceProviderProfileCompletion/components/RegistrationNav */ "./resources/js/Pages/ServiceProviderProfileCompletion/components/RegistrationNav.jsx");
/* harmony import */ var _Pages_ServiceProviderProfileCompletion_components_Topnav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Pages/ServiceProviderProfileCompletion/components/Topnav */ "./resources/js/Pages/ServiceProviderProfileCompletion/components/Topnav.jsx");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Pages_ServiceProviderProfileCompletion_components_profile_ProfileStatuses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Pages/ServiceProviderProfileCompletion/components/profile/ProfileStatuses */ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/ProfileStatuses.jsx");







function Register() {
  var _usePage$props = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__["usePage"])().props,
      user = _usePage$props.user,
      provider_sub_levels = _usePage$props.provider_sub_levels,
      qualifications = _usePage$props.qualifications,
      company = _usePage$props.company,
      facilities = _usePage$props.facilities,
      medical_registrations = _usePage$props.medical_registrations,
      all_services = _usePage$props.all_services,
      provider_services = _usePage$props.provider_services,
      facility_services = _usePage$props.facility_services,
      full_profile = _usePage$props.full_profile;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "account-pages mt-5 mb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_ServiceProviderProfileCompletion_components_Topnav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    user: user
  }), user.provider_profile.is_submitted && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert alert-success alert-dismissible bg-primary text-white border-0 fade show topnav-logo",
    role: "alert"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Your Profile was submitted Please wait while we are verifying your profile. we will notify you via email when its ready! ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_ServiceProviderProfileCompletion_components_RegistrationNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    user: user
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-content",
    id: "v-pills-tabContent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_ServiceProviderProfileCompletion_components_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileInfo"], {
    user: user,
    provider_sub_levels: provider_sub_levels
  }), user.provider_profile.account_category_type === 'individual' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_ServiceProviderProfileCompletion_components_profile__WEBPACK_IMPORTED_MODULE_1__["Qualifications"], {
    qualifications: qualifications
  }), user.provider_profile.account_category_type === 'company' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_ServiceProviderProfileCompletion_components_profile__WEBPACK_IMPORTED_MODULE_1__["Company"], {
    company: company
  }), user.provider_profile.account_category_type === 'individual' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_ServiceProviderProfileCompletion_components_profile__WEBPACK_IMPORTED_MODULE_1__["MedicalRegistrations"], {
    medical_registrations: medical_registrations,
    services: all_services
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_ServiceProviderProfileCompletion_components_profile__WEBPACK_IMPORTED_MODULE_1__["Services"], {
    facilities: facilities ? facilities : {},
    user: user,
    all_services: all_services,
    registeredServices: user.provider_profile.account_category_type === 'individual' ? provider_services : facility_services
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_ServiceProviderProfileCompletion_components_profile_ProfileStatuses__WEBPACK_IMPORTED_MODULE_5__["default"], {
    profile_status: full_profile,
    user: user
  }), (user.provider_profile.account_category_type === 'facility' || user.provider_profile.account_category_type === 'company') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_ServiceProviderProfileCompletion_components_profile__WEBPACK_IMPORTED_MODULE_1__["Facility"], {
    facilities: facilities,
    provider_sub_levels: provider_sub_levels
  }))))))))));
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-3 mb-2 mb-sm-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav flex-column nav-pills",
    id: "v-pills-tab",
    role: "tablist",
    "aria-orientation": "vertical"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link active show mb-2",
    id: "v-pills-home-tab",
    "data-toggle": "pill",
    href: "#v-pills-profile",
    role: "tab",
    "aria-controls": "v-pills-profile",
    "aria-selected": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-home-variant d-md-none d-block"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "d-none d-md-block"
  }, "Profile Information")), user.provider_profile.account_category_type === 'company' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link mb-2",
    id: "v-pills-settings-tab",
    "data-toggle": "pill",
    href: "#v-pills-company",
    role: "tab",
    "aria-controls": "v-pills-company",
    "aria-selected": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-settings-outline d-md-none d-block"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "d-none d-md-block"
  }, "Company Information")), user.provider_profile.account_category_type === 'facility' || user.provider_profile.account_category_type === 'company' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link mb-2",
    id: "v-pills-settings-tab",
    "data-toggle": "pill",
    href: "#v-pills-facility",
    role: "tab",
    "aria-controls": "v-pills-facility",
    "aria-selected": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-settings-outline d-md-none d-block"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "d-none d-md-block"
  }, "Facility Information")), user.provider_profile.account_category_type === 'individual' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link mb-2",
    id: "v-pills-profile-tab",
    "data-toggle": "pill",
    href: "#v-pills-qualifications",
    role: "tab",
    "aria-controls": "v-pills-qualifications",
    "aria-selected": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-account-circle d-md-none d-block"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "d-none d-md-block"
  }, "Education Qualifications")), user.provider_profile.account_category_type === 'individual' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link mb-2",
    id: "v-pills-settings-tab",
    "data-toggle": "pill",
    href: "#v-pills-medical-registration",
    role: "tab",
    "aria-controls": "v-pills-medical-registration",
    "aria-selected": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-settings-outline d-md-none d-block"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "d-none d-md-block"
  }, "Practice Licenses")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link mb-2",
    id: "v-pills-settings-tab",
    "data-toggle": "pill",
    href: "#v-pills-services",
    role: "tab",
    "aria-controls": "v-pills-services",
    "aria-selected": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-settings-outline d-md-none d-block"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "d-none d-md-block"
  }, "Services")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link mb-2",
    id: "v-pills-settings-tab",
    "data-toggle": "pill",
    href: "#v-pills-submission",
    role: "tab",
    "aria-controls": "v-pills-submission",
    "aria-selected": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-settings-outline d-md-none d-block"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "d-none d-md-block"
  }, "Registration Submission"))));
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
/* harmony import */ var _Pages_Utilities_components_languages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Pages/Utilities/components/languages */ "./resources/js/Pages/Utilities/components/languages.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);



function TopNav(_ref) {
  var user = _ref.user;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "navbar-custom topnav-navbar topnav-navbar-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "list-unstyled topbar-right-menu float-right mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Pages_Utilities_components_languages__WEBPACK_IMPORTED_MODULE_0__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "dropdown notification-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "nav-link dropdown-toggle nav-user arrow-none mr-0",
    "data-toggle": "dropdown",
    id: "topbar-userdrop",
    href: "#",
    role: "button",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "account-user-avatar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: user.profile_photo_path,
    alt: "user-image",
    className: "rounded-circle"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "account-user-name"
  }, user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "account-position"
  }, user.roles[0].name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu profile-dropdown",
    "aria-labelledby": "topbar-userdrop"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: " dropdown-header noti-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
    className: "text-overflow m-0"
  }, "Welcome !")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    className: "dropdown-item notify-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "mdi mdi-lifebuoy mr-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Support")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["InertiaLink"], {
    href: route('logout'),
    className: "dropdown-item notify-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "mdi mdi-logout mr-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Logout"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "button-menu-mobile disable-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "lines"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null)))));
}

/***/ }),

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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link dropdown-toggle arrow-none",
    "data-toggle": "dropdown",
    id: "topbar-languagedrop",
    href: "#",
    role: "button",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "assets/images/flags/us.jpg",
    alt: "user-image",
    className: "mr-1",
    height: "12"
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "align-middle"
  }, "English"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
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