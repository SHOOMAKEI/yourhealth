(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

/***/ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/UnregisteredServices.jsx":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/UnregisteredServices.jsx ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UnregisteredServices; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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


function UnregisteredServices(_ref) {
  var services = _ref.services,
      callback = _ref.callback;
  var initialValues = {
    price: 0,
    currency: "TZS"
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_toConsumableArray(services)),
      _useState2 = _slicedToArray(_useState, 2),
      shownServices = _useState2[0],
      setShownServices = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedService = _useState4[0],
      setSelectedService = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      success = _useState6[0],
      setSuccess = _useState6[1];

  function onSubmit(values, _ref2) {
    var setSubmitting = _ref2.setSubmitting;
    var _registeredService = [{
      service_id: selectedService.id,
      price: values.price,
      currency: values.currency,
      compare_price: 0
    }];
    registerService({
      variables: {
        input: _registeredService
      }
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var data = registerServiceResponse.data;

    if (data && data.createProviderProfileServices) {
      callback();
      setSuccess(true);
      var timer = setTimeout(function () {
        setSuccess(false);
        clearTimeout(timer);
      }, 5000);
    }
  }, [registerServiceResponse.data]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setShownServices(services.slice(0, 5));
  }, []);

  function onSearch() {
    $('#search-input-unregistered').on('input', function (e) {
      var input = $(this);
      var val = input.val();

      if (input.data("lastval") != val) {
        input.data("lastval", val);
        var newShownServices = services.filter(function (service) {
          if (service.name.toLocaleLowerCase().includes(val)) {
            return service;
          }
        });
        setShownServices(newShownServices);
      }
    });
  }

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "page-title-right mb-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-search"
  }, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Search...",
    id: "search-input-unregistered",
    onInput: onSearch
  }))))), /*#__PURE__*/React.createElement("table", {
    className: "table table-centered table-borderless mb-0"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Action"))), /*#__PURE__*/React.createElement("tbody", null, shownServices.slice(0, 4).map(function (service) {
    return /*#__PURE__*/React.createElement("tr", {
      key: service.id
    }, /*#__PURE__*/React.createElement("td", null, service.name), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "btn btn-light btn-sm",
      "data-toggle": "modal",
      "data-target": "#bs-example-modal-sm",
      onClick: function onClick() {
        return setSelectedService(service);
      }
    }, "Add")));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ml-5 mt-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal fade",
    id: "bs-example-modal-sm",
    tabIndex: -1,
    role: "dialog",
    "aria-labelledby": "mySmallModalLabel",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-dialog"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "modal-title",
    id: "mySmallModalLabel"
  }, "Register ", selectedService.name), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-hidden": "true"
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, success && /*#__PURE__*/React.createElement("div", {
    className: "alert alert-success alert-dismissible bg-success text-white border-0 fade show",
    role: "alert"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "close",
    onClick: function onClick() {
      return setSuccess(false);
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")), /*#__PURE__*/React.createElement("strong", null, "Success - "), " Operation was completed successfully!"), registerServiceResponse.called && registerServiceResponse.loading ? /*#__PURE__*/React.createElement(Spinner, null) : /*#__PURE__*/React.createElement(Formik, {
    initialValues: initialValues,
    onSubmit: onSubmit,
    validationSchema: ServiceRegistrationSchema
  }, function (_ref3) {
    var errors = _ref3.errors,
        touched = _ref3.touched;
    return /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "price"
    }, "Price"), /*#__PURE__*/React.createElement(Field, {
      id: "price",
      name: "price",
      placeholder: "John",
      type: "text",
      className: "form-control"
    }), errors.price && touched.price ? /*#__PURE__*/React.createElement(FormInputError, {
      title: "Price error",
      message: errors.price
    }) : null)), /*#__PURE__*/React.createElement("div", {
      className: "col-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "currency"
    }, "Currency"), /*#__PURE__*/React.createElement(Field, {
      as: "select",
      name: "currency",
      id: "currency",
      className: "form-control"
    }, /*#__PURE__*/React.createElement("option", {
      value: "TZS"
    }, "TZS"), /*#__PURE__*/React.createElement("option", {
      value: "KES"
    }, "KES"), /*#__PURE__*/React.createElement("option", {
      value: "UGS"
    }, "UGS")), errors.currency && touched.currency ? /*#__PURE__*/React.createElement(FormInputError, {
      currency: "Currency error",
      message: errors.currency
    }) : null))), /*#__PURE__*/React.createElement("div", {
      className: "form-group mb-0 text-right"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "btn btn-light mr-3",
      "data-dismiss": "modal"
    }, "Close"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      type: "submit"
    }, " Register ")));
  }))))), /*#__PURE__*/React.createElement("i", null, services.length > 0 ? 'Search to see more services...' : 'There are no registered services')));
}

/***/ })

}]);