(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./resources/js/Pages/ServiceProviders/requests/components/ServiceProvidersTable.jsx":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviders/requests/components/ServiceProvidersTable.jsx ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServiceProvidersTable; });
/* harmony import */ var _pages_serviceProviders_requests_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/pages/serviceProviders/requests/components */ "./resources/js/pages/serviceProviders/requests/components/index.jsx");
!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/service-providers/requests/components/ProviderProfile'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function ServiceProvidersTable(_ref) {
  var serviceProviders = _ref.serviceProviders;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(serviceProviders[0]),
      _useState2 = _slicedToArray(_useState, 2),
      selectedProvider = _useState2[0],
      setSelectedProvider = _useState2[1];

  function selectProvider(provider) {
    setSelectedProvider(provider);
  }

  return /*#__PURE__*/React.createElement("table", {
    className: "table dt-responsive nowrap w-100"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Title"), /*#__PURE__*/React.createElement("th", null, "Username"), /*#__PURE__*/React.createElement("th", null, "Email"), /*#__PURE__*/React.createElement("th", null, "Phone number"), /*#__PURE__*/React.createElement("th", null, "Requested At"), /*#__PURE__*/React.createElement("th", null, "Updated At"), /*#__PURE__*/React.createElement("th", null, "Provider Category"), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, serviceProviders.map(function (serviceProvider) {
    return /*#__PURE__*/React.createElement(_pages_serviceProviders_requests_components__WEBPACK_IMPORTED_MODULE_0__["ServiceProvider"], {
      serviceProvider: serviceProvider,
      selectServiceProvider: selectProvider
    });
  })));
}

/***/ }),

/***/ "./resources/js/pages/serviceProviders/requests/components/index.jsx":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/serviceProviders/requests/components/index.jsx ***!
  \***************************************************************************/
/*! exports provided: Heading, ServiceProvidersTable, ServiceProvider, ProfileNav, ServiceProviderValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/service-providers/requests/components/Heading'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
throw new Error("Cannot find module '@pages/service-providers/requests/components/Heading'");
!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/service-providers/requests/components/ServiceProvidersTable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
throw new Error("Cannot find module '@pages/service-providers/requests/components/ServiceProvidersTable'");
!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/service-providers/requests/components/ServiceProvider'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
throw new Error("Cannot find module '@pages/service-providers/requests/components/ServiceProvider'");
throw new Error("Cannot find module '@pages/service-providers/requests/components/ServiceProvider'");
!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/service-providers/requests/components/ProfileNav'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
throw new Error("Cannot find module '@pages/service-providers/requests/components/ProfileNav'");







/***/ })

}]);