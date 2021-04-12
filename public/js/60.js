(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "./resources/js/Pages/Services/packages/Memberships.jsx":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/Services/packages/Memberships.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Memberships; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Pages/Utilities/Constants */ "./resources/js/Pages/Utilities/Constants.js");
/* harmony import */ var _Pages_Services_packages_membership_AddMembership__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Pages/Services/packages/membership/AddMembership */ "./resources/js/Pages/Services/packages/membership/AddMembership.jsx");
/* harmony import */ var _Pages_Services_packages_membership_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Pages/Services/packages/membership/Heading */ "./resources/js/Pages/Services/packages/membership/Heading.jsx");
/* harmony import */ var _Pages_Services_packages_membership_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Pages/Services/packages/membership/List */ "./resources/js/Pages/Services/packages/membership/List.jsx");
/* harmony import */ var _Pages_Services_packages_membership_SelectedInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Pages/Services/packages/membership/SelectedInfo */ "./resources/js/Pages/Services/packages/membership/SelectedInfo.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






 // import {membershipsStateValues} from "@pages/data/reducers/memberships";
// import {useSelector} from "react-redux";

function Memberships() {
  var _useSelector = useSelector(function (state) {
    return state.membershipsStore;
  }),
      memberships = _useSelector.memberships;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(memberships),
      _useState2 = _slicedToArray(_useState, 2),
      shownMemberships = _useState2[0],
      setShownMemberships = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setShownMemberships(memberships);
  }, [memberships]);

  function searchMemberships(content) {
    if (content.length === 0) {
      setShownMemberships(memberships);
    } else {
      setShownMemberships(memberships.filter(function (membership) {
        if (membership.name.toLowerCase().includes(content.toLowerCase())) {
          return membership;
        }
      }));
    }
  }

  function renderModal() {
    return /*#__PURE__*/React.createElement(_Pages_Services_packages_membership_AddMembership__WEBPACK_IMPORTED_MODULE_2__["default"], {
      modalID: _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__["ADD_MEMBERSHIP_MODAL_ID"],
      operation: "add"
    });
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement(_Pages_Services_packages_membership_Heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Create membership",
    modalID: _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__["ADD_MEMBERSHIP_MODAL_ID"],
    renderModal: renderModal,
    search: searchMemberships
  }), /*#__PURE__*/React.createElement("div", {
    className: "row justify-content-sm-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-8"
  }, /*#__PURE__*/React.createElement(_Pages_Services_packages_membership_List__WEBPACK_IMPORTED_MODULE_4__["default"], {
    memberships: shownMemberships
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-4"
  }, /*#__PURE__*/React.createElement(_Pages_Services_packages_membership_SelectedInfo__WEBPACK_IMPORTED_MODULE_5__["default"], null)))));
}

/***/ }),

/***/ "./resources/js/Pages/Services/packages/membership/Heading.jsx":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Services/packages/membership/Heading.jsx ***!
  \*********************************************************************/
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "btn btn-danger mb-3",
    "data-toggle": "modal",
    "data-target": "#".concat(modalID)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-plus"
  }), title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-sm-right float-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Search...",
    id: "search-input",
    onInput: onSearch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "btn btn-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "uil uil-search"
  }))))))), renderModal && renderModal());
}

/***/ }),

/***/ "./resources/js/Pages/Services/packages/membership/List.jsx":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/Services/packages/membership/List.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
// import {useDispatch, useSelector} from "react-redux";
//
// import {membershipsStateValues} from "@pages/data/reducers/memberships";
// import {membershipsValues} from "@pages/data/constants/memberships";
// import {selectMembership} from "@pages/data/actions/memberships";
function List(_ref) {
  var memberships = _ref.memberships;

  var _useSelector = useSelector(function (state) {
    return state.membershipsStore;
  }),
      selectedMembership = _useSelector.selectedMembership;

  var dispatch = useDispatch();

  function _selectMembership(membership) {
    dispatch(selectMembership(membership));
  }

  return /*#__PURE__*/React.createElement("div", null, memberships.map(function (membership) {
    return /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-sm-4 mb-2 mb-sm-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "custom-control custom-checkbox",
      onClick: function onClick() {
        return _selectMembership(membership);
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      className: "custom-control-input",
      id: "membership-".concat(membership.id),
      checked: membership.id === selectedMembership.id
    }), /*#__PURE__*/React.createElement("label", {
      className: "custom-control-label",
      htmlFor: "task1"
    }, membership.name))), /*#__PURE__*/React.createElement("div", {
      className: "col-sm-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "d-flex justify-content-between float-right"
    }, /*#__PURE__*/React.createElement("ul", {
      className: "list-inline font-13 text-right"
    }, /*#__PURE__*/React.createElement("li", {
      className: "list-inline-item"
    }, /*#__PURE__*/React.createElement("i", {
      className: "uil uil-schedule font-16 mr-1"
    }), " ", membership.created_at), /*#__PURE__*/React.createElement("li", {
      className: "list-inline-item ml-2"
    }, membership.is_active ? /*#__PURE__*/React.createElement("span", {
      className: "badge badge-success-lighten p-1"
    }, " Enabled") : /*#__PURE__*/React.createElement("span", {
      className: "badge badge-danger-lighten p-1"
    }, " Disabled")), /*#__PURE__*/React.createElement("li", {
      className: "list-inline-item ml-2"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "btn btn-link dropdown-toggle",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false",
      style: {
        lineHeight: 0.5,
        paddingTop: 0,
        paddingBottom: 0
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "uil uil-bright font-16 mr-1 text-primary"
    }), "More"), /*#__PURE__*/React.createElement("div", {
      className: "dropdown-menu"
    }, /*#__PURE__*/React.createElement("a", {
      href: "javascript:void(0);",
      className: "dropdown-item",
      onClick: function onClick() {
        return _selectMembership(membership);
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "uil uil-eye mr-1"
    }), "Show info"), /*#__PURE__*/React.createElement("a", {
      href: "javascript:void(0);",
      className: "dropdown-item"
    }, /*#__PURE__*/React.createElement("i", {
      className: "uil uil-eye mr-1"
    }), "Edit")))))));
  }));
}

/***/ })

}]);