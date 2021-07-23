(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./resources/js/Pages/Services/services/components/AddServiceModal.jsx":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Services/services/components/AddServiceModal.jsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddServiceModal; });
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
/* harmony import */ var _Shared_CheckBoxInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../Shared/CheckBoxInput */ "./resources/js/Shared/CheckBoxInput.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function AddServiceModal(_ref) {
  var modalID = _ref.modalID,
      initialData = _ref.initialData,
      operation = _ref.operation,
      title = _ref.title;
  var _usePage$props = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__["usePage"])().props,
      errors = _usePage$props.errors,
      status = _usePage$props.status,
      alertType = _usePage$props.alertType;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialData),
      _useState2 = _slicedToArray(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      success = _useState4[0],
      setSuccess = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      sending = _useState6[0],
      setSending = _useState6[1];

  function handleChange(e) {
    var key = e.target.name;
    var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setValues(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, _defineProperty({}, key, value));
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setValues(initialData);
  }, [initialData]);

  function handleSubmit(e) {
    e.preventDefault();

    switch (operation) {
      case "add":
        setSending(true);
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__["Inertia"].post(route('services.store'), values).then(function () {
          setSending(false);
        });
        break;

      case "update":
        setSending(true);
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__["Inertia"].put(route('services.update', values.id), values).then(function () {
          setSending(false);
        });
        break;

      default:
        setSending(true);
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__["Inertia"].post(route('services.store'), values).then(function () {
          setSending(false);
        });
        break;
    }
  }

  function addCategory(name, description, status) {
    var category = {
      name: name,
      description: description,
      is_active: status
    }; // addServiceCategoryCB({variables: category});
  }

  function _updateCategory(id, name, description, status) {
    var category = {
      id: id,
      name: name,
      description: description
    }; // updateServiceCategory({variables: category});
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
      className: "alert alert-success alert-dismissible bg-primary text-white border-0 fade show",
      role: "alert"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      type: "button",
      className: "close",
      onClick: function onClick() {
        return setSuccess(false);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Success - "), " ", status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "name",
      type: "text",
      placeholder: "Service Name",
      label: "Service Name",
      errors: errors.name,
      value: values.name,
      onChange: handleChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextAreaInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
      name: "description",
      type: "text",
      placeholder: "Service description",
      label: "Service description",
      errors: errors.description,
      value: values.description,
      onChange: handleChange
    }), operation === "add" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_CheckBoxInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "is_active",
      placeholder: "Show service to public",
      label: "Show service to public",
      errors: errors.status,
      value: values.status,
      onChange: handleChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_CheckBoxInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "approved_at",
      label: "Approve Service",
      errors: errors.approved_at,
      value: values.approved_at,
      onChange: handleChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "text-muted"
    }, "If the above option is selected the public will see the service, otherwise the public will not see the category. You can edit it later on from service settings.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "modal-footer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      type: "button",
      className: "btn btn-light btn-sm",
      "data-dismiss": "modal"
    }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: "submit",
      className: "btn btn-primary btn-sm",
      loading: sending
    }, "Save Changes")));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Pages_Utilities_ModalForm__WEBPACK_IMPORTED_MODULE_0__["default"], {
    modalID: modalID,
    title: title ? title : "Add new Service",
    renderForm: renderForm
  });
}

/***/ }),

/***/ "./resources/js/Pages/Services/services/components/Heading.jsx":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Services/services/components/Heading.jsx ***!
  \*********************************************************************/
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
      search = _ref.search;

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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-title-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-title-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "app-search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Search...",
    id: "search-input",
    onInput: onSearch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "btn btn-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "uil uil-search"
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "page-title"
  }, title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-primary btn-sm ml-3",
    "data-toggle": "modal",
    "data-target": "#".concat(modalID)
  }, "Add New")), renderModal && renderModal());
}

/***/ }),

/***/ "./resources/js/Pages/Services/services/components/deleteDialog.jsx":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Services/services/components/deleteDialog.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeleteService; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function DeleteService(_ref) {
  var service = _ref.service;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      selectedService = _useState2[0],
      setService = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      sending = _useState4[0],
      setSending = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setService(service);
  }, [service]);

  function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__["Inertia"]["delete"](route('services.destroy', selectedService.id)).then(function () {
      setSending(false);
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "delete-service-".concat(selectedService.id),
    className: "modal fade",
    tabIndex: -1,
    role: "dialog",
    "aria-labelledby": "delete-categoryLabel",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-dialog"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-content modal-filled bg-danger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "modal-title",
    id: "delete-categoryLabel"
  }, "delete ", selectedService === null || selectedService === void 0 ? void 0 : selectedService.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-hidden": "true"
  }, "\xD7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body"
  }, "Are you sure you want to delete ", selectedService === null || selectedService === void 0 ? void 0 : selectedService.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-light",
    "data-dismiss": "modal"
  }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "btn btn-outline-light",
    "data-dismiss": "modal",
    onClick: handleSubmit
  }, "Delete ")))));
}

