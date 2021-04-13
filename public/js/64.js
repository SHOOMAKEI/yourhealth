(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

/***/ "./resources/js/Pages/Services/subcategories/components/AddSubcategoryModal.jsx":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/Services/subcategories/components/AddSubcategoryModal.jsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddSubcategoryModal; });
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

// import {
//   addServiceSubcategory,
//   updateSubcategory,
// } from "@/pages/data/actions/serviceSubcategories";



function AddSubcategoryModal(_ref) {
  var modalID = _ref.modalID,
      initialData = _ref.initialData,
      operation = _ref.operation,
      title = _ref.title;
  var initialValues = {
    name: "",
    description: "No description",
    status: false
  };

  var _useSelector = useSelector(function (state) {
    return state.subcategoriesStore;
  }),
      selectedSubcategory = _useSelector.selectedSubcategory;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      success = _useState2[0],
      setSuccess = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (updateServiceSubcategoryResponse.data) {
      setSuccess(true);
      var timer = setTimeout(function () {
        setSuccess(false);
        clearTimeout(timer);
      }, 5000);
      dispatch(updateSubcategory(updateServiceSubcategoryResponse.data.updateServiceSubCategory));
    }
  }, [updateServiceSubcategoryResponse.data]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (addServiceSubcategoryResponse.data) {
      setSuccess(true);
      var timer = setTimeout(function () {
        setSuccess(false);
        clearTimeout(timer);
      }, 5000);
      dispatch(addServiceSubcategory(addServiceSubcategoryResponse.data.createServiceSubCategory));
    }
  }, [addServiceSubcategoryResponse.data]);

  function onSubmit(values, _ref2) {
    var setSubmitting = _ref2.setSubmitting;
    setTimeout(function () {
      switch (operation) {
        case "add":
          addSubcategory(values.name, values.description, values.status);
          break;

        case "update":
          _updateSubcategory(values.name, values.description, selectedSubcategory.is_active);

          break;

        default:
          addSubcategory(values.name, values.description, values.status);
          break;
      }

      setSubmitting(false);
    }, 500);
  }

  function addSubcategory(name, description, status) {
    var subcategory = {
      name: name,
      description: description,
      is_active: status,
      service_category_id: parseInt(category_id)
    };
    addServiceSubcategoryCB({
      variables: subcategory
    });
  }

  function _updateSubcategory(name, description, status) {
    var subcategory = {
      id: selectedSubcategory.id,
      name: name,
      description: description,
      service_category_id: parseInt(category_id)
    };
    updateServiceSubcategory({
      variables: subcategory
    });
  }

  function renderForm() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, status && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
    }, "\xD7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Success - "), " Operation was completed successfully!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "name"
    }, "Subcategory name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Field, {
      id: "name",
      name: "name",
      placeholder: "category name",
      type: "text",
      className: "form-control"
    }), errors.name && touched.name ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_Utilities_FormInputError__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Category name error",
      message: errors.name
    }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "description"
    }, "Subcategory description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Field, {
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
    }, "Show subcategory to public")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "text-muted"
    }, "If the above option is selected the public will see the category, otherwise the public will not see the category. You can edit it later on from category settings.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "modal-footer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      className: "btn btn-light",
      "data-dismiss": "modal"
    }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      className: "btn btn-primary",
      disabled: updateServiceSubcategoryResponse.loading || addServiceSubcategoryResponse.loading
    }, operation === "add" ? addServiceSubcategoryResponse.loading && addServiceSubcategoryResponse.called ? "Adding..." : "Add subcategory" : updateServiceSubcategoryResponse.loading && updateServiceSubcategoryResponse.called ? "Updating..." : "Update subcategory")));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_Utilities_ModalForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    modalID: modalID,
    title: title ? title : "Add new service subcategory",
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