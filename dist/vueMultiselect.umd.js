(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vueMultiselect"] = factory();
	else
		root["vueMultiselect"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0e91":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiselectValue_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8b54");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiselectValue_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiselectValue_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiselectValue_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6fc8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiselectOptions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ec1d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiselectOptions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiselectOptions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiselectOptions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7a22":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiselectWrapper_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b433");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiselectWrapper_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiselectWrapper_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiselectWrapper_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8b54":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b433":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ba7a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Multiselect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e550");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Multiselect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Multiselect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Multiselect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c1b1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c668":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiselectInput_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c1b1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiselectInput_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiselectInput_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiselectInput_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e550":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ec1d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"49e0052e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Multiselect.vue?vue&type=template&id=454105f8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('MultiselectCore',_vm._g(_vm._b({scopedSlots:_vm._u([{key:"default",fn:function(ref){
    var activate = ref.activate;
    var deactivate = ref.deactivate;
    var handleKeydown = ref.handleKeydown;
    var search = ref.search;
    var disabled = ref.disabled;
    var id = ref.id;
    var isOpen = ref.isOpen;
    var placeholder = ref.placeholder;
    var updateSearch = ref.updateSearch;
    var internalValue = ref.internalValue;
    var filteredOptions = ref.filteredOptions;
    var select = ref.select;
    var toggle = ref.toggle;
    var visibleValues = ref.visibleValues;
    var isSingleLabelVisible = ref.isSingleLabelVisible;
    var singleValue = ref.singleValue;
    var isPlaceholderVisible = ref.isPlaceholderVisible;
    var currentOptionLabel = ref.currentOptionLabel;
    var limit = ref.limit;
    var limitText = ref.limitText;
    var getOptionLabel = ref.getOptionLabel;
    var removeElement = ref.removeElement;
    var multiple = ref.multiple;
    var max = ref.max;
    var contentStyle = ref.contentStyle;
    var optimizedHeight = ref.optimizedHeight;
    var isAbove = ref.isAbove;
    var pointerSet = ref.pointerSet;
    var showNoResults = ref.showNoResults;
    var pointerPosition = ref.pointerPosition;
    var visibleElements = ref.visibleElements;
    var optionHeight = ref.optionHeight;
    var showPointer = ref.showPointer;
    var pointer = ref.pointer;
    var computedPlaceholder = ref.computedPlaceholder;
    var isFocused = ref.isFocused;
    var focus = ref.focus;
    var blur = ref.blur;
    var groupHighlight = ref.groupHighlight;
    var groupSelect = ref.groupSelect;
    var selectGroup = ref.selectGroup;
return _c('div',{staticStyle:{"position":"relative"}},[_c('MultiselectWrapper',_vm._b({},'MultiselectWrapper',{
        activate: activate,
        deactivate: deactivate,
        handleKeydown: handleKeydown,
        search: search,
        disabled: disabled,
        id: id,
        isOpen: isOpen,
        placeholder: placeholder,
        toggle: toggle,
        isFocused: isFocused,
        focus: focus,
        blur: blur
      },false),[_c('MultiselectValue',_vm._b({class:{
          'multiselect--disabled': disabled
        },scopedSlots:_vm._u([{key:"singleLabel",fn:function(props){return [_vm._t("singleLabel",[_vm._v("\n            "+_vm._s(props.currentOptionLabel)+"\n          ")],null,props)]}},{key:"placeholder",fn:function(props){return [_vm._t("placeholder",[_c('span',{staticClass:"multiselect__single"},[_vm._v("\n              "+_vm._s(props.placeholder)+"\n            ")])],null,props)]}}])},'MultiselectValue',{
          toggle: toggle,
          search: search,
          visibleValues: visibleValues,
          getOptionLabel: getOptionLabel,
          removeElement: removeElement,
          internalValue: internalValue,
          loading: _vm.loading,
          isSingleLabelVisible: isSingleLabelVisible,
          singleValue: singleValue,
          placeholder: placeholder,
          isPlaceholderVisible: isPlaceholderVisible,
          currentOptionLabel: currentOptionLabel,
          limit: limit,
          limitText: limitText,
          multiple: multiple,
          isOpen: isOpen
        },false),[(_vm.searchable)?_c('MultiselectInput',_vm._b({attrs:{"slot":"control"},on:{"up":function($event){handleKeydown('up')},"down":function($event){handleKeydown('down')},"delete":function($event){handleKeydown('delete')},"enter":function($event){handleKeydown('enter', $event)},"space":function($event){handleKeydown('space', $event)},"tab":function($event){handleKeydown('tab')},"esc":deactivate},slot:"control"},'MultiselectInput',{
            activate: activate,
            deactivate: deactivate,
            search: search,
            disabled: disabled,
            id: id,
            isOpen: isOpen,
            placeholder: placeholder,
            updateSearch: updateSearch,
            computedPlaceholder: computedPlaceholder
          },false)):_vm._e()],1)],1),_vm._t("options",[_c('MultiselectOptions',_vm._b({scopedSlots:_vm._u([{key:"_option",fn:function(props){return [_vm._t("option",[_c('span',[_vm._v(_vm._s(getOptionLabel(props.option)))])],null,props)]}},{key:"_optionGroup",fn:function(props){return [_vm._t("optionGroup",[_c('span',[_vm._v(_vm._s(getOptionLabel(props.option)))])],null,props)]}},{key:"_afterList",fn:function(props){return [_vm._t("afterList",null,null,props)]}},{key:"_noResult",fn:function(props){return [_vm._t("noResult",[_vm._v("\n            No options found. Consider changing the search query.\n          ")],null,props)]}}])},'MultiselectOptions',{
          activate: activate,
          deactivate: deactivate,
          handleKeydown: handleKeydown,
          search: search,
          disabled: disabled,
          id: id,
          isOpen: isOpen,
          placeholder: placeholder,
          updateSearch: updateSearch,
          internalValue: internalValue,
          filteredOptions: filteredOptions,
          select: select,
          toggle: toggle,
          visibleValues: visibleValues,
          isSingleLabelVisible: isSingleLabelVisible,
          singleValue: singleValue,
          isPlaceholderVisible: isPlaceholderVisible,
          currentOptionLabel: currentOptionLabel,
          limit: limit,
          limitText: limitText,
          getOptionLabel: getOptionLabel,
          removeElement: removeElement,
          multiple: multiple,
          max: max,
          contentStyle: contentStyle,
          optimizedHeight: optimizedHeight,
          isAbove: isAbove,
          pointerSet: pointerSet,
          showNoResults: showNoResults,
          pointerPosition: pointerPosition,
          visibleElements: visibleElements,
          optionHeight: optionHeight,
          showPointer: showPointer,
          pointer: pointer,
          loading: _vm.loading,
          groupHighlight: groupHighlight,
          groupSelect: groupSelect,
          selectGroup: selectGroup
        },false),[_c('template',{slot:"_beforeList"},[_vm._t("beforeList")],2),_c('template',{slot:"_maxElements"},[_vm._t("maxElements",[_vm._v("\n            Maximum of "+_vm._s(max)+" options selected. First remove a selected option to select another.\n          ")])],2)],2)],{isOpen:isOpen,value:internalValue,filteredOptions:filteredOptions,select:select},_vm.$attrs)],2)}}])},'MultiselectCore',_vm.$props,false),_vm.$listeners))}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/Multiselect.vue?vue&type=template&id=454105f8&

