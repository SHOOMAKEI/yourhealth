(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[101],{

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
/* harmony import */ var _pages_framework__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages/framework */ "./resources/js/pages/framework.jsx");
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_pages_framework__WEBPACK_IMPORTED_MODULE_3__["default"], {
    renderContent: renderContent
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ManageSubcategories);

/***/ })

}]);