(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ "./resources/js/Pages/ServiceProviders/requests/components/ProviderProfile.jsx":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviders/requests/components/ProviderProfile.jsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProviderProfile; });
/* harmony import */ var _Pages_ServiceProviders_requests_components_profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Pages/ServiceProviders/requests/components/profile */ "./resources/js/Pages/ServiceProviders/requests/components/profile/index.jsx");
/* harmony import */ var _Pages_serviceProviders_requests_components_ProfileNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Pages/serviceProviders/requests/components/ProfileNav */ "./resources/js/Pages/serviceProviders/requests/components/ProfileNav.jsx");

 //import {ServiceProviderValues} from "@/pages/serviceProviders/requests/components/ServiceProvider";

function ProviderProfile(_ref) {
  var modalId = _ref.modalId,
      provider = _ref.provider;
  return /*#__PURE__*/React.createElement("div", {
    className: "modal fade",
    id: modalId,
    "data-backdrop": "static",
    tabIndex: -1,
    role: "dialog",
    "aria-labelledby": "scrollableModalTitle",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-dialog modal-full-width",
    role: "document"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "modal-title",
    id: "scrollableModalTitle"
  }, "".concat(provider === null || provider === void 0 ? void 0 : provider.username, "'s profile")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(_Pages_serviceProviders_requests_components_ProfileNav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    provider: provider
  }), /*#__PURE__*/React.createElement("div", {
    className: "col-sm-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tab-content",
    id: "v-pills-tabContent"
  }, /*#__PURE__*/React.createElement(_Pages_ServiceProviders_requests_components_profile__WEBPACK_IMPORTED_MODULE_0__["ProfileInfo"], {
    provider: provider
  }), provider.account_category_type === 'individual' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Pages_ServiceProviders_requests_components_profile__WEBPACK_IMPORTED_MODULE_0__["Qualifications"], null), /*#__PURE__*/React.createElement(_Pages_ServiceProviders_requests_components_profile__WEBPACK_IMPORTED_MODULE_0__["MedicalRegistrations"], null), /*#__PURE__*/React.createElement(_Pages_ServiceProviders_requests_components_profile__WEBPACK_IMPORTED_MODULE_0__["Services"], null)), provider.account_category_type === 'company' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Pages_ServiceProviders_requests_components_profile__WEBPACK_IMPORTED_MODULE_0__["Company"], null), /*#__PURE__*/React.createElement(_Pages_ServiceProviders_requests_components_profile__WEBPACK_IMPORTED_MODULE_0__["Facility"], null), /*#__PURE__*/React.createElement(_Pages_ServiceProviders_requests_components_profile__WEBPACK_IMPORTED_MODULE_0__["FacilityServices"], null)), provider.account_category_type === 'facility' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Pages_ServiceProviders_requests_components_profile__WEBPACK_IMPORTED_MODULE_0__["Facility"], null), /*#__PURE__*/React.createElement(_Pages_ServiceProviders_requests_components_profile__WEBPACK_IMPORTED_MODULE_0__["FacilityServices"], null)))))))));
}

/***/ })

}]);