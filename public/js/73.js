(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[73],{

/***/ "./resources/js/Pages/Services/subcategories/components/deleteDialog.jsx":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Services/subcategories/components/deleteDialog.jsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeleteCategoryDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function DeleteCategoryDialog() {
  var _useSelector = useSelector(function (state) {
    return state.subcategoriesStore;
  }),
      selectedSubcategory = _useSelector.selectedSubcategory;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      success = _useState2[0],
      setSuccess = _useState2[1]; // useEffect(() => {
  //     if (deleteServiceSubcategoryResponse.data) {
  //        setSuccess(true)
  //        dispatch(deleteSubcategory(selectedSubcategory));
  //     }
  //  }, [deleteServiceSubcategoryResponse.data])
  //
  // function _deleteCategory() {
  //     deleteServiceSubcategory({variables: {id: selectedSubcategory.id}})
  // }


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "delete-category",
    className: "modal fade",
    tabIndex: -1,
    role: "dialog",
    "aria-labelledby": "delete-categoryLabel",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-dialog"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-content modal-filled bg-danger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "modal-title",
    id: "delete-categoryLabel"
  }, "delete ", selectedSubcategory.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-hidden": "true"
  }, "\xD7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body"
  }, "Are you sure you want to delete ", selectedSubcategory.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-light",
    "data-dismiss": "modal"
  }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-outline-light",
    "data-dismiss": "modal",
    onClick: _deleteCategory
  }, "Delete")))));
}

/***/ }),

/***/ "./resources/js/Pages/Services/subcategories/components/serviceSubategory.jsx":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Services/subcategories/components/serviceSubategory.jsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Subcategory; });
/* harmony import */ var _deleteDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteDialog */ "./resources/js/Pages/Services/subcategories/components/deleteDialog.jsx");

function Subcategory(subcategory) {
  function chooseSubcategory() {// dispatch(selectSubcategory(subcategory))
  }

  return /*#__PURE__*/React.createElement("tr", {
    key: subcategory.id
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
    href: '#',
    className: "text-dark",
    onClick: chooseSubcategory
  }, subcategory.name)), /*#__PURE__*/React.createElement("td", null, subcategory.is_active ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "uil uil-eye font-16 mr-1 text-success"
  }), " Visible") : /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "uil uil-eye font-16 mr-1 text-danger"
  }), " Not Visible")), /*#__PURE__*/React.createElement("td", {
    className: "table-action"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-link dropdown-toggle",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    style: {
      lineHeight: 0.5,
      paddingTop: 0,
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "uil uil-bright font-16 mr-1 text-primary"
  }), "More"), /*#__PURE__*/React.createElement("div", {
    className: "dropdown-menu"
  }, /*#__PURE__*/React.createElement("a", {
    href: "javascript:void(0);",
    className: "dropdown-item",
    onClick: chooseSubcategory
  }, /*#__PURE__*/React.createElement("i", {
    className: "uil uil-eye mr-1"
  }), "Show info"), /*#__PURE__*/React.createElement(Link, {
    href: "/services/services/".concat(subcategory.id)
  }, /*#__PURE__*/React.createElement("a", {
    className: "dropdown-item"
  }, /*#__PURE__*/React.createElement("i", {
    className: "uil uil-sitemap mr-1"
  }), "services"))), /*#__PURE__*/React.createElement(_deleteDialog__WEBPACK_IMPORTED_MODULE_0__["default"], null)));
}

/***/ })

}]);