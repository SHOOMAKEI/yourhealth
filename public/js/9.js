(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./resources/js/Pages/Dashboard.js":
/*!*****************************************!*\
  !*** ./resources/js/Pages/Dashboard.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.js");



var Dashboard = function Dashboard() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header pdn-20 pdn-sm-x-40"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Blank Page")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body pdn-sm-40 pdn-t-20-imp"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card-text mb-3 wth-sm-70p"
  }, "Paragraph title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pdn-sm-55 pdn-15 bdr"
  }, "Page contents go here. Create something awesome!")));
};

Dashboard.layout = function (page) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: page
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./resources/js/Shared/BottomHeader.js":
/*!*********************************************!*\
  !*** ./resources/js/Shared/BottomHeader.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Shared_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/Icon */ "./resources/js/Shared/Icon.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["usePage"])(),
      auth = _usePage.auth;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      menuOpened = _useState2[0],
      setMenuOpened = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-white border-b w-full p-4 md:py-0 md:px-12 text-sm d:text-md flex justify-between items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-1 mr-4"
  }, auth.user.account.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center cursor-pointer select-none group",
    onClick: function onClick() {
      return setMenuOpened(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-gray-800 group-hover:text-indigo-600 focus:text-indigo-600 mr-1 whitespace-no-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, auth.user.first_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ml-1 hidden md:inline"
  }, auth.user.last_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "w-5 h-5 fill-current text-gray-800 group-hover:text-indigo-600 focus:text-indigo-600",
    name: "cheveron-down"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: menuOpened ? '' : 'hidden'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "whitespace-no-wrap absolute z-20 mt-8 left-auto top-0 right-0 py-2 shadow-xl bg-white rounded text-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: route('users.edit', auth.user.id),
    className: "block px-6 py-2 hover:bg-indigo-600 hover:text-white"
  }, "My Profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: route('users'),
    className: "block px-6 py-2 hover:bg-indigo-600 hover:text-white"
  }, "Manage Users"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: route('logout'),
    className: "block px-6 py-2 hover:bg-indigo-600 hover:text-white",
    method: "post"
  }, "Logout")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: function onClick() {
      setMenuOpened(false);
    },
    className: "bg-black opacity-25 fixed inset-0 z-10"
  }))));
});

/***/ }),

/***/ "./resources/js/Shared/FlashMessages.js":
/*!**********************************************!*\
  !*** ./resources/js/Shared/FlashMessages.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["usePage"])(),
      success = _usePage.success,
      error = _usePage.error;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "toast ".concat(success ? 'bg-success' : 'bg-danger'),
    "aria-atomic": "true",
    "data-delay": "10000",
    "data-autohide": "true",
    style: {
      position: 'absolute',
      top: 0,
      right: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "toast-header text-white ".concat(success ? 'bg-success' : 'bg-danger')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    className: "mr-auto text-white"
  }, "Success"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-white"
  }, "Just Now"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "ml-2 mb-1 close text-white",
    "data-dismiss": "toast",
    "aria-label": "Close"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "toast-body bg-success text-white"
  }, success ? success : error));
});

/***/ }),

/***/ "./resources/js/Shared/Icon.js":
/*!*************************************!*\
  !*** ./resources/js/Shared/Icon.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: className
  });
});

/***/ }),

/***/ "./resources/js/Shared/Layout.js":
/*!***************************************!*\
  !*** ./resources/js/Shared/Layout.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Shared_MainMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/MainMenu */ "./resources/js/Shared/MainMenu.js");
