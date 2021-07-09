(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./resources/js/Pages/Services/packages/package/AddPackageModal.jsx":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Services/packages/package/AddPackageModal.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddPackageModal; });
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










function AddPackageModal(_ref) {
  var modalID = _ref.modalID,
      operation = _ref.operation,
      title = _ref.title,
      initialData = _ref.initialData,
      memberships = _ref.memberships,
      ranges = _ref.ranges,
      features = _ref.features;
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
      featureData = _useState4[0],
      setFeatureData = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState6 = _slicedToArray(_useState5, 2),
      rangeData = _useState6[0],
      setRangeData = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState8 = _slicedToArray(_useState7, 2),
      membershipData = _useState8[0],
      setMembershipData = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState10 = _slicedToArray(_useState9, 2),
      values = _useState10[0],
      setValues = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState12 = _slicedToArray(_useState11, 2),
      success = _useState12[0],
      setSuccess = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState14 = _slicedToArray(_useState13, 2),
      sending = _useState14[0],
      setSending = _useState14[1];

  function handleChange(e) {
    var key = e.target.name;
    var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setValues(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, _defineProperty({}, key, value));
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setFeatureData(features);
    setRangeData(ranges);
    setMembershipData(memberships);
  }, [features, ranges, memberships]);

  function addFeature(e) {
    e.preventDefault();

    if (values.package_feature_id !== "") {
      setValues(function (values) {
        return _objectSpread(_objectSpread({}, values), {}, {
          features: [].concat(_toConsumableArray(values.features), [featureData.find(function (d) {
            return d.id == values.package_feature_id;
          })])
        });
      });
    }
  }

  function removeFeature(e, feature) {
    e.preventDefault();
    setValues(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, {
        features: _toConsumableArray(values.features.filter(function (fet) {
          return fet.id != feature.id;
        }))
      });
    });
  }

  function addRange(e) {
    e.preventDefault();

    if (values.package_member_range_id !== "") {
      setValues(function (values) {
        return _objectSpread(_objectSpread({}, values), {}, {
          ranges: [].concat(_toConsumableArray(values.ranges), [rangeData.find(function (d) {
            return d.id == values.package_member_range_id;
          })])
        });
      });
    }
  }

  function removeRange(e, range) {
    e.preventDefault();
    setValues(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, {
        ranges: _toConsumableArray(values.ranges.filter(function (fet) {
          return fet.id != range.id;
        }))
      });
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return setValues(function (values) {
      return initialData;
    });
  }, [initialData]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return setType(operation);
  }, [operation]);

  function handleSubmit(e) {
    e.preventDefault();
    setSending(true);

    switch (type) {
      case "add":
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_6__["Inertia"].post(route('packages_registration.store'), values).then(function () {
          setSending(false);
        });
        break;

      case "update":
        if (values.clone) {
          _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_6__["Inertia"].post(route('packages_registration.store'), values).then(function () {
            setSending(false);
          });
        }

        if (!values.clone) {
          _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_6__["Inertia"].put(route('packages_registration.update', values.id), values).then(function () {
            setSending(false);
          });
        }

        break;

      default:
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_6__["Inertia"].post(route('packages_registration.store'), values).then(function () {
          setSending(false);
        });
        break;
    }
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
    }, "\xD7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Success - "), " Operation was completed successfully!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_SelectInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: "membership_category_id",
      placeholder: "Membership Category Name",
      label: "Membership Category Name",
      errors: errors.membership_category_id,
      value: values.membership_category_id,
      onChange: handleChange
    }, membershipData && membershipData.length > 0 && (membershipData === null || membershipData === void 0 ? void 0 : membershipData.map(function (membership, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: membership.id,
        key: index + 1
      }, membership.name);
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "name",
      type: "text",
      placeholder: "Package Name",
      label: "Package Name",
      errors: errors.name,
      value: values.name,
      onChange: handleChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "price",
      type: "number",
      placeholder: "Price (For Individual and Family category)",
      label: "Price (For Individual and Family category)",
      errors: errors.price,
      value: values.price,
      onChange: handleChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_SelectInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: "currency",
      type: "text",
      placeholder: "Currency (For Individual and Family category)",
      label: "Currency (For Individual and Family category)",
      errors: errors.currency,
      value: values.currency,
      onChange: handleChange
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "TZS"
    }, "TZS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "USD"
    }, "USD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "KES"
    }, "KES"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "UGS"
    }, "UGS")), values.features && values.features.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Package Features"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
      className: "table table-hover table-centered mb-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Feature"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Services"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, values.features && values.features.length > 0 && values.features.map(function (feature, index) {
      var _feature$services;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        key: index + 1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, feature.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, feature.services.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, (_feature$services = feature.services) === null || _feature$services === void 0 ? void 0 : _feature$services.map(function (service, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          key: index + 1
        }, service.name);
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "btn btn-danger btn-sm",
        onClick: function onClick(e) {
          return removeFeature(e, feature);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "dripicons-trash"
      }))));
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-lg-10"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_SelectInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: "package_feature_id",
      placeholder: "Package Feature",
      label: "Package Feature",
      errors: errors.package_feature_id,
      value: values.package_feature_id,
      onChange: handleChange
    }, featureData && featureData.length > 0 && (featureData === null || featureData === void 0 ? void 0 : featureData.map(function (feature, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: feature.id,
        key: index + 1
      }, feature.name, " ");
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-lg-2 my-auto"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "btn btn-primary btn-sm",
      onClick: addFeature
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "dripicons-plus"
    })))), values.ranges && values.ranges.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Stuff Members"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
      className: "table table-hover table-centered mb-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Range"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, values.ranges && values.ranges.length > 0 && values.ranges.map(function (range, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        key: index + 1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, range.min, " - ", range.max), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, range.price, " ", range.currency), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "btn btn-danger btn-sm",
        onClick: function onClick(e) {
          return removeRange(e, range);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "dripicons-trash"
      }))));
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-lg-10"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_SelectInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: "package_member_range_id",
      placeholder: "Package Stuff Member",
      label: "Package Stuff Member",
      errors: errors.package_member_range_id,
      value: values.package_member_range_id,
      onChange: handleChange
    }, rangeData && rangeData.length > 0 && (rangeData === null || rangeData === void 0 ? void 0 : rangeData.map(function (range, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: range.id,
        key: index + 1
      }, range.min, " - ", range.max, "  (", range.price, " ", range.currency, ")");
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-lg-2 my-auto"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "btn btn-primary btn-sm",
      onClick: addRange
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "dripicons-plus"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_CheckBoxInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "is_active",
      placeholder: "Show membership to public",
      label: "Show membership to public",
      errors: errors.is_active,
      value: values.is_active,
      onChange: handleChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "text-muted"
    }, "If the above option is selected the public will see the membership, otherwise the public will not see the membership. You can edit it later on from package settings.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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
    title: title ? title : "Add new Package",
    renderForm: renderForm,
    size: "large"
  });
}

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

/***/ })

}]);