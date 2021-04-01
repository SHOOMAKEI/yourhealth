(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./resources/js/Pages/Services/packages/membership/SelectedInfo.jsx":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Services/packages/membership/SelectedInfo.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SelectedInfo; });
/* harmony import */ var _pages_services_packages_membership_AddMembership__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/pages/services/packages/membership/AddMembership */ "./resources/js/pages/services/packages/membership/AddMembership.jsx");
/* harmony import */ var _pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/pages/Utilities/Constants */ "./resources/js/pages/Utilities/Constants.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
// import {useDispatch, useSelector} from "react-redux";
 // import Spinner from "@pages/auth/components/Spinner";

 // import { UPDATE_PACKAGE_MEMBERSHIP } from "@pages/utils/Mutations";
// import {membershipsStateValues} from "@pages/data/reducers/memberships";
// import {updateMembership} from "@pages/data/actions/memberships";
// import { useApi } from "@pages/utils/ApolloClient";


function SelectedInfo() {
  // const dispatch = useDispatch();
  // const [updatePackageMembership, updatePackageMembershipResponse] = useApi({query: UPDATE_PACKAGE_MEMBERSHIP});
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var data = updatePackageMembershipResponse.data;

    if (data && data.updatePackageMemberShip) {
      dispatch(updateMembership(data.updatePackageMemberShip));
    }
  }, [updatePackageMembershipResponse.data]);

  function toggleVisibility() {
    var membership = {
      id: selectedMembership.id,
      name: selectedMembership.name,
      description: selectedMembership.description,
      is_active: !selectedMembership.is_active
    };
    updatePackageMembership({
      variables: {
        input: membership
      }
    });
  }

  function renderModal() {
    return /*#__PURE__*/React.createElement(_pages_services_packages_membership_AddMembership__WEBPACK_IMPORTED_MODULE_0__["default"], {
      modalID: _pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__["UPDATE_MEMBERSHIP_MODAL_ID"],
      operation: "update"
    });
  }

  var _useSelector = useSelector(function (state) {
    return state.membershipsStore;
  }),
      selectedMembership = _useSelector.selectedMembership;

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dropdown card-widgets"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "dropdown-toggle arrow-none",
    "data-toggle": "dropdown",
    "aria-expanded": "false"
  }, /*#__PURE__*/React.createElement("i", {
    className: "uil uil-ellipsis-h"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dropdown-menu dropdown-menu-right"
  }, /*#__PURE__*/React.createElement("a", {
    href: "javascript:void(0);",
    className: "dropdown-item",
    onClick: toggleVisibility
  }, selectedMembership.is_active ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "uil uil-ban mr-1"
  }), "Hide from public") : /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "uil uil-eye mr-1"
  }), "Show to public")), /*#__PURE__*/React.createElement("a", {
    href: "javascript:void(0);",
    className: "dropdown-item",
    "data-toggle": "modal",
    "data-target": "#".concat(_pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__["UPDATE_MEMBERSHIP_MODAL_ID"])
  }, /*#__PURE__*/React.createElement("i", {
    className: "uil uil-edit mr-1"
  }), "Edit"), /*#__PURE__*/React.createElement("div", {
    className: "dropdown-divider"
  }), /*#__PURE__*/React.createElement("a", {
    href: "javascript:void(0);",
    className: "dropdown-item text-danger",
    "data-toggle": "modal",
    "data-target": "#delete-category"
  }, /*#__PURE__*/React.createElement("i", {
    className: "uil uil-trash-alt mr-1"
  }), "Delete"))), /*#__PURE__*/React.createElement("h4", null, selectedMembership.name), /*#__PURE__*/React.createElement("span", null, updatePackageMembershipResponse.loading ? /*#__PURE__*/React.createElement(Spinner, null) : selectedMembership.is_active ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "mdi mdi-circle text-success"
  }), " Enabled") : /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "mdi mdi-circle text-danger"
  }), "  Disabled")), /*#__PURE__*/React.createElement("hr", {
    className: "mt-3 mb-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("p", null, selectedMembership.description), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-2 mb-1 text-muted"
  }, "Created At"), /*#__PURE__*/React.createElement("div", {
    className: "media"
  }, /*#__PURE__*/React.createElement("i", {
    className: "uil uil-schedule font-18 text-success mr-1"
  }), /*#__PURE__*/React.createElement("div", {
    className: "media-body"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "mt-1 font-14"
  }, selectedMembership.created_at)))), /*#__PURE__*/React.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-2 mb-1 text-muted"
  }, "Updated At"), /*#__PURE__*/React.createElement("div", {
    className: "media"
  }, /*#__PURE__*/React.createElement("i", {
    className: "uil uil-schedule font-18 text-success mr-1"
  }), /*#__PURE__*/React.createElement("div", {
    className: "media-body"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "mt-1 font-14"
  }, selectedMembership.updated_at))))))), renderModal());
}

