(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[73],{

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
  var categories = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_9__["usePage"])().props.categories; //useSelector(state => state.categoriesStore);

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
        approved_at: false
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
    className: "row",
    style: {
      paddingTop: 30 + 'px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "col-xl-7"
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
    className: "col-xl-5"
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