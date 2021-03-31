(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/Heading.jsx":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/Heading.jsx ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Heading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Heading(_ref) {
  var title = _ref.title,
      renderModal = _ref.renderModal,
      modalID = _ref.modalID,
      search = _ref.search,
      buttonText = _ref.buttonText,
      _ref$showSearch = _ref.showSearch,
      showSearch = _ref$showSearch === void 0 ? true : _ref$showSearch;

  function onSearch() {
    $('#search-input').on('input', function (e) {
      var input = $(this);
      var val = input.val();

      if (input.data("lastval") != val) {
        input.data("lastval", val);
        search(val);
      }
    });
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "page-title-box"
  }, showSearch && /*#__PURE__*/React.createElement("div", {
    className: "page-title-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-search"
  }, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Search...",
    id: "search-input",
    onInput: onSearch
  }), /*#__PURE__*/React.createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/React.createElement("span", {
    className: "btn btn-primary"
  }, /*#__PURE__*/React.createElement("i", {
    className: "uil uil-search"
  }))))))), /*#__PURE__*/React.createElement("h4", {
    className: "page-title"
  }, title, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-primary btn-sm ml-3",
    "data-toggle": "modal",
    "data-target": "#".concat(modalID)
  }, /*#__PURE__*/React.createElement("i", {
    className: "uil uil-plus mr-1"
  }), buttonText)), renderModal && renderModal());
}

/***/ }),

/***/ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/RegisteredServices.jsx":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/RegisteredServices.jsx ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegisteredServices; });
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


function RegisteredServices(_ref) {
  var services = _ref.services,
      callback = _ref.callback;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_toConsumableArray(services)),
      _useState2 = _slicedToArray(_useState, 2),
      shownServices = _useState2[0],
      setShownServices = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setShownServices(services.slice(0, 5));
  }, []);

  function onSearch() {
    $('#search-input-registered').on('input', function (e) {
      var input = $(this);
      var val = input.val();

      if (input.data("lastval") != val) {
        input.data("lastval", val);
        console.log(val);
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
    id: "search-input-registered",
    onInput: onSearch
  }))))), /*#__PURE__*/React.createElement("table", {
    className: "table table-centered table-borderless mb-0"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Price"), /*#__PURE__*/React.createElement("th", null, "Action"))), /*#__PURE__*/React.createElement("tbody", null, shownServices.slice(0, 4).map(function (service) {
    return /*#__PURE__*/React.createElement("tr", {
      key: service.id
    }, /*#__PURE__*/React.createElement("td", null, service.name), /*#__PURE__*/React.createElement("td", null, "".concat(service.pivot.price, " ").concat(service.pivot.currency)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
      href: "#",
      className: "btn btn-danger btn-sm"
    }, /*#__PURE__*/React.createElement("i", {
      className: "dripicons-trash"
    }))));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ml-5 mt-2"
  }, /*#__PURE__*/React.createElement("i", null, services.length > 0 ? 'Search to see more services...' : 'There are no registered services')));
}

/***/ }),

/***/ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/RequestServiceModal.jsx":
/*!********************************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/RequestServiceModal.jsx ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RequestServiceModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pages_Utilities_ModalForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Pages/Utilities/ModalForm */ "./resources/js/Pages/Utilities/ModalForm.jsx");
/* harmony import */ var _Shared_TextInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/TextInput */ "./resources/js/Shared/TextInput.js");
/* harmony import */ var _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/LoadingButton */ "./resources/js/Shared/LoadingButton.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function RequestServiceModal(_ref) {
  var modalID = _ref.modalID,
      operation = _ref.operation,
      title = _ref.title;
  var initialValues = {
    name: "",
    description: "No description"
  };

  var _useSelector = useSelector(function (state) {
    return state.servicesStore;
  }),
      selectedService = _useSelector.selectedService;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      success = _useState2[0],
      setSuccess = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (addServiceCBResponse.data) {
      setSuccess(true);
      var timer = setTimeout(function () {
        setSuccess(false);
        clearTimeout(timer);
      }, 5000);
    }
  }, [addServiceCBResponse.data]);

  function onSubmit(values, _ref2) {
    var setSubmitting = _ref2.setSubmitting;
    setTimeout(function () {
      _addService(values.name, values.description);

      setSubmitting(false);
    }, 500);
  }

  function _addService(name, description) {
    var service = {
      name: name,
      description: description
    };
    addServiceCB({
      variables: {
        input: service
      }
    });
  }

  function renderForm() {
    return addServiceCBResponse.called && addServiceCBResponse.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Spinner, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Formik, {
      initialValues: initialValues,
      onSubmit: onSubmit,
      validationSchema: ServiceSchema,
      enableReinitialize: true
    }, function (_ref3) {
      var errors = _ref3.errors,
          touched = _ref3.touched,
          setFieldValue = _ref3.setFieldValue;
      Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (operation === "update") {
          setFieldValue("name", selectedService.name);
          setFieldValue("description", selectedService.description || 'No description');
        }
      }, [selectedService]);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, success && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "alert alert-success alert-dismissible bg-success text-white border-0 fade show",
        role: "alert"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "close",
        onClick: function onClick() {
          return setSuccess(false);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        "aria-hidden": "true"
      }, "\xD7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Success - "), " Operation was completed successfully!"), addServiceCBResponse.errors && addServiceCBResponse.errors.map(function (error) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "alert alert-danger alert-dismissible bg-danger text-white border-0 fade show",
          role: "alert"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          type: "button",
          className: "close",
          "data-dismiss": "alert",
          "aria-label": "Close"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          "aria-hidden": "true"
        }, "\xD7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Error - "), " ", error.message);
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "name",
        type: "text",
        placeholder: "Service Name",
        label: "Service Name",
        errors: errors.name,
        value: values.name,
        onChange: handleChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "description",
        type: "text",
        placeholder: "Service Description",
        label: "Service Description",
        errors: errors.description,
        value: values.description,
        onChange: handleChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-footer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "btn btn-light",
        "data-dismiss": "modal"
      }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "submit",
        className: "btn btn-primary btn-block",
        loading: sending
      }, "Save Changes")));
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_Utilities_ModalForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    modalID: modalID,
    title: title ? title : "Request new service",
    renderForm: renderForm
  });
}

