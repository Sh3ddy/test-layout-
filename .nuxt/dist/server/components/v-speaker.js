exports.ids = [4];
exports.modules = {

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("b2e2b9a0", content, true, context)
};

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSpeaker_vue_vue_type_style_index_0_id_aa536216_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSpeaker_vue_vue_type_style_index_0_id_aa536216_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSpeaker_vue_vue_type_style_index_0_id_aa536216_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSpeaker_vue_vue_type_style_index_0_id_aa536216_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSpeaker_vue_vue_type_style_index_0_id_aa536216_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper[data-v-aa536216]{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.wrapper .file-upload[data-v-aa536216]{height:100px;width:100px;margin-top:10px;border-radius:100px;position:relative;display:flex;justify-content:center;align-items:center;border:4px solid #f8f8f8;overflow:hidden;background-image:linear-gradient(to bottom, #F4E041 50%, #F8F8F8 50%);background-size:100% 200%;transition:all 1s;color:#f4e041;font-size:100px}.wrapper .file-upload input[type=file][data-v-aa536216]{height:100px;width:100px;position:absolute;opacity:0;cursor:pointer}.wrapper .file-upload[data-v-aa536216]:hover{background-position:0 -100%;color:#ffe302}.speaker__subtitle[data-v-aa536216]{display:flex;justify-content:center}.speaker__list[data-v-aa536216]{margin-left:auto;margin-right:auto}.speaker__list-name[data-v-aa536216]{display:flex;justify-content:center}.speaker__list-email[data-v-aa536216]{display:flex;justify-content:center}.speaker__list-phone[data-v-aa536216]{display:flex;justify-content:center}.speaker__list-position[data-v-aa536216]{display:flex;justify-content:center;text-align:center}.speaker__list-file[data-v-aa536216]{border:1px solid #d0cfcf;border-radius:4px;width:100%;max-width:380px;height:50px}.speaker__title[data-v-aa536216]{font-family:\"Nunito\";font-style:normal;font-weight:400;font-size:40px;line-height:40px;margin-bottom:50px;display:flex;justify-content:center;display:flex;align-items:flex-end;text-align:center;color:#000}.speaker__name-form[data-v-aa536216]{width:100%;max-width:380px;height:50px;padding-left:16px;margin-bottom:50px;background:#f8f8f8;border:1px solid #d0cfcf;border-radius:4px}.speaker__email-form[data-v-aa536216]{width:100%;max-width:380px;height:50px;padding-left:16px;margin-bottom:50px;background:#f8f8f8;border:1px solid #d0cfcf;border-radius:4px}.speaker__phone-form[data-v-aa536216]{width:100%;max-width:380px;height:50px;padding-left:16px;margin-bottom:25px;background:#f8f8f8;border:1px solid #d0cfcf;border-radius:4px}.speaker__position[data-v-aa536216]{margin:20px 0px 40px 0px;display:flex;justify-content:center;text-align:center}.speaker__button[data-v-aa536216]{margin-top:35px;justify-content:center;display:flex}.speaker__button-accept[data-v-aa536216]{width:100px;height:34px;background:#b4b4b4;color:#000;border-radius:80px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VSpeaker.vue?vue&type=template&id=aa536216&scoped=true&lang=pug&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "speaker container"
  }, [_vm._ssrNode("<h2 class=\"speaker__title\" data-v-aa536216>Working with POST request</h2><ul class=\"speaker__list\" data-v-aa536216><li class=\"speaker__list-name\" data-v-aa536216><input id=\"name\" type=\"name\" name=\"name\" placeholder=\"Your name\" class=\"speaker__name-form\" data-v-aa536216></li><li class=\"speaker__list-email\" data-v-aa536216><input id=\"email\" type=\"email\" name=\"email\" placeholder=\"Email\" class=\"speaker__email-form\" data-v-aa536216></li><li class=\"speaker__list-phone\" data-v-aa536216><input id=\"phone\" type=\"phone\" name=\"phone\" placeholder=\"Phone\" class=\"speaker__phone-form\" data-v-aa536216></li><h4 class=\"speaker__subtitle\" data-v-aa536216>Select your position</h4><li class=\"speaker__list-position\" data-v-aa536216><div value=\"Frontend developer\" name=\"Frontend developer\" class=\"speaker__position-form\" data-v-aa536216></div><ul class=\"speaker__position-list\" data-v-aa536216>" + _vm._ssrList(_vm.positions, function (position) {
    return "<li data-v-aa536216>" + _vm._ssrEscape(_vm._s(position.name)) + "</li>";
  }) + "</ul></li><div class=\"wrapper\" data-v-aa536216><div class=\"file-upload\" data-v-aa536216><input type=\"file\" name=\"Upload your photo\" data-v-aa536216><i class=\"fa fa-arrow-up\" data-v-aa536216></i></div></div><div class=\"speaker__button\" data-v-aa536216><button class=\"speaker__button-accept\" data-v-aa536216>Sign up</button></div></ul>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/VSpeaker.vue?vue&type=template&id=aa536216&scoped=true&lang=pug&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VSpeaker.vue?vue&type=script&lang=js&

/* harmony default export */ var VSpeakervue_type_script_lang_js_ = ({
  data() {
    return {
      form: {
        name: "Test",
        email: "test@gmail.com",
        phone: "+380955388485",
        position_id: 1,
        photo: null
      }
    };
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])({
      token: 'users/getToken',
      positions: 'users/getPositions'
    })
  },
  methods: {
    uploadFile() {
      this.form.photo = this.$refs.file.files[0];
    },
    selectPosition(position) {
      this.form.position_id = position;
      console.log(this.form.position_id);
    },
    async submitForm() {
      const formData = new FormData();
      formData.append('position_id', this.form.position_id);
      formData.append('name', this.form.name);
      formData.append('email', this.form.email);
      formData.append('phone', this.form.phone);
      formData.append('photo', this.form.photo);
      console.log(this.token);
      await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
        method: 'POST',
        body: formData,
        headers: {
          'Token': this.token
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log(data);
        if (data.success) {} else {}
      }).catch(function (error) {
        console.log(error);
      });
      await this.$store.dispatch('users/users');
    }
  },
  mounted() {
    console.log(this.positions);
  }
});
// CONCATENATED MODULE: ./components/VSpeaker.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VSpeakervue_type_script_lang_js_ = (VSpeakervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/VSpeaker.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(45)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_VSpeakervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "aa536216",
  "22600cd4"
  
)

/* harmony default export */ var VSpeaker = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=v-speaker.js.map