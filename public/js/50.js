(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
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

  $(document).ready(function () {
    $('#service-provider-verification-request-table').DataTable();
    $('.dataTables_filter input[type="search"]').css({
      'width': '145px',
      'display': 'inline-block'
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("table", {
    id: "service-provider-verification-request-table",
    className: "table dt-responsive nowrap w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th", null, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th", null, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th", null, "Phone number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th", null, "Requested At"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th", null, "Updated At"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th", null, "Provider Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th", null, "Verification Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tbody", null, serviceProviders.map(function (serviceProvider, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ServiceProvider__WEBPACK_IMPORTED_MODULE_0__["default"], {
      key: index + 1,
      serviceProvider: serviceProvider,
      selectServiceProvider: selectProvider
    });
  })));
}

/***/ }),

/***/ "./resources/js/Pages/ServiceProviders/requests/providers.jsx":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviders/requests/providers.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Heading */ "./resources/js/Pages/ServiceProviders/requests/components/Heading.jsx");
/* harmony import */ var _components_ServiceProvidersTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ServiceProvidersTable */ "./resources/js/Pages/ServiceProviders/requests/components/ServiceProvidersTable.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Pages_framework__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Pages/framework */ "./resources/js/Pages/framework.jsx");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Pages_Services_services_components_Manage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Pages/Services/services/components/Manage */ "./resources/js/Pages/Services/services/components/Manage.jsx");
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.js");








function Provider() {
  var providers = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__["usePage"])().props.providers; // const [providers, setProviders] = useState([]);
  // const [getProvidersRequests, getProvidersRequestsResponse] = useApi({query: QUERY_PROVIDERS})

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {// getProvidersRequests({})
  }, []);

  function searchProviders(content) {}

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row",
    style: {
      paddingTop: 30 + 'px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "card px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Heading__WEBPACK_IMPORTED_MODULE_0__["default"], {
    title: "Service providers registration requests",
    search: searchProviders
  }), providers && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ServiceProvidersTable__WEBPACK_IMPORTED_MODULE_1__["default"], {
    serviceProviders: providers
  }))));
}

Provider.layout = function (page) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    children: page
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Provider);

/***/ }),

/***/ "./resources/js/Pages/Services/services/components/Manage.jsx":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Services/services/components/Manage.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddServiceModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddServiceModal */ "./resources/js/Pages/Services/services/components/AddServiceModal.jsx");
/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Heading */ "./resources/js/Pages/Services/services/components/Heading.jsx");
/* harmony import */ var _infosidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./infosidebar */ "./resources/js/Pages/Services/services/components/infosidebar.jsx");
/* harmony import */ var _paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paginator */ "./resources/js/Pages/Services/services/components/paginator.jsx");
/* harmony import */ var _servicesTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./servicesTable */ "./resources/js/Pages/Services/services/components/servicesTable.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Pages/Utilities/Constants */ "./resources/js/Pages/Utilities/Constants.js");
/* harmony import */ var _Pages_framework__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Pages/framework */ "./resources/js/Pages/framework.jsx");
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_9__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var CATEGORIES_BATCH_COUNT = 10;

var ManageServices = function ManageServices() {
  var _usePage$props = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_9__["usePage"])().props,
      categories = _usePage$props.categories,
      service_sub_category = _usePage$props.service_sub_category; //useSelector(state => state.categoriesStore);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(CATEGORIES_BATCH_COUNT),
      _useState2 = _slicedToArray(_useState, 2),
      categoriesBatchCount = _useState2[0],
      setCategoriesBatchCount = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(categories.slice(0, categoriesBatchCount)),
      _useState4 = _slicedToArray(_useState3, 2),
      shownCategories = _useState4[0],
      setShownCategories = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      _useState6 = _slicedToArray(_useState5, 2),
      paginatorSP = _useState6[0],
      setPaginatorSP = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(categories && categories[0]),
      _useState8 = _slicedToArray(_useState7, 2),
      selectedCategory = _useState8[0],
      setSelectedCategory = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (categories.length > 0) {
      setShownCategories(categories.slice(paginatorSP, paginatorSP + categoriesBatchCount));
    }
  }, [categories]);

  function renderAddServiceModal() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_AddServiceModal__WEBPACK_IMPORTED_MODULE_0__["default"], {
      modalID: _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_6__["ADD_SERVICE_MODAL_ID"],
      operation: "add",
      initialData: {
        name: "",
        description: "No description",
        status: false,
        approved_at: false,
        service_sub_category_id: service_sub_category.id
      }
    });
  }

  function selectPage(page) {
    var startingPoint = page === 0 ? 0 : page * categoriesBatchCount;
    var endingPoint = startingPoint + categoriesBatchCount;
    setShownCategories(categories.slice(startingPoint, endingPoint));
    setPaginatorSP(startingPoint);
    return 0;
  }

  function searchCategories(content) {
    if (content.length === 0) {
      setShownCategories(categories.slice(0, categoriesBatchCount));
    } else {
      setShownCategories(categories.filter(function (category) {
        if (category.name.toLowerCase().includes(content.toLowerCase())) {
          return category;
        }
      }));
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "row col-lg-12",
    style: {
      paddingTop: 30 + 'px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "col-lg-7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "card px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Heading__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Services",
    renderModal: renderAddServiceModal,
    modalID: _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_6__["ADD_SERVICE_MODAL_ID"],
    search: searchCategories
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_servicesTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
    services: shownCategories,
    callback: setSelectedCategory
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_paginator__WEBPACK_IMPORTED_MODULE_3__["default"], {
    batchCount: categoriesBatchCount,
    totalItems: categories.length,
    activePageCallBack: selectPage
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "col-lg-5"
  }, categories && selectedCategory && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_infosidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    selectedCategory: selectedCategory
  })));
};

ManageServices.layout = function (page) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    children: page
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ManageServices);

/***/ }),

/***/ "./resources/js/Pages/framework.jsx":
/*!******************************************!*\
  !*** ./resources/js/Pages/framework.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utilities_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utilities/sidenav */ "./resources/js/Pages/Utilities/sidenav.jsx");
/* harmony import */ var _Utilities_topnav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utilities/topnav */ "./resources/js/Pages/Utilities/topnav.jsx");




function Framework(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utilities_topnav__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utilities_sidenav__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, children)))));
}

/* harmony default export */ __webpack_exports__["default"] = (Framework);

/***/ })

}]);