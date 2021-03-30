(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[90],{

/***/ "./resources/js/Pages/Services/requested/manage.jsx":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/Services/requested/manage.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/services/requested/components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-redux'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/framework'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'next'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/utils/Query'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/data/reducers/requestedService'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/auth/components/Spinner'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/data/actions/requestedService'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/utils/ApolloClient'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var SERVICES_BATCH_COUNT = 10;

var ManageServices = function ManageServices() {
  var _useSelector = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react-redux'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function (state) {
    return state.requestedServiceStore;
  }),
      services = _useSelector.services;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(SERVICES_BATCH_COUNT),
      _useState2 = _slicedToArray(_useState, 2),
      servicesBatchCount = _useState2[0],
      setServicesBatchCount = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(services.slice(0, servicesBatchCount)),
      _useState4 = _slicedToArray(_useState3, 2),
      shownServices = _useState4[0],
      setShownServices = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState6 = _slicedToArray(_useState5, 2),
      paginatorSP = _useState6[0],
      setPaginatorSP = _useState6[1];

  var _useApi = !(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/utils/ApolloClient'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    query: !(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/utils/Query'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  }),
      _useApi2 = _slicedToArray(_useApi, 2),
      queryServices = _useApi2[0],
      _useApi2$ = _useApi2[1],
      data = _useApi2$.data,
      called = _useApi2$.called,
      loading = _useApi2$.loading,
      errors = _useApi2$.errors;

  var dispatch = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react-redux'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    queryServices({});
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (services.length > 0) {
      setShownServices(services.slice(paginatorSP, paginatorSP + servicesBatchCount));
    }
  }, [services]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (data && data.requestedService) {
      dispatch(!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/data/actions/requestedService'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(data.requestedService));
    }
  }, [data]);

  function selectPage(page) {
    var startingPoint = page === 0 ? 0 : page * servicesBatchCount;
    var endingPoint = startingPoint + servicesBatchCount;
    setShownServices(services.slice(startingPoint, endingPoint));
    setPaginatorSP(startingPoint);
    return 0;
  }

  function searchCategories(content) {
    if (content.length === 0) {
      setShownServices(services.slice(0, servicesBatchCount));
    } else {
      setShownServices(services.filter(function (category) {
        if (category.name.toLowerCase().includes(content.toLowerCase())) {
          return category;
        }
      }));
    }
  }

  function renderContent() {
    return /*#__PURE__*/React.createElement("div", {
      className: "row",
      style: {
        paddingTop: 30 + 'px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-xl-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "card px-2"
    }, /*#__PURE__*/React.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/services/requested/components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      title: "Service categories",
      search: searchCategories
    }), errors && errors.map(function (error) {
      return /*#__PURE__*/React.createElement("div", {
        className: "alert alert-danger bg-danger text-white border-0 mb-0 show mb-4",
        role: "alert"
      }, /*#__PURE__*/React.createElement("strong", null, "Error "), " ", error.message);
    }), loading ? /*#__PURE__*/React.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/auth/components/Spinner'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/services/requested/components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      services: shownServices
    }), /*#__PURE__*/React.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/services/requested/components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      batchCount: servicesBatchCount,
      totalItems: services.length,
      activePageCallBack: selectPage
    })))), /*#__PURE__*/React.createElement("div", {
      className: "col-xl-4"
    }, /*#__PURE__*/React.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/services/requested/components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null)));
  }

  return /*#__PURE__*/React.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/framework'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    renderContent: renderContent
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ManageServices);

/***/ })

}]);