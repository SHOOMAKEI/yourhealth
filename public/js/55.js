(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./resources/js/Pages/Services/categories/components/Manage.jsx":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Services/categories/components/Manage.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_services_categories_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/pages/services/categories/components */ "./resources/js/pages/services/categories/components/index.js");
/* harmony import */ var _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Pages/Utilities/Constants */ "./resources/js/Pages/Utilities/Constants.js");
/* harmony import */ var _pages_framework__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/pages/framework */ "./resources/js/pages/framework.jsx");
!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/data/actions/serviceCategories'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/utils/ApolloClient'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var CATEGORIES_BATCH_COUNT = 10;

var ManageServices = function ManageServices() {
  var _useSelector = useSelector(function (state) {
    return state.categoriesStore;
  }),
      categories = _useSelector.categories;

  var _useState = useState(CATEGORIES_BATCH_COUNT),
      _useState2 = _slicedToArray(_useState, 2),
      categoriesBatchCount = _useState2[0],
      setCategoriesBatchCount = _useState2[1];

  var _useState3 = useState(categories.slice(0, categoriesBatchCount)),
      _useState4 = _slicedToArray(_useState3, 2),
      shownCategories = _useState4[0],
      setShownCategories = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      paginatorSP = _useState6[0],
      setPaginatorSP = _useState6[1];

  var _useApi = !(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/utils/ApolloClient'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    query: QUERY_CATEGORIES
  }),
      _useApi2 = _slicedToArray(_useApi, 2),
      queryCategories = _useApi2[0],
      _useApi2$ = _useApi2[1],
      loading = _useApi2$.loading,
      errors = _useApi2$.errors,
      data = _useApi2$.data,
      called = _useApi2$.called;

  var dispatch = useDispatch();
  useEffect(function () {
    if (categories.length > 0) {
      setShownCategories(categories.slice(paginatorSP, paginatorSP + categoriesBatchCount));
    }
  }, [categories]);
  useEffect(function () {
    queryCategories({});
  }, []);
  useEffect(function () {
    if (data) {
      dispatch(!(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/data/actions/serviceCategories'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(data.serviceCategories));
    }
  }, [data]);

  function renderAddCategoryModal() {
    return /*#__PURE__*/React.createElement(_pages_services_categories_components__WEBPACK_IMPORTED_MODULE_0__["AddCategoryModal"], {
      modalID: _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__["ADD_CATEGORY_MODAL_ID"],
      operation: "add"
    });
  }

  function selectPage(page) {
    var startingPoint = page === 0 ? 0 : page * categoriesBatchCount;
    var endingPoint = startingPoint + categoriesBatchCount;
    setShownCategories(categories.slice(startingPoint, endingPoint));
    setPaginatorSP(startingPoint);
    return 0;
  }

  function searchCategories(content) {
    if (content.length === 0) {
      setShownCategories(categories.slice(0, categoriesBatchCount));
    } else {
      setShownCategories(categories.filter(function (category) {
        if (category.name.toLowerCase().includes(content.toLowerCase())) {
          return category;
        }
      }));
    }
  }

  function renderContent() {
    return /*#__PURE__*/React.createElement("div", {
      className: "row",
      style: {
        paddingTop: 30 + 'px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-xl-7"
    }, /*#__PURE__*/React.createElement("div", {
      className: "card px-2"
    }, /*#__PURE__*/React.createElement(_pages_services_categories_components__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
      title: "Service categories",
      renderModal: renderAddCategoryModal,
      modalID: _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__["ADD_CATEGORY_MODAL_ID"],
      search: searchCategories
    }), /*#__PURE__*/React.createElement(_pages_services_categories_components__WEBPACK_IMPORTED_MODULE_0__["ServiceCategoriesTable"], {
      categories: shownCategories
    }), /*#__PURE__*/React.createElement(_pages_services_categories_components__WEBPACK_IMPORTED_MODULE_0__["Paginator"], {
      batchCount: categoriesBatchCount,
      totalItems: categories.length,
      activePageCallBack: selectPage
    }))), /*#__PURE__*/React.createElement("div", {
      className: "col-xl-5"
    }, /*#__PURE__*/React.createElement(_pages_services_categories_components__WEBPACK_IMPORTED_MODULE_0__["InfoSideBar"], null)));
  }

  return /*#__PURE__*/React.createElement(_pages_framework__WEBPACK_IMPORTED_MODULE_2__["default"], {
    renderContent: renderContent
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ManageServices);

/***/ }),

