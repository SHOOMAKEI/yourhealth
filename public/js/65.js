(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

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


var SERVICES_DATA_TABLE = 'provider-services-datatable';
function Services() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_Pages_Utilities_Services__WEBPACK_IMPORTED_MODULE_1__["initializeDataTable"])(true, true, SERVICES_DATA_TABLE);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "tab-pane fade",
    id: "v-pills-services",
    role: "tabpanel",
    "aria-labelledby": "v-pills-services-tab"
  }, /*#__PURE__*/React.createElement("table", {
    id: SERVICES_DATA_TABLE,
    className: "table dt-responsive nowrap w-100"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Price"), /*#__PURE__*/React.createElement("th", null, "Price currency"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Tiger Nixon"), /*#__PURE__*/React.createElement("td", null, "$320,800"), /*#__PURE__*/React.createElement("td", null, "System Architect")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Garrett Winters"), /*#__PURE__*/React.createElement("td", null, "$170,750"), /*#__PURE__*/React.createElement("td", null, "Accountant")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Garrett Winters"), /*#__PURE__*/React.createElement("td", null, "$170,750"), /*#__PURE__*/React.createElement("td", null, "Accountant")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Garrett Winters"), /*#__PURE__*/React.createElement("td", null, "$170,750"), /*#__PURE__*/React.createElement("td", null, "Accountant")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Garrett Winters"), /*#__PURE__*/React.createElement("td", null, "$170,750"), /*#__PURE__*/React.createElement("td", null, "Accountant")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Garrett Winters"), /*#__PURE__*/React.createElement("td", null, "$170,750"), /*#__PURE__*/React.createElement("td", null, "Accountant")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Garrett Winters"), /*#__PURE__*/React.createElement("td", null, "$170,750"), /*#__PURE__*/React.createElement("td", null, "Accountant")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Garrett Winters"), /*#__PURE__*/React.createElement("td", null, "$170,750"), /*#__PURE__*/React.createElement("td", null, "Accountant")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Garrett Winters"), /*#__PURE__*/React.createElement("td", null, "$170,750"), /*#__PURE__*/React.createElement("td", null, "Accountant")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Garrett Winters"), /*#__PURE__*/React.createElement("td", null, "$170,750"), /*#__PURE__*/React.createElement("td", null, "Accountant")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Garrett Winters"), /*#__PURE__*/React.createElement("td", null, "$170,750"), /*#__PURE__*/React.createElement("td", null, "Accountant")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Garrett Winters"), /*#__PURE__*/React.createElement("td", null, "$170,750"), /*#__PURE__*/React.createElement("td", null, "Accountant")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Garrett Winters"), /*#__PURE__*/React.createElement("td", null, "$170,750"), /*#__PURE__*/React.createElement("td", null, "Accountant")))));
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
      $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
    }
  });
};
var updateServiceCategoriesTable = function updateServiceCategoriesTable(tableId, category) {
  var table = $("#".concat(tableId)).DataTable(); //table.clear().destroy();

  initializeDataTable(false, false, tableId); // table.row.add([category.name, category.status, category.createdAt, category.updatedAt, ''])
};

/***/ })

}]);