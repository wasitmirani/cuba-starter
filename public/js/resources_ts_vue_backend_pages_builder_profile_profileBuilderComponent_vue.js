(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_vue_backend_pages_builder_profile_profileBuilderComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/AccountViewComponent.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/AccountViewComponent.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: ['AccountViewComponent'],
  props: ['account'],
  data: function data() {
    return {
      host_url: window.location.origin
    };
  },
  methods: function methods() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/AvatarComponent.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/AvatarComponent.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ImageViewComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ImageViewComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/ImageViewComponent.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["avatar_value"],
  components: {
    ImageView: _components_ImageViewComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      avatar: {
        size: "100",
        border: 0
      },
      image: ""
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      this.avatar.image = this.image;
      this.$emit("submitAvatar", this.avatar);
    },
    onFileChange: function onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage: function createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;
      reader.onload = function (e) {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function removeImage(e) {
      this.image = "";
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/BrandingComponent.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/BrandingComponent.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: ['BrandingComponent'],
  props: ['branding']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/ColorBoxComponent.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/ColorBoxComponent.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ImageViewComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ImageViewComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/ImageViewComponent.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["color"],
  components: {
    ImageComponent: _components_ImageViewComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    getBackgroundColor: function getBackgroundColor(color) {
      this.$emit("changeColor", color);
    },
    getImage: function getImage(image) {
      this.$emit("changeImage", image);
    },
    mounted: function mounted() {
      console.log('COLOR HERE', this.color);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/DividerComponent.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/DividerComponent.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['divider_value'],
  data: function data() {
    return {
      divider_value: {}
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      this.$emit('submitDivider', this.divider_value);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/DividerViewComponent.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/DividerViewComponent.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['divider']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/HTMLComponent.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/HTMLComponent.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['html_value'],
  data: function data() {
    return {
      html_value: {}
    };
  },
  computed: {
    validation: function validation() {
      if (this.html_value.value) return this.html_value.value.length > 300 ? true : '';
    }
  },
  methods: {
    onSubmit: function onSubmit() {
      if (!this.validation) this.$emit('submitHtml', this.html_value);
    }
  },
  mounted: function mounted() {
    console.log(' i am mounted');
    // if(this.link_value){
    //     this.link = this.link_value;
    // }
    // this.link.url=this.link_value.url;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/HTMLViewComponent.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/HTMLViewComponent.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['html']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/HeadingComponent.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/HeadingComponent.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['heading_value'],
  data: function data() {
    return {
      heading_value: {}
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      this.$emit('submitText', this.heading_value);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/ImageComponent.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/ImageComponent.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ImageViewComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ImageViewComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/ImageViewComponent.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["image_value", "show_name"],
  components: {
    ImageView: _components_ImageViewComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      image_value: {},
      image: ""
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      this.image_value.src = this.image;
      this.$emit("submitImage", this.image_value);
    },
    onFileChange: function onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage: function createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;
      reader.onload = function (e) {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function removeImage(e) {
      this.image = "";
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/ImageViewComponent.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/ImageViewComponent.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['image', 'round', 'style']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/LinkCompoent.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/LinkCompoent.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['link_value'],
  data: function data() {
    return {
      link: {},
      edit_mode: false
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      this.$emit('submitLink', this.link);
    },
    resetForm: function resetForm() {
      this.link = {};
      this.edit_mode = false;
    }
  },
  watch: {
    link_value: function link_value(collection) {
      if (collection == null) {
        return this.resetForm();
      }
      if (collection) {
        this.link = collection;
        this.link.url = collection.value;
        this.edit_mode = true;
        console.log('test', collection);
      } else {
        this.resetForm();
      }
    }
  },
  mounted: function mounted() {
    if (this.link_value.index) {
      this.link = this.link_value;
      this.link.url = this.link_value.value;
      this.edit_mode = true;
    } else {
      this.resetForm();
    }

    // this.link.url=this.link_value.url;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/LocationComponent.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/LocationComponent.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['location'],
  data: function data() {
    return {
      location: {},
      errors: {}
    };
  },
  methods: {
    getLocation: function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        this.errors.message = "Geolocation is not supported by this browser.";
      }
    },
    showPosition: function showPosition(position) {
      this.location.lat = position.coords.latitude;
      this.location.lng = position.coords.longitude;
    },
    onSubmit: function onSubmit() {
      this.$emit('submitLocation', this.location);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/LocationViewComponent.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/LocationViewComponent.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['location', 'color'],
  data: function data() {
    return {
      value: ''
    };
  },
  mounted: function mounted() {
    this.value = this.location.value ? this.location.value : "".concat(this.location.lat, ",").concat(this.value = this.location.lng);
    console.log('this is location', this.location);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/MailComponent.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/MailComponent.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['mail'],
  data: function data() {
    return {
      mail: {}
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      this.$emit('submitMail', this.mail);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/PaypalComponent.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/PaypalComponent.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['paypal'],
  data: function data() {
    return {
      paypal: {}
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      this.$emit('submitPaypal', this.paypal);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/PaypalViewComponent.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/PaypalViewComponent.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['paypal'],
  data: function data() {
    return {
      width: "250",
      height: "150"
    };
  },
  mounted: function mounted() {
    console.log('paypa', this.paypal);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/PhoneComponent.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/PhoneComponent.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['phone'],
  data: function data() {
    return {
      phone: {}
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      this.$emit('submitPhone', this.phone);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/QuestionComponent.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/QuestionComponent.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['question_value'],
  data: function data() {
    return {
      question_value: {}
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      this.$emit('submitQuestion', this.question_value);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/QuoteComponent.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/QuoteComponent.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['quote_value'],
  data: function data() {
    return {
      quote: {}
    };
  },
  computed: {
    validation: function validation() {
      if (this.quote.text) return this.quote.text.length > 100 ? true : '';
    }
  },
  methods: {
    onSubmit: function onSubmit() {
      if (!this.validation) this.$emit('submitQuote', this.quote);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/QuoteViewComponent.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/QuoteViewComponent.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['quote']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SocialComponent.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SocialComponent.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SocialViewComponent.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SocialViewComponent.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['social', 'color']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SoundcloudComponent.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SoundcloudComponent.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['soundcloud'],
  data: function data() {
    return {
      soundcloud: {}
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      this.$emit('submitSoundcloud', this.soundcloud);
      console.log('ss', this.soundcloud);
    },
    setValue: function setValue(e) {
      var currentValue = e.target.value;
      var finalValue = currentValue.replace('https://soundcloud.com/', '');
      this.soundcloud.value = finalValue;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SoundcloudViewComponent.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SoundcloudViewComponent.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['soundcloud'],
  data: function data() {
    return {
      width: "250",
      height: "150"
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SpotifyComponent.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SpotifyComponent.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['spotify_value'],
  computed: {
    validation: function validation() {
      if (this.spotify.name) return this.spotify.name.length > 15 ? true : '';
    }
  },
  data: function data() {
    return {
      spotify: {}
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      this.$emit('submitSpotify', this.spotify);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SpotifyViewComponent.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SpotifyViewComponent.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['spotify'],
  mounted: function mounted() {
    console.log('this is location', this.spotify);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/TextComponent.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/TextComponent.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['link_value'],
  data: function data() {
    return {
      paragraph: {}
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      this.$emit('submitText', this.paragraph);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/VideoComponent.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/VideoComponent.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      video: {}
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      this.$emit('submitVideo', this.video);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/YoutubeComponent.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/YoutubeComponent.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['youtube'],
  data: function data() {
    return {
      youtube: {}
    };
  },
  computed: {
    youtube_embedded_value: function youtube_embedded_value() {
      var params = new URL(this.youtube.link).searchParams;
      params.get('v');
      return params.get('v');
    }
  },
  methods: {
    onSubmit: function onSubmit() {
      this.youtube.link = 'https://www.youtube.com/embed/' + this.youtube_embedded_value;
      this.$emit('submitYoutube', this.youtube);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/YoutubeViewComponent.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/YoutubeViewComponent.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['youtube', 'link_style'],
  data: function data() {
    return {
      width: "100%",
      height: "150"
    };
  },
  created: function created() {
    if (this.link_style) {
      this.width = this.link_style.width;
      this.height = this.link_style.height;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/AppearanceComponent.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/AppearanceComponent.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ColorBoxComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ColorBoxComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/ColorBoxComponent.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['bg_colors', 'font_colors', 'fonts', 'appearance', 'user'],
  components: {
    ColorBox: _components_ColorBoxComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      background_types: ['Select Color', 'Solid', 'Animated', 'Gradient', 'Image'],
      selectedBackgroundType: 'Select Color',
      selectedFontColor: '#FFFFFF',
      selectedFont: "'Karla', sans-serif",
      colors: {},
      background_color: {
        primary: "#d4fc79",
        secondary: "#96e6a1"
      },
      active_card: '',
      host_url: window.location.origin
    };
  },
  created: function created() {
    this.loadAppearance();
  },
  methods: {
    uploadImage: function uploadImage(e) {
      var formData = new FormData();
      formData.append("thumbnail", e.target.files[0]);
      formData.append("id", this.user.id);
      this.onSubmit(formData);
    },
    onSubmit: function onSubmit(data) {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios.post('/user-image-update', data).then(function (res) {
                _this.user.thumbnail = res.data.thumbnail;
                _this.$root.alertNotify(res.status, 'Updated Successfuly', 'success', res.data);
              })["catch"](function (err) {
                _this.errors = err.response.data;
                _this.$root.alertNotify(err.response.status, null, 'error', err.response.data);
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    loadAppearance: function loadAppearance() {
      if (this.appearance) {
        this.background_color = this.appearance.background_color;
        this.selectedBackgroundType = this.appearance.background_color.type ? this.appearance.background_color.type.charAt(0).toUpperCase() + this.appearance.background_color.type.slice(1) : "";
        this.changeColorType();
        this.active_card = this.appearance.background_color.type;
        this.selectedFontColor = this.appearance.style.font_color;
        this.selectedFont = this.appearance.style.font;
        this.font_style = this.appearance.style.font_style;
      }
    },
    changeColor: function changeColor(color) {
      this.background_color = color;
      console.log(this.background_color);
      this.active_card = this.background_color.type;
      this.$emit('changeColor', color);
    },
    changeAnimatedBackground: function changeAnimatedBackground(color) {
      this.background_color = color.primary;
      this.$emit('changeAnimatedBackground', color);
    },
    changeButtonStyle: function changeButtonStyle(e) {
      var element = e.target.value;
      console.log('button style', element);
      if (element == 'both') {
        this.$emit('changeButtonStyle', '6');
      } else if (element == 'circle') {
        this.$emit('changeButtonStyle', '30');
      } else if (element == 'square') {
        this.$emit('changeButtonStyle', '0');
      }
    },
    changeFontColor: function changeFontColor(e) {
      this.font_color = e.target.value;
      this.$emit('changeFontColor', e.target.value);
    },
    changeFont: function changeFont(e) {
      this.font_color = e.target.value;
      this.$emit('changeFont', e.target.value);
    },
    changeFontStyle: function changeFontStyle(value) {
      console.log('Chagnes', value);
      switch (value) {
        case 'Bold':
          this.font_style = 'bold';
          return this.$emit('changeFontStyle', this.font_style);
          break;
        case 'Italic':
          this.font_style = 'italic';
          return this.$emit('changeFontStyle', this.font_style);
          break;
        case 'Underline':
          this.font_style = 'underline';
          return this.$emit('changeFontStyle', this.font_style);
          break;
        default:
          this.font_style = {
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none'
          };
          return this.$emit('changeFontStyle', this.font_style);
          break;
      }
    },
    changeColorType: function changeColorType() {
      //   this.selectedBackgroundType = event.srcElement.value;

      switch (this.selectedBackgroundType) {
        case 'Gradient':
          this.colors = this.bg_colors.filter(function (color) {
            return color.type == 'gradient';
          });
          break;
        case 'Solid':
          this.colors = this.bg_colors.filter(function (color) {
            return color.type == 'solid';
          });
          break;
        case 'Animated':
          this.colors = this.bg_colors.filter(function (color) {
            return color.type == 'animated';
          });
          break;
        case 'Image':
          this.colors = this.bg_colors.filter(function (color) {
            return color.type == 'image';
          });
          break;
        default:
          this.colors = [];
          break;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/BuilderContentComponent.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/BuilderContentComponent.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_DividerViewComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/DividerViewComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/DividerViewComponent.vue");
/* harmony import */ var _components_SocialViewComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SocialViewComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/SocialViewComponent.vue");
/* harmony import */ var _components_ImageViewComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ImageViewComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/ImageViewComponent.vue");
/* harmony import */ var _components_HTMLViewComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HTMLViewComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/HTMLViewComponent.vue");
/* harmony import */ var _components_LocationViewComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LocationViewComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/LocationViewComponent.vue");
/* harmony import */ var _components_SpotifyViewComponent_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SpotifyViewComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/SpotifyViewComponent.vue");
/* harmony import */ var _components_YoutubeViewComponent_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/YoutubeViewComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/YoutubeViewComponent.vue");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_7__);









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['items'],
  components: {
    DividerView: _components_DividerViewComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_7___default()),
    SocialView: _components_SocialViewComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ImageView: _components_ImageViewComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    QuoteView: _components_ImageViewComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    HtmlView: _components_HTMLViewComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    LocationView: _components_LocationViewComponent_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    SpotifyView: _components_SpotifyViewComponent_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    YoutubeView: _components_YoutubeViewComponent_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      drag: true,
      dragPreview: null,
      items: [],
      x: 0,
      y: 0
    };
  },
  methods: {
    storeItems: function storeItems() {
      localStorage.setItem('block_items', JSON.stringify(this.items));
    },
    editElement: function editElement(item) {
      //  this.items.indexOf(item);
      //  console.log(this.items.indexOf(item))
      this.$emit('edit-element', item);
    },
    dragStartHandler: function dragStartHandler(e) {
      this.dragPreview = e.target.cloneNode(true);
      this.$refs["dragPreview"].appendChild(this.dragPreview);
      e.dataTransfer.setDragImage(new Image(), 0, 0);
    },
    dragEndHandler: function dragEndHandler() {
      this.dragPreview.remove();
      this.dragPreview = null;
      this.$emit("setItems", this.items);
      this.storeItems();
    },
    deleteElement: function deleteElement(element) {
      this.items.splice(this.items.indexOf(element), 1);
      this.$emit("setItems", this.items);
      this.storeItems();
    },
    dragHandler: function dragHandler(e) {
      this.x = e.pageX;
      this.y = e.pageY;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/PhoneElementsComponent.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/PhoneElementsComponent.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_DividerViewComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/DividerViewComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/DividerViewComponent.vue");
/* harmony import */ var _components_SocialViewComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SocialViewComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/SocialViewComponent.vue");
/* harmony import */ var _components_ImageViewComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ImageViewComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/ImageViewComponent.vue");
/* harmony import */ var _components_QuoteViewComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/QuoteViewComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/QuoteViewComponent.vue");
/* harmony import */ var _components_HTMLViewComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HTMLViewComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/HTMLViewComponent.vue");
/* harmony import */ var _components_LocationViewComponent_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LocationViewComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/LocationViewComponent.vue");
/* harmony import */ var _components_SpotifyViewComponent_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SpotifyViewComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/SpotifyViewComponent.vue");
/* harmony import */ var _components_YoutubeViewComponent_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/YoutubeViewComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/YoutubeViewComponent.vue");
/* harmony import */ var _components_BrandingComponent_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/BrandingComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/BrandingComponent.vue");
/* harmony import */ var _components_AccountViewComponent_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/AccountViewComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/AccountViewComponent.vue");
/* harmony import */ var _components_PaypalViewComponent_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/PaypalViewComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/PaypalViewComponent.vue");
/* harmony import */ var _components_SoundcloudViewComponent_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/SoundcloudViewComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/SoundcloudViewComponent.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }












/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DividerView: _components_DividerViewComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    SocialView: _components_SocialViewComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ImageView: _components_ImageViewComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    QuoteView: _components_QuoteViewComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    HtmlView: _components_HTMLViewComponent_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    LocationView: _components_LocationViewComponent_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    SpotifyView: _components_SpotifyViewComponent_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    YoutubeView: _components_YoutubeViewComponent_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    BrandingComponent: _components_BrandingComponent_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    PaypalView: _components_PaypalViewComponent_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    SoundcloudView: _components_SoundcloudViewComponent_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    AccountComponent: _components_AccountViewComponent_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  props: ['items', 'appearance', 'branding'],
  setup: function setup(props, context) {
    console.log(props.appearance);
  },
  data: function data() {
    return {
      styles: {},
      items: [],
      appearance: [],
      branding: [],
      user: this.$auth_user
    };
  },
  computed: {
    returnStyle: function returnStyle() {
      if (this.appearance.style) {
        var style = this.appearance.style;
        var font_style = this.setFontStyle(style.font_style);
        var style_ = {
          color: style.font_color,
          fontFamily: style.font
        };
        return _objectSpread(_objectSpread({}, style_), font_style);
      }
    },
    appearanceStyle: function appearanceStyle() {
      console.log(this.appearance.style);
      this.loadAppearance();
    }
  },
  watch: {
    // appearance(){
    //   if(this.appearance.style){
    //     let style = this.appearance.style;
    //     return this.styles=  { color: style.font_color, fontFamily: style.font, fontWeight: style.font_style, textDecoration: style.font_style, fontStyle: style.font_style};
    //   }
    // }
  },
  methods: {
    setFontStyle: function setFontStyle(font) {
      switch (font) {
        case 'italic':
          return {
            fontStyle: font,
            fontWeight: 'normal',
            textDecoration: 'none'
          };
          break;
        case 'bold':
          return {
            fontWeight: font,
            fontStyle: 'normal',
            textDecoration: 'none'
          };
          break;
        case 'underline':
          return {
            textDecoration: font,
            fontStyle: 'normal',
            fontWeight: 'normal'
          };
          break;
        case 'normal':
          return {
            fontStyle: font,
            textDecoration: 'none',
            fontWeight: font
          };
          break;
        default:
          return {
            fontStyle: 'normal',
            textDecoration: 'none',
            fontWeight: 'normal'
          };
          break;
      }
    },
    loadAppearance: function loadAppearance() {
      if (this.appearance.style) {
        this.styles = {};
        var style = this.appearance.style;
        this.styles = {
          color: style.font_color,
          fontFamily: style.font,
          fontWeight: style.font_style,
          textDecoration: style.font_style,
          fontStyle: style.font_style
        };
      }
    }
  },
  mounted: function mounted() {
    this.loadAppearance();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/SettingsComponent.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/SettingsComponent.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {};
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/ThemesComponent.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/ThemesComponent.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_fonts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/fonts */ "./resources/ts/vue/backend/pages/builder/elements/fonts.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['branding'],
  computed: {
    validateFontSize: function validateFontSize() {
      // if(this.branding.fontSize){
      //         if( this.branding.fontSize> 8 && this.branding.fontSize < 31) {
      //   return false;
      // } else {
      // //   this.branding.fontSize="";
      //   return true;
      // }
      // }
    },
    saveBranding: function saveBranding() {
      if (!this.validateFontSize) localStorage.setItem('branding', JSON.stringify(this.branding));
    }
  },
  data: function data() {
    return {
      fonts: _elements_fonts__WEBPACK_IMPORTED_MODULE_0__.fonts,
      selectedFont: ''
    };
  },
  created: function created() {
    this.loadBranding();
  },
  methods: {
    setSensitive: function setSensitive(e) {
      console.log('ee', e.target.checked);
      this.branding.sensitive_content = e.target.checked;
    },
    loadBranding: function loadBranding() {
      if (this.branding.fontFamily) {
        this.selectedFont = this.branding.fontFamily;
      }
    },
    changeFont: function changeFont(e) {
      this.branding.fontFamily = e.target.value;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/profileBuilderComponent.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/profileBuilderComponent.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_LinkCompoent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/LinkCompoent.vue */ "./resources/ts/vue/backend/pages/builder/components/LinkCompoent.vue");
/* harmony import */ var _components_TextComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TextComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/TextComponent.vue");
/* harmony import */ var _components_HeadingComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HeadingComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/HeadingComponent.vue");
/* harmony import */ var _components_ImageComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ImageComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/ImageComponent.vue");
/* harmony import */ var _components_AvatarComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AvatarComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/AvatarComponent.vue");
/* harmony import */ var _components_SocialComponent_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SocialComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/SocialComponent.vue");
/* harmony import */ var _components_VideoComponent_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/VideoComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/VideoComponent.vue");
/* harmony import */ var _components_DividerComponent_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/DividerComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/DividerComponent.vue");
/* harmony import */ var _elements_elements_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../elements/elements.js */ "./resources/ts/vue/backend/pages/builder/elements/elements.js");
/* harmony import */ var _elements_bgcolors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../elements/bgcolors */ "./resources/ts/vue/backend/pages/builder/elements/bgcolors.js");
/* harmony import */ var _elements_fontcolors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../elements/fontcolors */ "./resources/ts/vue/backend/pages/builder/elements/fontcolors.js");
/* harmony import */ var _elements_fonts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../elements/fonts */ "./resources/ts/vue/backend/pages/builder/elements/fonts.js");
/* harmony import */ var _components_QuoteComponent_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/QuoteComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/QuoteComponent.vue");
/* harmony import */ var _components_HTMLComponent_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/HTMLComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/HTMLComponent.vue");
/* harmony import */ var _components_LocationComponent_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/LocationComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/LocationComponent.vue");
/* harmony import */ var _components_SpotifyComponent_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/SpotifyComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/SpotifyComponent.vue");
/* harmony import */ var _components_QuestionComponent_vue__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/QuestionComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/QuestionComponent.vue");
/* harmony import */ var _components_YoutubeComponent_vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/YoutubeComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/YoutubeComponent.vue");
/* harmony import */ var _components_MailComponent_vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/MailComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/MailComponent.vue");
/* harmony import */ var _components_PhoneComponent_vue__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/PhoneComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/PhoneComponent.vue");
/* harmony import */ var _components_PaypalComponent_vue__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/PaypalComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/PaypalComponent.vue");
/* harmony import */ var _components_SoundcloudComponent_vue__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/SoundcloudComponent.vue */ "./resources/ts/vue/backend/pages/builder/components/SoundcloudComponent.vue");
/* harmony import */ var _PhoneElementsComponent_vue__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./PhoneElementsComponent.vue */ "./resources/ts/vue/backend/pages/builder/profile/PhoneElementsComponent.vue");
/* harmony import */ var _BuilderContentComponent_vue__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./BuilderContentComponent.vue */ "./resources/ts/vue/backend/pages/builder/profile/BuilderContentComponent.vue");
/* harmony import */ var _ThemesComponent_vue__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ThemesComponent.vue */ "./resources/ts/vue/backend/pages/builder/profile/ThemesComponent.vue");
/* harmony import */ var _SettingsComponent_vue__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./SettingsComponent.vue */ "./resources/ts/vue/backend/pages/builder/profile/SettingsComponent.vue");
/* harmony import */ var _AppearanceComponent_vue__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./AppearanceComponent.vue */ "./resources/ts/vue/backend/pages/builder/profile/AppearanceComponent.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
var _methods;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



























var __default__ = {
  components: {
    Quote: _components_QuoteComponent_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    Themes: _ThemesComponent_vue__WEBPACK_IMPORTED_MODULE_24__["default"],
    Appearance: _AppearanceComponent_vue__WEBPACK_IMPORTED_MODULE_26__["default"],
    VideoComponent: _components_VideoComponent_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    LinkComponent: _components_LinkCompoent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    TextComponent: _components_TextComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    HeadingComponent: _components_HeadingComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ImageComponent: _components_ImageComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    SocialComponent: _components_SocialComponent_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    AvatarComponent: _components_AvatarComponent_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    DividerComponent: _components_DividerComponent_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    PhoneComponent: _components_PhoneComponent_vue__WEBPACK_IMPORTED_MODULE_19__["default"],
    PhoneElementsComponent: _PhoneElementsComponent_vue__WEBPACK_IMPORTED_MODULE_22__["default"],
    HtmlComponent: _components_HTMLComponent_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
    LocationComponent: _components_LocationComponent_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
    SpotifyComponent: _components_SpotifyComponent_vue__WEBPACK_IMPORTED_MODULE_15__["default"],
    QuestionComponent: _components_QuestionComponent_vue__WEBPACK_IMPORTED_MODULE_16__["default"],
    YoutubeComponent: _components_YoutubeComponent_vue__WEBPACK_IMPORTED_MODULE_17__["default"],
    MailComponent: _components_MailComponent_vue__WEBPACK_IMPORTED_MODULE_18__["default"],
    PaypalComponent: _components_PaypalComponent_vue__WEBPACK_IMPORTED_MODULE_20__["default"],
    Settings: _SettingsComponent_vue__WEBPACK_IMPORTED_MODULE_25__["default"],
    SoundcloudComponent: _components_SoundcloudComponent_vue__WEBPACK_IMPORTED_MODULE_21__["default"]
  },
  data: function data() {
    return {
      current_blocks: [],
      element: [],
      elementsItems: _elements_elements_js__WEBPACK_IMPORTED_MODULE_8__.elementsItems,
      elements: _elements_elements_js__WEBPACK_IMPORTED_MODULE_8__.elementsItems,
      elementClicked: false,
      colors: {},
      bg_colors: _elements_bgcolors__WEBPACK_IMPORTED_MODULE_9__.bgColors,
      font_colors: _elements_fontcolors__WEBPACK_IMPORTED_MODULE_10__.fontColors,
      fonts: _elements_fonts__WEBPACK_IMPORTED_MODULE_11__.fonts,
      loading: false,
      edit_mode: false,
      branding: {
        name: 'PixelLink',
        url: 'https://pixeliconic.com',
        color: '#e1e1e1',
        active: true,
        fontFamily: '"Roboto", sans-serif',
        fontSize: '14',
        sensitive_content: 0
      },
      elementClickedType: '',
      colorFromScript: "red",
      background_color: {},
      current_element: {},
      slug: "",
      appearance: {
        style: {
          font: '"Roboto", sans-serif',
          font_color: "#FFFFFF",
          font_style: 'normal',
          button_style: '6'
        },
        background_color: {
          primary: "#8e2de2",
          secondary: "#4a00e0"
        }
      },
      query: "",
      items: {},
      user: {}
    };
  },
  computed: {
    dragStyle: function dragStyle() {
      return {
        top: "".concat(this.y, "px"),
        left: "".concat(this.x, "px")
      };
    }
  },
  methods: (_methods = {
    searchQuery: _.debounce(function () {
      var _this = this;
      this.elements = this.elementsItems;
      this.loading = true;
      setTimeout(function () {
        _this.search();
      }, 700);
    }, 500 // 500 milliseconds
    ),
    onSubmit: function onSubmit() {
      var _this2 = this;
      var data = new FormData();
      data.append('branding', JSON.stringify(this.branding));
      data.append('appearance', JSON.stringify(this.appearance));
      data.append('items', JSON.stringify(this.current_blocks));
      data.append('slug', this.slug);
      axios.post('/short-link/update', data).then(function (res) {
        _this2.current_blocks = [];
        _this2.branding = [];
        _this2.appearance = [];
        localStorage.removeItem("block_items");
        localStorage.removeItem("branding");
        localStorage.removeItem("appearance");
        _this2.$notify({
          title: 'Your short link has been saved',
          text: res.data.message,
          type: 'success'
        });
        _this2.$router.push({
          name: 'Links'
        });
      });
    },
    search: function search() {
      var _this3 = this;
      if (this.query.length < 1) this.elements = this.elementsItems;
      var data = this.elements.filter(function (element) {
        return element.element_type.includes(_this3.query);
      });
      if (data.length > 0) {
        this.elements = data;
        this.loading = false;
      } else {
        this.loading = false;
        this.elements = [];
      }
    },
    editElement: function editElement(item) {
      var index = this.current_blocks.indexOf(item);
      this.current_element = _objectSpread({
        index: index
      }, item);
      this.elementClickedType = item.element_type;
      this.elementClicked = true;
      $("#modal-example").modal("show");
      // console.log('index',this.current_blocks.indexOf(item));
    },
    resetModal: function resetModal() {
      this.current_element = {};
      this.elementClickedType = "";
      this.elementClicked = false;
    },
    setBlockItems: function setBlockItems(items) {
      this.current_blocks = items;
    },
    storeAppearance: function storeAppearance() {
      localStorage.setItem('appearance', JSON.stringify(this.appearance));
    },
    storeItems: function storeItems() {
      localStorage.setItem('block_items', JSON.stringify(this.current_blocks));
      this.storeAppearance();
    },
    changeAnimated: function changeAnimated(color) {
      this.background_color = color;
    },
    getHTML: function getHTML(data) {
      this.loading = true;
      var html = {
        name: 'Html',
        value: data.value,
        element_type: "html"
      };
      this.setItems(html);
    },
    getLocation: function getLocation(data) {
      this.loading = true;
      var location = {
        name: 'Location',
        value: data.address,
        lat: data.lat,
        lng: data.lng,
        element_type: "location"
      };
      this.setItems(location);
    },
    getPhone: function getPhone(data) {
      this.loading = true;
      var phone = {
        name: 'Phone',
        value: data.value,
        element_type: "phone"
      };
      this.setItems(phone);
    },
    getSpotify: function getSpotify(data) {
      this.loading = true;
      var spotify = {
        name: data.name,
        value: data.link,
        element_type: "spotify"
      };
      this.setItems(spotify);
    },
    getMail: function getMail(data) {
      console.log('mail', data);
      this.loading = true;
      var mail = {
        name: 'Mail',
        value: data.button_text,
        element_data: data,
        element_type: "mail"
      };
      this.setItems(mail);
    },
    getQuestion: function getQuestion(data) {
      this.loading = true;
      var question = {
        name: 'Question',
        value: data.value,
        element_type: "question"
      };
      this.setItems(question);
    },
    getYoutube: function getYoutube(data) {
      this.loading = true;
      var youtube = {
        name: 'Youtube',
        value: data.link,
        element_type: "youtube"
      };
      this.setItems(youtube);
    },
    getSocial: function getSocial(element) {
      this.loading = true;
      var social = {
        name: 'Social',
        value: element,
        element_type: "social"
      };
      //  console.log('social', social);
      this.setItems(social);
    },
    getPaypal: function getPaypal(data) {
      this.loading = true;
      console.log('data', data);
      var paypal = {
        name: 'Paypal',
        value: data.name,
        element_type: "paypal",
        element_data: data
      };
      this.setItems(paypal);
    },
    getDivider: function getDivider(element) {
      this.loading = true;
      var data = {
        name: 'Divider',
        value: element.value,
        element_type: "divider"
      };
      this.setItems(data);
    },
    getSoundcloud: function getSoundcloud(element) {
      this.loading = true;
      var data = {
        name: 'Soundcloud',
        value: element.value,
        element_type: "soundcloud"
      };
      this.setItems(data);
    },
    deleteElement: function deleteElement(element) {
      // this.loading=true;

      this.current_blocks.splice(this.current_blocks.indexOf(element), 1);
      localStorage.setItem('block_items', JSON.stringify(this.current_blocks));
      this.loading = false;
    },
    getQuote: function getQuote(quote_item) {
      this.loading = true;
      var quote = {
        name: '',
        value: quote_item.text,
        element_type: "quote"
      };
      this.setItems(quote);
    },
    getLink: function getLink(link_items) {
      this.loading = true;
      var link = {
        name: link_items.name,
        value: link_items.url,
        element_type: "link"
      };
      if (link_items.index) {
        this.updateItem(link, link_items.index);
      } else {
        this.setItems(link);
      }
      //    this.setItems(link);
    },
    updateItem: function updateItem(item, index) {
      this.current_blocks[index] = item;
      this.closeModal();
      console.log('index', this.current_blocks[index]);
      this.storeItems();
      this.elementClicked = false;
      this.loading = false;
    },
    setItems: function setItems(data) {
      var _this4 = this;
      this.closeModal();
      setTimeout(function () {
        _this4.items = _objectSpread(_objectSpread({}, _this4.items), {}, {
          data: data
        });
        _this4.current_blocks.push(data);
        _this4.storeItems();
        _this4.elementClicked = false;
        _this4.loading = false;
      }, 400);
    },
    getText: function getText(text_items) {
      var text = {
        name: text_items.name,
        value: text_items.text,
        element_type: "text"
      };
      this.setItems(text);
    }
  }, _defineProperty(_methods, "getQuestion", function getQuestion(text_items) {
    var text = {
      name: text_items.name,
      value: text_items.text,
      element_type: "question"
    };
    this.setItems(text);
  }), _defineProperty(_methods, "getVideoLink", function getVideoLink(video_items) {
    var video_link = {
      name: video_items.name,
      value: video_items.video_link,
      element_type: "video_link"
    };
    this.setItems(video_link);
  }), _defineProperty(_methods, "getHeading", function getHeading(text_items) {
    var heading = {
      name: text_items.name,
      value: text_items.text,
      element_type: "heading"
    };
    this.setItems(heading);
  }), _defineProperty(_methods, "getImage", function getImage(image_items) {
    var image = {
      name: image_items.text,
      value: image_items.src,
      element_type: "image"
    };
    this.setItems(image);
  }), _defineProperty(_methods, "getAvatar", function getAvatar(avatar_items) {
    var avatar = {
      name: avatar_items.text,
      value: avatar_items.image,
      element_type: "avatar",
      size: avatar_items.size,
      border: avatar_items.border
    };
    this.setItems(avatar);
  }), _defineProperty(_methods, "selectedElement", function selectedElement(element) {
    this.resetModal();
    this.elementClickedType = element;
    this.elementClicked = true;
  }), _defineProperty(_methods, "openModal", function openModal() {
    this.resetModal();
    $("#modal-example").modal("show");
  }), _defineProperty(_methods, "closeModal", function closeModal() {
    $("#modal-example").modal("hide");
  }), _defineProperty(_methods, "getRandomColors", function getRandomColors() {
    var color = _elements_bgcolors__WEBPACK_IMPORTED_MODULE_9__.bgColors[Math.floor(Math.random() * _elements_bgcolors__WEBPACK_IMPORTED_MODULE_9__.bgColors.length)];
    console.log("color", color);
    this.background_color = color;
  }), _defineProperty(_methods, "changeColor", function changeColor(color) {
    this.background_color = color;
    this.appearance.background_color = color;
    this.storeAppearance();
  }), _defineProperty(_methods, "changeFontColor", function changeFontColor(color) {
    this.appearance.style.font_color = color;
    this.storeAppearance();
  }), _defineProperty(_methods, "changeFont", function changeFont(font) {
    this.appearance.style.font = font;
    this.storeAppearance();
  }), _defineProperty(_methods, "changeFontStyle", function changeFontStyle(font_style) {
    this.appearance.style.font_style = font_style;
    this.storeAppearance();
  }), _defineProperty(_methods, "changeButtonStyle", function changeButtonStyle(button_style) {
    this.storeAppearance();
    return this.appearance.style.button_style = button_style;
  }), _defineProperty(_methods, "getBlockItems", function getBlockItems(slug) {
    var _this5 = this;
    this.slug = slug;
    axios.get('/short-link-profile?slug=' + slug).then(function (res) {
      if (res.data.items) {
        _this5.current_blocks = res.data.items;
      }
      if (res.data.appearance) {
        _this5.appearance = res.data.appearance;
      }
      if (res.data.branding) {
        _this5.branding = res.data.branding;
      }
    });
  }), _defineProperty(_methods, "loadProfileData", function loadProfileData() {
    var appearance_ = localStorage.getItem('appearance');
    var branding_ = localStorage.getItem('branding');
    console.log('appearance', appearance_);
    console.log('branding', branding_);
    var block_items = localStorage.getItem('block_items');
    if (branding_) this.branding = JSON.parse(branding_);
    if (appearance_) {
      this.appearance = JSON.parse(appearance_);
      if (this.appearance.background_color) this.background_color = this.appearance.background_color;
    }
    if (block_items) this.current_blocks = JSON.parse(block_items);else this.getBlockItems();
  }), _defineProperty(_methods, "getQuery", function getQuery() {
    var params = new URLSearchParams(window.location.search);
    if (params.get('slug')) {
      this.getBlockItems(params.get('slug'));
    } else {
      this.loadProfileData();
    }
    console.log(params.get('slug'));
  }), _methods),
  //  created(){
  //     this.getRandomColors();
  //      this.getQuery();
  //  },
  mounted: function mounted() {
    this.user = user;
    console.log("Test0003");
    this.getQuery();
    this.getRandomColors();
    // this.loadProfileData();
    // if( localStorage.getItem('block_items')){
    //     this.current_blocks=[];
    //     this.current_blocks = JSON.parse(localStorage.getItem('block_items'));
    //     console.log(JSON.parse(localStorage.getItem('block_items')))
    // }
    // else {
    //      this.getBlockItems();
    // }
    //   localStorage.getItem('block_items') ?
    //   this.current_blocks = JSON.parse(localStorage.getItem('block_items')) : this.current_blocks = [];
  }
};


var __injectCSSVars__ = function __injectCSSVars__() {
  (0,vue__WEBPACK_IMPORTED_MODULE_27__.useCssVars)(function (_ctx) {
    return {
      "1c0c406a-background_color\[\"primary\"\]": _ctx.background_color["primary"],
      "1c0c406a-background_color\[\"secondary\"\]": _ctx.background_color["secondary"],
      "1c0c406a-font": _ctx.font,
      "1c0c406a-font_color": _ctx.font_color,
      "1c0c406a-background_color\[\"animation\"\]": _ctx.background_color["animation"]
    };
  });
};
var __setup__ = __default__.setup;
__default__.setup = __setup__ ? function (props, ctx) {
  __injectCSSVars__();
  return __setup__(props, ctx);
} : __injectCSSVars__;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/AccountViewComponent.vue?vue&type=template&id=d90dafee":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/AccountViewComponent.vue?vue&type=template&id=d90dafee ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "userpro-box"
};
var _hoisted_2 = {
  "class": "img-wrraper"
};
var _hoisted_3 = {
  "class": "avatar"
};
var _hoisted_4 = ["src"];
var _hoisted_5 = ["src"];
var _hoisted_6 = {
  "class": "user-designation"
};
var _hoisted_7 = {
  "class": "color-white"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this$account;
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [((_this$account = this.account) === null || _this$account === void 0 ? void 0 : _this$account.thumbnail) == 'default.png' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 0,
    "class": "img-fluid glow-on-hover-avatar",
    alt: "",
    src: this.host_url + '/assets/images/user/user.png'
  }, null, 8 /* PROPS */, _hoisted_4)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 1,
    "class": "img-fluid glow-on-hover-avatar",
    src: this.host_url + '/img/user/' + this.account.thumbnail
  }, null, 8 /* PROPS */, _hoisted_5))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.account.slug), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.account.bio), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <a class=\"icon-wrapper\" href=\"edit-profile.html\">\r\n                                <i class=\"icofont icofont-pencil-alt-5\"></i>\r\n                                </a> ")])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/AvatarComponent.vue?vue&type=template&id=269c5c36&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/AvatarComponent.vue?vue&type=template&id=269c5c36&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-269c5c36"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "col-sm-12"
};
var _hoisted_2 = {
  "class": "card"
};
var _hoisted_3 = {
  "class": "card-body"
};
var _hoisted_4 = {
  "class": "mb-1"
};
var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "col-form-label pt-0",
    "for": "exampleInputPassword1"
  }, "Size", -1 /* HOISTED */);
});
var _hoisted_6 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "75"
  }, "75x75px", -1 /* HOISTED */);
});
var _hoisted_7 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "100"
  }, "100x100px", -1 /* HOISTED */);
});
var _hoisted_8 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "125",
    selected: "selected"
  }, "125x125px", -1 /* HOISTED */);
});
var _hoisted_9 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "150"
  }, "150x150px", -1 /* HOISTED */);
});
var _hoisted_10 = [_hoisted_6, _hoisted_7, _hoisted_8, _hoisted_9];
var _hoisted_11 = {
  "class": "mb-1"
};
var _hoisted_12 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "customRange1",
    "class": "form-label"
  }, "Border Width", -1 /* HOISTED */);
});
var _hoisted_13 = {
  "class": "mb-1"
};
var _hoisted_14 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "col-form-label pt-0",
    "for": "exampleInputPassword1"
  }, "Image", -1 /* HOISTED */);
});
var _hoisted_15 = {
  "class": "row"
};
var _hoisted_16 = {
  "class": "col-sm-12"
};
var _hoisted_17 = {
  key: 1
};
var _hoisted_18 = {
  "class": "row justify-content-center mt-4"
};
var _hoisted_19 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "mt-4"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-pill btn-primary btn-air-primary",
    type: "submit"
  }, "Submit")], -1 /* HOISTED */);
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_image_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("image-view");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "theme-form",
    onSubmit: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.onSubmit && $options.onSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select digits",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.avatar.size = $event;
    }),
    id: "exampleFormControlSelect3"
  }, _hoisted_10, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.avatar.size]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "range",
    min: "0",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.avatar.border = $event;
    }),
    max: "5",
    "class": "form-range",
    id: "customRange1"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.avatar.border]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [!$data.image ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
    key: 0,
    id: "file",
    onChange: _cache[2] || (_cache[2] = function () {
      return $options.onFileChange && $options.onFileChange.apply($options, arguments);
    }),
    type: "file",
    required: ""
  }, null, 32 /* HYDRATE_EVENTS */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_image_view, {
    round: true,
    image: $data.image
  }, null, 8 /* PROPS */, ["image"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-pill btn-danger btn-air-danger",
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.removeImage && $options.removeImage.apply($options, arguments);
    }),
    type: "button"
  }, " Remove image")])]))])])]), _hoisted_19], 32 /* HYDRATE_EVENTS */)])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/BrandingComponent.vue?vue&type=template&id=f7b11958":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/BrandingComponent.vue?vue&type=template&id=f7b11958 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "text-center centered-button pt-10"
};
var _hoisted_2 = ["href"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return this.branding.active ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <img class=\"img-fluid\" src=\"\" alt=\"\" /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <h4 :style=\"{color: this.branding.color, fontFamily: this.branding.fontFamily, fontSize: this.branding.fontSize + 'px'}\">{{this.branding.name}}</h4> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      color: this.branding.color,
      fontFamily: this.branding.fontFamily,
      fontSize: this.branding.fontSize + 'px'
    }),
    "class": "glow-on-hover pd-20",
    href: this.branding.url
  }, "Purchase " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.branding.name), 13 /* TEXT, STYLE, PROPS */, _hoisted_2)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/ColorBoxComponent.vue?vue&type=template&id=4b33bff2":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/ColorBoxComponent.vue?vue&type=template&id=4b33bff2 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "card"
};
var _hoisted_2 = {
  key: 1,
  "class": "card"
};
var _hoisted_3 = {
  key: 2,
  "class": "card"
};
var _hoisted_4 = {
  key: 0,
  "class": "card"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "hello ", -1 /* HOISTED */);
