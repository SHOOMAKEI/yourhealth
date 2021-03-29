(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/AddFacilityModal.jsx":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/AddFacilityModal.jsx ***!
  \*****************************************************************************************************/
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

  function renderForm() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "name",
      type: "text",
      placeholder: "Facility Name",
      label: "Facility Name",
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Pages_Utilities_ModalForm__WEBPACK_IMPORTED_MODULE_0__["default"], {
    modalID: modalID,
    title: title ? title : "Add new facility",
    renderForm: renderForm,
    size: 'large'
  });
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



function Facility() {
  function searchFacilities() {}

  function renderAddSubcategoryModal() {
    return /*#__PURE__*/React.createElement(_Pages_ServiceProviderProfileCompletion_components_profile_AddFacilityModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
      modalID: _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_0__["ADD_FACILITY_MODAL_ID"],
      operation: "add"
    });
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "tab-pane fade",
    id: "v-pills-facility",
    role: "tabpanel",
    "aria-labelledby": "v-pills-facility-tab"
  }, /*#__PURE__*/React.createElement(_Pages_ServiceProviderProfileCompletion_components_profile_Heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Facilities",
    modalID: _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_0__["ADD_FACILITY_MODAL_ID"],
    buttonText: "Add Facility",
    search: searchFacilities,
    renderModal: renderAddSubcategoryModal
  }), /*#__PURE__*/React.createElement("table", {
    className: "table table-centered table-borderless mb-0"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "TIN Attachment"), /*#__PURE__*/React.createElement("th", null, "VRN Attachment"), /*#__PURE__*/React.createElement("th", null, "Actions"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Linda G. Smith Linda G. Smith Linda G. Smith"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
    href: "",
    className: "btn btn-light"
  }, "281-308-0793 ", /*#__PURE__*/React.createElement("i", {
    className: "uil-cloud-download ml-1"
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
    href: "",
    className: "btn btn-light"
  }, "281-308-0793 ", /*#__PURE__*/React.createElement("i", {
    className: "uil-cloud-download ml-1"
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
    href: "javascript: void(0);",
    className: "action-icon"
  }, " ", /*#__PURE__*/React.createElement("i", {
    className: "mdi mdi-pencil"
  })), /*#__PURE__*/React.createElement("a", {
    href: "javascript: void(0);",
    className: "action-icon"
  }, " ", /*#__PURE__*/React.createElement("i", {
    className: "dripicons-trash"
  })))))));
}

/***/ })

}]);