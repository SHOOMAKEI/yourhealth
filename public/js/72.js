(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

/***/ "./resources/js/Pages/Utilities/components/TwoFactorAuthentication.jsx":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Utilities/components/TwoFactorAuthentication.jsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Shared_TextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/TextInput */ "./resources/js/Shared/TextInput.js");
/* harmony import */ var _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/LoadingButton */ "./resources/js/Shared/LoadingButton.js");
/* harmony import */ var _Shared_FileInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Shared/FileInput */ "./resources/js/Shared/FileInput.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _settings$two_factor_;

  var user = _ref.user,
      two_factor_data = _ref.two_factor_data;
  var _usePage$props = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["usePage"])().props,
      errors = _usePage$props.errors,
      status = _usePage$props.status,
      alertType = _usePage$props.alertType;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      sending = _useState2[0],
      setSending = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState4 = _slicedToArray(_useState3, 2),
      values = _useState4[0],
      setValues = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState6 = _slicedToArray(_useState5, 2),
      settings = _useState6[0],
      setSettings = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setValues(user);
  }, [user]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setSettings(two_factor_data);
  }, [two_factor_data]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "header-title"
  }, "Two Factor Authentication"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted font-14"
  }, "Additional security to your account using two factor authentication.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card col-lg-7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: " font-14"
  }, "When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application."), user.enable_2fa ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "font-14"
  }, "Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-4",
    dangerouslySetInnerHTML: {
      __html: settings.qrcode_svg
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: " font-14"
  }, "Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-75 bg-light rounded p-3 mb-2"
  }, settings && (settings === null || settings === void 0 ? void 0 : (_settings$two_factor_ = settings.two_factor_recovery_codes) === null || _settings$two_factor_ === void 0 ? void 0 : _settings$two_factor_.map(function (code, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: index + 1,
      className: "py-1"
    }, code.code);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group mt-3 text-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: route('settings.recovery_code'),
    className: "btn btn-outline-secondary btn-md mr-3"
  }, "Generate Recovery Code"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: route('settings.toggle2fa'),
    className: "btn btn-danger btn-md"
  }, "Disable"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group mt-3 text-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: route('settings.toggle2fa'),
    className: "btn btn-primary btn-md"
  }, "Enable"))))))))));
});

/***/ }),

/***/ "./resources/js/Shared/FileInput.js":
/*!******************************************!*\
  !*** ./resources/js/Shared/FileInput.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var className = _ref.className,
      name = _ref.name,
      label = _ref.label,
      accept = _ref.accept,
      _ref$errors = _ref.errors,
      errors = _ref$errors === void 0 ? [] : _ref$errors,
      callback = _ref.callback;
  var fileInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      file = _useState2[0],
      setFile = _useState2[1];

  function handleFileChange(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    var base64;

    reader.onload = function (event) {
      var _event$target;

      base64 = (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.result;
      setFile(base64);
      callback(name, base64);
    };
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group ".concat(className, "  ").concat(errors.length ? 'is-invalid' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: name
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "custom-file pl-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: name,
    name: name,
    ref: fileInput,
    accept: accept,
    type: "file",
    "data-toggle": "custom-file-input",
    className: "custom-file-input js-custom-file-input-enabled",
    onChange: handleFileChange
  }), label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "custom-file-label",
    htmlFor: name
  }, label), errors && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback",
    style: {
      display: 'block'
    }
  }, errors)));
});

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

/***/ })

}]);