var _hoisted_6 = [_hoisted_5];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [$props.color.type == 'gradient' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["card-body br-10 b-r-10 text-center", this.background_color == $props.color ? 'active-bg' : '']),
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.getBackgroundColor($props.color);
    }),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)("background-image: linear-gradient(".concat($props.color.primary, ",").concat($props.color.secondary, ")"))
  }, null, 6 /* CLASS, STYLE */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.color.type == 'solid' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-body br-10 b-r-10 text-center",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.getBackgroundColor($props.color);
    }),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)("background-color:".concat($props.color.primary))
  }, null, 4 /* STYLE */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.color.type == 'animated' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-body br-10 b-r-10 text-center",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.getBackgroundColor($props.color);
    }),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      backgroundColor: $props.color.primary,
      animation: $props.color.animation
    })
  }, null, 4 /* STYLE */), $props.color.type == 'image' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, _hoisted_6)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/DividerComponent.vue?vue&type=template&id=73a1ec7c":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/DividerComponent.vue?vue&type=template&id=73a1ec7c ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  "class": "card-body"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Apply divider", -1 /* HOISTED */);
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mt-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-pill btn-primary btn-air-primary",
  type: "submit"
}, "Submit")], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"card-header pb-0\">\r\n                        <h5>Default Form Layout</h5><span>Using the <a href=\"#\">card</a> component, you can extend the default collapse behavior to create an accordion.</span>\r\n                      </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "theme-form",
    onSubmit: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.onSubmit && $options.onSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("\r\n                          <div class=\"mb-1\">\r\n                            <label class=\"col-form-label pt-0\" for=\"exampleInputPassword1\">Name</label>\r\n                            <input class=\"form-control\" v-model=\"divider_value.text\" id=\"exampleFormControlTextarea4\" rows=\"4\" />\r\n                          </div> "), _hoisted_5], 32 /* HYDRATE_EVENTS */)])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/DividerViewComponent.vue?vue&type=template&id=61c3d6c6":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/DividerViewComponent.vue?vue&type=template&id=61c3d6c6 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <p class=\"text-muted\">Divider</p> "), _hoisted_1]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/HTMLComponent.vue?vue&type=template&id=50522c78":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/HTMLComponent.vue?vue&type=template&id=50522c78 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  "class": "card-body"
};
var _hoisted_4 = {
  "class": "mb-1"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Name", -1 /* HOISTED */);
var _hoisted_6 = {
  "class": "mb-1"
};
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "HTML", -1 /* HOISTED */);
var _hoisted_8 = ["state"];
var _hoisted_9 = {
  "class": ""
};
var _hoisted_10 = {
  key: 0,
  "class": "invalid-feedback"
};
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mt-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-pill btn-primary btn-air-primary",
  type: "submit"
}, "Submit")], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"card-header pb-0\">\r\n                        <h5>Default Form Layout</h5><span>Using the <a href=\"#\">card</a> component, you can extend the default collapse behavior to create an accordion.</span>\r\n                      </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "theme-form",
    onSubmit: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.onSubmit && $options.onSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.html_value.text = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.html_value.text]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    required: "",
    state: $options.validation,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat($options.validation ? 'is-invalid' : '')),
    max: "40",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.html_value.value = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4"
  }, null, 10 /* CLASS, PROPS */, _hoisted_8), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.html_value.value]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.html_value.value ? $data.html_value.value.length : 0) + "/300", 1 /* TEXT */), $options.validation ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, "quote must be 1-300 characters long.")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_11], 32 /* HYDRATE_EVENTS */)])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/HTMLViewComponent.vue?vue&type=template&id=09f2239f":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/HTMLViewComponent.vue?vue&type=template&id=09f2239f ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    innerHTML: $props.html
  }, null, 8 /* PROPS */, _hoisted_1)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/HeadingComponent.vue?vue&type=template&id=56cc6179":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/HeadingComponent.vue?vue&type=template&id=56cc6179 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  "class": "card-body"
};
var _hoisted_4 = {
  "class": "mb-1"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Heading", -1 /* HOISTED */);
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mt-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-pill btn-primary btn-air-primary",
  type: "submit"
}, "Submit")], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"card-header pb-0\">\r\n                        <h5>Default Form Layout</h5><span>Using the <a href=\"#\">card</a> component, you can extend the default collapse behavior to create an accordion.</span>\r\n                      </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "theme-form",
    onSubmit: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.onSubmit && $options.onSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.heading_value.text = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.heading_value.text]])]), _hoisted_6], 32 /* HYDRATE_EVENTS */)])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/ImageComponent.vue?vue&type=template&id=ff8b6f80&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/ImageComponent.vue?vue&type=template&id=ff8b6f80&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-ff8b6f80"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "col-sm-12"
};
var _hoisted_2 = {
  "class": "card"
};
var _hoisted_3 = {
  "class": "card-body"
};
var _hoisted_4 = {
  "class": "mb-1"
};
var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "col-form-label pt-0",
    "for": "exampleInputPassword1"
  }, "Name", -1 /* HOISTED */);
});
var _hoisted_6 = {
  "class": "mb-1"
};
var _hoisted_7 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "col-form-label pt-0",
    "for": "exampleInputPassword1"
  }, "Image", -1 /* HOISTED */);
});
var _hoisted_8 = {
  "class": "row"
};
var _hoisted_9 = {
  "class": "col-sm-12"
};
var _hoisted_10 = {
  key: 1
};
var _hoisted_11 = {
  "class": "row justify-content-center mt-4"
};
var _hoisted_12 = {
  "class": "mt-4"
};
var _hoisted_13 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-pill btn-primary btn-air-primary",
    type: "submit"
  }, "Submit", -1 /* HOISTED */);
});
var _hoisted_14 = [_hoisted_13];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_image_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("image-view");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"card-header pb-0\">\r\n               <h5>Default Form Layout</h5><span>Using the <a href=\"#\">card</a> component, you can extend the default collapse behavior to create an accordion.</span>\r\n               </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "theme-form",
    onSubmit: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.onSubmit && $options.onSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.image_value.text = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.image_value.text]])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !this.show_name]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [!$data.image ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
    key: 0,
    id: "file",
    onChange: _cache[1] || (_cache[1] = function () {
      return $options.onFileChange && $options.onFileChange.apply($options, arguments);
    }),
    type: "file",
    required: ""
  }, null, 32 /* HYDRATE_EVENTS */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_image_view, {
    image: $data.image
  }, null, 8 /* PROPS */, ["image"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <img :src=\"image\" /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-pill btn-danger btn-air-danger",
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.removeImage && $options.removeImage.apply($options, arguments);
    }),
    type: "button"
  }, " Remove image")])]))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, _hoisted_14, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !this.show_name]])], 32 /* HYDRATE_EVENTS */)])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/ImageViewComponent.vue?vue&type=template&id=076c37ca&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/ImageViewComponent.vue?vue&type=template&id=076c37ca&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-076c37ca"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "row justify-content-center my-gallery gallery mb-2",
  id: "aniimated-thumbnials",
  itemscope: ""
};
var _hoisted_2 = {
  "class": "col-md-6 col-12 img-hover hover-1",
  itemprop: "associatedMedia",
  itemscope: ""
};
var _hoisted_3 = ["href"];
var _hoisted_4 = ["src"];
var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("figcaption", {
    itemprop: "caption description"
  }, "Image caption 1", -1 /* HOISTED */);
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("figure", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: $props.image,
    itemprop: "contentUrl"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["img-500 img-fluid m-r-20 img-responsive mh-350 mw-350 mx-auto d-block", this.round ? 'round-circle' : '']),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(this.style ? this.style : ''),
    src: $props.image,
    itemprop: "thumbnail",
    alt: "Image description"
  }, null, 14 /* CLASS, STYLE, PROPS */, _hoisted_4)])], 8 /* PROPS */, _hoisted_3), _hoisted_5])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/LinkCompoent.vue?vue&type=template&id=613c3623":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/LinkCompoent.vue?vue&type=template&id=613c3623 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  "class": "card-body"
};
var _hoisted_4 = {
  "class": "mb-1"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Name", -1 /* HOISTED */);
var _hoisted_6 = {
  "class": "mb-1"
};
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputEmail1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-unlink"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Destination URL")], -1 /* HOISTED */);
var _hoisted_8 = {
  "class": "mt-4"
};
var _hoisted_9 = {
  key: 0,
  "class": "btn btn-pill btn-primary btn-air-primary",
  type: "submit"
};
var _hoisted_10 = {
  key: 1,
  "class": "btn btn-pill btn-success btn-air-success",
  type: "submit"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"card-header pb-0\">\r\n                        <h5>Default Form Layout</h5><span>Using the <a href=\"#\">card</a> component, you can extend the default collapse behavior to create an accordion.</span>\r\n                      </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "theme-form",
    onSubmit: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.onSubmit && $options.onSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    id: "exampleInputPassword1",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.link.name = $event;
    }),
    type: "text",
    placeholder: "Enter Name",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.link.name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    id: "exampleInputEmail1",
    required: "",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.link.url = $event;
    }),
    type: "text",
    "aria-describedby": "emailHelp",
    placeholder: "https://domain.com/demo/url-demo"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.link.url]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <small class=\"form-text text-muted\" id=\"emailHelp\">We'll never share your email with anyone else.</small> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [!$data.edit_mode ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_9, "Submit")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_10, "Update"))])], 32 /* HYDRATE_EVENTS */)])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/LocationComponent.vue?vue&type=template&id=7cb19cda":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/LocationComponent.vue?vue&type=template&id=7cb19cda ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  "class": "card-body"
};
var _hoisted_4 = {
  "class": "mb-1"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Address", -1 /* HOISTED */);
var _hoisted_6 = {
  "class": "row"
};
var _hoisted_7 = {
  "class": "col-md-5"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Latitude", -1 /* HOISTED */);
var _hoisted_9 = {
  "class": "col-md-5"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Longitude", -1 /* HOISTED */);
var _hoisted_11 = {
  "class": "col-2"
};
var _hoisted_12 = {
  "class": "pt-4",
  style: {
    "font-size": "26px"
  }
};
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "icofont icofont-location-pin"
}, null, -1 /* HOISTED */);
var _hoisted_14 = [_hoisted_13];
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mt-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-pill btn-primary btn-air-primary",
  type: "submit"
}, "Submit")], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"card-header pb-0\">\r\n                        <h5>Default Form Layout</h5><span>Using the <a href=\"#\">card</a> component, you can extend the default collapse behavior to create an accordion.</span>\r\n                      </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "theme-form",
    onSubmit: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.onSubmit && $options.onSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    placeholder: "Address line 1",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.location.address = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.location.address]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    placeholder: "0.0000",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.location.lat = $event;
    }),
    id: "exampleFormControlTextarea4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.location.lat]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    placeholder: "0.0000",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.location.lng = $event;
    }),
    id: "exampleFormControlTextarea4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.location.lng]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "badge rounded-pill badge-primary",
    role: "button",
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.getLocation && $options.getLocation.apply($options, arguments);
    })
  }, _hoisted_14)])])]), _hoisted_15], 32 /* HYDRATE_EVENTS */)])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/LocationViewComponent.vue?vue&type=template&id=e51d4896":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/LocationViewComponent.vue?vue&type=template&id=e51d4896 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["href"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      color: this.color
    }),
    "class": "icon-size icofont icofont-location-pin font-size-30 margin-2 cursor-pointer mr-2"
  }, null, 4 /* STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    target: "_blank",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      color: this.color
    }),
    href: "https://maps.google.com/?q=".concat($data.value)
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.location.value ? $props.location.value : 'Click to get location'), 13 /* TEXT, STYLE, PROPS */, _hoisted_1)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/MailComponent.vue?vue&type=template&id=216d51d0":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/MailComponent.vue?vue&type=template&id=216d51d0 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  "class": "card-body"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav nav-tabs",
  id: "icon-tab",
  role: "tablist"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link active",
  id: "icon-home-tab",
  "data-bs-toggle": "tab",
  href: "#icon-home",
  role: "tab",
  "aria-controls": "icon-home",
  "aria-selected": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "icofont icofont-ui-home"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Form Settings")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  id: "profile-icon-tab",
  "data-bs-toggle": "tab",
  href: "#profile-icon",
  role: "tab",
  "aria-controls": "profile-icon",
  "aria-selected": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "icofont icofont-man-in-glasses"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Data Settings")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  id: "contact-icon-tab",
  "data-bs-toggle": "tab",
  href: "#contact-icon",
  role: "tab",
  "aria-controls": "contact-icon",
  "aria-selected": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "icofont icofont-contacts"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Button Settings")])])], -1 /* HOISTED */);
