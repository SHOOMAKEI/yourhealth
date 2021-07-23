(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[128],{

/***/ "./resources/js/Pages/VerifiedServiceProviders/StuffManagement/AddStuffInvitationModal.jsx":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Pages/VerifiedServiceProviders/StuffManagement/AddStuffInvitationModal.jsx ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddStuffInvitationModal; });
/* harmony import */ var _Pages_Utilities_FormInputError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Pages/Utilities/FormInputError */ "./resources/js/Pages/Utilities/FormInputError.jsx");
/* harmony import */ var _Pages_Utilities_ModalForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Pages/Utilities/ModalForm */ "./resources/js/Pages/Utilities/ModalForm.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Shared_TextInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Shared/TextInput */ "./resources/js/Shared/TextInput.js");
/* harmony import */ var _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Shared/LoadingButton */ "./resources/js/Shared/LoadingButton.js");
/* harmony import */ var _Shared_FileInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Shared/FileInput */ "./resources/js/Shared/FileInput.js");
/* harmony import */ var _Shared_SelectInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Shared/SelectInput */ "./resources/js/Shared/SelectInput.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function AddStuffInvitationModal(_ref) {
  var modalID = _ref.modalID,
      initialData = _ref.initialData,
      operation = _ref.operation,
      title = _ref.title,
      callback = _ref.callback,
      facility = _ref.facility;
  var _usePage$props = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__["usePage"])().props,
      errors = _usePage$props.errors,
      status = _usePage$props.status,
      alertType = _usePage$props.alertType;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      sending = _useState2[0],
      setSending = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      _useState4 = _slicedToArray(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialData),
      _useState6 = _slicedToArray(_useState5, 2),
      values = _useState6[0],
      setValues = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setValues(initialData);
  }, [facility]);

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
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__["Inertia"].post(route('provider_profile.stuff.store'), values).then(function () {
      setSending(false);
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    $(document).ready(function () {
      window.setTimeout(function () {
        $(".alert").fadeTo(2000, 500).slideUp(500, function () {
          $(".alert").slideUp(500);
        });
      }, 2500);
    });
  }, [status, errors]);

  function renderForm() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, status && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "alert alert-success alert-dismissible bg-primary text-white border-0 fade show",
      role: "alert"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      type: "button",
      className: "close",
      onClick: function onClick() {
        return setSuccess(false);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", null, "Success - "), " Operation was completed successfully!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "col-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "Email",
      errors: errors.email,
      value: values.email,
      onChange: handleChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Shared_SelectInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: "role",
      placeholder: "Role",
      label: "Role",
      errors: errors.role,
      value: values.role,
      onChange: handleChange
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      value: "stuff",
      key: Math.random()
    }, "Stuff"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      value: "admin",
      key: Math.random()
    }, "Admin")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "form-group mb-0 text-right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      type: "button",
      className: "btn btn-light btn-sm mr-3",
      "data-dismiss": "modal"
    }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
      type: "submit",
      className: "btn btn-primary btn-sm",
      loading: sending
    }, "Save Changes"))));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Pages_Utilities_ModalForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    modalID: modalID,
    title: title ? title : "Add Medical Registration",
    renderForm: renderForm,
    size: 'large'
  });
}

/***/ }),

/***/ "./resources/js/Pages/VerifiedServiceProviders/StuffManagement/FacilityInvitation.jsx":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/VerifiedServiceProviders/StuffManagement/FacilityInvitation.jsx ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Pages/Utilities/Constants */ "./resources/js/Pages/Utilities/Constants.js");
/* harmony import */ var _Pages_ServiceProviderProfileCompletion_components_profile_AddMedicalRegistrationModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Pages/ServiceProviderProfileCompletion/components/profile/AddMedicalRegistrationModal */ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/AddMedicalRegistrationModal.jsx");
/* harmony import */ var _Pages_ServiceProviderProfileCompletion_components_profile_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Pages/ServiceProviderProfileCompletion/components/profile/Heading */ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/Heading.jsx");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Shared_SelectInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Shared/SelectInput */ "./resources/js/Shared/SelectInput.js");
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.js");
/* harmony import */ var _Pages_VerifiedServiceProviders_FirmManagement_Services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Pages/VerifiedServiceProviders/FirmManagement/Services */ "./resources/js/Pages/VerifiedServiceProviders/FirmManagement/Services.jsx");
/* harmony import */ var _Shared_PageTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Shared/PageTitle */ "./resources/js/Shared/PageTitle.js");
/* harmony import */ var _Pages_VerifiedServiceProviders_StuffManagement_AddStuffInvitationModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/Pages/VerifiedServiceProviders/StuffManagement/AddStuffInvitationModal */ "./resources/js/Pages/VerifiedServiceProviders/StuffManagement/AddStuffInvitationModal.jsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var FacilityInvitation = function FacilityInvitation() {
  var _facilities$;

  var _usePage$props = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__["usePage"])().props,
      errors = _usePage$props.errors,
      status = _usePage$props.status,
      alertType = _usePage$props.alertType,
      auth = _usePage$props.auth,
      facilities = _usePage$props.facilities,
      invitations = _usePage$props.invitations;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(invitations),
      _useState2 = _slicedToArray(_useState, 2),
      medicalRegistrations = _useState2[0],
      setMedicalRegistrations = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(invitations),
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_VerifiedServiceProviders_StuffManagement_AddStuffInvitationModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
      modalID: _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__["ADD_STUFF_INVITATION_MODAL_ID"],
      operation: "add",
      facility: values.facility,
      initialData: {
        email: "",
        role: "stuff",
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
    setMedicalRegs(invitations);
    setMedicalRegistrations(invitations);
  }, [invitations]);

  function addAttachment() {//
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_PageTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Stuff Invitations"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card card-body"
  }, (auth.user.provider_profile.account_category_type === 'company' || auth.user.provider_profile.account_category_type === 'facility') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Select Facility"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_SelectInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
    title: "Stuff Invitations",
    modalID: _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__["ADD_STUFF_INVITATION_MODAL_ID"],
    buttonText: "Invite New Stuff",
    renderModal: renderAddSubcategoryModal
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-centered table-borderless mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Role"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, medicalRegs && medicalRegs.map(function (medReg) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: medReg.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, medReg.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, medReg.role), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, medReg.status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__["InertiaLink"], {
      href: route('practiceLicense.destroy', medReg.id),
      className: "action-icon "
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "dripicons-trash"
    }))));
  })))));
};

FacilityInvitation.layout = function (page) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    children: page
  });
};

/* harmony default export */ __webpack_exports__["default"] = (FacilityInvitation);

/***/ })

}]);