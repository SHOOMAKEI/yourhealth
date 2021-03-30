(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ "./resources/js/Pages/ServiceProviders/requests/providers.jsx":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviders/requests/providers.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Provider; });
!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/service-providers/requests/components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/framework'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/utils/Query'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/auth/components/Spinner'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/utils/ApolloClient'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function Provider() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      providers = _useState2[0],
      setProviders = _useState2[1];

  var _useApi = !(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/utils/ApolloClient'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    query: !(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/utils/Query'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  }),
      _useApi2 = _slicedToArray(_useApi, 2),
      getProvidersRequests = _useApi2[0],
      getProvidersRequestsResponse = _useApi2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getProvidersRequests({});
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var data = getProvidersRequestsResponse.data;

    if (data && data.unverifiedServiceProviderRequests) {
      setProviders(data.unverifiedServiceProviderRequests);
    }
  }, [getProvidersRequestsResponse.data]);

  function searchProviders(content) {}

  function renderContent() {
    return /*#__PURE__*/React.createElement("div", {
      className: "row",
      style: {
        paddingTop: 30 + 'px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "card px-2"
    }, /*#__PURE__*/React.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/service-providers/requests/components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      title: "Service providers registration requests",
      search: searchProviders
    }), getProvidersRequestsResponse.called && getProvidersRequestsResponse.loading ? /*#__PURE__*/React.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/auth/components/Spinner'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null) : /*#__PURE__*/React.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/service-providers/requests/components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      serviceProviders: providers
    }))));
  }

  return /*#__PURE__*/React.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/framework'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    renderContent: renderContent
  });
}

/***/ })

}]);