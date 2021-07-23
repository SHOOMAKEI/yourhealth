(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/Company.jsx":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/Company.jsx ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Company; });
/* harmony import */ var _Pages_Utilities_ModalForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Pages/Utilities/ModalForm */ "./resources/js/Pages/Utilities/ModalForm.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/TextInput */ "./resources/js/Shared/TextInput.js");
/* harmony import */ var _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Shared/LoadingButton */ "./resources/js/Shared/LoadingButton.js");
/* harmony import */ var _Shared_TextAreaInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Shared/TextAreaInput */ "./resources/js/Shared/TextAreaInput.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function Company(_ref) {
  var company = _ref.company;
  var _usePage$props = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__["usePage"])().props,
      errors = _usePage$props.errors,
      status = _usePage$props.status,
      alertType = _usePage$props.alertType;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      sending = _useState2[0],
      setSending = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    address: (company === null || company === void 0 ? void 0 : company.address) || "",
    description: (company === null || company === void 0 ? void 0 : company.description) || "",
    alternative_mobile_number: (company === null || company === void 0 ? void 0 : company.alternative_mobile_number) || "",
    email: (company === null || company === void 0 ? void 0 : company.email) || "",
    mobile_number: (company === null || company === void 0 ? void 0 : company.mobile_number) || "",
    name: (company === null || company === void 0 ? void 0 : company.name) || "",
    physical_address: (company === null || company === void 0 ? void 0 : company.physical_address) || "",
    registration_date: (company === null || company === void 0 ? void 0 : company.registration_date) || "",
    registration_number: (company === null || company === void 0 ? void 0 : company.registration_number) || "",
    tin: (company === null || company === void 0 ? void 0 : company.tin) || "",
    trading_name: (company === null || company === void 0 ? void 0 : company.trading_name) || "",
    vrn: (company === null || company === void 0 ? void 0 : company.vrn) || "",
    website: (company === null || company === void 0 ? void 0 : company.website) || ""
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
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__["Inertia"].post(route('companyInfo.update'), values).then(function () {
      setSending(false);
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tab-pane fade",
    id: "v-pills-company",
    role: "tabpanel",
    "aria-labelledby": "v-pills-company-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "name",
    type: "text",
    placeholder: "Company Name",
    label: "Company Name",
    errors: errors.name,
    value: values.name,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "website",
    type: "text",
    placeholder: "Website",
    label: "Website",
    errors: errors.website,
    value: values.website,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "tin",
    type: "text",
    placeholder: "TIN Number",
    label: "TIN Number",
    errors: errors.tin,
    value: values.tin,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "mobile_number",
    type: "text",
    placeholder: "Mobile Number",
    label: "Mobile Number",
    errors: errors.mobile_number,
    value: values.mobile_number,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "address",
    type: "text",
    placeholder: "Address",
    label: "Address",
    errors: errors.address,
    value: values.address,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "registration_date",
    type: "date",
    placeholder: "Registration Date",
    label: "Registration Date",
    errors: errors.registration_date,
    value: values.registration_date,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextAreaInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "description",
    type: "text",
    placeholder: "Description",
    label: "Description",
    rows: 4,
    errors: errors.description,
    value: values.description,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "trading_name",
    type: "text",
    placeholder: "Trading Name",
    label: "Trading Name",
    errors: errors.trading_name,
    value: values.trading_name,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "vrn",
    type: "text",
    placeholder: "VRN",
    label: "VRN",
    errors: errors.vrn,
    value: values.vrn,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "email",
    type: "text",
    placeholder: "Email Address",
    label: "Email Address",
    errors: errors.email,
    value: values.email,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "alternative_mobile_number",
    type: "text",
    placeholder: "Alternate Mobile Number",
    label: "Website",
    errors: errors.alternative_mobile_number,
    value: values.alternative_mobile_number,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "physical_address",
    type: "text",
    placeholder: "Physical Address",
    label: "Physical Address",
    errors: errors.physical_address,
    value: values.physical_address,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "registration_number",
    type: "text",
    placeholder: "Registration Number",
    label: "Registration Number",
    errors: errors.registration_number,
    value: values.registration_number,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group mb-0 text-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "submit",
    className: "btn btn-primary btn-block",
    loading: sending
  }, "Save Changes"))))));
}

/***/ }),

/***/ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/Facility.jsx":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/Facility.jsx ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Facility; });
/* harmony import */ var _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Pages/Utilities/Constants */ "./resources/js/Pages/Utilities/Constants.js");
/* harmony import */ var _Pages_ServiceProviderProfileCompletion_components_profile_AddFacilityModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Pages/ServiceProviderProfileCompletion/components/profile/AddFacilityModal */ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/AddFacilityModal.jsx");
/* harmony import */ var _Pages_ServiceProviderProfileCompletion_components_profile_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Pages/ServiceProviderProfileCompletion/components/profile/Heading */ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/Heading.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__);





