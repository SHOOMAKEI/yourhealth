(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./resources/js/Pages/ServiceProviders/requests/components/ProfileNav.jsx":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviders/requests/components/ProfileNav.jsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProfileNav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// import { ServiceProviderValues } from ".";

function ProfileNav(_ref) {
  var provider = _ref.provider;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-2 mb-2 mb-sm-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav flex-column nav-pills",
    id: "v-pills-tab",
    role: "tablist",
    "aria-orientation": "vertical"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link active show mb-1",
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
  }, "Profile Information")), provider.account_category_type === 'individual' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link mb-1",
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
  }, "Education Qualifications")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link mb-1",
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
  }, "Practice License")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link mb-1",
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
  }, "Services"))), provider.account_category_type === 'company' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link mb-1",
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
  }, "Company Information")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link mb-1",
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
  }, "Facility Information")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link mb-1",
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
  }, "Practice License")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link mb-1",
    id: "v-pills-settings-tab",
    "data-toggle": "pill",
    href: "#v-pills-facility-services",
    role: "tab",
    "aria-controls": "v-pills-facility-services",
    "aria-selected": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-settings-outline d-md-none d-block"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "d-none d-md-block"
  }, "Facility Services"))), provider.account_category_type === 'facility' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link mb-1",
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
  }, "Facility Information")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link mb-1",
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
  }, "Practice License")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link mb-1",
    id: "v-pills-settings-tab",
    "data-toggle": "pill",
    href: "#v-pills-facility-services",
    role: "tab",
    "aria-controls": "v-pills-facility-services",
    "aria-selected": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-settings-outline d-md-none d-block"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "d-none d-md-block"
  }, "Facility Services"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link mb-1",
    id: "v-pills-settings-tab",
    "data-toggle": "pill",
    href: "#v-pills-verification",
    role: "tab",
    "aria-controls": "v-pills-verification",
    "aria-selected": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-settings-outline d-md-none d-block"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "d-none d-md-block"
  }, "Verification"))));
}

/***/ }),

/***/ "./resources/js/Pages/ServiceProviders/requests/components/ProviderProfile.jsx":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviders/requests/components/ProviderProfile.jsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _profile_Company__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/Company */ "./resources/js/Pages/ServiceProviders/requests/components/profile/Company.jsx");
/* harmony import */ var _profile_FacilityServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/FacilityServices */ "./resources/js/Pages/ServiceProviders/requests/components/profile/FacilityServices.jsx");
/* harmony import */ var _profile_MedicalRegistrations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/MedicalRegistrations */ "./resources/js/Pages/ServiceProviders/requests/components/profile/MedicalRegistrations.jsx");
/* harmony import */ var _profile_ProfileInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/ProfileInfo */ "./resources/js/Pages/ServiceProviders/requests/components/profile/ProfileInfo.jsx");
/* harmony import */ var _profile_Qualifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/Qualifications */ "./resources/js/Pages/ServiceProviders/requests/components/profile/Qualifications.jsx");
/* harmony import */ var _profile_Services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/Services */ "./resources/js/Pages/ServiceProviders/requests/components/profile/Services.jsx");
/* harmony import */ var _ProfileNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProfileNav */ "./resources/js/Pages/ServiceProviders/requests/components/ProfileNav.jsx");
/* harmony import */ var _profile_Facility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/Facility */ "./resources/js/Pages/ServiceProviders/requests/components/profile/Facility.jsx");
/* harmony import */ var _Pages_ServiceProviders_requests_components_profile_Verification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/Pages/ServiceProviders/requests/components/profile/Verification */ "./resources/js/Pages/ServiceProviders/requests/components/profile/Verification.jsx");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.js");
/* harmony import */ var _Pages_ServiceProviders_requests_components_ServiceProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/Pages/ServiceProviders/requests/components/ServiceProvider */ "./resources/js/Pages/ServiceProviders/requests/components/ServiceProvider.jsx");












 //import {ServiceProviderValues} from "@/pages/serviceProviders/requests/components/ServiceProvider";

