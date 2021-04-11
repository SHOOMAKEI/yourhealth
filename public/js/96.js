(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[96],{

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