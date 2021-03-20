(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./resources/js/Pages/Auth/Register.js":
/*!*********************************************!*\
  !*** ./resources/js/Pages/Auth/Register.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Register; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CompanyRegistration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/CompanyRegistration */ "./resources/js/Pages/Auth/components/CompanyRegistration.jsx");
/* harmony import */ var _components_FacilityRegistration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/FacilityRegistration */ "./resources/js/Pages/Auth/components/FacilityRegistration.jsx");
/* harmony import */ var _components_IndividualRegistration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/IndividualRegistration */ "./resources/js/Pages/Auth/components/IndividualRegistration.jsx");




function Register() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "account-pages mt-5 mb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-3 mb-2 mb-sm-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav flex-column nav-pills",
    id: "v-pills-tab",
    role: "tablist",
    "aria-orientation": "vertical"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link active show mb-2",
    id: "v-pills-individual-tab",
    "data-toggle": "pill",
    href: "#v-pills-individual",
    role: "tab",
    "aria-controls": "v-pills-individual",
    "aria-selected": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-home-variant d-md-none d-block"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "d-none d-md-block"
  }, "Individual")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link mb-2",
    id: "v-pills-facility-tab",
    "data-toggle": "pill",
    href: "#v-pills-facility",
    role: "tab",
    "aria-controls": "v-pills-facility",
    "aria-selected": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-account-circle d-md-none d-block"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "d-none d-md-block"
  }, "Facility")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link mb-2",
    id: "v-pills-company-tab",
    "data-toggle": "pill",
    href: "#v-pills-company",
    role: "tab",
    "aria-controls": "v-pills-company",
    "aria-selected": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-settings-outline d-md-none d-block"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "d-none d-md-block"
  }, "Company")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-content ml-3",
    id: "v-pills-tabContent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-pane fade active show",
    id: "v-pills-individual",
    role: "tabpanel",
    "aria-labelledby": "v-pills-individual-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_IndividualRegistration__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-pane fade",
    id: "v-pills-facility",
    role: "tabpanel",
    "aria-labelledby": "v-pills-facility-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FacilityRegistration__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-pane fade",
    id: "v-pills-company",
    role: "tabpanel",
    "aria-labelledby": "v-pills-company-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CompanyRegistration__WEBPACK_IMPORTED_MODULE_1__["default"], null))))))))))));
}

/***/ }),

/***/ "./resources/js/Pages/Auth/components/FacilityRegistration.jsx":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Auth/components/FacilityRegistration.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FacilityRegister; });
// import { useEffect, useState } from 'react';
// import FirstForm from '@pages/auth/components/facilityForms/FirstForm'
// import { GET_FACILITY_SUB_LEVEL } from '@pages/utils/Query';
// import Link from 'next/link';
// import { REGISTER_USER } from '@pages/utils/Mutations';
// import SecondForm from './facilityForms/SecondForm';
// import Spinner from './Spinner';
// import ThirdForm from './facilityForms/ThirdForm';
// import { useApi } from '@pages/utils/ApolloClient';
// import { useRouter } from 'next/router';
// interface FormOneValues {
//     f_name: String;
//     f_vrn: String;
//     f_tin: String;
//     // f_tin_attachment: string;
//     // f_vrn_attachment: string;
//     provider_sub_level_id: string;
// }
// interface FormTwoValues {
//     f_email: String;
//     f_password: String;
//     f_first_name: String;
//     f_middle_name: String;
//     f_last_name: String;
//     f_mobile_number: String;
//     f_password_confirmation: String;
//     ownership_type: 'other' | 'self';
// }
// interface FormThreeValues {
//     f_email: String;
//     f_first_name: String;
//     f_middle_name: String;
//     f_last_name: String;
//     f_mobile_number: String;
// }
// export interface createInputDataValues {
//     form_number: 1 | 2 | 3;
//     form_one_data?: FormOneValues;
//     form_two_data?: FormTwoValues;
//     form_three_data?: FormThreeValues;
// }
function FacilityRegister() {
  //     const [registerUser, {loading, errors, data, called}] = useApi({query: REGISTER_USER})
  //     const [getProviderSublevel, getProviderSublevelResponse] = useApi({query: GET_FACILITY_SUB_LEVEL})
  //     const [stepNumber, setStepNumber] = useState(1);
  //     const [input, setInput] = useState({})
  //     const router = useRouter()
  // useEffect(() => {
  //     if (data && data.createAccount !== null) {
  //         router.push('/auth/login')
  //     }
  // }, [data])
  // function createInputData({form_number, form_one_data, form_two_data, form_three_data}: createInputDataValues) {
  //     if(form_number === 1) {
  //         setInput({
  //             ...input,
  //             vrn: form_one_data?.f_vrn,
  //             //vrn_attachment: form_one_data?.f_vrn_attachment,
  //             tin: form_one_data?.f_tin,
  //             //tin_attachment: form_one_data?.f_vrn_attachment,
  //             name: form_one_data?.f_name,
  //             provider_sub_level_id: form_one_data?.provider_sub_level_id,
  //             account_category: "service-provider",
  //             account_category_type: "facility",
  //         })
  //         setStepNumber(2)
  //     }
  //     if (form_number === 2) {
  //         setInput({
  //             ...input,
  //             first_name: form_two_data?.f_first_name,
  //             middle_name: form_two_data?.f_middle_name,
  //             last_name: form_two_data?.f_last_name,
  //             email: form_two_data?.f_email,
  //             mobile_number: form_two_data?.f_mobile_number,
  //             ownership_type: form_two_data?.ownership_type,
  //             password: form_two_data?.f_password,
  //             password_confirmation: form_two_data?.f_password_confirmation,
  //             // incase the user owns the facility themselves
  //             owner_first_name: form_two_data?.f_first_name,
  //             owner_middle_name: form_two_data?.f_middle_name,
  //             owner_last_name: form_two_data?.f_last_name,
  //             owner_email: form_two_data?.f_email,
  //             owner_mobile_number: form_two_data?.f_mobile_number,
  //         })
  //         if (form_two_data?.ownership_type === 'other') {
  //             setStepNumber(3)
  //         } else {
  //             registerUser({variables: {input: input}})
  //         }
  //     }
  //     if (form_number === 3) {
  //         setInput({
  //             ...input,
  //             owner_first_name: form_three_data?.f_first_name,
  //             owner_middle_name: form_three_data?.f_middle_name,
  //             owner_last_name: form_three_data?.f_last_name,
  //             owner_email: form_three_data?.f_email,
  //             owner_mobile_number: form_three_data?.f_mobile_number,
  //         })
  //         registerUser({variables: {input: input}})
  //     }
  // }
  return /*#__PURE__*/React.createElement("h2", null, "The Omakei");
} //     <div>
//         <div className="row mb-3">
//             <div className="col">
//                 <Link href="/auth/Register">
//                     <a className="btn btn-light">
//                         <i className=" uil-arrow-left mr-1"></i>
//                         Go to registration categories
//                     </a>
//                 </Link>
//             </div>
//         </div>
//         {
//             called && loading && <Spinner />
//         }
//         <div style={{display: ((stepNumber === 1) && !called && !loading) ? 'block': 'none'}}>
//             <FirstForm callback={createInputData} />
//         </div>
//         <div style={{display: ((stepNumber === 2) && !called && !loading) ? 'block': 'none'}}>
//             <SecondForm callback={createInputData} goBack={setStepNumber} />
//         </div>
//         <div style={{display: ((stepNumber === 3) && !called && !loading) ? 'block': 'none'}}>
//             <ThirdForm callback={createInputData} goBack={setStepNumber} />
//         </div>
//     </div>

