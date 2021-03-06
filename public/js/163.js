(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[163],{

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