var _hoisted_5 = {
  "class": "tab-content",
  id: "icon-tabContent"
};
var _hoisted_6 = {
  "class": "tab-pane fade show active mt-2",
  id: "icon-home",
  role: "tabpanel",
  "aria-labelledby": "icon-home-tab"
};
var _hoisted_7 = {
  "class": "mb-1"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Email Placeholder", -1 /* HOISTED */);
var _hoisted_9 = {
  "class": "mb-1"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Name Placeholder", -1 /* HOISTED */);
var _hoisted_11 = {
  "class": "mb-1"
};
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Button Text", -1 /* HOISTED */);
var _hoisted_13 = {
  "class": "mb-1"
};
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Thank You Message", -1 /* HOISTED */);
var _hoisted_15 = {
  "class": "mb-1"
};
var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Thank You URL", -1 /* HOISTED */);
var _hoisted_17 = {
  "class": "mb-1"
};
var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label"
}, "Show Agreement", -1 /* HOISTED */);
var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  "class": "col-form-label"
}, "Require the user to confirm his agreement by ticking a checkbox.", -1 /* HOISTED */);
var _hoisted_21 = {
  "class": "media-body text-end icon-state"
};
var _hoisted_22 = {
  "class": "switch"
};
var _hoisted_23 = ["checked"];
var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "switch-state"
}, null, -1 /* HOISTED */);
var _hoisted_25 = {
  "class": "mb-1"
};
var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Agreement Text", -1 /* HOISTED */);
var _hoisted_27 = {
  "class": "mb-1"
};
var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Agreement URL", -1 /* HOISTED */);
var _hoisted_29 = {
  "class": "tab-pane fade mt-2",
  id: "profile-icon",
  role: "tabpanel",
  "aria-labelledby": "profile-icon-tab"
};
var _hoisted_30 = {
  "class": "mb-1"
};
var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "MailChimp API Key", -1 /* HOISTED */);
var _hoisted_32 = {
  "class": "mb-1"
};
var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "MailChimp List", -1 /* HOISTED */);
var _hoisted_34 = {
  "class": "mb-1"
};
var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Email", -1 /* HOISTED */);
var _hoisted_36 = {
  "class": "mb-1"
};
var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Webhook URL", -1 /* HOISTED */);
var _hoisted_38 = {
  "class": "tab-pane fade mt-2",
  id: "contact-icon",
  role: "tabpanel",
  "aria-labelledby": "contact-icon-tab"
};
var _hoisted_39 = {
  "class": "mb-1"
};
var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Button Name", -1 /* HOISTED */);
var _hoisted_41 = {
  "class": "mb-1"
};
var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Button Icon", -1 /* HOISTED */);
var _hoisted_43 = {
  "class": "mb-1"
};
var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Button Color", -1 /* HOISTED */);
var _hoisted_45 = {
  "class": "mb-1"
};
var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Button Background", -1 /* HOISTED */);
var _hoisted_47 = {
  "class": "mb-1"
};
var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Button Border", -1 /* HOISTED */);
var _hoisted_49 = {
  "class": "mb-1"
};
var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Button Border", -1 /* HOISTED */);
var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "straight"
}, "Bounce", -1 /* HOISTED */);
var _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "round"
}, "Round", -1 /* HOISTED */);
var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "rounded"
}, "Rounded", -1 /* HOISTED */);
var _hoisted_54 = [_hoisted_51, _hoisted_52, _hoisted_53];
var _hoisted_55 = {
  "class": "mb-1"
};
var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Button Animation", -1 /* HOISTED */);
var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "bounce"
}, "Bounce", -1 /* HOISTED */);
var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "tada"
}, "Tada", -1 /* HOISTED */);
var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "swing"
}, "Swing", -1 /* HOISTED */);
var _hoisted_60 = [_hoisted_57, _hoisted_58, _hoisted_59];
var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mt-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-pill btn-primary btn-air-primary",
  type: "submit"
}, "Submit")], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"card-header pb-0\">\r\n                        <h5>Default Form Layout</h5><span>Using the <a href=\"#\">card</a> component, you can extend the default collapse behavior to create an accordion.</span>\r\n                      </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "theme-form",
    onSubmit: _cache[19] || (_cache[19] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.onSubmit && $options.onSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.mail.email_placeholder = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.mail.email_placeholder]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.mail.name_placeholder = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.mail.name_placeholder]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.mail.button_text = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.mail.button_text]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.mail.thankyou_message = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.mail.thankyou_message]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.mail.thankyou_url = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.mail.thankyou_url]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, _hoisted_19, _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.mail.show_agreement = $event;
    }),
    checked: $data.mail.show_agreement
  }, null, 8 /* PROPS */, _hoisted_23), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.mail.show_agreement]]), _hoisted_24])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.mail.agreement_text = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.mail.agreement_text]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.mail.agreement_url = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.mail.agreement_url]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [_hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $data.mail.mailchimp_api = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.mail.mailchimp_api]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.mail.mailchimp_list = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.mail.mailchimp_list]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $data.mail.email = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.mail.email]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [_hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $data.mail.webhook_url = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.mail.webhook_url]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [_hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $data.mail.value = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.mail.value]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [_hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $data.mail.button_icon = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.mail.button_icon]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [_hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "color",
    "class": "form-control",
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return $data.mail.button_color = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.mail.button_color]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "color",
    "class": "form-control",
    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
      return $data.mail.button_backgruound = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.mail.button_backgruound]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [_hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "color",
    "class": "form-control",
    "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
      return $data.mail.button_backgruound = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.mail.button_backgruound]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [_hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select digits",
    id: "exampleFormControlSelect9",
    "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
      return $data.mail.button_border = $event;
    })
  }, _hoisted_54, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.mail.button_border]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [_hoisted_56, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select digits",
    id: "exampleFormControlSelect9",
    "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
      return $data.mail.button_animation = $event;
    })
  }, _hoisted_60, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.mail.button_animation]])])])]), _hoisted_61], 32 /* HYDRATE_EVENTS */)])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/PaypalComponent.vue?vue&type=template&id=5bd9ae48":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/PaypalComponent.vue?vue&type=template&id=5bd9ae48 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  "class": "card-body"
};
var _hoisted_4 = {
  "class": "mb-1"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Type", -1 /* HOISTED */);
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "buy_now"
}, "Buy Now", -1 /* HOISTED */);
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "add_to_cart"
}, "Add To Cart", -1 /* HOISTED */);
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "donation"
}, "Donation", -1 /* HOISTED */);
var _hoisted_9 = [_hoisted_6, _hoisted_7, _hoisted_8];
var _hoisted_10 = {
  "class": "mb-1"
};
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Paypal Email", -1 /* HOISTED */);
var _hoisted_12 = {
  "class": "mb-1"
};
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Product Title", -1 /* HOISTED */);
var _hoisted_14 = {
  "class": "mb-1"
};
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Currency Code", -1 /* HOISTED */);
var _hoisted_16 = {
  "class": "mb-1"
};
var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Price", -1 /* HOISTED */);
var _hoisted_18 = {
  "class": "mb-1"
};
var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Name", -1 /* HOISTED */);
var _hoisted_20 = {
  "class": "mb-1"
};
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Thank You URL Icon", -1 /* HOISTED */);
var _hoisted_22 = {
  "class": "mb-1"
};
var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Cancelled Payment URL", -1 /* HOISTED */);
var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mt-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-pill btn-primary btn-air-primary",
  type: "submit"
}, "Submit")], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"card-header pb-0\">\r\n                        <h5>Default Form Layout</h5><span>Using the <a href=\"#\">card</a> component, you can extend the default collapse behavior to create an accordion.</span>\r\n                      </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "theme-form",
    onSubmit: _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.onSubmit && $options.onSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select digits",
    id: "exampleFormControlSelect9",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.paypal.type = $event;
    })
  }, _hoisted_9, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.paypal.type]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.paypal.paypal_email = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.paypal.paypal_email]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.paypal.product_title = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.paypal.product_title]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.paypal.currency_code = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.paypal.currency_code]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.paypal.price = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.paypal.price]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.paypal.name = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.paypal.name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.paypal.thankyou_url = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.paypal.thankyou_url]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.paypal.cancel_url = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.paypal.cancel_url]])]), _hoisted_24], 32 /* HYDRATE_EVENTS */)])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/PaypalViewComponent.vue?vue&type=template&id=016dd292":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/PaypalViewComponent.vue?vue&type=template&id=016dd292 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["href"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this$paypal, _this$paypal2;
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: 'https://paypal.com/cgi-bin/webscr?business=' + ((_this$paypal = this.paypal) === null || _this$paypal === void 0 ? void 0 : _this$paypal.paypal_email) + '&cmd=_cart&currency_code=' + this.paypal.currency_code + '&amount=' + this.paypal.price + '&item_name=' + this.paypal.product_title + '&button_subtype=' + this.paypal.type + '&add=1',
    "class": "btn btn-pill btn-primary"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_this$paypal2 = this.paypal) === null || _this$paypal2 === void 0 ? void 0 : _this$paypal2.name), 9 /* TEXT, PROPS */, _hoisted_1)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/PhoneComponent.vue?vue&type=template&id=17e02b0d":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/PhoneComponent.vue?vue&type=template&id=17e02b0d ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  "class": "card-body"
};
var _hoisted_4 = {
  "class": "mb-1"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Name", -1 /* HOISTED */);
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mt-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-pill btn-primary btn-air-primary",
  type: "submit"
}, "Submit")], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"card-header pb-0\">\r\n                        <h5>Default Form Layout</h5><span>Using the <a href=\"#\">card</a> component, you can extend the default collapse behavior to create an accordion.</span>\r\n                      </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "theme-form",
    onSubmit: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.onSubmit && $options.onSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.phone.value = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.phone.value]])]), _hoisted_6], 32 /* HYDRATE_EVENTS */)])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/QuestionComponent.vue?vue&type=template&id=d1dfcf6e":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/QuestionComponent.vue?vue&type=template&id=d1dfcf6e ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  "class": "card-body"
};
var _hoisted_4 = {
  "class": "mb-1"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Question", -1 /* HOISTED */);
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mt-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-pill btn-primary btn-air-primary",
  type: "submit"
}, "Submit")], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"card-header pb-0\">\r\n                        <h5>Default Form Layout</h5><span>Using the <a href=\"#\">card</a> component, you can extend the default collapse behavior to create an accordion.</span>\r\n                      </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "theme-form",
    onSubmit: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.onSubmit && $options.onSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.question_value.value = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.question_value.value]])]), _hoisted_6], 32 /* HYDRATE_EVENTS */)])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/QuoteComponent.vue?vue&type=template&id=1036d0bf":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/QuoteComponent.vue?vue&type=template&id=1036d0bf ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  "class": "card-body"
};
var _hoisted_4 = {
  "class": "mb-1"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Quote", -1 /* HOISTED */);
var _hoisted_6 = ["state"];
var _hoisted_7 = {
  "class": ""
};
var _hoisted_8 = {
  key: 0,
  "class": "text-danger"
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mt-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-pill btn-primary btn-air-primary",
  type: "submit"
}, "Submit")], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"card-header pb-0\">\r\n                        <h5>Default Form Layout</h5><span>Using the <a href=\"#\">card</a> component, you can extend the default collapse behavior to create an accordion.</span>\r\n                      </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "theme-form",
    onSubmit: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.onSubmit && $options.onSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    required: "",
    state: $options.validation,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat($options.validation ? 'is-invalid' : '')),
    max: "40",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.quote.text = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4"
  }, null, 10 /* CLASS, PROPS */, _hoisted_6), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.quote.text]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.quote.text ? $data.quote.text.length : 0) + "/100", 1 /* TEXT */), $options.validation ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, "quote must be 1-100 characters long.")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_9], 32 /* HYDRATE_EVENTS */)])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/QuoteViewComponent.vue?vue&type=template&id=9c7fd5cc":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/QuoteViewComponent.vue?vue&type=template&id=9c7fd5cc ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "text-center"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("blockquote", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.quote), 1 /* TEXT */)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SocialComponent.vue?vue&type=template&id=3d12f2bc":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SocialComponent.vue?vue&type=template&id=3d12f2bc ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SocialViewComponent.vue?vue&type=template&id=62c7bd06":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SocialViewComponent.vue?vue&type=template&id=62c7bd06 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "row social-set",
  id: "social-test",
  style: {
    background: 'transparent'
  }
};
var _hoisted_2 = {
  "class": "social"
};
var _hoisted_3 = ["href"];
var _hoisted_4 = ["href"];
var _hoisted_5 = ["href"];
var _hoisted_6 = ["href"];
var _hoisted_7 = ["href"];
var _hoisted_8 = ["href"];
var _hoisted_9 = ["href"];
var _hoisted_10 = ["href"];
var _hoisted_11 = ["href"];
var _hoisted_12 = ["href"];
var _hoisted_13 = ["href"];
var _hoisted_14 = ["href"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    target: "_blank",
    href: "mailto:".concat($props.social.email)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "icon-size icofont icofont-envelope font-size-18 margin-2 cursor-pointer",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      color: this.color
    }),
    "aria-hidden": "true"
  }, null, 4 /* STYLE */)], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.social.email]])], 8 /* PROPS */, _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    target: "_blank",
    href: $props.social.facebook
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "icon-size icofont icofont-social-facebook font-size-18 margin-2 cursor-pointer",
    "aria-hidden": "true",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      color: this.color
    })
  }, null, 4 /* STYLE */)], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.social.facebook]])], 8 /* PROPS */, _hoisted_4), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    target: "_blank",
    href: $props.social.telephone
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "icon-size icofont icofont-ui-touch-phone font-size-18 margin-2 cursor-pointer",
    "aria-hidden": "true",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      color: this.color
    })
  }, null, 4 /* STYLE */)], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.social.telephone]])], 8 /* PROPS */, _hoisted_5), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    target: "_blank",
    href: $props.social.telegram
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "icon-size icofont icofont-social-telegram font-size-18 margin-2 cursor-pointer",
    "aria-hidden": "true",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      color: this.color
    })
  }, null, 4 /* STYLE */)], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.social.telegram]])], 8 /* PROPS */, _hoisted_6), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    target: "_blank",
    href: $props.social.whatsapp
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "icon-size icofont icofont-brand-whatsapp font-size-18 margin-2 cursor-pointer",
    "aria-hidden": "true",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      color: this.color
    })
  }, null, 4 /* STYLE */)], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.social.whatsapp]])], 8 /* PROPS */, _hoisted_7), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    target: "_blank",
    href: $props.social.facebook_page
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "icon-size icofont icofont-brand-facebook font-size-18 margin-2 cursor-pointer",
    "aria-hidden": "true",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      color: this.color
    })
  }, null, 4 /* STYLE */)], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.social.facebook_page]])], 8 /* PROPS */, _hoisted_8), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    target: "_blank",
    href: $props.social.instagram
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "icon-size icofont icofont-social-instagram font-size-18 margin-2 cursor-pointer",
    "aria-hidden": "true",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      color: this.color
    })
  }, null, 4 /* STYLE */)], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.social.instagram]])], 8 /* PROPS */, _hoisted_9), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    target: "_blank",
    href: $props.social.twitter
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "icon-size icofont icofont-social-twitter font-size-18 margin-2 cursor-pointer",
    "aria-hidden": "true",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      color: this.color
    })
  }, null, 4 /* STYLE */)], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.social.twitter]])], 8 /* PROPS */, _hoisted_10), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    target: "_blank",
    href: $props.social.tumbler
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "icon-size icofont icofont-social-tumblr font-size-18 margin-2 cursor-pointer",
    "aria-hidden": "true",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      color: this.color
    })
  }, null, 4 /* STYLE */)], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.social.tumbler]])], 8 /* PROPS */, _hoisted_11), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    target: "_blank",
    href: $props.social.youtube
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "icon-size icofont icofont-social-youtube-play font-size-18 margin-2 cursor-pointer",
    "aria-hidden": "true",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      color: this.color
    })
  }, null, 4 /* STYLE */)], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.social.youtube]])], 8 /* PROPS */, _hoisted_12), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    target: "_blank",
    href: $props.social.soundcloud
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "icon-size icofont icofont-social-soundcloud font-size-18 margin-2 cursor-pointer",
    "aria-hidden": "true",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      color: this.color
    })
  }, null, 4 /* STYLE */)], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.social.soundcloud]])], 8 /* PROPS */, _hoisted_13), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    target: "_blank",
    href: $props.social.twitch
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "icon-size icofont icofont-social-twitch font-size-18 margin-2 cursor-pointer",
    "aria-hidden": "true",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      color: this.color
    })
  }, null, 4 /* STYLE */)], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.social.twitch]])], 8 /* PROPS */, _hoisted_14)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"col-2 mt-2\" v-show=\"social.email\">\r\n                  <a :href=\"`mailto:${social.email}`\" target=\"_blank\">\r\n                    <i class=\" icon-size icofont icofont-envelope font-size-30 margin-2 cursor-pointer\" :style=\"{color: this.color}\"></i>\r\n                    </a>\r\n              </div>\r\n              <div class=\"col-2 mt-2\" v-show=\"social.facebook\">\r\n                  <a :href=\"social.facebook\" target=\"_blank\">\r\n                    <i class=\" icon-size icofont icofont-social-facebook font-size-22 margin-2 cursor-pointer\" :style=\"{color: this.color}\"></i>\r\n                    </a>\r\n               </div>\r\n                <div class=\"col-2 mt-2\" v-show=\"social.telephone\">\r\n                    <a :href=\"`tel:${social.telephone}`\" target=\"_blank\">\r\n                    <i class=\"icon-size icofont icofont-ui-touch-phone font-size-22 margin-2 cursor-pointer\" :style=\"{color: this.color}\"></i>\r\n                    </a>\r\n               </div>\r\n               <div class=\"col-2 mt-2\" v-show=\"social.telegram\">\r\n                   <a :href=\"`https://telegram.me/${social.telegram}`\" target=\"_blank\">\r\n                    <i class=\"icon-size icofont icofont-social-telegram font-size-22 margin-2 cursor-pointer\" :style=\"{color: this.color}\"></i>\r\n                   </a>\r\n               </div>\r\n                <div class=\"col-2 mt-2\" v-show=\"social.whatsapp\">\r\n                   <a :href=\"`https://telegram.me/${social.whatsapp}`\" target=\"_blank\">\r\n                    <i class=\"icon-size icofont icofont-brand-whatsapp font-size-22 margin-2 cursor-pointer\" :style=\"{color: this.color}\"></i>\r\n                   </a>\r\n               </div>\r\n                <div class=\"col-2 mt-2\" v-show=\"social.facebook_page\">\r\n                   <a :href=\"`${social.facebook_page}`\" target=\"_blank\">\r\n                    <i class=\"icon-size icofont icofont-brand-facebook font-size-22 margin-2 cursor-pointer\" :style=\"{color: this.color}\"></i>\r\n                   </a>\r\n               </div>\r\n                <div class=\"col-2 mt-2\" v-show=\"social.instagram\">\r\n                   <a :href=\"`${social.instagram}`\" target=\"_blank\">\r\n                    <i class=\"icon-size icofont icofont-social-instagram font-size-22 margin-2 cursor-pointer\" :style=\"{color: this.color}\"></i>\r\n                   </a>\r\n               </div>\r\n                 <div class=\"col-2 mt-2\" v-show=\"social.twitter\">\r\n                   <a :href=\"`${social.twitter}`\" target=\"_blank\">\r\n                    <i class=\"icon-size icofont icofont-social-twitter font-size-22 margin-2 cursor-pointer\" :style=\"{color: this.color}\"></i>\r\n                   </a>\r\n               </div>\r\n                <div class=\"col-2 mt-2\" v-show=\"social.tiktok\">\r\n                   <a :href=\"`${social.tiktok}`\" target=\"_blank\">\r\n                    <i class=\"icon-size icofont icofont-social-tumblr font-size-22 margin-2 cursor-pointer\" :style=\"{color: this.color}\"></i>\r\n                   </a>\r\n               </div>\r\n                <div class=\"col-2 mt-2\" v-show=\"social.youtube\">\r\n                   <a :href=\"`${social.youtube}`\" target=\"_blank\">\r\n                    <i class=\"icon-size icofont icofont-social-youtube-play font-size-22 margin-2 cursor-pointer\" :style=\"{color: this.color}\"></i>\r\n                   </a>\r\n               </div>\r\n                <div class=\"col-2 mt-2\"  v-show=\"social.soundcloud\">\r\n                   <a :href=\"`${social.soundcloud}`\" target=\"_blank\">\r\n                    <i class=\"icon-size icofont icofont-social-soundcloud font-size-22 margin-2 cursor-pointer\" :style=\"{color: this.color}\"></i>\r\n                   </a>\r\n               </div>\r\n                <div class=\"col-2 mt-2\" v-show=\"social.twitch\">\r\n                   <a :href=\"`${social.twitch}`\" target=\"_blank\">\r\n                    <i class=\"icon-size icofont icofont-social-twitch font-size-22 margin-2 cursor-pointer\" :style=\"{color: this.color}\"></i>\r\n                   </a>\r\n               </div> ")])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SoundcloudComponent.vue?vue&type=template&id=6cac89ae":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SoundcloudComponent.vue?vue&type=template&id=6cac89ae ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  "class": "card-body"
};
var _hoisted_4 = {
  "class": "mb-1"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Soundcloud", -1 /* HOISTED */);
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mt-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-pill btn-primary btn-air-primary",
  type: "submit"
}, "Submit")], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "theme-form",
    onSubmit: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.onSubmit && $options.onSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    onChange: _cache[0] || (_cache[0] = function () {
      return $options.setValue && $options.setValue.apply($options, arguments);
    }),
    placeholder: "https://soundcloud.com/octobersveryown/duppy-freestyle",
    id: "exampleFormControlTextarea4"
  }, null, 32 /* HYDRATE_EVENTS */)]), _hoisted_6], 32 /* HYDRATE_EVENTS */)])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SoundcloudViewComponent.vue?vue&type=template&id=4983ba84":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SoundcloudViewComponent.vue?vue&type=template&id=4983ba84 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["width", "height", "src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("iframe", {
    width: $data.width,
    height: $data.height,
    scrolling: "no",
    frameborder: "no",
    src: "https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2" + $props.soundcloud.value + "&color=orange_white&size=32"
  }, "\r\n", 8 /* PROPS */, _hoisted_1)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SpotifyComponent.vue?vue&type=template&id=0330387e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SpotifyComponent.vue?vue&type=template&id=0330387e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  "class": "card-body"
};
var _hoisted_4 = {
  "class": "mb-1"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Spotify Name", -1 /* HOISTED */);
var _hoisted_6 = ["state"];
var _hoisted_7 = {
  "class": ""
};
var _hoisted_8 = {
  key: 0,
  "class": "invalid-feedback"
};
var _hoisted_9 = {
  "class": "mb-1"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Spotify URL", -1 /* HOISTED */);
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mt-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-pill btn-primary btn-air-primary",
  type: "submit"
}, "Submit")], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"card-header pb-0\">\r\n                        <h5>Default Form Layout</h5><span>Using the <a href=\"#\">card</a> component, you can extend the default collapse behavior to create an accordion.</span>\r\n                      </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "theme-form",
    onSubmit: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.onSubmit && $options.onSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat($options.validation ? 'is-invalid' : '')),
    state: $options.validation,
    required: "",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.spotify.name = $event;
    }),
    id: "exampleFormControlTextarea4",
    placeholder: "Spotify Name"
  }, null, 10 /* CLASS, PROPS */, _hoisted_6), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.spotify.name]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.spotify.name ? $data.spotify.name.length : 0) + "/15", 1 /* TEXT */), $options.validation ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, "Spotify name must be 1-15 characters long.")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    required: "",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.spotify.link = $event;
    }),
    id: "exampleFormControlTextarea4",
    placeholder: "https://open.spotify.com/track/5ry2OE6R2zPQFDO85XkgRb"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.spotify.link]])]), _hoisted_11], 32 /* HYDRATE_EVENTS */)])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SpotifyViewComponent.vue?vue&type=template&id=2b4bd71c":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SpotifyViewComponent.vue?vue&type=template&id=2b4bd71c ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "avatar"
};
var _hoisted_2 = {
  "class": "row"
};
var _hoisted_3 = {
  "class": "col"
};
var _hoisted_4 = ["href"];
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "img-40 b-r-25",
  src: "/images/icons/spotify.png",
  alt: "#"
}, null, -1 /* HOISTED */);
var _hoisted_6 = {
  "class": "ml-4"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    target: "_blank",
    href: "".concat($props.spotify.value)
  }, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.spotify.name), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_4)])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/TextComponent.vue?vue&type=template&id=0601313c":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/TextComponent.vue?vue&type=template&id=0601313c ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  "class": "card-body"
};
var _hoisted_4 = {
  "class": "mb-1"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Paragraph", -1 /* HOISTED */);
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mt-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-pill btn-primary btn-air-primary",
  type: "submit"
}, "Submit")], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"card-header pb-0\">\r\n                        <h5>Default Form Layout</h5><span>Using the <a href=\"#\">card</a> component, you can extend the default collapse behavior to create an accordion.</span>\r\n                      </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "theme-form",
    onSubmit: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.onSubmit && $options.onSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.paragraph.text = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.paragraph.text]])]), _hoisted_6], 32 /* HYDRATE_EVENTS */)])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/VideoComponent.vue?vue&type=template&id=06b81dc0":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/VideoComponent.vue?vue&type=template&id=06b81dc0 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  "class": "card-body"
};
var _hoisted_4 = {
  "class": "mb-1"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Video Link", -1 /* HOISTED */);
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mt-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-pill btn-primary btn-air-primary",
  type: "submit"
}, "Submit")], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"card-header pb-0\">\r\n                        <h5>Default Form Layout</h5><span>Using the <a href=\"#\">card</a> component, you can extend the default collapse behavior to create an accordion.</span>\r\n                      </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "theme-form",
    onSubmit: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.onSubmit && $options.onSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    placeholder: "https://domain.com/demo/video-url-demo",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.video.link = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.video.link]])]), _hoisted_6], 32 /* HYDRATE_EVENTS */)])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/YoutubeComponent.vue?vue&type=template&id=7fee5c10":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/YoutubeComponent.vue?vue&type=template&id=7fee5c10 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  "class": "card-body"
};
var _hoisted_4 = {
  "class": "mb-1"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label pt-0",
  "for": "exampleInputPassword1"
}, "Youtube URL", -1 /* HOISTED */);
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mt-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-pill btn-primary btn-air-primary",
  type: "submit"
}, "Submit")], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"card-header pb-0\">\r\n                        <h5>Default Form Layout</h5><span>Using the <a href=\"#\">card</a> component, you can extend the default collapse behavior to create an accordion.</span>\r\n                      </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "theme-form",
    onSubmit: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.onSubmit && $options.onSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    placeholder: "Youtube URL",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.youtube.link = $event;
    }),
    id: "exampleFormControlTextarea4",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.youtube.link]])]), _hoisted_6], 32 /* HYDRATE_EVENTS */)])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/YoutubeViewComponent.vue?vue&type=template&id=39ccd1d3":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/YoutubeViewComponent.vue?vue&type=template&id=39ccd1d3 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["height", "src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("iframe", {
    width: "100%",
    height: $data.height,
    src: $props.youtube.value
  }, "\r\n", 8 /* PROPS */, _hoisted_1)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/AppearanceComponent.vue?vue&type=template&id=96de5350&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/AppearanceComponent.vue?vue&type=template&id=96de5350&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-96de5350"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-header pb-0"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Profile Info")], -1 /* HOISTED */);
});
var _hoisted_2 = {
  "class": "card-body megaoptions-border-space-sm"
};
var _hoisted_3 = {
  "class": "mega-inline",
  enctype: "multipart/form-data"
};
var _hoisted_4 = {
  "class": "col-sm-6"
};
var _hoisted_5 = {
  "class": "userpro-box"
};
var _hoisted_6 = {
  "class": "img-wrraper"
};
var _hoisted_7 = {
  "class": "avatar"
};
var _hoisted_8 = ["src"];
var _hoisted_9 = ["src"];
var _hoisted_10 = {
  "class": "icon-wrapper"
};
var _hoisted_11 = {
  "for": "myInputFile"
};
var _hoisted_12 = {
  "class": "icofont icofont-pencil-alt-5",
  "for": "myInputFile"
};
var _hoisted_13 = {
  "class": "col-sm-6"
};
var _hoisted_14 = {
  "class": "mb-3"
};
var _hoisted_15 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "form-label"
  }, "Name", -1 /* HOISTED */);
});
var _hoisted_16 = {
  "class": "mb-3"
};
var _hoisted_17 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
    "class": "form-label"
  }, "Bio", -1 /* HOISTED */);
});
var _hoisted_18 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-header pb-0"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Choose Background")], -1 /* HOISTED */);
});
var _hoisted_19 = {
  "class": "card-body megaoptions-border-space-sm"
};
var _hoisted_20 = {
  "class": "mega-inline"
};
var _hoisted_21 = {
  "class": "row"
};
var _hoisted_22 = {
  "class": "col-sm-6"
};
var _hoisted_23 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media p-20"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media-body mt-8"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "background-types"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Monochrome")])])], -1 /* HOISTED */);
});
var _hoisted_24 = [_hoisted_23];
var _hoisted_25 = {
  "class": "col-sm-6"
};
var _hoisted_26 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media p-20"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "radio radio-primary me-3"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media-body mt-8"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "background-types"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Gradient")])])], -1 /* HOISTED */);
});
var _hoisted_27 = [_hoisted_26];
var _hoisted_28 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-header pb-0"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Choose Background Appearance")], -1 /* HOISTED */);
});
var _hoisted_29 = {
  "class": "card-body megaoptions-border-space-sm"
};
var _hoisted_30 = {
  "class": "row"
};
var _hoisted_31 = {
  "class": "col"
};
var _hoisted_32 = {
  "class": "mb-3"
};
var _hoisted_33 = ["value"];
var _hoisted_34 = {
  key: 0,
  "class": "row"
};
var _hoisted_35 = {
  key: 1,
  "class": "row"
};
var _hoisted_36 = ["onClick"];
var _hoisted_37 = {
  key: 0,
  "class": "card"
};
var _hoisted_38 = {
  "class": "card-body br-10 b-r-10 text-center"
};
var _hoisted_39 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-header pb-0"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Choose Font Appearance")], -1 /* HOISTED */);
});
var _hoisted_40 = {
  "class": "card-body"
};
var _hoisted_41 = {
  "class": "row g-2 mb-3"
};
var _hoisted_42 = {
  "class": "col-md-6"
};
var _hoisted_43 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "form-label",
    "for": "validationCustom01"
  }, "Choose Color", -1 /* HOISTED */);
});
var _hoisted_44 = ["value"];
var _hoisted_45 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "valid-feedback"
  }, "Looks good!", -1 /* HOISTED */);
});
var _hoisted_46 = {
  "class": "col-md-6"
};
var _hoisted_47 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "form-label",
    "for": "validationCustom02"
  }, "Choose Font", -1 /* HOISTED */);
});
var _hoisted_48 = ["value"];
var _hoisted_49 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "valid-feedback"
  }, "Looks good!", -1 /* HOISTED */);
});
var _hoisted_50 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "form-label",
    "for": "validationCustom02"
  }, "Choose Font Style", -1 /* HOISTED */);
});
var _hoisted_51 = {
  "class": "nav nav-pills col-md-12",
  id: "pills-icontab",
  role: "tablist"
};
var _hoisted_52 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "icofont icofont-text-width"
  }, null, -1 /* HOISTED */);
});
var _hoisted_53 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "icofont icofont-bold"
  }, null, -1 /* HOISTED */);
});
var _hoisted_54 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "icofont icofont-italic-alt"
  }, null, -1 /* HOISTED */);
});
var _hoisted_55 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "icofont icofont-underline"
  }, null, -1 /* HOISTED */);
});
var _hoisted_56 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-header pb-0"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Choose Buttons Appearance")], -1 /* HOISTED */);
});
var _hoisted_57 = {
  "class": "card-body megaoptions-border-space-sm"
};
var _hoisted_58 = {
  "class": "mega-inline"
};
var _hoisted_59 = {
  "class": "row"
};
var _hoisted_60 = {
  "class": "col-sm-4"
};
var _hoisted_61 = {
  "class": "card"
};
var _hoisted_62 = {
  "class": "media p-20"
};
var _hoisted_63 = {
  "class": "radio radio-primary me-3"
};
var _hoisted_64 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "radio16"
  }, null, -1 /* HOISTED */);
});
var _hoisted_65 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media-body mt-8"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "background-types"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Both ")])], -1 /* HOISTED */);
});
var _hoisted_66 = {
  "class": "col-sm-4"
};
var _hoisted_67 = {
  "class": "card"
};
var _hoisted_68 = {
  "class": "media p-20"
};
var _hoisted_69 = {
  "class": "radio radio-primary me-3"
};
var _hoisted_70 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "radio15"
  }, null, -1 /* HOISTED */);
});
var _hoisted_71 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media-body mt-8"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "background-types"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Circle ")])], -1 /* HOISTED */);
});
var _hoisted_72 = {
  "class": "col-sm-4"
};
var _hoisted_73 = {
  "class": "card"
};
var _hoisted_74 = {
  "class": "media p-20"
};
var _hoisted_75 = {
  "class": "radio radio-primary me-3"
};
var _hoisted_76 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "radio17"
  }, null, -1 /* HOISTED */);
});
var _hoisted_77 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media-body mt-8"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "background-types"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Square ")])], -1 /* HOISTED */);
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;
  var _component_color_box = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("color-box");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [this.user.thumbnail === 'default.png' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 0,
    "class": "img-fluid",
    alt: "",
    src: this.host_url + '/assets/images/user/user.png'
  }, null, 8 /* PROPS */, _hoisted_8)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 1,
    "class": "img-fluid",
    src: this.host_url + '/img/user/' + this.user.thumbnail
  }, null, 8 /* PROPS */, _hoisted_9))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "file",
    id: "myInputFile",
    onChange: _cache[0] || (_cache[0] = function () {
      return $options.uploadImage && $options.uploadImage.apply($options, arguments);
    }),
    name: "myInputFile"
  }, null, 32 /* HYDRATE_EVENTS */)])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return _this.user.slug = $event;
    }),
    type: "text",
    placeholder: "Name"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, this.user.slug]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return _this.user.bio = $event;
    }),
    "class": "form-control",
    rows: "5"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.user.bio), 513 /* TEXT, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, this.user.bio]])])])])]), _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("card bg-primary  ".concat(this.active_card == 'monochrome' ? 'active-bg' : '')),
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.changeColor({
        name: 'Monochrome',
        type: 'monochrome',
        primary: '#d2d2d2',
        secondary: '#ffffff'
      });
    })
  }, _hoisted_24, 2 /* CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("card bg-primary ".concat(this.active_card == 'gradient' ? 'active-bg' : '')),
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.changeColor({
        name: 'Sand To Blue',
        type: 'gradient',
        primary: '#DECBA4',
        secondary: '#3E5151'
      });
    }),
    name: "radio1",
    value: "option1"
  }, _hoisted_27, 2 /* CLASS */)])])])]), _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select digits",
    id: "exampleFormControlSelect9",
    onChange: _cache[5] || (_cache[5] = function () {
      return $options.changeColorType && $options.changeColorType.apply($options, arguments);
    }),
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.selectedBackgroundType = $event;
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.background_types, function (background_type) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: background_type.id,
      value: background_type
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(background_type), 9 /* TEXT, PROPS */, _hoisted_33);
  }), 128 /* KEYED_FRAGMENT */))], 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.selectedBackgroundType]])])])]), $data.selectedBackgroundType != 'Animated' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_34, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.colors, function (color) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: color.id,
      "class": "col-xxl-2 col-xl-3 col-md-3 col-sm-4"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_color_box, {
      color: color,
      onChangeColor: _cache[7] || (_cache[7] = function ($event) {
        return $options.changeColor($event);
      }),
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_this.background_color == color ? 'active-bg' : '')
    }, null, 8 /* PROPS */, ["color", "class"])]);
  }), 128 /* KEYED_FRAGMENT */))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_35, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.colors, function (color) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "col-lg-6 col-md-6 col-sm-6",
      key: color.id,
      onClick: function onClick($event) {
        return $options.changeAnimatedBackground(color);
      }
    }, [color.type == 'animated' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(color.name), 1 /* TEXT */)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_36);
  }), 128 /* KEYED_FRAGMENT */))]))]), _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [_hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select digits",
    id: "exampleFormControlSelect9",
    onChange: _cache[8] || (_cache[8] = function () {
      return $options.changeFontColor && $options.changeFontColor.apply($options, arguments);
    }),
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.selectedFontColor = $event;
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.font_colors, function (font_color) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: font_color.id,
      value: font_color.primary
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(font_color.name), 9 /* TEXT, PROPS */, _hoisted_44);
  }), 128 /* KEYED_FRAGMENT */))], 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.selectedFontColor]]), _hoisted_45]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [_hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select digits",
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $data.selectedFont = $event;
    }),
    name: "fontFamily",
    onChange: _cache[11] || (_cache[11] = function () {
      return $options.changeFont && $options.changeFont.apply($options, arguments);
    }),
    id: "fontFamily"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.fonts, function (font) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: font.id,
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        fontFamily: font.value
      }),
      value: font.value
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(font.name), 13 /* TEXT, STYLE, PROPS */, _hoisted_48);
  }), 128 /* KEYED_FRAGMENT */))], 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.selectedFont]]), _hoisted_49])]), _hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "nav-item col mt-2",
    onClick: _cache[12] || (_cache[12] = function ($event) {
      return $options.changeFontStyle('Normal');
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("nav-link ".concat(_ctx.font_style.fontStyle == 'normal' ? 'active ' : '')),
    id: "pills-iconhome-tab",
    "data-bs-toggle": "pill",
    href: "#pills-iconhome",
    role: "tab",
    "aria-controls": "pills-iconhome",
    "aria-selected": "true"
  }, [_hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Normal")], 2 /* CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "nav-item col",
    onClick: _cache[13] || (_cache[13] = function ($event) {
      return $options.changeFontStyle('Bold');
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("nav-link ".concat(_ctx.font_style == 'bold' ? 'active ' : '')),
    id: "pills-iconhome-tab",
    "data-bs-toggle": "pill",
    href: "#pills-iconhome",
    role: "tab",
    "aria-controls": "pills-iconhome",
    "aria-selected": "true"
  }, [_hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Bold")], 2 /* CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "nav-item col",
    onClick: _cache[14] || (_cache[14] = function ($event) {
      return $options.changeFontStyle('Italic');
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("nav-link ".concat(_ctx.font_style == 'italic' ? 'active ' : '')),
    id: "pills-iconprofile-tab",
    "data-bs-toggle": "pill",
    href: "#pills-iconprofile",
    role: "tab",
    "aria-controls": "pills-iconprofile",
    "aria-selected": "false"
  }, [_hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Italic")], 2 /* CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "nav-item col",
    onClick: _cache[15] || (_cache[15] = function ($event) {
      return $options.changeFontStyle('Underline');
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("nav-link ".concat(_ctx.font_style == 'underline' ? 'active ' : '')),
    id: "pills-iconcontact-tab",
    "data-bs-toggle": "pill",
    href: "#pills-iconcontact",
    role: "tab",
    "aria-controls": "pills-iconcontact",
    "aria-selected": "false"
  }, [_hoisted_55, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Underline")], 2 /* CLASS */)])])]), _hoisted_56, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "on:Change": _cache[16] || (_cache[16] = function () {
      return $options.changeButtonStyle && $options.changeButtonStyle.apply($options, arguments);
    }),
    id: "radio16",
    checked: "",
    type: "radio",
    name: "radio1",
    value: "both"
  }, null, 32 /* HYDRATE_EVENTS */), _hoisted_64]), _hoisted_65])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "on:Change": _cache[17] || (_cache[17] = function () {
      return $options.changeButtonStyle && $options.changeButtonStyle.apply($options, arguments);
    }),
    id: "radio15",
    type: "radio",
    name: "radio1",
    value: "circle"
  }, null, 32 /* HYDRATE_EVENTS */), _hoisted_70]), _hoisted_71])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_72, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_74, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_75, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "on:Change": _cache[18] || (_cache[18] = function () {
      return $options.changeButtonStyle && $options.changeButtonStyle.apply($options, arguments);
    }),
    id: "radio17",
    type: "radio",
    name: "radio1",
    value: "square"
  }, null, 32 /* HYDRATE_EVENTS */), _hoisted_76]), _hoisted_77])])])])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/BuilderContentComponent.vue?vue&type=template&id=66e3351e&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/BuilderContentComponent.vue?vue&type=template&id=66e3351e&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-66e3351e"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  key: 0,
  "class": "element-container"
};
var _hoisted_2 = {
  "class": "pricing-plan element-inner-container"
};
var _hoisted_3 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "pricing-plan-header"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-align-justify handle"
  })], -1 /* HOISTED */);
});
var _hoisted_4 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row"
  }, null, -1 /* HOISTED */);
});
var _hoisted_5 = {
  "class": "pricing-container"
};
var _hoisted_6 = {
  "class": "row"
};
var _hoisted_7 = {
  "class": "col-2 mt-3"
};
var _hoisted_8 = {
  "class": "mb-3 font-icon"
};
var _hoisted_9 = ["innerHTML"];
var _hoisted_10 = {
  "class": "col-7"
};
var _hoisted_11 = {
  key: 0
};
var _hoisted_12 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-unlink"
  }, null, -1 /* HOISTED */);
});
var _hoisted_13 = ["href"];
var _hoisted_14 = {
  key: 1
};
var _hoisted_15 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-divider"
  }, null, -1 /* HOISTED */);
});
var _hoisted_16 = {
  key: 2
};
var _hoisted_17 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-mail"
  }, null, -1 /* HOISTED */);
});
var _hoisted_18 = {
  key: 3
};
var _hoisted_19 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-phone"
  }, null, -1 /* HOISTED */);
});
var _hoisted_20 = {
  key: 4
};
var _hoisted_21 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-code"
  }, null, -1 /* HOISTED */);
});
var _hoisted_22 = {
  key: 5
};
var _hoisted_23 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "icofont icofont-question-circle"
  }, null, -1 /* HOISTED */);
});
var _hoisted_24 = {
  key: 7
};
var _hoisted_25 = {
  "class": "row justify-content-center"
};
var _hoisted_26 = {
  key: 8
};
var _hoisted_27 = {
  "class": "row justify-content-center"
};
var _hoisted_28 = {
  key: 10
};
var _hoisted_29 = {
  key: 0
};
var _hoisted_30 = {
  key: 1
};
var _hoisted_31 = {
  "class": "col-2"
};
var _hoisted_32 = ["onClick"];
var _hoisted_33 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "text-danger icofont icofont-ui-delete lead"
  }, null, -1 /* HOISTED */);
});
var _hoisted_34 = [_hoisted_33];
var _hoisted_35 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "bg-img",
    src: "assets/images/dashboard/folder.png",
    alt: ""
  }, null, -1 /* HOISTED */);
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_location_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("location-view");
  var _component_image_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("image-view");
  var _component_social_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("social-view");
  var _component_draggable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("draggable");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li class=\"item\" v-if=\"loading\">\n         <div class=\"col-sm-12 col-md-12\" >\n            <div class=\"loader-box\">\n               <div class=\"loader-19\"></div>\n            </div>\n         </div>\n      </li> "), $data.items ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_draggable, {
    animation: "400",
    modelValue: $data.items,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.items = $event;
    }),
    onStart: _cache[4] || (_cache[4] = function ($event) {
      return $data.drag = true;
    }),
    onEnd: _cache[5] || (_cache[5] = function ($event) {
      return $data.drag = false;
    }),
    "item-key": "id",
    handle: ".handle"
  }, {
    item: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
      var element = _ref.element;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
        "class": "item",
        onDragstart: _cache[0] || (_cache[0] = function () {
          return $options.dragStartHandler && $options.dragStartHandler.apply($options, arguments);
        }),
        onDragend: _cache[1] || (_cache[1] = function () {
          return $options.dragEndHandler && $options.dragEndHandler.apply($options, arguments);
        }),
        onDrag: _cache[2] || (_cache[2] = function () {
          return $options.dragHandler && $options.dragHandler.apply($options, arguments);
        })
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        innerHTML: _ctx.$filters.elementType(element.element_type)
      }, null, 8 /* PROPS */, _hoisted_9)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(element.element_type), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(element.name), 1 /* TEXT */), element.element_type == 'link' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        target: "_blank",
        href: element.value
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(element.value), 9 /* TEXT, PROPS */, _hoisted_13)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), element.element_type == 'divider' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(element.value), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), element.element_type == 'mail' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(element.value), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), element.element_type == 'phone' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(element.value), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), element.element_type == 'html' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(element.name), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), element.element_type == 'question' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(element.value), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), element.element_type == 'location' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_location_view, {
        key: 6,
        "class": "component-margin",
        location: element
      }, null, 8 /* PROPS */, ["location"])) : element.element_type == 'image' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_image_view, {
        image: element.value
      }, null, 8 /* PROPS */, ["image"])])])) : element.element_type == 'avatar' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_image_view, {
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)("width:".concat(element.size, "px; height:").concat(element.size, "px; border:").concat(element.border, "px;")),
        round: true,
        image: element.value
      }, null, 8 /* PROPS */, ["style", "image"])])])) : element.element_type == 'social' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_social_view, {
        key: 9,
        social: element.value
      }, null, 8 /* PROPS */, ["social"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_28, [element.element_type == 'heading' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h5", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(element.value), 1 /* TEXT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(element.value), 1 /* TEXT */))]))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <a role=\"button\" @click=\"editElement(element)\">\n                              <i  class=\"text-primary icofont icofont-ui-edit lead \"></i>\n                              </a> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" | "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        role: "button",
        onClick: function onClick($event) {
          return $options.deleteElement(element);
        }
      }, _hoisted_34, 8 /* PROPS */, _hoisted_32)])]), _hoisted_35])])], 32 /* HYDRATE_EVENTS */)];
    }),

    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "drag-preview",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(_ctx.dragStyle),
    ref: "dragPreview"
  }, null, 4 /* STYLE */)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/PhoneElementsComponent.vue?vue&type=template&id=2edb982e":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/PhoneElementsComponent.vue?vue&type=template&id=2edb982e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["state"];