/***/ "./resources/js/pages/services/categories/components/AddCategoryModal.jsx":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/services/categories/components/AddCategoryModal.jsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddCategoryModal; });
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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function AddCategoryModal(_ref) {
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
    return state.categoriesStore;
  }),
      selectedCategory = _useSelector.selectedCategory;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      success = _useState2[0],
      setSuccess = _useState2[1];

  function onSubmit(values, _ref2) {
    var setSubmitting = _ref2.setSubmitting;
    setTimeout(function () {
      switch (operation) {
        case "add":
          addCategory(values.name, values.description, values.status);
          break;

        case "update":
          _updateCategory(values.name, values.description, selectedCategory.is_active);

          break;

        default:
          addCategory(values.name, values.description, values.status);
          break;
      }

      setSubmitting(false);
    }, 500);
  }

  function addCategory(name, description, status) {
    var category = {
      name: name,
      description: description,
      is_active: status
    }; // addServiceCategoryCB({variables: category});
  }

  function _updateCategory(name, description, status) {
    var category = {
      id: selectedCategory.id,
      name: name,
      description: description
    }; // updateServiceCategory({variables: category});
  }

  function renderForm() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", null, status && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "alert alert-success alert-dismissible bg-success text-white border-0 fade show",
      role: "alert"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      type: "button",
      className: "close",
      onClick: function onClick() {
        return setSuccess(false);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Success - "), " Operation was completed successfully!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "name",
      type: "text",
      placeholder: "Category Name",
      label: "Category Name",
      errors: errors.name,
      value: values.name,
      onChange: handleChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextAreaInputInput, {
      name: "description",
      type: "text",
      placeholder: "Category description",
      label: "Category description",
      errors: errors.description,
      value: values.description,
      onChange: handleChange
    }), operation === "add" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "status",
      type: "text",
      placeholder: "Show category to public",
      label: "Show category to public",
      errors: errors.status,
      value: values.status,
      onChange: handleChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "text-muted"
    }, "If the above option is selected the public will see the category, otherwise the public will not see the category. You can edit it later on from category settings.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "modal-footer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      type: "button",
      className: "btn btn-light",
      "data-dismiss": "modal"
    }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: "submit",
      className: "btn btn-primary btn-block",
      loading: sending
    }, "Save Changes")));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Pages_Utilities_ModalForm__WEBPACK_IMPORTED_MODULE_0__["default"], {
    modalID: modalID,
    title: title ? title : "Add new service category",
    renderForm: renderForm
  });
}

/***/ }),

/***/ "./resources/js/pages/services/categories/components/index.js":
/*!********************************************************************!*\
  !*** ./resources/js/pages/services/categories/components/index.js ***!
  \********************************************************************/
/*! exports provided: AddCategoryModal, Heading, InfoSideBar, Paginator, ServiceCategoriesTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddCategoryModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddCategoryModal */ "./resources/js/pages/services/categories/components/AddCategoryModal.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddCategoryModal", function() { return _AddCategoryModal__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _pages_services_categories_components_Heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/pages/services/categories/components/Heading */ "./resources/js/pages/services/categories/components/Heading.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return _pages_services_categories_components_Heading__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _pages_services_categories_components_infosidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/pages/services/categories/components/infosidebar */ "./resources/js/pages/services/categories/components/infosidebar.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoSideBar", function() { return _pages_services_categories_components_infosidebar__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _pages_services_categories_components_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages/services/categories/components/paginator */ "./resources/js/pages/services/categories/components/paginator.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Paginator", function() { return _pages_services_categories_components_paginator__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _pages_services_categories_components_serviceCategoryTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/pages/services/categories/components/serviceCategoryTable */ "./resources/js/pages/services/categories/components/serviceCategoryTable.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceCategoriesTable", function() { return _pages_services_categories_components_serviceCategoryTable__WEBPACK_IMPORTED_MODULE_4__["default"]; });








/***/ })

}]);