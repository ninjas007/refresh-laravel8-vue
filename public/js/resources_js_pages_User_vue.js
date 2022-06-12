"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_User_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/User.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/User.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      users: []
    };
  },
  mounted: function mounted() {
    this.getUsers();
  },
  methods: {
    getUsers: function getUsers() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/users').then(function (response) {
        _this.users = response.data;

        if (_this.id) {
          _this.detailUser = _this.users.filter(function (item) {
            return item.id == _this.id;
          })[0];
          console.log(_this.detailUser);
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    deleteUser: function deleteUser(id) {
      var _this2 = this;

      if (confirm('Yakin mau dihapus?')) {
        axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"]('/api/users/' + id).then(function (response) {
          if (response.data.status) {
            _this2.$noty.success(response.data.message);

            _this2.getUsers();
          } else {
            _this2.$noty.error("delete data failed");
          }
        })["catch"](function (error) {
          console.log(error);
        });
      } else {
        return false;
      }
    },
    editUser: function editUser(id) {
      this.$router.push({
        name: 'Edit',
        params: {
          id: id
        }
      });
    },
    profile_url: function profile_url(name) {
      return '/user/' + name;
    },
    lihatUser: function lihatUser(id) {
      this.$router.push({
        name: 'Profile',
        params: {
          id: id
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/User.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/User.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _User_vue_vue_type_template_id_99948d58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.vue?vue&type=template&id=99948d58& */ "./resources/js/pages/User.vue?vue&type=template&id=99948d58&");
/* harmony import */ var _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.vue?vue&type=script&lang=js& */ "./resources/js/pages/User.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _User_vue_vue_type_template_id_99948d58___WEBPACK_IMPORTED_MODULE_0__.render,
  _User_vue_vue_type_template_id_99948d58___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/User.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/User.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/pages/User.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./User.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/User.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/User.vue?vue&type=template&id=99948d58&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/User.vue?vue&type=template&id=99948d58& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_99948d58___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_99948d58___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_99948d58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./User.vue?vue&type=template&id=99948d58& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/User.vue?vue&type=template&id=99948d58&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/User.vue?vue&type=template&id=99948d58&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/User.vue?vue&type=template&id=99948d58& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "section",
      [
        _c("h1", [_vm._v("Daftar User")]),
        _vm._v(" "),
        _c("router-link", { attrs: { to: { name: "Register" } } }, [
          _vm._v("Register"),
        ]),
        _vm._v(" "),
        _c(
          "table",
          { staticClass: "table" },
          _vm._l(_vm.users, function (user) {
            return _c("tr", [
              _c("td", [
                _c(
                  "a",
                  {
                    attrs: { href: "" },
                    on: {
                      click: function ($event) {
                        $event.preventDefault()
                        return _vm.lihatUser(user.id)
                      },
                    },
                  },
                  [_vm._v(_vm._s(user.name) + " ")]
                ),
              ]),
              _vm._v(" "),
              _c("td", [
                _c(
                  "a",
                  {
                    attrs: { href: "" },
                    on: {
                      click: function ($event) {
                        $event.preventDefault()
                        return _vm.editUser(user.id)
                      },
                    },
                  },
                  [_vm._v("Edit")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    attrs: { href: "" },
                    on: {
                      click: function ($event) {
                        $event.preventDefault()
                        return _vm.deleteUser(user.id)
                      },
                    },
                  },
                  [_vm._v("Delete")]
                ),
              ]),
            ])
          }),
          0
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);