(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./resources/js/Pages/Services/subcategories/components/infosidebar.jsx":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Services/subcategories/components/infosidebar.jsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoSideBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_services_subcategories_components_AddSubcategoryModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/pages/services/subcategories/components/AddSubcategoryModal */ "./resources/js/pages/services/subcategories/components/AddSubcategoryModal.jsx");
/* harmony import */ var _pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/pages/Utilities/Constants */ "./resources/js/pages/Utilities/Constants.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// import {selectSubcategory, updateSubcategory} from '@/pages/data/actions/serviceSubcategories';




function InfoSideBar() {
  var _useSelector = useSelector(function (state) {
    return state.subcategoriesStore;
  }),
      selectedSubcategory = _useSelector.selectedSubcategory;

  var _useSelector2 = useSelector(function (state) {
    return state.subcategoriesStore;
  }),
      subcategories = _useSelector2.subcategories;

  var _useSelector3 = useSelector(function (state) {
    return state.servicesStore;
  }),
      services = _useSelector3.services;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(services.slice(0, 5)),
      _useState2 = _slicedToArray(_useState, 2),
      shownServices = _useState2[0],
      setShownSubcategories = _useState2[1];

  var dispatch = useDispatch();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (subcategories.length > 0) {// dispatch(selectSubcategory(subcategories[0]))
    }
  }, []);

  function toggleSubcategoryVisibility() {// dispatch(updateSubcategory({...selectedSubcategory, is_active: !selectedSubcategory.is_active}))
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown card-widgets"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "dropdown-toggle arrow-none",
    "data-toggle": "dropdown",
    "aria-expanded": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "uil uil-ellipsis-h"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-menu dropdown-menu-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "javascript:void(0);",
    className: "dropdown-item",
    "data-toggle": "modal",
    "data-target": "#".concat(_pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_2__["UPDATE_CATEGORY_MODAL_ID"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "uil uil-edit mr-1"
  }), "Edit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "javascript:void(0);",
    className: "dropdown-item",
    onClick: toggleSubcategoryVisibility
  }, selectedSubcategory.is_active ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "uil uil-ban mr-1"
  }), "Hide from public") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "uil uil-eye mr-1"
  }), "Show to public")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-divider"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "javascript:void(0);",
    className: "dropdown-item text-danger",
    "data-toggle": "modal",
    "data-target": "#delete-category"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "uil uil-trash-alt mr-1"
  }), "Delete")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_services_subcategories_components_AddSubcategoryModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    modalID: _pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_2__["UPDATE_CATEGORY_MODAL_ID"],
    initialData: {
      name: selectedSubcategory.name,
      description: selectedSubcategory.description,
      status: false,
      id: selectedSubcategory.id
    },
    operation: "update",
    title: "Edit category ".concat(selectedSubcategory.name)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, selectedSubcategory.name), selectedSubcategory.is_active ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-circle text-success"
  }), " Visible to public") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-circle text-danger"
  }), " Hidden from public"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "mt-3 mb-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, selectedSubcategory.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mt-2 mb-1 text-muted"
  }, "Created At"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "media"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "uil uil-schedule font-18 text-success mr-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "media-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "mt-1 font-14"
  }, selectedSubcategory.created_at)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mt-2 mb-1 text-muted"
  }, "Updated At"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "media"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "uil uil-schedule font-18 text-success mr-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "media-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "mt-1 font-14"
  }, selectedSubcategory.updated_at))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "header-title my-3"
  }, "Services (", selectedSubcategory.services.length, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-sm table-centered mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
    className: "thead-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Public status"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, selectedSubcategory.services.slice(0, 9).map(function (subcategory) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, subcategory.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, subcategory.is_active ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "uil uil-eye font-16 mr-1 text-success"
    }), " Visible") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "uil uil-eye font-16 mr-1 text-danger"
    }), " Not Visible")));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__["InertiaLink"], {
    href: "/services/services/".concat(selectedSubcategory.id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "btn btn-primary btn-block mt-2"
  }, "See services"))))));
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

/***/ }),

/***/ "./resources/js/pages/Utilities/FormInputError.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/pages/Utilities/FormInputError.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormInputError; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function FormInputError(_ref) {
  var title = _ref.title,
      message = _ref.message;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["React"].createElement("div", {
    className: "alert alert-danger bg-danger text-white border-0 fade show mt-1",
    role: "alert"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["React"].createElement("strong", null, title, " - "), " ", message);
}

/***/ }),