function Facility(_ref) {
  var facilities = _ref.facilities,
      provider_sub_levels = _ref.provider_sub_levels;

  function searchFacilities() {}

  function renderAddSubcategoryModal() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Pages_ServiceProviderProfileCompletion_components_profile_AddFacilityModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
      modalID: _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_0__["ADD_FACILITY_MODAL_ID"],
      operation: "add",
      provider_sub_levels: provider_sub_levels
    });
  }

  function renderEditFacilityModal(data) {
    // e.preventDefault()
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Pages_ServiceProviderProfileCompletion_components_profile_AddFacilityModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
      modalID: _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_0__["EDIT_FACILITY_MODAL_ID"],
      operation: "edit",
      provider_sub_levels: provider_sub_levels,
      data: data
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "tab-pane fade",
    id: "v-pills-facility",
    role: "tabpanel",
    "aria-labelledby": "v-pills-facility-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Pages_ServiceProviderProfileCompletion_components_profile_Heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Facilities",
    modalID: _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_0__["ADD_FACILITY_MODAL_ID"],
    buttonText: "Add Facility",
    search: searchFacilities,
    renderModal: renderAddSubcategoryModal
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("table", {
    className: "table table-centered table-borderless mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th", null, "TIN Attachment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th", null, "VRN Attachment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th", null, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tbody", null, facilities.map(function (facility) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tr", {
      key: facility.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", null, facility.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      href: facility.vrn_attachment ? facility.vrn_attachment : '#',
      className: "btn btn-light"
    }, facility.vrn_attachment ? facility.vrn : 'No file Uploaded ' + '(' + facility.vrn + ')', " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
      className: "uil-cloud-download ml-1"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      href: facility.tin_attachment ? facility.tin_attachment : '#',
      className: "btn btn-light"
    }, facility.tin_attachment ? facility.tin : 'No file Uploaded ' + '(' + facility.tin + ')', " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
      className: "uil-cloud-download ml-1"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      href: "#",
      className: "action-icon",
      "data-toggle": "modal",
      "data-target": "#".concat(_Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_0__["EDIT_FACILITY_MODAL_ID"])
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
      className: "dripicons-pencil"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__["InertiaLink"], {
      href: route('facilityInfo.destroy', facility.id),
      className: "action-icon"
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
      className: "dripicons-trash"
    }))), renderEditFacilityModal(facility));
  }))));
}

/***/ }),

/***/ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/FacilityServices.jsx":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/FacilityServices.jsx ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FacilityServices; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pages_Utilities_Services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Pages/Utilities/Services */ "./resources/js/Pages/Utilities/Services.js");


var FACILITY_SERVICES_DATA_TABLE = 'facility-services-datatable';
function FacilityServices() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_Pages_Utilities_Services__WEBPACK_IMPORTED_MODULE_1__["initializeDataTable"])(true, true, FACILITY_SERVICES_DATA_TABLE);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "tab-pane fade",
    id: "v-pills-facility-services",
    role: "tabpanel",
    "aria-labelledby": "v-pills-facility-services-tab"
  }, /*#__PURE__*/React.createElement("p", null, "facility services"));
}

/***/ }),

