(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[88],{

/***/ "./resources/js/Pages/Services/requested/components/paginator.jsx":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Services/requested/components/paginator.jsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Paginator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function Paginator(_ref) {
  var batchCount = _ref.batchCount,
      totalItems = _ref.totalItems,
      activePageCallBack = _ref.activePageCallBack;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([1]),
      _useState2 = _slicedToArray(_useState, 2),
      pages = _useState2[0],
      setPages = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    calculatePagination();
  }, [batchCount, totalItems]);

  function calculatePagination() {
    var _pages = Math.ceil(totalItems / batchCount);

    setPages(Array.from(Array(_pages).keys()));
  }

  function setActive(id) {
    pages.map(function (page) {
      $("#page-".concat(page)).removeClass('active');
    });
    $("#page-".concat(id)).addClass('active');
    activePageCallBack(id);
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "row px-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-sm-12 col-md-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dataTables_info",
    id: "service-categories-table_info",
    role: "status",
    "aria-live": "polite"
  }, "Showing 1 to ", batchCount, " of ", totalItems, " entries")), /*#__PURE__*/React.createElement("div", {
    className: "col-sm-12 col-md-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dataTables_paginate paging_simple_numbers float-right",
    id: "service-categories-table_paginate"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "pagination pagination-rounded"
  }, /*#__PURE__*/React.createElement("li", {
    className: "paginate_button page-item previous disabled",
    id: "service-categories-table_previous"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-controls": "service-categories-table",
    "data-dt-idx": "0",
    tabIndex: 0,
    className: "page-link"
  }, /*#__PURE__*/React.createElement("i", {
    className: "uil uil-angle-left"
  }))), pages.map(function (page) {
    return /*#__PURE__*/React.createElement("li", {
      className: "paginate_button page-item ".concat(page === 0 && 'active'),
      key: page,
      id: "page-".concat(page),
      onClick: function onClick() {
        return setActive(page);
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      "aria-controls": "service-categories-table",
      "data-dt-idx": "".concat(page),
      tabIndex: 0,
      className: "page-link"
    }, page));
  }), /*#__PURE__*/React.createElement("li", {
    className: "paginate_button page-item next",
    id: "service-categories-table_next"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-controls": "service-categories-table",
    "data-dt-idx": "3",
    tabIndex: 0,
    className: "page-link"
  }, /*#__PURE__*/React.createElement("i", {
    className: "uil uil-angle-right"
  })))))));
}

/***/ })

}]);