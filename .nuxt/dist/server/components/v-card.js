exports.ids = [1];
exports.modules = {

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("ffe724e6", content, true, context)
};

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VCard.vue?vue&type=template&id=3d5d2a96&scoped=true&lang=pug&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cell"
  }, [_vm._ssrNode(_vm._ssrList(_vm.users, function (card) {
    return "<div class=\"card\" data-v-3d5d2a96><div class=\"card__images\" data-v-3d5d2a96><img" + _vm._ssrAttr("src", card.photo) + _vm._ssrAttr("alt", card.name) + " class=\"card__images-roll\" data-v-3d5d2a96></div><div class=\"card__list\" data-v-3d5d2a96><div class=\"card__list-name\" data-v-3d5d2a96>" + _vm._ssrEscape(_vm._s(card.name)) + "</div><div class=\"card__list-position\" data-v-3d5d2a96>" + _vm._ssrEscape(_vm._s(card.position)) + "</div><div class=\"card__list-email\" data-v-3d5d2a96>" + _vm._ssrEscape(_vm._s(card.email)) + "</div></div></div>";
  }))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/VCard.vue?vue&type=template&id=3d5d2a96&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VCard.vue?vue&type=script&lang=js&
/* harmony default export */ var VCardvue_type_script_lang_js_ = ({
  props: {
    users: {
      type: Array,
      default: []
    }
  },
  mounted() {
    console.log(this.users);
  }
});
// CONCATENATED MODULE: ./components/VCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VCardvue_type_script_lang_js_ = (VCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/VCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(31)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_VCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3d5d2a96",
  "6d00b50b"
  
)

/* harmony default export */ var VCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VCard_vue_vue_type_style_index_0_id_3d5d2a96_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VCard_vue_vue_type_style_index_0_id_3d5d2a96_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VCard_vue_vue_type_style_index_0_id_3d5d2a96_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VCard_vue_vue_type_style_index_0_id_3d5d2a96_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VCard_vue_vue_type_style_index_0_id_3d5d2a96_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cell[data-v-3d5d2a96]{display:flex;flex-wrap:wrap;max-width:1170px;align-items:center;margin-left:auto;margin-right:auto;justify-content:center;padding:0px;gap:20px}@media screen and (min-width: 1024px){.cell[data-v-3d5d2a96]{gap:29px}}.card[data-v-3d5d2a96]{width:328px;height:254px;padding:20px;background:#fff}@media screen and (min-width: 1024px){.card[data-v-3d5d2a96]{width:370px}}.card__images-roll[data-v-3d5d2a96]{width:70px;height:70px;margin:0px auto 20px auto;border-radius:50% 50% 50% 50%/50% 50% 50% 50%}.card__list-name[data-v-3d5d2a96]{display:flex;justify-content:center;padding:0px 0px 20px 0px;overflow:hidden}.card__list-position[data-v-3d5d2a96]{display:flex;justify-content:center;overflow:hidden}.card__list-email[data-v-3d5d2a96]{display:flex;justify-content:center;overflow:hidden}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=v-card.js.map