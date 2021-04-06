(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./resources/js/Pages/Services/packages/manage.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/Pages/Services/packages/manage.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pages_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Pages/framework */ "./resources/js/Pages/framework.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_services_packages_Memberships__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/pages/services/packages/Memberships */ "./resources/js/pages/services/packages/Memberships.jsx");
/* harmony import */ var _pages_services_packages_Packages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages/services/packages/Packages */ "./resources/js/pages/services/packages/Packages.jsx");





var ManageServices = function ManageServices() {
  function renderContent() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row",
      style: {
        paddingTop: 30 + 'px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-sm-2 mb-2 mb-sm-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "nav flex-column nav-pills",
      id: "v-pills-tab",
      role: "tablist",
      "aria-orientation": "vertical"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "nav-link active show my-2",
      id: "v-pills-home-tab",
      "data-toggle": "pill",
      href: "#v-pills-memberships",
      role: "tab",
      "aria-controls": "v-pills-memberships",
      "aria-selected": "true"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "mdi mdi-home-variant d-md-none d-block"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "d-none d-md-block"
    }, "Memberships")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "nav-link",
      id: "v-pills-packages-tab",
      "data-toggle": "pill",
      href: "#v-pills-packages",
      role: "tab",
      "aria-controls": "v-pills-packages",
      "aria-selected": "false"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "mdi mdi-account-circle d-md-none d-block"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "d-none d-md-block"
    }, "Packages")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-sm-10"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "tab-content",
      id: "v-pills-tabContent"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "tab-pane fade active show",
      id: "v-pills-memberships",
      role: "tabpanel",
      "aria-labelledby": "v-pills-memberships-tab"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_pages_services_packages_Memberships__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "tab-pane fade",
      id: "v-pills-packages",
      role: "tabpanel",
      "aria-labelledby": "v-pills-packages-tab"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "mb-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_pages_services_packages_Packages__WEBPACK_IMPORTED_MODULE_3__["default"], null))))));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Pages_framework__WEBPACK_IMPORTED_MODULE_0__["default"], {
    renderContent: renderContent
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ManageServices);

/***/ }),

/***/ "./resources/js/Pages/Services/packages/membership/AddMembership.jsx":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Services/packages/membership/AddMembership.jsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddMembershipModal; });
/* harmony import */ var _Pages_Utilities_FormInputError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Pages/Utilities/FormInputError */ "./resources/js/Pages/Utilities/FormInputError.jsx");
/* harmony import */ var _pages_Utilities_ModalForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/pages/Utilities/ModalForm */ "./resources/js/pages/Utilities/ModalForm.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
// import * as Yup from "yup";
//
// import { CREATE_PACKAGE_MEMBERSHIP, UPDATE_PACKAGE_MEMBERSHIP } from "@pages/utils/Mutations";
// import {Field, Form, Formik, FormikErrors, FormikHelpers} from "formik";
// import {addMembership, updateMembership} from "@pages/data/actions/memberships";
// import {useDispatch, useSelector} from "react-redux";

 // import Spinner from "@/pages/auth/components/Spinner";
// import {membershipsStateValues} from "@pages/data/reducers/memberships";
// import {membershipsValues} from "@pages/data/constants/memberships";
// import { useApi } from "@pages/utils/ApolloClient";