/***/ }),

/***/ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/Services.jsx":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/Services.jsx ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Services; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pages_ServiceProviderProfileCompletion_components_profile_Heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Pages/ServiceProviderProfileCompletion/components/profile/Heading */ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/Heading.jsx");
/* harmony import */ var _pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/pages/Utilities/Constants */ "./resources/js/pages/Utilities/Constants.js");
/* harmony import */ var _Pages_ServiceProviderProfileCompletion_components_profile_RegisteredServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Pages/ServiceProviderProfileCompletion/components/profile/RegisteredServices */ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/RegisteredServices.jsx");
/* harmony import */ var _Pages_ServiceProviderProfileCompletion_components_profile_RequestServiceModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Pages/ServiceProviderProfileCompletion/components/profile/RequestServiceModal */ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/RequestServiceModal.jsx");
/* harmony import */ var _Pages_ServiceProviderProfileCompletion_components_profile_UnregisteredServices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Pages/ServiceProviderProfileCompletion/components/profile/UnregisteredServices */ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/UnregisteredServices.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function Services(_ref) {
  var user = _ref.user;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      services = _useState2[0],
      setServices = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      registeredServices = _useState4[0],
      setRegisteredServices = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(facilities[0]),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedFacility = _useState6[0],
      setSelectedFacility = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var data = queryServicesResponse.data;

    if (data && data.services) {
      setServices(data.services);
    }
  }, [queryServicesResponse.data]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var data = queryRegisteredServicesResponse.data;

    if (data && data.providerProfileServicesInfo) {
      setRegisteredServices(data.providerProfileServicesInfo);
    }
  }, [queryRegisteredServicesResponse.data]);

  function submitForVerification() {
    submitRequest({});
  }

  function synchronize() {
    queryRegisteredServices({});
  }

  function searchQualifications() {}

  function renderAddSubcategoryModal() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_ServiceProviderProfileCompletion_components_profile_RequestServiceModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
      modalID: _pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_2__["REQUEST_SERVICE_MODAL_ID"],
      operation: "add"
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-pane fade",
    id: "v-pills-services",
    role: "tabpanel",
    "aria-labelledby": "v-pills-services-tab"
  }, user.provider_profile.account_category_type === 'company' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Select Facility"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "custom-select mb-1"
  }, facilities.map(function (facility) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: facility.id,
      onSelect: function onSelect() {
        return setSelectedFacility(facility);
      }
    }, facility.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_ServiceProviderProfileCompletion_components_profile_Heading__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Request Service for ".concat(selectedFacility.name),
    modalID: _pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_2__["REQUEST_SERVICE_MODAL_ID"],
    buttonText: "Request",
    search: searchQualifications,
    renderModal: renderAddSubcategoryModal,
    showSearch: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-6"
  }, queryServicesResponse.called && queryServicesResponse.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Spinner, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_ServiceProviderProfileCompletion_components_profile_UnregisteredServices__WEBPACK_IMPORTED_MODULE_5__["default"], {
    services: services,
    callback: synchronize
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-6"
  }, queryRegisteredServicesResponse.called && queryRegisteredServicesResponse.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Spinner, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_ServiceProviderProfileCompletion_components_profile_RegisteredServices__WEBPACK_IMPORTED_MODULE_3__["default"], {
    services: registeredServices,
    callback: synchronize
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 text-right"
  }, submitRequestResponse.called && submitRequestResponse.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Spinner, null) : registeredServices.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    onClick: submitForVerification
  }, "Submit for verification"))));
}

/***/ }),

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

/***/ }),

/***/ "./resources/js/pages/Utilities/Constants.js":
/*!***************************************************!*\
  !*** ./resources/js/pages/Utilities/Constants.js ***!
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

/***/ })

}]);