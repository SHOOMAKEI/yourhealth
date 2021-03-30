(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[87],{

/***/ "./resources/js/Pages/Services/requested/components/infosidebar.jsx":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Services/requested/components/infosidebar.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoSideBar; });
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from 'react';
//
// import { selectService } from '@pages/data/actions/requestedService';
// import {RequestedServicesState} from "@pages/data/reducers/requestedService";
function InfoSideBar() {
  var _useSelector = useSelector(function (state) {
    return state.requestedServiceStore;
  }),
      selectedService = _useSelector.selectedService,
      services = _useSelector.services;

  var dispatch = useDispatch();
  useEffect(function () {
    if (services.length > 0) {// dispatch(selectService(services[0]))
    }
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("h4", null, selectedService.name), /*#__PURE__*/React.createElement("hr", {
    className: "mt-3 mb-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("p", null, selectedService.description), /*#__PURE__*/React.createElement("div", {
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
  }, selectedService.createdAt)))), /*#__PURE__*/React.createElement("div", {
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
  }, selectedService.updatedAt)))))))));
}

/***/ })

}]);