/***/ }),

/***/ "./resources/js/Pages/Services/services/components/index.js":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/Services/services/components/index.js ***!
  \******************************************************************/
/*! exports provided: AddServiceModal, Heading, InfoSideBar, Paginator, ServicesTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddServiceModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddServiceModal */ "./resources/js/Pages/Services/services/components/AddServiceModal.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddServiceModal", function() { return _AddServiceModal__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Heading */ "./resources/js/Pages/Services/services/components/Heading.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return _Heading__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _infosidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./infosidebar */ "./resources/js/Pages/Services/services/components/infosidebar.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoSideBar", function() { return _infosidebar__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paginator */ "./resources/js/Pages/Services/services/components/paginator.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Paginator", function() { return _paginator__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _servicesTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./servicesTable */ "./resources/js/Pages/Services/services/components/servicesTable.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServicesTable", function() { return _servicesTable__WEBPACK_IMPORTED_MODULE_4__["default"]; });








/***/ }),

/***/ "./resources/js/Pages/Services/services/components/infosidebar.jsx":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Services/services/components/infosidebar.jsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoSideBar; });
/* harmony import */ var _Pages_Services_services_components_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Pages/Services/services/components/index */ "./resources/js/Pages/Services/services/components/index.js");
/* harmony import */ var _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Pages/Utilities/Constants */ "./resources/js/Pages/Utilities/Constants.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _categories_components_AddCategoryModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../categories/components/AddCategoryModal */ "./resources/js/Pages/Services/categories/components/AddCategoryModal.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function InfoSideBar(_ref) {
  var selectedCategory = _ref.selectedCategory;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(selectedCategory),
      _useState2 = _slicedToArray(_useState, 2),
      category = _useState2[0],
      setCategory = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      subcategories = _useState4[0],
      setSubCategory = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      sending = _useState6[0],
      setSending = _useState6[1];

  function toggleCategoryVisibility() {
    var category = {
      id: selectedCategory.id,
      name: name,
      description: selectedCategory.description
    };
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "dropdown card-widgets"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "#",
    className: "dropdown-toggle arrow-none",
    "data-toggle": "dropdown",
    "aria-expanded": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "uil uil-ellipsis-h"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "dropdown-menu dropdown-menu-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "#",
    className: "dropdown-item",
    "data-toggle": "modal",
    "data-target": "#".concat(_Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__["UPDATE_SERVICE_MODAL_ID"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "uil uil-edit mr-1"
  }), "Edit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__["InertiaLink"], {
    href: route('services.visibility', selectedCategory.id),
    className: "dropdown-item"
  }, selectedCategory.is_active ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "uil uil-ban mr-1"
  }), "Hide from public") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "uil uil-eye mr-1"
  }), "Show to public")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__["InertiaLink"], {
    href: route('services.approval', selectedCategory.id),
    className: "dropdown-item"
  }, selectedCategory.approved_at ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "uil uil-ban mr-1"
  }), "Deny") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "uil uil-eye mr-1"
  }), "approve")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "dropdown-divider"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "",
    className: "dropdown-item text-danger",
    "data-toggle": "modal",
    "data-target": "#delete-service-".concat(selectedCategory.id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "uil uil-trash-alt mr-1"
  }), "Delete")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Pages_Services_services_components_index__WEBPACK_IMPORTED_MODULE_0__["AddServiceModal"], {
    modalID: _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__["UPDATE_SERVICE_MODAL_ID"],
    initialData: {
      name: selectedCategory.name,
      description: selectedCategory.description,
      id: selectedCategory.id
    },
    operation: "update",
    title: "Edit Service ".concat(selectedCategory.name)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", null, selectedCategory.name), selectedCategory.is_active ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "mdi mdi-circle text-success"
  }), " Visible to public") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "mdi mdi-circle text-danger"
  }), " Hidden from public"), selectedCategory.approved_at ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "pl-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "mdi mdi-circle text-success"
  }), " Approved") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "pl-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "mdi mdi-circle text-danger"
  }), " Not Approved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", {
    className: "mt-3 mb-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, selectedCategory.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "mt-2 mb-1 text-muted"
  }, "Created By"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "media"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "uil uil-user-square font-18 text-success mr-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "media-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
    className: "mt-1 font-14"
  }, selectedCategory.created_by)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "mt-2 mb-1 text-muted"
  }, "Approved by"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "media"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "uil uil-user-square font-18 text-success mr-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "media-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
    className: "mt-1 font-14"
  }, selectedCategory.approved_by)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "mt-2 mb-1 text-muted"
  }, "Created At"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "media"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "uil uil-schedule font-18 text-success mr-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "media-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
    className: "mt-1 font-14"
  }, selectedCategory.created_at)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "mt-2 mb-1 text-muted"
  }, "Approved At"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "media"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "uil uil-schedule font-18 text-success mr-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "media-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
    className: "mt-1 font-14"
  }, selectedCategory.approved_at)))))))));
}

