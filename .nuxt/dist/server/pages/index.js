exports.ids = [6,1,2,3,4,5];
exports.modules = Array(27).concat([
/* 27 */
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
/* 28 */
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(37);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("9fd370f4", content, true, context)
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("58bf5bf6", content, true, context)
};

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VCard_vue_vue_type_style_index_0_id_3d5d2a96_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VCard_vue_vue_type_style_index_0_id_3d5d2a96_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VCard_vue_vue_type_style_index_0_id_3d5d2a96_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VCard_vue_vue_type_style_index_0_id_3d5d2a96_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VCard_vue_vue_type_style_index_0_id_3d5d2a96_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cell[data-v-3d5d2a96]{display:flex;flex-wrap:wrap;max-width:1170px;align-items:center;margin-left:auto;margin-right:auto;justify-content:center;padding:0px;gap:20px}@media screen and (min-width: 1024px){.cell[data-v-3d5d2a96]{gap:29px}}.card[data-v-3d5d2a96]{width:328px;height:254px;padding:20px;background:#fff}@media screen and (min-width: 1024px){.card[data-v-3d5d2a96]{width:370px}}.card__images-roll[data-v-3d5d2a96]{width:70px;height:70px;margin:0px auto 20px auto;border-radius:50% 50% 50% 50%/50% 50% 50% 50%}.card__list-name[data-v-3d5d2a96]{display:flex;justify-content:center;padding:0px 0px 20px 0px;overflow:hidden}.card__list-position[data-v-3d5d2a96]{display:flex;justify-content:center;overflow:hidden}.card__list-email[data-v-3d5d2a96]{display:flex;justify-content:center;overflow:hidden}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("6d58e7c4", content, true, context)
};

/***/ }),
/* 34 */
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/symbol-defs.04405d0.svg";

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VHeader_vue_vue_type_style_index_0_id_4a113355_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VHeader_vue_vue_type_style_index_0_id_4a113355_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VHeader_vue_vue_type_style_index_0_id_4a113355_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VHeader_vue_vue_type_style_index_0_id_4a113355_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VHeader_vue_vue_type_style_index_0_id_4a113355_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".header[data-v-4a113355]{padding:16px;margin-left:auto;margin-right:auto;max-width:1200px}.header__list[data-v-4a113355]{display:flex;justify-content:space-between;align-items:center}.header__list-logo[data-v-4a113355]{display:flex;align-items:center}.header__list-icon[data-v-4a113355]{width:38.11px;height:26px}.header__list-title[data-v-4a113355]{font-family:\"Nunito\";font-weight:400;font-size:11.52px;color:#000}.header__list-button[data-v-4a113355]{width:100px;height:34px;background:#f4e041;color:#000;border-radius:80px;cursor:pointer;transition:.3s ease}.header__list-button[data-v-4a113355]:hover{background:#ffe302}.header__list-button[data-v-4a113355]:not(:last-child){margin-right:10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VOverlay_vue_vue_type_style_index_0_id_282c039d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VOverlay_vue_vue_type_style_index_0_id_282c039d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VOverlay_vue_vue_type_style_index_0_id_282c039d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VOverlay_vue_vue_type_style_index_0_id_282c039d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VOverlay_vue_vue_type_style_index_0_id_282c039d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(15);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(40);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(41);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(42);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".overlay__background[data-v-282c039d]{width:100%;height:500px;padding:40px 16px;background-size:cover;background-color:#afb1b8;background-image:linear-gradient(to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-repeat:no-repeat}@media screen and (min-width: 425px){.overlay__background[data-v-282c039d]{background-image:linear-gradient(to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")}}@media screen and (min-width: 768px){.overlay__background[data-v-282c039d]{background-image:linear-gradient(to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");height:650px;max-width:1170px;margin-left:auto;margin-right:auto;padding:164px 0px}}.overlay__background-title[data-v-282c039d]{font-family:\"Nunito\";font-style:normal;font-weight:400;font-size:40px;line-height:40px;max-width:380px;margin-left:auto;margin-right:auto;margin-bottom:21px;text-align:center;color:#fff}.overlay__background-subtitle[data-v-282c039d]{font-family:\"Nunito\";font-style:normal;font-weight:400;font-size:16px;line-height:26px;max-width:380px;margin-left:auto;margin-right:auto;margin-bottom:32px;text-align:center;color:#fff}.overlay__background-button[data-v-282c039d]{width:100px;height:34px;background:#f4e041;color:#000;border-radius:80px;margin:0 auto;display:block}.overlay__background-button[data-v-282c039d]:hover{background:#ffe302}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/base-mob.e53b50e.jpg";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/base-tablet.2dec5c6.jpg";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/base-desc.cf636f2.jpg";

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VWorker_vue_vue_type_style_index_0_id_3e2e64e3_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VWorker_vue_vue_type_style_index_0_id_3e2e64e3_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VWorker_vue_vue_type_style_index_0_id_3e2e64e3_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VWorker_vue_vue_type_style_index_0_id_3e2e64e3_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VWorker_vue_vue_type_style_index_0_id_3e2e64e3_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".worker__title[data-v-3e2e64e3]{font-family:\"Nunito\";font-style:normal;font-weight:400;font-size:40px;line-height:40px;margin:50px auto;display:flex;align-items:flex-end;text-align:center;justify-content:center;color:rgba(0,0,0,.87)}.worker__button[data-v-3e2e64e3]{cursor:pointer;width:100px;height:34px;background:#f4e041;color:#000;border-radius:80px;margin:50px auto;display:block;transition:.3s ease}.worker__button[data-v-3e2e64e3]:hover{background:#ffe302}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSpeaker_vue_vue_type_style_index_0_id_aa536216_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSpeaker_vue_vue_type_style_index_0_id_aa536216_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSpeaker_vue_vue_type_style_index_0_id_aa536216_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSpeaker_vue_vue_type_style_index_0_id_aa536216_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSpeaker_vue_vue_type_style_index_0_id_aa536216_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper[data-v-aa536216]{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.wrapper .file-upload[data-v-aa536216]{height:100px;width:100px;margin-top:10px;border-radius:100px;position:relative;display:flex;justify-content:center;align-items:center;border:4px solid #f8f8f8;overflow:hidden;background-image:linear-gradient(to bottom, #F4E041 50%, #F8F8F8 50%);background-size:100% 200%;transition:all 1s;color:#f4e041;font-size:100px}.wrapper .file-upload input[type=file][data-v-aa536216]{height:100px;width:100px;position:absolute;opacity:0;cursor:pointer}.wrapper .file-upload[data-v-aa536216]:hover{background-position:0 -100%;color:#ffe302}.speaker__subtitle[data-v-aa536216]{display:flex;justify-content:center}.speaker__list[data-v-aa536216]{margin-left:auto;margin-right:auto}.speaker__list-name[data-v-aa536216]{display:flex;justify-content:center}.speaker__list-email[data-v-aa536216]{display:flex;justify-content:center}.speaker__list-phone[data-v-aa536216]{display:flex;justify-content:center}.speaker__list-position[data-v-aa536216]{display:flex;justify-content:center;text-align:center}.speaker__list-file[data-v-aa536216]{border:1px solid #d0cfcf;border-radius:4px;width:100%;max-width:380px;height:50px}.speaker__title[data-v-aa536216]{font-family:\"Nunito\";font-style:normal;font-weight:400;font-size:40px;line-height:40px;margin-bottom:50px;display:flex;justify-content:center;display:flex;align-items:flex-end;text-align:center;color:#000}.speaker__name-form[data-v-aa536216]{width:100%;max-width:380px;height:50px;padding-left:16px;margin-bottom:50px;background:#f8f8f8;border:1px solid #d0cfcf;border-radius:4px}.speaker__email-form[data-v-aa536216]{width:100%;max-width:380px;height:50px;padding-left:16px;margin-bottom:50px;background:#f8f8f8;border:1px solid #d0cfcf;border-radius:4px}.speaker__phone-form[data-v-aa536216]{width:100%;max-width:380px;height:50px;padding-left:16px;margin-bottom:25px;background:#f8f8f8;border:1px solid #d0cfcf;border-radius:4px}.speaker__position[data-v-aa536216]{margin:20px 0px 40px 0px;display:flex;justify-content:center;text-align:center}.speaker__button[data-v-aa536216]{margin-top:35px;justify-content:center;display:flex}.speaker__button-accept[data-v-aa536216]{width:100px;height:34px;background:#b4b4b4;color:#000;border-radius:80px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VHeader.vue?vue&type=template&id=4a113355&scoped=true&lang=pug&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', {
    staticClass: "header"
  }, [_vm._ssrNode("<ul class=\"header__list\" data-v-4a113355>", "</ul>", [_vm._ssrNode("<li class=\"header__list-logo\" data-v-4a113355>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('svg', {
    staticClass: "header__list-icon"
  }, [_c('use', {
    attrs: {
      "href": __webpack_require__(35) + "#icon-cat"
    }
  })])]), _vm._ssrNode("<h1 class=\"header__list-title\" data-v-4a113355>TESTTASK</h1>")], 2), _vm._ssrNode("<li class=\"header__list-authorization\" data-v-4a113355><button class=\"header__list-button\" data-v-4a113355>Users</button><button class=\"header__list-button\" data-v-4a113355>Sign up</button></li>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/VHeader.vue?vue&type=template&id=4a113355&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VHeader.vue?vue&type=script&lang=js&
/* harmony default export */ var VHeadervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/VHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VHeadervue_type_script_lang_js_ = (VHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/VHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(36)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_VHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4a113355",
  "84926d70"
  
)

/* harmony default export */ var VHeader = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VOverlay.vue?vue&type=template&id=282c039d&scoped=true&lang=pug&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "overlay"
  }, [_vm._ssrNode("<div class=\"overlay__background\" data-v-282c039d><h1 class=\"overlay__background-title\" data-v-282c039d>Test assignment for front-end developer</h1><p class=\"overlay__background-subtitle\" data-v-282c039d>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p><button class=\"overlay__background-button\" data-v-282c039d>Sign up</button></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/VOverlay.vue?vue&type=template&id=282c039d&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VOverlay.vue?vue&type=script&lang=js&
/* harmony default export */ var VOverlayvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/VOverlay.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VOverlayvue_type_script_lang_js_ = (VOverlayvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/VOverlay.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(38)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_VOverlayvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "282c039d",
  "c6213eb6"
  
)

/* harmony default export */ var VOverlay = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VWorker.vue?vue&type=template&id=3e2e64e3&scoped=true&lang=pug&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "worker container"
  }, [_vm._ssrNode("<div class=\"worker__title\" data-v-3e2e64e3>Working with GET request</div>"), _c('VCard', {
    attrs: {
      "users": _vm.users
    }
  }), _vm._ssrNode("<button class=\"worker__button\" data-v-3e2e64e3>Show more</button>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/VWorker.vue?vue&type=template&id=3e2e64e3&scoped=true&lang=pug&

// EXTERNAL MODULE: ./components/VCard.vue + 4 modules
var VCard = __webpack_require__(28);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VWorker.vue?vue&type=script&lang=js&


/* harmony default export */ var VWorkervue_type_script_lang_js_ = ({
  computed: {
    ...Object(external_vuex_["mapGetters"])({
      limit: 'users/getLimit'
    })
  },
  components: {
    VCard: VCard["default"]
  },
  mounted() {
    console.log(this.limit);
  },
  methods: {
    showMore(val) {
      let newLimit = this.limit + val;
      this.$store.dispatch('users/limit', newLimit);
      console.log(newLimit);
      this.$store.dispatch('users/users');
    }
  },
  props: {
    users: {
      type: Array,
      default: []
    }
  }
});
// CONCATENATED MODULE: ./components/VWorker.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VWorkervue_type_script_lang_js_ = (VWorkervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/VWorker.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(43)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_VWorkervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3e2e64e3",
  "30f059b9"
  
)

/* harmony default export */ var VWorker = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {VCard: __webpack_require__(28).default})


/***/ }),
/* 50 */
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

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=fd2278ee&scoped=true&lang=pug&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "page"
  }, [_c('VHeader'), _c('VOverlay'), _c('VWorker', {
    attrs: {
      "users": _vm.users
    }
  }), _c('VSpeaker')], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=fd2278ee&scoped=true&lang=pug&

// EXTERNAL MODULE: ./components/VHeader.vue + 4 modules
var VHeader = __webpack_require__(47);

// EXTERNAL MODULE: ./components/VOverlay.vue + 4 modules
var VOverlay = __webpack_require__(48);

// EXTERNAL MODULE: ./components/VWorker.vue + 4 modules
var VWorker = __webpack_require__(49);

// EXTERNAL MODULE: ./components/VSpeaker.vue + 4 modules
var VSpeaker = __webpack_require__(50);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&





/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    VHeader: VHeader["default"],
    VOverlay: VOverlay["default"],
    VWorker: VWorker["default"],
    VSpeaker: VSpeaker["default"]
  },
  async asyncData({
    $axios,
    store
  }) {
    await store.dispatch('users/users');
    await store.dispatch('users/token');
    await store.dispatch('users/positions');
  },
  data() {
    return {};
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])({
      users: 'users/getUsers'
    })
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "fd2278ee",
  "4f452579"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {VHeader: __webpack_require__(47).default,VOverlay: __webpack_require__(48).default,VWorker: __webpack_require__(49).default,VSpeaker: __webpack_require__(50).default})


/***/ })
]);;
//# sourceMappingURL=index.js.map