function AddMembershipModal(_ref) {
  var modalID = _ref.modalID,
      operation = _ref.operation,
      title = _ref.title;
  var initialValues = {
    name: "",
    description: "No description",
    is_active: false
  }; // const dispatch = useDispatch();
  // const {selectedMembership} = useSelector(state => state.membershipsStore)
  // const [createPackageMembership, createPackageMembershipResponse] = useApi({query: CREATE_PACKAGE_MEMBERSHIP});
  // const [updatePackageMembership, updatePackageMembershipResponse] = useApi({query: UPDATE_PACKAGE_MEMBERSHIP});

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var data = createPackageMembershipResponse.data;

    if (data && data.createPackageMemberShip) {// dispatch(addMembership(data.createPackageMemberShip));
    }
  }, [createPackageMembershipResponse.data]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var data = updatePackageMembershipResponse.data;

    if (data && data.updatePackageMemberShip) {// dispatch(updateMembership(data.updatePackageMemberShip));
    }
  }, [updatePackageMembershipResponse.data]);

  function onSubmit(values, _ref2) {
    var setSubmitting = _ref2.setSubmitting;
    setTimeout(function () {
      switch (operation) {
        case "add":
          _addMembership(values.name, values.description, values.is_active);

          break;

        case "update":
          _updateMembership(values.name, values.description, selectedMembership.is_active);

          break;

        default:
          _addMembership(values.name, values.description, values.is_active);

          break;
      }

      setSubmitting(false);
    }, 500);
  }

  function _addMembership(name, description, status) {
    var membership = {
      name: name,
      description: description,
      is_active: status
    };
    createPackageMembership({
      variables: {
        input: membership
      }
    });
  }

  function _updateMembership(name, description, status) {
    var membership = {
      id: selectedMembership.id,
      name: name,
      description: description,
      is_active: status
    };
    updatePackageMembership({
      variables: {
        input: membership
      }
    });
  }

  function renderForm() {
    return createPackageMembershipResponse.loading || updatePackageMembershipResponse.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Spinner, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Formik, {
      initialValues: initialValues,
      onSubmit: onSubmit,
      validationSchema: MembershipSchema,
      enableReinitialize: true
    }, function (_ref3) {
      var errors = _ref3.errors,
          touched = _ref3.touched,
          setFieldValue = _ref3.setFieldValue;
      Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
        if (operation === "update") {
          setFieldValue("name", selectedMembership.name);
          setFieldValue("description", selectedMembership.description);
        }
      }, [selectedMembership]);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Form, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        htmlFor: "name"
      }, "Membership name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Field, {
        id: "name",
        name: "name",
        placeholder: "membership name",
        type: "text",
        className: "form-control"
      }), errors.name && touched.name ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Pages_Utilities_FormInputError__WEBPACK_IMPORTED_MODULE_0__["default"], {
        title: "Membership name error",
        message: errors.name
      }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        htmlFor: "description"
      }, "Membership description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Field, {
        id: "description",
        name: "description",
        placeholder: "description",
        as: "textarea",
        className: "form-control",
        rows: 3
      }), errors.description && touched.description ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Pages_Utilities_FormInputError__WEBPACK_IMPORTED_MODULE_0__["default"], {
        title: "Description error",
        message: errors.description
      }) : null), operation === "add" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "custom-control custom-switch form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Field, {
        type: "checkbox",
        className: "custom-control-input",
        id: "is_active",
        name: "is_active"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "custom-control-label",
        htmlFor: "is_active"
      }, "Show membership to public")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "text-muted"
      }, "If the above option is selected the public will see the membership, otherwise the public will not see the membership. You can edit it later on from category settings.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "modal-footer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        type: "button",
        className: "btn btn-light",
        "data-dismiss": "modal"
      }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary"
      }, operation === "add" ? "Add membership" : "Update")));
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pages_Utilities_ModalForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    modalID: modalID,
    title: title ? title : "Add new membership",
    renderForm: renderForm
  });
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

/***/ }),

/***/ "./resources/js/Pages/Utilities/sidenav.jsx":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Utilities/sidenav.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);


function Sidebar() {
  // const [queryAthUser, {loading, errors, data, called}] = useApi({query: QUERY_AUTH_USER})
  // useEffect(() => {
  //     // queryAthUser({})
  // }, [])
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "left-side-menu left-side-menu-detached"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "leftbar-user"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/images/user.png",
    alt: "user-image",
    height: "42",
    className: "rounded-circle shadow-sm"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "leftbar-user-name"
  }, 'Loading...'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "metismenu side-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "side-nav-title side-nav-item"
  }, "Navigation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "side-nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "side-nav-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "uil-home-alt"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " Home "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "side-nav-title side-nav-item"
  }, "Modules"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "side-nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "side-nav-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "uil-store"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " Services "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "menu-arrow"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "side-nav-second-level",
    "aria-expanded": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/services/categories/manage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Manage Services"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/services/requested/manage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "New Services requests"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/services/packages/manage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Packages"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "side-nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "side-nav-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "uil-constructor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " Service Providers "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "menu-arrow"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "side-nav-second-level",
    "aria-expanded": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/service-providers/requests/providers"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Registration Requests")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "clearfix"
  }));
}

/***/ }),

/***/ "./resources/js/Pages/framework.jsx":
/*!******************************************!*\
  !*** ./resources/js/Pages/framework.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utilities_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utilities/sidenav */ "./resources/js/Pages/Utilities/sidenav.jsx");
/* harmony import */ var _Utilities_topnav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utilities/topnav */ "./resources/js/Pages/Utilities/topnav.jsx");




function Framework(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utilities_topnav__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utilities_sidenav__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, children)))));
}

/* harmony default export */ __webpack_exports__["default"] = (Framework);

/***/ }),

/***/ "./resources/js/pages/services/packages/Memberships.jsx":
/*!**************************************************************!*\
  !*** ./resources/js/pages/services/packages/Memberships.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Memberships; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/pages/Utilities/Constants */ "./resources/js/pages/Utilities/Constants.js");
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
      modalID: _pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__["ADD_MEMBERSHIP_MODAL_ID"],
      operation: "add"
    });
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement(_Pages_Services_packages_membership_Heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Create membership",
    modalID: _pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__["ADD_MEMBERSHIP_MODAL_ID"],
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

/***/ "./resources/js/pages/services/packages/Packages.jsx":
/*!***********************************************************!*\
  !*** ./resources/js/pages/services/packages/Packages.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Packages; });
function Packages() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Packages from components"));
}

/***/ })

}]);