function ProviderProfile() {
  var provider = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_10__["usePage"])().props.provider;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12 pt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "card-title pt-2",
    id: "scrollableModalTitle"
  }, "".concat(provider === null || provider === void 0 ? void 0 : provider.username, "'s profile"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProfileNav__WEBPACK_IMPORTED_MODULE_7__["default"], {
    provider: provider
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-content",
    id: "v-pills-tabContent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_profile_ProfileInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    provider: provider
  }), provider.account_category_type === 'individual' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_profile_Qualifications__WEBPACK_IMPORTED_MODULE_5__["default"], {
    provider: provider
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_profile_MedicalRegistrations__WEBPACK_IMPORTED_MODULE_3__["default"], {
    provider: provider
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_profile_Services__WEBPACK_IMPORTED_MODULE_6__["default"], {
    provider: provider
  })), provider.account_category_type === 'company' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_profile_Company__WEBPACK_IMPORTED_MODULE_1__["default"], {
    provider: provider
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_profile_Facility__WEBPACK_IMPORTED_MODULE_8__["default"], {
    provider: provider
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_profile_MedicalRegistrations__WEBPACK_IMPORTED_MODULE_3__["default"], {
    provider: provider
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_profile_FacilityServices__WEBPACK_IMPORTED_MODULE_2__["default"], {
    provider: provider
  })), provider.account_category_type === 'facility' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_profile_Facility__WEBPACK_IMPORTED_MODULE_8__["default"], {
    provider: provider
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_profile_MedicalRegistrations__WEBPACK_IMPORTED_MODULE_3__["default"], {
    provider: provider
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_profile_FacilityServices__WEBPACK_IMPORTED_MODULE_2__["default"], {
    provider: provider
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_ServiceProviders_requests_components_profile_Verification__WEBPACK_IMPORTED_MODULE_9__["default"], {
    provider: provider
  }))))))));
}

ProviderProfile.layout = function (page) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
    children: page
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ProviderProfile);

/***/ }),

/***/ "./resources/js/Pages/ServiceProviders/requests/components/ServiceProvider.jsx":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviders/requests/components/ServiceProvider.jsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServiceProvider; });
/* harmony import */ var _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Pages/Utilities/Constants */ "./resources/js/Pages/Utilities/Constants.js");
/* harmony import */ var _ProviderProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProviderProfile */ "./resources/js/Pages/ServiceProviders/requests/components/ProviderProfile.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__);




function ServiceProvider(_ref) {
  var serviceProvider = _ref.serviceProvider,
      selectServiceProvider = _ref.selectServiceProvider;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null, serviceProvider.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null, serviceProvider.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null, serviceProvider.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null, serviceProvider.mobile_number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null, serviceProvider.created_at), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null, serviceProvider.updated_at), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null, serviceProvider.account_category_type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null, serviceProvider.is_verified ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "uil uil-check-circle font-16 mr-1 text-primary"
  }), " Verified ") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "uil uil-times-circle font-16 mr-1 text-danger"
  }), "Not Verified")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
    className: "table-action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "button",
    className: "btn btn-link dropdown-toggle",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    style: {
      lineHeight: 0.5,
      paddingTop: 0,
      paddingBottom: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "uil uil-bright font-16 mr-1 text-primary"
  }), "More"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "dropdown-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__["InertiaLink"], {
    href: route('service_provider_profiles.show', serviceProvider.id),
    className: "dropdown-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "uil uil-eye mr-1"
  }), "Show info"))));
}

/***/ }),

/***/ "./resources/js/Pages/ServiceProviders/requests/components/profile/Company.jsx":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviders/requests/components/profile/Company.jsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Company; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function Company(_ref) {
  var provider = _ref.provider;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      company = _useState2[0],
      setCompany = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      sending = _useState4[0],
      setSending = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setSending(true);
    axios.get(route('service_provider_profiles.company', provider.id)).then(function (resp) {
      setCompany(resp.data);
      setSending(false);
    });
  }, [provider]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-pane fade",
    id: "v-pills-company",
    role: "tabpanel",
    "aria-labelledby": "v-pills-company-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-centered mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, company === null || company === void 0 ? void 0 : company.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Trading name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, company === null || company === void 0 ? void 0 : company.trading_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "TIN")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, company === null || company === void 0 ? void 0 : company.tin)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "VRN")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, company === null || company === void 0 ? void 0 : company.vrn)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Website")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, company === null || company === void 0 ? void 0 : company.website)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Registration number")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, company === null || company === void 0 ? void 0 : company.registration_number)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Registration date")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, company === null || company === void 0 ? void 0 : company.registration_date)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-centered mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Phone number")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, company === null || company === void 0 ? void 0 : company.mobile_number)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Alternate phone number")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, company === null || company === void 0 ? void 0 : company.alternative_mobile_number)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Email")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, company === null || company === void 0 ? void 0 : company.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Address")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, company === null || company === void 0 ? void 0 : company.address)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Physical Address")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, company === null || company === void 0 ? void 0 : company.physical_address)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Description")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, company === null || company === void 0 ? void 0 : company.description))))));
}