/***/ }),

/***/ "./resources/js/Pages/Auth/components/IndividualRegistration.jsx":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Auth/components/IndividualRegistration.jsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndividualRegister; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Shared_TextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/TextInput */ "./resources/js/Shared/TextInput.js");
/* harmony import */ var _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/LoadingButton */ "./resources/js/Shared/LoadingButton.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function IndividualRegister() {
  var _usePage$props = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["usePage"])().props,
      errors = _usePage$props.errors,
      emailSentSuccessfully = _usePage$props.emailSentSuccessfully;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      sending = _useState2[0],
      setSending = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    ind_first_name: "",
    ind_last_name: "",
    ind_middle_name: "",
    ind_mobile_number: "",
    ind_password_confirmation: "",
    ind_email: '',
    ind_password: '',
    account_category: "service-provider",
    account_category_type: "individual",
    ownership_type: ''
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

  function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__["Inertia"].post(route('login'), values).then(function () {
      setSending(false);
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["InertiaLink"], {
    href: "/auth/Register"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "btn btn-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: " uil-arrow-left mr-1"
  }), "Go back")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, function (_ref) {
    var errors = _ref.errors;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: onSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "text-dark-50 text-left mb-3 font-weight-bold"
    }, "Personal information"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "ind_first_name",
      type: "text",
      label: "First Name",
      placeholder: "First Name",
      errors: errors.ind_first_name,
      value: values.ind_first_name,
      onChange: handleChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "ind_last_name",
      type: "text",
      label: "Last Name",
      placeholder: "Last Name",
      errors: errors.ind_last_name,
      value: values.ind_last_name,
      onChange: handleChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "ind_mobile_number",
      type: "text",
      label: "Mobile Number",
      placeholder: "Mobile Number",
      errors: errors.ind_mobile_number,
      value: values.ind_mobile_number,
      onChange: handleChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "ind_middle_name",
      type: "text",
      label: "Middle Name",
      placeholder: "Middle Name",
      errors: errors.ind_middle_name,
      value: values.ind_middle_name,
      onChange: handleChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "ind_email",
      type: "text",
      label: "Email",
      placeholder: "Email",
      errors: errors.ind_email,
      value: values.ind_email,
      onChange: handleChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "ind_password",
      type: "password",
      label: "Password",
      placeholder: "Password",
      errors: errors.ind_password,
      value: values.ind_password,
      onChange: handleChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "ind_password_confirmation",
      type: "password",
      label: "Password",
      placeholder: "Password",
      errors: errors.ind_password_confirmation,
      value: values.ind_password_confirmation,
      onChange: handleChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group mb-0 text-right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: "submit",
      className: "btn btn-primary btn-block",
      loading: sending
    }, "Register")))));
  }));
}

/***/ })

}]);