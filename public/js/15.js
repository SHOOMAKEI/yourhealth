(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/Company.jsx":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/Company.jsx ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FacilityModal; });
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








function FacilityModal(_ref) {
  var modalID = _ref.modalID,
      initialData = _ref.initialData,
      operation = _ref.operation,
      title = _ref.title;
  var _usePage$props = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__["usePage"])().props,
      errors = _usePage$props.errors,
      status = _usePage$props.status,
      alertType = _usePage$props.alertType;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      sending = _useState2[0],
      setSending = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    address: "",
    description: "",
    alternate_mobile_number: "",
    email: "",
    mobile_number: "",
    name: "",
    physical_address: "",
    registration_date: "",
    registration_number: "",
    tin: "",
    trading_name: "",
    vrn: "",
    website: ""
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
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__["Inertia"].post(route('login'), values).then(function () {
      setSending(false);
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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
    type: "text",
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
    name: "alternate_mobile_number",
    type: "text",
    placeholder: "Alternate Mobile Number",
    label: "Website",
    errors: errors.alternate_mobile_number,
    value: values.alternate_mobile_number,
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
  }, "Save Changes")))));
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

/***/ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/Qualifications.jsx":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/Qualifications.jsx ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Qualifications; });
/* harmony import */ var _Pages_ServiceProviderProfileCompletion_components_profile_AddQualificationModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Pages/ServiceProviderProfileCompletion/components/profile/AddQualificationModal */ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/AddQualificationModal.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Pages/Utilities/Constants */ "./resources/js/Pages/Utilities/Constants.js");
/* harmony import */ var _Pages_ServiceProviderProfileCompletion_components_profile_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Pages/ServiceProviderProfileCompletion/components/profile/Heading */ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/Heading.jsx");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function Qualifications(_ref) {
  var user = _ref.user;

  var _useApi = useApi({
    query: QUERY_EDUCATION_QUALIFICATION
  }),
      _useApi2 = _slicedToArray(_useApi, 2),
      queryQualifications = _useApi2[0],
      queryQualificationsResponse = _useApi2[1];

  var _useApi3 = useApi({
    query: DELETE_QUALIFICATION
  }),
      _useApi4 = _slicedToArray(_useApi3, 2),
      deleteQualification = _useApi4[0],
      deleteQualificationResponse = _useApi4[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      qualifications = _useState2[0],
      setQualifications = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var data = queryQualificationsResponse.data;

    if (data && data.educationQualificationInfo) {
      setQualifications(data.educationQualificationInfo);
    }
  }, [queryQualificationsResponse.data]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    queryQualifications({});
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var data = deleteQualificationResponse.data;

    if (data && data.deleteProviderQualification) {
      var newQualifications = qualifications.filter(function (qualification) {
        if (qualification.id !== data.deleteProviderQualification.id) {
          return qualification;
        }
      });
      setQualifications(newQualifications);
    }
  }, [deleteQualificationResponse.data]);

  function searchQualifications() {}

  function _deleteQualification(id) {
    deleteQualification({
      variables: {
        qualification_id: id
      }
    });
  }

  function addAttachment(attachment) {
    var newQualifications = _toConsumableArray(qualifications);

    newQualifications.push(attachment);
    setQualifications(newQualifications);
  }

  function renderAddSubcategoryModal() {
    return /*#__PURE__*/React.createElement(_Pages_ServiceProviderProfileCompletion_components_profile_AddQualificationModal__WEBPACK_IMPORTED_MODULE_0__["default"], {
      modalID: _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_2__["ADD_QUALIFICATION_MODAL_ID"],
      operation: "add",
      callback: addAttachment
    });
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "tab-pane fade",
    id: "v-pills-qualifications",
    role: "tabpanel",
    "aria-labelledby": "v-pills-qualifications-tab"
  }, /*#__PURE__*/React.createElement(_Pages_ServiceProviderProfileCompletion_components_profile_Heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Qualifications",
    modalID: _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_2__["ADD_QUALIFICATION_MODAL_ID"],
    buttonText: "Add Qualification",
    search: searchQualifications,
    renderModal: renderAddSubcategoryModal
  }), /*#__PURE__*/React.createElement("table", {
    className: "table table-centered table-borderless mb-0"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Title"), /*#__PURE__*/React.createElement("th", null, "Institution"), /*#__PURE__*/React.createElement("th", null, "Attachment"), /*#__PURE__*/React.createElement("th", null, "Actions"))), /*#__PURE__*/React.createElement("tbody", null, queryQualificationsResponse.loading || deleteQualificationResponse.loading ? /*#__PURE__*/React.createElement(Spinner, null) : qualifications.map(function (qualification) {
    return /*#__PURE__*/React.createElement("tr", {
      key: qualification.id
    }, /*#__PURE__*/React.createElement("td", null, qualification.award_title), /*#__PURE__*/React.createElement("td", null, qualification.institution_name), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
      href: "".concat(qualification.attachment),
      className: "btn btn-light"
    }, "File ", /*#__PURE__*/React.createElement("i", {
      className: "uil-cloud-download ml-1"
    }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
      href: "javascript: void(0);",
      className: "action-icon",
      onClick: function onClick() {
        return _deleteQualification(qualification.id);
      }
    }, /*#__PURE__*/React.createElement("i", {
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
      $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
    }
  });
};
var updateServiceCategoriesTable = function updateServiceCategoriesTable(tableId, category) {
  var table = $("#".concat(tableId)).DataTable(); //table.clear().destroy();

  initializeDataTable(false, false, tableId); // table.row.add([category.name, category.status, category.createdAt, category.updatedAt, ''])
};

/***/ })

}]);