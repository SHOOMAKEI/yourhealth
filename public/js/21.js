(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./resources/js/Pages/Services/packages/features/AddFeature.jsx":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Services/packages/features/AddFeature.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddFeatureModal; });
/* harmony import */ var _Pages_Utilities_ModalForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Pages/Utilities/ModalForm */ "./resources/js/Pages/Utilities/ModalForm.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Shared_TextInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/TextInput */ "./resources/js/Shared/TextInput.js");
/* harmony import */ var _Shared_TextAreaInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/TextAreaInput */ "./resources/js/Shared/TextAreaInput.js");
/* harmony import */ var _Shared_CheckBoxInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/CheckBoxInput */ "./resources/js/Shared/CheckBoxInput.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Shared/LoadingButton */ "./resources/js/Shared/LoadingButton.js");
/* harmony import */ var _Shared_SelectInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Shared/SelectInput */ "./resources/js/Shared/SelectInput.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function AddFeatureModal(_ref) {
  var modalID = _ref.modalID,
      operation = _ref.operation,
      title = _ref.title,
      initialData = _ref.initialData,
      services = _ref.services;
  var _usePage$props = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__["usePage"])().props,
      errors = _usePage$props.errors,
      status = _usePage$props.status,
      alertType = _usePage$props.alertType;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(operation),
      _useState2 = _slicedToArray(_useState, 2),
      type = _useState2[0],
      setType = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState4 = _slicedToArray(_useState3, 2),
      serviceData = _useState4[0],
      setServiceData = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialData),
      _useState6 = _slicedToArray(_useState5, 2),
      values = _useState6[0],
      setValues = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      success = _useState8[0],
      setSuccess = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      sending = _useState10[0],
      setSending = _useState10[1];

  function handleChange(e) {
    var key = e.target.name;
    var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setValues(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, _defineProperty({}, key, value));
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return setValues(initialData);
  }, [initialData]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return setType(operation);
  }, [operation]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return setServiceData(services);
  }, [services]);

  function handleSubmit(e) {
    e.preventDefault();
    setSending(true);

    switch (type) {
      case "add":
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_6__["Inertia"].post(route('feature_registration.store'), values).then(function () {
          setSending(false);
        });
        break;

      case "update":
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_6__["Inertia"].put(route('feature_registration.update', values.id), values).then(function () {
          setSending(false);
        });
        break;

      default:
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_6__["Inertia"].post(route('feature_registration.store'), values).then(function () {
          setSending(false);
        });
        break;
    }
  }

  function addService(e) {
    e.preventDefault();

    if (values.service_id !== "") {
      setValues(function (values) {
        return _objectSpread(_objectSpread({}, values), {}, {
          services: [].concat(_toConsumableArray(values.services), [serviceData.find(function (d) {
            return d.id == values.service_id;
          })])
        });
      });
    }
  }

  function removeService(e, service) {
    e.preventDefault();
    setValues(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, {
        services: _toConsumableArray(values.services.filter(function (fet) {
          return fet.id != service.id;
        }))
      });
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    $(document).ready(function () {
      window.setTimeout(function () {
        $(".alert").fadeTo(2000, 500).slideUp(500, function () {
          $(".alert").slideUp(500);
        });
      }, 2500);
    });
  }, [status, errors]);

  function renderForm() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: handleSubmit
    }, status && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "alert alert-primary alert-dismissible bg-primary text-white border-0 fade show",
      role: "alert"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      type: "button",
      className: "close",
      onClick: function onClick() {
        return setSuccess(false);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Success - "), " Operation was completed successfully!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextAreaInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "name",
      type: "text",
      placeholder: "Feature description",
      label: "Feature description",
      errors: errors.name,
      value: values.name,
      onChange: handleChange
    }), values.services && values.services.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Feature Services"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
      className: "table table-hover table-centered mb-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Service"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, values.services && values.services.length > 0 && values.services.map(function (service, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        key: index + 1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, service.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "btn btn-danger btn-sm",
        onClick: function onClick(e) {
          return removeService(e, service);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "dripicons-trash"
      }))));
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-lg-10"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_SelectInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: "service_id",
      placeholder: "Feature Services",
      label: "Feature Services",
      errors: errors.service_id,
      value: values.service_id,
      onChange: handleChange
    }, serviceData && serviceData.length > 0 && (serviceData === null || serviceData === void 0 ? void 0 : serviceData.map(function (service, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: service.id,
        key: index + 1
      }, service.name);
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-lg-2 my-auto"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "btn btn-primary btn-sm",
      onClick: addService
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "dripicons-plus"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "modal-footer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      type: "button",
      className: "btn btn-light",
      "data-dismiss": "modal"
    }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      type: "submit",
      className: "btn btn-primary btn-sm",
      loading: sending
    }, "Save Changes")));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Pages_Utilities_ModalForm__WEBPACK_IMPORTED_MODULE_0__["default"], {
    modalID: modalID,
    title: title ? title : "Add new package feature",
    renderForm: renderForm
  });
}

/***/ })

}]);