// CONCATENATED MODULE: ./src/utils.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function isEmpty(opt) {
  if (opt === 0) return false;
  if (Array.isArray(opt) && opt.length === 0) return true;
  return !opt;
}
function isSelected(option, value, trackBy) {
  var opt = trackBy ? option[trackBy] : option;
  return value.indexOf(opt) > -1;
}
function not(fun) {
  return function () {
    return !fun.apply(void 0, arguments);
  };
}
function includes(str, query) {
  /* istanbul ignore else */
  if (str === undefined) str = 'undefined';
  if (str === null) str = 'null';
  if (str === false) str = 'false';
  var text = str.toString().toLowerCase();
  return text.indexOf(query.trim()) !== -1;
}
function filterOptions(options, search, label, customLabel) {
  return options.filter(function (option) {
    return includes(customLabel(option, label), search);
  });
}
function stripGroups(options) {
  return options.filter(function (option) {
    return !option.$isLabel;
  });
}
function flattenOptions(values, label) {
  return function (options) {
    return options.reduce(function (prev, curr) {
      /* istanbul ignore else */
      if (curr[values] && curr[values].length) {
        prev.push({
          $groupLabel: curr[label],
          $isLabel: true
        });
        return prev.concat(curr[values]);
      }

      return prev;
    }, []);
  };
}
function filterGroups(search, label, values, groupLabel, customLabel) {
  return function (groups) {
    return groups.map(function (group) {
      var _ref;

      /* istanbul ignore else */
      if (!group[values]) {
        //  eslint-disable-next-line no-console
        console.warn("Options passed to vue-multiselect do not contain groups, despite the config.");
        return [];
      }

      var groupOptions = filterOptions(group[values], search, label, customLabel);
      return groupOptions.length ? (_ref = {}, _defineProperty(_ref, groupLabel, group[groupLabel]), _defineProperty(_ref, values, groupOptions), _ref) : [];
    });
  };
}
function flow() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduce(function (v, f) {
      return f(v);
    }, x);
  };
}
/**
 * Scroll node into view if necessary
 * @param {HTMLElement} node - the element that should scroll into view
 * @param {HTMLElement} rootNode - the root element of the component
 * @param {Boolean} alignToTop - align element to the top of the visible area of the scrollable ancestor
 */
// eslint-disable-next-line complexity

function scrollIntoView(node, rootNode) {
  var scrollParent = getClosestScrollParent(node, rootNode);

  if (scrollParent === null) {
    return;
  }

  var scrollParentStyles = window.getComputedStyle(scrollParent);
  var scrollParentRect = scrollParent.getBoundingClientRect();
  var scrollParentBorderTopWidth = parseInt(scrollParentStyles.borderTopWidth, 10);
  var scrollParentBorderBottomWidth = parseInt(scrollParentStyles.borderBottomWidth, 10);
  var bordersWidth = scrollParentBorderTopWidth + scrollParentBorderBottomWidth;
  var scrollParentTop = scrollParentRect.top + scrollParentBorderTopWidth;
  var nodeRect = node.getBoundingClientRect();

  if (nodeRect.top < 0 && scrollParentRect.top < 0) {
    scrollParent.scrollTop += nodeRect.top;
    return;
  }

  if (nodeRect.top < 0) {
    // the item is above the viewport and the parent is not above the viewport
    scrollParent.scrollTop += nodeRect.top - scrollParentTop;
    return;
  }

  if (nodeRect.top > 0 && scrollParentRect.top < 0) {
    if (scrollParentRect.bottom > 0 && nodeRect.bottom + bordersWidth > scrollParentRect.bottom) {
      // the item is below scrollable area
      scrollParent.scrollTop += nodeRect.bottom - scrollParentRect.bottom + bordersWidth;
    } // item and parent top are on different sides of view top border (do nothing)


    return;
  }

  var nodeOffsetTop = nodeRect.top + scrollParent.scrollTop;
  var nodeTop = nodeOffsetTop - scrollParentTop;

  if (nodeTop < scrollParent.scrollTop) {
    // the item is above the scrollable area
    scrollParent.scrollTop = nodeTop;
  } else if (nodeTop + nodeRect.height + bordersWidth > scrollParent.scrollTop + scrollParentRect.height) {
    // the item is below the scrollable area
    scrollParent.scrollTop = nodeTop + nodeRect.height - scrollParentRect.height + bordersWidth;
  } // the item is within the scrollable area (do nothing)

}
var getClosestScrollParent = findParent.bind(null, function (node) {
  return node.scrollHeight > node.clientHeight;
});

function findParent(finder, node, rootNode) {
  if (node !== null && node !== rootNode.parentNode) {
    if (finder(node)) {
      if (node === document.body && node.scrollTop === 0) {
        // in chrome body.scrollTop always return 0
        return document.documentElement;
      }

      return node;
    } else {
      return findParent(finder, node.parentNode, rootNode);
    }
  } else {
    return null;
  }
}
// CONCATENATED MODULE: ./src/multiselectCorePropsMixin.js