/***/ }),

/***/ "./resources/js/Pages/Utilities/FormInputError.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/Pages/Utilities/FormInputError.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormInputError; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function FormInputError(_ref) {
  var title = _ref.title,
      message = _ref.message;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["React"].createElement("div", {
    className: "alert alert-danger bg-danger text-white border-0 fade show mt-1",
    role: "alert"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["React"].createElement("strong", null, title, " - "), " ", message);
}

/***/ }),

/***/ "./resources/js/pages/Utilities/Constants.js":
/*!***************************************************!*\
  !*** ./resources/js/pages/Utilities/Constants.js ***!
  \***************************************************/
/*! exports provided: ADD_CATEGORY_MODAL_ID, UPDATE_CATEGORY_MODAL_ID, SERVICE_CATEGORIES_TABLE, PROVIDER_PROFILE_MODAL_ID, ADD_MEMBERSHIP_MODAL_ID, UPDATE_MEMBERSHIP_MODAL_ID, ADD_FACILITY_MODAL_ID, ADD_QUALIFICATION_MODAL_ID, ADD_MEDICAL_REGISTRATION_MODAL_ID, REQUEST_SERVICE_MODAL_ID, SET_SERVICE_MODAL_PRICE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CATEGORY_MODAL_ID", function() { return ADD_CATEGORY_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CATEGORY_MODAL_ID", function() { return UPDATE_CATEGORY_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICE_CATEGORIES_TABLE", function() { return SERVICE_CATEGORIES_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROVIDER_PROFILE_MODAL_ID", function() { return PROVIDER_PROFILE_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MEMBERSHIP_MODAL_ID", function() { return ADD_MEMBERSHIP_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MEMBERSHIP_MODAL_ID", function() { return UPDATE_MEMBERSHIP_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_FACILITY_MODAL_ID", function() { return ADD_FACILITY_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUALIFICATION_MODAL_ID", function() { return ADD_QUALIFICATION_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MEDICAL_REGISTRATION_MODAL_ID", function() { return ADD_MEDICAL_REGISTRATION_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_SERVICE_MODAL_ID", function() { return REQUEST_SERVICE_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SERVICE_MODAL_PRICE", function() { return SET_SERVICE_MODAL_PRICE; });
var ADD_CATEGORY_MODAL_ID = "add-category-modal";
var UPDATE_CATEGORY_MODAL_ID = "update-category-modal";
var SERVICE_CATEGORIES_TABLE = 'service-categories-table';
var PROVIDER_PROFILE_MODAL_ID = 'service-provider-profile-modal';
var ADD_MEMBERSHIP_MODAL_ID = 'add-service-modal';
var UPDATE_MEMBERSHIP_MODAL_ID = 'update-service-modal';
var ADD_FACILITY_MODAL_ID = 'add-facility-modal';
var ADD_QUALIFICATION_MODAL_ID = 'add-qualifications-modal';
var ADD_MEDICAL_REGISTRATION_MODAL_ID = 'add-medical-registration-modal';
var REQUEST_SERVICE_MODAL_ID = 'request-service-modal';
var SET_SERVICE_MODAL_PRICE = 'set-service-modal-price';

/***/ }),

/***/ "./resources/js/pages/Utilities/ModalForm.jsx":
/*!****************************************************!*\
  !*** ./resources/js/pages/Utilities/ModalForm.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Modal(_ref) {
  var modalID = _ref.modalID,
      title = _ref.title,
      size = _ref.size,
      renderForm = _ref.renderForm;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["React"].createElement("div", {
    id: modalID,
    className: "modal fade",
    tabIndex: -1,
    role: "dialog",
    "data-backdrop": "static",
    "aria-labelledby": "".concat(modalID, "Label"),
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["React"].createElement("div", {
    className: "modal-dialog ".concat(size === 'large' ? 'modal-lg modal-dialog-scrollable' : null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["React"].createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["React"].createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["React"].createElement("h4", {
    className: "modal-title",
    id: "".concat(modalID, "Label")
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["React"].createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-hidden": "true"
  }, "\xD7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["React"].createElement("div", {
    className: "modal-body"
  }, renderForm()))));
}

/***/ }),

/***/ "./resources/js/pages/services/packages/membership/AddMembership.jsx":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/services/packages/membership/AddMembership.jsx ***!
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

/***/ })

}]);