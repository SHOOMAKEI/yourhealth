(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[130],{

/***/ "./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/RegisteredServices.jsx":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/Pages/ServiceProviderProfileCompletion/components/profile/RegisteredServices.jsx ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegisteredServices; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function RegisteredServices(_ref) {
  var services = _ref.services,
      callback = _ref.callback,
      user = _ref.user,
      facility = _ref.facility;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_toConsumableArray(services)),
      _useState2 = _slicedToArray(_useState, 2),
      shownServices = _useState2[0],
      setShownServices = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState4 = _slicedToArray(_useState3, 2),
      facilityId = _useState4[0],
      setFacilityId = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setShownServices(services);
    $(document).ready(function () {
      $('#registered-services-table').DataTable();
      $('.dataTables_filter input[type="search"]').css({
        'width': '145px',
        'display': 'inline-block'
      });
    });
  }, [services]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setFacilityId(facility);
  }, [facility]);

  function onSearch() {
    $('#search-input-registered').on('input', function (e) {
      var input = $(this);
      var val = input.val();

      if (input.data("lastval") != val) {
        input.data("lastval", val);
        console.log(val);
        var newShownServices = services.filter(function (service) {
          if (service.name.toLocaleLowerCase().includes(val)) {
            return service;
          }
        });
        setShownServices(newShownServices);
      }
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-title-right mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, " Registered Services")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    id: "registered-services-table",
    className: "table table-centered table-border mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, shownServices && shownServices.map(function (service) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: service.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, service.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "".concat(service.pivot.price, " ").concat(service.pivot.currency)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
      href: user.provider_profile.account_category_type === 'individual' ? route('providerService.destroy', service.id) : route('facilityService.destroy', [service.id, facilityId]),
      className: "btn btn-danger btn-sm"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "dripicons-trash"
    }))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ml-5 mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, services.length > 0 ? 'Search to see more services...' : 'There are no registered services')));
}

/***/ })

}]);