/* harmony default export */ var multiselectCorePropsMixin = ({
  props: {
    /**
     * name attribute to match optional label element
     * @default ''
     * @type {String}
     */
    name: {
      type: String,
      default: ''
    },

    /**
     * String to show when pointing to an option
     * @default 'Press enter to select'
     * @type {String}
     */
    selectLabel: {
      type: String,
      default: 'Press enter to select'
    },

    /**
     * String to show when pointing to an option
     * @default 'Press enter to select'
     * @type {String}
     */
    selectGroupLabel: {
      type: String,
      default: 'Press enter to select group'
    },

    /**
     * String to show next to selected option
     * @default 'Selected'
     * @type {String}
    */
    selectedLabel: {
      type: String,
      default: 'Selected'
    },

    /**
     * String to show when pointing to an alredy selected option
     * @default 'Press enter to remove'
     * @type {String}
    */
    deselectLabel: {
      type: String,
      default: 'Press enter to remove'
    },

    /**
     * String to show when pointing to an alredy selected option
     * @default 'Press enter to remove'
     * @type {String}
    */
    deselectGroupLabel: {
      type: String,
      default: 'Press enter to deselect group'
    },

    /**
     * Decide whether to show pointer labels
     * @default true
     * @type {Boolean}
    */
    showLabels: {
      type: Boolean,
      default: true
    },

    /**
     * Limit the display of selected options. The rest will be hidden within the limitText string.
     * @default 99999
     * @type {Integer}
     */
    limit: {
      type: Number,
      default: 99999
    },

    /**
     * Sets maxHeight style value of the dropdown
     * @default 300
     * @type {Integer}
     */
    maxHeight: {
      type: Number,
      default: 300
    },

    /**
     * Function that process the message shown when selected
     * elements pass the defined limit.
     * @default 'and * more'
     * @param {Int} count Number of elements more than limit
     * @type {Function}
     */
    limitText: {
      type: Function,
      default: function _default(count) {
        return "and ".concat(count, " more");
      }
    },

    /**
     * Set true to trigger the loading spinner.
     * @default False
     * @type {Boolean}
    */
    loading: {
      type: Boolean,
      default: false
    },

    /**
     * Disables the multiselect if true.
     * @default false
     * @type {Boolean}
    */
    disabled: {
      type: Boolean,
      default: false
    },

    /**
     * Fixed opening direction
     * @default ''
     * @type {String}
    */
    openDirection: {
      type: String,
      default: ''
    },
    showNoResults: {
      type: Boolean,
      default: true
    },
    tabindex: {
      type: Number,
      default: 0
    },

    /**
     * Function to interpolate the custom label
     * @default false
     * @type {Function}
     */
    customLabel: {
      type: Function,
      default: function _default(option, label) {
        if (isEmpty(option)) return '';
        return label ? option[label] : option;
      }
    },

    /**
     * Decide whether to filter the results based on search query.
     * Useful for async filtering, where we search through more complex data.
     * @type {Boolean}
     */
    internalSearch: {
      type: Boolean,
      default: true
    },

    /**
     * Array of available options: Objects, Strings or Integers.
     * If array of objects, visible label will default to option.label.
     * If `labal` prop is passed, label will equal option['label']
     * @type {Array}
     */
    options: {
      type: Array,
      required: true
    },

    /**
     * Equivalent to the `multiple` attribute on a `<select>` input.
     * @default false
     * @type {Boolean}
     */
    multiple: {
      type: Boolean,
      default: false
    },

    /**
     * Presets the selected options value.
     * @type {Object||Array||String||Integer}
     */
    value: {
      type: null,
      default: function _default() {
        return [];
      }
    },

    /**
     * Key to compare objects
     * @default 'id'
     * @type {String}
     */
    trackBy: {
      type: String
    },

    /**
     * Label to look for in option Object
     * @default 'label'
     * @type {String}
     */
    label: {
      type: String
    },

    /**
     * Enable/disable search in options
     * @default true
     * @type {Boolean}
     */
    searchable: {
      type: Boolean,
      default: true
    },

    /**
     * Clear the search input after `)
     * @default true
     * @type {Boolean}
     */
    clearOnSelect: {
      type: Boolean,
      default: true
    },

    /**
     * Hide already selected options
     * @default false
     * @type {Boolean}
     */
    hideSelected: {
      type: Boolean,
      default: false
    },

    /**
     * Equivalent to the `placeholder` attribute on a `<select>` input.
     * @default 'Select option'
     * @type {String}
     */
    placeholder: {
      type: String,
      default: 'Select option'
    },

    /**
     * Allow to remove all selected values
     * @default true
     * @type {Boolean}
     */
    allowEmpty: {
      type: Boolean,
      default: true
    },

    /**
     * Reset this.internalValue, this.search after this.internalValue changes.
     * Useful if want to create a stateless dropdown.
     * @default false
     * @type {Boolean}
     */
    resetAfter: {
      type: Boolean,
      default: false
    },

    /**
     * Enable/disable closing after selecting an option
     * @default true
     * @type {Boolean}
     */
    closeOnSelect: {
      type: Boolean,
      default: true
    },

    /**
     * Disable / Enable tagging
     * @default false
     * @type {Boolean}
     */
    taggable: {
      type: Boolean,
      default: false
    },

    /**
     * String to show when highlighting a potential tag
     * @default 'Press enter to create a tag'
     * @type {String}
    */
    tagPlaceholder: {
      type: String,
      default: 'Press enter to create a tag'
    },

    /**
     * By default new tags will appear above the search results.
     * Changing to 'bottom' will revert this behaviour
     * and will proritize the search results
     * @default 'top'
     * @type {String}
    */
    tagPosition: {
      type: String,
      default: 'top'
    },

    /**
     * Number of allowed selected options. No limit if 0.
     * @default 0
     * @type {Number}
    */
    max: {
      type: [Number, Boolean],
      default: false
    },

    /**
     * Will be passed with all events as second param.
     * Useful for identifying events origin.
     * @default null
     * @type {String|Integer}
    */
    id: {
      default: null
    },

    /**
     * Limits the options displayed in the dropdown
     * to the first X options.
     * @default 1000
     * @type {Integer}
    */
    optionsLimit: {
      type: Number,
      default: 1000
    },

    /**
     * Name of the property containing
     * the group values
     * @default 1000
     * @type {String}
    */
    groupValues: {
      type: String
    },

    /**
     * Name of the property containing
     * the group label
     * @default 1000
     * @type {String}
    */
    groupLabel: {
      type: String
    },

    /**
     * Allow to select all group values
     * by selecting the group label
     * @default false
     * @type {Boolean}
     */
    groupSelect: {
      type: Boolean,
      default: false
    },

    /**
     * Array of keyboard keys to block
     * when selecting
     * @default 1000
     * @type {String}
    */
    blockKeys: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    /**
     * Prevent from wiping up the search value
     * @default false
     * @type {Boolean}
    */
    preserveSearch: {
      type: Boolean,
      default: false
    },

    /**
     * Select 1st options if value is empty
     * @default false
     * @type {Boolean}
    */
    preselectFirst: {
      type: Boolean,
      default: false
    },

    /**
     * Enable/disable highlighting of the pointed value.
     * @type {Boolean}
     * @default true
     */
    showPointer: {
      type: Boolean,
      default: true
    },
    optionHeight: {
      type: Number,
      default: 40
    }
  }
});
// CONCATENATED MODULE: ./src/MultiselectCore.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