/***/ }),

/***/ "./resources/js/Pages/ServiceProviders/requests/components/profile/FacilityServices.jsx":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviders/requests/components/profile/FacilityServices.jsx ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FacilityServices; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pages_Utilities_Services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Pages/Utilities/Services */ "./resources/js/Pages/Utilities/Services.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Shared_SelectInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/SelectInput */ "./resources/js/Shared/SelectInput.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var FACILITY_SERVICES_DATA_TABLE = 'facility-services-datatable';
function FacilityServices(_ref) {
  var _facilities$;

  var provider = _ref.provider;
  var errors = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["usePage"])().props.errors;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      services = _useState2[0],
      setServices = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      facilities = _useState4[0],
      setFacilities = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    facility: (_facilities$ = facilities[0]) === null || _facilities$ === void 0 ? void 0 : _facilities$.id
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      values = _useState6[0],
      setValues = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      sending = _useState8[0],
      setSending = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setSending(true);
    values.facility && axios.get(route('service_provider_profiles.facility_services', values === null || values === void 0 ? void 0 : values.facility)).then(function (resp) {
      setServices(resp.data);
      setSending(false);
    });
  }, [values === null || values === void 0 ? void 0 : values.facility]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setSending(true);
    axios.get(route('service_provider_profiles.facilities', provider.id)).then(function (resp) {
      setFacilities(resp.data);
      setValues(resp.data[0].id);
      setSending(false);
    });
  }, [provider]);

  function handleChange(e) {
    var key = e.target.name;
    var value = e.target.value;
    setValues(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, _defineProperty({}, key, value));
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_Pages_Utilities_Services__WEBPACK_IMPORTED_MODULE_1__["initializeDataTable"])(true, true, FACILITY_SERVICES_DATA_TABLE);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-pane fade",
    id: "v-pills-facility-services",
    role: "tabpanel",
    "aria-labelledby": "v-pills-facility-services-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Select Facility"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_SelectInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "facility",
    type: "text",
    errors: errors.facility,
    value: values.facility,
    onChange: handleChange
  }, facilities && facilities.map(function (facility) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: facility.id,
      key: facility.id
    }, facility.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table dt-responsive nowrap w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Price currency"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, services && services.map(function (service) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, service.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, service.pivot.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, service.pivot.currency));
  }))));
}

/***/ }),

