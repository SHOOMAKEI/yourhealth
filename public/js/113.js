(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[113],{

/***/ "./resources/js/Pages/Utilities/components/userMenu.jsx":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/Utilities/components/userMenu.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function UserMenu() {
  // const [queryAthUser, {loading, errors, data, called}] = useApi({query: QUERY_AUTH_USER})
  // const [logout, logoutResponse] = useApi({query: LOGOUT})
  // const router = useRouter();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {// queryAthUser({})
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {// if(logoutResponse.data && logoutResponse.data.logoutSession.success) {
    //     router.push('/auth/login')
    // }
  }, [logoutResponse.data]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (data && data.me === null) {// router.push('/auth/login')
    }

    if (data.me) {
      data.me.roles.map(function (role) {
        if (role.name.toLowerCase().includes('unverified')) {// router.push('/service-providers-registration/Register');
        }
      });
    }
  }, [data]);

  function logoutUser() {// logout({variables: {input: {email: data.me.email}}})
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "dropdown notification-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link dropdown-toggle nav-user arrow-none mr-0",
    "data-toggle": "dropdown",
    id: "topbar-userdrop",
    href: "#",
    role: "button",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "account-user-avatar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/images/user.png",
    alt: "user-image",
    className: "rounded-circle"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "account-user-name"
  }, data && data.me ? data.me.name : 'Loading...'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "account-position"
  }, data && data.me ? data.me.roles.map(function (role) {
    return role.name;
  }) : 'Loading...'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu profile-dropdown",
    "aria-labelledby": "topbar-userdrop"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: " dropdown-header noti-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "text-overflow m-0"
  }, "Welcome !")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "javascript:void(0);",
    className: "dropdown-item notify-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-account-circle mr-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "My Account")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "javascript:void(0);",
    className: "dropdown-item notify-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-account-edit mr-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Settings")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "javascript:void(0);",
    className: "dropdown-item notify-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-lifebuoy mr-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Support")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "dropdown-item notify-item",
    onClick: logoutUser
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-logout mr-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Logout"))));
} //
// export const getServerSideProps = async (context) => {
//     // const router = useRouter();
//
//     await http.post('/graphql', {query: print(gql`${QUERY_AUTH_USER}`)}).then(
//         response => {
//             if (response.data.data.me === null) {
//                 // router.push('/auth/login')
//             }
//
//             if (response.data.data.me) {
//                 response.data.data.me.roles.map(role => {
//                     if (role.name.toLowerCase().includes('unverified')) {
//                         // router.push('/service-providers-registration/Register');
//                     }
//                 })
//             }
//         }
//     )
//
//     return {props : {}}
// }


/* harmony default export */ __webpack_exports__["default"] = (UserMenu);

/***/ })

}]);