/***/ "./resources/js/pages/Utilities/ModalForm.jsx":
/*!****************************************************!*\
  !*** ./resources/js/pages/Utilities/ModalForm.jsx ***!
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["React"].createElement("div", {
    id: modalID,
    className: "modal fade",
    tabIndex: -1,
    role: "dialog",
    "data-backdrop": "static",
    "aria-labelledby": "".concat(modalID, "Label"),
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["React"].createElement("div", {
    className: "modal-dialog ".concat(size === 'large' ? 'modal-lg modal-dialog-scrollable' : null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["React"].createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["React"].createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["React"].createElement("h4", {
    className: "modal-title",
    id: "".concat(modalID, "Label")
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["React"].createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-hidden": "true"
  }, "\xD7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["React"].createElement("div", {
    className: "modal-body"
  }, renderForm()))));
}

/***/ }),

/***/ "./resources/js/pages/services/subcategories/components/AddSubcategoryModal.jsx":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/services/subcategories/components/AddSubcategoryModal.jsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddSubcategoryModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_Utilities_FormInputError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/pages/Utilities/FormInputError */ "./resources/js/pages/Utilities/FormInputError.jsx");
/* harmony import */ var _pages_Utilities_ModalForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/pages/Utilities/ModalForm */ "./resources/js/pages/Utilities/ModalForm.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// import {
//   addServiceSubcategory,
//   updateSubcategory,
// } from "@/pages/data/actions/serviceSubcategories";



function AddSubcategoryModal(_ref) {
  var modalID = _ref.modalID,
      initialData = _ref.initialData,
      operation = _ref.operation,
      title = _ref.title;
  var initialValues = {
    name: "",
    description: "No description",
    status: false
  };

  var _useSelector = useSelector(function (state) {
    return state.subcategoriesStore;
  }),
      selectedSubcategory = _useSelector.selectedSubcategory;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      success = _useState2[0],
      setSuccess = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (updateServiceSubcategoryResponse.data) {
      setSuccess(true);
      var timer = setTimeout(function () {
        setSuccess(false);
        clearTimeout(timer);
      }, 5000);
      dispatch(updateSubcategory(updateServiceSubcategoryResponse.data.updateServiceSubCategory));
    }
  }, [updateServiceSubcategoryResponse.data]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (addServiceSubcategoryResponse.data) {
      setSuccess(true);
      var timer = setTimeout(function () {
        setSuccess(false);
        clearTimeout(timer);
      }, 5000);
      dispatch(addServiceSubcategory(addServiceSubcategoryResponse.data.createServiceSubCategory));
    }
  }, [addServiceSubcategoryResponse.data]);

  function onSubmit(values, _ref2) {
    var setSubmitting = _ref2.setSubmitting;
    setTimeout(function () {
      switch (operation) {
        case "add":
          addSubcategory(values.name, values.description, values.status);
          break;

        case "update":
          _updateSubcategory(values.name, values.description, selectedSubcategory.is_active);

          break;

        default:
          addSubcategory(values.name, values.description, values.status);
          break;
      }

      setSubmitting(false);
    }, 500);
  }

  function addSubcategory(name, description, status) {
    var subcategory = {
      name: name,
      description: description,
      is_active: status,
      service_category_id: parseInt(category_id)
    };
    addServiceSubcategoryCB({
      variables: subcategory
    });
  }

  function _updateSubcategory(name, description, status) {
    var subcategory = {
      id: selectedSubcategory.id,
      name: name,
      description: description,
      service_category_id: parseInt(category_id)
    };
    updateServiceSubcategory({
      variables: subcategory
    });
  }

  function renderForm() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, status && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
    }, "\xD7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Success - "), " Operation was completed successfully!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "name"
    }, "Subcategory name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Field, {
      id: "name",
      name: "name",
      placeholder: "category name",
      type: "text",
      className: "form-control"
    }), errors.name && touched.name ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Utilities_FormInputError__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Category name error",
      message: errors.name
    }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "description"
    }, "Subcategory description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Field, {
      id: "description",
      name: "description",
      placeholder: "description",
      as: "textarea",
      className: "form-control",
      rows: 3
    }), errors.description && touched.description ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Utilities_FormInputError__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Description error",
      message: errors.description
    }) : null), operation === "add" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "custom-control custom-switch form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Field, {
      type: "checkbox",
      className: "custom-control-input",
      id: "status",
      name: "status"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "custom-control-label",
      htmlFor: "status"
    }, "Show subcategory to public")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "text-muted"
    }, "If the above option is selected the public will see the category, otherwise the public will not see the category. You can edit it later on from category settings.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "modal-footer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      className: "btn btn-light",
      "data-dismiss": "modal"
    }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      className: "btn btn-primary",
      disabled: updateServiceSubcategoryResponse.loading || addServiceSubcategoryResponse.loading
    }, operation === "add" ? addServiceSubcategoryResponse.loading && addServiceSubcategoryResponse.called ? "Adding..." : "Add subcategory" : updateServiceSubcategoryResponse.loading && updateServiceSubcategoryResponse.called ? "Updating..." : "Update subcategory")));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Utilities_ModalForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    modalID: modalID,
    title: title ? title : "Add new service subcategory",
    renderForm: renderForm
  });
}

/***/ })

}]);