var _hoisted_2 = {
  key: 0
};
var _hoisted_3 = {
  key: 1,
  style: {
    "text-align": "center"
  }
};
var _hoisted_4 = {
  key: 2,
  "class": "text-center component-margin"
};
var _hoisted_5 = {
  key: 3,
  "class": "text-center component-margin"
};
var _hoisted_6 = {
  key: 4,
  "class": "component-margin"
};
var _hoisted_7 = {
  key: 5,
  "class": "component-margin"
};
var _hoisted_8 = ["href"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;
  var _component_account_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("account-component");
  var _component_divider_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("divider-view");
  var _component_quote_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("quote-view");
  var _component_social_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("social-view");
  var _component_image_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("image-view");
  var _component_html_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("html-view");
  var _component_location_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("location-view");
  var _component_spotify_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("spotify-view");
  var _component_youtube_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("youtube-view");
  var _component_paypal_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("paypal-view");
  var _component_soundcloud_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("soundcloud-view");
  var _component_branding_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("branding-component");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.returnStyle)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_account_component, {
    account: $data.user,
    "class": "component-margin"
  }, null, 8 /* PROPS */, ["account"]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.items, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: item.id,
      state: $options.appearanceStyle
    }, [item.element_type == 'heading' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h1", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.value), 1 /* TEXT */)) : item.element_type == 'text' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.value), 1 /* TEXT */)) : item.element_type == 'mail' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        borderRadius: _this.appearance.style.button_style + 'px'
      }),
      "class": "btn btn-primary-gradien mb-2"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.value), 5 /* TEXT, STYLE */)])) : item.element_type == 'phone' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        borderRadius: _this.appearance.style.button_style + 'px'
      }),
      "class": "btn btn-secondary-gradien mb-2"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.value), 5 /* TEXT, STYLE */)])) : item.element_type == 'question' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.value), 1 /* TEXT */)) : item.element_type == 'link' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      "class": "link-element",
      target: "_blank",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        color: _this.appearance.style.font_color
      }),
      href: item.value
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 13 /* TEXT, STYLE, PROPS */, _hoisted_8)])) : item.element_type == 'divider' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_divider_view, {
      key: 6,
      "class": "component-margin",
      divider: item.value
    }, null, 8 /* PROPS */, ["divider"])) : item.element_type == 'quote' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_quote_view, {
      key: 7,
      "class": "component-margin",
      quote: item.value
    }, null, 8 /* PROPS */, ["quote"])) : item.element_type == 'social' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_social_view, {
      key: 8,
      "class": "component-margin",
      color: _this.appearance.style.font_color,
      social: item.value
    }, null, 8 /* PROPS */, ["color", "social"])) : item.element_type == 'image' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_image_view, {
      key: 9,
      "class": "component-margin",
      image: item.value
    }, null, 8 /* PROPS */, ["image"])) : item.element_type == 'avatar' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_image_view, {
      key: 10,
      "class": "component-margin",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)("width:".concat(item.size, "px; height:").concat(item.size, "px; border:").concat(item.border, "px;")),
      round: true,
      image: item.value
    }, null, 8 /* PROPS */, ["style", "image"])) : item.element_type == 'html' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_html_view, {
      key: 11,
      "class": "component-margin",
      html: item.value
    }, null, 8 /* PROPS */, ["html"])) : item.element_type == 'location' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_location_view, {
      key: 12,
      "class": "component-margin",
      color: _this.appearance.style.font_color,
      location: item
    }, null, 8 /* PROPS */, ["color", "location"])) : item.element_type == 'spotify' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_spotify_view, {
      key: 13,
      "class": "component-margin",
      spotify: item
    }, null, 8 /* PROPS */, ["spotify"])) : item.element_type == 'youtube' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_youtube_view, {
      key: 14,
      "class": "component-margin",
      youtube: item
    }, null, 8 /* PROPS */, ["youtube"])) : item.element_type == 'paypal' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_paypal_view, {
      key: 15,
      "class": "component-margin",
      paypal: item
    }, null, 8 /* PROPS */, ["paypal"])) : item.element_type == 'soundcloud' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_soundcloud_view, {
      key: 16,
      "class": "component-margin",
      soundcloud: item
    }, null, 8 /* PROPS */, ["soundcloud"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_1);
  }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_branding_component, {
    branding: this.branding,
    "class": "component-margin"
  }, null, 8 /* PROPS */, ["branding"])], 4 /* STYLE */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/SettingsComponent.vue?vue&type=template&id=5490cab9":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/SettingsComponent.vue?vue&type=template&id=5490cab9 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"card-header pb-0\"><h5>Choose Branding</h5></div><div class=\"card-body\"><div class=\"row\"><div class=\"media\"><label class=\"col-form-label\">Show Branding</label><div class=\"media-body text-end icon-state\"></div></div></div></div>", 2);
var _hoisted_3 = [_hoisted_1];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, _hoisted_3);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/ThemesComponent.vue?vue&type=template&id=6c23c032":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/ThemesComponent.vue?vue&type=template&id=6c23c032 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-header pb-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Choose Branding")], -1 /* HOISTED */);
var _hoisted_2 = ["state"];
var _hoisted_3 = {
  "class": "card-body"
};
var _hoisted_4 = {
  "class": "row"
};
var _hoisted_5 = {
  "class": "media"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label"
}, "Show Branding", -1 /* HOISTED */);
var _hoisted_7 = {
  "class": "media-body text-end icon-state"
};
var _hoisted_8 = {
  "class": "switch"
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "switch-state"
}, null, -1 /* HOISTED */);
var _hoisted_10 = {
  "class": "row"
};
var _hoisted_11 = {
  "class": "col"
};
var _hoisted_12 = {
  "class": "mb-3"
};
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "exampleFormControlInput1"
}, "Branding Name", -1 /* HOISTED */);
var _hoisted_14 = {
  "class": "row"
};
var _hoisted_15 = {
  "class": "col"
};
var _hoisted_16 = {
  "class": "mb-3"
};
var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "exampleFormControlInput1"
}, "Branding URL", -1 /* HOISTED */);
var _hoisted_18 = {
  "class": "row"
};
var _hoisted_19 = {
  "class": "col"
};
var _hoisted_20 = {
  "class": "mb-3"
};
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "exampleFormControlInput1"
}, "Text Color", -1 /* HOISTED */);
var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-header pb-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Choose Font")], -1 /* HOISTED */);
var _hoisted_23 = {
  "class": "card-body"
};
var _hoisted_24 = {
  "class": "row"
};
var _hoisted_25 = {
  "class": "row"
};
var _hoisted_26 = {
  "class": "col"
};
var _hoisted_27 = {
  "class": "mb-3"
};
var _hoisted_28 = ["value"];
var _hoisted_29 = {
  "class": "row"
};
var _hoisted_30 = {
  "class": "col"
};
var _hoisted_31 = {
  "class": "mb-3"
};
var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "exampleFormControlInput1"
}, "Font Size", -1 /* HOISTED */);
var _hoisted_33 = ["state"];
var _hoisted_34 = {
  key: 0,
  "class": "invalid-feedback"
};
var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-header pb-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Choose Protection")], -1 /* HOISTED */);
var _hoisted_36 = {
  "class": "card-body"
};
var _hoisted_37 = {
  "class": "row"
};
var _hoisted_38 = {
  "class": "col"
};
var _hoisted_39 = {
  "class": "mb-3"
};
var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "exampleFormControlInput1"
}, "Password", -1 /* HOISTED */);
var _hoisted_41 = {
  "class": "row"
};
var _hoisted_42 = {
  "class": "media"
};
var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label"
}, "Sensitive Content Warning", -1 /* HOISTED */);
var _hoisted_44 = {
  "class": "media-body text-end icon-state"
};
var _hoisted_45 = {
  "class": "switch"
};
var _hoisted_46 = ["checked"];
var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "switch-state"
}, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    state: $options.saveBranding
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _this.branding.active = $event;
    }),
    checked: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, this.branding.active]]), _hoisted_9])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return _this.branding.name = $event;
    }),
    id: "exampleFormControlInput1",
    type: "text",
    placeholder: "Zeta"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, this.branding.name]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return _this.branding.url = $event;
    }),
    id: "exampleFormControlInput1",
    type: "url",
    placeholder: "www.zeta.com"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, this.branding.url]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return _this.branding.color = $event;
    }),
    id: "exampleFormControlInput1",
    type: "color",
    placeholder: "Color Picker"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, this.branding.color]])])])])]), _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select digits",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.selectedFont = $event;
    }),
    name: "fontFamily",
    onChange: _cache[5] || (_cache[5] = function () {
      return $options.changeFont && $options.changeFont.apply($options, arguments);
    }),
    id: "fontFamily"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.fonts, function (font) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: font.id,
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        fontFamily: font.value
      }),
      value: font.value
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(font.name), 13 /* TEXT, STYLE, PROPS */, _hoisted_28);
  }), 128 /* KEYED_FRAGMENT */))], 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.selectedFont]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", "form-control ".concat($options.validateFontSize ? 'is-invalid' : '')]),
    state: $options.validateFontSize,
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return _this.branding.fontSize = $event;
    }),
    id: "exampleFormControlInput1",
    type: "number",
    placeholder: "Font Size"
  }, null, 10 /* CLASS, PROPS */, _hoisted_33), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, this.branding.fontSize]]), $options.validateFontSize ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_34, "Font size must be 9-30 weight long.")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [_hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $props.branding.password = $event;
    }),
    id: "exampleFormControlInput1",
    type: "password",
    placeholder: "Password"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $props.branding.password]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [_hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $props.branding.sensitive_content = $event;
    }),
    checked: $props.branding.sensitive_content,
    onClick: _cache[9] || (_cache[9] = function () {
      return $options.setSensitive && $options.setSensitive.apply($options, arguments);
    })
  }, null, 8 /* PROPS */, _hoisted_46), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $props.branding.sensitive_content]]), _hoisted_47])])])])])], 8 /* PROPS */, _hoisted_2)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/profileBuilderComponent.vue?vue&type=template&id=1c0c406a&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/profileBuilderComponent.vue?vue&type=template&id=1c0c406a&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-1c0c406a"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "container-fluid"
};
var _hoisted_2 = {
  "class": "row test-color"
};
var _hoisted_3 = {
  "class": "col-md-12 project-list"
};
var _hoisted_4 = {
  "class": "card"
};
var _hoisted_5 = {
  "class": "row"
};
var _hoisted_6 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-md-6 p-0"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
    "class": "nav nav-tabs border-tab",
    id: "top-tab",
    role: "tablist"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "nav-item"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "nav-link active",
    id: "top-home-tab",
    "data-bs-toggle": "tab",
    href: "#top-home",
    role: "tab",
    "aria-controls": "top-home",
    "aria-selected": "true"
  }, " Blocks ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "nav-item"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "nav-link",
    id: "profile-top-tab",
    "data-bs-toggle": "tab",
    href: "#top-profile",
    role: "tab",
    "aria-controls": "top-profile",
    "aria-selected": "false"
  }, " Appearance ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "nav-item"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "nav-link",
    id: "contact-top-tab",
    "data-bs-toggle": "tab",
    href: "#top-contact",
    role: "tab",
    "aria-controls": "top-contact",
    "aria-selected": "false"
  }, " Settings ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "nav-item"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "nav-link",
    id: "settings-top-tab",
    "data-bs-toggle": "tab",
    href: "#top-settings",
    role: "tab",
    "aria-controls": "top-settings",
    "aria-selected": "false"
  }, " Themes ")])])], -1 /* HOISTED */);
});
var _hoisted_7 = {
  "class": "col-md-6 p-0"
};
var _hoisted_8 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-pill btn-primary btn-air-primary"
  }, " Live Preview ", -1 /* HOISTED */);
});
var _hoisted_9 = {
  "class": "col-xl-7 col-md-12 box-col-12"
};
var _hoisted_10 = {
  "class": "md-sidebar-aside job-left-aside custom-scrollbar"
};
var _hoisted_11 = {
  "class": "file-sidebar"
};
var _hoisted_12 = {
  "class": "card"
};
var _hoisted_13 = {
  "class": "tab-content",
  id: "top-tabContent"
};
var _hoisted_14 = {
  "class": "tab-pane fade active show",
  id: "top-home",
  role: "tabpanel",
  "aria-labelledby": "top-home-tab"
};
var _hoisted_15 = {
  "class": "card-body"
};
var _hoisted_16 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* HOISTED */);
});
var _hoisted_17 = {
  "class": "tab-pane fade",
  id: "top-profile",
  role: "tabpanel",
  "aria-labelledby": "top-home-tab"
};
var _hoisted_18 = {
  "class": "tab-pane fade",
  id: "top-contact",
  role: "tabpanel",
  "aria-labelledby": "top-home-tab"
};
var _hoisted_19 = {
  "class": "tab-pane fade",
  id: "top-settings",
  role: "tabpanel",
  "aria-labelledby": "top-home-tab"
};
var _hoisted_20 = {
  "class": "col-xl-5 col-md-12 box-col-12"
};
var _hoisted_21 = {
  "class": "card"
};
var _hoisted_22 = {
  "class": "mt-4 phone-element"
};
var _hoisted_23 = {
  "class": "modal fade",
  tabindex: "-1",
  role: "dialog",
  "aria-hidden": "true",
  id: "modal-example"
};
var _hoisted_24 = {
  "class": "modal-dialog modal-lg"
};
var _hoisted_25 = {
  "class": "modal-content"
};
var _hoisted_26 = {
  "class": "modal-header"
};
var _hoisted_27 = {
  "class": "modal-title"
};
var _hoisted_28 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-chevron-circle-left mr-4"
  }, null, -1 /* HOISTED */);
});
var _hoisted_29 = [_hoisted_28];
var _hoisted_30 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn-close",
    type: "button",
    "data-bs-dismiss": "modal",
    "aria-label": "Close"
  }, null, -1 /* HOISTED */);
});
var _hoisted_31 = {
  "class": "modal-body",
  style: {
    "background-color": "#f4f6fd"
  }
};
var _hoisted_32 = {
  "class": "col-12"
};
var _hoisted_33 = {
  "class": "card-body pt-0"
};
var _hoisted_34 = {
  key: 0
};
var _hoisted_35 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* HOISTED */);
});
var _hoisted_36 = {
  "class": "element-table"
};
var _hoisted_37 = {
  "class": "table-responsive custom-scrollbar"
};
var _hoisted_38 = {
  "class": "table table-bordernone"
};
var _hoisted_39 = {
  key: 0
};
var _hoisted_40 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "loader-box"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "loader-18"
  })])], -1 /* HOISTED */);
});
var _hoisted_41 = [_hoisted_40];
var _hoisted_42 = {
  "class": "element-inner-container"
};
var _hoisted_43 = ["onClick"];
var _hoisted_44 = {
  "class": "media"
};
var _hoisted_45 = ["innerHTML"];
var _hoisted_46 = {
  "class": "media-body"
};
var _hoisted_47 = {
  "class": "m-0"
};
var _hoisted_48 = {
  key: 2
};
var _hoisted_49 = {
  "class": "col"
};
var _hoisted_50 = {
  "class": "alert alert-light inverse alert-dismissible fade show",
  role: "alert"
};
var _hoisted_51 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "icon-alert txt-dark"
  }, null, -1 /* HOISTED */);
});
var _hoisted_52 = {
  key: 1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;
  var _component_Breadcrumb = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Breadcrumb");
  var _component_builder_content = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("builder-content");
  var _component_appearance = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("appearance");
  var _component_themes = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("themes");
  var _component_settings = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("settings");
  var _component_phone_elements_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("phone-elements-component");
  var _component_link_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("link-component");
  var _component_text_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("text-component");
  var _component_heading_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("heading-component");
  var _component_image_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("image-component");
  var _component_social_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("social-component");
  var _component_video_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("video-component");
  var _component_quote = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("quote");
  var _component_avatar_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("avatar-component");
  var _component_divider_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("divider-component");
  var _component_html_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("html-component");
  var _component_location_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("location-component");
  var _component_spotify_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("spotify-component");
  var _component_question_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("question-component");
  var _component_youtube_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("youtube-component");
  var _component_mail_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("mail-component");
  var _component_phone_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("phone-component");
  var _component_paypal_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("paypal-component");
  var _component_soundcloud_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("soundcloud-component");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Breadcrumb, {
    active_name: "Profile Builder",
    items: [{
      name: 'Links',
      link: '/bio-links'
    }]
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "mr-4 btn btn-pill btn-success btn-air-success",
    style: {
      "margin-right": "10px"
    },
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.onSubmit && $options.onSubmit.apply($options, arguments);
    })
  }, " Save ")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-pill btn-primary btn-air-primary",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.openModal && $options.openModal.apply($options, arguments);
    })
  }, " Create New Block "), _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Builder "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_builder_content, {
    "class": "element-container",
    items: $data.current_blocks,
    onEditElement: _cache[2] || (_cache[2] = function ($event) {
      return $options.editElement($event);
    }),
    onSetItems: _cache[3] || (_cache[3] = function ($event) {
      return $options.setBlockItems($event);
    })
  }, null, 8 /* PROPS */, ["items"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Appearance "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_appearance, {
    user: this.user,
    onChangeFontColor: _cache[4] || (_cache[4] = function ($event) {
      return $options.changeFontColor($event);
    }),
    onChangeAnimatedBackground: _cache[5] || (_cache[5] = function ($event) {
      return $options.changeColor($event);
    }),
    onChangeButtonStyle: $options.changeButtonStyle,
    onChangeFontStyle: _cache[6] || (_cache[6] = function ($event) {
      return $options.changeFontStyle($event);
    }),
    onChangeFont: _cache[7] || (_cache[7] = function ($event) {
      return $options.changeFont($event);
    }),
    appearance: $data.appearance,
    fonts: $data.fonts,
    bg_colors: $data.bg_colors,
    font_colors: $data.font_colors,
    onChangeColor: _cache[8] || (_cache[8] = function ($event) {
      return $options.changeColor($event);
    })
  }, null, 8 /* PROPS */, ["user", "onChangeButtonStyle", "appearance", "fonts", "bg_colors", "font_colors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Themees "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_themes, {
    branding: this.branding
  }, null, 8 /* PROPS */, ["branding"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Settings "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_settings)])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["iphone-x", this.background_color.type == 'animated' ? this.background_color.primary : 'iphone-background'])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_phone_elements_component, {
    branding: this.branding,
    button_style: this.button_style,
    appearance: $data.appearance,
    font_color: _ctx.font_color,
    font: _ctx.font,
    font_style: _ctx.font_style,
    items: $data.current_blocks
  }, null, 8 /* PROPS */, ["branding", "button_style", "appearance", "font_color", "font", "font_style", "items"])])], 2 /* CLASS */)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ADD NEW BLOCK START"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-pill btn-primary btn-air-primary",
    type: "button",
    onClick: _cache[9] || (_cache[9] = function () {
      _this.elementClicked = false;
    })
  }, _hoisted_29, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.elementClicked]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add a " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.elementClickedType ? $data.elementClickedType + ' block' : 'new block'), 1 /* TEXT */)]), _hoisted_30]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [!$data.elementClicked ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    id: "url",
    type: "search",
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $data.query = $event;
    }),
    onKeyup: _cache[11] || (_cache[11] = function () {
      return $options.searchQuery && $options.searchQuery.apply($options, arguments);
    }),
    placeholder: "Search Block"
  }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.query]]), _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [$data.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_39, _hoisted_41)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.elements, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: item.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      onClick: function onClick($event) {
        return $options.selectedElement(item.element_type);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      innerHTML: _ctx.$filters.elementType(item.element_type)
    }, null, 8 /* PROPS */, _hoisted_45), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.description) + "...", 1 /* TEXT */)])])], 8 /* PROPS */, _hoisted_43)])]);
  }), 128 /* KEYED_FRAGMENT */)), $data.elements.length < 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [_hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Not found any block \"" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.query) + "\" in the list", 1 /* TEXT */)])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_link_component, {
    onSubmitLink: _cache[12] || (_cache[12] = function ($event) {
      return $options.getLink($event);
    }),
    link_value: $data.current_element
  }, null, 8 /* PROPS */, ["link_value"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.elementClickedType == 'link']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_text_component, {
    onSubmitText: _cache[13] || (_cache[13] = function ($event) {
      return $options.getText($event);
    }),
    text_value: $data.items.text
  }, null, 8 /* PROPS */, ["text_value"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.elementClickedType == 'text']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_heading_component, {
    onSubmitText: _cache[14] || (_cache[14] = function ($event) {
      return $options.getHeading($event);
    }),
    heading_value: $data.items.text
  }, null, 8 /* PROPS */, ["heading_value"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.elementClickedType == 'heading']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_image_component, {
    onSubmitImage: _cache[15] || (_cache[15] = function ($event) {
      return $options.getImage($event);
    }),
    image_value: $data.items.image
  }, null, 8 /* PROPS */, ["image_value"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.elementClickedType == 'image']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_social_component, {
    onSubmitSocial: _cache[16] || (_cache[16] = function ($event) {
      return $options.getSocial($event);
    }),
    social_value: $data.items.image
  }, null, 8 /* PROPS */, ["social_value"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.elementClickedType == 'social']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_video_component, {
    onSubmitVideo: _cache[17] || (_cache[17] = function ($event) {
      return $options.getVideoLink($event);
    }),
    video_value: $data.items.video_link
  }, null, 8 /* PROPS */, ["video_value"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.elementClickedType == 'video']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_quote, {
    onSubmitQuote: _cache[18] || (_cache[18] = function ($event) {
      return $options.getQuote($event);
    }),
    quote_value: $data.items.quote
  }, null, 8 /* PROPS */, ["quote_value"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.elementClickedType == 'quote']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_avatar_component, {
    onSubmitAvatar: _cache[19] || (_cache[19] = function ($event) {
      return $options.getAvatar($event);
    }),
    avatar_value: $data.items.image
  }, null, 8 /* PROPS */, ["avatar_value"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.elementClickedType == 'avatar']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_divider_component, {
    onSubmitDivider: _cache[20] || (_cache[20] = function ($event) {
      return $options.getDivider($event);
    }),
    divider_value: $data.items
  }, null, 8 /* PROPS */, ["divider_value"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.elementClickedType == 'divider']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_html_component, {
    onSubmitHtml: _cache[21] || (_cache[21] = function ($event) {
      return $options.getHTML($event);
    }),
    html_value: $data.items.value
  }, null, 8 /* PROPS */, ["html_value"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.elementClickedType == 'html']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_location_component, {
    onSubmitLocation: _cache[22] || (_cache[22] = function ($event) {
      return $options.getLocation($event);
    }),
    location_value: $data.items
  }, null, 8 /* PROPS */, ["location_value"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.elementClickedType == 'location']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_spotify_component, {
    onSubmitSpotify: _cache[23] || (_cache[23] = function ($event) {
      return $options.getSpotify($event);
    }),
    spotify_value: $data.items.value
  }, null, 8 /* PROPS */, ["spotify_value"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.elementClickedType == 'spotify']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_question_component, {
    onSubmitQuestion: _cache[24] || (_cache[24] = function ($event) {
      return $options.getQuestion($event);
    }),
    question_value: $data.items.value
  }, null, 8 /* PROPS */, ["question_value"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.elementClickedType == 'question']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_youtube_component, {
    onSubmitYoutube: _cache[25] || (_cache[25] = function ($event) {
      return $options.getYoutube($event);
    }),
    youtube: $data.items.value
  }, null, 8 /* PROPS */, ["youtube"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.elementClickedType == 'youtube']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_mail_component, {
    onSubmitMail: _cache[26] || (_cache[26] = function ($event) {
      return $options.getMail($event);
    }),
    mail: $data.items.value
  }, null, 8 /* PROPS */, ["mail"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.elementClickedType == 'mail']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_phone_component, {
    onSubmitPhone: _cache[27] || (_cache[27] = function ($event) {
      return $options.getPhone($event);
    }),
    phone: $data.items.value
  }, null, 8 /* PROPS */, ["phone"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.elementClickedType == 'phone']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_paypal_component, {
    onSubmitPaypal: _cache[28] || (_cache[28] = function ($event) {
      return $options.getPaypal($event);
    }),
    paypal: $data.items.value
  }, null, 8 /* PROPS */, ["paypal"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.elementClickedType == 'paypal']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_soundcloud_component, {
    onSubmitSoundcloud: _cache[29] || (_cache[29] = function ($event) {
      return $options.getSoundcloud($event);
    }),
    soundcloud: $data.items.value
  }, null, 8 /* PROPS */, ["soundcloud"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.elementClickedType == 'soundcloud']])]))])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ADD NEW BLOCK END")], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/elements/bgcolors.js":
