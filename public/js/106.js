(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[106],{

/***/ "./resources/js/Pages/Services/packages/package/List.jsx":
/*!***************************************************************!*\
  !*** ./resources/js/Pages/Services/packages/package/List.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Pages/Utilities/Constants */ "./resources/js/Pages/Utilities/Constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function List(_ref) {
  var memberships = _ref.memberships,
      callback = _ref.callback;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      selectedData = _useState2[0],
      setSelectedData = _useState2[1];

  function _selectMembership(membership) {
    var clone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (clone) {
      setSelectedData(_objectSpread(_objectSpread({}, membership), {}, {
        clone: true
      }));
      callback(selectedData);
    }

    if (!clone) {
      setSelectedData(_objectSpread(_objectSpread({}, membership), {}, {
        clone: false
      }));
      callback(selectedData);
    }
  }

  $(document).ready(function () {
    $('#package-packages-table').DataTable();
    $('.dataTables_filter input[type="search"]').css({
      'width': '145px',
      'display': 'inline-block'
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    id: "package-packages-table",
    className: "table table-centered table-border mb-0 font-14"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "membership type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, " Created At"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, memberships.map(function (membership, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: index + 1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, membership.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, membership.membership_category.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, membership.created_at), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " ", membership.is_active ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "badge badge-success-lighten p-1"
    }, " Enabled") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "badge badge-danger-lighten p-1"
    }, " Disabled")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "uil uil-bright font-16 mr-1 text-primary"
    }), "More"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "dropdown-menu"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      className: "dropdown-item",
      "data-toggle": "modal",
      "data-target": "#".concat(_Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__["PACKAGE_INFO_MODAL_ID"]),
      onClick: function onClick() {
        return _selectMembership(membership);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "uil uil-eye mr-1"
    }), "show details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      className: "dropdown-item",
      "data-toggle": "modal",
      "data-target": "#".concat(_Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__["ADD_PACKAGE_MODAL_ID"]),
      onClick: function onClick() {
        return _selectMembership(membership, true);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "uil uil-plus mr-1"
    }), "Create new form this"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      className: "dropdown-item",
      "data-toggle": "modal",
      "data-target": "#".concat(_Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__["ADD_PACKAGE_MODAL_ID"]),
      onClick: function onClick() {
        return _selectMembership(membership);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "uil uil-edit mr-1"
    }), "Edit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "dropdown-divider"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "",
      className: "dropdown-item text-danger",
      "data-toggle": "modal",
      "data-target": "#delete-membership-".concat(membership.id),
      onClick: function onClick() {
        return _selectMembership(membership);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "uil uil-trash-alt mr-1"
    }), "Delete"))));
  }))));
}

/***/ }),

/***/ "./resources/js/Pages/Utilities/Constants.js":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Utilities/Constants.js ***!
  \***************************************************/
/*! exports provided: ADD_CATEGORY_MODAL_ID, UPDATE_CATEGORY_MODAL_ID, SERVICE_CATEGORIES_TABLE, PROVIDER_PROFILE_MODAL_ID, ADD_MEMBERSHIP_MODAL_ID, ADD_PACKAGE_MODAL_ID, PACKAGE_INFO_MODAL_ID, ADD_FEATURE_MODAL_ID, ADD_RANGE_MODAL_ID, UPDATE_MEMBERSHIP_MODAL_ID, ADD_FACILITY_MODAL_ID, EDIT_FACILITY_MODAL_ID, ADD_QUALIFICATION_MODAL_ID, ADD_MEDICAL_REGISTRATION_MODAL_ID, REQUEST_SERVICE_MODAL_ID, SET_SERVICE_MODAL_PRICE, ADD_SERVICE_MODAL_ID, UPDATE_SERVICE_MODAL_ID, ADD_SUB_CATEGORY_MODAL_ID, UPDATE_SUB_CATEGORY_MODAL_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CATEGORY_MODAL_ID", function() { return ADD_CATEGORY_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CATEGORY_MODAL_ID", function() { return UPDATE_CATEGORY_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICE_CATEGORIES_TABLE", function() { return SERVICE_CATEGORIES_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROVIDER_PROFILE_MODAL_ID", function() { return PROVIDER_PROFILE_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MEMBERSHIP_MODAL_ID", function() { return ADD_MEMBERSHIP_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PACKAGE_MODAL_ID", function() { return ADD_PACKAGE_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PACKAGE_INFO_MODAL_ID", function() { return PACKAGE_INFO_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_FEATURE_MODAL_ID", function() { return ADD_FEATURE_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_RANGE_MODAL_ID", function() { return ADD_RANGE_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MEMBERSHIP_MODAL_ID", function() { return UPDATE_MEMBERSHIP_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_FACILITY_MODAL_ID", function() { return ADD_FACILITY_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_FACILITY_MODAL_ID", function() { return EDIT_FACILITY_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUALIFICATION_MODAL_ID", function() { return ADD_QUALIFICATION_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MEDICAL_REGISTRATION_MODAL_ID", function() { return ADD_MEDICAL_REGISTRATION_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_SERVICE_MODAL_ID", function() { return REQUEST_SERVICE_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SERVICE_MODAL_PRICE", function() { return SET_SERVICE_MODAL_PRICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SERVICE_MODAL_ID", function() { return ADD_SERVICE_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SERVICE_MODAL_ID", function() { return UPDATE_SERVICE_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SUB_CATEGORY_MODAL_ID", function() { return ADD_SUB_CATEGORY_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SUB_CATEGORY_MODAL_ID", function() { return UPDATE_SUB_CATEGORY_MODAL_ID; });
var ADD_CATEGORY_MODAL_ID = "add-category-modal";
var UPDATE_CATEGORY_MODAL_ID = "update-category-modal";
var SERVICE_CATEGORIES_TABLE = 'service-categories-table';
var PROVIDER_PROFILE_MODAL_ID = 'service-provider-profile-modal';
var ADD_MEMBERSHIP_MODAL_ID = 'add-membership-modal';
var ADD_PACKAGE_MODAL_ID = 'add-package-modal';
var PACKAGE_INFO_MODAL_ID = 'add-package-info-modal';
var ADD_FEATURE_MODAL_ID = 'add-feature-modal';
var ADD_RANGE_MODAL_ID = 'add-range-modal';
var UPDATE_MEMBERSHIP_MODAL_ID = 'update-service-modal';
var ADD_FACILITY_MODAL_ID = 'add-facility-modal';
var EDIT_FACILITY_MODAL_ID = 'edit-facility-modal';
var ADD_QUALIFICATION_MODAL_ID = 'add-qualifications-modal';
var ADD_MEDICAL_REGISTRATION_MODAL_ID = 'add-medical-registration-modal';
var REQUEST_SERVICE_MODAL_ID = 'request-service-modal';
var SET_SERVICE_MODAL_PRICE = 'set-service-modal-price';
var ADD_SERVICE_MODAL_ID = 'add-service-modal';
var UPDATE_SERVICE_MODAL_ID = 'update-service-modal';
var ADD_SUB_CATEGORY_MODAL_ID = 'add-sub-category-modal';
var UPDATE_SUB_CATEGORY_MODAL_ID = "update-sub-category-modal";

/***/ })

}]);