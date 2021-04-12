(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./resources/js/Pages/ServiceProviders/requests/components/Heading.jsx":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviders/requests/components/Heading.jsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Heading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Heading(_ref) {
  var title = _ref.title,
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "mdi mdi-magnify search-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "btn btn-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "uil uil-search"
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "page-title"
  }, title));
}

/***/ }),

/***/ "./resources/js/Pages/ServiceProviders/requests/components/ServiceProvidersTable.jsx":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviders/requests/components/ServiceProvidersTable.jsx ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServiceProvidersTable; });
/* harmony import */ var _ServiceProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServiceProvider */ "./resources/js/Pages/ServiceProviders/requests/components/ServiceProvider.jsx");
/* harmony import */ var _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Pages/Utilities/Constants */ "./resources/js/Pages/Utilities/Constants.js");
/* harmony import */ var _ProviderProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProviderProfile */ "./resources/js/Pages/ServiceProviders/requests/components/ProviderProfile.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function ServiceProvidersTable(_ref) {
  var serviceProviders = _ref.serviceProviders;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(serviceProviders[0]),
      _useState2 = _slicedToArray(_useState, 2),
      selectedProvider = _useState2[0],
      setSelectedProvider = _useState2[1];

  function selectProvider(provider) {
    setSelectedProvider(provider);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("table", {
    className: "table dt-responsive nowrap w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th", null, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th", null, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th", null, "Phone number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th", null, "Requested At"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th", null, "Updated At"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th", null, "Provider Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tbody", null, serviceProviders.map(function (serviceProvider) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ServiceProvider__WEBPACK_IMPORTED_MODULE_0__["default"], {
      serviceProvider: serviceProvider,
      selectServiceProvider: selectProvider
    });
  })));
}

/***/ }),

/***/ "./resources/js/Pages/ServiceProviders/requests/components/index.jsx":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviders/requests/components/index.jsx ***!
  \***************************************************************************/
/*! exports provided: Heading, ServiceProvidersTable, ServiceProvider, ProfileNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Heading */ "./resources/js/Pages/ServiceProviders/requests/components/Heading.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return _Heading__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ServiceProvidersTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServiceProvidersTable */ "./resources/js/Pages/ServiceProviders/requests/components/ServiceProvidersTable.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceProvidersTable", function() { return _ServiceProvidersTable__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ServiceProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ServiceProvider */ "./resources/js/Pages/ServiceProviders/requests/components/ServiceProvider.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceProvider", function() { return _ServiceProvider__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ProfileNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProfileNav */ "./resources/js/Pages/ServiceProviders/requests/components/ProfileNav.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileNav", function() { return _ProfileNav__WEBPACK_IMPORTED_MODULE_3__["default"]; });





 // export {ServiceProviderValues}

/***/ })

}]);