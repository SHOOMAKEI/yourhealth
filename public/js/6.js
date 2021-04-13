(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./resources/js/Pages/Services/services/components/AddServiceModal.jsx":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Services/services/components/AddServiceModal.jsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddServiceModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pages_Utilities_FormInputError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Pages/Utilities/FormInputError */ "./resources/js/Pages/Utilities/FormInputError.jsx");
/* harmony import */ var _Pages_Utilities_ModalForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Pages/Utilities/ModalForm */ "./resources/js/Pages/Utilities/ModalForm.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// import * as Yup from "yup";
//
// import { ADD_SERVICE, UPDATE_SERVICE } from "@pages/utils/Mutations";
// import { Field, Form, Formik, FormikHelpers } from "formik";
// import {
//   addService,
//   updateService,
// } from "@pages/data/actions/service";
// import { useDispatch, useSelector } from "react-redux";


 // import {ServicesState} from "@pages/data/reducers/service";
// import {membershipsStateValues} from "@pages/data/reducers/memberships";
// import { useApi } from "@pages/utils/ApolloClient";
// import { useRouter } from "next/router";

function AddServiceModal(_ref) {
  var modalID = _ref.modalID,
      operation = _ref.operation,
      title = _ref.title;
  var initialValues = {
    name: "",
    description: "No description",
    status: false
  };

  var _useSelector = useSelector(function (state) {
    return state.servicesStore;
  }),
      selectedService = _useSelector.selectedService; // const dispatch = useDispatch();


  var _useApi = useApi({
    query: ADD_SERVICE
  }),
      _useApi2 = _slicedToArray(_useApi, 2),
      addServiceCB = _useApi2[0],
      addServiceCBResponse = _useApi2[1];

  var _useApi3 = useApi({
    query: UPDATE_SERVICE
  }),
      _useApi4 = _slicedToArray(_useApi3, 2),
      updateServiceCB = _useApi4[0],
      updateServiceResponse = _useApi4[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      success = _useState2[0],
      setSuccess = _useState2[1]; // const router = useRouter();


  var subcategory_id = router.query.subcategory_id;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (addServiceCBResponse.data) {
      setSuccess(true); // dispatch(addService(addServiceCBResponse.data.createService));
    }
  }, [addServiceCBResponse.data]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (updateServiceResponse.data) {
      setSuccess(true); // dispatch(updateService(updateServiceResponse.data.updateService));
    }
  }, [updateServiceResponse.data]);

  function onSubmit(values, _ref2) {
    var setSubmitting = _ref2.setSubmitting;
    setTimeout(function () {
      switch (operation) {
        case "add":
          _addService(values.name, values.description, values.status);

          break;

        case "update":
          _updateService(values.name, values.description, selectedService.is_active);

          break;

        default:
          _addService(values.name, values.description, values.status);

          break;
      }

      setSubmitting(false);
    }, 500);
  }

  function _addService(name, description, status) {
    var service = {
      name: name,
      description: description,
      is_active: status,
      service_sub_category_id: parseInt(subcategory_id)
    };
    addServiceCB({
      variables: service
    });
  }

  function _updateService(name, description, status) {
    var service = {
      id: selectedService.id,
      name: name,
      description: description,
      is_active: selectedService.is_active,
      service_sub_category_id: parseInt(subcategory_id)
    };
    updateServiceCB({
      variables: service
    });
  }

  function renderForm() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Formik, {
      initialValues: initialValues,
      onSubmit: onSubmit,
      validationSchema: ServiceSchema,
      enableReinitialize: true
    }, function (_ref3) {
      var errors = _ref3.errors,
          touched = _ref3.touched,
          setFieldValue = _ref3.setFieldValue;
      Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (operation === "update") {
          setFieldValue("name", selectedService.name);
          setFieldValue("description", selectedService.description || 'No description');
        }
      }, [selectedService]);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form, null, success && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "alert alert-success alert-dismissible bg-success text-white border-0 fade show",
        role: "alert"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "close",
        onClick: function onClick() {
          return setSuccess(false);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        "aria-hidden": "true"
      }, "\xD7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Success - "), " Operation was completed successfully!"), updateServiceResponse.errors && updateServiceResponse.errors.map(function (error) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "alert alert-danger alert-dismissible bg-danger text-white border-0 fade show",
          role: "alert"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          type: "button",
          className: "close",
          "data-dismiss": "alert",
          "aria-label": "Close"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          "aria-hidden": "true"
        }, "\xD7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Error - "), " ", error.message);
      }), addServiceCBResponse.errors && addServiceCBResponse.errors.map(function (error) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "alert alert-danger alert-dismissible bg-danger text-white border-0 fade show",
          role: "alert"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          type: "button",
          className: "close",
          "data-dismiss": "alert",
          "aria-label": "Close"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          "aria-hidden": "true"
        }, "\xD7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Error - "), " ", error.message);
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "name"
      }, "Service name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Field, {
        id: "name",
        name: "name",
        placeholder: "service name",
        type: "text",
        className: "form-control"
      }), errors.name && touched.name ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_Utilities_FormInputError__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: "Service name error",
        message: errors.name
      }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "description"
      }, "Service description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Field, {
        id: "description",
        name: "description",
        placeholder: "description",
        as: "textarea",
        className: "form-control",
        rows: 3
      }), errors.description && touched.description ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_Utilities_FormInputError__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: "Description error",
        message: errors.description
      }) : null), operation === "add" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "custom-control custom-switch form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Field, {
        type: "checkbox",
        className: "custom-control-input",
        id: "status",
        name: "status"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "custom-control-label",
        htmlFor: "status"
      }, "Show service to public")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-muted"
      }, "If the above option is selected the public will see the service, otherwise the public will not see the service. You can edit it later on from category settings.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-footer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "btn btn-light",
        "data-dismiss": "modal"
      }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary",
        disabled: updateServiceResponse.loading || addServiceCBResponse.loading
      }, operation === "add" ? addServiceCBResponse.loading && addServiceCBResponse.called ? "Adding..." : "Add subcategory" : updateServiceResponse.loading && updateServiceResponse.called ? "Updating..." : "Update subcategory")));
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_Utilities_ModalForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    modalID: modalID,
    title: title ? title : "Add new service",
    renderForm: renderForm
  });
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

/***/ "./resources/js/Pages/Utilities/ModalForm.jsx":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Utilities/ModalForm.jsx ***!
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: modalID,
    className: "modal fade",
    tabIndex: -1,
    role: "dialog",
    "data-backdrop": "static",
    "aria-labelledby": "".concat(modalID, "Label"),
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-dialog ".concat(size === 'large' ? 'modal-lg modal-dialog-scrollable' : null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "modal-title",
    id: "".concat(modalID, "Label")
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-hidden": "true"
  }, "\xD7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body"
  }, renderForm()))));
}

/***/ })

}]);