(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[92],{

/***/ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/FacilityServices.jsx":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/FacilityServices.jsx ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FacilityServices; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pages_Utilities_Services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Pages/Utilities/Services */ "./resources/js/Pages/Utilities/Services.js");


var FACILITY_SERVICES_DATA_TABLE = 'facility-services-datatable';
function FacilityServices() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_Pages_Utilities_Services__WEBPACK_IMPORTED_MODULE_1__["initializeDataTable"])(true, true, FACILITY_SERVICES_DATA_TABLE);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "tab-pane fade",
    id: "v-pills-facility-services",
    role: "tabpanel",
    "aria-labelledby": "v-pills-facility-services-tab"
  }, /*#__PURE__*/React.createElement("p", null, "facility services"));
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