/***/ "./resources/js/Pages/ServiceProviders/requests/components/profile/MedicalRegistrations.jsx":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviders/requests/components/profile/MedicalRegistrations.jsx ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MedicalRegistrations; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Shared_SelectInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/SelectInput */ "./resources/js/Shared/SelectInput.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function MedicalRegistrations(_ref) {
  var _facilities$;

  var provider = _ref.provider;
  var errors = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["usePage"])().props.errors;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      registrations = _useState2[0],
      setRegistrations = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      sending = _useState4[0],
      setSending = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      facilities = _useState6[0],
      setFacilities = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    facility: (_facilities$ = facilities[0]) === null || _facilities$ === void 0 ? void 0 : _facilities$.id
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      values = _useState8[0],
      setValues = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setSending(true);

    if (provider.account_category_type === 'individual') {
      axios.get(route('service_provider_profiles.practice_license', provider.id)).then(function (resp) {
        setRegistrations(resp.data);
        setSending(false);
      });
    }

    if (provider.account_category_type === 'facility' || provider.account_category_type === 'company') {
      axios.get(route('service_provider_profiles.facility_practice_license', provider.id)).then(function (resp) {
        setRegistrations(resp.data);
        setSending(false);
      });
    }
  }, [provider]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setSending(true);

    if (provider.account_category_type === 'facility' || provider.account_category_type === 'company') {
      values.facility && axios.get(route('service_provider_profiles.facility_practice_license', values === null || values === void 0 ? void 0 : values.facility)).then(function (resp) {
        setRegistrations(resp.data);
        setSending(false);
      });
    }
  }, [values === null || values === void 0 ? void 0 : values.facility]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setSending(true);
    axios.get(route('service_provider_profiles.facilities', provider.id)).then(function (resp) {
      setFacilities(resp.data); // setValues(resp.data[0].id)

      setSending(false);
    });
  }, [provider]);

  function handleChange(e) {
    var key = e.target.name;
    var value = e.target.value;
    setValues(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, _defineProperty({}, key, value));
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-pane fade",
    id: "v-pills-medical-registration",
    role: "tabpanel",
    "aria-labelledby": "v-pills-medical-registration-tab"
  }, (provider.account_category_type === 'company' || provider.account_category_type === 'facility') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Select Facility"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_SelectInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "facility",
    type: "text",
    errors: errors.facility,
    value: values.facility,
    onChange: handleChange
  }, facilities && facilities.map(function (facility) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: facility.id,
      key: facility.id
    }, facility.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-centered mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Practice License Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Expired At"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "For Service Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Attachment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, registrations && registrations.map(function (registration, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: index + 1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, registration.certificate_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, registration.expired_at), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, registration.service), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "".concat(registration.file_url),
      className: "btn btn-light"
    }, "File ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "uil-cloud-download ml-1"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, registration.is_verified ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "uil uil-check-circle font-16 mr-1 text-primary"
    }), " Approved") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "uil uil-times-circle font-16 mr-1 text-danger"
    }), "".concat(registration.rejected_at ? 'Rejected' : 'Not Approved')), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "".concat(registration.rejected_at ? registration.rejected_at : registration.verified_at)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, !registration.is_verified ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
      href: provider.account_category_type === 'company' || provider.account_category_type === 'facility' ? route('service_provider_profiles.facility_practice_license_approval', registration.id) : route('service_provider_profiles.practice_license_approval', registration.id),
      className: "btn btn-primary btn-md my-1"
    }, "Approve") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
      href: provider.account_category_type === 'company' || provider.account_category_type === 'facility' ? route('service_provider_profiles.facility_practice_license_deny', registration.id) : route('service_provider_profiles.practice_license_deny', registration.id),
      className: "btn btn-danger btn-md my-1"
    }, "Deny")));
  }))))));
}

/***/ }),

/***/ "./resources/js/Pages/ServiceProviders/requests/components/profile/ProfileInfo.jsx":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviders/requests/components/profile/ProfileInfo.jsx ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProfileInfo; });
/* harmony import */ var _ServiceProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ServiceProvider */ "./resources/js/Pages/ServiceProviders/requests/components/ServiceProvider.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function ProfileInfo(_ref) {
  var provider = _ref.provider;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tab-pane fade active show",
    id: "v-pills-profile",
    role: "tabpanel",
    "aria-labelledby": "v-pills-profile-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
    className: "table table-centered mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Title")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, " ", provider.title, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Username")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, provider.username)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "First Name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, provider.first_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Middle Name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, provider.middle_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Last Name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, provider.last_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Gender")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, provider.gender)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Date of birth")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, provider.dob))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
    className: "table table-centered mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Phone number")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, provider.mobile_number)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Alternate phone number")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, provider.alternative_mobile_number)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Email")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, provider.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Address")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, provider.address)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Physical Address")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, provider.physical_address)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Bio")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, provider.bio)))))));
}

/***/ }),

/***/ "./resources/js/Pages/ServiceProviders/requests/components/profile/Qualifications.jsx":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviders/requests/components/profile/Qualifications.jsx ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Qualifications; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function Qualifications(_ref) {
  var provider = _ref.provider;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      qualifications = _useState2[0],
      setQualifications = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      sending = _useState4[0],
      setSending = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setSending(true);
    axios.get(route('service_provider_profiles.qualifications', provider.id)).then(function (resp) {
      setQualifications(resp.data);
      setSending(false);
    });
  }, [provider]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-pane fade",
    id: "v-pills-qualifications",
    role: "tabpanel",
    "aria-labelledby": "v-pills-qualifications-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-centered table-borderless mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Institution"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Attachment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, qualifications.map(function (qualification) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: qualification.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, qualification.award_title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, qualification.institution_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
      href: "".concat(qualification.attachment),
      className: "btn btn-light"
    }, "File ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "uil-cloud-download ml-1"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
      href: "#",
      className: "action-icon"
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "dripicons-trash"
    }))));
  })))));
}

/***/ }),

