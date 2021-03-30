(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ "./resources/js/Pages/ServiceProviders/requests/components/profile/Qualifications.jsx":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviders/requests/components/profile/Qualifications.jsx ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Qualifications; });
!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/service-providers-registration/components/profile/AddQualificationModal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


 // import { QUERY_EDUCATION_QUALIFICATION } from '@pages/utils/Query'
// import { useApi } from '@pages/utils/ApolloClient'

function Qualifications() {
  var _useApi = useApi({
    query: QUERY_EDUCATION_QUALIFICATION
  }),
      _useApi2 = _slicedToArray(_useApi, 2),
      queryQualifications = _useApi2[0],
      queryQualificationsResponse = _useApi2[1];

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
  return /*#__PURE__*/React.createElement("div", {
    className: "tab-pane fade",
    id: "v-pills-qualifications",
    role: "tabpanel",
    "aria-labelledby": "v-pills-qualifications-tab"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("table", {
    className: "table table-centered table-borderless mb-0"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Title"), /*#__PURE__*/React.createElement("th", null, "Institution"), /*#__PURE__*/React.createElement("th", null, "Attachment"), /*#__PURE__*/React.createElement("th", null, "Actions"))), /*#__PURE__*/React.createElement("tbody", null, qualifications.map(function (qualification) {
    return /*#__PURE__*/React.createElement("tr", {
      key: qualification.id
    }, /*#__PURE__*/React.createElement("td", null, qualification.award_title), /*#__PURE__*/React.createElement("td", null, qualification.institution_name), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
      href: "".concat(qualification.attachment),
      className: "btn btn-light"
    }, "File ", /*#__PURE__*/React.createElement("i", {
      className: "uil-cloud-download ml-1"
    }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
      href: "javascript: void(0);",
      className: "action-icon"
    }, " ", /*#__PURE__*/React.createElement("i", {
      className: "dripicons-trash"
    }))));
  })))));
}

/***/ })

}]);