/*!*********************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/elements/bgcolors.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bgColors": () => (/* binding */ bgColors)
/* harmony export */ });
var bgColors = [{
  name: "green",
  primary: "#1d97ff",
  type: 'solid'
}, {
  name: "Black",
  primary: "#000000",
  type: 'solid'
}, {
  name: "Animated 1",
  primary: "animated-bg-one",
  secondary: "animated-bg-one",
  animation: 'gradient 15s ease infinite',
  type: 'animated'
}, {
  name: "Animated 2",
  primary: "#33CCCC",
  secondary: "#33CCCC",
  animation: 'color 9s infinite linear',
  type: 'animated'
}, {
  name: "Animated 3",
  primary: "snow",
  secondary: "snow",
  animation: 'snow 3s linear infinite',
  type: 'animated'
}, {
  name: "Animated 4",
  primary: "animated-bg-four",
  secondary: "animated-bg-four",
  animation: 'gradient 15s ease infinite',
  type: 'animated'
}, {
  name: "Animated 5",
  primary: " animated-bg-five",
  secondary: "animated-bg-five",
  animation: 'scroll 70s linear infinite',
  type: 'animated'
}, {
  name: "Image",
  primary: "#1d97ff",
  type: 'image'
}, {
  name: "Dusty Grass",
  primary: "#d4fc79",
  secondary: "#96e6a1",
  type: 'gradient'
}, {
  name: "Sand to Blue",
  primary: "#DECBA4",
  secondary: "#3E5151",
  type: 'gradient'
}, {
  name: "test",
  primary: "#1e2f65",
  secondary: "#a1d9d6",
  type: 'gradient'
}, {
  name: "Kye Meh",
  primary: "#8360c3",
  secondary: "#2ebf91",
  type: 'gradient'
}, {
  name: "Amin",
  primary: "#8e2de2",
  secondary: "#4a00e0",
  type: 'gradient'
}, {
  name: "Relaxing Red",
  primary: "#fffbd5",
  secondary: "#b20a2c"
}, {
  name: "Sublime Light",
  primary: "#fc5c7d",
  secondary: "#6a82fb",
  type: 'gradient'
}, {
  name: "Megatron",
  primary: "#c6ffdd",
  secondary: "#f7797d",
  type: 'gradient'
}, {
  name: "Blue Raspberry",
  primary: "#00b4db",
  secondary: "#0083b0",
  type: 'gradient'
}, {
  name: "Premium Dark",
  primary: "#434343 ",
  secondary: "#000000",
  type: 'gradient'
}, {
  name: "Crystalline",
  primary: "#00cdac ",
  secondary: "#8ddad5 ",
  type: 'gradient'
}, {
  name: "Lawrencium",
  primary: "#0f0c29",
  secondary: "#302b63",
  type: 'gradient'
}];

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/elements/elements.js":
/*!*********************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/elements/elements.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elementsItems": () => (/* binding */ elementsItems)
/* harmony export */ });
var elementsItems = [{
  id: 1,
  name: 'Link',
  element_type: 'link',
  description: 'This element is used to',
  icon: 'fas fa-link'
}, {
  id: 1,
  name: 'Heading',
  element_type: 'heading',
  description: 'This element is used to',
  icon: 'fas fa-heading'
}, {
  id: 3,
  name: 'Avatar',
  element_type: 'avatar',
  description: 'This element is used to',
  icon: 'fas fa-image'
}, {
  id: 2,
  name: 'Text',
  element_type: 'text',
  description: 'This element is used to',
  icon: 'fas fa-paragraph'
}, {
  id: 3,
  name: 'Image',
  element_type: 'image',
  description: 'This element is used to',
  icon: 'fas fa-image'
},
// { id:4, name: 'Button', element_type: 'button', description: 'This element is used to', icon: 'fas fa-button' },
{
  id: 5,
  name: 'Video',
  element_type: 'video',
  description: 'This element is used to',
  icon: 'fas fa-video'
},
// { id:6, name: 'Music', element_type: 'music', description: 'This element is used to', icon: 'fas fa-audio' },
{
  id: 7,
  name: 'Social',
  element_type: 'social',
  description: 'This element is used to',
  icon: 'fas fa-quote-right'
}, {
  id: 9,
  name: 'Quote',
  element_type: 'quote',
  description: 'This element is used to',
  icon: 'fas fa-quote-right'
}, {
  id: 10,
  name: 'Divider',
  element_type: 'divider',
  description: 'This element is used to',
  icon: 'fas fa-divider'
},
// { id:11, name: 'Html', element_type: 'html', description: 'This element is used to', icon: 'fas fa-html' },
{
  id: 12,
  name: 'Location',
  element_type: 'location',
  description: 'This element is used to',
  icon: 'fas fa-map'
}, {
  id: 13,
  name: 'Spotify',
  element_type: 'spotify',
  description: 'This element is used to',
  icon: 'fas fa-spotify'
}, {
  id: 14,
  name: 'Mail',
  element_type: 'mail',
  description: 'This element is used to',
  icon: 'fas fa-mail'
},
// { id:15, name: 'Question', element_type: 'question', description: 'This element is used to', icon: 'fas fa-question' },
{
  id: 16,
  name: 'Youtube',
  element_type: 'youtube',
  description: 'This element is used to',
  icon: 'fas fa-youtube'
}, {
  id: 17,
  name: 'Phone',
  element_type: 'phone',
  description: 'This element is used to',
  icon: 'fas fa-phone'
},
// { id:18, name: 'Vimeo', element_type: 'vimeo', description: 'This element is used to', icon: 'fas fa-vimeo' },
{
  id: 19,
  name: 'Soundcloud',
  element_type: 'soundcloud',
  description: 'This element is used to',
  icon: 'fas fa-soundcloud'
}, {
  id: 20,
  name: 'Paypal',
  element_type: 'paypal',
  description: 'This element is used to',
  icon: 'fas fa-paypal'
}];

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/elements/fontcolors.js":
/*!***********************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/elements/fontcolors.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./resources/ts/vue/backend/pages/builder/elements/fonts.js":
/*!******************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/elements/fonts.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fonts": () => (/* binding */ fonts)
/* harmony export */ });
var fonts = [{
  name: "Karla",
  value: "'Karla', sans-serif"
}, {
  name: "Montserrat",
  value: "'Montserrat', sans-serif"
}, {
  name: "Nutino",
  value: "'Nunito', sans-serif"
}, {
  name: "Open Sans",
  value: "'Open Sans', sans-serif"
}, {
  name: "Poppins",
  value: "'Poppins', sans-serif"
}, {
  name: "Quicksand",
  value: "'Quicksand', sans-serif"
}, {
  name: "Roboto",
  value: "'Roboto', sans-serif"
}, {
  name: "Source Sans Pro",
  value: "'Source Sans Pro', sans-serif"
}];

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/AccountViewComponent.vue?vue&type=style&index=0&id=d90dafee&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/AccountViewComponent.vue?vue&type=style&index=0&id=d90dafee&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.userpro-box {\r\n    background-color: transparent;\r\n    padding: 30px;\r\n    max-width: 380px;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    text-align: center\n}\n.userpro-box .img-wrraper {\r\n    position: relative;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin: auto\n}\n.userpro-box .avatar {\r\n    width: 100px;\r\n    height: 100px;\r\n    max-width: 155px;\r\n    max-height: 155px;\r\n    border-radius: 50%;\r\n    overflow: hidden;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    border: 7px solid rgba(99, 98, 231, 0.08);\r\n    margin-bottom: 15px\n}\n.userpro-box .avatar img {\r\n    width: 100%;\r\n    height: 100%\n}\n.userpro-box .icon-wrapper {\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 30px;\r\n    width: 30px;\r\n    border-radius: 50%;\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n    margin: 0 auto;\r\n    font-size: 17px;\r\n    box-shadow: 0 0 6px 3px rgba(68, 102, 242, 0.1)\n}\n.userpro-box .icon-wrapper i {\r\n    color: #6362e7\n}\n.userpro-box h4 {\r\n    color: #242934;\r\n    font-weight: 600;\r\n    font-size: 20px\n}\n.userpro-box h6 {\r\n    font-size: 14px;\r\n    text-transform: uppercase;\r\n    color: #999;\r\n    margin-bottom: 15px\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/AvatarComponent.vue?vue&type=style&index=0&id=269c5c36&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/AvatarComponent.vue?vue&type=style&index=0&id=269c5c36&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\ninput#file[data-v-269c5c36] {\n   display: inline-block;\n   width: 100%;\n   padding: 120px 0 0 0;\n   height: 100px;\n   overflow: hidden;\n   box-sizing: border-box;\n   background: url(\"https://cdn1.iconfinder.com/data/icons/hawcons/32/698394-icon-130-cloud-upload-512.png\")\n   center center no-repeat #e4e4e4;\n   border-radius: 20px;\n   background-size: 60px 60px;\n   border: 2px dashed #4049ff;\n}\n.square img[data-v-269c5c36] {\n   width: 100%;\n   padding: 16px;\n   border-radius: 20px;\n}\n\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/BrandingComponent.vue?vue&type=style&index=0&id=f7b11958&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/BrandingComponent.vue?vue&type=style&index=0&id=f7b11958&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.sidebar-img-section {\r\n  max-width: 250px;\r\n  width: 250px;\r\n  margin: 0 auto;\n}\n.centered-button{\r\n  transform: translateY(-50%);\r\n  margin-top: 30px;\r\n    margin-bottom: 20px;\n}\r\n\r\n/* BRANDING BUTTON  */\n.glow-on-hover {\r\n  width: 220px;\r\n  height: 50px;\r\n  border: none;\r\n  outline: none;\r\n  color: #fff;\r\n  background: #111;\r\n  cursor: pointer;\r\n  position: relative;\r\n  z-index: 0;\r\n  border-radius: 10px;\n}\n.glow-on-hover:before {\r\n  content: '';\r\n  background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);\r\n  position: absolute;\r\n  top: -2px;\r\n  left:-2px;\r\n  background-size: 400%;\r\n  z-index: -1;\r\n  filter: blur(5px);\r\n  width: calc(100% + 4px);\r\n  height: calc(100% + 4px);\r\n  animation: glowing 20s linear infinite;\r\n  opacity: 0;\r\n  transition: opacity .3s ease-in-out;\r\n  border-radius: 10px;\n}\n.glow-on-hover:active {\r\n  color: #000\n}\n.glow-on-hover:active:after {\r\n  background: transparent;\n}\n.glow-on-hover:hover:before {\r\n  opacity: 1;\n}\n.glow-on-hover:after {\r\n  z-index: -1;\r\n  content: '';\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #111;\r\n  left: 0;\r\n  top: 0;\r\n  border-radius: 10px;\n}\n@keyframes glowing {\n0% { background-position: 0 0;\n}\n50% { background-position: 400% 0;\n}\n100% { background-position: 0 0;\n}\n}\r\n\r\n/* END BRANDING BUTTON  */\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/ImageComponent.vue?vue&type=style&index=0&id=ff8b6f80&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/ImageComponent.vue?vue&type=style&index=0&id=ff8b6f80&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\ninput#file[data-v-ff8b6f80] {\r\n   display: inline-block;\r\n   width: 100%;\r\n   padding: 120px 0 0 0;\r\n   height: 100px;\r\n   overflow: hidden;\r\n   box-sizing: border-box;\r\n   background: url(\"https://cdn1.iconfinder.com/data/icons/hawcons/32/698394-icon-130-cloud-upload-512.png\")\r\n   center center no-repeat #e4e4e4;\r\n   border-radius: 20px;\r\n   background-size: 60px 60px;\r\n   border: 2px dashed #4049ff;\n}\n.square img[data-v-ff8b6f80] {\r\n   width: 100%;\r\n   padding: 16px;\r\n   border-radius: 20px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/ImageViewComponent.vue?vue&type=style&index=0&id=076c37ca&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/ImageViewComponent.vue?vue&type=style&index=0&id=076c37ca&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.round-circle[data-v-076c37ca] {\r\n  border-radius: 50%;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SocialViewComponent.vue?vue&type=style&index=0&id=62c7bd06&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SocialViewComponent.vue?vue&type=style&index=0&id=62c7bd06&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.icon-size{\r\n        font-size: 18px;\r\n        margin-top: 20px;\r\n        margin-bottom: 20px;\r\n        /* color: var(--bs-light); */\n}\n.social-set{\r\n    padding: 10px;\r\n    border-radius: 12px;\n}\n#social-test {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n  text-align: center;\r\n  font-size: 30px;\n}\n#social-test h2 {\r\n    color: #fff;\r\n    font-family: Futura, \"Trebuchet MS\", Arial, sans-serif;\r\n    font-weight: 100;\n}\n#social-test .social {\r\n    padding-left: 0px;\n}\n#social-test li {\r\n    color: rgba(167, 146, 129, 0.6);\r\n    list-style-type: none;\r\n    display: inline-block;\r\n    width: 30px;\r\n    height: 30px;\r\n    line-height: 15px;\r\n    padding: 1%;\r\n    border: 1px solid rgba(167, 146, 129, 0.4);\r\n    cursor: pointer;\r\n    margin-left: 10px;\r\n    margin-bottom: 20px;\r\n    transition: ease .3s;\n}\n#social-test .social:hover > li {\r\n  opacity: 0.5;\n}\n#social-test .social:hover > li:hover {\r\n  opacity: 1;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/AppearanceComponent.vue?vue&type=style&index=0&id=96de5350&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/AppearanceComponent.vue?vue&type=style&index=0&id=96de5350&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.active[data-v-96de5350]{\n    font-weight: bold;\n   box-shadow: 0 0 10px 2px var(--theme-deafult);\n\n   border-radius: 20px;\n}\n.active-bg[data-v-96de5350] {\n   font-weight: bold;\n   background-color: transparent;\n   box-shadow: 0 0 10px 2px var(--theme-deafult);\n   color:var(--theme-secondary);\n   border-radius: 20px;\n}\nlabel input[ type=\"file\" ][data-v-96de5350] {\n  display: none;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/BuilderContentComponent.vue?vue&type=style&index=0&id=66e3351e&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/BuilderContentComponent.vue?vue&type=style&index=0&id=66e3351e&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.sortable-ghost[data-v-66e3351e] {\n   border: 3px dashed var(--theme-deafult);\n   font-size: 0;\n   overflow: hidden;\n}\n.drag-preview[data-v-66e3351e] {\n   position: absolute;\n   transform: translateX(-10%) translateY(-10%) rotate(6deg) translateY(10%);\n}\n.handle[data-v-66e3351e] {\n   float: left;\n   padding-top: 8px;\n   padding-bottom: 8px;\n   cursor: move;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/profileBuilderComponent.vue?vue&type=style&index=0&id=1c0c406a&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/profileBuilderComponent.vue?vue&type=style&index=0&id=1c0c406a&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n   /* v-bind('colorFromScript') */\n*[data-v-1c0c406a]{\n   --phone-primary: var(--1c0c406a-background_color\\[\\\"primary\\\"\\]);\n   --phone-secondary:  var(--1c0c406a-background_color\\[\\\"secondary\\\"\\]);\n   --font-family: var(--1c0c406a-font);\n   --font-color: var(--1c0c406a-font_color);\n   --animation-color: var(--1c0c406a-background_color\\[\\\"animation\\\"\\]),\n   }\n.component-margin[data-v-1c0c406a]{\n   margin-bottom: 10px;\n   margin-top: 10px;\n}\n.iphone-background[data-v-1c0c406a]{\n   color:var(--font-color) !important;\n   font-family: var( --font-family) !important;\n   /* background-color: var(--phone-primary) !important; */\n    background:  var(--phone-primary) ; /* Fallback */\n   animation: var(--animation-color) !important ;\n\n   background-image: linear-gradient(200deg, var(--phone-primary) 1%, var(--phone-secondary) 100%) !important;\n   border-radius: 40px;\n   box-shadow: 0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 0px 0px 0px 20px #111;\n}\n.iphone-x[data-v-1c0c406a] {\n   overflow-y: scroll;\n   position: relative;\n   color:white;\n   margin: 40px auto;\n   width: 300px;\n   height: 600px;\n}\n.iphone-x i[data-v-1c0c406a] {\n   top: 0px;\n   left: 50%;\n   transform: translate(-50%, 6px);\n   height: 8px;\n   box-shadow: 0 0 10px var(--theme-deafult);\n   width: 15%;\n  color:var(--font-color) !important;\n   /* background-color: #101010; */\n   border-radius: 8px;\n   /* box-shadow: inset 0px -3px 3px 0px rgb(255 255 255 / 20%); */\n}\n.element-img[data-v-1c0c406a]{\n   width: 60px;\n   /* margin-top: 10px; */\n}\n.phone-element[data-v-1c0c406a]{\n   margin-top: 45px !important;\n   margin-left: 20px;\n   margin-right: 20px;\n   pointer-events: none !important;\n}\n.element-container[data-v-1c0c406a]{\n   overflow-y: scroll;\n   height: 567px;\n}\n.font-icon[data-v-1c0c406a]{\n   font-size: 32px;\n}\n.form-control[data-v-1c0c406a]{\n   color: #000000;\n}\n.sortable-ghost[data-v-1c0c406a] {\n   border: 3px dashed var(--theme-deafult);\n   font-size: 0;\n   overflow: hidden;\n}\n.drag-preview[data-v-1c0c406a] {\n   position: absolute;\n   transform: translateX(-10%) translateY(-10%) rotate(6deg) translateY(10%);\n}\n.handle[data-v-1c0c406a] {\n   float: left;\n   padding-top: 8px;\n   padding-bottom: 8px;\n   cursor: move;\n}\n.pricing-container[data-v-1c0c406a] {\n   border-radius: 5px;\n   margin-top: 10px;\n   padding: 15px;\n   position: relative;\n   overflow: hidden;\n}\n.element-inner-container[data-v-1c0c406a] {\n   cursor: pointer;\n   border: 2px dashed var(--theme-deafult);\n   box-shadow: 1px 1px 10px var(--theme-deafult);\n   padding: 10px;\n   margin-bottom: 4px;\n   margin-top: 10px;\n   border-radius: 12px;\n   margin-left: 10px;\n   margin-right: 15px;\n}\n\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/sortablejs/modular/sortable.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/sortablejs/modular/sortable.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiDrag": () => (/* binding */ MultiDragPlugin),
/* harmony export */   "Sortable": () => (/* binding */ Sortable),
/* harmony export */   "Swap": () => (/* binding */ SwapPlugin),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**!
 * Sortable 1.10.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var version = "1.10.2";

function userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !!
    /*@__PURE__*/
    navigator.userAgent.match(pattern);
  }
}

var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

var captureMode = {
  capture: false,
  passive: false
};

function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}

function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}

function matches(
/**HTMLElement*/
el,
/**String*/
selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));

  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }

  return false;
}

function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}

function closest(
/**HTMLElement*/
el,
/**String*/
selector,
/**HTMLElement*/
ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;

    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }

      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = getParentOrHost(el));
  }

  return null;
}

var R_SPACE = /\s+/g;

function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
    }
  }
}

function css(el, prop, val) {
  var style = el && el.style;

  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }

      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }

      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}

function matrix(el, selfOnly) {
  var appliedTransforms = '';

  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, 'transform');

      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */

    } while (!selfOnly && (el = el.parentNode));
  }

  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */

  return matrixFn && new matrixFn(appliedTransforms);
}

function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
        i = 0,
        n = list.length;

    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }

    return list;
  }

  return [];
}

function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;

  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */


function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;

  if (el !== window && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }

  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11

    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */

      } while (container = container.parentNode);
    }
  }

  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = matrix(container || el),
        scaleX = elMatrix && elMatrix.a,
        scaleY = elMatrix && elMatrix.d;

    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }

  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */


function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true),
      elSideVal = getRect(el)[elSide];
  /* jshint boss:true */

  while (parent) {
    var parentSideVal = getRect(parent)[parentSide],
        visible = void 0;

    if (parentSide === 'top' || parentSide === 'left') {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }

    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }

  return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */


function getChild(el, childNum, options) {
  var currentChild = 0,
      i = 0,
      children = el.children;

  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && children[i] !== Sortable.dragged && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }

      currentChild++;
    }

    i++;
  }

  return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */


function lastChild(el, selector) {
  var last = el.lastElementChild;

  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }

  return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */


function index(el, selector) {
  var index = 0;

  if (!el || !el.parentNode) {
    return -1;
  }
  /* jshint boss:true */


  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index++;
    }
  }

  return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */


function getRelativeScrollOffset(el) {
  var offsetLeft = 0,
      offsetTop = 0,
      winScroller = getWindowScrollingElement();

  if (el) {
    do {
      var elMatrix = matrix(el),
          scaleX = elMatrix.a,
          scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }

  return [offsetLeft, offsetTop];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */


function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }

  return -1;
}

function getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;

  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);

      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */

  } while (elem = elem.parentNode);

  return getWindowScrollingElement();
}

function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }

  return dst;
}

function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}

var _throttleTimeout;

function throttle(callback, ms) {
  return function () {
    if (!_throttleTimeout) {
      var args = arguments,
          _this = this;

      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }

      _throttleTimeout = setTimeout(function () {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}

function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}

function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}

function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;

  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}

function setRect(el, rect) {
  css(el, 'position', 'absolute');
  css(el, 'top', rect.top);
  css(el, 'left', rect.left);
  css(el, 'width', rect.width);
  css(el, 'height', rect.height);
}

function unsetRect(el) {
  css(el, 'position', '');
  css(el, 'top', '');
  css(el, 'left', '');
  css(el, 'width', '');
  css(el, 'height', '');
}

var expando = 'Sortable' + new Date().getTime();

function AnimationStateManager() {
  var animationStates = [],
      animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });

        var fromRect = _objectSpread({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation


        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);

          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }

        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;

      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }

      var animating = false,
          animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
            target = state.target,
            fromRect = target.fromRect,
            toRect = getRect(target),
            prevFromRect = target.prevFromRect,
            prevToRect = target.prevToRect,
            animatingRect = state.rect,
            targetMatrix = matrix(target, true);

        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }

        target.toRect = toRect;

        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        } // if fromRect != toRect: animate


        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;

          if (!time) {
            time = _this.options.animation;
          }

          _this.animate(target, animatingRect, toRect, time);
        }

        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);

      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }

      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, 'transition', '');
        css(target, 'transform', '');
        var elMatrix = matrix(this.el),
            scaleX = elMatrix && elMatrix.a,
            scaleY = elMatrix && elMatrix.d,
            translateX = (currentRect.left - toRect.left) / (scaleX || 1),
            translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        repaint(target); // repaint

        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css(target, 'transition', '');
          css(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}

function repaint(target) {
  return target.offsetWidth;
}

function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}

var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in defaults) {
      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = defaults[option];
      }
    }

    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;

    this.eventCanceled = false;

    evt.cancel = function () {
      _this.eventCanceled = true;
    };

    var eventNameGlobal = eventName + 'Global';
    plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable

      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread({
          sortable: sortable
        }, evt));
      } // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined


      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized; // Add default options from plugin

      _extends(defaults, initialized.defaults);
    });

    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);

      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;

      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};

function dispatchEvent(_ref) {
  var sortable = _ref.sortable,
      rootEl = _ref.rootEl,
      name = _ref.name,
      targetEl = _ref.targetEl,
      cloneEl = _ref.cloneEl,
      toEl = _ref.toEl,
      fromEl = _ref.fromEl,
      oldIndex = _ref.oldIndex,
      newIndex = _ref.newIndex,
      oldDraggableIndex = _ref.oldDraggableIndex,
      newDraggableIndex = _ref.newDraggableIndex,
      originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[expando];
  if (!sortable) return;
  var evt,
      options = sortable.options,
      onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }

  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

  var allEventProperties = _objectSpread({}, extraEventProperties, PluginManager.getEventProperties(name, sortable));

  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }

  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }

  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}

var pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      originalEvent = _ref.evt,
      data = _objectWithoutProperties(_ref, ["evt"]);

  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread({
    dragEl: dragEl,
    parentEl: parentEl,
    ghostEl: ghostEl,
    rootEl: rootEl,
    nextEl: nextEl,
    lastDownEl: lastDownEl,
    cloneEl: cloneEl,
    cloneHidden: cloneHidden,
    dragStarted: moved,
    putSortable: putSortable,
    activeSortable: Sortable.active,
    originalEvent: originalEvent,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};

function _dispatchEvent(info) {
  dispatchEvent(_objectSpread({
    putSortable: putSortable,
    cloneEl: cloneEl,
    targetEl: dragEl,
    rootEl: rootEl,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex
  }, info));
}

var dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    oldIndex,
    newIndex,
    oldDraggableIndex,
    newDraggableIndex,
    activeGroup,
    putSortable,
    awaitingDragStarted = false,
    ignoreNextClick = false,
    sortables = [],
    tapEvt,
    touchEvt,
    lastDx,
    lastDy,
    tapDistanceLeft,
    tapDistanceTop,
    moved,
    lastTarget,
    lastDirection,
    pastFirstInvertThresh = false,
    isCircumstantialInvert = false,
    targetMoveDistance,
    // For positioning ghost absolutely
ghostRelativeParent,
    ghostRelativeParentInitialScroll = [],
    // (left, top)
_silent = false,
    savedInputChecked = [];
/** @const */

var documentExists = typeof document !== 'undefined',
    PositionGhostAbsolutely = IOS,
    CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
    // This will not pass for IE9, because IE9 DnD only works on anchors
supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
    supportCssPointerEvents = function () {
  if (!documentExists) return; // false when <= IE11

  if (IE11OrLess) {
    return false;
  }

  var el = document.createElement('x');
  el.style.cssText = 'pointer-events:auto';
  return el.style.pointerEvents === 'auto';
}(),
    _detectDirection = function _detectDirection(el, options) {
  var elCSS = css(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css(child1),
      secondChildCSS = child2 && css(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;

  if (elCSS.display === 'flex') {
    return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
  }

  if (elCSS.display === 'grid') {
    return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
  }

  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
    var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
    return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
  }

  return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
},
    _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
},

/**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */
_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
  var ret;
  sortables.some(function (sortable) {
    if (lastChild(sortable)) return;
    var rect = getRect(sortable),
        threshold = sortable[expando].options.emptyInsertThreshold,
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

    if (threshold && insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
},
    _prepareGroup = function _prepareGroup(options) {
  function toFn(value, pull) {
    return function (to, from, dragEl, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

      if (value == null && (pull || sameGroup)) {
        // Default pull value
        // Default pull and put value if same group
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === 'clone') {
        return value;
      } else if (typeof value === 'function') {
        return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }

  var group = {};
  var originalGroup = options.group;

  if (!originalGroup || _typeof(originalGroup) != 'object') {
    originalGroup = {
      name: originalGroup
    };
  }

  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
},
    _hideGhostForTarget = function _hideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', 'none');
  }
},
    _unhideGhostForTarget = function _unhideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', '');
  }
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


if (documentExists) {
  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}

var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;

    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

    if (nearest) {
      // Create imitation event
      var event = {};

      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }

      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;

      nearest[expando]._onDragOver(event);
    }
  }
};

var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */


function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }

  this.el = el; // root element

  this.options = options = _extends({}, options); // Export instance

  el[expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults); // Set default options

  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }

  _prepareGroup(options); // Bind all private methods


  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  } // Setup drag mode


  this.nativeDraggable = options.forceFallback ? false : supportDraggable;

  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  } // Bind events


  if (options.supportPointer) {
    on(el, 'pointerdown', this._onTapStart);
  } else {
    on(el, 'mousedown', this._onTapStart);
    on(el, 'touchstart', this._onTapStart);
  }

  if (this.nativeDraggable) {
    on(el, 'dragover', this);
    on(el, 'dragenter', this);
  }

  sortables.push(this.el); // Restore sorting

  options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

  _extends(this, AnimationStateManager());
}

Sortable.prototype =
/** @lends Sortable.prototype */
{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(
  /** Event|TouchEvent */
  evt) {
    if (!evt.cancelable) return;

    var _this = this,
        el = this.el,
        options = this.options,
        preventOnFilter = options.preventOnFilter,
        type = evt.type,
        touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
        target = (touch || evt).target,
        originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
        filter = options.filter;

    _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.


    if (dragEl) {
      return;
    }

    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    } // cancel dnd if original target is content editable


    if (originalTarget.isContentEditable) {
      return;
    }

    target = closest(target, options.draggable, el, false);

    if (target && target.animated) {
      return;
    }

    if (lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    } // Get the index of the dragged element within its parent


    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable); // Check filter

    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });

        pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);

        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });

          pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });

      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    }

    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    } // Prepare `dragstart`


    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(
  /** Event */
  evt,
  /** Touch */
  touch,
  /** HTMLElement */
  target) {
    var _this = this,
        el = _this.el,
        options = _this.options,
        ownerDocument = el.ownerDocument,
        dragStartFn;

    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style['will-change'] = 'all';

      dragStartFn = function dragStartFn() {
        pluginEvent('delayEnded', _this, {
          evt: evt
        });

        if (Sortable.eventCanceled) {
          _this._onDrop();

          return;
        } // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove


        _this._disableDelayedDragEvents();

        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        } // Bind the events: dragstart/dragend


        _this._triggerDragStart(evt, touch); // Drag start event


        _dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        }); // Chosen item


        toggleClass(dragEl, options.chosenClass, true);
      }; // Disable "draggable"


      options.ignore.split(',').forEach(function (criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mouseup', _this._onDrop);
      on(ownerDocument, 'touchend', _this._onDrop);
      on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }

      pluginEvent('delayStart', this, {
        evt: evt
      }); // Delay is impossible for native DnD in Edge or IE

      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();

          return;
        } // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag


        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
        on(ownerDocument, 'touchend', _this._disableDelayedDrag);
        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
  /** TouchEvent|PointerEvent **/
  e) {
    var touch = e.touches ? e.touches[0] : e;

    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);

    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off(ownerDocument, 'touchend', this._disableDelayedDrag);
    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(
  /** Event */
  evt,
  /** Touch */
  touch) {
    touch = touch || evt.pointerType == 'touch' && evt;

    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on(document, 'touchmove', this._onTouchMove);
      } else {
        on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on(dragEl, 'dragend', this);
      on(rootEl, 'dragstart', this._onDragStart);
    }

    try {
      if (document.selection) {
        // Timeout neccessary for IE9
        _nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {

    awaitingDragStarted = false;

    if (rootEl && dragEl) {
      pluginEvent('dragStarted', this, {
        evt: evt
      });

      if (this.nativeDraggable) {
        on(document, 'dragover', _checkOutsideTargetEl);
      }

      var options = this.options; // Apply effect

      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost(); // Drag start event

      _dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;

      _hideGhostForTarget();

      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;

      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }

      dragEl.parentNode[expando]._isOutsideThisEl(target);

      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: target,
              rootEl: parent
            });

            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }

          target = parent; // store last element
        }
        /* jshint boss:true */
        while (parent = parent.parentNode);
      }

      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(
  /**TouchEvent*/
  evt) {
    if (tapEvt) {
      var options = this.options,
          fallbackTolerance = options.fallbackTolerance,
          fallbackOffset = options.fallbackOffset,
          touch = evt.touches ? evt.touches[0] : evt,
          ghostMatrix = ghostEl && matrix(ghostEl, true),
          scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
          scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
          relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
          dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
          dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }

        this._onDragStart(evt, true);
      }

      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }

        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, 'webkitTransform', cssMatrix);
        css(ghostEl, 'mozTransform', cssMatrix);
        css(ghostEl, 'msTransform', cssMatrix);
        css(ghostEl, 'transform', cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }

      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl,
          rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
          options = this.options; // Position absolutely

      if (PositionGhostAbsolutely) {
        // Get relatively positioned parent
        ghostRelativeParent = container;

        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }

        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }

        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }

      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, 'transition', '');
      css(ghostEl, 'transform', '');
      css(ghostEl, 'box-sizing', 'border-box');
      css(ghostEl, 'margin', 0);
      css(ghostEl, 'top', rect.top);
      css(ghostEl, 'left', rect.left);
      css(ghostEl, 'width', rect.width);
      css(ghostEl, 'height', rect.height);
      css(ghostEl, 'opacity', '0.8');
      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css(ghostEl, 'zIndex', '100000');
      css(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl); // Set transform-origin

      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart(
  /**Event*/
  evt,
  /**boolean*/
  fallback) {
    var _this = this;

    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent('dragStart', this, {
      evt: evt
    });

    if (Sortable.eventCanceled) {
      this._onDrop();

      return;
    }

    pluginEvent('setupClone', this);

    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';

      this._hideClone();

      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    } // #1143: IFrame support workaround


    _this.cloneId = _nextTick(function () {
      pluginEvent('clone', _this);
      if (Sortable.eventCanceled) return;

      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }

      _this._hideClone();

      _dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      off(document, 'mouseup', _this._onDrop);
      off(document, 'touchend', _this._onDrop);
      off(document, 'touchcancel', _this._onDrop);

      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }

      on(document, 'drop', _this); // #1276 fix:

      css(dragEl, 'transform', 'translateZ(0)');
    }

    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, 'selectstart', _this);
    moved = true;

    if (Safari) {
      css(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver(
  /**Event*/
  evt) {
    var el = this.el,
        target = evt.target,
        dragRect,
        targetRect,
        revert,
        options = this.options,
        group = options.group,
        activeSortable = Sortable.active,
        isOwner = activeGroup === group,
        canSort = options.sort,
        fromSortable = putSortable || activeSortable,
        vertical,
        _this = this,
        completedFired = false;

    if (_silent) return;

    function dragOverEvent(name, extra) {
      pluginEvent(name, _this, _objectSpread({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    } // Capture animation state


    function capture() {
      dragOverEvent('dragOverAnimationCapture');

      _this.captureAnimationState();

      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    } // Return invocation when dragEl is inserted (or completed)


    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }

        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }

        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        } // Animation


        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }

        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });

        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      } // Null lastTarget if it is not inside a previously swapped element


      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      } // no bubbling and not fallback


      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted


        !insertion && nearestEmptyInsertDetectEvent(evt);
      }

      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    } // Call when dragEl has been inserted


    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);

      _dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        originalEvent: evt
      });
    }

    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }

    target = closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if (Sortable.eventCanceled) return completedFired;

    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }

    ignoreNextClick = false;

    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = getRect(dragEl);
      dragOverEvent('dragOverValid');
      if (Sortable.eventCanceled) return completedFired;

      if (revert) {
        parentEl = rootEl; // actualization

        capture();

        this._hideClone();

        dragOverEvent('revert');

        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }

        return completed(true);
      }

      var elLastChild = lastChild(el, options.draggable);

      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // If already at end of list: Do not insert
        if (elLastChild === dragEl) {
          return completed(false);
        } // assign target only if condition is true


        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }

        if (target) {
          targetRect = getRect(target);
        }

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          el.appendChild(dragEl);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0,
            targetBeforeFirstSwap,
            differentLevel = dragEl.parentNode !== el,
            differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
            side1 = vertical ? 'top' : 'left',
            scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
            scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }

        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;

        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = index(dragEl);

          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
        } // If dragEl is already beside target: Do not insert


        if (direction === 0 || sibling === target) {
          return completed(false);
        }

        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling,
            after = false;
        after = direction === 1;

        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }

          _silent = true;
          setTimeout(_unsilent, 30);
          capture();

          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          } // Undo chrome's scroll adjustment (has no effect on other browsers)


          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }

          parentEl = dragEl.parentNode; // actualization
          // must be done before animation

          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }

          changed();
          return completed(true);
        }
      }

      if (el.contains(dragEl)) {
        return completed(false);
      }
    }

    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, 'mousemove', this._onTouchMove);
    off(document, 'touchmove', this._onTouchMove);
    off(document, 'pointermove', this._onTouchMove);
    off(document, 'dragover', nearestEmptyInsertDetectEvent);
    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._onDrop);
    off(ownerDocument, 'touchend', this._onDrop);
    off(ownerDocument, 'pointerup', this._onDrop);
    off(ownerDocument, 'touchcancel', this._onDrop);
    off(document, 'selectstart', this);
  },
  _onDrop: function _onDrop(
  /**Event*/
  evt) {
    var el = this.el,
        options = this.options; // Get the index of the dragged element within its parent

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent('drop', this, {
      evt: evt
    });
    parentEl = dragEl && dragEl.parentNode; // Get again after plugin event

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);

    if (Sortable.eventCanceled) {
      this._nulling();

      return;
    }

    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);

    _cancelNextTick(this.cloneId);

    _cancelNextTick(this._dragStartId); // Unbind events


    if (this.nativeDraggable) {
      off(document, 'drop', this);
      off(el, 'dragstart', this._onDragStart);
    }

    this._offMoveEvents();

    this._offUpEvents();

    if (Safari) {
      css(document.body, 'user-select', '');
    }

    css(dragEl, 'transform', '');

    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }

      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }

      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, 'dragend', this);
        }

        _disableDraggable(dragEl);

        dragEl.style['will-change'] = ''; // Remove classes
        // ghostClass is added in dragStarted

        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }

        toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

        _dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });

        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            // Add event
            _dispatchEvent({
              rootEl: parentEl,
              name: 'add',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            }); // Remove event


            _dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: parentEl,
              originalEvent: evt
            }); // drag from one list and drop into another


            _dispatchEvent({
              rootEl: parentEl,
              name: 'sort',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });

            _dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: parentEl,
              originalEvent: evt
            });
          }

          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              // drag & drop within the same list
              _dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: parentEl,
                originalEvent: evt
              });

              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }

        if (Sortable.active) {
          /* jshint eqnull:true */
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }

          _dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: parentEl,
            originalEvent: evt
          }); // Save sorting


          this.save();
        }
      }
    }

    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent('nulling', this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function (el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(
  /**Event*/
  evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);

        break;

      case 'dragenter':
      case 'dragover':
        if (dragEl) {
          this._onDragOver(evt);

          _globalDragOver(evt);
        }

        break;

      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },

  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
        el,
        children = this.el.children,
        i = 0,
        n = children.length,
        options = this.options;

    for (; i < n; i++) {
      el = children[i];

      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }

    return order;
  },

  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order) {
    var items = {},
        rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];

      if (closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
  },

  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },

  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },

  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;

    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);

      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }

      if (name === 'group') {
        _prepareGroup(options);
      }
    }
  },

  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent('destroy', this);
    var el = this.el;
    el[expando] = null;
    off(el, 'mousedown', this._onTapStart);
    off(el, 'touchstart', this._onTapStart);
    off(el, 'pointerdown', this._onTapStart);

    if (this.nativeDraggable) {
      off(el, 'dragover', this);
      off(el, 'dragenter', this);
    } // Remove draggable attributes


    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });

    this._onDrop();

    this._disableDelayedDragEvents();

    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent('hideClone', this);
      if (Sortable.eventCanceled) return;
      css(cloneEl, 'display', 'none');

      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }

      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();

      return;
    }

    if (cloneHidden) {
      pluginEvent('showClone', this);
      if (Sortable.eventCanceled) return; // show clone at dragEl or original position

      if (rootEl.contains(dragEl) && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }

      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }

      css(cloneEl, 'display', '');
      cloneHidden = false;
    }
  }
};

function _globalDragOver(
/**Event*/
evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }

  evt.cancelable && evt.preventDefault();
}

function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
      sortable = fromEl[expando],
      onMoveFn = sortable.options.onMove,
      retVal; // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }

  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);

  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }

  return retVal;
}

function _disableDraggable(el) {
  el.draggable = false;
}

function _unsilent() {
  _silent = false;
}

function _ghostIsLast(evt, vertical, sortable) {
  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}

function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
      targetLength = vertical ? targetRect.height : targetRect.width,
      targetS1 = vertical ? targetRect.top : targetRect.left,
      targetS2 = vertical ? targetRect.bottom : targetRect.right,
      invert = false;

  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        pastFirstInvertThresh = true;
      }

      if (!pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }

  invert = invert || invertSwap;

  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }

  return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */


function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */


function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
      i = str.length,
      sum = 0;

  while (i--) {
    sum += str.charCodeAt(i);
  }

  return sum.toString(36);
}

function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;

  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}

function _nextTick(fn) {
  return setTimeout(fn, 0);
}

function _cancelNextTick(id) {
  return clearTimeout(id);
} // Fixed #973:


if (documentExists) {
  on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
} // Export utils


Sortable.utils = {
  on: on,
  off: off,
  css: css,
  find: find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend: extend,
  throttle: throttle,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild: getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */

Sortable.get = function (element) {
  return element[expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */


Sortable.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }

  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }

    if (plugin.utils) Sortable.utils = _objectSpread({}, Sortable.utils, plugin.utils);
    PluginManager.mount(plugin);
  });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */


Sortable.create = function (el, options) {
  return new Sortable(el, options);
}; // Export


Sortable.version = version;

var autoScrolls = [],
    scrollEl,
    scrollRootEl,
    scrolling = false,
    lastAutoScrollX,
    lastAutoScrollY,
    touchEvt$1,
    pointerElemChangedInterval;

function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    }; // Bind all private methods

    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
  }

  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;

      if (this.sortable.nativeDraggable) {
        on(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          on(document, 'mousemove', this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;

      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable) {
        off(document, 'dragover', this._handleAutoScroll);
      } else {
        off(document, 'pointermove', this._handleFallbackAutoScroll);
        off(document, 'touchmove', this._handleFallbackAutoScroll);
        off(document, 'mousemove', this._handleFallbackAutoScroll);
      }

      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;

      var x = (evt.touches ? evt.touches[0] : evt).clientX,
          y = (evt.touches ? evt.touches[0] : evt).clientY,
          elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt; // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good

      if (fallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change

        var ogElemScroller = getParentAutoScrollElement(elem, true);

        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour

          pointerElemChangedInterval = setInterval(function () {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);

            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }

            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }

        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: 'scroll',
    initializeByDefault: true
  });
}

function clearAutoScrolls() {
  autoScrolls.forEach(function (autoScroll) {
    clearInterval(autoScroll.pid);
  });
  autoScrolls = [];
}

