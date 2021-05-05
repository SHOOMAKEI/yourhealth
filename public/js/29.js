(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./resources/js/Pages/VerifiedServiceProviders/Consultation/Components/AddCategoryModal.jsx":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Pages/VerifiedServiceProviders/Consultation/Components/AddCategoryModal.jsx ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateSchedule; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_SelectInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/SelectInput */ "./resources/js/Shared/SelectInput.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Shared_TextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/TextInput */ "./resources/js/Shared/TextInput.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Shared/LoadingButton */ "./resources/js/Shared/LoadingButton.js");
/* harmony import */ var _Shared_TimeInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Shared/TimeInput */ "./resources/js/Shared/TimeInput.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function CreateSchedule(_ref) {
  var facilities = _ref.facilities,
      days = _ref.days,
      user = _ref.user;
  var _usePage$props = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["usePage"])().props,
      errors = _usePage$props.errors,
      status = _usePage$props.status,
      alertType = _usePage$props.alertType;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(facilities),
      _useState2 = _slicedToArray(_useState, 2),
      facilitiesData = _useState2[0],
      setFacilitiesData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      sending = _useState4[0],
      setSending = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: '',
    from: "4:30:45 PM",
    to: "4:30:45 PM",
    interval: 15,
    day_id: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      values = _useState6[0],
      setValues = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setFacilitiesData(facilities);
  }, [facilities, days]);

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

    if (user.provider_profile.account_category_type === 'individual') {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__["Inertia"].post(route('calender.store'), values).then(function () {
        setSending(false);
      });
    } else {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__["Inertia"].post(route('calender.facility_store'), values).then(function () {
        setSending(false);
      });
    }
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
    className: "modal fade",
    id: "add-category",
    role: "dialog",
    "aria-labelledby": "mySmallModalLabel",
    "data-backdrop": "static",
    tabIndex: "-1",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-content "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-header border-bottom-0 d-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-hidden": "true"
  }, "\xD7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "modal-title"
  }, "Set Schedule")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body p-4"
  }, (user.provider_profile.account_category_type === 'company' || user.provider_profile.account_category_type === 'facility') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_SelectInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "facility_id",
    label: "Select Facility",
    type: "text",
    errors: errors.facility_id,
    value: values.facility_id,
    onChange: handleChange
  }, facilities && facilities.map(function (facility) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: facility.id,
      key: facility.id
    }, facility.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "name",
    type: "text",
    placeholder: "Session Name",
    label: "Session Name",
    errors: errors.name,
    value: values.name,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_TimeInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "from",
    type: "time",
    placeholder: "From Time",
    label: "From Time",
    errors: errors.from,
    value: values.from,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_TimeInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "to",
    type: "time",
    placeholder: "To Time",
    label: "To Time",
    errors: errors.to,
    value: values.to,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "interval",
    type: "text",
    placeholder: "Interval Minutes",
    label: "Interval Minutes",
    errors: errors.interval,
    value: values.interval,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_SelectInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "day_id",
    type: "text",
    placeholder: "Day",
    label: "Day",
    errors: errors.day_id,
    value: values.day_id,
    onChange: handleChange
  }, days.map(function (day) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: day.id,
      key: day.id
    }, day.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-light mr-3",
    "data-dismiss": "modal"
  }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "submit",
    className: "btn btn-primary btn-sm",
    loading: sending
  }, "Save Changes")))))));
}

/***/ }),

/***/ "./resources/js/Shared/LoadingButton.js":
/*!**********************************************!*\
  !*** ./resources/js/Shared/LoadingButton.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var loading = _ref.loading,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["loading", "className", "children"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", _extends({
    disabled: loading,
    className: "focus:outline-none flex items-center ".concat(className)
  }, props), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "spinner-border spinner-border-sm mr-2 mb-0",
    role: "status",
    "aria-hidden": "true"
  }), children);
});

/***/ }),

/***/ "./resources/js/Shared/SelectInput.js":
/*!********************************************!*\
  !*** ./resources/js/Shared/SelectInput.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var label = _ref.label,
      name = _ref.name,
      className = _ref.className,
      children = _ref.children,
      _ref$errors = _ref.errors,
      errors = _ref$errors === void 0 ? [] : _ref$errors,
      props = _objectWithoutProperties(_ref, ["label", "name", "className", "children", "errors"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group ".concat(className)
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: name
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", _extends({
    id: name,
    name: name
  }, props, {
    className: "custom-select ".concat(errors.length ? 'error' : '')
  }), children), errors && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback ",
    style: {
      display: 'block'
    }
  }, errors));
});

/***/ }),

/***/ "./resources/js/Shared/TextInput.js":
/*!******************************************!*\
  !*** ./resources/js/Shared/TextInput.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var label = _ref.label,
      name = _ref.name,
      className = _ref.className,
      _ref$errors = _ref.errors,
      errors = _ref$errors === void 0 ? [] : _ref$errors,
      props = _objectWithoutProperties(_ref, ["label", "name", "className", "errors"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group ".concat(className)
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: name
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
    id: name,
    name: name
  }, props, {
    className: "form-control"
  })), errors && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback",
    style: {
      display: 'block'
    }
  }, errors));
});

/***/ }),

/***/ "./resources/js/Shared/TimeInput.js":
/*!******************************************!*\
  !*** ./resources/js/Shared/TimeInput.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var label = _ref.label,
      name = _ref.name,
      className = _ref.className,
      _ref$errors = _ref.errors,
      errors = _ref$errors === void 0 ? [] : _ref$errors,
      props = _objectWithoutProperties(_ref, ["label", "name", "className", "errors"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group ".concat(className)
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: name
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
    id: name,
    name: name
  }, props, {
    className: "form-control",
    "data-toggle": "timepicker"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "input-group-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "dripicons-clock"
  })))), errors && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback",
    style: {
      display: 'block'
    }
  }, errors));
});

/***/ })

}]);