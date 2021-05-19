(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/ProfileStatuses.jsx":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/ProfileStatuses.jsx ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProfileStatuses; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Shared_FileInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/FileInput */ "./resources/js/Shared/FileInput.js");
/* harmony import */ var _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/LoadingButton */ "./resources/js/Shared/LoadingButton.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function ProfileStatuses(_ref) {
  var profile_status = _ref.profile_status,
      user = _ref.user;
  var _usePage$props = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["usePage"])().props,
      errors = _usePage$props.errors,
      status = _usePage$props.status,
      alertType = _usePage$props.alertType;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      sending = _useState2[0],
      setSending = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    profile: profile_status
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      profile = _useState4[0],
      setProfile = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    profile_photo: ''
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      values = _useState6[0],
      setValues = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setProfile({
      profile: profile_status
    });
  }, [profile_status]);

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
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__["Inertia"].post(route('personalInfo.uploadPhoto'), values).then(function () {
      setSending(false);
    });
  }

  function handleFileUpload(field, file) {
    setValues(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, _defineProperty({}, field, file));
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-pane fade",
    id: "v-pills-submission",
    role: "tabpanel",
    "aria-labelledby": "v-pills-submission-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-6 mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group text-center pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: user.profile_photo_path,
    alt: "image",
    className: "img-fluid img-thumbnail rounded-circle mb-3",
    width: "120"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_FileInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "profile_photo",
    type: "text",
    placeholder: user.provider_profile.account_category_type === 'company' || user.provider_profile.account_category_type === 'facility' ? 'Organization Logo' : 'Profile Photo',
    label: user.provider_profile.account_category_type === 'company' || user.provider_profile.account_category_type === 'facility' ? 'Organization Logo' : 'Profile Photo',
    errors: errors.profile_photo,
    value: values.profile_photo,
    callback: handleFileUpload
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group mb-0 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "submit",
    className: "btn btn-primary btn-block",
    loading: sending
  }, "Upload")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xl-12 col-lg-12 col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "header-title mb-2"
  }, "Profile Completion Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "data-simplebar": "init",
    style: {
      maxHeight: 700 + 'px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "simplebar-wrapper",
    style: {
      margin: 0 + 'px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "simplebar-height-auto-observer-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "simplebar-height-auto-observer"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "simplebar-mask"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "simplebar-offset",
    style: {
      right: 0 + 'px',
      bottom: 0 + 'px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "simplebar-content-wrapper",
    style: {
      height: 'auto',
      overflow: 'hidden scroll'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "simplebar-content",
    style: {
      padding: 0 + 'px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-alt pb-0"
  }, profile_status.profile_info && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-".concat(profile_status.profile_info.is_complete ? 'check-bold' : 'close-thick', " bg-").concat(profile_status.profile_info.is_complete ? 'primary' : 'danger', "-lighten text-").concat(profile_status.profile_info.is_complete ? 'primary' : 'danger', " timeline-icon")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-item-".concat(profile_status.profile_info.is_complete ? 'primary' : 'danger')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "text-".concat(profile_status.profile_info.is_complete ? 'primary' : 'danger', " font-weight-bold mb-1 d-block pl-4")
  }, profile_status.profile_info.info_category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "pl-4"
  }, profile_status.profile_info.remark), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-0 pb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted pl-4"
  }, profile_status.profile_info.last_updated_at)))), profile_status.company_profile_info && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-".concat(profile_status.company_profile_info.is_complete ? 'check-bold' : 'close-thick', " bg-").concat(profile_status.company_profile_info.is_complete ? 'primary' : 'danger', "-lighten text-").concat(profile_status.company_profile_info.is_complete ? 'primary' : 'danger', " timeline-icon")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-item-".concat(profile_status.company_profile_info.is_complete ? 'primary' : 'danger')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "text-".concat(profile_status.company_profile_info.is_complete ? 'primary' : 'danger', " font-weight-bold mb-1 d-block pl-4")
  }, profile_status.company_profile_info.info_category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "pl-4"
  }, profile_status.company_profile_info.remark), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-0 pb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted pl-4"
  }, profile_status.company_profile_info.last_updated_at)))), profile_status.education_qualification && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-".concat(profile_status.education_qualification.is_complete ? 'check-bold' : 'close-thick', " bg-").concat(profile_status.education_qualification.is_complete ? 'primary' : 'danger', "-lighten text-").concat(profile_status.education_qualification.is_complete ? 'primary' : 'danger', " timeline-icon")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-item-".concat(profile_status.education_qualification.is_complete ? 'primary' : 'danger')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "text-".concat(profile_status.education_qualification.is_complete ? 'primary' : 'danger', " font-weight-bold mb-1 d-block pl-4")
  }, profile_status.education_qualification.info_category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "pl-4"
  }, profile_status.education_qualification.remark), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-0 pb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted pl-4"
  }, profile_status.education_qualification.last_updated_at)))), profile_status.practice_license && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-".concat(profile_status.practice_license.is_complete ? 'check-bold' : 'close-thick', " bg-").concat(profile_status.practice_license.is_complete ? 'primary' : 'danger', "-lighten text-").concat(profile_status.practice_license.is_complete ? 'primary' : 'danger', " timeline-icon")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-item-".concat(profile_status.practice_license.is_complete ? 'primary' : 'danger')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "text-".concat(profile_status.practice_license.is_complete ? 'primary' : 'danger', " font-weight-bold mb-1 d-block pl-4")
  }, profile_status.practice_license.info_category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "pl-4"
  }, profile_status.practice_license.remark), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-0 pb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted pl-4"
  }, profile_status.practice_license.last_updated_at)))), profile_status.facility_profile_info && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-".concat(profile_status.facility_profile_info.is_complete ? 'check-bold' : 'close-thick', " bg-").concat(profile_status.facility_profile_info.is_complete ? 'primary' : 'danger', "-lighten text-").concat(profile_status.facility_profile_info.is_complete ? 'primary' : 'danger', " timeline-icon")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-item-".concat(profile_status.facility_profile_info.is_complete ? 'primary' : 'danger')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "text-".concat(profile_status.facility_profile_info.is_complete ? 'primary' : 'danger', " font-weight-bold mb-1 d-block pl-4")
  }, profile_status.facility_profile_info.info_category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "pl-4"
  }, profile_status.facility_profile_info.remark), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-0 pb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted pl-4"
  }, profile_status.facility_profile_info.last_updated_at)))), profile_status.services && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-".concat(profile_status.services.is_complete ? 'check-bold' : 'close-thick', " bg-").concat(profile_status.services.is_complete ? 'primary' : 'danger', "-lighten text-").concat(profile_status.services.is_complete ? 'primary' : 'danger', " timeline-icon")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-item-".concat(profile_status.services.is_complete ? 'primary' : 'danger')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "text-".concat(profile_status.services.is_complete ? 'primary' : 'danger', " font-weight-bold mb-1 d-block pl-4")
  }, profile_status.services.info_category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "pl-4"
  }, profile_status.services.remark), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-0 pb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted pl-4"
  }, profile_status.services.last_updated_at)))), profile_status.profile_info && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-".concat(profile_status.profile_info.profile_photo ? 'check-bold' : 'close-thick', " bg-").concat(profile_status.profile_info.profile_photo ? 'primary' : 'danger', "-lighten text-").concat(profile_status.profile_info.profile_photo ? 'primary' : 'danger', " timeline-icon")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-item-".concat(profile_status.profile_info.profile_photo ? 'primary' : 'danger')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "text-".concat(profile_status.profile_info.profile_photo ? 'primary' : 'danger', " font-weight-bold mb-1 d-block pl-4")
  }, "Profile Photo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "pl-4"
  }, profile_status.profile_info.profile_photo ? 'Profile Photo Uploaded' : 'Profile Photo Not Uploaded'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-0 pb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted pl-4"
  })))), profile_status.profile_submission && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-".concat(profile_status.profile_submission.is_complete ? 'check-bold' : 'close-thick', " bg-").concat(profile_status.profile_submission.is_complete ? 'primary' : 'danger', "-lighten text-").concat(profile_status.profile_submission.is_complete ? 'primary' : 'danger', " timeline-icon")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-item-".concat(profile_status.profile_submission.is_complete ? 'primary' : 'danger')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "text-".concat(profile_status.profile_submission.is_complete ? 'primary' : 'danger', " font-weight-bold mb-1 d-block pl-4")
  }, profile_status.profile_submission.info_category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "pl-4"
  }, profile_status.profile_submission.remark), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-0 pb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted pl-4"
  }, profile_status.profile_submission.last_updated_at))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "simplebar-placeholder",
    style: {
      width: 'auto',
      height: 600 + 'px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "simplebar-track simplebar-horizontal",
    style: {
      visibility: 'hidden'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "simplebar-scrollbar",
    style: {
      width: 0 + 'px',
      display: 'none'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "simplebar-track simplebar-vertical",
    style: {
      visibility: 'hidden'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "simplebar-scrollbar",
    style: {
      height: 299 + 'px',
      transform: 'translate3d(0px, 0px, 0px)',
      display: 'block'
    }
  })))), !user.provider_profile.is_submitted && profile_status.profile_info.is_complete && profile_status.services.is_complete && profile_status.profile_info.profile_photo && (user.provider_profile.account_category_type === 'company' ? profile_status === null || profile_status === void 0 ? void 0 : profile_status.company_profile_info.is_complete : true) && (user.provider_profile.account_category_type === 'individual' ? (profile_status === null || profile_status === void 0 ? void 0 : profile_status.education_qualification.is_complete) && (profile_status === null || profile_status === void 0 ? void 0 : profile_status.practice_license.is_complete) : true) && (user.provider_profile.account_category_type === 'facility' ? profile_status === null || profile_status === void 0 ? void 0 : profile_status.facility_profile_info.is_complete : true) && (user.provider_profile.account_category_type === 'company' ? profile_status === null || profile_status === void 0 ? void 0 : profile_status.facility_profile_info.is_complete : true) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: route('profileSubmission.submit'),
    className: "btn btn-primary btn-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-briefcase-check-outline"
  }), " Submit Profile for Verification") : null)));
}

/***/ })

}]);