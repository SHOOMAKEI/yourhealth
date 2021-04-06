(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "./resources/js/Pages/Services/categories/components/Manage.jsx":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Services/categories/components/Manage.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pages_services_categories_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Pages/services/categories/components */ "./resources/js/Pages/services/categories/components/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Pages/Utilities/Constants */ "./resources/js/Pages/Utilities/Constants.js");
/* harmony import */ var _Pages_framework__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Pages/framework */ "./resources/js/Pages/framework.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




 // import { storeServiceCategories } from '@pages/data/actions/serviceCategories';
// import { useApi } from '@pages/utils/ApolloClient';

var CATEGORIES_BATCH_COUNT = 10;

var ManageServices = function ManageServices() {
  var _useSelector = useSelector(function (state) {
    return state.categoriesStore;
  }),
      categories = _useSelector.categories;

  var _useState = useState(CATEGORIES_BATCH_COUNT),
      _useState2 = _slicedToArray(_useState, 2),
      categoriesBatchCount = _useState2[0],
      setCategoriesBatchCount = _useState2[1];

  var _useState3 = useState(categories.slice(0, categoriesBatchCount)),
      _useState4 = _slicedToArray(_useState3, 2),
      shownCategories = _useState4[0],
      setShownCategories = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      paginatorSP = _useState6[0],
      setPaginatorSP = _useState6[1]; // const [queryCategories, {loading, errors, data, called}] = useApi({query: QUERY_CATEGORIES})
  // const dispatch = useDispatch()


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (categories.length > 0) {
      setShownCategories(categories.slice(paginatorSP, paginatorSP + categoriesBatchCount));
    }
  }, [categories]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {// queryCategories({});
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (data) {// dispatch(storeServiceCategories(data.serviceCategories));
    }
  }, [data]);

  function renderAddCategoryModal() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Pages_services_categories_components__WEBPACK_IMPORTED_MODULE_0__["AddCategoryModal"], {
      modalID: _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_2__["ADD_CATEGORY_MODAL_ID"],
      operation: "add"
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

  function renderContent() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row",
      style: {
        paddingTop: 30 + 'px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-xl-7"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "card px-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Pages_services_categories_components__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
      title: "Service categories",
      renderModal: renderAddCategoryModal,
      modalID: _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_2__["ADD_CATEGORY_MODAL_ID"],
      search: searchCategories
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Pages_services_categories_components__WEBPACK_IMPORTED_MODULE_0__["ServiceCategoriesTable"], {
      categories: shownCategories
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Pages_services_categories_components__WEBPACK_IMPORTED_MODULE_0__["Paginator"], {
      batchCount: categoriesBatchCount,
      totalItems: categories.length,
      activePageCallBack: selectPage
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-xl-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Pages_services_categories_components__WEBPACK_IMPORTED_MODULE_0__["InfoSideBar"], null)));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Pages_framework__WEBPACK_IMPORTED_MODULE_3__["default"], {
    renderContent: renderContent
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ManageServices);

/***/ }),

/***/ "./resources/js/Pages/Utilities/sidenav.jsx":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Utilities/sidenav.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);


function Sidebar() {
  // const [queryAthUser, {loading, errors, data, called}] = useApi({query: QUERY_AUTH_USER})
  // useEffect(() => {
  //     // queryAthUser({})
  // }, [])
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "left-side-menu left-side-menu-detached"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "leftbar-user"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/images/user.png",
    alt: "user-image",
    height: "42",
    className: "rounded-circle shadow-sm"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "leftbar-user-name"
  }, 'Loading...'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "metismenu side-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "side-nav-title side-nav-item"
  }, "Navigation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "side-nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "side-nav-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "uil-home-alt"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " Home "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "side-nav-title side-nav-item"
  }, "Modules"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "side-nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "side-nav-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "uil-store"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " Services "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "menu-arrow"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "side-nav-second-level",
    "aria-expanded": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/services/categories/manage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Manage Services"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/services/requested/manage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "New Services requests"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/services/packages/manage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Packages"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "side-nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "side-nav-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "uil-constructor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " Service Providers "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "menu-arrow"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "side-nav-second-level",
    "aria-expanded": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/service-providers/requests/providers"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Registration Requests")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "clearfix"
  }));
}

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