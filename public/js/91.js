(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[91],{

/***/ "./resources/js/Pages/Services/categories/components/infosidebar.jsx":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Services/categories/components/infosidebar.jsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoSideBar; });
/* harmony import */ var _Pages_services_categories_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Pages/services/categories/components */ "./resources/js/Pages/services/categories/components/index.js");
/* harmony import */ var _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Pages/Utilities/Constants */ "./resources/js/Pages/Utilities/Constants.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function InfoSideBar() {
  var _useSelector = useSelector(function (state) {
    return state.categoriesStore;
  }),
      selectedCategory = _useSelector.selectedCategory,
      categories = _useSelector.categories; // const {subcategories} = useSelector(state => state.subcategoriesStore);


  var _useState = useState(subcategories.slice(0, 5)),
      _useState2 = _slicedToArray(_useState, 2),
      shownSubcategories = _useState2[0],
      setShownSubcategories = _useState2[1];

  useEffect(function () {
    if (categories.length > 0) {
      dispatch(selectCategory(categories[0]));
    }
  }, []);
  useEffect(function () {
    if (updateServiceCategoryResponse.data) {
      setSuccess(true);
      dispatch(updateCategory(_objectSpread(_objectSpread({}, selectedCategory), {}, {
        is_active: !selectedCategory.is_active
      })));
    }
  }, [updateServiceCategoryResponse.data]);

  function toggleCategoryVisibility() {
    var category = {
      id: selectedCategory.id,
      name: name,
      description: selectedCategory.description
    };
    updateServiceCategory({
      variables: category
    });
    dispatch(updateCategory(_objectSpread(_objectSpread({}, selectedCategory), {}, {
      is_active: !selectedCategory.is_active
    })));
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("div", {
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
    "data-toggle": "modal",
    "data-target": "#".concat(_Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__["UPDATE_CATEGORY_MODAL_ID"])
  }, /*#__PURE__*/React.createElement("i", {
    className: "uil uil-edit mr-1"
  }), "Edit"), /*#__PURE__*/React.createElement("a", {
    href: "javascript:void(0);",
    className: "dropdown-item",
    onClick: toggleCategoryVisibility
  }, selectedCategory.is_active ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "uil uil-ban mr-1"
  }), "Hide from public") : /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "uil uil-eye mr-1"
  }), "Show to public")), /*#__PURE__*/React.createElement("div", {
    className: "dropdown-divider"
  }), /*#__PURE__*/React.createElement("a", {
    href: "javascript:void(0);",
    className: "dropdown-item text-danger",
    "data-toggle": "modal",
    "data-target": "#delete-category"
  }, /*#__PURE__*/React.createElement("i", {
    className: "uil uil-trash-alt mr-1"
  }), "Delete")), /*#__PURE__*/React.createElement(_Pages_services_categories_components__WEBPACK_IMPORTED_MODULE_0__["AddCategoryModal"], {
    modalID: _Pages_Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__["UPDATE_CATEGORY_MODAL_ID"],
    initialData: {
      name: selectedCategory.name,
      description: selectedCategory.description,
      is_active: false,
      id: selectedCategory.id
    },
    operation: "update",
    title: "Edit category ".concat(selectedCategory.name)
  })), /*#__PURE__*/React.createElement("h4", null, selectedCategory.name), selectedCategory.is_active ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "mdi mdi-circle text-success"
  }), " Visible to public") : /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "mdi mdi-circle text-danger"
  }), " Hidden from public"), /*#__PURE__*/React.createElement("hr", {
    className: "mt-3 mb-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("p", null, selectedCategory.description), /*#__PURE__*/React.createElement("div", {
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
  }, selectedCategory.created_at)))), /*#__PURE__*/React.createElement("div", {
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
  }, selectedCategory.updated_at))))))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "header-title my-3"
  }, "Subcategories (", selectedCategory.service_sub_categories.length, ")"), /*#__PURE__*/React.createElement("table", {
    className: "table table-sm table-centered mb-0"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "thead-light"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Public status"))), /*#__PURE__*/React.createElement("tbody", null, selectedCategory.service_sub_categories.slice(0, 9).map(function (subcategory) {
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, subcategory.name), /*#__PURE__*/React.createElement("td", null, subcategory.is_active ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
      className: "uil uil-eye font-16 mr-1 text-success"
    }), " Visible") : /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
      className: "uil uil-eye font-16 mr-1 text-danger"
    }), " Not Visible")));
  }))), /*#__PURE__*/React.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["InertiaLink"], {
    href: "/services/subcategories/".concat(selectedCategory.id)
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary btn-block mt-2"
  }, "See subcategories"))))));
}

/***/ })

}]);