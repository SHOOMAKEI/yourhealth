(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/ProfileInfo.jsx":
/*!************************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/ProfileInfo.jsx ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProfileInfo; });
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










function ProfileInfo(_ref) {
  var _user$provider_profil, _user$provider_profil2, _user$provider_profil3, _user$provider_profil4, _user$provider_profil5, _user$provider_profil6, _user$provider_profil7, _user$provider_profil8, _user$provider_profil9, _user$provider_profil10, _user$provider_profil11, _user$provider_profil12, _user$provider_profil13, _user$provider_profil14;

  var user = _ref.user,
      provider_sub_levels = _ref.provider_sub_levels;
  var _usePage$props = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__["usePage"])().props,
      errors = _usePage$props.errors,
      status = _usePage$props.status,
      alertType = _usePage$props.alertType;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      sending = _useState2[0],
      setSending = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    'title': ((_user$provider_profil = user.provider_profile) === null || _user$provider_profil === void 0 ? void 0 : _user$provider_profil.title) || '',
    'first_name': ((_user$provider_profil2 = user.provider_profile) === null || _user$provider_profil2 === void 0 ? void 0 : _user$provider_profil2.first_name) || '',
    'middle_name': ((_user$provider_profil3 = user.provider_profile) === null || _user$provider_profil3 === void 0 ? void 0 : _user$provider_profil3.middle_name) || '',
    'last_name': ((_user$provider_profil4 = user.provider_profile) === null || _user$provider_profil4 === void 0 ? void 0 : _user$provider_profil4.last_name) || '',
    'username': ((_user$provider_profil5 = user.provider_profile) === null || _user$provider_profil5 === void 0 ? void 0 : _user$provider_profil5.username) || '',
    'mobile_number': ((_user$provider_profil6 = user.provider_profile) === null || _user$provider_profil6 === void 0 ? void 0 : _user$provider_profil6.mobile_number) || '',
    'alternative_mobile_number': ((_user$provider_profil7 = user.provider_profile) === null || _user$provider_profil7 === void 0 ? void 0 : _user$provider_profil7.alternative_mobile_number) || '',
    'email': ((_user$provider_profil8 = user.provider_profile) === null || _user$provider_profil8 === void 0 ? void 0 : _user$provider_profil8.email) || '',
    'address': ((_user$provider_profil9 = user.provider_profile) === null || _user$provider_profil9 === void 0 ? void 0 : _user$provider_profil9.address) || '',
    'physical_address': ((_user$provider_profil10 = user.provider_profile) === null || _user$provider_profil10 === void 0 ? void 0 : _user$provider_profil10.physical_address) || '',
    'dob': ((_user$provider_profil11 = user.provider_profile) === null || _user$provider_profil11 === void 0 ? void 0 : _user$provider_profil11.dob) && ((_user$provider_profil12 = user.provider_profile) === null || _user$provider_profil12 === void 0 ? void 0 : _user$provider_profil12.dob.split(' ')[0]) || '',
    'gender': ((_user$provider_profil13 = user.provider_profile) === null || _user$provider_profil13 === void 0 ? void 0 : _user$provider_profil13.gender) || 'Male',
    'bio': ((_user$provider_profil14 = user.provider_profile) === null || _user$provider_profil14 === void 0 ? void 0 : _user$provider_profil14.bio) || 'No Bio',
    'provider_sub_level_id': provider_sub_levels[0].id
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
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__["Inertia"].post(route('personalInfo.update'), values).then(function () {
      setSending(false);
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tab-pane fade active show",
    id: "v-pills-profile",
    role: "tabpanel",
    "aria-labelledby": "v-pills-profile-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_SelectInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: "title",
    type: "text",
    placeholder: "Title",
    label: "Title",
    errors: errors.title,
    value: values.title,
    onChange: handleChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "Mr"
  }, "Mr"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "Mrs"
  }, "Mrs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "Dr"
  }, "Dr"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "Nurse"
  }, "Nurse"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "Prof"
  }, "Prof")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "first_name",
    type: "text",
    placeholder: "First Name",
    label: "First Name",
    errors: errors.first_name,
    value: values.first_name,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "last_name",
    type: "text",
    placeholder: "Last Name",
    label: "Last Name",
    errors: errors.last_name,
    value: values.last_name,
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_SelectInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: "gender",
    type: "text",
    placeholder: "Gender",
    label: "Gender",
    errors: errors.gender,
    value: values.gender,
    onChange: handleChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "M"
  }, "Male"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "F"
  }, "Female")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "dob",
    type: "date",
    placeholder: "Date of Birth",
    label: "Date of Birth",
    errors: errors.dob,
    value: values.dob,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "username",
    type: "text",
    placeholder: "Username",
    label: "Username",
    errors: errors.username,
    value: values.username,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "middle_name",
    type: "text",
    placeholder: "Middle Name",
    label: "Middle Name",
    errors: errors.middle_name,
    value: values.middle_name,
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
    placeholder: "Alternate Phone number",
    label: "Alternate Phone number",
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_SelectInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: "provider_sub_level_id",
    type: "text",
    placeholder: "Provider Sub Level",
    label: "Provider Sub Level",
    errors: errors.provider_sub_level_id,
    value: values.provider_sub_level_id,
    onChange: handleChange
  }, provider_sub_levels.map(function (level) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: level.id,
      key: level.id
    }, level.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextAreaInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "bio",
    type: "text",
    placeholder: "Bio",
    label: "Bio",
    errors: errors.bio,
    value: values.bio,
    onChange: handleChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group mb-0 text-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "submit",
    className: "btn btn-primary btn-sm",
    loading: sending
  }, "Save Changes"))));
}

/***/ })

}]);