(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

/***/ "./resources/js/Pages/ServiceProviderProfileCompletion/components/Topnav.jsx":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviderProfileCompletion/components/Topnav.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopNav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// import Languages from '@/Pages/constants/components/languages'

function TopNav(_ref) {
  var user = _ref.user;
  return /*#__PURE__*/React.createElement("div", {
    className: "navbar-custom topnav-navbar topnav-navbar-dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "list-unstyled topbar-right-menu float-right mb-0"
  }, /*#__PURE__*/React.createElement("li", {
    className: "dropdown notification-list"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link dropdown-toggle nav-user arrow-none mr-0",
    "data-toggle": "dropdown",
    id: "topbar-userdrop",
    href: "#",
    role: "button",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, /*#__PURE__*/React.createElement("span", {
    className: "account-user-avatar"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/images/avatar.jpg",
    alt: "user-image",
    className: "rounded-circle"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "account-user-name"
  }, user.name), /*#__PURE__*/React.createElement("span", {
    className: "account-position"
  }, user.roles[0].name))), /*#__PURE__*/React.createElement("div", {
    className: "dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu profile-dropdown",
    "aria-labelledby": "topbar-userdrop"
  }, /*#__PURE__*/React.createElement("div", {
    className: " dropdown-header noti-title"
  }, /*#__PURE__*/React.createElement("h6", {
    className: "text-overflow m-0"
  }, "Welcome !")), /*#__PURE__*/React.createElement("a", {
    href: "javascript:void(0);",
    className: "dropdown-item notify-item"
  }, /*#__PURE__*/React.createElement("i", {
    className: "mdi mdi-lifebuoy mr-1"
  }), /*#__PURE__*/React.createElement("span", null, "Support")), /*#__PURE__*/React.createElement("a", {
    href: "javascript:void(0);",
    className: "dropdown-item notify-item",
    onClick: logoutUser
  }, /*#__PURE__*/React.createElement("i", {
    className: "mdi mdi-logout mr-1"
  }), /*#__PURE__*/React.createElement("span", null, "Logout"))))), /*#__PURE__*/React.createElement("a", {
    className: "button-menu-mobile disable-btn"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lines"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)))));
}

/***/ })

}]);