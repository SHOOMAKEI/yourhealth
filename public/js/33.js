(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./resources/js/Pages/Services/packages/PackageFeature.jsx":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/Services/packages/PackageFeature.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PackageFeature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pages_Services_packages_membership_AddMembership__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Pages/Services/packages/membership/AddMembership */ "./resources/js/Pages/Services/packages/membership/AddMembership.jsx");
/* harmony import */ var _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Pages/Utilities/Constants */ "./resources/js/Pages/Utilities/Constants.js");
/* harmony import */ var _Pages_Services_packages_features_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Pages/Services/packages/features/Heading */ "./resources/js/Pages/Services/packages/features/Heading.jsx");
/* harmony import */ var _Pages_Services_packages_features_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Pages/Services/packages/features/List */ "./resources/js/Pages/Services/packages/features/List.jsx");
/* harmony import */ var _Pages_Services_packages_features_deleteDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Pages/Services/packages/features/deleteDialog */ "./resources/js/Pages/Services/packages/features/deleteDialog.jsx");
/* harmony import */ var _Pages_Services_packages_features_AddFeature__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Pages/Services/packages/features/AddFeature */ "./resources/js/Pages/Services/packages/features/AddFeature.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function PackageFeature(_ref) {
  var packages = _ref.packages,
      services = _ref.services;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      selectedPackage = _useState2[0],
      setSelectedPackage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(packages),
      _useState4 = _slicedToArray(_useState3, 2),
      shownPackages = _useState4[0],
      setShownPackages = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setShownPackages(packages);
  }, [packages]);

  function renderModal() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_Services_packages_features_AddFeature__WEBPACK_IMPORTED_MODULE_6__["default"], {
      modalID: _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_2__["ADD_FEATURE_MODAL_ID"],
      operation: selectedPackage.id ? "update" : "add",
      initialData: {
        id: selectedPackage.id,
        name: selectedPackage.name,
        service_id: services && services.length > 0 ? services[0].id : null,
        services: selectedPackage.services
      },
      services: services
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_Services_packages_features_Heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Add Package Feature",
    modalID: _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_2__["ADD_FEATURE_MODAL_ID"],
    renderModal: renderModal,
    callback: setSelectedPackage,
    services: services
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-sm-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12"
  }, shownPackages && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_Services_packages_features_List__WEBPACK_IMPORTED_MODULE_4__["default"], {
    memberships: shownPackages,
    callback: setSelectedPackage
  })), selectedPackage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_Services_packages_features_deleteDialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
    membership: selectedPackage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-4"
  }))));
}

/***/ }),

/***/ "./resources/js/Pages/Services/packages/features/Heading.jsx":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/Services/packages/features/Heading.jsx ***!
  \*******************************************************************/
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
      services = _ref.services;

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
      var _services$;

      return callback({
        name: "",
        services: [],
        service_id: (_services$ = services[0]) === null || _services$ === void 0 ? void 0 : _services$.id
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

/***/ }),

/***/ "./resources/js/Pages/Services/packages/features/List.jsx":
/*!****************************************************************!*\
  !*** ./resources/js/Pages/Services/packages/features/List.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Pages/Utilities/Constants */ "./resources/js/Pages/Utilities/Constants.js");



function List(_ref) {
  var memberships = _ref.memberships,
      callback = _ref.callback;
  var selectedMembership = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["usePage"])().props.selectedMembership;

  function _selectMembership(membership) {
    callback(membership);
  }

  $(document).ready(function () {
    $('#package-feature-table').DataTable();
    $('.dataTables_filter input[type="search"]').css({
      'width': '145px',
      'display': 'inline-block'
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    id: "package-feature-table",
    className: "table table-centered table-border mb-0 font-14"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Services"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, " Created At"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, memberships.map(function (membership, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: index + 1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, membership.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, membership.services.map(function (service, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: index + 1
      }, service.name);
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, membership.created_at), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "uil uil-bright font-16 mr-1 text-primary"
    }), "More"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "dropdown-menu"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      className: "dropdown-item",
      "data-toggle": "modal",
      "data-target": "#".concat(_Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_2__["ADD_FEATURE_MODAL_ID"]),
      onClick: function onClick() {
        return _selectMembership(membership);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "uil uil-edit mr-1"
    }), "Edit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "dropdown-divider"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "",
      className: "dropdown-item text-danger",
      "data-toggle": "modal",
      "data-target": "#delete-feature-".concat(membership.id),
      onClick: function onClick() {
        return _selectMembership(membership);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "uil uil-trash-alt mr-1"
    }), "Delete"))));
  }))));
}

/***/ }),

/***/ "./resources/js/Pages/Services/packages/features/deleteDialog.jsx":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Services/packages/features/deleteDialog.jsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeleteMembershipDialog; });
/* harmony import */ var _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/LoadingButton */ "./resources/js/Shared/LoadingButton.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function DeleteMembershipDialog(_ref) {
  var membership = _ref.membership;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      selectedMembership = _useState2[0],
      setSelectedMembership = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      sending = _useState4[0],
      setSending = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setSelectedMembership(membership);
  }, [membership]);

  function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__["Inertia"]["delete"](route('feature_registration.destroy', selectedMembership.id)).then(function () {
      setSending(false);
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "delete-feature-".concat(membership.id),
    className: "modal fade",
    tabIndex: -1,
    role: "dialog",
    "aria-labelledby": "delete-categoryLabel",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "modal-dialog"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "modal-content modal-filled bg-danger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "modal-title",
    id: "delete-categoryLabel"
  }, "delete ", selectedMembership.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-hidden": "true"
  }, "\xD7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "modal-body"
  }, "Are you sure you want to delete ", selectedMembership.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    className: "btn btn-light",
    "data-dismiss": "modal"
  }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    className: "btn btn-outline-light",
    "data-dismiss": "modal",
    onClick: handleSubmit
  }, "Delete ")))));
}

/***/ })

}]);