/* harmony default export */ var MultiselectCore = ({
  name: 'vue-multiselect-core',
  mixins: [multiselectCorePropsMixin],
  render: function render() {
    return this.$scopedSlots.default(this);
  },
  data: function data() {
    return {
      search: '',
      isFocused: false,
      isOpen: false,
      prefferedOpenDirection: 'below',
      optimizedHeight: this.maxHeight,
      pointer: 0,
      pointerDirty: false
    };
  },
  mounted: function mounted() {
    if (this.preselectFirst && !this.internalValue.length && this.options.length) {
      this.select(this.filteredOptions[0]);
    }
  },
  computed: {
    internalValue: function internalValue() {
      return this.value || this.value === 0 ? Array.isArray(this.value) ? this.value : [this.value] : [];
    },
    filteredOptions: function filteredOptions() {
      var search = this.search || '';
      var normalizedSearch = search.toLowerCase().trim();
      var options = this.options.concat();
      /* istanbul ignore else */

      if (this.internalSearch) {
        options = this.groupValues ? this.filterAndFlat(options, normalizedSearch, this.label) : filterOptions(options, normalizedSearch, this.label, this.customLabel);
      } else {
        options = this.groupValues ? flattenOptions(this.groupValues, this.groupLabel)(options) : options;
      }

      options = this.hideSelected ? options.filter(not(this.isSelected)) : options;
      /* istanbul ignore else */

      if (this.taggable && normalizedSearch.length && !this.isExistingOption(normalizedSearch)) {
        if (this.tagPosition === 'bottom') {
          options.push({
            isTag: true,
            label: search
          });
        } else {
          options.unshift({
            isTag: true,
            label: search
          });
        }
      }

      return options.slice(0, this.optionsLimit);
    },
    valueKeys: function valueKeys() {
      var _this = this;

      if (this.trackBy) {
        return this.internalValue.map(function (element) {
          return element[_this.trackBy];
        });
      } else {
        return this.internalValue;
      }
    },
    optionKeys: function optionKeys() {
      var _this2 = this;

      var options = this.groupValues ? this.flatAndStrip(this.options) : this.options;
      return options.map(function (element) {
        return _this2.customLabel(element, _this2.label).toString().toLowerCase();
      });
    },
    currentOptionLabel: function currentOptionLabel() {
      return this.multiple ? this.searchable ? '' : this.placeholder : this.internalValue.length ? this.getOptionLabel(this.internalValue[0]) : this.searchable ? '' : this.placeholder;
    },
    isSingleLabelVisible: function isSingleLabelVisible() {
      return this.singleValue && (!this.isOpen || !this.searchable) && !this.visibleValues.length;
    },
    isPlaceholderVisible: function isPlaceholderVisible() {
      return !this.internalValue.length && (!this.searchable || !this.isOpen);
    },
    visibleValues: function visibleValues() {
      return this.multiple ? this.internalValue.slice(0, this.limit) : [];
    },
    singleValue: function singleValue() {
      return this.internalValue[0];
    },
    deselectLabelText: function deselectLabelText() {
      return this.showLabels ? this.deselectLabel : '';
    },
    deselectGroupLabelText: function deselectGroupLabelText() {
      return this.showLabels ? this.deselectGroupLabel : '';
    },
    selectLabelText: function selectLabelText() {
      return this.showLabels ? this.selectLabel : '';
    },
    selectGroupLabelText: function selectGroupLabelText() {
      return this.showLabels ? this.selectGroupLabel : '';
    },
    selectedLabelText: function selectedLabelText() {
      return this.showLabels ? this.selectedLabel : '';
    },
    inputStyle: function inputStyle() {
      if (this.multiple && this.value && this.value.length) {
        // Hide input by setting the width to 0 allowing it to receive focus
        return this.isOpen ? {
          'width': 'auto'
        } : {
          'width': '0',
          'position': 'absolute',
          'padding': '0'
        };
      }
    },
    contentStyle: function contentStyle() {
      return this.options.length ? {
        'display': 'inline-block'
      } : {
        'display': 'block'
      };
    },
    isAbove: function isAbove() {
      if (this.openDirection === 'above' || this.openDirection === 'top') {
        return true;
      } else if (this.openDirection === 'below' || this.openDirection === 'bottom') {
        return false;
      } else {
        return this.prefferedOpenDirection === 'above';
      }
    },
    showSearchInput: function showSearchInput() {
      return this.searchable && (this.hasSingleSelectedSlot && (this.visibleSingleValue || this.visibleSingleValue === 0) ? this.isOpen : true);
    },
    pointerPosition: function pointerPosition() {
      return this.pointer * this.optionHeight;
    },
    visibleElements: function visibleElements() {
      return this.optimizedHeight / this.optionHeight;
    },
    computedPlaceholder: function computedPlaceholder() {
      return this.multiple ? this.placeholder : this.getOptionLabel(this.singleValue) || this.placeholder;
    }
  },
  watch: {
    internalValue: function internalValue() {
      /* istanbul ignore else */
      if (this.resetAfter && this.internalValue.length) {
        this.search = '';
        this.$emit('input', this.multiple ? [] : null);
      }
    },
    search: function search() {
      this.$emit('search-change', this.search, this.id);
    },
    filteredOptions: function filteredOptions() {
      this.pointerAdjust();
    },
    isOpen: function isOpen() {
      this.pointerDirty = false;
    }
  },
  methods: {
    handleKeydown: function handleKeydown(key, $event) {
      switch (key) {
        case 'up':
          this.activate();
          this.pointerBackward();
          return;

        case 'down':
          this.activate();
          this.pointerForward();
          return;

        case 'enter':
          if (!this.isOpen) this.activate();else this.addPointerElement();
          return;

        case 'esc':
          this.deactivate();
          return;

        case 'delete':
          this.removeLastElement();
          return;

        case 'space':
          if (!this.isOpen) {
            this.activate();
            $event.preventDefault();
          } else if (!this.search.length) {
            this.addPointerElement();
            $event.preventDefault();
          }

          return;

        case 'tab':
          if (this.isOpen) {
            this.addPointerElement('Tab');
            this.deactivate();
            $event.preventDefault();
          }

      }
    },

    /**
     * Returns the internalValue in a way it can be emited to the parent
     * @returns {Object||Array||String||Integer}
     */
    getValue: function getValue() {
      return this.multiple ? this.internalValue : this.internalValue.length === 0 ? null : this.internalValue[0];
    },

    /**
     * Filters and then flattens the options list
     * @param  {Array}
     * @returns {Array} returns a filtered and flat options list
     */
    filterAndFlat: function filterAndFlat(options, search, label) {
      return flow(filterGroups(search, label, this.groupValues, this.groupLabel, this.customLabel), flattenOptions(this.groupValues, this.groupLabel))(options);
    },

    /**
     * Flattens and then strips the group labels from the options list
     * @param  {Array}
     * @returns {Array} returns a flat options list without group labels
     */
    flatAndStrip: function flatAndStrip(options) {
      return flow(flattenOptions(this.groupValues, this.groupLabel), stripGroups)(options);
    },

    /**
     * Updates the search value
     * @param  {String}
     */
    updateSearch: function updateSearch(query) {
      this.search = query;
    },

    /**
     * Finds out if the given query is already present
     * in the available options
     * @param  {String}
     * @returns {Boolean} returns true if element is available
     */
    isExistingOption: function isExistingOption(query) {
      return !this.options ? false : this.optionKeys.indexOf(query) > -1;
    },

    /**
     * Finds out if the given element is already present
     * in the result value
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is selected
     */
    isSelected: function isSelected(option) {
      var opt = this.trackBy ? option[this.trackBy] : option;
      return this.valueKeys.indexOf(opt) > -1;
    },

    /**
     * Returns empty string when options is null/undefined
     * Returns tag query if option is tag.
     * Returns the customLabel() results and casts it to string.
     *
     * @param  {Object||String||Integer} Passed option
     * @returns {Object||String}
     */
    getOptionLabel: function getOptionLabel(option) {
      if (isEmpty(option)) return '';
      /* istanbul ignore else */

      if (option.isTag) return option.label;
      /* istanbul ignore else */

      if (option.$isLabel) return option.$groupLabel;
      var label = this.customLabel(option, this.label);
      /* istanbul ignore else */

      if (isEmpty(label)) return '';
      return label;
    },

    /**
     * Add the given option to the list of selected options
     * or sets the option as the selected option.
     * If option is already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} option to select/deselect
     * @param  {Boolean} block removing
     */
    select: function select(option, key) {
      /* istanbul ignore else */
      if (option.$isLabel && this.groupSelect) {
        this.selectGroup(option);
        return;
      }

      if (this.blockKeys.indexOf(key) !== -1 || this.disabled || option.$isDisabled || option.$isLabel) return;
      /* istanbul ignore else */

      if (this.max && this.multiple && this.internalValue.length === this.max) return;
      /* istanbul ignore else */
      // if (key === 'Tab' && !this.pointerDirty) return

      if (option.isTag) {
        this.$emit('tag', option.label, this.id);
        this.search = '';
        if (this.closeOnSelect && !this.multiple) this.deactivate();
      } else {
        var isSelected = this.isSelected(option);

        if (isSelected) {
          if (key !== 'Tab') this.removeElement(option); // this.removeElement(option)

          return;
        }

        this.$emit('select', option, this.id);

        if (this.multiple) {
          this.$emit('input', this.internalValue.concat([option]), this.id);
        } else {
          this.$emit('input', option, this.id);
        }
        /* istanbul ignore else */


        if (this.clearOnSelect) this.search = '';
      }
      /* istanbul ignore else */


      if (this.closeOnSelect) this.deactivate();
    },

    /**
     * Add the given group options to the list of selected options
     * If all group optiona are already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} group to select/deselect
     */
    selectGroup: function selectGroup(selectedGroup) {
      var _this3 = this;

      var group = this.options.find(function (option) {
        return option[_this3.groupLabel] === selectedGroup.$groupLabel;
      });
      if (!group) return;

      if (this.wholeGroupSelected(group)) {
        this.$emit('remove', group[this.groupValues], this.id);
        var newValue = this.internalValue.filter(function (option) {
          return group[_this3.groupValues].indexOf(option) === -1;
        });
        this.$emit('input', newValue, this.id);
      } else {
        var optionsToAdd = group[this.groupValues].filter(not(this.isSelected));
        this.$emit('select', optionsToAdd, this.id);
        this.$emit('input', this.internalValue.concat(optionsToAdd), this.id);
      }
    },

    /**
     * Helper to identify if all values in a group are selected
     *
     * @param {Object} group to validated selected values against
     */
    wholeGroupSelected: function wholeGroupSelected(group) {
      return group[this.groupValues].every(this.isSelected);
    },

    /**
     * Removes the given option from the selected options.
     * Additionally checks this.allowEmpty prop if option can be removed when
     * it is the last selected option.
     *
     * @param  {type} option description
     * @returns {type}        description
     */
    removeElement: function removeElement(option) {
      var shouldClose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      /* istanbul ignore else */
      if (this.disabled) return;
      /* istanbul ignore else */

      if (!this.allowEmpty && this.internalValue.length <= 1) {
        this.deactivate();
        return;
      }

      var index = _typeof(option) === 'object' ? this.valueKeys.indexOf(option[this.trackBy]) : this.valueKeys.indexOf(option);
      this.$emit('remove', option, this.id);

      if (this.multiple) {
        var newValue = this.internalValue.slice(0, index).concat(this.internalValue.slice(index + 1));
        this.$emit('input', newValue, this.id);
      } else {
        this.$emit('input', null, this.id);
      }
      /* istanbul ignore else */


      if (this.closeOnSelect && shouldClose) this.deactivate();
    },

    /**
     * Calls this.removeElement() with the last element
     * from this.internalValue (selected element Array)
     *
     * @fires this#removeElement
     */
    removeLastElement: function removeLastElement() {
      /* istanbul ignore else */
      if (this.blockKeys.indexOf('Delete') !== -1) return;
      /* istanbul ignore else */

      if (this.search.length === 0 && Array.isArray(this.internalValue)) {
        this.removeElement(this.internalValue[this.internalValue.length - 1], false);
      }
    },
    clickOutsideHandler: function clickOutsideHandler(e) {
      if (!this.$el.contains(e.target)) {
        this.deactivate();
      }
    },
    focus: function focus() {
      this.isFocused = true;
    },
    blur: function blur() {
      this.isFocused = false;
    },

    /**
     * Opens the multiselect’s dropdown.
     * Sets this.isOpen to TRUE
     */
    activate: function activate() {
      /* istanbul ignore else */
      if (this.isOpen || this.disabled) return;
      window.addEventListener('click', this.clickOutsideHandler);
      this.adjustPosition();
      /* istanbul ignore else  */

      if (this.groupValues && this.pointer === 0 && this.filteredOptions.length) {
        this.pointer = 1;
      }

      this.isOpen = true;
      /* istanbul ignore else  */
      // if (this.searchable && !this.preserveSearch) this.search = ''

      this.$emit('open', this.id);
    },

    /**
     * Closes the multiselect’s dropdown.
     * Sets this.isOpen to FALSE
     */
    deactivate: function deactivate() {
      var _this4 = this;

      /* istanbul ignore else */
      if (!this.isOpen) return;
      window.removeEventListener('click', this.clickOutsideHandler);
      this.$nextTick(function () {
        _this4.isOpen = false;
      });
      if (!this.preserveSearch) this.search = '';
      this.$emit('close', this.getValue(), this.id);
    },

    /**
     * Call this.activate() or this.deactivate()
     * depending on this.isOpen value.
     *
     * @fires this#activate || this#deactivate
     * @property {Boolean} isOpen indicates if dropdown is open
     */
    toggle: function toggle() {
      this.isOpen ? this.deactivate() : this.activate();
    },

    /**
     * Updates the hasEnoughSpace variable used for
     * detecting where to expand the dropdown
     */
    adjustPosition: function adjustPosition() {
      if (typeof window === 'undefined' || !this.$el.getBoundingClientRect) return;
      var spaceAbove = this.$el.getBoundingClientRect().top;
      var spaceBelow = window.innerHeight - this.$el.getBoundingClientRect().bottom;
      var hasEnoughSpaceBelow = spaceBelow > this.maxHeight;

      if (hasEnoughSpaceBelow || spaceBelow > spaceAbove || this.openDirection === 'below' || this.openDirection === 'bottom') {
        this.prefferedOpenDirection = 'below';
        this.optimizedHeight = Math.min(spaceBelow - 40, this.maxHeight);
      } else {
        this.prefferedOpenDirection = 'above';
        this.optimizedHeight = Math.min(spaceAbove - 40, this.maxHeight);
      }
    },
    groupHighlight: function groupHighlight(index, selectedGroup) {
      var _this5 = this;

      if (!this.groupSelect) {
        return ['multiselect__option--disabled'];
      }

      var group = this.options.find(function (option) {
        return option[_this5.groupLabel] === selectedGroup.$groupLabel;
      });
      return [this.groupSelect ? 'multiselect__option--group' : 'multiselect__option--disabled', {
        'multiselect__option--highlight': index === this.pointer && this.showPointer
      }, {
        'multiselect__option--group-selected': this.wholeGroupSelected(group)
      }];
    },
    addPointerElement: function addPointerElement(withKey) {
      /* istanbul ignore else */
      if (this.filteredOptions.length > 0) {
        this.select(this.filteredOptions[this.pointer], withKey);
      }

      this.pointerReset();
    },
    pointerForward: function pointerForward() {
      /* istanbul ignore else */
      if (this.pointer < this.filteredOptions.length - 1) {
        this.pointer++;
        /* istanbul ignore else */

        if (this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect) this.pointerForward();
      }

      this.pointerDirty = true;
    },
    pointerBackward: function pointerBackward() {
      if (this.pointer > 0) {
        this.pointer--;
        /* istanbul ignore else */

        if (this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect) this.pointerBackward();
      } else {
        /* istanbul ignore else */
        if (this.filteredOptions[this.pointer] && this.filteredOptions[0].$isLabel && !this.groupSelect) this.pointerForward();
      }

      this.pointerDirty = true;
    },
    pointerReset: function pointerReset() {
      /* istanbul ignore else */
      if (!this.closeOnSelect) return;
      this.pointer = 0;
      /* istanbul ignore else */

      if (this.$refs.list) {
        this.$refs.list.scrollTop = 0;
      }
    },
    pointerAdjust: function pointerAdjust() {
      /* istanbul ignore else */
      if (this.pointer >= this.filteredOptions.length - 1) {
        this.pointer = this.filteredOptions.length ? this.filteredOptions.length - 1 : 0;
      }

      if (this.filteredOptions.length > 0 && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect) {
        this.pointerForward();
      }
    },
    pointerSet: function pointerSet(index) {
      this.pointer = index;
      this.pointerDirty = true;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"49e0052e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/MultiselectOptions.vue?vue&type=template&id=65107cec&lang=html&
var MultiselectOptionsvue_type_template_id_65107cec_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"multiselect"}},[(_vm.isOpen)?_c('div',{ref:"list",staticClass:"multiselect__content-wrapper",class:{
      'multiselect--above': _vm.isAbove
    },style:({ maxHeight: _vm.optimizedHeight + 'px' }),on:{"focus":_vm.activate,"click":function($event){$event.preventDefault();}}},[_c('ul',{staticClass:"multiselect__content",style:(_vm.contentStyle)},[_vm._t("_beforeList"),(_vm.multiple && _vm.max === _vm.internalValue.length)?_c('li',[_c('span',{staticClass:"multiselect__option"},[_vm._t("_maxElements",[_vm._v("\n            Maximum of "+_vm._s(_vm.max)+" options selected. First remove a selected option to select another.\n          ")])],2)]):_vm._e(),(!_vm.max || _vm.internalValue.length < _vm.max)?_vm._l((_vm.filteredOptions),function(option,index){return _c('li',{key:index,staticClass:"multiselect__element"},[(!(option && (option.$isLabel || option.$isDisabled)))?_c('span',{staticClass:"multiselect__option",class:_vm.optionHighlight(index, option),on:{"click":function($event){$event.stopPropagation();$event.preventDefault();_vm.select(option)},"mousedown":function($event){$event.stopPropagation();$event.preventDefault();},"mouseenter":function($event){if($event.target !== $event.currentTarget){ return null; }_vm.pointerSet(index)}}},[_vm._t("_option",[_c('span',[_vm._v(_vm._s(_vm.getOptionLabel(option)))])],{option:option})],2):_vm._e(),(option && option.$isLabel)?_c('span',{staticClass:"multiselect__option",class:_vm.groupHighlight(index, option),on:{"mouseenter":function($event){if($event.target !== $event.currentTarget){ return null; }_vm.groupSelect && _vm.pointerSet(index)},"mousedown":function($event){$event.preventDefault();_vm.selectGroup(option)}}},[_vm._t("_optionGroup",[_c('span',[_vm._v(_vm._s(_vm.getOptionLabel(option)))])],{option:option,search:_vm.search})],2):_vm._e()])}):_vm._e(),(_vm.showNoResults && (_vm.filteredOptions.length === 0 && !_vm.loading))?_c('li',{staticClass:"multiselect__option"},[_vm._t("_noResult",[_vm._v("\n          No elements found.\n        ")])],2):_vm._e(),_vm._t("_afterList")],2)]):_vm._e()])}
