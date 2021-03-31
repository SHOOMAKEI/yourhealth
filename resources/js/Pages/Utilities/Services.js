export const initializeDataTable = (bSort, bDestroy, tableId) => {
  $(`#${tableId}`).DataTable({
      bSort: bSort,
      bDestroy : bDestroy,
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
        },
      },
      drawCallback: function () {
        $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
      },
  });
}

export const updateServiceCategoriesTable = (tableId, category) => {
let table = $(`#${tableId}`).DataTable();
//table.clear().destroy();
initializeDataTable(false, false, tableId)
// table.row.add([category.name, category.status, category.createdAt, category.updatedAt, ''])

}