/***/ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/MedicalRegistrations.jsx":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/MedicalRegistrations.jsx ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MedicalRegistrations; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Pages/Utilities/Constants */ "./resources/js/Pages/Utilities/Constants.js");
/* harmony import */ var _Pages_ServiceProviderProfileCompletion_components_profile_AddMedicalRegistrationModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Pages/ServiceProviderProfileCompletion/components/profile/AddMedicalRegistrationModal */ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/AddMedicalRegistrationModal.jsx");
/* harmony import */ var _Pages_ServiceProviderProfileCompletion_components_profile_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Pages/ServiceProviderProfileCompletion/components/profile/Heading */ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/Heading.jsx");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Shared_SelectInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Shared/SelectInput */ "./resources/js/Shared/SelectInput.js");
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

  var user = _ref.user,
      facilities = _ref.facilities,
      medical_registrations = _ref.medical_registrations,
      services = _ref.services;
  var _usePage$props = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__["usePage"])().props,
      errors = _usePage$props.errors,
      status = _usePage$props.status,
      alertType = _usePage$props.alertType;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(medical_registrations),
      _useState2 = _slicedToArray(_useState, 2),
      medicalRegistrations = _useState2[0],
      setMedicalRegistrations = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(medical_registrations),
      _useState4 = _slicedToArray(_useState3, 2),
      medicalRegs = _useState4[0],
      setMedicalRegs = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    facility: (_facilities$ = facilities[0]) === null || _facilities$ === void 0 ? void 0 : _facilities$.id
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      values = _useState6[0],
      setValues = _useState6[1];

  function handleChange(e) {
    var key = e.target.name;
    var value = e.target.value;
    setValues(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, _defineProperty({}, key, value));
    });
  }

  function renderAddSubcategoryModal() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_ServiceProviderProfileCompletion_components_profile_AddMedicalRegistrationModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
      modalID: _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__["ADD_MEDICAL_REGISTRATION_MODAL_ID"],
      operation: "add",
      callback: addAttachment,
      services: services,
      facility: values.facility,
      initialData: {
        registration_number: "",
        certificate_name: "",
        year: "",
        attachment: "",
        certificate_number: "",
        expired_at: "",
        service_category_id: services[0].id,
        provider_facility_id: values.facility
      }
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var data_reg = medicalRegistrations === null || medicalRegistrations === void 0 ? void 0 : medicalRegistrations.filter(function (registration) {
      return registration.provider_facility_id == values.facility;
    });
    setMedicalRegs(data_reg);
  }, [values === null || values === void 0 ? void 0 : values.facility]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setMedicalRegs(medical_registrations);
    setMedicalRegistrations(medical_registrations);
  }, [medical_registrations]);

  function addAttachment() {//
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-pane fade",
    id: "v-pills-medical-registration",
    role: "tabpanel",
    "aria-labelledby": "v-pills-medical-registration-tab"
  }, (user.provider_profile.account_category_type === 'company' || user.provider_profile.account_category_type === 'facility') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Select Facility"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_SelectInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "facility",
    type: "text",
    errors: errors.facility,
    value: values.facility,
    onChange: handleChange
  }, facilities.map(function (facility) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: facility.id,
      key: facility.id
    }, facility.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_ServiceProviderProfileCompletion_components_profile_Heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Practice License",
    modalID: _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__["ADD_MEDICAL_REGISTRATION_MODAL_ID"],
    buttonText: "Add Practice License",
    renderModal: renderAddSubcategoryModal
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-centered table-borderless mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Certificate Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Certificate Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Authorized Service"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Expired At"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Attachment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, medicalRegs && medicalRegs.map(function (medReg) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: medReg.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, medReg.certificate_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, medReg.certificate_number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, medReg.authorized_service), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, medReg.expired_at), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "".concat(medReg.attachment),
      className: "btn btn-light"
    }, "File ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "uil-cloud-download ml-1"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__["InertiaLink"], {
      href: route('practiceLicense.destroy', medReg.id),
      className: "action-icon "
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "dripicons-trash"
    }))));
  }))));
}

/***/ }),

/***/ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/index.jsx":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/index.jsx ***!
  \******************************************************************************************/
/*! exports provided: Company, FacilityServices, Facility, MedicalRegistrations, ProfileInfo, Qualifications, Services */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pages_ServiceProviderProfileCompletion_components_profile_Company__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Pages/ServiceProviderProfileCompletion/components/profile/Company */ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/Company.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return _Pages_ServiceProviderProfileCompletion_components_profile_Company__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Pages_ServiceProviderProfileCompletion_components_profile_Facility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Pages/ServiceProviderProfileCompletion/components/profile/Facility */ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/Facility.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Facility", function() { return _Pages_ServiceProviderProfileCompletion_components_profile_Facility__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Pages_ServiceProviderProfileCompletion_components_profile_FacilityServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Pages/ServiceProviderProfileCompletion/components/profile/FacilityServices */ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/FacilityServices.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacilityServices", function() { return _Pages_ServiceProviderProfileCompletion_components_profile_FacilityServices__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Pages_ServiceProviderProfileCompletion_components_profile_MedicalRegistrations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Pages/ServiceProviderProfileCompletion/components/profile/MedicalRegistrations */ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/MedicalRegistrations.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MedicalRegistrations", function() { return _Pages_ServiceProviderProfileCompletion_components_profile_MedicalRegistrations__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Pages_ServiceProviderProfileCompletion_components_profile_ProfileInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Pages/ServiceProviderProfileCompletion/components/profile/ProfileInfo */ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/ProfileInfo.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileInfo", function() { return _Pages_ServiceProviderProfileCompletion_components_profile_ProfileInfo__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Pages_ServiceProviderProfileCompletion_components_profile_Qualifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Pages/ServiceProviderProfileCompletion/components/profile/Qualifications */ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/Qualifications.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Qualifications", function() { return _Pages_ServiceProviderProfileCompletion_components_profile_Qualifications__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Pages_ServiceProviderProfileCompletion_components_profile_Services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Pages/ServiceProviderProfileCompletion/components/profile/Services */ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/Services.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Services", function() { return _Pages_ServiceProviderProfileCompletion_components_profile_Services__WEBPACK_IMPORTED_MODULE_6__["default"]; });










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