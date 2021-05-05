(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[116],{

/***/ "./resources/js/Pages/VerifiedServiceProviders/Consultation/Calender.js":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/VerifiedServiceProviders/Consultation/Calender.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.js");
/* harmony import */ var _Pages_VerifiedServiceProviders_Consultation_Components_AddCategoryModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Pages/VerifiedServiceProviders/Consultation/Components/AddCategoryModal */ "./resources/js/Pages/VerifiedServiceProviders/Consultation/Components/AddCategoryModal.jsx");
/* harmony import */ var _Pages_VerifiedServiceProviders_Consultation_Components_AddEventModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Pages/VerifiedServiceProviders/Consultation/Components/AddEventModal */ "./resources/js/Pages/VerifiedServiceProviders/Consultation/Components/AddEventModal.jsx");
/* harmony import */ var _fullcalendar_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/react */ "./node_modules/@fullcalendar/react/dist/main.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_6__);








var Calender = function Calender() {
  var _usePage$props = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_6__["usePage"])().props,
      facilities = _usePage$props.facilities,
      days = _usePage$props.days,
      user = _usePage$props.user;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-title-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "page-title"
  }, "Calendar")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_6__["InertiaLink"], {
    href: route('calender.create'),
    className: "btn btn-lg font-16 btn-primary btn-block  "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-plus-circle-outline"
  }), " Create Daily Schedule"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "external-events",
    className: "m-t-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted"
  }, "Drag and drop your event or click in the calendar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "external-event bg-success",
    "data-class": "bg-success"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-checkbox-blank-circle mr-2 vertical-middle"
  }), "New Day(s) Off"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "external-event bg-primary",
    "data-class": "bg-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-checkbox-blank-circle mr-2 vertical-middle"
  }), "Bookings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "external-event bg-info",
    "data-class": "bg-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-checkbox-blank-circle mr-2 vertical-middle"
  }), "Completed Bookings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "external-event bg-warning",
    "data-class": "bg-warning"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-checkbox-blank-circle mr-2 vertical-middle"
  }), "Rescheduled Bookings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "external-event bg-danger",
    "data-class": "bg-danger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-checkbox-blank-circle mr-2 vertical-middle"
  }), "Canceled Bookings")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "custom-control custom-checkbox mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: "drop-remove"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "custom-control-label",
    htmlFor: "drop-remove"
  }, "Remove after drop")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-5 d-none d-xl-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "text-center"
  }, "How It Works ?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "pl-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "text-muted mb-3"
  }, "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "text-muted mb-3"
  }, "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "text-muted mb-3"
  }, "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fullcalendar_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__["default"]],
    initialView: "dayGridMonth",
    weekends: true,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_VerifiedServiceProviders_Consultation_Components_AddEventModal__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_VerifiedServiceProviders_Consultation_Components_AddCategoryModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    facilities: facilities,
    days: days,
    user: user
  }))));
};

Calender.layout = function (page) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: page
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Calender);

/***/ }),

/***/ "./resources/js/Pages/VerifiedServiceProviders/Consultation/Components/AddEventModal.jsx":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/VerifiedServiceProviders/Consultation/Components/AddEventModal.jsx ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal fade",
    id: "event-modal",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-dialog"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-header pr-4 pl-4 border-bottom-0 d-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-hidden": "true"
  }, "\xD7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "modal-title"
  }, "Add New Event")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body pt-3 pr-4 pl-4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-right pb-4 pr-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-light ",
    "data-dismiss": "modal"
  }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-success save-event  "
  }, "Create event"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-danger delete-event  ",
    "data-dismiss": "modal"
  }, "Delete")))));
});

/***/ })

}]);