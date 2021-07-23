(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[148],{

/***/ "./resources/js/Pages/Services/packages/package/Heading.jsx":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/Services/packages/package/Heading.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Heading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Heading(_ref) {
  var title = _ref.title,
      renderModal = _ref.renderModal,
      modalID = _ref.modalID,
      search = _ref.search,
      callback = _ref.callback,
      memberships = _ref.memberships,
      ranges = _ref.ranges,
      features = _ref.features;

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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "btn btn-primary mb-3",
    "data-toggle": "modal",
    "data-target": "#".concat(modalID),
    onClick: function onClick() {
      return callback({
        membership_category_id: memberships && memberships.length > 0 ? memberships[0].id : null,
        package_member_range_id: ranges && ranges.length > 0 ? ranges[0].id : null,
        package_feature_id: features && features.length > 0 ? features[0].id : null,
        features: [],
        ranges: [],
        is_active: true
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-plus"
  }), title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-sm-right float-right"
  })), renderModal && renderModal());
}

/***/ })

}]);