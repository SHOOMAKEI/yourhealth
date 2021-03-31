(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/AddMedicalRegistrationModal.jsx":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/AddMedicalRegistrationModal.jsx ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddQualificationsModal; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pages_Utilities_FormInputError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Pages/Utilities/FormInputError */ "./resources/js/Pages/Utilities/FormInputError.jsx");
/* harmony import */ var _Pages_Utilities_ModalForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Pages/Utilities/ModalForm */ "./resources/js/Pages/Utilities/ModalForm.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Shared_TextInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Shared/TextInput */ "./resources/js/Shared/TextInput.js");
/* harmony import */ var _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Shared/LoadingButton */ "./resources/js/Shared/LoadingButton.js");
/* harmony import */ var _Shared_FileInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Shared/FileInput */ "./resources/js/Shared/FileInput.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










function FileUpload(props) {
  var field = props.field,
      form = props.form;

  var handleChange = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var file, reader, base64;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              file = e.currentTarget.files[0];
              reader = new FileReader();
              reader.readAsDataURL(file);
              _context.next = 5;
              return function (event) {
                var _event$target;

                base64 = (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.result;
                form.setFieldValue(field.name, base64);
              };

            case 5:
              reader.onload = _context.sent;

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: 'file',
    onChange: function onChange(o) {
      return handleChange(o);
    },
    className: 'form-control'
  }));
}

function AddQualificationsModal(_ref2) {
  var modalID = _ref2.modalID,
      initialData = _ref2.initialData,
      operation = _ref2.operation,
      title = _ref2.title,
      callback = _ref2.callback;
  var _usePage$props = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__["usePage"])().props,
      errors = _usePage$props.errors,
      status = _usePage$props.status,
      alertType = _usePage$props.alertType;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      sending = _useState2[0],
      setSending = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    registration_number: "",
    certificate_name: "",
    year: "",
    attachment: "",
    certificate_number: ""
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
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__["Inertia"].post(route('login'), values).then(function () {
      setSending(false);
    });
  }

  function renderForm() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, status && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "alert alert-success alert-dismissible bg-success text-white border-0 fade show",
      role: "alert"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      type: "button",
      className: "close",
      onClick: function onClick() {
        return setSuccess(false);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("strong", null, "Success - "), " Operation was completed successfully!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "col-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
      name: "certificate_number",
      type: "text",
      placeholder: "Certificate Number",
      label: "Certificate Number",
      errors: errors.certificate_number,
      value: values.certificate_number,
      onChange: handleChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
      name: "registration_number",
      type: "text",
      placeholder: "Registration Number",
      label: "Registration Number",
      errors: errors.registration_number,
      value: values.registration_number,
      onChange: handleChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
      name: "year",
      type: "text",
      placeholder: "Year",
      label: "Year",
      errors: errors.year,
      value: values.year,
      onChange: handleChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "col-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
      name: "certificate_name",
      type: "text",
      placeholder: "Certificate Name",
      label: "Certificate Name",
      errors: errors.certificate_name,
      value: values.certificate_name,
      onChange: handleChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Shared_FileInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: "attachment",
      type: "text",
      placeholder: "Attachment",
      label: "Attachment",
      errors: errors.attachment,
      value: values.attachment,
      onChange: handleChange
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "form-group mb-0 text-right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      type: "button",
      className: "btn btn-light mr-3",
      "data-dismiss": "modal"
    }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      type: "submit",
      className: "btn btn-primary btn-block",
      loading: sending
    }, "Save Changes"))));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Pages_Utilities_ModalForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    modalID: modalID,
    title: title ? title : "Add Medical Registration",
    renderForm: renderForm,
    size: 'large'
  });
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





