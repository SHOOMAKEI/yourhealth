(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "./resources/js/Pages/Services/subcategories/[category_id].jsx":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Services/subcategories/[category_id].jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_services_subcategories_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/pages/services/subcategories/components */ "./resources/js/pages/services/subcategories/components/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/pages/Utilities/Constants */ "./resources/js/pages/Utilities/Constants.js");
/* harmony import */ var _Pages_framework__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Pages/framework */ "./resources/js/Pages/framework.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var CATEGORIES_BATCH_COUNT = 10;

var ManageSubcategories = function ManageSubcategories() {
  var _useSelector = useSelector(function (state) {
    return state.subcategoriesStore;
  }),
      subcategories = _useSelector.subcategories;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(CATEGORIES_BATCH_COUNT),
      _useState2 = _slicedToArray(_useState, 2),
      subcategoriesBatchCount = _useState2[0],
      setSubcategoriesBatchCount = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(subcategories.slice(0, subcategoriesBatchCount)),
      _useState4 = _slicedToArray(_useState3, 2),
      shownSubcategories = _useState4[0],
      setShownSubcategories = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState6 = _slicedToArray(_useState5, 2),
      paginatorSP = _useState6[0],
      setPaginatorSP = _useState6[1];

  var category_id = router.query.category_id;

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('Service'),
      _useState8 = _slicedToArray(_useState7, 2),
      heading = _useState8[0],
      setHeading = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (subcategories.length > 0) {
      setShownSubcategories(subcategories.slice(paginatorSP, paginatorSP + subcategoriesBatchCount));
    }
  }, [subcategories]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    queryCategory({
      variables: {
        id: category_id
      }
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (data) {
      dispatch(storeServiceSubcategories(data.serviceCategory.service_sub_categories));
      setHeading(data.serviceCategory.name);
    }
  }, [data]);

  function renderAddSubcategoryModal() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_pages_services_subcategories_components__WEBPACK_IMPORTED_MODULE_0__["AddSubcategoryModal"], {
      modalID: _pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_2__["ADD_CATEGORY_MODAL_ID"],
      operation: "add"
    });
  }

  function selectPage(page) {
    var startingPoint = page === 0 ? 0 : page * subcategoriesBatchCount;
    var endingPoint = startingPoint + subcategoriesBatchCount;
    setShownSubcategories(subcategories.slice(startingPoint, endingPoint));
    setPaginatorSP(startingPoint);
    return 0;
  }

  function searchSubcategories(content) {
    if (content.length === 0) {
      setShownSubcategories(subcategories.slice(0, subcategoriesBatchCount));
    } else {
      setShownSubcategories(subcategories.filter(function (subcategory) {
        if (subcategory.name.toLowerCase().includes(content.toLowerCase())) {
          return subcategory;
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_pages_services_subcategories_components__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
      title: "".concat(heading, " subcategories"),
      renderModal: renderAddSubcategoryModal,
      modalID: _pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_2__["ADD_CATEGORY_MODAL_ID"],
      search: searchSubcategories
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_pages_services_subcategories_components__WEBPACK_IMPORTED_MODULE_0__["ServiceCategoriesTable"], {
      categories: shownSubcategories
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_pages_services_subcategories_components__WEBPACK_IMPORTED_MODULE_0__["Paginator"], {
      batchCount: subcategoriesBatchCount,
      totalItems: subcategories.length,
      activePageCallBack: selectPage
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-xl-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_pages_services_subcategories_components__WEBPACK_IMPORTED_MODULE_0__["InfoSideBar"], null)));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Pages_framework__WEBPACK_IMPORTED_MODULE_3__["default"], {
    renderContent: renderContent
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ManageSubcategories);

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

/***/ }),

/***/ "./resources/js/pages/services/subcategories/components/index.js":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/services/subcategories/components/index.js ***!
  \***********************************************************************/
/*! exports provided: AddSubcategoryModal, Heading, InfoSideBar, Paginator, ServiceCategoriesTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddSubcategoryModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddSubcategoryModal */ "./resources/js/pages/services/subcategories/components/AddSubcategoryModal.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddSubcategoryModal", function() { return _AddSubcategoryModal__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _pages_services_subcategories_components_Heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/pages/services/subcategories/components/Heading */ "./resources/js/pages/services/subcategories/components/Heading.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return _pages_services_subcategories_components_Heading__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Pages_Services_subcategories_components_infosidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Pages/Services/subcategories/components/infosidebar */ "./resources/js/Pages/Services/subcategories/components/infosidebar.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoSideBar", function() { return _Pages_Services_subcategories_components_infosidebar__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Pages_Services_subcategories_components_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Pages/Services/subcategories/components/paginator */ "./resources/js/Pages/Services/subcategories/components/paginator.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Paginator", function() { return _Pages_Services_subcategories_components_paginator__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Pages_Services_subcategories_components_serviceCategoryTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Pages/Services/subcategories/components/serviceCategoryTable */ "./resources/js/Pages/Services/subcategories/components/serviceCategoryTable.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceCategoriesTable", function() { return _Pages_Services_subcategories_components_serviceCategoryTable__WEBPACK_IMPORTED_MODULE_4__["default"]; });








/***/ })

}]);