/* harmony import */ var _Shared_FlashMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/FlashMessages */ "./resources/js/Shared/FlashMessages.js");
/* harmony import */ var _Shared_TopHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/TopHeader */ "./resources/js/Shared/TopHeader.js");
/* harmony import */ var _Shared_BottomHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Shared/BottomHeader */ "./resources/js/Shared/BottomHeader.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_6__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;

  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_6__["usePage"])(),
      user = _usePage.user;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      sending = _useState2[0],
      setSending = _useState2[1]; // function handleSubmit(e) {
  //   e.preventDefault();
  //   setSending(true);
  //   Inertia.post(route('logout'), values).then(() => {
  //     setSending(false);
  //   });
  // }


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "app"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "topbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "topbar-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main-logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "index.html",
    className: "madmin-logo-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "assets/images/madmin-logo-icon-white.png",
    className: "logo",
    alt: "Madmin logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "index.html",
    className: "logo-text"
  }, "DukaPoa Pro"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar-main navbar-full d-flex flex-nowrap flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "navbar-inner nav-left d-flex flex-row pl-0 mb-0 order-1 bdr-l"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "nav-link text-center switch-sidebar-mode"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-menu"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "navbar-inner d-flex flex-row ml-auto mb-0 m-20 order-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "search-dropin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    id: "searchIcon",
    className: "nav-link search-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-magnifier"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "search-input-field"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "search",
    className: "form-control form-field",
    placeholder: "Type to search..."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-magnifier"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    id: "closeSearchBox",
    href: "#",
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: " icon-close"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "dropdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    className: "nav-link notification-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-grid"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-menu pdn-8",
    "aria-labelledby": "dropdownMenuButton"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "boxed-dropdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "dropdown-icon-menu pt-3 pb-3 ",
    href: "mail-inbox.html"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-envelope-open d-block"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Mail")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "dropdown-icon-menu pt-3 pb-3",
    href: "chat.html"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-bubbles d-block"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Messages")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "dropdown-icon-menu pt-3 pb-3",
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-bag d-block"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Orders")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "dropdown-icon-menu pt-3 pb-3",
    href: "fullcalendar.html"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-calendar d-block"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Calender"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "dropdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    className: "nav-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-bell"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "notify"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "heartbeat"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-menu pdn-8",
    "aria-labelledby": "dropdownMenuButton"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "notification-dropdown list-group-notification list-group list-group-borderless"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "notification-wrapper ps"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-row list-group-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "assets/images/user/thumb/default.png",
    alt: "Notification",
    className: "list-thumbnail  rounded-circle"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "top"
  }, "John Snow commented"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "bottom"
  }, "02 minutes ago")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "buttons ml-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-trash"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ps__rail-x",
    style: {
      left: "0px",
      top: "0px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ps__thumb-x",
    tabIndex: "0",
    style: {
      left: "0px",
      width: "0px"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ps__rail-y",
    style: {
      top: "0px",
      right: "0px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ps__thumb-y",
    tabIndex: "0",
    style: {
      top: "0px",
      height: "0px"
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-row list-group-item list-group-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-uppercase"
  }, "View All")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "dropdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    className: "nav-link user-dropdown-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "assets/images/user/thumb/default.png",
    alt: "Notification",
    className: "list-thumbnail  rounded-circle"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-dropdown dropdown-menu pdn-15",
    "aria-labelledby": "dropdownMenuButton"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "media"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "assets/images/user/thumb/default.png",
    alt: "Notification",
    className: "user-thumb rounded-circle mr-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "media-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "mgn-0"
  }, "Sirus Holding"), "krista@example.com")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-group list-group-borderless mgn-t-15"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-group-item pdn-y-5 pdn-x-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-user"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "mgn-l-10"
  }, "Profile"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-group-item pdn-y-5 pdn-x-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-key"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "mgn-l-10"
  }, "Change password"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-group-item pdn-y-5 pdn-x-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-settings"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "mgn-l-10"
  }, "Settings"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-group-item pdn-y-5 pdn-x-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-logout"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_6__["InertiaLink"], {
    href: route('logout'),
    method: "post"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "mgn-l-10"
  }, "Signout"))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("aside", {
    className: "aside-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "aside-inner ps ps--active-y"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "aisde-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "assets/images/user/thumb/user-thumb-7.png",
    alt: "User image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "user-name mgn-t-15"
  }, "Vela Holdooing")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "aside-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "aside-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_MainMenu__WEBPACK_IMPORTED_MODULE_2__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ps__rail-x",
    style: {
      left: '0px',
      top: '0px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ps__thumb-x",
    tabIndex: "0",
    style: {
      left: '0px',
      width: '0px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ps__rail-y",
    style: {
      top: 'px',
      height: '512px',
      right: '0px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ps__thumb-y",
    tabIndex: "0",
    style: {
      top: '0px',
      height: '161px'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-content"
  }, children)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "left-footer"
  }, "\xA9 2021", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "DukaPoa Pro")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "right-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "About us")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "Contact")))))));
});

/***/ }),

/***/ "./resources/js/Shared/MainMenu.js":
/*!*****************************************!*\
  !*** ./resources/js/Shared/MainMenu.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_MainMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/MainMenuItem */ "./resources/js/Shared/MainMenuItem.js");
/* harmony import */ var _Shared_MultiLinkMainMenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/MultiLinkMainMenuItem */ "./resources/js/Shared/MultiLinkMainMenuItem.js");



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "nav aside-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_MainMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: "Dashboard",
    link: "dashboard",
    icon: "icon-grid"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_MainMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: "Store Configuration",
    link: "stores.index",
    icon: "con-equalizer"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_MainMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: "Product",
    link: "product.index",
    icon: "icon-bag"
  }));
});

/***/ }),

/***/ "./resources/js/Shared/MainMenuItem.js":
/*!*********************************************!*\
  !*** ./resources/js/Shared/MainMenuItem.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Shared_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/Icon */ "./resources/js/Shared/Icon.js");



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var icon = _ref.icon,
      link = _ref.link,
      text = _ref.text;
  var isActive = route().current(link + '*');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: route(link),
    className: "nav-link ".concat(isActive ? 'active' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: icon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, text)));
});

/***/ }),

/***/ "./resources/js/Shared/MultiLinkMainMenuItem.js":
/*!******************************************************!*\
  !*** ./resources/js/Shared/MultiLinkMainMenuItem.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Shared_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/Icon */ "./resources/js/Shared/Icon.js");



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var icon = _ref.icon,
      link = _ref.link,
      text = _ref.text,
      children = _ref.children;
  var isActive = route().current(link + '*');

  function handleOnClick(e) {
    e.preventDefault();
    isActive = !isActive; // console.log(isActive)
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item has-submenu ".concat(isActive ? 'drop-down' : ''),
    onClick: handleOnClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "#",
    className: "nav-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: icon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, text)), children);
});

/***/ }),

/***/ "./resources/js/Shared/TopHeader.js":
/*!******************************************!*\
  !*** ./resources/js/Shared/TopHeader.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Shared_MainMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/MainMenu */ "./resources/js/Shared/MainMenu.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      menuOpened = _useState2[0],
      setMenuOpened = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-indigo-900 md:flex-shrink-0 md:w-56 px-6 py-4 flex items-center justify-between md:justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    className: "mt-1",
    href: "/"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "relative md:hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    onClick: function onClick() {
      return setMenuOpened(true);
    },
    className: "fill-current text-white w-6 h-6 cursor-pointer",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(menuOpened ? '' : 'hidden', " absolute right-0 z-20")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_MainMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "relative z-20 mt-2 px-8 py-4 pb-2 shadow-lg bg-indigo-800 rounded"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: function onClick() {
      setMenuOpened(false);
    },
    className: "bg-black opacity-25 fixed inset-0 z-10"
  }))));
});

/***/ })

}]);