function MedicalRegistrations() {
  var _useApi = useApi({
    query: QUERY_MEDICAL_REGISTRATION
  }),
      _useApi2 = _slicedToArray(_useApi, 2),
      queryMedReg = _useApi2[0],
      queryMedRegResponse = _useApi2[1];

  var _useApi3 = useApi({
    query: DELETE_MEDICAL_REGISTRATION
  }),
      _useApi4 = _slicedToArray(_useApi3, 2),
      deleteMedReg = _useApi4[0],
      deleteMedRegResponse = _useApi4[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{}]),
      _useState2 = _slicedToArray(_useState, 2),
      medicalRegistrations = _useState2[0],
      setMedicalRegistrations = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var data = queryMedRegResponse.data;

    if (data && data.medicalRegistrationInfo) {
      setMedicalRegistrations(data.medicalRegistrationInfo);
    }
  }, [queryMedRegResponse.data]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var data = deleteMedRegResponse.data;

    if (data && data.deleteProviderMedicalRegistration) {
      var newMedicalRegistrations = medicalRegistrations.filter(function (md) {
        if (md.id !== data.deleteProviderMedicalRegistration.id) {
          return md;
        }
      });
      setMedicalRegistrations(newMedicalRegistrations);
    }
  }, [deleteMedRegResponse.data]);

  function deleteMedicalRegistration(id) {
    deleteMedReg({
      variables: {
        attachment_id: id
      }
    });
  }

  function searchMedicalRegistrations() {}

  function renderAddSubcategoryModal() {
    return /*#__PURE__*/React.createElement(_Pages_ServiceProviderProfileCompletion_components_profile_AddMedicalRegistrationModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
      modalID: _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__["ADD_MEDICAL_REGISTRATION_MODAL_ID"],
      operation: "add",
      callback: addAttachment
    });
  }

  function addAttachment(attachment) {
    var newMedicalRegistrations = _toConsumableArray(medicalRegistrations);

    newMedicalRegistrations.push(attachment);
    setMedicalRegistrations(newMedicalRegistrations);
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "tab-pane fade",
    id: "v-pills-medical-registration",
    role: "tabpanel",
    "aria-labelledby": "v-pills-medical-registration-tab"
  }, /*#__PURE__*/React.createElement(_Pages_ServiceProviderProfileCompletion_components_profile_Heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Medical Registration",
    modalID: _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__["ADD_MEDICAL_REGISTRATION_MODAL_ID"],
    buttonText: "Add",
    search: searchMedicalRegistrations,
    renderModal: renderAddSubcategoryModal
  }), /*#__PURE__*/React.createElement("table", {
    className: "table table-centered table-borderless mb-0"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Certificate Name"), /*#__PURE__*/React.createElement("th", null, "Certificate Number"), /*#__PURE__*/React.createElement("th", null, "Registration Number"), /*#__PURE__*/React.createElement("th", null, "Attachment"), /*#__PURE__*/React.createElement("th", null, "Actions"))), /*#__PURE__*/React.createElement("tbody", null, medicalRegistrations.map(function (medReg) {
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, medReg.certificate_name), /*#__PURE__*/React.createElement("td", null, medReg.certificate_number), /*#__PURE__*/React.createElement("td", null, medReg.registration_number), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
      href: "".concat(medReg.attachment),
      className: "btn btn-light"
    }, "File ", /*#__PURE__*/React.createElement("i", {
      className: "uil-cloud-download ml-1"
    }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
      href: "javascript: void(0);",
      className: "action-icon",
      onClick: function onClick() {
        return deleteMedicalRegistration(medReg.id);
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "dripicons-trash"
    }))));
  }))));
}

/***/ }),

/***/ "./resources/js/Pages/Utilities/Constants.js":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Utilities/Constants.js ***!
  \***************************************************/
/*! exports provided: ADD_CATEGORY_MODAL_ID, UPDATE_CATEGORY_MODAL_ID, SERVICE_CATEGORIES_TABLE, PROVIDER_PROFILE_MODAL_ID, ADD_MEMBERSHIP_MODAL_ID, UPDATE_MEMBERSHIP_MODAL_ID, ADD_FACILITY_MODAL_ID, ADD_QUALIFICATION_MODAL_ID, ADD_MEDICAL_REGISTRATION_MODAL_ID, REQUEST_SERVICE_MODAL_ID, SET_SERVICE_MODAL_PRICE */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUALIFICATION_MODAL_ID", function() { return ADD_QUALIFICATION_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MEDICAL_REGISTRATION_MODAL_ID", function() { return ADD_MEDICAL_REGISTRATION_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_SERVICE_MODAL_ID", function() { return REQUEST_SERVICE_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SERVICE_MODAL_PRICE", function() { return SET_SERVICE_MODAL_PRICE; });
var ADD_CATEGORY_MODAL_ID = "add-category-modal";
var UPDATE_CATEGORY_MODAL_ID = "update-category-modal";
var SERVICE_CATEGORIES_TABLE = 'service-categories-table';
var PROVIDER_PROFILE_MODAL_ID = 'service-provider-profile-modal';
var ADD_MEMBERSHIP_MODAL_ID = 'add-service-modal';
var UPDATE_MEMBERSHIP_MODAL_ID = 'update-service-modal';
var ADD_FACILITY_MODAL_ID = 'add-facility-modal';
var ADD_QUALIFICATION_MODAL_ID = 'add-qualifications-modal';
var ADD_MEDICAL_REGISTRATION_MODAL_ID = 'add-medical-registration-modal';
var REQUEST_SERVICE_MODAL_ID = 'request-service-modal';
var SET_SERVICE_MODAL_PRICE = 'set-service-modal-price';

/***/ }),

/***/ "./resources/js/Pages/Utilities/FormInputError.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/Pages/Utilities/FormInputError.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormInputError; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function FormInputError(_ref) {
  var title = _ref.title,
      message = _ref.message;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["React"].createElement("div", {
    className: "alert alert-danger bg-danger text-white border-0 fade show mt-1",
    role: "alert"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["React"].createElement("strong", null, title, " - "), " ", message);
}

/***/ })

}]);