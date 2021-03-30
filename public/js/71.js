(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71],{

/***/ "./resources/js/Pages/ServiceProviders/requests/components/Heading.jsx":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviders/requests/components/Heading.jsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Heading; });
function Heading(_ref) {
  var title = _ref.title,
      search = _ref.search;

  function onSearch() {
    $('#search-input').on('input', function (e) {
      var input = $(this);
      var val = input.val();

      if (input.data("lastval") != val) {
        input.data("lastval", val);
        search(val);
      }
    });
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "page-title-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-title-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-search"
  }, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Search...",
    id: "search-input",
    onInput: onSearch
  }), /*#__PURE__*/React.createElement("span", {
    className: "mdi mdi-magnify search-icon"
  }), /*#__PURE__*/React.createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/React.createElement("span", {
    className: "btn btn-primary"
  }, /*#__PURE__*/React.createElement("i", {
    className: "uil uil-search"
  }))))))), /*#__PURE__*/React.createElement("h4", {
    className: "page-title"
  }, title));
}

/***/ })

}]);