(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "./resources/js/Pages/Utilities/ModalForm.jsx":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Utilities/ModalForm.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Modal(_ref) {
  var modalID = _ref.modalID,
      title = _ref.title,
      size = _ref.size,
      renderForm = _ref.renderForm;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: modalID,
    className: "modal fade",
    tabIndex: -1,
    role: "dialog",
    "data-backdrop": "static",
    "aria-labelledby": "".concat(modalID, "Label"),
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-dialog ".concat(size === 'large' ? 'modal-lg modal-dialog-scrollable' : null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "modal-title",
    id: "".concat(modalID, "Label")
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-hidden": "true"
  }, "\xD7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body"
  }, renderForm()))));
}

/***/ }),

/***/ "./resources/js/Shared/CheckBoxInput.js":
/*!**********************************************!*\
  !*** ./resources/js/Shared/CheckBoxInput.js ***!
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
  var label = _ref.label,
      name = _ref.name,
      className = _ref.className,
      value = _ref.value,
      _ref$errors = _ref.errors,
      errors = _ref$errors === void 0 ? [] : _ref$errors,
      props = _objectWithoutProperties(_ref, ["label", "name", "className", "value", "errors"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "custom-control custom-switch mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
    id: name,
    name: name
  }, props, {
    type: "checkbox",
    className: "custom-control-input"
  })), label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "custom-control-label",
    htmlFor: name
  }, label), errors && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback ",
    style: {
      display: 'block'
    }
  }, errors));
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

/***/ "./resources/js/Shared/TextAreaInput.js":
/*!**********************************************!*\
  !*** ./resources/js/Shared/TextAreaInput.js ***!
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
  var label = _ref.label,
      name = _ref.name,
      className = _ref.className,
      _ref$errors = _ref.errors,
      errors = _ref$errors === void 0 ? [] : _ref$errors,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ["label", "name", "className", "errors", "value"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group ".concat(className, " ").concat(errors.length ? 'is-invalid' : '')
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: name
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", _extends({
    id: name,
    name: name
  }, props, {
    className: "form-input form-control ".concat(errors.length ? 'error' : ''),
    rows: "2",
    value: value ? value : ""
  })), errors && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback",
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

/***/ })

}]);