var MultiselectOptionsvue_type_template_id_65107cec_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/MultiselectOptions.vue?vue&type=template&id=65107cec&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/MultiselectOptions.vue?vue&type=script&lang=js&
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
//
//
//

/* harmony default export */ var MultiselectOptionsvue_type_script_lang_js_ = ({
  props: {
    name: {
      type: String,
      default: ''
    },
    activate: {
      type: Function
    },
    deactivate: {
      type: Function
    },
    handleKeydown: {
      type: Function,
      required: true
    },
    search: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    id: {
      type: [String, Number]
    },
    isOpen: {
      type: Boolean
    },
    placeholder: {
      type: String
    },
    updateSearch: {
      type: Function
    },
    internalValue: {
      type: Array
    },
    filteredOptions: {
      type: Array
    },
    select: {
      type: Function
    },
    toggle: {
      type: Function
    },
    visibleValues: {
      type: Array
    },
    isSingleLabelVisible: {
      type: Boolean
    },
    singleValue: {
      type: [Object, Number, String]
    },
    isPlaceholderVisible: {
      type: Boolean
    },
    currentOptionLabel: {
      type: String
    },
    limit: {
      type: Number
    },
    limitText: {
      type: Function
    },
    getOptionLabel: {
      type: Function
    },
    removeElement: {
      type: Function
    },
    multiple: {
      type: Boolean
    },
    max: {
      type: [Number, Boolean]
    },
    contentStyle: {
      type: Object
    },
    optimizedHeight: {
      type: Number
    },
    isAbove: {
      type: Boolean
    },
    pointerSet: {
      type: Function
    },
    showNoResults: {
      type: Boolean
    },
    pointerPosition: {
      type: Number
    },
    visibleElements: {
      type: Number
    },
    optionHeight: {
      type: Number
    },
    showPointer: {
      type: Boolean
    },
    pointer: {
      type: Number
    },
    loading: {
      type: Boolean
    },
    groupHighlight: {
      type: Function
    },
    groupSelect: {
      type: Boolean,
      default: false
    },
    selectGroup: {
      type: Function
    }
  },
  watch: {
    pointerPosition: function pointerPosition(newPos, oldPos) {
      if (!this.$refs.list) return;

      if (newPos > oldPos) {
        this.handlePointerForward();
      } else {
        this.handlePointerBackward();
      }
    }
  },
  methods: {
    handlePointerForward: function handlePointerForward() {
      /* istanbul ignore next */
      if (this.$refs.list.scrollTop <= this.pointerPosition - (this.visibleElements - 1) * this.optionHeight) {
        this.$refs.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight;
      }
    },
    handlePointerBackward: function handlePointerBackward() {
      /* istanbul ignore next */
      if (this.$refs.list.scrollTop >= this.pointerPosition) {
        this.$refs.list.scrollTop = this.pointerPosition;
      }
    },
    optionHighlight: function optionHighlight(index, option) {
      return {
        'multiselect__option--highlight': index === this.pointer && this.showPointer,
        'multiselect__option--selected': isSelected(option, this.internalValue)
      };
    }
  }
});
// CONCATENATED MODULE: ./src/MultiselectOptions.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_MultiselectOptionsvue_type_script_lang_js_ = (MultiselectOptionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/MultiselectOptions.vue?vue&type=style&index=0&lang=css&
var MultiselectOptionsvue_type_style_index_0_lang_css_ = __webpack_require__("6fc8");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/MultiselectOptions.vue