function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}

var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX,
      y = (evt.touches ? evt.touches[0] : evt).clientY,
      sens = options.scrollSensitivity,
      speed = options.scrollSpeed,
      winScroller = getWindowScrollingElement();
  var scrollThisInstance = false,
      scrollCustomFn; // New scroll root, set scrollEl

  if (scrollRootEl !== rootEl) {
    scrollRootEl = rootEl;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;

    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl, true);
    }
  }

  var layersOut = 0;
  var currentParent = scrollEl;

  do {
    var el = currentParent,
        rect = getRect(el),
        top = rect.top,
        bottom = rect.bottom,
        left = rect.left,
        right = rect.right,
        width = rect.width,
        height = rect.height,
        canScrollX = void 0,
        canScrollY = void 0,
        scrollWidth = el.scrollWidth,
        scrollHeight = el.scrollHeight,
        elCSS = css(el),
        scrollPosX = el.scrollLeft,
        scrollPosY = el.scrollTop;

    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
    }

    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);

    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }

    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);

      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        /* jshint loopfunc:true */

        autoScrolls[layersOut].pid = setInterval(function () {
          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely

          }

          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

          if (typeof scrollCustomFn === 'function') {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
              return;
            }
          }

          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }

    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));

  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);

var drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      dragEl = _ref.dragEl,
      activeSortable = _ref.activeSortable,
      dispatchSortableEvent = _ref.dispatchSortableEvent,
      hideGhostForTarget = _ref.hideGhostForTarget,
      unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();

  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};

function Revert() {}

Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
        putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();

    if (putSortable) {
      putSortable.captureAnimationState();
    }

    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);

    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }

    this.sortable.animateAll();

    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: drop
};

_extends(Revert, {
  pluginName: 'revertOnSpill'
});

function Remove() {}

Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
        putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: drop
};

_extends(Remove, {
  pluginName: 'removeOnSpill'
});

var lastSwapEl;

function SwapPlugin() {
  function Swap() {
    this.defaults = {
      swapClass: 'sortable-swap-highlight'
    };
  }

  Swap.prototype = {
    dragStart: function dragStart(_ref) {
      var dragEl = _ref.dragEl;
      lastSwapEl = dragEl;
    },
    dragOverValid: function dragOverValid(_ref2) {
      var completed = _ref2.completed,
          target = _ref2.target,
          onMove = _ref2.onMove,
          activeSortable = _ref2.activeSortable,
          changed = _ref2.changed,
          cancel = _ref2.cancel;
      if (!activeSortable.options.swap) return;
      var el = this.sortable.el,
          options = this.options;

      if (target && target !== el) {
        var prevSwapEl = lastSwapEl;

        if (onMove(target) !== false) {
          toggleClass(target, options.swapClass, true);
          lastSwapEl = target;
        } else {
          lastSwapEl = null;
        }

        if (prevSwapEl && prevSwapEl !== lastSwapEl) {
          toggleClass(prevSwapEl, options.swapClass, false);
        }
      }

      changed();
      completed(true);
      cancel();
    },
    drop: function drop(_ref3) {
      var activeSortable = _ref3.activeSortable,
          putSortable = _ref3.putSortable,
          dragEl = _ref3.dragEl;
      var toSortable = putSortable || this.sortable;
      var options = this.options;
      lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);

      if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
        if (dragEl !== lastSwapEl) {
          toSortable.captureAnimationState();
          if (toSortable !== activeSortable) activeSortable.captureAnimationState();
          swapNodes(dragEl, lastSwapEl);
          toSortable.animateAll();
          if (toSortable !== activeSortable) activeSortable.animateAll();
        }
      }
    },
    nulling: function nulling() {
      lastSwapEl = null;
    }
  };
  return _extends(Swap, {
    pluginName: 'swap',
    eventProperties: function eventProperties() {
      return {
        swapItem: lastSwapEl
      };
    }
  });
}

function swapNodes(n1, n2) {
  var p1 = n1.parentNode,
      p2 = n2.parentNode,
      i1,
      i2;
  if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
  i1 = index(n1);
  i2 = index(n2);

  if (p1.isEqualNode(p2) && i1 < i2) {
    i2++;
  }

  p1.insertBefore(n2, p1.children[i1]);
  p2.insertBefore(n1, p2.children[i2]);
}

var multiDragElements = [],
    multiDragClones = [],
    lastMultiDragSelect,
    // for selection with modifier key down (SHIFT)
multiDragSortable,
    initialFolding = false,
    // Initial multi-drag fold when drag started
folding = false,
    // Folding any other time
dragStarted = false,
    dragEl$1,
    clonesFromRect,
    clonesHidden;

function MultiDragPlugin() {
  function MultiDrag(sortable) {
    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }

    if (sortable.options.supportPointer) {
      on(document, 'pointerup', this._deselectMultiDrag);
    } else {
      on(document, 'mouseup', this._deselectMultiDrag);
      on(document, 'touchend', this._deselectMultiDrag);
    }

    on(document, 'keydown', this._checkKeyDown);
    on(document, 'keyup', this._checkKeyUp);
    this.defaults = {
      selectedClass: 'sortable-selected',
      multiDragKey: null,
      setData: function setData(dataTransfer, dragEl) {
        var data = '';

        if (multiDragElements.length && multiDragSortable === sortable) {
          multiDragElements.forEach(function (multiDragElement, i) {
            data += (!i ? '' : ', ') + multiDragElement.textContent;
          });
        } else {
          data = dragEl.textContent;
        }

        dataTransfer.setData('Text', data);
      }
    };
  }

  MultiDrag.prototype = {
    multiDragKeyDown: false,
    isMultiDrag: false,
    delayStartGlobal: function delayStartGlobal(_ref) {
      var dragged = _ref.dragEl;
      dragEl$1 = dragged;
    },
    delayEnded: function delayEnded() {
      this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
    },
    setupClone: function setupClone(_ref2) {
      var sortable = _ref2.sortable,
          cancel = _ref2.cancel;
      if (!this.isMultiDrag) return;

      for (var i = 0; i < multiDragElements.length; i++) {
        multiDragClones.push(clone(multiDragElements[i]));
        multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
        multiDragClones[i].draggable = false;
        multiDragClones[i].style['will-change'] = '';
        toggleClass(multiDragClones[i], this.options.selectedClass, false);
        multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
      }

      sortable._hideClone();

      cancel();
    },
    clone: function clone(_ref3) {
      var sortable = _ref3.sortable,
          rootEl = _ref3.rootEl,
          dispatchSortableEvent = _ref3.dispatchSortableEvent,
          cancel = _ref3.cancel;
      if (!this.isMultiDrag) return;

      if (!this.options.removeCloneOnHide) {
        if (multiDragElements.length && multiDragSortable === sortable) {
          insertMultiDragClones(true, rootEl);
          dispatchSortableEvent('clone');
          cancel();
        }
      }
    },
    showClone: function showClone(_ref4) {
      var cloneNowShown = _ref4.cloneNowShown,
          rootEl = _ref4.rootEl,
          cancel = _ref4.cancel;
      if (!this.isMultiDrag) return;
      insertMultiDragClones(false, rootEl);
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', '');
      });
      cloneNowShown();
      clonesHidden = false;
      cancel();
    },
    hideClone: function hideClone(_ref5) {
      var _this = this;

      var sortable = _ref5.sortable,
          cloneNowHidden = _ref5.cloneNowHidden,
          cancel = _ref5.cancel;
      if (!this.isMultiDrag) return;
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', 'none');

        if (_this.options.removeCloneOnHide && clone.parentNode) {
          clone.parentNode.removeChild(clone);
        }
      });
      cloneNowHidden();
      clonesHidden = true;
      cancel();
    },
    dragStartGlobal: function dragStartGlobal(_ref6) {
      var sortable = _ref6.sortable;

      if (!this.isMultiDrag && multiDragSortable) {
        multiDragSortable.multiDrag._deselectMultiDrag();
      }

      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.sortableIndex = index(multiDragElement);
      }); // Sort multi-drag elements

      multiDragElements = multiDragElements.sort(function (a, b) {
        return a.sortableIndex - b.sortableIndex;
      });
      dragStarted = true;
    },
    dragStarted: function dragStarted(_ref7) {
      var _this2 = this;

      var sortable = _ref7.sortable;
      if (!this.isMultiDrag) return;

      if (this.options.sort) {
        // Capture rects,
        // hide multi drag elements (by positioning them absolute),
        // set multi drag elements rects to dragRect,
        // show multi drag elements,
        // animate to rects,
        // unset rects & remove from DOM
        sortable.captureAnimationState();

        if (this.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            css(multiDragElement, 'position', 'absolute');
          });
          var dragRect = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRect);
          });
          folding = true;
          initialFolding = true;
        }
      }

      sortable.animateAll(function () {
        folding = false;
        initialFolding = false;

        if (_this2.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
        } // Remove all auxiliary multidrag items from el, if sorting enabled


        if (_this2.options.sort) {
          removeMultiDragElements();
        }
      });
    },
    dragOver: function dragOver(_ref8) {
      var target = _ref8.target,
          completed = _ref8.completed,
          cancel = _ref8.cancel;

      if (folding && ~multiDragElements.indexOf(target)) {
        completed(false);
        cancel();
      }
    },
    revert: function revert(_ref9) {
      var fromSortable = _ref9.fromSortable,
          rootEl = _ref9.rootEl,
          sortable = _ref9.sortable,
          dragRect = _ref9.dragRect;

      if (multiDragElements.length > 1) {
        // Setup unfold animation
        multiDragElements.forEach(function (multiDragElement) {
          sortable.addAnimationState({
            target: multiDragElement,
            rect: folding ? getRect(multiDragElement) : dragRect
          });
          unsetRect(multiDragElement);
          multiDragElement.fromRect = dragRect;
          fromSortable.removeAnimationState(multiDragElement);
        });
        folding = false;
        insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref10) {
      var sortable = _ref10.sortable,
          isOwner = _ref10.isOwner,
          insertion = _ref10.insertion,
          activeSortable = _ref10.activeSortable,
          parentEl = _ref10.parentEl,
          putSortable = _ref10.putSortable;
      var options = this.options;

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        }

        initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location

        if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
          // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
          var dragRectAbsolute = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
            // while folding, and so that we can capture them again because old sortable will no longer be fromSortable

            parentEl.appendChild(multiDragElement);
          });
          folding = true;
        } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out


        if (!isOwner) {
          // Only remove if not folding (folding will remove them anyways)
          if (!folding) {
            removeMultiDragElements();
          }

          if (multiDragElements.length > 1) {
            var clonesHiddenBefore = clonesHidden;

            activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden


            if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
              multiDragClones.forEach(function (clone) {
                activeSortable.addAnimationState({
                  target: clone,
                  rect: clonesFromRect
                });
                clone.fromRect = clonesFromRect;
                clone.thisAnimationDuration = null;
              });
            }
          } else {
            activeSortable._showClone(sortable);
          }
        }
      }
    },
    dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
      var dragRect = _ref11.dragRect,
          isOwner = _ref11.isOwner,
          activeSortable = _ref11.activeSortable;
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.thisAnimationDuration = null;
      });

      if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
        clonesFromRect = _extends({}, dragRect);
        var dragMatrix = matrix(dragEl$1, true);
        clonesFromRect.top -= dragMatrix.f;
        clonesFromRect.left -= dragMatrix.e;
      }
    },
    dragOverAnimationComplete: function dragOverAnimationComplete() {
      if (folding) {
        folding = false;
        removeMultiDragElements();
      }
    },
    drop: function drop(_ref12) {
      var evt = _ref12.originalEvent,
          rootEl = _ref12.rootEl,
          parentEl = _ref12.parentEl,
          sortable = _ref12.sortable,
          dispatchSortableEvent = _ref12.dispatchSortableEvent,
          oldIndex = _ref12.oldIndex,
          putSortable = _ref12.putSortable;
      var toSortable = putSortable || this.sortable;
      if (!evt) return;
      var options = this.options,
          children = parentEl.children; // Multi-drag selection

      if (!dragStarted) {
        if (options.multiDragKey && !this.multiDragKeyDown) {
          this._deselectMultiDrag();
        }

        toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));

        if (!~multiDragElements.indexOf(dragEl$1)) {
          multiDragElements.push(dragEl$1);
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'select',
            targetEl: dragEl$1,
            originalEvt: evt
          }); // Modifier activated, select from last to dragEl

          if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
            var lastIndex = index(lastMultiDragSelect),
                currentIndex = index(dragEl$1);

            if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
              // Must include lastMultiDragSelect (select it), in case modified selection from no selection
              // (but previous selection existed)
              var n, i;

              if (currentIndex > lastIndex) {
                i = lastIndex;
                n = currentIndex;
              } else {
                i = currentIndex;
                n = lastIndex + 1;
              }

              for (; i < n; i++) {
                if (~multiDragElements.indexOf(children[i])) continue;
                toggleClass(children[i], options.selectedClass, true);
                multiDragElements.push(children[i]);
                dispatchEvent({
                  sortable: sortable,
                  rootEl: rootEl,
                  name: 'select',
                  targetEl: children[i],
                  originalEvt: evt
                });
              }
            }
          } else {
            lastMultiDragSelect = dragEl$1;
          }

          multiDragSortable = toSortable;
        } else {
          multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
          lastMultiDragSelect = null;
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'deselect',
            targetEl: dragEl$1,
            originalEvt: evt
          });
        }
      } // Multi-drag drop


      if (dragStarted && this.isMultiDrag) {
        // Do not "unfold" after around dragEl if reverted
        if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
          var dragRect = getRect(dragEl$1),
              multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
          if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
          toSortable.captureAnimationState();

          if (!initialFolding) {
            if (options.animation) {
              dragEl$1.fromRect = dragRect;
              multiDragElements.forEach(function (multiDragElement) {
                multiDragElement.thisAnimationDuration = null;

                if (multiDragElement !== dragEl$1) {
                  var rect = folding ? getRect(multiDragElement) : dragRect;
                  multiDragElement.fromRect = rect; // Prepare unfold animation

                  toSortable.addAnimationState({
                    target: multiDragElement,
                    rect: rect
                  });
                }
              });
            } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
            // properly they must all be removed


            removeMultiDragElements();
            multiDragElements.forEach(function (multiDragElement) {
              if (children[multiDragIndex]) {
                parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
              } else {
                parentEl.appendChild(multiDragElement);
              }

              multiDragIndex++;
            }); // If initial folding is done, the elements may have changed position because they are now
            // unfolding around dragEl, even though dragEl may not have his index changed, so update event
            // must be fired here as Sortable will not.

            if (oldIndex === index(dragEl$1)) {
              var update = false;
              multiDragElements.forEach(function (multiDragElement) {
                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                  update = true;
                  return;
                }
              });

              if (update) {
                dispatchSortableEvent('update');
              }
            }
          } // Must be done after capturing individual rects (scroll bar)


          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
          toSortable.animateAll();
        }

        multiDragSortable = toSortable;
      } // Remove clones if necessary


      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        multiDragClones.forEach(function (clone) {
          clone.parentNode && clone.parentNode.removeChild(clone);
        });
      }
    },
    nullingGlobal: function nullingGlobal() {
      this.isMultiDrag = dragStarted = false;
      multiDragClones.length = 0;
    },
    destroyGlobal: function destroyGlobal() {
      this._deselectMultiDrag();

      off(document, 'pointerup', this._deselectMultiDrag);
      off(document, 'mouseup', this._deselectMultiDrag);
      off(document, 'touchend', this._deselectMultiDrag);
      off(document, 'keydown', this._checkKeyDown);
      off(document, 'keyup', this._checkKeyUp);
    },
    _deselectMultiDrag: function _deselectMultiDrag(evt) {
      if (typeof dragStarted !== "undefined" && dragStarted) return; // Only deselect if selection is in this sortable

      if (multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable

      if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return; // Only deselect if left click

      if (evt && evt.button !== 0) return;

      while (multiDragElements.length) {
        var el = multiDragElements[0];
        toggleClass(el, this.options.selectedClass, false);
        multiDragElements.shift();
        dispatchEvent({
          sortable: this.sortable,
          rootEl: this.sortable.el,
          name: 'deselect',
          targetEl: el,
          originalEvt: evt
        });
      }
    },
    _checkKeyDown: function _checkKeyDown(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = true;
      }
    },
    _checkKeyUp: function _checkKeyUp(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = false;
      }
    }
  };
  return _extends(MultiDrag, {
    // Static methods & properties
    pluginName: 'multiDrag',
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function select(el) {
        var sortable = el.parentNode[expando];
        if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;

        if (multiDragSortable && multiDragSortable !== sortable) {
          multiDragSortable.multiDrag._deselectMultiDrag();

          multiDragSortable = sortable;
        }

        toggleClass(el, sortable.options.selectedClass, true);
        multiDragElements.push(el);
      },

      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function deselect(el) {
        var sortable = el.parentNode[expando],
            index = multiDragElements.indexOf(el);
        if (!sortable || !sortable.options.multiDrag || !~index) return;
        toggleClass(el, sortable.options.selectedClass, false);
        multiDragElements.splice(index, 1);
      }
    },
    eventProperties: function eventProperties() {
      var _this3 = this;

      var oldIndicies = [],
          newIndicies = [];
      multiDragElements.forEach(function (multiDragElement) {
        oldIndicies.push({
          multiDragElement: multiDragElement,
          index: multiDragElement.sortableIndex
        }); // multiDragElements will already be sorted if folding

        var newIndex;

        if (folding && multiDragElement !== dragEl$1) {
          newIndex = -1;
        } else if (folding) {
          newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
        } else {
          newIndex = index(multiDragElement);
        }

        newIndicies.push({
          multiDragElement: multiDragElement,
          index: newIndex
        });
      });
      return {
        items: _toConsumableArray(multiDragElements),
        clones: [].concat(multiDragClones),
        oldIndicies: oldIndicies,
        newIndicies: newIndicies
      };
    },
    optionListeners: {
      multiDragKey: function multiDragKey(key) {
        key = key.toLowerCase();

        if (key === 'ctrl') {
          key = 'Control';
        } else if (key.length > 1) {
          key = key.charAt(0).toUpperCase() + key.substr(1);
        }

        return key;
      }
    }
  });
}

function insertMultiDragElements(clonesInserted, rootEl) {
  multiDragElements.forEach(function (multiDragElement, i) {
    var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(multiDragElement, target);
    } else {
      rootEl.appendChild(multiDragElement);
    }
  });
}
/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */


function insertMultiDragClones(elementsInserted, rootEl) {
  multiDragClones.forEach(function (clone, i) {
    var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(clone, target);
    } else {
      rootEl.appendChild(clone);
    }
  });
}

function removeMultiDragElements() {
  multiDragElements.forEach(function (multiDragElement) {
    if (multiDragElement === dragEl$1) return;
    multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
  });
}

Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sortable);



