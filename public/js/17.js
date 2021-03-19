(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./resources/js/Pages/Store/Index.js":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Store/Index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);




var Index = function Index() {
  var stores = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["usePage"])().props.stores;
  return /*#__PURE__*/!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("div", null, /*#__PURE__*/!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("div", {
    className: "page-title"
  }, /*#__PURE__*/!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("div", {
    className: "row"
  }, /*#__PURE__*/!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["InertiaLink"], {
    href: route('stores.index')
  }, "Store"), /*#__PURE__*/!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("span", null, "Store List")), !stores[0] && /*#__PURE__*/!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("div", {
    className: "col-md-6 d-md-flex d-none align-items-center justify-content-end"
  }, /*#__PURE__*/!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["InertiaLink"], {
    className: "btn btn-sm btn-primary br-3 p-x-15 mr-2",
    href: route('stores.create')
  }, "Add Store")))), stores[0] && /*#__PURE__*/!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("div", {
    className: "card profile "
  }, /*#__PURE__*/!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("img", {
    src: "assets/images/cards/rect/cartoon-rect-1.png",
    className: "profile-cover-img",
    alt: "madol"
  }), /*#__PURE__*/!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("div", {
    className: "card-body text-center pdn-b-35"
  }, /*#__PURE__*/!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("div", {
    className: "profile-img"
  }, /*#__PURE__*/!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("img", {
    src: "assets/images/user/thumb/default.png",
    alt: "madol"
  })), /*#__PURE__*/!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("h6", {
    className: "card-text mb-0"
  }, stores[0].name), /*#__PURE__*/!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("p", {
    className: "description"
  }, stores[0].description), /*#__PURE__*/!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("div", {
    className: "mt-0 d-flex align-items-center"
  }, /*#__PURE__*/!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("i", {
    className: "icon-envelope-open pr-2"
  }), /*#__PURE__*/!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("h6", {
    className: "card-text"
  }, stores[0].email)), /*#__PURE__*/!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("div", {
    className: "mt-3 d-flex align-items-center"
  }, /*#__PURE__*/!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("i", {
    className: "icon-call-in pr-2"
  }), /*#__PURE__*/!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("h6", {
    className: "card-text"
  }, stores[0].contact)), /*#__PURE__*/!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("div", {
    className: "mt-3 d-flex align-items-center"
  }, /*#__PURE__*/!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("i", {
    className: "icon-home pr-2 align-self-start"
  }), /*#__PURE__*/!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("h6", {
    className: "card-text"
  }, stores[0].address, ", ", stores[0].location)), /*#__PURE__*/!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("br", null), /*#__PURE__*/!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("div", {
    className: "hire"
  }, /*#__PURE__*/!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["InertiaLink"], {
    className: "btn btn-primary-soft btn-sm mr-2",
    href: route('stores.edit', stores[0].id)
  }, "Edit Store Info"), /*#__PURE__*/!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["InertiaLink"], {
    className: "btn btn-primary-soft btn-sm ",
    href: route('branches.index')
  }, "Show Branches"))))));
};

Index.layout = function (page) {
  return /*#__PURE__*/!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: page
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

}]);