/* normalize component */

var component = normalizeComponent(
  src_MultiselectOptionsvue_type_script_lang_js_,
  MultiselectOptionsvue_type_template_id_65107cec_lang_html_render,
  MultiselectOptionsvue_type_template_id_65107cec_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "MultiselectOptions.vue"
/* harmony default export */ var MultiselectOptions = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"49e0052e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/MultiselectInput.vue?vue&type=template&id=5adadc82&lang=html&
var MultiselectInputvue_type_template_id_5adadc82_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',{staticClass:"multiselect__input",attrs:{"slot":"control","autocapitalize":"none","autocorrect":"off","autocomplete":"off","spellcheck":"false","aria-autocomplete":"list","type":"text","id":_vm.id,"placeholder":_vm.computedPlaceholder,"disabled":_vm.disabled},domProps:{"value":_vm.search},on:{"click":function($event){$event.stopPropagation();},"keydown":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"space",32,$event.key," ")){ return null; }$event.stopPropagation();_vm.$emit('space', $event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }if($event.target !== $event.currentTarget){ return null; }$event.preventDefault();_vm.$emit('up')},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }if($event.target !== $event.currentTarget){ return null; }$event.preventDefault();_vm.$emit('down')},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"delete",[8,46],$event.key,["Backspace","Delete"])){ return null; }if($event.target !== $event.currentTarget){ return null; }_vm.$emit('delete')},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.stopPropagation();if($event.target !== $event.currentTarget){ return null; }_vm.$emit('enter', $event)}],"keyup":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }_vm.$emit('tab')},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,"Escape")){ return null; }_vm.$emit('esc')}],"input":function($event){_vm.updateSearch($event.target.value)}},slot:"control"})}
var MultiselectInputvue_type_template_id_5adadc82_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/MultiselectInput.vue?vue&type=template&id=5adadc82&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/MultiselectInput.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//
/* harmony default export */ var MultiselectInputvue_type_script_lang_js_ = ({
  props: {
    activate: {
      type: Function
    },
    deactivate: {
      type: Function
    },
    handleKeydown: {
      type: Function
    },
    updateSearch: {
      type: Function
    },
    disabled: {
      type: Boolean
    },
    isAbove: {
      type: Boolean
    },
    isOpen: {
      type: Boolean
    },
    search: {
      type: String
    },
    computedPlaceholder: {
      type: [String, Object]
    },
    id: {
      type: String
    }
  },
  mounted: function mounted() {
    this.$el.focus();
  }
});
// CONCATENATED MODULE: ./src/MultiselectInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_MultiselectInputvue_type_script_lang_js_ = (MultiselectInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/MultiselectInput.vue?vue&type=style&index=0&lang=stylus&
var MultiselectInputvue_type_style_index_0_lang_stylus_ = __webpack_require__("c668");

// CONCATENATED MODULE: ./src/MultiselectInput.vue






/* normalize component */

var MultiselectInput_component = normalizeComponent(
  src_MultiselectInputvue_type_script_lang_js_,
  MultiselectInputvue_type_template_id_5adadc82_lang_html_render,
  MultiselectInputvue_type_template_id_5adadc82_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

MultiselectInput_component.options.__file = "MultiselectInput.vue"
/* harmony default export */ var MultiselectInput = (MultiselectInput_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"49e0052e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/MultiselectWrapper.vue?vue&type=template&id=034822bb&
var MultiselectWrappervue_type_template_id_034822bb_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"multiselect-wrapper",class:{
    'multiselect-wrapper--active': _vm.isFocused || _vm.isOpen,
    'multiselect-wrapper--open': _vm.isOpen,
    'multiselect-wrapper--disabled': _vm.disabled
  },on:{"focus":function($event){_vm.focus()},"blur":function($event){_vm.blur()},"click":function($event){$event.stopPropagation();_vm.toggle()},"keyup":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"space",32,$event.key," ")){ return null; }$event.preventDefault();if($event.target !== $event.currentTarget){ return null; }$event.stopPropagation();_vm.handleKeydown('space', $event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,"Escape")){ return null; }_vm.deactivate()}],"keydown":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();if($event.target !== $event.currentTarget){ return null; }_vm.handleKeydown('down')},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }$event.preventDefault();if($event.target !== $event.currentTarget){ return null; }_vm.handleKeydown('up')},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }_vm.handleKeydown('enter', $event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }_vm.handleKeydown('tab', $event)}]}},[_vm._t("default")],2)}