/***/ "./resources/js/Pages/ServiceProviders/requests/components/profile/Services.jsx":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviders/requests/components/profile/Services.jsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Services; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pages_Utilities_Services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Pages/Utilities/Services */ "./resources/js/Pages/Utilities/Services.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var SERVICES_DATA_TABLE = 'provider-services-datatable';
function Services(_ref) {
  var provider = _ref.provider;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      services = _useState2[0],
      setServices = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      sending = _useState4[0],
      setSending = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setSending(true);
    axios.get(route('service_provider_profiles.services', provider.id)).then(function (resp) {
      setServices(resp.data);
      setSending(false);
      console.log(resp.data);
    });
  }, [provider]); // useEffect(() => {
  //     initializeDataTable(true, true, SERVICES_DATA_TABLE)
  // }, [])

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-pane fade",
    id: "v-pills-services",
    role: "tabpanel",
    "aria-labelledby": "v-pills-services-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    id: SERVICES_DATA_TABLE,
    className: "table dt-responsive nowrap w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Currency"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, services && services.map(function (service) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, service.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, service.pivot.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, service.pivot.currency));
  }))));
}

/***/ }),

/***/ "./resources/js/Pages/ServiceProviders/requests/components/profile/Verification.jsx":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviders/requests/components/profile/Verification.jsx ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Verification; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_TextAreaInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/TextAreaInput */ "./resources/js/Shared/TextAreaInput.js");
/* harmony import */ var _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/LoadingButton */ "./resources/js/Shared/LoadingButton.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function Verification(_ref) {
  var provider = _ref.provider;
  var _usePage$props = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__["usePage"])().props,
      errors = _usePage$props.errors,
      status = _usePage$props.status,
      alertType = _usePage$props.alertType;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      sending = _useState2[0],
      setSending = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    description: "No description",
    provider_id: provider.id
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      values = _useState4[0],
      setValues = _useState4[1];

  function handleChange(e) {
    var key = e.target.name;
    var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setValues(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, _defineProperty({}, key, value));
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__["Inertia"].post(route('service_provider_profiles.reject'), values).then(function () {
      setSending(false);
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    $(document).ready(function () {
      window.setTimeout(function () {
        $(".alert").fadeTo(2000, 500).slideUp(500, function () {
          $(".alert").slideUp(500);
        });
      }, 2500);
    });
  }, [status, errors]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-pane fade",
    id: "v-pills-verification",
    role: "tabpanel",
    "aria-labelledby": "v-pills-verification-tab"
  }, status && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert alert-success alert-dismissible bg-primary text-white border-0 fade show topnav-logo",
    role: "alert"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, status)), provider.is_verified && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert alert-success alert-dismissible bg-success text-white border-0 fade show topnav-logo",
    role: "alert"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, " This service provider is verified ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "modal-title",
    id: "scrollableModalTitle"
  }, "Verify ", "".concat(provider.first_name, " ").concat(provider.last_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted mt-1"
  }, "To verify ", "".concat(provider.first_name, " ").concat(provider.last_name), " as a verified service provider, click the button below and ", provider.gender === 'M' ? 'he' : 'she', " will be notified via an email, if you want to reject the request provide rejection reason below and click reject request."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__["InertiaLink"], {
    href: route('service_provider_profiles.verify', provider.id),
    className: "btn btn-primary btn-sm"
  }, "Verify"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_TextAreaInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "reasons",
    type: "text",
    placeholder: "Rejection Reason",
    label: "Rejection Reason",
    rows: 4,
    errors: errors.reasons,
    value: values.reasons,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "submit",
    className: "btn btn-danger btn-sm",
    loading: sending
  }, "Reject"))));
}

/***/ }),

/***/ "./resources/js/Pages/Utilities/Constants.js":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Utilities/Constants.js ***!
  \***************************************************/