/***/ }),

/***/ "./resources/js/Pages/Services/services/components/paginator.jsx":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Services/services/components/paginator.jsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Paginator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function Paginator(_ref) {
  var batchCount = _ref.batchCount,
      totalItems = _ref.totalItems,
      activePageCallBack = _ref.activePageCallBack;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([1]),
      _useState2 = _slicedToArray(_useState, 2),
      pages = _useState2[0],
      setPages = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    calculatePagination();
  }, [batchCount, totalItems]);

  function calculatePagination() {
    var _pages = Math.ceil(totalItems / batchCount);

    setPages(Array.from(Array(_pages).keys()));
  }

  function setActive(id) {
    pages.map(function (page) {
      $("#page-".concat(page)).removeClass('active');
    });
    $("#page-".concat(id)).addClass('active');
    activePageCallBack(id);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-12 col-md-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dataTables_info",
    id: "service-categories-table_info",
    role: "status",
    "aria-live": "polite"
  }, "Showing 1 to ", batchCount, " of ", totalItems, " entries")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-12 col-md-7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dataTables_paginate paging_simple_numbers float-right",
    id: "service-categories-table_paginate"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "pagination pagination-rounded"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "paginate_button page-item previous disabled",
    id: "service-categories-table_previous"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    "aria-controls": "service-categories-table",
    "data-dt-idx": "0",
    tabIndex: 0,
    className: "page-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "uil uil-angle-left"
  }))), pages.map(function (page) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "paginate_button page-item ".concat(page === 0 && 'active'),
      key: page,
      id: "page-".concat(page),
      onClick: function onClick() {
        return setActive(page);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      "aria-controls": "service-categories-table",
      "data-dt-idx": "".concat(page),
      tabIndex: 0,
      className: "page-link"
    }, page));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "paginate_button page-item next",
    id: "service-categories-table_next"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    "aria-controls": "service-categories-table",
    "data-dt-idx": "3",
    tabIndex: 0,
    className: "page-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "uil uil-angle-right"
  })))))));
}

/***/ }),

/***/ "./resources/js/Pages/Services/services/components/service.jsx":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Services/services/components/service.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Service; });
/* harmony import */ var _deleteDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteDialog */ "./resources/js/Pages/Services/services/components/deleteDialog.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Service(_ref) {
  var service = _ref.service,
      callback = _ref.callback;

  function chooseCategory() {
    callback(service);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    key: service.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    className: "text-dark",
    onClick: chooseCategory
  }, service.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, service.is_active ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "uil uil-eye font-16 mr-1 text-success"
  }), " Visible") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "uil uil-eye font-16 mr-1 text-danger"
  }), " Not Visible")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, service.approved_at ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "uil uil-check-circle font-16 mr-1 text-success"
  }), " Approved") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "uil uil-times-circle font-16 mr-1 text-danger"
  }), " Not Approved")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "table-action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    className: "btn btn-link dropdown-toggle",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    style: {
      lineHeight: 0.5,
      paddingTop: 0,
      paddingBottom: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "uil uil-bright font-16 mr-1 text-primary"
  }), "More"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "dropdown-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    className: "dropdown-item",
    onClick: chooseCategory
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "uil uil-eye mr-1"
  }), "Show info")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_deleteDialog__WEBPACK_IMPORTED_MODULE_0__["default"], {
    service: service
  })));
}

/***/ }),

/***/ "./resources/js/Pages/Services/services/components/servicesTable.jsx":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Services/services/components/servicesTable.jsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Pages/Utilities/Constants */ "./resources/js/Pages/Utilities/Constants.js");
/* harmony import */ var _Pages_Services_services_components_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Pages/Services/services/components/service */ "./resources/js/Pages/Services/services/components/service.jsx");




var ServicesTable = function ServicesTable(_ref) {
  var services = _ref.services,
      callback = _ref.callback;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    id: _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__["SERVICE_CATEGORIES_TABLE"],
    className: "table dt-responsive nowrap w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Public Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Approval Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, services.map(function (service, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_Services_services_components_service__WEBPACK_IMPORTED_MODULE_2__["default"], {
      service: service,
      callback: callback,
      key: index + 1
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ServicesTable);

/***/ })

}]);