var MultiselectWrappervue_type_template_id_034822bb_staticRenderFns = []


// CONCATENATED MODULE: ./src/MultiselectWrapper.vue?vue&type=template&id=034822bb&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/MultiselectWrapper.vue?vue&type=script&lang=js&
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
//
//
//
//
/* harmony default export */ var MultiselectWrappervue_type_script_lang_js_ = ({
  props: {
    activate: {
      type: Function
    },
    deactivate: {
      type: Function
    },
    handleKeydown: {
      type: Function
    },
    disabled: {
      type: Boolean
    },
    isAbove: {
      type: Boolean
    },
    isOpen: {
      type: Boolean
    },
    toggle: {
      type: Function
    },
    focus: {
      type: Function
    },
    blur: {
      type: Function
    },
    isFocused: {
      type: Boolean
    }
  },
  watch: {
    isOpen: function isOpen(_isOpen) {
      if (_isOpen) this.$el.focus();
    }
  }
});
// CONCATENATED MODULE: ./src/MultiselectWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_MultiselectWrappervue_type_script_lang_js_ = (MultiselectWrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/MultiselectWrapper.vue?vue&type=style&index=0&lang=stylus&
var MultiselectWrappervue_type_style_index_0_lang_stylus_ = __webpack_require__("7a22");

// CONCATENATED MODULE: ./src/MultiselectWrapper.vue






/* normalize component */