/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/AccountViewComponent.vue?vue&type=style&index=0&id=d90dafee&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/AccountViewComponent.vue?vue&type=style&index=0&id=d90dafee&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AccountViewComponent_vue_vue_type_style_index_0_id_d90dafee_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AccountViewComponent.vue?vue&type=style&index=0&id=d90dafee&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/AccountViewComponent.vue?vue&type=style&index=0&id=d90dafee&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AccountViewComponent_vue_vue_type_style_index_0_id_d90dafee_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AccountViewComponent_vue_vue_type_style_index_0_id_d90dafee_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/AvatarComponent.vue?vue&type=style&index=0&id=269c5c36&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/AvatarComponent.vue?vue&type=style&index=0&id=269c5c36&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AvatarComponent_vue_vue_type_style_index_0_id_269c5c36_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AvatarComponent.vue?vue&type=style&index=0&id=269c5c36&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/AvatarComponent.vue?vue&type=style&index=0&id=269c5c36&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AvatarComponent_vue_vue_type_style_index_0_id_269c5c36_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AvatarComponent_vue_vue_type_style_index_0_id_269c5c36_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/BrandingComponent.vue?vue&type=style&index=0&id=f7b11958&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/BrandingComponent.vue?vue&type=style&index=0&id=f7b11958&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BrandingComponent_vue_vue_type_style_index_0_id_f7b11958_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BrandingComponent.vue?vue&type=style&index=0&id=f7b11958&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/BrandingComponent.vue?vue&type=style&index=0&id=f7b11958&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BrandingComponent_vue_vue_type_style_index_0_id_f7b11958_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BrandingComponent_vue_vue_type_style_index_0_id_f7b11958_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/ImageComponent.vue?vue&type=style&index=0&id=ff8b6f80&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/ImageComponent.vue?vue&type=style&index=0&id=ff8b6f80&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImageComponent_vue_vue_type_style_index_0_id_ff8b6f80_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ImageComponent.vue?vue&type=style&index=0&id=ff8b6f80&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/ImageComponent.vue?vue&type=style&index=0&id=ff8b6f80&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImageComponent_vue_vue_type_style_index_0_id_ff8b6f80_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImageComponent_vue_vue_type_style_index_0_id_ff8b6f80_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/ImageViewComponent.vue?vue&type=style&index=0&id=076c37ca&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/ImageViewComponent.vue?vue&type=style&index=0&id=076c37ca&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImageViewComponent_vue_vue_type_style_index_0_id_076c37ca_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ImageViewComponent.vue?vue&type=style&index=0&id=076c37ca&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/ImageViewComponent.vue?vue&type=style&index=0&id=076c37ca&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImageViewComponent_vue_vue_type_style_index_0_id_076c37ca_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImageViewComponent_vue_vue_type_style_index_0_id_076c37ca_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SocialViewComponent.vue?vue&type=style&index=0&id=62c7bd06&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SocialViewComponent.vue?vue&type=style&index=0&id=62c7bd06&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SocialViewComponent_vue_vue_type_style_index_0_id_62c7bd06_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SocialViewComponent.vue?vue&type=style&index=0&id=62c7bd06&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SocialViewComponent.vue?vue&type=style&index=0&id=62c7bd06&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SocialViewComponent_vue_vue_type_style_index_0_id_62c7bd06_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SocialViewComponent_vue_vue_type_style_index_0_id_62c7bd06_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/AppearanceComponent.vue?vue&type=style&index=0&id=96de5350&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/AppearanceComponent.vue?vue&type=style&index=0&id=96de5350&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppearanceComponent_vue_vue_type_style_index_0_id_96de5350_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppearanceComponent.vue?vue&type=style&index=0&id=96de5350&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/AppearanceComponent.vue?vue&type=style&index=0&id=96de5350&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppearanceComponent_vue_vue_type_style_index_0_id_96de5350_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppearanceComponent_vue_vue_type_style_index_0_id_96de5350_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/BuilderContentComponent.vue?vue&type=style&index=0&id=66e3351e&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/BuilderContentComponent.vue?vue&type=style&index=0&id=66e3351e&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BuilderContentComponent_vue_vue_type_style_index_0_id_66e3351e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BuilderContentComponent.vue?vue&type=style&index=0&id=66e3351e&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/BuilderContentComponent.vue?vue&type=style&index=0&id=66e3351e&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BuilderContentComponent_vue_vue_type_style_index_0_id_66e3351e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BuilderContentComponent_vue_vue_type_style_index_0_id_66e3351e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/profileBuilderComponent.vue?vue&type=style&index=0&id=1c0c406a&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/profileBuilderComponent.vue?vue&type=style&index=0&id=1c0c406a&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_profileBuilderComponent_vue_vue_type_style_index_0_id_1c0c406a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./profileBuilderComponent.vue?vue&type=style&index=0&id=1c0c406a&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/profileBuilderComponent.vue?vue&type=style&index=0&id=1c0c406a&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_profileBuilderComponent_vue_vue_type_style_index_0_id_1c0c406a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_profileBuilderComponent_vue_vue_type_style_index_0_id_1c0c406a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/AccountViewComponent.vue":
/*!************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/AccountViewComponent.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AccountViewComponent_vue_vue_type_template_id_d90dafee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountViewComponent.vue?vue&type=template&id=d90dafee */ "./resources/ts/vue/backend/pages/builder/components/AccountViewComponent.vue?vue&type=template&id=d90dafee");
/* harmony import */ var _AccountViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountViewComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/components/AccountViewComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _AccountViewComponent_vue_vue_type_style_index_0_id_d90dafee_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccountViewComponent.vue?vue&type=style&index=0&id=d90dafee&lang=css */ "./resources/ts/vue/backend/pages/builder/components/AccountViewComponent.vue?vue&type=style&index=0&id=d90dafee&lang=css");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_AccountViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AccountViewComponent_vue_vue_type_template_id_d90dafee__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/builder/components/AccountViewComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/AvatarComponent.vue":
/*!*******************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/AvatarComponent.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AvatarComponent_vue_vue_type_template_id_269c5c36_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AvatarComponent.vue?vue&type=template&id=269c5c36&scoped=true */ "./resources/ts/vue/backend/pages/builder/components/AvatarComponent.vue?vue&type=template&id=269c5c36&scoped=true");
/* harmony import */ var _AvatarComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AvatarComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/components/AvatarComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _AvatarComponent_vue_vue_type_style_index_0_id_269c5c36_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AvatarComponent.vue?vue&type=style&index=0&id=269c5c36&scoped=true&lang=css */ "./resources/ts/vue/backend/pages/builder/components/AvatarComponent.vue?vue&type=style&index=0&id=269c5c36&scoped=true&lang=css");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_AvatarComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AvatarComponent_vue_vue_type_template_id_269c5c36_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-269c5c36"],['__file',"resources/ts/vue/backend/pages/builder/components/AvatarComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/BrandingComponent.vue":
/*!*********************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/BrandingComponent.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BrandingComponent_vue_vue_type_template_id_f7b11958__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BrandingComponent.vue?vue&type=template&id=f7b11958 */ "./resources/ts/vue/backend/pages/builder/components/BrandingComponent.vue?vue&type=template&id=f7b11958");
/* harmony import */ var _BrandingComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrandingComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/components/BrandingComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _BrandingComponent_vue_vue_type_style_index_0_id_f7b11958_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BrandingComponent.vue?vue&type=style&index=0&id=f7b11958&lang=css */ "./resources/ts/vue/backend/pages/builder/components/BrandingComponent.vue?vue&type=style&index=0&id=f7b11958&lang=css");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_BrandingComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BrandingComponent_vue_vue_type_template_id_f7b11958__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/builder/components/BrandingComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/ColorBoxComponent.vue":
/*!*********************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/ColorBoxComponent.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ColorBoxComponent_vue_vue_type_template_id_4b33bff2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorBoxComponent.vue?vue&type=template&id=4b33bff2 */ "./resources/ts/vue/backend/pages/builder/components/ColorBoxComponent.vue?vue&type=template&id=4b33bff2");
/* harmony import */ var _ColorBoxComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorBoxComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/components/ColorBoxComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ColorBoxComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ColorBoxComponent_vue_vue_type_template_id_4b33bff2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/builder/components/ColorBoxComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/DividerComponent.vue":
/*!********************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/DividerComponent.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DividerComponent_vue_vue_type_template_id_73a1ec7c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DividerComponent.vue?vue&type=template&id=73a1ec7c */ "./resources/ts/vue/backend/pages/builder/components/DividerComponent.vue?vue&type=template&id=73a1ec7c");
/* harmony import */ var _DividerComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DividerComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/components/DividerComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DividerComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DividerComponent_vue_vue_type_template_id_73a1ec7c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/builder/components/DividerComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/DividerViewComponent.vue":
/*!************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/DividerViewComponent.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DividerViewComponent_vue_vue_type_template_id_61c3d6c6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DividerViewComponent.vue?vue&type=template&id=61c3d6c6 */ "./resources/ts/vue/backend/pages/builder/components/DividerViewComponent.vue?vue&type=template&id=61c3d6c6");
/* harmony import */ var _DividerViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DividerViewComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/components/DividerViewComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DividerViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DividerViewComponent_vue_vue_type_template_id_61c3d6c6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/builder/components/DividerViewComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/HTMLComponent.vue":
/*!*****************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/HTMLComponent.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HTMLComponent_vue_vue_type_template_id_50522c78__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLComponent.vue?vue&type=template&id=50522c78 */ "./resources/ts/vue/backend/pages/builder/components/HTMLComponent.vue?vue&type=template&id=50522c78");
/* harmony import */ var _HTMLComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HTMLComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/components/HTMLComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_HTMLComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_HTMLComponent_vue_vue_type_template_id_50522c78__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/builder/components/HTMLComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/HTMLViewComponent.vue":
/*!*********************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/HTMLViewComponent.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HTMLViewComponent_vue_vue_type_template_id_09f2239f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLViewComponent.vue?vue&type=template&id=09f2239f */ "./resources/ts/vue/backend/pages/builder/components/HTMLViewComponent.vue?vue&type=template&id=09f2239f");
/* harmony import */ var _HTMLViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HTMLViewComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/components/HTMLViewComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_HTMLViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_HTMLViewComponent_vue_vue_type_template_id_09f2239f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/builder/components/HTMLViewComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/HeadingComponent.vue":
/*!********************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/HeadingComponent.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeadingComponent_vue_vue_type_template_id_56cc6179__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeadingComponent.vue?vue&type=template&id=56cc6179 */ "./resources/ts/vue/backend/pages/builder/components/HeadingComponent.vue?vue&type=template&id=56cc6179");
/* harmony import */ var _HeadingComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeadingComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/components/HeadingComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_HeadingComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_HeadingComponent_vue_vue_type_template_id_56cc6179__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/builder/components/HeadingComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/ImageComponent.vue":
/*!******************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/ImageComponent.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ImageComponent_vue_vue_type_template_id_ff8b6f80_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageComponent.vue?vue&type=template&id=ff8b6f80&scoped=true */ "./resources/ts/vue/backend/pages/builder/components/ImageComponent.vue?vue&type=template&id=ff8b6f80&scoped=true");
/* harmony import */ var _ImageComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/components/ImageComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _ImageComponent_vue_vue_type_style_index_0_id_ff8b6f80_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageComponent.vue?vue&type=style&index=0&id=ff8b6f80&scoped=true&lang=css */ "./resources/ts/vue/backend/pages/builder/components/ImageComponent.vue?vue&type=style&index=0&id=ff8b6f80&scoped=true&lang=css");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ImageComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ImageComponent_vue_vue_type_template_id_ff8b6f80_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-ff8b6f80"],['__file',"resources/ts/vue/backend/pages/builder/components/ImageComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/ImageViewComponent.vue":
/*!**********************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/ImageViewComponent.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ImageViewComponent_vue_vue_type_template_id_076c37ca_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageViewComponent.vue?vue&type=template&id=076c37ca&scoped=true */ "./resources/ts/vue/backend/pages/builder/components/ImageViewComponent.vue?vue&type=template&id=076c37ca&scoped=true");
/* harmony import */ var _ImageViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageViewComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/components/ImageViewComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _ImageViewComponent_vue_vue_type_style_index_0_id_076c37ca_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageViewComponent.vue?vue&type=style&index=0&id=076c37ca&scoped=true&lang=css */ "./resources/ts/vue/backend/pages/builder/components/ImageViewComponent.vue?vue&type=style&index=0&id=076c37ca&scoped=true&lang=css");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ImageViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ImageViewComponent_vue_vue_type_template_id_076c37ca_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-076c37ca"],['__file',"resources/ts/vue/backend/pages/builder/components/ImageViewComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/LinkCompoent.vue":
/*!****************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/LinkCompoent.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LinkCompoent_vue_vue_type_template_id_613c3623__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkCompoent.vue?vue&type=template&id=613c3623 */ "./resources/ts/vue/backend/pages/builder/components/LinkCompoent.vue?vue&type=template&id=613c3623");
/* harmony import */ var _LinkCompoent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinkCompoent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/components/LinkCompoent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_LinkCompoent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LinkCompoent_vue_vue_type_template_id_613c3623__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/builder/components/LinkCompoent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/LocationComponent.vue":
/*!*********************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/LocationComponent.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LocationComponent_vue_vue_type_template_id_7cb19cda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocationComponent.vue?vue&type=template&id=7cb19cda */ "./resources/ts/vue/backend/pages/builder/components/LocationComponent.vue?vue&type=template&id=7cb19cda");
/* harmony import */ var _LocationComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocationComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/components/LocationComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_LocationComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LocationComponent_vue_vue_type_template_id_7cb19cda__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/builder/components/LocationComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/LocationViewComponent.vue":
/*!*************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/LocationViewComponent.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LocationViewComponent_vue_vue_type_template_id_e51d4896__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocationViewComponent.vue?vue&type=template&id=e51d4896 */ "./resources/ts/vue/backend/pages/builder/components/LocationViewComponent.vue?vue&type=template&id=e51d4896");
/* harmony import */ var _LocationViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocationViewComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/components/LocationViewComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_LocationViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LocationViewComponent_vue_vue_type_template_id_e51d4896__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/builder/components/LocationViewComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/MailComponent.vue":
/*!*****************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/MailComponent.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MailComponent_vue_vue_type_template_id_216d51d0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MailComponent.vue?vue&type=template&id=216d51d0 */ "./resources/ts/vue/backend/pages/builder/components/MailComponent.vue?vue&type=template&id=216d51d0");
/* harmony import */ var _MailComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MailComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/components/MailComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_MailComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MailComponent_vue_vue_type_template_id_216d51d0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/builder/components/MailComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/PaypalComponent.vue":
/*!*******************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/PaypalComponent.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PaypalComponent_vue_vue_type_template_id_5bd9ae48__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaypalComponent.vue?vue&type=template&id=5bd9ae48 */ "./resources/ts/vue/backend/pages/builder/components/PaypalComponent.vue?vue&type=template&id=5bd9ae48");
/* harmony import */ var _PaypalComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaypalComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/components/PaypalComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PaypalComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PaypalComponent_vue_vue_type_template_id_5bd9ae48__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/builder/components/PaypalComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/PaypalViewComponent.vue":
/*!***********************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/PaypalViewComponent.vue ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PaypalViewComponent_vue_vue_type_template_id_016dd292__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaypalViewComponent.vue?vue&type=template&id=016dd292 */ "./resources/ts/vue/backend/pages/builder/components/PaypalViewComponent.vue?vue&type=template&id=016dd292");
/* harmony import */ var _PaypalViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaypalViewComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/components/PaypalViewComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PaypalViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PaypalViewComponent_vue_vue_type_template_id_016dd292__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/builder/components/PaypalViewComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/PhoneComponent.vue":
/*!******************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/PhoneComponent.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PhoneComponent_vue_vue_type_template_id_17e02b0d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhoneComponent.vue?vue&type=template&id=17e02b0d */ "./resources/ts/vue/backend/pages/builder/components/PhoneComponent.vue?vue&type=template&id=17e02b0d");
/* harmony import */ var _PhoneComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhoneComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/components/PhoneComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PhoneComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PhoneComponent_vue_vue_type_template_id_17e02b0d__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/builder/components/PhoneComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/QuestionComponent.vue":
/*!*********************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/QuestionComponent.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuestionComponent_vue_vue_type_template_id_d1dfcf6e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuestionComponent.vue?vue&type=template&id=d1dfcf6e */ "./resources/ts/vue/backend/pages/builder/components/QuestionComponent.vue?vue&type=template&id=d1dfcf6e");
/* harmony import */ var _QuestionComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuestionComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/components/QuestionComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_QuestionComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_QuestionComponent_vue_vue_type_template_id_d1dfcf6e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/builder/components/QuestionComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/QuoteComponent.vue":
/*!******************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/QuoteComponent.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuoteComponent_vue_vue_type_template_id_1036d0bf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuoteComponent.vue?vue&type=template&id=1036d0bf */ "./resources/ts/vue/backend/pages/builder/components/QuoteComponent.vue?vue&type=template&id=1036d0bf");
/* harmony import */ var _QuoteComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuoteComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/components/QuoteComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_QuoteComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_QuoteComponent_vue_vue_type_template_id_1036d0bf__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/builder/components/QuoteComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/QuoteViewComponent.vue":
/*!**********************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/QuoteViewComponent.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuoteViewComponent_vue_vue_type_template_id_9c7fd5cc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuoteViewComponent.vue?vue&type=template&id=9c7fd5cc */ "./resources/ts/vue/backend/pages/builder/components/QuoteViewComponent.vue?vue&type=template&id=9c7fd5cc");
/* harmony import */ var _QuoteViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuoteViewComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/components/QuoteViewComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_QuoteViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_QuoteViewComponent_vue_vue_type_template_id_9c7fd5cc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/builder/components/QuoteViewComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/SocialComponent.vue":
/*!*******************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/SocialComponent.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./resources/ts/vue/backend/pages/builder/components/SocialViewComponent.vue":
/*!***********************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/SocialViewComponent.vue ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SocialViewComponent_vue_vue_type_template_id_62c7bd06__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SocialViewComponent.vue?vue&type=template&id=62c7bd06 */ "./resources/ts/vue/backend/pages/builder/components/SocialViewComponent.vue?vue&type=template&id=62c7bd06");
/* harmony import */ var _SocialViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocialViewComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/components/SocialViewComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _SocialViewComponent_vue_vue_type_style_index_0_id_62c7bd06_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SocialViewComponent.vue?vue&type=style&index=0&id=62c7bd06&lang=css */ "./resources/ts/vue/backend/pages/builder/components/SocialViewComponent.vue?vue&type=style&index=0&id=62c7bd06&lang=css");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_SocialViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SocialViewComponent_vue_vue_type_template_id_62c7bd06__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/builder/components/SocialViewComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/SoundcloudComponent.vue":
/*!***********************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/SoundcloudComponent.vue ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SoundcloudComponent_vue_vue_type_template_id_6cac89ae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SoundcloudComponent.vue?vue&type=template&id=6cac89ae */ "./resources/ts/vue/backend/pages/builder/components/SoundcloudComponent.vue?vue&type=template&id=6cac89ae");
/* harmony import */ var _SoundcloudComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SoundcloudComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/components/SoundcloudComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SoundcloudComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SoundcloudComponent_vue_vue_type_template_id_6cac89ae__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/builder/components/SoundcloudComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/SoundcloudViewComponent.vue":
/*!***************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/SoundcloudViewComponent.vue ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SoundcloudViewComponent_vue_vue_type_template_id_4983ba84__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SoundcloudViewComponent.vue?vue&type=template&id=4983ba84 */ "./resources/ts/vue/backend/pages/builder/components/SoundcloudViewComponent.vue?vue&type=template&id=4983ba84");
/* harmony import */ var _SoundcloudViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SoundcloudViewComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/components/SoundcloudViewComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SoundcloudViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SoundcloudViewComponent_vue_vue_type_template_id_4983ba84__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/builder/components/SoundcloudViewComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/SpotifyComponent.vue":
/*!********************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/SpotifyComponent.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SpotifyComponent_vue_vue_type_template_id_0330387e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpotifyComponent.vue?vue&type=template&id=0330387e */ "./resources/ts/vue/backend/pages/builder/components/SpotifyComponent.vue?vue&type=template&id=0330387e");
/* harmony import */ var _SpotifyComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpotifyComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/components/SpotifyComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SpotifyComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SpotifyComponent_vue_vue_type_template_id_0330387e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/builder/components/SpotifyComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/SpotifyViewComponent.vue":
/*!************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/SpotifyViewComponent.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SpotifyViewComponent_vue_vue_type_template_id_2b4bd71c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpotifyViewComponent.vue?vue&type=template&id=2b4bd71c */ "./resources/ts/vue/backend/pages/builder/components/SpotifyViewComponent.vue?vue&type=template&id=2b4bd71c");
/* harmony import */ var _SpotifyViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpotifyViewComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/components/SpotifyViewComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SpotifyViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SpotifyViewComponent_vue_vue_type_template_id_2b4bd71c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/builder/components/SpotifyViewComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/TextComponent.vue":
/*!*****************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/TextComponent.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextComponent_vue_vue_type_template_id_0601313c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextComponent.vue?vue&type=template&id=0601313c */ "./resources/ts/vue/backend/pages/builder/components/TextComponent.vue?vue&type=template&id=0601313c");
/* harmony import */ var _TextComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/components/TextComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_TextComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TextComponent_vue_vue_type_template_id_0601313c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/builder/components/TextComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/VideoComponent.vue":
/*!******************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/VideoComponent.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VideoComponent_vue_vue_type_template_id_06b81dc0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoComponent.vue?vue&type=template&id=06b81dc0 */ "./resources/ts/vue/backend/pages/builder/components/VideoComponent.vue?vue&type=template&id=06b81dc0");
/* harmony import */ var _VideoComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/components/VideoComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_VideoComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_VideoComponent_vue_vue_type_template_id_06b81dc0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/builder/components/VideoComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/YoutubeComponent.vue":
/*!********************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/YoutubeComponent.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _YoutubeComponent_vue_vue_type_template_id_7fee5c10__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./YoutubeComponent.vue?vue&type=template&id=7fee5c10 */ "./resources/ts/vue/backend/pages/builder/components/YoutubeComponent.vue?vue&type=template&id=7fee5c10");
/* harmony import */ var _YoutubeComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./YoutubeComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/components/YoutubeComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_YoutubeComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_YoutubeComponent_vue_vue_type_template_id_7fee5c10__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/builder/components/YoutubeComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/YoutubeViewComponent.vue":
/*!************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/YoutubeViewComponent.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _YoutubeViewComponent_vue_vue_type_template_id_39ccd1d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./YoutubeViewComponent.vue?vue&type=template&id=39ccd1d3 */ "./resources/ts/vue/backend/pages/builder/components/YoutubeViewComponent.vue?vue&type=template&id=39ccd1d3");
/* harmony import */ var _YoutubeViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./YoutubeViewComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/components/YoutubeViewComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_YoutubeViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_YoutubeViewComponent_vue_vue_type_template_id_39ccd1d3__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/builder/components/YoutubeViewComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/profile/AppearanceComponent.vue":
/*!********************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/profile/AppearanceComponent.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppearanceComponent_vue_vue_type_template_id_96de5350_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppearanceComponent.vue?vue&type=template&id=96de5350&scoped=true */ "./resources/ts/vue/backend/pages/builder/profile/AppearanceComponent.vue?vue&type=template&id=96de5350&scoped=true");
/* harmony import */ var _AppearanceComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppearanceComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/profile/AppearanceComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _AppearanceComponent_vue_vue_type_style_index_0_id_96de5350_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppearanceComponent.vue?vue&type=style&index=0&id=96de5350&scoped=true&lang=css */ "./resources/ts/vue/backend/pages/builder/profile/AppearanceComponent.vue?vue&type=style&index=0&id=96de5350&scoped=true&lang=css");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_AppearanceComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AppearanceComponent_vue_vue_type_template_id_96de5350_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-96de5350"],['__file',"resources/ts/vue/backend/pages/builder/profile/AppearanceComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/profile/BuilderContentComponent.vue":
/*!************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/profile/BuilderContentComponent.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BuilderContentComponent_vue_vue_type_template_id_66e3351e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuilderContentComponent.vue?vue&type=template&id=66e3351e&scoped=true */ "./resources/ts/vue/backend/pages/builder/profile/BuilderContentComponent.vue?vue&type=template&id=66e3351e&scoped=true");
/* harmony import */ var _BuilderContentComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BuilderContentComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/profile/BuilderContentComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _BuilderContentComponent_vue_vue_type_style_index_0_id_66e3351e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BuilderContentComponent.vue?vue&type=style&index=0&id=66e3351e&scoped=true&lang=css */ "./resources/ts/vue/backend/pages/builder/profile/BuilderContentComponent.vue?vue&type=style&index=0&id=66e3351e&scoped=true&lang=css");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_BuilderContentComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BuilderContentComponent_vue_vue_type_template_id_66e3351e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-66e3351e"],['__file',"resources/ts/vue/backend/pages/builder/profile/BuilderContentComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/profile/PhoneElementsComponent.vue":
/*!***********************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/profile/PhoneElementsComponent.vue ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PhoneElementsComponent_vue_vue_type_template_id_2edb982e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhoneElementsComponent.vue?vue&type=template&id=2edb982e */ "./resources/ts/vue/backend/pages/builder/profile/PhoneElementsComponent.vue?vue&type=template&id=2edb982e");
/* harmony import */ var _PhoneElementsComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhoneElementsComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/profile/PhoneElementsComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PhoneElementsComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PhoneElementsComponent_vue_vue_type_template_id_2edb982e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/builder/profile/PhoneElementsComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/profile/SettingsComponent.vue":
/*!******************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/profile/SettingsComponent.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SettingsComponent_vue_vue_type_template_id_5490cab9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SettingsComponent.vue?vue&type=template&id=5490cab9 */ "./resources/ts/vue/backend/pages/builder/profile/SettingsComponent.vue?vue&type=template&id=5490cab9");
/* harmony import */ var _SettingsComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SettingsComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/profile/SettingsComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SettingsComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SettingsComponent_vue_vue_type_template_id_5490cab9__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/builder/profile/SettingsComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/profile/ThemesComponent.vue":
/*!****************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/profile/ThemesComponent.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ThemesComponent_vue_vue_type_template_id_6c23c032__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThemesComponent.vue?vue&type=template&id=6c23c032 */ "./resources/ts/vue/backend/pages/builder/profile/ThemesComponent.vue?vue&type=template&id=6c23c032");
/* harmony import */ var _ThemesComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThemesComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/profile/ThemesComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ThemesComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ThemesComponent_vue_vue_type_template_id_6c23c032__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/builder/profile/ThemesComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/profile/profileBuilderComponent.vue":
/*!************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/profile/profileBuilderComponent.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _profileBuilderComponent_vue_vue_type_template_id_1c0c406a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profileBuilderComponent.vue?vue&type=template&id=1c0c406a&scoped=true */ "./resources/ts/vue/backend/pages/builder/profile/profileBuilderComponent.vue?vue&type=template&id=1c0c406a&scoped=true");
/* harmony import */ var _profileBuilderComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profileBuilderComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/builder/profile/profileBuilderComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _profileBuilderComponent_vue_vue_type_style_index_0_id_1c0c406a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profileBuilderComponent.vue?vue&type=style&index=0&id=1c0c406a&scoped=true&lang=css */ "./resources/ts/vue/backend/pages/builder/profile/profileBuilderComponent.vue?vue&type=style&index=0&id=1c0c406a&scoped=true&lang=css");
/* harmony import */ var C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_laragon_www_lara10starter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_profileBuilderComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_profileBuilderComponent_vue_vue_type_template_id_1c0c406a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-1c0c406a"],['__file',"resources/ts/vue/backend/pages/builder/profile/profileBuilderComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/AccountViewComponent.vue?vue&type=script&lang=js":
/*!************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/AccountViewComponent.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AccountViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AccountViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AccountViewComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/AccountViewComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/AvatarComponent.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/AvatarComponent.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AvatarComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AvatarComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AvatarComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/AvatarComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/BrandingComponent.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/BrandingComponent.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BrandingComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BrandingComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BrandingComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/BrandingComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/ColorBoxComponent.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/ColorBoxComponent.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColorBoxComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColorBoxComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ColorBoxComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/ColorBoxComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/DividerComponent.vue?vue&type=script&lang=js":
/*!********************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/DividerComponent.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DividerComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DividerComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DividerComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/DividerComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/DividerViewComponent.vue?vue&type=script&lang=js":
/*!************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/DividerViewComponent.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DividerViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DividerViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DividerViewComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/DividerViewComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/HTMLComponent.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/HTMLComponent.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HTMLComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HTMLComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HTMLComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/HTMLComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/HTMLViewComponent.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/HTMLViewComponent.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HTMLViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HTMLViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HTMLViewComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/HTMLViewComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/HeadingComponent.vue?vue&type=script&lang=js":
/*!********************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/HeadingComponent.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HeadingComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HeadingComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HeadingComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/HeadingComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/ImageComponent.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/ImageComponent.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImageComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImageComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ImageComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/ImageComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/ImageViewComponent.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/ImageViewComponent.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImageViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImageViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ImageViewComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/ImageViewComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/LinkCompoent.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/LinkCompoent.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LinkCompoent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LinkCompoent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LinkCompoent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/LinkCompoent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/LocationComponent.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/LocationComponent.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LocationComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LocationComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LocationComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/LocationComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/LocationViewComponent.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/LocationViewComponent.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LocationViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LocationViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LocationViewComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/LocationViewComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/MailComponent.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/MailComponent.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MailComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MailComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MailComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/MailComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/PaypalComponent.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/PaypalComponent.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PaypalComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PaypalComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PaypalComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/PaypalComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/PaypalViewComponent.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/PaypalViewComponent.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PaypalViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PaypalViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PaypalViewComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/PaypalViewComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/PhoneComponent.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/PhoneComponent.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PhoneComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PhoneComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PhoneComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/PhoneComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/QuestionComponent.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/QuestionComponent.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuestionComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuestionComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./QuestionComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/QuestionComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/QuoteComponent.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/QuoteComponent.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuoteComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuoteComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./QuoteComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/QuoteComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/QuoteViewComponent.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/QuoteViewComponent.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuoteViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuoteViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./QuoteViewComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/QuoteViewComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/SocialComponent.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/SocialComponent.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SocialComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SocialComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SocialComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SocialComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/SocialViewComponent.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/SocialViewComponent.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SocialViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SocialViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SocialViewComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SocialViewComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/SoundcloudComponent.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/SoundcloudComponent.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SoundcloudComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SoundcloudComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SoundcloudComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SoundcloudComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/SoundcloudViewComponent.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/SoundcloudViewComponent.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SoundcloudViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SoundcloudViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SoundcloudViewComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SoundcloudViewComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/SpotifyComponent.vue?vue&type=script&lang=js":
/*!********************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/SpotifyComponent.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SpotifyComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SpotifyComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SpotifyComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SpotifyComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/SpotifyViewComponent.vue?vue&type=script&lang=js":
/*!************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/SpotifyViewComponent.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SpotifyViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SpotifyViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SpotifyViewComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SpotifyViewComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/TextComponent.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/TextComponent.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TextComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/TextComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/VideoComponent.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/VideoComponent.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VideoComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VideoComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VideoComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/VideoComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/YoutubeComponent.vue?vue&type=script&lang=js":
/*!********************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/YoutubeComponent.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_YoutubeComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_YoutubeComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./YoutubeComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/YoutubeComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/YoutubeViewComponent.vue?vue&type=script&lang=js":
/*!************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/YoutubeViewComponent.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_YoutubeViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_YoutubeViewComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./YoutubeViewComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/YoutubeViewComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/profile/AppearanceComponent.vue?vue&type=script&lang=js":
/*!********************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/profile/AppearanceComponent.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppearanceComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppearanceComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppearanceComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/AppearanceComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/profile/BuilderContentComponent.vue?vue&type=script&lang=js":
/*!************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/profile/BuilderContentComponent.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BuilderContentComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BuilderContentComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BuilderContentComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/BuilderContentComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/profile/PhoneElementsComponent.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/profile/PhoneElementsComponent.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PhoneElementsComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PhoneElementsComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PhoneElementsComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/PhoneElementsComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/profile/SettingsComponent.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/profile/SettingsComponent.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SettingsComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SettingsComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SettingsComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/SettingsComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/profile/ThemesComponent.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/profile/ThemesComponent.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ThemesComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ThemesComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ThemesComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/ThemesComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/profile/profileBuilderComponent.vue?vue&type=script&lang=js":
/*!************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/profile/profileBuilderComponent.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_profileBuilderComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_profileBuilderComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./profileBuilderComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/profileBuilderComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/AccountViewComponent.vue?vue&type=template&id=d90dafee":
/*!******************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/AccountViewComponent.vue?vue&type=template&id=d90dafee ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AccountViewComponent_vue_vue_type_template_id_d90dafee__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AccountViewComponent_vue_vue_type_template_id_d90dafee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AccountViewComponent.vue?vue&type=template&id=d90dafee */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/AccountViewComponent.vue?vue&type=template&id=d90dafee");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/AvatarComponent.vue?vue&type=template&id=269c5c36&scoped=true":
/*!*************************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/AvatarComponent.vue?vue&type=template&id=269c5c36&scoped=true ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AvatarComponent_vue_vue_type_template_id_269c5c36_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AvatarComponent_vue_vue_type_template_id_269c5c36_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AvatarComponent.vue?vue&type=template&id=269c5c36&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/AvatarComponent.vue?vue&type=template&id=269c5c36&scoped=true");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/BrandingComponent.vue?vue&type=template&id=f7b11958":
/*!***************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/BrandingComponent.vue?vue&type=template&id=f7b11958 ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BrandingComponent_vue_vue_type_template_id_f7b11958__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BrandingComponent_vue_vue_type_template_id_f7b11958__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BrandingComponent.vue?vue&type=template&id=f7b11958 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/BrandingComponent.vue?vue&type=template&id=f7b11958");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/ColorBoxComponent.vue?vue&type=template&id=4b33bff2":
/*!***************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/ColorBoxComponent.vue?vue&type=template&id=4b33bff2 ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColorBoxComponent_vue_vue_type_template_id_4b33bff2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColorBoxComponent_vue_vue_type_template_id_4b33bff2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ColorBoxComponent.vue?vue&type=template&id=4b33bff2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/ColorBoxComponent.vue?vue&type=template&id=4b33bff2");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/DividerComponent.vue?vue&type=template&id=73a1ec7c":
/*!**************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/DividerComponent.vue?vue&type=template&id=73a1ec7c ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DividerComponent_vue_vue_type_template_id_73a1ec7c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DividerComponent_vue_vue_type_template_id_73a1ec7c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DividerComponent.vue?vue&type=template&id=73a1ec7c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/DividerComponent.vue?vue&type=template&id=73a1ec7c");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/DividerViewComponent.vue?vue&type=template&id=61c3d6c6":
/*!******************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/DividerViewComponent.vue?vue&type=template&id=61c3d6c6 ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DividerViewComponent_vue_vue_type_template_id_61c3d6c6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DividerViewComponent_vue_vue_type_template_id_61c3d6c6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DividerViewComponent.vue?vue&type=template&id=61c3d6c6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/DividerViewComponent.vue?vue&type=template&id=61c3d6c6");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/HTMLComponent.vue?vue&type=template&id=50522c78":
/*!***********************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/HTMLComponent.vue?vue&type=template&id=50522c78 ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HTMLComponent_vue_vue_type_template_id_50522c78__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HTMLComponent_vue_vue_type_template_id_50522c78__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HTMLComponent.vue?vue&type=template&id=50522c78 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/HTMLComponent.vue?vue&type=template&id=50522c78");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/HTMLViewComponent.vue?vue&type=template&id=09f2239f":
/*!***************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/HTMLViewComponent.vue?vue&type=template&id=09f2239f ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HTMLViewComponent_vue_vue_type_template_id_09f2239f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HTMLViewComponent_vue_vue_type_template_id_09f2239f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HTMLViewComponent.vue?vue&type=template&id=09f2239f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/HTMLViewComponent.vue?vue&type=template&id=09f2239f");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/HeadingComponent.vue?vue&type=template&id=56cc6179":
/*!**************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/HeadingComponent.vue?vue&type=template&id=56cc6179 ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HeadingComponent_vue_vue_type_template_id_56cc6179__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HeadingComponent_vue_vue_type_template_id_56cc6179__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HeadingComponent.vue?vue&type=template&id=56cc6179 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/HeadingComponent.vue?vue&type=template&id=56cc6179");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/ImageComponent.vue?vue&type=template&id=ff8b6f80&scoped=true":
/*!************************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/ImageComponent.vue?vue&type=template&id=ff8b6f80&scoped=true ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImageComponent_vue_vue_type_template_id_ff8b6f80_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImageComponent_vue_vue_type_template_id_ff8b6f80_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ImageComponent.vue?vue&type=template&id=ff8b6f80&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/ImageComponent.vue?vue&type=template&id=ff8b6f80&scoped=true");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/ImageViewComponent.vue?vue&type=template&id=076c37ca&scoped=true":
/*!****************************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/ImageViewComponent.vue?vue&type=template&id=076c37ca&scoped=true ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImageViewComponent_vue_vue_type_template_id_076c37ca_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImageViewComponent_vue_vue_type_template_id_076c37ca_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ImageViewComponent.vue?vue&type=template&id=076c37ca&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/ImageViewComponent.vue?vue&type=template&id=076c37ca&scoped=true");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/LinkCompoent.vue?vue&type=template&id=613c3623":
/*!**********************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/LinkCompoent.vue?vue&type=template&id=613c3623 ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LinkCompoent_vue_vue_type_template_id_613c3623__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LinkCompoent_vue_vue_type_template_id_613c3623__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LinkCompoent.vue?vue&type=template&id=613c3623 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/LinkCompoent.vue?vue&type=template&id=613c3623");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/LocationComponent.vue?vue&type=template&id=7cb19cda":
/*!***************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/LocationComponent.vue?vue&type=template&id=7cb19cda ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LocationComponent_vue_vue_type_template_id_7cb19cda__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LocationComponent_vue_vue_type_template_id_7cb19cda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LocationComponent.vue?vue&type=template&id=7cb19cda */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/LocationComponent.vue?vue&type=template&id=7cb19cda");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/LocationViewComponent.vue?vue&type=template&id=e51d4896":
/*!*******************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/LocationViewComponent.vue?vue&type=template&id=e51d4896 ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LocationViewComponent_vue_vue_type_template_id_e51d4896__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LocationViewComponent_vue_vue_type_template_id_e51d4896__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LocationViewComponent.vue?vue&type=template&id=e51d4896 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/LocationViewComponent.vue?vue&type=template&id=e51d4896");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/MailComponent.vue?vue&type=template&id=216d51d0":
/*!***********************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/MailComponent.vue?vue&type=template&id=216d51d0 ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MailComponent_vue_vue_type_template_id_216d51d0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MailComponent_vue_vue_type_template_id_216d51d0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MailComponent.vue?vue&type=template&id=216d51d0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/MailComponent.vue?vue&type=template&id=216d51d0");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/PaypalComponent.vue?vue&type=template&id=5bd9ae48":
/*!*************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/PaypalComponent.vue?vue&type=template&id=5bd9ae48 ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PaypalComponent_vue_vue_type_template_id_5bd9ae48__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PaypalComponent_vue_vue_type_template_id_5bd9ae48__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PaypalComponent.vue?vue&type=template&id=5bd9ae48 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/PaypalComponent.vue?vue&type=template&id=5bd9ae48");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/PaypalViewComponent.vue?vue&type=template&id=016dd292":
/*!*****************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/PaypalViewComponent.vue?vue&type=template&id=016dd292 ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PaypalViewComponent_vue_vue_type_template_id_016dd292__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PaypalViewComponent_vue_vue_type_template_id_016dd292__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PaypalViewComponent.vue?vue&type=template&id=016dd292 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/PaypalViewComponent.vue?vue&type=template&id=016dd292");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/PhoneComponent.vue?vue&type=template&id=17e02b0d":
/*!************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/PhoneComponent.vue?vue&type=template&id=17e02b0d ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PhoneComponent_vue_vue_type_template_id_17e02b0d__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PhoneComponent_vue_vue_type_template_id_17e02b0d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PhoneComponent.vue?vue&type=template&id=17e02b0d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/PhoneComponent.vue?vue&type=template&id=17e02b0d");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/QuestionComponent.vue?vue&type=template&id=d1dfcf6e":
/*!***************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/QuestionComponent.vue?vue&type=template&id=d1dfcf6e ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuestionComponent_vue_vue_type_template_id_d1dfcf6e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuestionComponent_vue_vue_type_template_id_d1dfcf6e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./QuestionComponent.vue?vue&type=template&id=d1dfcf6e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/QuestionComponent.vue?vue&type=template&id=d1dfcf6e");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/QuoteComponent.vue?vue&type=template&id=1036d0bf":
/*!************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/QuoteComponent.vue?vue&type=template&id=1036d0bf ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuoteComponent_vue_vue_type_template_id_1036d0bf__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuoteComponent_vue_vue_type_template_id_1036d0bf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./QuoteComponent.vue?vue&type=template&id=1036d0bf */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/QuoteComponent.vue?vue&type=template&id=1036d0bf");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/QuoteViewComponent.vue?vue&type=template&id=9c7fd5cc":
/*!****************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/QuoteViewComponent.vue?vue&type=template&id=9c7fd5cc ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuoteViewComponent_vue_vue_type_template_id_9c7fd5cc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuoteViewComponent_vue_vue_type_template_id_9c7fd5cc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./QuoteViewComponent.vue?vue&type=template&id=9c7fd5cc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/QuoteViewComponent.vue?vue&type=template&id=9c7fd5cc");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/SocialComponent.vue?vue&type=template&id=3d12f2bc":
/*!*************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/SocialComponent.vue?vue&type=template&id=3d12f2bc ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SocialComponent_vue_vue_type_template_id_3d12f2bc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SocialComponent_vue_vue_type_template_id_3d12f2bc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SocialComponent.vue?vue&type=template&id=3d12f2bc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SocialComponent.vue?vue&type=template&id=3d12f2bc");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/SocialViewComponent.vue?vue&type=template&id=62c7bd06":
/*!*****************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/SocialViewComponent.vue?vue&type=template&id=62c7bd06 ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SocialViewComponent_vue_vue_type_template_id_62c7bd06__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SocialViewComponent_vue_vue_type_template_id_62c7bd06__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SocialViewComponent.vue?vue&type=template&id=62c7bd06 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SocialViewComponent.vue?vue&type=template&id=62c7bd06");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/SoundcloudComponent.vue?vue&type=template&id=6cac89ae":
/*!*****************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/SoundcloudComponent.vue?vue&type=template&id=6cac89ae ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SoundcloudComponent_vue_vue_type_template_id_6cac89ae__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SoundcloudComponent_vue_vue_type_template_id_6cac89ae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SoundcloudComponent.vue?vue&type=template&id=6cac89ae */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SoundcloudComponent.vue?vue&type=template&id=6cac89ae");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/SoundcloudViewComponent.vue?vue&type=template&id=4983ba84":
/*!*********************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/SoundcloudViewComponent.vue?vue&type=template&id=4983ba84 ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SoundcloudViewComponent_vue_vue_type_template_id_4983ba84__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SoundcloudViewComponent_vue_vue_type_template_id_4983ba84__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SoundcloudViewComponent.vue?vue&type=template&id=4983ba84 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SoundcloudViewComponent.vue?vue&type=template&id=4983ba84");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/SpotifyComponent.vue?vue&type=template&id=0330387e":
/*!**************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/SpotifyComponent.vue?vue&type=template&id=0330387e ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SpotifyComponent_vue_vue_type_template_id_0330387e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SpotifyComponent_vue_vue_type_template_id_0330387e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SpotifyComponent.vue?vue&type=template&id=0330387e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SpotifyComponent.vue?vue&type=template&id=0330387e");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/SpotifyViewComponent.vue?vue&type=template&id=2b4bd71c":
/*!******************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/SpotifyViewComponent.vue?vue&type=template&id=2b4bd71c ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SpotifyViewComponent_vue_vue_type_template_id_2b4bd71c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SpotifyViewComponent_vue_vue_type_template_id_2b4bd71c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SpotifyViewComponent.vue?vue&type=template&id=2b4bd71c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SpotifyViewComponent.vue?vue&type=template&id=2b4bd71c");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/TextComponent.vue?vue&type=template&id=0601313c":
/*!***********************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/TextComponent.vue?vue&type=template&id=0601313c ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextComponent_vue_vue_type_template_id_0601313c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextComponent_vue_vue_type_template_id_0601313c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TextComponent.vue?vue&type=template&id=0601313c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/TextComponent.vue?vue&type=template&id=0601313c");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/VideoComponent.vue?vue&type=template&id=06b81dc0":
/*!************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/VideoComponent.vue?vue&type=template&id=06b81dc0 ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VideoComponent_vue_vue_type_template_id_06b81dc0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VideoComponent_vue_vue_type_template_id_06b81dc0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VideoComponent.vue?vue&type=template&id=06b81dc0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/VideoComponent.vue?vue&type=template&id=06b81dc0");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/YoutubeComponent.vue?vue&type=template&id=7fee5c10":
/*!**************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/YoutubeComponent.vue?vue&type=template&id=7fee5c10 ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_YoutubeComponent_vue_vue_type_template_id_7fee5c10__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_YoutubeComponent_vue_vue_type_template_id_7fee5c10__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./YoutubeComponent.vue?vue&type=template&id=7fee5c10 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/YoutubeComponent.vue?vue&type=template&id=7fee5c10");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/YoutubeViewComponent.vue?vue&type=template&id=39ccd1d3":
/*!******************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/YoutubeViewComponent.vue?vue&type=template&id=39ccd1d3 ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_YoutubeViewComponent_vue_vue_type_template_id_39ccd1d3__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_YoutubeViewComponent_vue_vue_type_template_id_39ccd1d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./YoutubeViewComponent.vue?vue&type=template&id=39ccd1d3 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/YoutubeViewComponent.vue?vue&type=template&id=39ccd1d3");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/profile/AppearanceComponent.vue?vue&type=template&id=96de5350&scoped=true":
/*!**************************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/profile/AppearanceComponent.vue?vue&type=template&id=96de5350&scoped=true ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppearanceComponent_vue_vue_type_template_id_96de5350_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppearanceComponent_vue_vue_type_template_id_96de5350_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppearanceComponent.vue?vue&type=template&id=96de5350&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/AppearanceComponent.vue?vue&type=template&id=96de5350&scoped=true");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/profile/BuilderContentComponent.vue?vue&type=template&id=66e3351e&scoped=true":
/*!******************************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/profile/BuilderContentComponent.vue?vue&type=template&id=66e3351e&scoped=true ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BuilderContentComponent_vue_vue_type_template_id_66e3351e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BuilderContentComponent_vue_vue_type_template_id_66e3351e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BuilderContentComponent.vue?vue&type=template&id=66e3351e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/BuilderContentComponent.vue?vue&type=template&id=66e3351e&scoped=true");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/profile/PhoneElementsComponent.vue?vue&type=template&id=2edb982e":
/*!*****************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/profile/PhoneElementsComponent.vue?vue&type=template&id=2edb982e ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PhoneElementsComponent_vue_vue_type_template_id_2edb982e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PhoneElementsComponent_vue_vue_type_template_id_2edb982e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PhoneElementsComponent.vue?vue&type=template&id=2edb982e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/PhoneElementsComponent.vue?vue&type=template&id=2edb982e");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/profile/SettingsComponent.vue?vue&type=template&id=5490cab9":
/*!************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/profile/SettingsComponent.vue?vue&type=template&id=5490cab9 ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SettingsComponent_vue_vue_type_template_id_5490cab9__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SettingsComponent_vue_vue_type_template_id_5490cab9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SettingsComponent.vue?vue&type=template&id=5490cab9 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/SettingsComponent.vue?vue&type=template&id=5490cab9");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/profile/ThemesComponent.vue?vue&type=template&id=6c23c032":
/*!**********************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/profile/ThemesComponent.vue?vue&type=template&id=6c23c032 ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ThemesComponent_vue_vue_type_template_id_6c23c032__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ThemesComponent_vue_vue_type_template_id_6c23c032__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ThemesComponent.vue?vue&type=template&id=6c23c032 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/ThemesComponent.vue?vue&type=template&id=6c23c032");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/profile/profileBuilderComponent.vue?vue&type=template&id=1c0c406a&scoped=true":
/*!******************************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/profile/profileBuilderComponent.vue?vue&type=template&id=1c0c406a&scoped=true ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_profileBuilderComponent_vue_vue_type_template_id_1c0c406a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_profileBuilderComponent_vue_vue_type_template_id_1c0c406a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./profileBuilderComponent.vue?vue&type=template&id=1c0c406a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/profileBuilderComponent.vue?vue&type=template&id=1c0c406a&scoped=true");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/AccountViewComponent.vue?vue&type=style&index=0&id=d90dafee&lang=css":
/*!********************************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/AccountViewComponent.vue?vue&type=style&index=0&id=d90dafee&lang=css ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AccountViewComponent_vue_vue_type_style_index_0_id_d90dafee_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AccountViewComponent.vue?vue&type=style&index=0&id=d90dafee&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/AccountViewComponent.vue?vue&type=style&index=0&id=d90dafee&lang=css");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/AvatarComponent.vue?vue&type=style&index=0&id=269c5c36&scoped=true&lang=css":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/AvatarComponent.vue?vue&type=style&index=0&id=269c5c36&scoped=true&lang=css ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AvatarComponent_vue_vue_type_style_index_0_id_269c5c36_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AvatarComponent.vue?vue&type=style&index=0&id=269c5c36&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/AvatarComponent.vue?vue&type=style&index=0&id=269c5c36&scoped=true&lang=css");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/BrandingComponent.vue?vue&type=style&index=0&id=f7b11958&lang=css":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/BrandingComponent.vue?vue&type=style&index=0&id=f7b11958&lang=css ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BrandingComponent_vue_vue_type_style_index_0_id_f7b11958_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BrandingComponent.vue?vue&type=style&index=0&id=f7b11958&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/BrandingComponent.vue?vue&type=style&index=0&id=f7b11958&lang=css");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/ImageComponent.vue?vue&type=style&index=0&id=ff8b6f80&scoped=true&lang=css":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/ImageComponent.vue?vue&type=style&index=0&id=ff8b6f80&scoped=true&lang=css ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImageComponent_vue_vue_type_style_index_0_id_ff8b6f80_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ImageComponent.vue?vue&type=style&index=0&id=ff8b6f80&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/ImageComponent.vue?vue&type=style&index=0&id=ff8b6f80&scoped=true&lang=css");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/ImageViewComponent.vue?vue&type=style&index=0&id=076c37ca&scoped=true&lang=css":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/ImageViewComponent.vue?vue&type=style&index=0&id=076c37ca&scoped=true&lang=css ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImageViewComponent_vue_vue_type_style_index_0_id_076c37ca_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ImageViewComponent.vue?vue&type=style&index=0&id=076c37ca&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/ImageViewComponent.vue?vue&type=style&index=0&id=076c37ca&scoped=true&lang=css");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/components/SocialViewComponent.vue?vue&type=style&index=0&id=62c7bd06&lang=css":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/components/SocialViewComponent.vue?vue&type=style&index=0&id=62c7bd06&lang=css ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SocialViewComponent_vue_vue_type_style_index_0_id_62c7bd06_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SocialViewComponent.vue?vue&type=style&index=0&id=62c7bd06&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/components/SocialViewComponent.vue?vue&type=style&index=0&id=62c7bd06&lang=css");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/profile/AppearanceComponent.vue?vue&type=style&index=0&id=96de5350&scoped=true&lang=css":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/profile/AppearanceComponent.vue?vue&type=style&index=0&id=96de5350&scoped=true&lang=css ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppearanceComponent_vue_vue_type_style_index_0_id_96de5350_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppearanceComponent.vue?vue&type=style&index=0&id=96de5350&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/AppearanceComponent.vue?vue&type=style&index=0&id=96de5350&scoped=true&lang=css");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/profile/BuilderContentComponent.vue?vue&type=style&index=0&id=66e3351e&scoped=true&lang=css":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/profile/BuilderContentComponent.vue?vue&type=style&index=0&id=66e3351e&scoped=true&lang=css ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BuilderContentComponent_vue_vue_type_style_index_0_id_66e3351e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BuilderContentComponent.vue?vue&type=style&index=0&id=66e3351e&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/BuilderContentComponent.vue?vue&type=style&index=0&id=66e3351e&scoped=true&lang=css");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/builder/profile/profileBuilderComponent.vue?vue&type=style&index=0&id=1c0c406a&scoped=true&lang=css":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/builder/profile/profileBuilderComponent.vue?vue&type=style&index=0&id=1c0c406a&scoped=true&lang=css ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_profileBuilderComponent_vue_vue_type_style_index_0_id_1c0c406a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./profileBuilderComponent.vue?vue&type=style&index=0&id=1c0c406a&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/builder/profile/profileBuilderComponent.vue?vue&type=style&index=0&id=1c0c406a&scoped=true&lang=css");


/***/ }),

