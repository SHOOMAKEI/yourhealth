(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

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

/***/ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/Qualifications.jsx":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/Qualifications.jsx ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Qualifications; });
/* harmony import */ var _Pages_ServiceProviderProfileCompletion_components_profile_AddQualificationModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Pages/ServiceProviderProfileCompletion/components/profile/AddQualificationModal */ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/AddQualificationModal.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Pages/Utilities/Constants */ "./resources/js/Pages/Utilities/Constants.js");
/* harmony import */ var _Pages_ServiceProviderProfileCompletion_components_profile_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Pages/ServiceProviderProfileCompletion/components/profile/Heading */ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/Heading.jsx");
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





function Qualifications(_ref) {
  var user = _ref.user;

  var _useApi = useApi({
    query: QUERY_EDUCATION_QUALIFICATION
  }),
      _useApi2 = _slicedToArray(_useApi, 2),
      queryQualifications = _useApi2[0],
      queryQualificationsResponse = _useApi2[1];

  var _useApi3 = useApi({
    query: DELETE_QUALIFICATION
  }),
      _useApi4 = _slicedToArray(_useApi3, 2),
      deleteQualification = _useApi4[0],
      deleteQualificationResponse = _useApi4[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      qualifications = _useState2[0],
      setQualifications = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var data = queryQualificationsResponse.data;

    if (data && data.educationQualificationInfo) {
      setQualifications(data.educationQualificationInfo);
    }
  }, [queryQualificationsResponse.data]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    queryQualifications({});
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var data = deleteQualificationResponse.data;

    if (data && data.deleteProviderQualification) {
      var newQualifications = qualifications.filter(function (qualification) {
        if (qualification.id !== data.deleteProviderQualification.id) {
          return qualification;
        }
      });
      setQualifications(newQualifications);
    }
  }, [deleteQualificationResponse.data]);

  function searchQualifications() {}

  function _deleteQualification(id) {
    deleteQualification({
      variables: {
        qualification_id: id
      }
    });
  }

  function addAttachment(attachment) {
    var newQualifications = _toConsumableArray(qualifications);

    newQualifications.push(attachment);
    setQualifications(newQualifications);
  }

  function renderAddSubcategoryModal() {
    return /*#__PURE__*/React.createElement(_Pages_ServiceProviderProfileCompletion_components_profile_AddQualificationModal__WEBPACK_IMPORTED_MODULE_0__["default"], {
      modalID: _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_2__["ADD_QUALIFICATION_MODAL_ID"],
      operation: "add",
      callback: addAttachment
    });
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "tab-pane fade",
    id: "v-pills-qualifications",
    role: "tabpanel",
    "aria-labelledby": "v-pills-qualifications-tab"
  }, /*#__PURE__*/React.createElement(_Pages_ServiceProviderProfileCompletion_components_profile_Heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Qualifications",
    modalID: _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_2__["ADD_QUALIFICATION_MODAL_ID"],
    buttonText: "Add Qualification",
    search: searchQualifications,
    renderModal: renderAddSubcategoryModal
  }), /*#__PURE__*/React.createElement("table", {
    className: "table table-centered table-borderless mb-0"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Title"), /*#__PURE__*/React.createElement("th", null, "Institution"), /*#__PURE__*/React.createElement("th", null, "Attachment"), /*#__PURE__*/React.createElement("th", null, "Actions"))), /*#__PURE__*/React.createElement("tbody", null, queryQualificationsResponse.loading || deleteQualificationResponse.loading ? /*#__PURE__*/React.createElement(Spinner, null) : qualifications.map(function (qualification) {
    return /*#__PURE__*/React.createElement("tr", {
      key: qualification.id
    }, /*#__PURE__*/React.createElement("td", null, qualification.award_title), /*#__PURE__*/React.createElement("td", null, qualification.institution_name), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
      href: "".concat(qualification.attachment),
      className: "btn btn-light"
    }, "File ", /*#__PURE__*/React.createElement("i", {
      className: "uil-cloud-download ml-1"
    }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
      href: "javascript: void(0);",
      className: "action-icon",
      onClick: function onClick() {
        return _deleteQualification(qualification.id);
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "dripicons-trash"
    }))));
  }))));
}

/***/ }),

/***/ "./resources/js/Pages/Utilities/Constants.js":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Utilities/Constants.js ***!
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