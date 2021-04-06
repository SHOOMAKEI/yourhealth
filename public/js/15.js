(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./resources/js/Pages/Services/packages/membership/SelectedInfo.jsx":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Services/packages/membership/SelectedInfo.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Company; });
/* harmony import */ var _Pages_Utilities_ModalForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Pages/Utilities/ModalForm */ "./resources/js/Pages/Utilities/ModalForm.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/TextInput */ "./resources/js/Shared/TextInput.js");
/* harmony import */ var _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Shared/LoadingButton */ "./resources/js/Shared/LoadingButton.js");
/* harmony import */ var _Shared_TextAreaInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Shared/TextAreaInput */ "./resources/js/Shared/TextAreaInput.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function Company(_ref) {
  var company = _ref.company;
  var _usePage$props = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__["usePage"])().props,
      errors = _usePage$props.errors,
      status = _usePage$props.status,
      alertType = _usePage$props.alertType;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      sending = _useState2[0],
      setSending = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    address: (company === null || company === void 0 ? void 0 : company.address) || "",
    description: (company === null || company === void 0 ? void 0 : company.description) || "",
    alternative_mobile_number: (company === null || company === void 0 ? void 0 : company.alternative_mobile_number) || "",
    email: (company === null || company === void 0 ? void 0 : company.email) || "",
    mobile_number: (company === null || company === void 0 ? void 0 : company.mobile_number) || "",
    name: (company === null || company === void 0 ? void 0 : company.name) || "",
    physical_address: (company === null || company === void 0 ? void 0 : company.physical_address) || "",
    registration_date: (company === null || company === void 0 ? void 0 : company.registration_date) || "",
    registration_number: (company === null || company === void 0 ? void 0 : company.registration_number) || "",
    tin: (company === null || company === void 0 ? void 0 : company.tin) || "",
    trading_name: (company === null || company === void 0 ? void 0 : company.trading_name) || "",
    vrn: (company === null || company === void 0 ? void 0 : company.vrn) || "",
    website: (company === null || company === void 0 ? void 0 : company.website) || ""
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      values = _useState4[0],
      setValues = _useState4[1];

  function handleChange(e) {
    var key = e.target.name;
    var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setValues(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, _defineProperty({}, key, value));
    });
  }

  function renderModal() {
    return /*#__PURE__*/React.createElement(_pages_services_packages_membership_AddMembership__WEBPACK_IMPORTED_MODULE_0__["default"], {
      modalID: _pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__["UPDATE_MEMBERSHIP_MODAL_ID"],
      operation: "update"
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tab-pane fade",
    id: "v-pills-company",
    role: "tabpanel",
    "aria-labelledby": "v-pills-company-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("p", null, selectedMembership.description), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "name",
    type: "text",
    placeholder: "Company Name",
    label: "Company Name",
    errors: errors.name,
    value: values.name,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "website",
    type: "text",
    placeholder: "Website",
    label: "Website",
    errors: errors.website,
    value: values.website,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "tin",
    type: "text",
    placeholder: "TIN Number",
    label: "TIN Number",
    errors: errors.tin,
    value: values.tin,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "mobile_number",
    type: "text",
    placeholder: "Mobile Number",
    label: "Mobile Number",
    errors: errors.mobile_number,
    value: values.mobile_number,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "address",
    type: "text",
    placeholder: "Address",
    label: "Address",
    errors: errors.address,
    value: values.address,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "registration_date",
    type: "date",
    placeholder: "Registration Date",
    label: "Registration Date",
    errors: errors.registration_date,
    value: values.registration_date,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextAreaInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "description",
    type: "text",
    placeholder: "Description",
    label: "Description",
    rows: 4,
    errors: errors.description,
    value: values.description,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "trading_name",
    type: "text",
    placeholder: "Trading Name",
    label: "Trading Name",
    errors: errors.trading_name,
    value: values.trading_name,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "vrn",
    type: "text",
    placeholder: "VRN",
    label: "VRN",
    errors: errors.vrn,
    value: values.vrn,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "email",
    type: "text",
    placeholder: "Email Address",
    label: "Email Address",
    errors: errors.email,
    value: values.email,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "alternative_mobile_number",
    type: "text",
    placeholder: "Alternate Mobile Number",
    label: "Website",
    errors: errors.alternative_mobile_number,
    value: values.alternative_mobile_number,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "physical_address",
    type: "text",
    placeholder: "Physical Address",
    label: "Physical Address",
    errors: errors.physical_address,
    value: values.physical_address,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "registration_number",
    type: "text",
    placeholder: "Registration Number",
    label: "Registration Number",
    errors: errors.registration_number,
    value: values.registration_number,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group mb-0 text-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "submit",
    className: "btn btn-primary btn-block",
    loading: sending
  }, "Save Changes"))))));
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
/*! exports provided: ADD_CATEGORY_MODAL_ID, UPDATE_CATEGORY_MODAL_ID, SERVICE_CATEGORIES_TABLE, PROVIDER_PROFILE_MODAL_ID, ADD_MEMBERSHIP_MODAL_ID, UPDATE_MEMBERSHIP_MODAL_ID, ADD_FACILITY_MODAL_ID, EDIT_FACILITY_MODAL_ID, ADD_QUALIFICATION_MODAL_ID, ADD_MEDICAL_REGISTRATION_MODAL_ID, REQUEST_SERVICE_MODAL_ID, SET_SERVICE_MODAL_PRICE */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_FACILITY_MODAL_ID", function() { return EDIT_FACILITY_MODAL_ID; });
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
var EDIT_FACILITY_MODAL_ID = 'edit-facility-modal';
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