/***/ "./node_modules/vuedraggable/dist/vuedraggable.umd.js":
/*!************************************************************!*\
  !*** ./node_modules/vuedraggable/dist/vuedraggable.umd.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.esm.js"));
	else {}
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE_a352__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_688__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_688__);
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
/******/ 	__nested_webpack_require_688__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_688__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_688__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_688__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_688__.r = function(exports) {
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
/******/ 	__nested_webpack_require_688__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_688__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_688__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_688__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_688__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_688__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_688__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_688__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_688__(__nested_webpack_require_688__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "01f9":
/***/ (function(module, exports, __nested_webpack_require_4164__) {

"use strict";

var LIBRARY = __nested_webpack_require_4164__("2d00");
var $export = __nested_webpack_require_4164__("5ca1");
var redefine = __nested_webpack_require_4164__("2aba");
var hide = __nested_webpack_require_4164__("32e9");
var Iterators = __nested_webpack_require_4164__("84f2");
var $iterCreate = __nested_webpack_require_4164__("41a0");
var setToStringTag = __nested_webpack_require_4164__("7f20");
var getPrototypeOf = __nested_webpack_require_4164__("38fd");
var ITERATOR = __nested_webpack_require_4164__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "02f4":
/***/ (function(module, exports, __nested_webpack_require_7070__) {

var toInteger = __nested_webpack_require_7070__("4588");
var defined = __nested_webpack_require_7070__("be13");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "0390":
/***/ (function(module, exports, __nested_webpack_require_7783__) {

"use strict";

var at = __nested_webpack_require_7783__("02f4")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __nested_webpack_require_8134__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __nested_webpack_require_8134__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __nested_webpack_require_8593__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __nested_webpack_require_8593__("ce10");
var enumBugKeys = __nested_webpack_require_8593__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __nested_webpack_require_8892__) {

var dP = __nested_webpack_require_8892__("86cc");
var anObject = __nested_webpack_require_8892__("cb7c");
var getKeys = __nested_webpack_require_8892__("0d58");

module.exports = __nested_webpack_require_8892__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __nested_webpack_require_9392__) {

"use strict";

__nested_webpack_require_9392__("b0c5");
var redefine = __nested_webpack_require_9392__("2aba");
var hide = __nested_webpack_require_9392__("32e9");
var fails = __nested_webpack_require_9392__("79e5");
var defined = __nested_webpack_require_9392__("be13");
var wks = __nested_webpack_require_9392__("2b4c");
var regexpExec = __nested_webpack_require_9392__("520a");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __nested_webpack_require_12849__) {

var isObject = __nested_webpack_require_12849__("d3f4");
var document = __nested_webpack_require_12849__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __nested_webpack_require_13233__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __nested_webpack_require_13233__("2d95");
var TAG = __nested_webpack_require_13233__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "2621":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __nested_webpack_require_14160__) {

var global = __nested_webpack_require_14160__("7726");
var hide = __nested_webpack_require_14160__("32e9");
var has = __nested_webpack_require_14160__("69a8");
var SRC = __nested_webpack_require_14160__("ca5a")('src');
var $toString = __nested_webpack_require_14160__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__nested_webpack_require_14160__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __nested_webpack_require_15334__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __nested_webpack_require_15334__("cb7c");
var dPs = __nested_webpack_require_15334__("1495");
var enumBugKeys = __nested_webpack_require_15334__("e11e");
var IE_PROTO = __nested_webpack_require_15334__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __nested_webpack_require_15334__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __nested_webpack_require_15334__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __nested_webpack_require_16945__) {

var store = __nested_webpack_require_16945__("5537")('wks');
var uid = __nested_webpack_require_16945__("ca5a");
var Symbol = __nested_webpack_require_16945__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2fdb":
/***/ (function(module, exports, __nested_webpack_require_17667__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __nested_webpack_require_17667__("5ca1");
var context = __nested_webpack_require_17667__("d2c8");
var INCLUDES = 'includes';

$export($export.P + $export.F * __nested_webpack_require_17667__("5147")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __nested_webpack_require_18235__) {

var dP = __nested_webpack_require_18235__("86cc");
var createDesc = __nested_webpack_require_18235__("4630");
module.exports = __nested_webpack_require_18235__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __nested_webpack_require_18611__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __nested_webpack_require_18611__("69a8");
var toObject = __nested_webpack_require_18611__("4bf8");
var IE_PROTO = __nested_webpack_require_18611__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __nested_webpack_require_19205__) {

"use strict";

var create = __nested_webpack_require_19205__("2aeb");
var descriptor = __nested_webpack_require_19205__("4630");
var setToStringTag = __nested_webpack_require_19205__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__nested_webpack_require_19205__("32e9")(IteratorPrototype, __nested_webpack_require_19205__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "456d":
/***/ (function(module, exports, __nested_webpack_require_19831__) {

// 19.1.2.14 Object.keys(O)
var toObject = __nested_webpack_require_19831__("4bf8");
var $keys = __nested_webpack_require_19831__("0d58");

__nested_webpack_require_19831__("5eda")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __nested_webpack_require_20609__) {

// 7.1.13 ToObject(argument)
var defined = __nested_webpack_require_20609__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "5147":
/***/ (function(module, exports, __nested_webpack_require_20831__) {

var MATCH = __nested_webpack_require_20831__("2b4c")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "520a":
/***/ (function(module, exports, __nested_webpack_require_21176__) {

"use strict";


var regexpFlags = __nested_webpack_require_21176__("0bfb");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __nested_webpack_require_23109__) {

var core = __nested_webpack_require_23109__("8378");
var global = __nested_webpack_require_23109__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __nested_webpack_require_23109__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __nested_webpack_require_23642__) {

var global = __nested_webpack_require_23642__("7726");
var core = __nested_webpack_require_23642__("8378");
var hide = __nested_webpack_require_23642__("32e9");
var redefine = __nested_webpack_require_23642__("2aba");
var ctx = __nested_webpack_require_23642__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5eda":
/***/ (function(module, exports, __nested_webpack_require_25367__) {

// most Object methods by ES6 should accept primitives
var $export = __nested_webpack_require_25367__("5ca1");
var core = __nested_webpack_require_25367__("8378");
var fails = __nested_webpack_require_25367__("79e5");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "5f1b":
/***/ (function(module, exports, __nested_webpack_require_25845__) {

"use strict";


var classof = __nested_webpack_require_25845__("23c6");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __nested_webpack_require_26551__) {

var shared = __nested_webpack_require_26551__("5537")('keys');
var uid = __nested_webpack_require_26551__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __nested_webpack_require_26811__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __nested_webpack_require_26811__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "6762":
/***/ (function(module, exports, __nested_webpack_require_27194__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __nested_webpack_require_27194__("5ca1");
var $includes = __nested_webpack_require_27194__("c366")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__nested_webpack_require_27194__("9c6c")('includes');


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __nested_webpack_require_27659__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __nested_webpack_require_27659__("626a");
var defined = __nested_webpack_require_27659__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __nested_webpack_require_28155__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __nested_webpack_require_28155__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "7333":
/***/ (function(module, exports, __nested_webpack_require_28898__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __nested_webpack_require_28898__("0d58");
var gOPS = __nested_webpack_require_28898__("2621");
var pIE = __nested_webpack_require_28898__("52a7");
var toObject = __nested_webpack_require_28898__("4bf8");
var IObject = __nested_webpack_require_28898__("626a");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __nested_webpack_require_28898__("79e5")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __nested_webpack_require_30635__) {

var toInteger = __nested_webpack_require_30635__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __nested_webpack_require_31112__) {

var def = __nested_webpack_require_31112__("86cc").f;
var has = __nested_webpack_require_31112__("69a8");
var TAG = __nested_webpack_require_31112__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __nested_webpack_require_31751__) {

var anObject = __nested_webpack_require_31751__("cb7c");
var IE8_DOM_DEFINE = __nested_webpack_require_31751__("c69a");
var toPrimitive = __nested_webpack_require_31751__("6a99");
var dP = Object.defineProperty;

exports.f = __nested_webpack_require_31751__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __nested_webpack_require_32441__) {

// optional / simple context binding
var aFunction = __nested_webpack_require_32441__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __nested_webpack_require_33048__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __nested_webpack_require_33048__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __nested_webpack_require_33048__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __nested_webpack_require_33448__) {

// 7.1.15 ToLength
var toInteger = __nested_webpack_require_33448__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __nested_webpack_require_33750__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__nested_webpack_require_33750__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a352":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_a352__;

/***/ }),

/***/ "a481":
/***/ (function(module, exports, __nested_webpack_require_34139__) {

"use strict";


var anObject = __nested_webpack_require_34139__("cb7c");
var toObject = __nested_webpack_require_34139__("4bf8");
var toLength = __nested_webpack_require_34139__("9def");
var toInteger = __nested_webpack_require_34139__("4588");
var advanceStringIndex = __nested_webpack_require_34139__("0390");
var regExpExec = __nested_webpack_require_34139__("5f1b");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__nested_webpack_require_34139__("214f")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __nested_webpack_require_38885__) {

// 7.2.8 IsRegExp(argument)
var isObject = __nested_webpack_require_38885__("d3f4");
var cof = __nested_webpack_require_38885__("2d95");
var MATCH = __nested_webpack_require_38885__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __nested_webpack_require_39282__) {

var $iterators = __nested_webpack_require_39282__("cadf");
var getKeys = __nested_webpack_require_39282__("0d58");
var redefine = __nested_webpack_require_39282__("2aba");
var global = __nested_webpack_require_39282__("7726");
var hide = __nested_webpack_require_39282__("32e9");
var Iterators = __nested_webpack_require_39282__("84f2");
var wks = __nested_webpack_require_39282__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "b0c5":
/***/ (function(module, exports, __nested_webpack_require_41209__) {

"use strict";

var regexpExec = __nested_webpack_require_41209__("520a");
__nested_webpack_require_41209__("5ca1")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __nested_webpack_require_41706__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __nested_webpack_require_41706__("6821");
var toLength = __nested_webpack_require_41706__("9def");
var toAbsoluteIndex = __nested_webpack_require_41706__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c649":
/***/ (function(module, __nested_webpack_exports__, __nested_webpack_require_42729__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __nested_webpack_require_42729__.d(__nested_webpack_exports__, "c", function() { return insertNodeAt; });
/* harmony export (binding) */ __nested_webpack_require_42729__.d(__nested_webpack_exports__, "a", function() { return camelize; });
/* harmony export (binding) */ __nested_webpack_require_42729__.d(__nested_webpack_exports__, "b", function() { return console; });
/* harmony export (binding) */ __nested_webpack_require_42729__.d(__nested_webpack_exports__, "d", function() { return removeNode; });
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_42729__("a481");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_42729__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);


function getConsole() {
  if (typeof window !== "undefined") {
    return window.console;
  }

  return global.console;
}

var console = getConsole();

function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

var regex = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(regex, function (_, c) {
    return c ? c.toUpperCase() : "";
  });
});

function removeNode(node) {
  if (node.parentElement !== null) {
    node.parentElement.removeChild(node);
  }
}

function insertNodeAt(fatherNode, node, position) {
  var refNode = position === 0 ? fatherNode.children[0] : fatherNode.children[position - 1].nextSibling;
  fatherNode.insertBefore(node, refNode);
}


/* WEBPACK VAR INJECTION */}.call(this, __nested_webpack_require_42729__("c8ba")))

/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __nested_webpack_require_44512__) {

module.exports = !__nested_webpack_require_44512__("9e1e") && !__nested_webpack_require_44512__("79e5")(function () {
  return Object.defineProperty(__nested_webpack_require_44512__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __nested_webpack_require_45568__) {

"use strict";

var addToUnscopables = __nested_webpack_require_45568__("9c6c");
var step = __nested_webpack_require_45568__("d53b");
var Iterators = __nested_webpack_require_45568__("84f2");
var toIObject = __nested_webpack_require_45568__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __nested_webpack_require_45568__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __nested_webpack_require_46777__) {

var isObject = __nested_webpack_require_46777__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __nested_webpack_require_47019__) {

var has = __nested_webpack_require_47019__("69a8");
var toIObject = __nested_webpack_require_47019__("6821");
var arrayIndexOf = __nested_webpack_require_47019__("c366")(false);
var IE_PROTO = __nested_webpack_require_47019__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d2c8":
/***/ (function(module, exports, __nested_webpack_require_47655__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __nested_webpack_require_47655__("aae3");
var defined = __nested_webpack_require_47655__("be13");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "f559":
/***/ (function(module, exports, __nested_webpack_require_48796__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __nested_webpack_require_48796__("5ca1");
var toLength = __nested_webpack_require_48796__("9def");
var context = __nested_webpack_require_48796__("d2c8");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __nested_webpack_require_48796__("5147")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f751":
/***/ (function(module, exports, __nested_webpack_require_50913__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __nested_webpack_require_50913__("5ca1");

$export($export.S + $export.F, 'Object', { assign: __nested_webpack_require_50913__("7333") });


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __nested_webpack_require_51166__) {

module.exports = __nested_webpack_require_51166__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __nested_webpack_require_51344__) {

var document = __nested_webpack_require_51344__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __nested_webpack_exports__, __nested_webpack_require_51548__) {

"use strict";
// ESM COMPAT FLAG
__nested_webpack_require_51548__.r(__nested_webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __nested_webpack_require_51548__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __nested_webpack_require_51548__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __nested_webpack_require_51548__("f751");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.starts-with.js
var es6_string_starts_with = __nested_webpack_require_51548__("f559");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __nested_webpack_require_51548__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __nested_webpack_require_51548__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __nested_webpack_require_51548__("456d");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __nested_webpack_require_51548__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __nested_webpack_require_51548__("2fdb");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: external {"commonjs":"sortablejs","commonjs2":"sortablejs","amd":"sortablejs","root":"Sortable"}
var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_ = __nested_webpack_require_51548__("a352");
var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default = /*#__PURE__*/__nested_webpack_require_51548__.n(external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_);

// EXTERNAL MODULE: ./src/util/helper.js
var helper = __nested_webpack_require_51548__("c649");

// CONCATENATED MODULE: ./src/vuedraggable.js












function buildAttribute(object, propName, value) {
  if (value === undefined) {
    return object;
  }

  object = object || {};
  object[propName] = value;
  return object;
}

function computeVmIndex(vnodes, element) {
  return vnodes.map(function (elt) {
    return elt.elm;
  }).indexOf(element);
}

function _computeIndexes(slots, children, isTransition, footerOffset) {
  if (!slots) {
    return [];
  }

  var elmFromNodes = slots.map(function (elt) {
    return elt.elm;
  });
  var footerIndex = children.length - footerOffset;

  var rawIndexes = _toConsumableArray(children).map(function (elt, idx) {
    return idx >= footerIndex ? elmFromNodes.length : elmFromNodes.indexOf(elt);
  });

  return isTransition ? rawIndexes.filter(function (ind) {
    return ind !== -1;
  }) : rawIndexes;
}

function emit(evtName, evtData) {
  var _this = this;

  this.$nextTick(function () {
    return _this.$emit(evtName.toLowerCase(), evtData);
  });
}

function delegateAndEmit(evtName) {
  var _this2 = this;

  return function (evtData) {
    if (_this2.realList !== null) {
      _this2["onDrag" + evtName](evtData);
    }

    emit.call(_this2, evtName, evtData);
  };
}

function isTransitionName(name) {
  return ["transition-group", "TransitionGroup"].includes(name);
}

function vuedraggable_isTransition(slots) {
  if (!slots || slots.length !== 1) {
    return false;
  }

  var _slots = _slicedToArray(slots, 1),
      componentOptions = _slots[0].componentOptions;

  if (!componentOptions) {
    return false;
  }

  return isTransitionName(componentOptions.tag);
}

function getSlot(slot, scopedSlot, key) {
  return slot[key] || (scopedSlot[key] ? scopedSlot[key]() : undefined);
}

function computeChildrenAndOffsets(children, slot, scopedSlot) {
  var headerOffset = 0;
  var footerOffset = 0;
  var header = getSlot(slot, scopedSlot, "header");

  if (header) {
    headerOffset = header.length;
    children = children ? [].concat(_toConsumableArray(header), _toConsumableArray(children)) : _toConsumableArray(header);
  }

  var footer = getSlot(slot, scopedSlot, "footer");

  if (footer) {
    footerOffset = footer.length;
    children = children ? [].concat(_toConsumableArray(children), _toConsumableArray(footer)) : _toConsumableArray(footer);
  }

  return {
    children: children,
    headerOffset: headerOffset,
    footerOffset: footerOffset
  };
}

function getComponentAttributes($attrs, componentData) {
  var attributes = null;

  var update = function update(name, value) {
    attributes = buildAttribute(attributes, name, value);
  };

  var attrs = Object.keys($attrs).filter(function (key) {
    return key === "id" || key.startsWith("data-");
  }).reduce(function (res, key) {
    res[key] = $attrs[key];
    return res;
  }, {});
  update("attrs", attrs);

  if (!componentData) {
    return attributes;
  }

  var on = componentData.on,
      props = componentData.props,
      componentDataAttrs = componentData.attrs;
  update("on", on);
  update("props", props);
  Object.assign(attributes.attrs, componentDataAttrs);
  return attributes;
}

var eventsListened = ["Start", "Add", "Remove", "Update", "End"];
var eventsToEmit = ["Choose", "Unchoose", "Sort", "Filter", "Clone"];
var readonlyProperties = ["Move"].concat(eventsListened, eventsToEmit).map(function (evt) {
  return "on" + evt;
});
var draggingElement = null;
var props = {
  options: Object,
  list: {
    type: Array,
    required: false,
    default: null
  },
  value: {
    type: Array,
    required: false,
    default: null
  },
  noTransitionOnDrag: {
    type: Boolean,
    default: false
  },
  clone: {
    type: Function,
    default: function _default(original) {
      return original;
    }
  },
  element: {
    type: String,
    default: "div"
  },
  tag: {
    type: String,
    default: null
  },
  move: {
    type: Function,
    default: null
  },
  componentData: {
    type: Object,
    required: false,
    default: null
  }
};
var draggableComponent = {
  name: "draggable",
  inheritAttrs: false,
  props: props,
  data: function data() {
    return {
      transitionMode: false,
      noneFunctionalComponentMode: false
    };
  },
  render: function render(h) {
    var slots = this.$slots.default;
    this.transitionMode = vuedraggable_isTransition(slots);

    var _computeChildrenAndOf = computeChildrenAndOffsets(slots, this.$slots, this.$scopedSlots),
        children = _computeChildrenAndOf.children,
        headerOffset = _computeChildrenAndOf.headerOffset,
        footerOffset = _computeChildrenAndOf.footerOffset;

    this.headerOffset = headerOffset;
    this.footerOffset = footerOffset;
    var attributes = getComponentAttributes(this.$attrs, this.componentData);
    return h(this.getTag(), attributes, children);
  },
  created: function created() {
    if (this.list !== null && this.value !== null) {
      helper["b" /* console */].error("Value and list props are mutually exclusive! Please set one or another.");
    }

    if (this.element !== "div") {
      helper["b" /* console */].warn("Element props is deprecated please use tag props instead. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#element-props");
    }

    if (this.options !== undefined) {
      helper["b" /* console */].warn("Options props is deprecated, add sortable options directly as vue.draggable item, or use v-bind. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#options-props");
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.noneFunctionalComponentMode = this.getTag().toLowerCase() !== this.$el.nodeName.toLowerCase() && !this.getIsFunctional();

    if (this.noneFunctionalComponentMode && this.transitionMode) {
      throw new Error("Transition-group inside component is not supported. Please alter tag value or remove transition-group. Current tag value: ".concat(this.getTag()));
    }

    var optionsAdded = {};
    eventsListened.forEach(function (elt) {
      optionsAdded["on" + elt] = delegateAndEmit.call(_this3, elt);
    });
    eventsToEmit.forEach(function (elt) {
      optionsAdded["on" + elt] = emit.bind(_this3, elt);
    });
    var attributes = Object.keys(this.$attrs).reduce(function (res, key) {
      res[Object(helper["a" /* camelize */])(key)] = _this3.$attrs[key];
      return res;
    }, {});
    var options = Object.assign({}, this.options, attributes, optionsAdded, {
      onMove: function onMove(evt, originalEvent) {
        return _this3.onDragMove(evt, originalEvent);
      }
    });
    !("draggable" in options) && (options.draggable = ">*");
    this._sortable = new external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default.a(this.rootContainer, options);
    this.computeIndexes();
  },
  beforeDestroy: function beforeDestroy() {
    if (this._sortable !== undefined) this._sortable.destroy();
  },
  computed: {
    rootContainer: function rootContainer() {
      return this.transitionMode ? this.$el.children[0] : this.$el;
    },
    realList: function realList() {
      return this.list ? this.list : this.value;
    }
  },
  watch: {
    options: {
      handler: function handler(newOptionValue) {
        this.updateOptions(newOptionValue);
      },
      deep: true
    },
    $attrs: {
      handler: function handler(newOptionValue) {
        this.updateOptions(newOptionValue);
      },
      deep: true
    },
    realList: function realList() {
      this.computeIndexes();
    }
  },
  methods: {
    getIsFunctional: function getIsFunctional() {
      var fnOptions = this._vnode.fnOptions;
      return fnOptions && fnOptions.functional;
    },
    getTag: function getTag() {
      return this.tag || this.element;
    },
    updateOptions: function updateOptions(newOptionValue) {
      for (var property in newOptionValue) {
        var value = Object(helper["a" /* camelize */])(property);

        if (readonlyProperties.indexOf(value) === -1) {
          this._sortable.option(value, newOptionValue[property]);
        }
      }
    },
    getChildrenNodes: function getChildrenNodes() {
      if (this.noneFunctionalComponentMode) {
        return this.$children[0].$slots.default;
      }

      var rawNodes = this.$slots.default;
      return this.transitionMode ? rawNodes[0].child.$slots.default : rawNodes;
    },
    computeIndexes: function computeIndexes() {
      var _this4 = this;

      this.$nextTick(function () {
        _this4.visibleIndexes = _computeIndexes(_this4.getChildrenNodes(), _this4.rootContainer.children, _this4.transitionMode, _this4.footerOffset);
      });
    },
    getUnderlyingVm: function getUnderlyingVm(htmlElt) {
      var index = computeVmIndex(this.getChildrenNodes() || [], htmlElt);

      if (index === -1) {
        //Edge case during move callback: related element might be
        //an element different from collection
        return null;
      }

      var element = this.realList[index];
      return {
        index: index,
        element: element
      };
    },
    getUnderlyingPotencialDraggableComponent: function getUnderlyingPotencialDraggableComponent(_ref) {
      var vue = _ref.__vue__;

      if (!vue || !vue.$options || !isTransitionName(vue.$options._componentTag)) {
        if (!("realList" in vue) && vue.$children.length === 1 && "realList" in vue.$children[0]) return vue.$children[0];
        return vue;
      }

      return vue.$parent;
    },
    emitChanges: function emitChanges(evt) {
      var _this5 = this;

      this.$nextTick(function () {
        _this5.$emit("change", evt);
      });
    },
    alterList: function alterList(onList) {
      if (this.list) {
        onList(this.list);
        return;
      }

      var newList = _toConsumableArray(this.value);

      onList(newList);
      this.$emit("input", newList);
    },
    spliceList: function spliceList() {
      var _arguments = arguments;

      var spliceList = function spliceList(list) {
        return list.splice.apply(list, _toConsumableArray(_arguments));
      };

      this.alterList(spliceList);
    },
    updatePosition: function updatePosition(oldIndex, newIndex) {
      var updatePosition = function updatePosition(list) {
        return list.splice(newIndex, 0, list.splice(oldIndex, 1)[0]);
      };

      this.alterList(updatePosition);
    },
    getRelatedContextFromMoveEvent: function getRelatedContextFromMoveEvent(_ref2) {
      var to = _ref2.to,
          related = _ref2.related;
      var component = this.getUnderlyingPotencialDraggableComponent(to);

      if (!component) {
        return {
          component: component
        };
      }

      var list = component.realList;
      var context = {
        list: list,
        component: component
      };

      if (to !== related && list && component.getUnderlyingVm) {
        var destination = component.getUnderlyingVm(related);

        if (destination) {
          return Object.assign(destination, context);
        }
      }

      return context;
    },
    getVmIndex: function getVmIndex(domIndex) {
      var indexes = this.visibleIndexes;
      var numberIndexes = indexes.length;
      return domIndex > numberIndexes - 1 ? numberIndexes : indexes[domIndex];
    },
    getComponent: function getComponent() {
      return this.$slots.default[0].componentInstance;
    },
    resetTransitionData: function resetTransitionData(index) {
      if (!this.noTransitionOnDrag || !this.transitionMode) {
        return;
      }

      var nodes = this.getChildrenNodes();
      nodes[index].data = null;
      var transitionContainer = this.getComponent();
      transitionContainer.children = [];
      transitionContainer.kept = undefined;
    },
    onDragStart: function onDragStart(evt) {
      this.context = this.getUnderlyingVm(evt.item);
      evt.item._underlying_vm_ = this.clone(this.context.element);
      draggingElement = evt.item;
    },
    onDragAdd: function onDragAdd(evt) {
      var element = evt.item._underlying_vm_;

      if (element === undefined) {
        return;
      }

      Object(helper["d" /* removeNode */])(evt.item);
      var newIndex = this.getVmIndex(evt.newIndex);
      this.spliceList(newIndex, 0, element);
      this.computeIndexes();
      var added = {
        element: element,
        newIndex: newIndex
      };
      this.emitChanges({
        added: added
      });
    },
    onDragRemove: function onDragRemove(evt) {
      Object(helper["c" /* insertNodeAt */])(this.rootContainer, evt.item, evt.oldIndex);

      if (evt.pullMode === "clone") {
        Object(helper["d" /* removeNode */])(evt.clone);
        return;
      }

      var oldIndex = this.context.index;
      this.spliceList(oldIndex, 1);
      var removed = {
        element: this.context.element,
        oldIndex: oldIndex
      };
      this.resetTransitionData(oldIndex);
      this.emitChanges({
        removed: removed
      });
    },
    onDragUpdate: function onDragUpdate(evt) {
      Object(helper["d" /* removeNode */])(evt.item);
      Object(helper["c" /* insertNodeAt */])(evt.from, evt.item, evt.oldIndex);
      var oldIndex = this.context.index;
      var newIndex = this.getVmIndex(evt.newIndex);
      this.updatePosition(oldIndex, newIndex);
      var moved = {
        element: this.context.element,
        oldIndex: oldIndex,
        newIndex: newIndex
      };
      this.emitChanges({
        moved: moved
      });
    },
    updateProperty: function updateProperty(evt, propertyName) {
      evt.hasOwnProperty(propertyName) && (evt[propertyName] += this.headerOffset);
    },
    computeFutureIndex: function computeFutureIndex(relatedContext, evt) {
      if (!relatedContext.element) {
        return 0;
      }

      var domChildren = _toConsumableArray(evt.to.children).filter(function (el) {
        return el.style["display"] !== "none";
      });

      var currentDOMIndex = domChildren.indexOf(evt.related);
      var currentIndex = relatedContext.component.getVmIndex(currentDOMIndex);
      var draggedInList = domChildren.indexOf(draggingElement) !== -1;
      return draggedInList || !evt.willInsertAfter ? currentIndex : currentIndex + 1;
    },
    onDragMove: function onDragMove(evt, originalEvent) {
      var onMove = this.move;

      if (!onMove || !this.realList) {
        return true;
      }

      var relatedContext = this.getRelatedContextFromMoveEvent(evt);
      var draggedContext = this.context;
      var futureIndex = this.computeFutureIndex(relatedContext, evt);
      Object.assign(draggedContext, {
        futureIndex: futureIndex
      });
      var sendEvt = Object.assign({}, evt, {
        relatedContext: relatedContext,
        draggedContext: draggedContext
      });
      return onMove(sendEvt, originalEvent);
    },
    onDragEnd: function onDragEnd() {
      this.computeIndexes();
      draggingElement = null;
    }
  }
};

if (typeof window !== "undefined" && "Vue" in window) {
  window.Vue.component("draggable", draggableComponent);
}

/* harmony default export */ var vuedraggable = (draggableComponent);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __nested_webpack_exports__["default"] = (vuedraggable);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=vuedraggable.umd.js.map

/***/ })

}]);