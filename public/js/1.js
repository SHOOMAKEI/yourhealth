(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/Pages/Auth/components/FacilityRegistration.jsx":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Auth/components/FacilityRegistration.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FacilityRegister; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Shared_TextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/TextInput */ "./resources/js/Shared/TextInput.js");
/* harmony import */ var _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/LoadingButton */ "./resources/js/Shared/LoadingButton.js");
/* harmony import */ var _facilityForms_FirstForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./facilityForms/FirstForm */ "./resources/js/Pages/Auth/components/facilityForms/FirstForm.jsx");
/* harmony import */ var _facilityForms_SecondForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./facilityForms/SecondForm */ "./resources/js/Pages/Auth/components/facilityForms/SecondForm.jsx");
/* harmony import */ var _facilityForms_ThirdForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./facilityForms/ThirdForm */ "./resources/js/Pages/Auth/components/facilityForms/ThirdForm.jsx");







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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["InertiaLink"], {
    href: "/auth/Register"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "btn btn-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: " uil-arrow-left mr-1"
  }), "Go to registration categories")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: stepNumber === 1 && !called && !loading ? 'block' : 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_facilityForms_FirstForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    callback: createInputData
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: stepNumber === 2 && !called && !loading ? 'block' : 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_facilityForms_SecondForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    callback: createInputData,
    goBack: setStepNumber
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: stepNumber === 3 && !called && !loading ? 'block' : 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_facilityForms_ThirdForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    callback: createInputData,
    goBack: setStepNumber
  })));
}

/***/ }),

/***/ "./resources/js/Pages/Auth/components/facilityForms/FirstForm.jsx":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Auth/components/facilityForms/FirstForm.jsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FirstForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Shared_TextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/TextInput */ "./resources/js/Shared/TextInput.js");
/* harmony import */ var _Shared_SelectInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/SelectInput */ "./resources/js/Shared/SelectInput.js");
/* harmony import */ var _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Shared/LoadingButton */ "./resources/js/Shared/LoadingButton.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






 // function FileUpload(props) {
//     const {field, form} = props;
//     const handleChange = async (e) => {
//       const file  =  e.currentTarget.files[0];
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       let base64;
//       reader.onload = await function(event) {
//           base64 = event.target?.result
//           form.setFieldValue(field.name, base64);
//       }
//     };
//     return (
//       <div>
//         <input type={'file'} onChange={(o) => handleChange(o)} className={'form-control'}/>
//       </div>
//     );
// }
// interface formProps {
//     callback: ({}: createInputDataValues) => void;
// }

function FirstForm(_ref) {
  var callback = _ref.callback;
  var _usePage$props = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["usePage"])().props,
      errors = _usePage$props.errors,
      emailSentSuccessfully = _usePage$props.emailSentSuccessfully;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      sending = _useState2[0],
      setSending = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    f_name: '',
    f_tin: "",
    f_vrn: "",
    provider_sub_level_id: '' // f_tin_attachment: '',
    // f_vrn_attachment: ''

  }),
      _useState4 = _slicedToArray(_useState3, 2),
      values = _useState4[0],
      setValues = _useState4[1]; // const [getProviderSublevel, getProviderSublevelResponse] = useApi({query: GET_FACILITY_SUB_LEVEL})
  // useEffect(() => {
  //     getProviderSublevel({})
  // }, [])


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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, function (_ref2) {
    var errors = _ref2.errors,
        touched = _ref2.touched;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "text-dark-50 text-left mb-3 font-weight-bold"
    }, "Facility Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "facility_name",
      type: "text",
      label: "Facility Name",
      placeholder: "Facility Name",
      errors: errors.ind_first_name,
      value: values.ind_first_name,
      onChange: handleChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "tin",
      type: "text",
      label: "TIN",
      placeholder: "TIN",
      errors: errors.ind_first_name,
      value: values.ind_first_name,
      onChange: handleChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_SelectInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "ownership_type",
      label: "Facility type",
      errors: errors.ownership_type,
      value: values.ownership_type,
      onChange: handleChange
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "self",
      selected: true
    }, "Self ownership"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "other"
    }, "Registration for someone")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "vrn",
      type: "text",
      label: "VRN",
      placeholder: "VRN",
      errors: errors.vrn,
      value: values.vrn,
      onChange: handleChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group mb-0 text-right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: "submit",
      className: "btn btn-primary btn-block",
      loading: sending
    }, "Save Changes")))));
  }));
}

/***/ }),

/***/ "./resources/js/Pages/Auth/components/facilityForms/ThirdForm.jsx":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Auth/components/facilityForms/ThirdForm.jsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ThirdForm; });
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





 // interface formProps {
//     callback: ({}: createInputDataValues) => void;
//     goBack: (step: number) => void;
// }

function ThirdForm(_ref) {
  var callback = _ref.callback,
      goBack = _ref.goBack;
  var _usePage$props = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["usePage"])().props,
      errors = _usePage$props.errors,
      emailSentSuccessfully = _usePage$props.emailSentSuccessfully;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      sending = _useState2[0],
      setSending = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    f_first_name: "",
    f_last_name: "",
    f_middle_name: "",
    f_mobile_number: "",
    f_email: ''
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, function (_ref2) {
    var errors = _ref2.errors,
        touched = _ref2.touched;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "text-dark-50 text-left mb-3 font-weight-bold"
    }, "Personal information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
      name: "ind_middle_name",
      type: "text",
      label: "Middle Name",
      placeholder: "Middle Name",
      errors: errors.ind_middle_name,
      value: values.ind_middle_name,
      onChange: handleChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "ind_mobile_number",
      type: "text",
      label: "Mobile Number",
      placeholder: "Mobile Number",
      errors: errors.ind_mobile_number,
      value: values.ind_mobile_number,
      onChange: handleChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "ind_email",
      type: "text",
      label: "Email",
      placeholder: "Email",
      errors: errors.ind_email,
      value: values.ind_email,
      onChange: handleChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group mb-0 text-right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "btn btn-light mr-2",
      onClick: function onClick() {
        return goBack(2);
      }
    }, " Previous "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-primary",
      type: "submit"
    }, " Next ")))));
  }));
}

/***/ })

}]);