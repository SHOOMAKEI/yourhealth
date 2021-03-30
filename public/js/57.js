(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "./resources/js/Pages/Services/packages/membership/AddMembership.jsx":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Services/packages/membership/AddMembership.jsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddMembershipModal; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'yup'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/utils/Mutations'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/data/actions/memberships'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-redux'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/components/FormInputError'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _pages_Utilities_ModalForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/pages/Utilities/ModalForm */ "./resources/js/pages/Utilities/ModalForm.jsx");






 // import Spinner from "@/pages/auth/components/Spinner";
// import {membershipsStateValues} from "@pages/data/reducers/memberships";
// import {membershipsValues} from "@pages/data/constants/memberships";
// import { useApi } from "@pages/utils/ApolloClient";
// import {useEffect} from "react";

function AddMembershipModal(_ref) {
  var modalID = _ref.modalID,
      operation = _ref.operation,
      title = _ref.title;
  var initialValues = {
    name: "",
    description: "No description",
    is_active: false
  };
  var dispatch = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react-redux'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();

  var _useSelector = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react-redux'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function (state) {
    return state.membershipsStore;
  }),
      selectedMembership = _useSelector.selectedMembership; // const [createPackageMembership, createPackageMembershipResponse] = useApi({query: CREATE_PACKAGE_MEMBERSHIP});
  // const [updatePackageMembership, updatePackageMembershipResponse] = useApi({query: UPDATE_PACKAGE_MEMBERSHIP});


  useEffect(function () {
    var data = createPackageMembershipResponse.data;

    if (data && data.createPackageMemberShip) {
      dispatch(!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/data/actions/memberships'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(data.createPackageMemberShip));
    }
  }, [createPackageMembershipResponse.data]);
  useEffect(function () {
    var data = updatePackageMembershipResponse.data;

    if (data && data.updatePackageMemberShip) {
      dispatch(!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/data/actions/memberships'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(data.updatePackageMemberShip));
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
    return createPackageMembershipResponse.loading || updatePackageMembershipResponse.loading ? /*#__PURE__*/React.createElement(Spinner, null) : /*#__PURE__*/React.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      initialValues: initialValues,
      onSubmit: onSubmit,
      validationSchema: MembershipSchema,
      enableReinitialize: true
    }, function (_ref3) {
      var errors = _ref3.errors,
          touched = _ref3.touched,
          setFieldValue = _ref3.setFieldValue;
      useEffect(function () {
        if (operation === "update") {
          setFieldValue("name", selectedMembership.name);
          setFieldValue("description", selectedMembership.description);
        }
      }, [selectedMembership]);
      return /*#__PURE__*/React.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null, /*#__PURE__*/React.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "name"
      }, "Membership name"), /*#__PURE__*/React.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        id: "name",
        name: "name",
        placeholder: "membership name",
        type: "text",
        className: "form-control"
      }), errors.name && touched.name ? /*#__PURE__*/React.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/components/FormInputError'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        title: "Membership name error",
        message: errors.name
      }) : null), /*#__PURE__*/React.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "description"
      }, "Membership description"), /*#__PURE__*/React.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        id: "description",
        name: "description",
        placeholder: "description",
        as: "textarea",
        className: "form-control",
        rows: 3
      }), errors.description && touched.description ? /*#__PURE__*/React.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/components/FormInputError'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        title: "Description error",
        message: errors.description
      }) : null), operation === "add" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "custom-control custom-switch form-group"
      }, /*#__PURE__*/React.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        type: "checkbox",
        className: "custom-control-input",
        id: "is_active",
        name: "is_active"
      }), /*#__PURE__*/React.createElement("label", {
        className: "custom-control-label",
        htmlFor: "is_active"
      }, "Show membership to public")), /*#__PURE__*/React.createElement("p", {
        className: "text-muted"
      }, "If the above option is selected the public will see the membership, otherwise the public will not see the membership. You can edit it later on from category settings.")), /*#__PURE__*/React.createElement("div", {
        className: "modal-footer"
      }, /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: "btn btn-light",
        "data-dismiss": "modal"
      }, "Close"), /*#__PURE__*/React.createElement("button", {
        type: "submit",
        className: "btn btn-primary"
      }, operation === "add" ? "Add membership" : "Update")));
    });
  }

  return /*#__PURE__*/React.createElement(_pages_Utilities_ModalForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    modalID: modalID,
    title: title ? title : "Add new membership",
    renderForm: renderForm
  });
}

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

/***/ })

}]);