var MultiselectWrapper_component = normalizeComponent(
  src_MultiselectWrappervue_type_script_lang_js_,
  MultiselectWrappervue_type_template_id_034822bb_render,
  MultiselectWrappervue_type_template_id_034822bb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

MultiselectWrapper_component.options.__file = "MultiselectWrapper.vue"
/* harmony default export */ var MultiselectWrapper = (MultiselectWrapper_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"49e0052e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/MultiselectValue.vue?vue&type=template&id=97ba9004&
var MultiselectValuevue_type_template_id_97ba9004_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{ 'multiselect--disabled': _vm.disabled }},[_vm._t("caret",[_c('div',{staticClass:"multiselect__caret",class:{ 'multiselect__caret--active': _vm.isOpen }})],{toggle:_vm.toggle,isOpen:_vm.isOpen}),_c('transition',{attrs:{"name":"multiselect__loading"}},[_vm._t("loading",[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],staticClass:"multiselect__spinner"})])],2),_vm._t("value",[_vm._l((_vm.visibleValues),function(option,index){return [_vm._t("tag",[_c('span',{key:index,staticClass:"multiselect__tag"},[_c('span',{domProps:{"textContent":_vm._s(_vm.getOptionLabel(option))}}),_c('i',{staticClass:"multiselect__tag-icon",attrs:{"aria-hidden":"true"},on:{"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();_vm.removeElement(option)},"click":function($event){$event.preventDefault();$event.stopPropagation();_vm.removeElement(option)}}})])],{option:option,search:_vm.search,remove:_vm.removeElement})]}),(_vm.isOpen)?_vm._t("control"):_vm._e(),(_vm.internalValue && _vm.internalValue.length > _vm.limit)?[_vm._t("limit",[_c('strong',{staticClass:"multiselect__strong",domProps:{"textContent":_vm._s(_vm.limitText(_vm.internalValue.length - _vm.limit))}})])]:_vm._e(),(_vm.isSingleLabelVisible)?_c('span',{staticClass:"multiselect__single"},[_vm._t("singleLabel",[_vm._v("\n        "+_vm._s(_vm.currentOptionLabel)+"\n      ")],null,{
          option: _vm.singleValue,
          currentOptionLabel: _vm.currentOptionLabel
        })],2):_vm._e(),(_vm.isPlaceholderVisible)?_c('span',[_vm._t("placeholder",[_c('span',{staticClass:"multiselect__single"},[_vm._v("\n          "+_vm._s(_vm.placeholder)+"\n        ")])],{placeholder:_vm.placeholder})],2):_vm._e()],null,{
      toggle: _vm.toggle,
      search: _vm.search,
      visibleValues: _vm.visibleValues,
      getOptionLabel: _vm.getOptionLabel,
      removeElement: _vm.removeElement,
      internalValue: _vm.internalValue,
      loading: _vm.loading,
      isSingleLabelVisible: _vm.isSingleLabelVisible,
      singleValue: _vm.singleValue,
      placeholder: _vm.placeholder,
      isPlaceholderVisible: _vm.isPlaceholderVisible,
      currentOptionLabel: _vm.currentOptionLabel,
      limit: _vm.limit,
      limitText: _vm.limitText,
      isOpen: _vm.isOpen
    })],2)}
var MultiselectValuevue_type_template_id_97ba9004_staticRenderFns = []


// CONCATENATED MODULE: ./src/MultiselectValue.vue?vue&type=template&id=97ba9004&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/MultiselectValue.vue?vue&type=script&lang=js&
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
/* harmony default export */ var MultiselectValuevue_type_script_lang_js_ = ({
  props: {
    toggle: {
      type: Function
    },
    search: {
      type: String
    },
    visibleValues: {
      type: Array
    },
    getOptionLabel: {
      type: Function
    },
    removeElement: {
      type: Function
    },
    internalValue: {
      type: Array
    },
    loading: {
      type: Boolean
    },
    isSingleLabelVisible: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    singleValue: {},
    placeholder: {},
    isPlaceholderVisible: {},
    currentOptionLabel: {},
    limit: {},
    limitText: {},
    isOpen: {}
  }
});
// CONCATENATED MODULE: ./src/MultiselectValue.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_MultiselectValuevue_type_script_lang_js_ = (MultiselectValuevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/MultiselectValue.vue?vue&type=style&index=0&lang=stylus&
var MultiselectValuevue_type_style_index_0_lang_stylus_ = __webpack_require__("0e91");

// CONCATENATED MODULE: ./src/MultiselectValue.vue






/* normalize component */

var MultiselectValue_component = normalizeComponent(
  src_MultiselectValuevue_type_script_lang_js_,
  MultiselectValuevue_type_template_id_97ba9004_render,
  MultiselectValuevue_type_template_id_97ba9004_staticRenderFns,
  false,
  null,
  null,
  null
  
)

MultiselectValue_component.options.__file = "MultiselectValue.vue"
/* harmony default export */ var MultiselectValue = (MultiselectValue_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Multiselect.vue?vue&type=script&lang=js&
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






/* harmony default export */ var Multiselectvue_type_script_lang_js_ = ({
  name: 'vue-multiselect',
  mixins: [multiselectCorePropsMixin],
  inheritAttrs: false,
  components: {
    MultiselectInput: MultiselectInput,
    MultiselectCore: MultiselectCore,
    MultiselectOptions: MultiselectOptions,
    MultiselectWrapper: MultiselectWrapper,
    MultiselectValue: MultiselectValue
  }
});
// CONCATENATED MODULE: ./src/Multiselect.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Multiselectvue_type_script_lang_js_ = (Multiselectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Multiselect.vue?vue&type=style&index=0&lang=css&
var Multiselectvue_type_style_index_0_lang_css_ = __webpack_require__("ba7a");

// CONCATENATED MODULE: ./src/Multiselect.vue






/* normalize component */

var Multiselect_component = normalizeComponent(
  src_Multiselectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

Multiselect_component.options.__file = "Multiselect.vue"
/* harmony default export */ var Multiselect = (Multiselect_component.exports);
// CONCATENATED MODULE: ./src/index.js






/* harmony default export */ var src = (Multiselect);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport MultiselectCore */__webpack_require__.d(__webpack_exports__, "MultiselectCore", function() { return MultiselectCore; });
/* concated harmony reexport MultiselectWrapper */__webpack_require__.d(__webpack_exports__, "MultiselectWrapper", function() { return MultiselectWrapper; });
/* concated harmony reexport MultiselectInput */__webpack_require__.d(__webpack_exports__, "MultiselectInput", function() { return MultiselectInput; });
/* concated harmony reexport MultiselectOptions */__webpack_require__.d(__webpack_exports__, "MultiselectOptions", function() { return MultiselectOptions; });
/* concated harmony reexport MultiselectValue */__webpack_require__.d(__webpack_exports__, "MultiselectValue", function() { return MultiselectValue; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ })

/******/ });
});
//# sourceMappingURL=vueMultiselect.umd.js.map