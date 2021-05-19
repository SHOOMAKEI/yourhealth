(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[100],{

/***/ "./resources/js/Pages/ServiceProviders/requests/components/profile/Services.jsx":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviders/requests/components/profile/Services.jsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Services; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pages_Utilities_Services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Pages/Utilities/Services */ "./resources/js/Pages/Utilities/Services.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var SERVICES_DATA_TABLE = 'provider-services-datatable';
function Services(_ref) {
  var provider = _ref.provider;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      services = _useState2[0],
      setServices = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      sending = _useState4[0],
      setSending = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setSending(true);
    axios.get(route('service_provider_profiles.services', provider.id)).then(function (resp) {
      setServices(resp.data);
      setSending(false);
      console.log(resp.data);
    });
  }, [provider]); // useEffect(() => {
  //     initializeDataTable(true, true, SERVICES_DATA_TABLE)
  // }, [])

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-pane fade",
    id: "v-pills-services",
    role: "tabpanel",
    "aria-labelledby": "v-pills-services-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    id: SERVICES_DATA_TABLE,
    className: "table dt-responsive nowrap w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Currency"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, services && services.map(function (service) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, service.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, service.pivot.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, service.pivot.currency));
  }))));
}

/***/ }),

/***/ "./resources/js/Pages/Utilities/Services.js":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Utilities/Services.js ***!
  \**************************************************/
/*! exports provided: initializeDataTable, updateServiceCategoriesTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeDataTable", function() { return initializeDataTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateServiceCategoriesTable", function() { return updateServiceCategoriesTable; });
var initializeDataTable = function initializeDataTable(bSort, bDestroy, tableId) {
  $(document).ready(function () {
    $("#".concat(tableId)).DataTable({
      bSort: bSort,
      bDestroy: bDestroy,
      searching: false,
      destroy: true,
      pageLength: 7,
      "lengthMenu": [[7, 25, 50, -1], [7, 25, 50, "All"]],
      // "aaSorting": [],
      language: {
        paginate: {
          previous: "<i class='uil uil-angle-left'>",
          next: "<i class='uil uil-angle-right'>",
          first: '',
          last: ''
        }
      },
      drawCallback: function drawCallback() {
        $(document).ready(function () {
          $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
        });
      }
    });
  });
};
var updateServiceCategoriesTable = function updateServiceCategoriesTable(tableId, category) {
  $(document).ready(function () {
    var table = $("#".concat(tableId)).DataTable(); //table.clear().destroy();

    initializeDataTable(false, false, tableId); // table.row.add([category.name, category.status, category.createdAt, category.updatedAt, ''])
  });
};

/***/ })

}]);