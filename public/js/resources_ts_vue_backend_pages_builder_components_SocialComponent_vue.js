"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_vue_backend_pages_builder_components_SocialComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SocialComponent.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SocialComponent.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_fontcolors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/fontcolors */ "./resources/ts/vue/backend/pages/builder/elements/fontcolors.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['social_value'],
  data: function data() {
    return {
      social: {},
      backgroundColors: _elements_fontcolors__WEBPACK_IMPORTED_MODULE_0__.fontColors
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      this.$emit('submitSocial', this.social);
    },
    changeBackgroundColor: function changeBackgroundColor(e) {
      var background = {
        backgroundColor: e.target.value
      };
      this.social = _objectSpread(_objectSpread({}, this.social), background);
    }
  },
  mounted: function mounted() {
    // if(this.link_value){
    //     this.link = this.link_value;
    // }
    // this.link.url=this.link_value.url;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SocialComponent.vue?vue&type=template&id=3d12f2bc":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SocialComponent.vue?vue&type=template&id=3d12f2bc ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "col-sm-12"
};
var _hoisted_2 = {
  "class": "card"
};
var _hoisted_3 = {
  "class": "card-body element-table"
};
var _hoisted_4 = {
  "class": "mb-3 input-group-square"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Email", -1 /* HOISTED */);
var _hoisted_6 = {
  "class": "input-group"
};
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "input-group-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-envelope"
})], -1 /* HOISTED */);
var _hoisted_8 = {
  "class": "mb-3 input-group-square"
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Facebook", -1 /* HOISTED */);
var _hoisted_10 = {
  "class": "input-group"
};
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "input-group-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-facebook"
})], -1 /* HOISTED */);
var _hoisted_12 = {
  "class": "mb-3 input-group-square"
};
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Telephone", -1 /* HOISTED */);
var _hoisted_14 = {
  "class": "input-group"
};
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "input-group-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-mobile"
})], -1 /* HOISTED */);
var _hoisted_16 = {
  "class": "mb-3 input-group-square"
};
var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Telegram", -1 /* HOISTED */);
var _hoisted_18 = {
  "class": "input-group"
};
var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "input-group-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-telegram"
})], -1 /* HOISTED */);
var _hoisted_20 = {
  "class": "mb-3 input-group-square"
};
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Whatsapp", -1 /* HOISTED */);
var _hoisted_22 = {
  "class": "input-group"
};
var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "input-group-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-whatsapp"
})], -1 /* HOISTED */);
var _hoisted_24 = {
  "class": "mb-3 input-group-square"
};
var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Instagram", -1 /* HOISTED */);
var _hoisted_26 = {
  "class": "input-group"
};
var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "input-group-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-instagram"
})], -1 /* HOISTED */);
var _hoisted_28 = {
  "class": "mb-3 input-group-square"
};
var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Twitter", -1 /* HOISTED */);
var _hoisted_30 = {
  "class": "input-group"
};
var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "input-group-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-twitter"
})], -1 /* HOISTED */);
var _hoisted_32 = {
  "class": "mb-3 input-group-square"
};
var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "TikTok", -1 /* HOISTED */);
var _hoisted_34 = {
  "class": "input-group"
};
var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "input-group-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-tiktok"
})], -1 /* HOISTED */);
var _hoisted_36 = {
  "class": "mb-3 input-group-square"
};
var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "YouTube", -1 /* HOISTED */);
var _hoisted_38 = {
  "class": "input-group"
};
var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "input-group-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-youtube"
})], -1 /* HOISTED */);
var _hoisted_40 = {
  "class": "mb-3 input-group-square"
};
var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "SoundCloud", -1 /* HOISTED */);
var _hoisted_42 = {
  "class": "input-group"
};
var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "input-group-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-soundcloud"
})], -1 /* HOISTED */);
var _hoisted_44 = {
  "class": "mb-3 input-group-square"
};
var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "LinkedIn", -1 /* HOISTED */);
var _hoisted_46 = {
  "class": "input-group"
};
var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "input-group-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-linkedin"
})], -1 /* HOISTED */);
var _hoisted_48 = {
  "class": "mb-3 input-group-square"
};
var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Spotify", -1 /* HOISTED */);
var _hoisted_50 = {
  "class": "input-group"
};
var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "input-group-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-spotify"
})], -1 /* HOISTED */);
var _hoisted_52 = {
  "class": "mb-3 input-group-square"
};
var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Snapchat", -1 /* HOISTED */);
var _hoisted_54 = {
  "class": "input-group"
};
var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "input-group-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-snapchat"
})], -1 /* HOISTED */);
var _hoisted_56 = {
  "class": "mb-3 input-group-square"
};
var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Twitch", -1 /* HOISTED */);
var _hoisted_58 = {
  "class": "input-group"
};
var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "input-group-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-twitch"
})], -1 /* HOISTED */);
var _hoisted_60 = {
  "class": "mb-3 input-group-square"
};
var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Discord", -1 /* HOISTED */);
var _hoisted_62 = {
  "class": "input-group"
};
var _hoisted_63 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "input-group-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fab fa-discord"
})], -1 /* HOISTED */);
var _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mt-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-pill btn-primary btn-air-primary",
  type: "submit"
}, "Submit")], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"card-header pb-0\">\r\n                        <h5>Default Form Layout</h5><span>Using the <a href=\"#\">card</a> component, you can extend the default collapse behavior to create an accordion.</span>\r\n                      </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"mb-1\">\r\n                            <label class=\"col-form-label pt-0\" for=\"exampleInputPassword1\">Choose Background</label>\r\n                                  <select class=\"form-select digits\" id=\"exampleFormControlSelect9\" @change=\"changeBackgroundColor\" v-model=\"selectedBackground\">\r\n                                    <option :key=\"color.id\" v-for=\"color in backgroundColors\" :value=\"color.primary\" >{{ color.name }}</option>\r\n                                 </select>\r\n                        </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "theme-form",
    onSubmit: _cache[15] || (_cache[15] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.onSubmit && $options.onSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "email",
    "class": "form-control input-group-air",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.social.email = $event;
    }),
    id: "exampleFormControlTextarea4",
    placeholder: "Email"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.social.email]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "url",
    "class": "form-control input-group-air",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.social.facebook = $event;
    }),
    id: "exampleFormControlTextarea4",
    placeholder: "Facebook"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.social.facebook]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "tel",
    "class": "form-control input-group-air",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.social.telephone = $event;
    }),
    id: "exampleFormControlTextarea4",
    placeholder: "Telephone"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.social.telephone]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "tel",
    "class": "form-control input-group-air",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.social.telegram = $event;
    }),
    id: "exampleFormControlTextarea4",
    placeholder: "Telegram"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.social.telegram]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "tel",
    "class": "form-control input-group-air",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.social.whatsapp = $event;
    }),
    id: "exampleFormControlTextarea4",
    placeholder: "Whatsapp"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.social.whatsapp]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"mb-3 input-group-square\">\r\n                            <label class=\"form-label\">Facebook Page</label>\r\n                                <div class=\"input-group\">\r\n                                    <span class=\"input-group-text\">\r\n                                    <i class=\"fa fa-facebook-square\"></i>\r\n                                    </span>\r\n                                    <input type=\"url\" class=\"form-control input-group-air\" v-model=\"social.facebook_page\" id=\"exampleFormControlTextarea4\" placeholder=\"Facebook Page\" />\r\n                                </div>\r\n                          </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "url",
    "class": "form-control input-group-air",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.social.instagram = $event;
    }),
    id: "exampleFormControlTextarea4",
    placeholder: "Instagram"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.social.instagram]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [_hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "url",
    "class": "form-control input-group-air",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.social.twitter = $event;
    }),
    id: "exampleFormControlTextarea4",
    placeholder: "Twitter"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.social.twitter]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "url",
    "class": "form-control input-group-air",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.social.tiktok = $event;
    }),
    id: "exampleFormControlTextarea4",
    placeholder: "Tiktok"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.social.tiktok]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [_hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [_hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "url",
    "class": "form-control input-group-air",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $data.social.youtube = $event;
    }),
    id: "exampleFormControlTextarea4",
    placeholder: "Youtube"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.social.youtube]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [_hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "url",
    "class": "form-control input-group-air",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.social.soundcloud = $event;
    }),
    id: "exampleFormControlTextarea4",
    placeholder: "Soundcloud"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.social.soundcloud]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [_hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [_hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "url",
    "class": "form-control input-group-air",
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $data.social.linkedin = $event;
    }),
    id: "exampleFormControlTextarea4",
    placeholder: "Linkedin"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.social.linkedin]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [_hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [_hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "url",
    "class": "form-control input-group-air",
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $data.social.spotify = $event;
    }),
    id: "exampleFormControlTextarea4",
    placeholder: "Spotify"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.social.spotify]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"mb-3 input-group-square\">\r\n                            <label class=\"form-label\">Pinterest</label>\r\n                                <div class=\"input-group\">\r\n                                    <span class=\"input-group-text\">\r\n                                    <i class=\"fa fa-pinterest\"></i>\r\n                                    </span>\r\n                                    <input  type=\"url\" class=\"form-control input-group-air\" v-model=\"social.pinterest\" id=\"exampleFormControlTextarea4\" placeholder=\"Pinterest\" />\r\n                                </div>\r\n                          </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [_hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [_hoisted_55, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "url",
    "class": "form-control input-group-air",
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $data.social.snapchat = $event;
    }),
    id: "exampleFormControlTextarea4",
    placeholder: "Snapchat"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.social.snapchat]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [_hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [_hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "url",
    "class": "form-control input-group-air",
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $data.social.twitch = $event;
    }),
    id: "exampleFormControlTextarea4",
    placeholder: "Twitch"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.social.twitch]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [_hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [_hoisted_63, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "url",
    "class": "form-control input-group-air",
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return $data.social.discord = $event;
    }),
    id: "exampleFormControlTextarea4",
    placeholder: "Discord"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.social.discord]])])]), _hoisted_64], 32 /* HYDRATE_EVENTS */)])])])]);
}

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/elements/fontcolors.js":
/*!***********************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/elements/fontcolors.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fontColors": () => (/* binding */ fontColors)
/* harmony export */ });
var fontColors = [{
  name: "White",
  primary: "#FFFFFF"
}, {
  name: "Black",
  primary: "#000000"
}, {
  name: "Red",
  primary: "#FF0000"
}, {
  name: "Cyan",
  primary: "#00FFFF"
}, {
  name: "Blue",
  primary: "#0000FF"
}, {
  name: "DarkBlue",
  primary: "#00008B"
}, {
  name: "LightBlue",
  primary: "#1e2f65"
}, {
  name: "Purple",
  primary: "#8360c3"
}, {
  name: "Yellow",
  primary: "#8e2de2"
}, {
  name: "Silver",
  primary: "#C0C0C0"
}, {
  name: "Grey",
  primary: "#808080"
}, {
  name: "Orange",
  primary: "#FFA500"
}, {
  name: "Brown",
  primary: "#A52A2A"
}, {
  name: "Maroon",
  primary: "#800000 "
}, {
  name: "Green",
  primary: "#008000 "
}, {
  name: "Olive",
  primary: "#808000"
}, {
  name: "Aquamarine",
  primary: "#7FFD4"
}];

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/SocialComponent.vue":
/*!*******************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/SocialComponent.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SocialComponent_vue_vue_type_template_id_3d12f2bc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SocialComponent.vue?vue&type=template&id=3d12f2bc */ "./resources/ts/vue/backend/pages/builder/components/SocialComponent.vue?vue&type=template&id=3d12f2bc");
/* harmony import */ var _SocialComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocialComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/components/SocialComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SocialComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SocialComponent_vue_vue_type_template_id_3d12f2bc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/builder/components/SocialComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/SocialComponent.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/SocialComponent.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SocialComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SocialComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SocialComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SocialComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/SocialComponent.vue?vue&type=template&id=3d12f2bc":
/*!*************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/SocialComponent.vue?vue&type=template&id=3d12f2bc ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SocialComponent_vue_vue_type_template_id_3d12f2bc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SocialComponent_vue_vue_type_template_id_3d12f2bc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SocialComponent.vue?vue&type=template&id=3d12f2bc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SocialComponent.vue?vue&type=template&id=3d12f2bc");


/***/ })

}]);