/*! exports provided: ADD_CATEGORY_MODAL_ID, UPDATE_CATEGORY_MODAL_ID, SERVICE_CATEGORIES_TABLE, PROVIDER_PROFILE_MODAL_ID, ADD_MEMBERSHIP_MODAL_ID, UPDATE_MEMBERSHIP_MODAL_ID, ADD_FACILITY_MODAL_ID, EDIT_FACILITY_MODAL_ID, ADD_QUALIFICATION_MODAL_ID, ADD_MEDICAL_REGISTRATION_MODAL_ID, REQUEST_SERVICE_MODAL_ID, SET_SERVICE_MODAL_PRICE, ADD_SERVICE_MODAL_ID, UPDATE_SERVICE_MODAL_ID, ADD_SUB_CATEGORY_MODAL_ID, UPDATE_SUB_CATEGORY_MODAL_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CATEGORY_MODAL_ID", function() { return ADD_CATEGORY_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CATEGORY_MODAL_ID", function() { return UPDATE_CATEGORY_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICE_CATEGORIES_TABLE", function() { return SERVICE_CATEGORIES_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROVIDER_PROFILE_MODAL_ID", function() { return PROVIDER_PROFILE_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MEMBERSHIP_MODAL_ID", function() { return ADD_MEMBERSHIP_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MEMBERSHIP_MODAL_ID", function() { return UPDATE_MEMBERSHIP_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_FACILITY_MODAL_ID", function() { return ADD_FACILITY_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_FACILITY_MODAL_ID", function() { return EDIT_FACILITY_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUALIFICATION_MODAL_ID", function() { return ADD_QUALIFICATION_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MEDICAL_REGISTRATION_MODAL_ID", function() { return ADD_MEDICAL_REGISTRATION_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_SERVICE_MODAL_ID", function() { return REQUEST_SERVICE_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SERVICE_MODAL_PRICE", function() { return SET_SERVICE_MODAL_PRICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SERVICE_MODAL_ID", function() { return ADD_SERVICE_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SERVICE_MODAL_ID", function() { return UPDATE_SERVICE_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SUB_CATEGORY_MODAL_ID", function() { return ADD_SUB_CATEGORY_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SUB_CATEGORY_MODAL_ID", function() { return UPDATE_SUB_CATEGORY_MODAL_ID; });
var ADD_CATEGORY_MODAL_ID = "add-category-modal";
var UPDATE_CATEGORY_MODAL_ID = "update-category-modal";
var SERVICE_CATEGORIES_TABLE = 'service-categories-table';
var PROVIDER_PROFILE_MODAL_ID = 'service-provider-profile-modal';
var ADD_MEMBERSHIP_MODAL_ID = 'add-membership-modal';
var UPDATE_MEMBERSHIP_MODAL_ID = 'update-service-modal';
var ADD_FACILITY_MODAL_ID = 'add-facility-modal';
var EDIT_FACILITY_MODAL_ID = 'edit-facility-modal';
var ADD_QUALIFICATION_MODAL_ID = 'add-qualifications-modal';
var ADD_MEDICAL_REGISTRATION_MODAL_ID = 'add-medical-registration-modal';
var REQUEST_SERVICE_MODAL_ID = 'request-service-modal';
var SET_SERVICE_MODAL_PRICE = 'set-service-modal-price';
var ADD_SERVICE_MODAL_ID = 'add-service-modal';
var UPDATE_SERVICE_MODAL_ID = 'update-service-modal';
var ADD_SUB_CATEGORY_MODAL_ID = 'add-sub-category-modal';
var UPDATE_SUB_CATEGORY_MODAL_ID = "update-sub-category-modal";

/***/ }),

/***/ "./resources/js/Pages/Utilities/Services.js":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Utilities/Services.js ***!
  \**************************************************/
/*! exports provided: initializeDataTable, updateServiceCategoriesTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeDataTable", function() { return initializeDataTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateServiceCategoriesTable", function() { return updateServiceCategoriesTable; });
var initializeDataTable = function initializeDataTable(bSort, bDestroy, tableId) {
  $(document).ready(function () {
    $("#".concat(tableId)).DataTable({
      bSort: bSort,
      bDestroy: bDestroy,
      searching: false,
      destroy: true,
      pageLength: 7,
      "lengthMenu": [[7, 25, 50, -1], [7, 25, 50, "All"]],
      // "aaSorting": [],
      language: {
        paginate: {
          previous: "<i class='uil uil-angle-left'>",
          next: "<i class='uil uil-angle-right'>",
          first: '',
          last: ''
        }
      },
      drawCallback: function drawCallback() {
        $(document).ready(function () {
          $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
        });
      }
    });
  });
};
var updateServiceCategoriesTable = function updateServiceCategoriesTable(tableId, category) {
  $(document).ready(function () {
    var table = $("#".concat(tableId)).DataTable(); //table.clear().destroy();

    initializeDataTable(false, false, tableId); // table.row.add([category.name, category.status, category.createdAt, category.updatedAt, ''])
  });
};

/***/ })

}]);