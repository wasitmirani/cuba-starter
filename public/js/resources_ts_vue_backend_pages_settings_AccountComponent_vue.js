"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_vue_backend_pages_settings_AccountComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/settings/AccountComponent.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/settings/AccountComponent.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_media_upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-media-upload */ "./node_modules/vue-media-upload/index.js");
/* harmony import */ var _components_BreadcrumbComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BreadcrumbComponent.vue */ "./resources/ts/vue/backend/pages/components/BreadcrumbComponent.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// import breadcrumb from "../../components/breadcrumbComponent.vue";


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    UploadMedia: vue_media_upload__WEBPACK_IMPORTED_MODULE_0__["default"],
    Breadcrumb: _components_BreadcrumbComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      user: {},
      media: [],
      url: window.location.origin,
      api_url: "/app-thumbnail-upload",
      updateImage: false,
      loading: false,
      countries: []
    };
  },
  methods: {
    Media: function Media(value) {
      if (this.media.length > 1) {
        this.media.splice(0, 1);
        if (this.$refs["upload-media"] != undefined) this.$refs["upload-media"].reset();
      }
      this.media = [];
      this.media = value;
      if (this.media) {
        var _this$media$;
        console.log(this === null || this === void 0 ? void 0 : this.$refs["upload-media"].media);
        // console.log(this.$refs?.upload-media?.media);
        this.user.thumbnail = (_this$media$ = this.media[0]) === null || _this$media$ === void 0 ? void 0 : _this$media$.name;
      }
    },
    onSubmit: function onSubmit() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.loading = true;
              _context.next = 3;
              return axios.post("user-settings", _this.user).then(function (res) {
                _this.getAppSettings();
                _this.loading = false;
                _this.updateImage = false;
              })["catch"](function (err) {
                _this.$root.alertNotify(err.response.status, null, "error", err.response.data);
              });
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    getAppSettings: function getAppSettings() {
      var _this2 = this;
      this.loading = true;
      axios.get("user-settings").then(function (res) {
        _this2.user = res.data.user;
        _this2.loading = false;
      });
    }
  },
  mounted: function mounted() {
    this.getAppSettings();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/settings/AccountComponent.vue?vue&type=template&id=d5377816":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/settings/AccountComponent.vue?vue&type=template&id=d5377816 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "container-fluid"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav nav-tabs border-tab mb-0",
  id: "bottom-tab",
  role: "tablist"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link nav-border txt-primary tab-primary pt-0 active",
  id: "bottom-home-tab",
  "data-bs-toggle": "tab",
  href: "#bottom-home",
  role: "tab",
  "aria-controls": "bottom-home",
  "aria-selected": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "icofont icofont-ui-user"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("User Settings")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link nav-border txt-primary tab-primary",
  id: "bottom-inbox-tab",
  "data-bs-toggle": "tab",
  href: "#bottom-inbox",
  role: "tab",
  "aria-controls": "bottom-inbox",
  "aria-selected": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "icofont icofont-ui-message"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Email Settings")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link nav-border txt-primary tab-primary",
  id: "bottom-contact-tab",
  "data-bs-toggle": "tab",
  href: "#bottom-contact",
  role: "tab",
  "aria-controls": "bottom-contact",
  "aria-selected": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "icofont icofont-ui-password"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Password Settings")])])])])])], -1 /* HOISTED */);
var _hoisted_2 = {
  "class": "container-fluid"
};
var _hoisted_3 = {
  "class": "row"
};
var _hoisted_4 = {
  "class": "tab-content",
  id: "bottom-tabContent"
};
var _hoisted_5 = {
  "class": "tab-pane fade active show",
  id: "bottom-home",
  role: "tabpanel",
  "aria-labelledby": "bottom-home-tab"
};
var _hoisted_6 = {
  "class": "card"
};
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "User Settings"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "For basic settings of user")], -1 /* HOISTED */);
var _hoisted_8 = {
  "class": "card-body"
};
var _hoisted_9 = {
  "class": "row"
};
var _hoisted_10 = {
  "class": "col-sm-12"
};
var _hoisted_11 = {
  "class": "row"
};
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-3 mb-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label",
  "for": "first-name"
}, "Profile Image")], -1 /* HOISTED */);
var _hoisted_13 = {
  "class": "col-sm-9 mb-2"
};
var _hoisted_14 = {
  key: 1,
  "class": "profile-img app-setting-image"
};
var _hoisted_15 = ["src"];
var _hoisted_16 = {
  "class": "row"
};
var _hoisted_17 = {
  "class": "col-12"
};
var _hoisted_18 = {
  "class": "mb-2 row"
};
var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label",
  "for": "name"
}, "Name")], -1 /* HOISTED */);
var _hoisted_20 = {
  "class": "col-sm-9"
};
var _hoisted_21 = {
  "class": "col-12"
};
var _hoisted_22 = {
  "class": "mb-2 row"
};
var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label",
  "for": "phone"
}, "Phone")], -1 /* HOISTED */);
var _hoisted_24 = {
  "class": "col-sm-9"
};
var _hoisted_25 = {
  "class": "tab-pane fade",
  id: "bottom-inbox",
  role: "tabpanel",
  "aria-labelledby": "bottom-inbox-tab"
};
var _hoisted_26 = {
  "class": "card"
};
var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-header d-flex justify-content-between"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Email Settings"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "For user email settings")])], -1 /* HOISTED */);
var _hoisted_28 = {
  "class": "card-body"
};
var _hoisted_29 = {
  "class": "row"
};
var _hoisted_30 = {
  "class": "col-6"
};
var _hoisted_31 = {
  "class": "mb-2 row"
};
var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label",
  "for": "email"
}, "Email")], -1 /* HOISTED */);
var _hoisted_33 = {
  "class": "col-sm-8"
};
var _hoisted_34 = {
  "class": "col-6"
};
var _hoisted_35 = {
  "class": "mb-2 row"
};
var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label",
  "for": "new-email"
}, "New Email")], -1 /* HOISTED */);
var _hoisted_37 = {
  "class": "col-sm-8"
};
var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-9 offset-sm-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "btn btn-primary me-1 waves-effect waves-float waves-light float-right"
}, " Submit ")], -1 /* HOISTED */);
var _hoisted_39 = {
  "class": "tab-pane fade",
  id: "bottom-contact",
  role: "tabpanel",
  "aria-labelledby": "bottom-contact-tab"
};
var _hoisted_40 = {
  "class": "card"
};
var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-header d-flex justify-content-between"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Password Settings"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "For user password settings")])], -1 /* HOISTED */);
var _hoisted_42 = {
  "class": "card-body"
};
var _hoisted_43 = {
  "class": "row"
};
var _hoisted_44 = {
  "class": "col-6"
};
var _hoisted_45 = {
  "class": "mb-2 row"
};
var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label",
  "for": "current-password"
}, "Current Password")], -1 /* HOISTED */);
var _hoisted_47 = {
  "class": "col-sm-8"
};
var _hoisted_48 = {
  "class": "col-6"
};
var _hoisted_49 = {
  "class": "mb-2 row"
};
var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label",
  "for": "new-password"
}, "New Password")], -1 /* HOISTED */);
var _hoisted_51 = {
  "class": "col-sm-8"
};
var _hoisted_52 = {
  "class": "col-6"
};
var _hoisted_53 = {
  "class": "mb-2 row"
};
var _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-form-label",
  "for": "confirm-new-password"
}, "Confirm New Password")], -1 /* HOISTED */);
var _hoisted_55 = {
  "class": "col-sm-8"
};
var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-9 offset-sm-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "btn btn-primary me-1 waves-effect waves-float waves-light float-right"
}, " Submit ")], -1 /* HOISTED */);
var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, null, -1 /* HOISTED */);
var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this$user;
  var _component_Breadcrumb = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Breadcrumb");
  var _component_upload_media = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("upload-media");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Breadcrumb, {
    active_name: "Account"
  }), _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <loader-box v-if=\"loading\"></loader-box> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [$data.updateImage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_upload_media, {
    key: 0,
    "class": "round",
    server: "/app-thumbnail-upload",
    onMedia: $options.Media,
    ref: "upload-media"
  }, null, 8 /* PROPS */, ["onMedia"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "round",
    src: "".concat($data.url, "/img/app/").concat((_this$user = this.user) === null || _this$user === void 0 ? void 0 : _this$user.thumbnail),
    height: "150",
    width: "150",
    alt: "img-placeholder"
  }, null, 8 /* PROPS */, _hoisted_15), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $data.updateImage = true;
    }),
    "class": "fa fa-close ml-4 cursor-pointer"
  })]))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "form form-horizontal",
    onSubmit: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.onSubmit && $options.onSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "name",
    "class": "form-control",
    name: "name",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.user.name = $event;
    }),
    placeholder: "Name"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.user.name]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "phone",
    "class": "form-control",
    name: "phone",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.user.phone = $event;
    }),
    placeholder: "phone"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.user.phone]])])])])])], 32 /* HYDRATE_EVENTS */)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "form form-horizontal",
    onSubmit: _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.onSubmit && $options.onSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "email",
    id: "google-client-id",
    "class": "form-control",
    name: "email",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.user.email = $event;
    }),
    placeholder: "Email"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.user.email]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [_hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "email",
    id: "new-email",
    "class": "form-control",
    name: "new-email",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.user.new_email = $event;
    }),
    placeholder: "New Email"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.user.new_email]])])])]), _hoisted_38])])])], 32 /* HYDRATE_EVENTS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "form form-horizontal",
    onSubmit: _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.onSubmit && $options.onSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "password",
    id: "current-password",
    "class": "form-control",
    name: "current_password",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.user.current_password = $event;
    }),
    placeholder: "Current Password"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.user.current_password]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [_hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "password",
    id: "new-password",
    "class": "form-control",
    name: "new_password",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $data.user.new_password = $event;
    }),
    placeholder: "New Password"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.user.new_password]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [_hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "password",
    id: "confirm-password",
    "class": "form-control",
    name: "confirm_new_password",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.user.confirm_new_password = $event;
    }),
    placeholder: "Confirm New Password"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.user.confirm_new_password]])])])]), _hoisted_56])])])], 32 /* HYDRATE_EVENTS */)])])]), _hoisted_57, _hoisted_58])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/Uploader.vue?vue&type=style&index=0&id=5b8c8e80&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/Uploader.vue?vue&type=style&index=0&id=5b8c8e80&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.mu-container[data-v-5b8c8e80]{\r\n    background-color: #fbfbfb !important;\r\n    border-radius: 5px !important;\r\n    border-style: solid !important;\r\n    border: 1px solid #9b9b9b !important;\r\n    box-sizing: border-box !important;\r\n    width: 100% !important;\r\n    height: auto !important;\n}\r\n\r\n/* ----elements-wrapper--- */\n.mu-elements-wraper[data-v-5b8c8e80] {\r\n  padding: 1rem !important;\r\n  display: flex !important;\r\n  flex-wrap: wrap !important;\n}\r\n\r\n/* ----plusbox--- */\n.mu-plusbox-container[data-v-5b8c8e80]{\r\n    display: inline-flex !important;\r\n    height: 90px !important;\r\n    width: 140px !important;\r\n    margin: 0.25rem !important;\n}\n.mu-plusbox[data-v-5b8c8e80] {\r\n    background-color: #ffffff !important;\r\n    border: 1px dashed #818181 !important;\r\n    border-radius: 5px !important;\r\n    cursor: pointer !important;\r\n    display: flex !important;\r\n    flex-wrap: wrap !important;\r\n    align-items: center !important;\r\n    width: 140px !important;\r\n    height: 90px !important;\n}\n.mu-plusbox[data-v-5b8c8e80]:hover{\r\n    background-color: #f1f1f1 !important;\n}\n.mu-plusbox:hover > .mu-plus-icon[data-v-5b8c8e80]{\r\n    color: #028296 !important;\n}\n.mu-plus-icon[data-v-5b8c8e80]{\r\n    color: #00afca !important;\r\n    font-size: 3rem !important;\r\n    flex: 1;\n}\r\n\r\n/* ----media-preview---- */\n.mu-image-container[data-v-5b8c8e80]{\r\n    width: 140px !important;\r\n    height: 90px !important;\r\n    margin: 0.25rem !important;\r\n    \r\n    position: relative;\n}\n.mu-images-preview[data-v-5b8c8e80] {\r\n    border-radius: 5px !important;\r\n    border: 1px solid #818181 !important;\r\n    width: 140px !important;\r\n    height: 90px !important;\r\n    transition: filter 0.1s linear;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    -o-object-position: center;\r\n       object-position: center;\n}\n.mu-images-preview[data-v-5b8c8e80]:hover{\r\n    filter: brightness(90%);\n}\n.mu-close-btn[data-v-5b8c8e80]{\r\n    background: none !important;\r\n\tcolor:white !important;\r\n\tborder: none !important;\r\n\tpadding: 0px !important;\r\n    margin:0px !important;\r\n\tcursor: pointer !important;\r\n\r\n    position: absolute !important;\r\n    top: 0px;\r\n    right: 0px;\n}\n.mu-times-icon[data-v-5b8c8e80]{\r\n    font-size: 3rem !important;\r\n    filter: drop-shadow(0px 0px 1px black);\n}\n.mu-close-btn[data-v-5b8c8e80]:hover{\r\n    color: red !important;\n}\r\n\r\n/* -------------------- */\n.mu-red-border[data-v-5b8c8e80] {\r\n    border: 1px solid #dc3545 !important;\n}\n.mu-mt-1[data-v-5b8c8e80] {\r\n  margin-top: 0.25rem !important;\n}\r\n\r\n/* -------------------- */\nimg[data-v-5b8c8e80] {\r\n  -webkit-user-drag: none;\r\n  -khtml-user-drag: none;\r\n  -moz-user-drag: none;\r\n  -o-user-drag: none;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/loader/index.vue?vue&type=style&index=0&id=4acf0df0&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/loader/index.vue?vue&type=style&index=0&id=4acf0df0&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.fade-enter-active[data-v-4acf0df0], .fade-leave-active[data-v-4acf0df0] {\r\n  transition: opacity .3s;\n}\n.fade-enter[data-v-4acf0df0], .fade-leave-to[data-v-4acf0df0] {\r\n  opacity: 0;\n}\n.velmld-overlay[data-v-4acf0df0] {\r\n  position: absolute;\r\n  z-index: 3000;\r\n  margin: 0;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  transition: opacity .3s;\n}\n.velmld-spinner[data-v-4acf0df0] {\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  position: absolute;\r\n  text-align: center\n}\n.velmld-full-screen[data-v-4acf0df0] {\r\n  position: fixed;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/loader/index.vue?vue&type=style&index=1&id=4acf0df0&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/loader/index.vue?vue&type=style&index=1&id=4acf0df0&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.velmld-parent {\r\n  position: relative !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/settings/AccountComponent.vue?vue&type=style&index=0&id=d5377816&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/settings/AccountComponent.vue?vue&type=style&index=0&id=d5377816&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.image-container .images-preview {\n    height: 100px !important;\n    width: 130px !important;\n    border: 1px solid #e1e1e1;\n    padding: 10px;\n    border-radius: 8px;\n    box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;\n}\n  ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/Uploader.vue?vue&type=style&index=0&id=5b8c8e80&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/Uploader.vue?vue&type=style&index=0&id=5b8c8e80&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_10_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_Uploader_vue_vue_type_style_index_0_id_5b8c8e80_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../vue-loader/dist/stylePostLoader.js!../../postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../vue-loader/dist/index.js??ruleSet[0].use[0]!./Uploader.vue?vue&type=style&index=0&id=5b8c8e80&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/Uploader.vue?vue&type=style&index=0&id=5b8c8e80&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_Uploader_vue_vue_type_style_index_0_id_5b8c8e80_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_Uploader_vue_vue_type_style_index_0_id_5b8c8e80_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/loader/index.vue?vue&type=style&index=0&id=4acf0df0&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/loader/index.vue?vue&type=style&index=0&id=4acf0df0&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_10_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_4acf0df0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../vue-loader/dist/stylePostLoader.js!../../../postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=0&id=4acf0df0&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/loader/index.vue?vue&type=style&index=0&id=4acf0df0&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_4acf0df0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_4acf0df0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/loader/index.vue?vue&type=style&index=1&id=4acf0df0&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/loader/index.vue?vue&type=style&index=1&id=4acf0df0&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_10_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_1_id_4acf0df0_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../vue-loader/dist/stylePostLoader.js!../../../postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=1&id=4acf0df0&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/loader/index.vue?vue&type=style&index=1&id=4acf0df0&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_1_id_4acf0df0_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_1_id_4acf0df0_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/settings/AccountComponent.vue?vue&type=style&index=0&id=d5377816&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/settings/AccountComponent.vue?vue&type=style&index=0&id=d5377816&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AccountComponent_vue_vue_type_style_index_0_id_d5377816_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AccountComponent.vue?vue&type=style&index=0&id=d5377816&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/settings/AccountComponent.vue?vue&type=style&index=0&id=d5377816&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AccountComponent_vue_vue_type_style_index_0_id_d5377816_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AccountComponent_vue_vue_type_style_index_0_id_d5377816_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vue-media-upload/src/Uploader.vue":
/*!********************************************************!*\
  !*** ./node_modules/vue-media-upload/src/Uploader.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Uploader_vue_vue_type_template_id_5b8c8e80_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uploader.vue?vue&type=template&id=5b8c8e80&scoped=true */ "./node_modules/vue-media-upload/src/Uploader.vue?vue&type=template&id=5b8c8e80&scoped=true");
/* harmony import */ var _Uploader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Uploader.vue?vue&type=script&lang=js */ "./node_modules/vue-media-upload/src/Uploader.vue?vue&type=script&lang=js");
/* harmony import */ var _Uploader_vue_vue_type_style_index_0_id_5b8c8e80_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Uploader.vue?vue&type=style&index=0&id=5b8c8e80&scoped=true&lang=css */ "./node_modules/vue-media-upload/src/Uploader.vue?vue&type=style&index=0&id=5b8c8e80&scoped=true&lang=css");
/* harmony import */ var C_laragon_www_cuba_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_laragon_www_cuba_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Uploader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Uploader_vue_vue_type_template_id_5b8c8e80_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-5b8c8e80"],['__file',"node_modules/vue-media-upload/src/Uploader.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/Uploader.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/Uploader.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loader_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader/index.vue */ "./node_modules/vue-media-upload/src/loader/index.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);

    
    

    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({

        props:{
            server: {
                type: String,
                default: '/api/upload'
            },
            isInvalid: {
                type: Boolean,
                default: false
            },
            media:{
                type: Array,
                default: []
            },
            location:{
                type: String,
                default: ''
            },
            max:{
                type: Number,
                default: null
            },
            maxFilesize:{
                type: Number,
                default: 4
            },
            warnings:{
                type: Boolean,
                default: true
            }
        },
        mounted() {
            this.init()
        },
        data(){
            return{
                addedMedia:[],
                savedMedia:[],
                removedMedia:[],

                isLoading:true
            }
        },
        methods:{
            init(){
                this.savedMedia = this.media

                this.savedMedia.forEach((image, index) => {
                    if(!this.savedMedia[index].url){
                        this.savedMedia[index].url = this.location + "/" + image.name
                    }
                });
                
                setTimeout(() => this.isLoading = false, 1000)

                this.$emit('init', this.allMedia)
            },
            async fileChange(event){
                this.isLoading = true
                let files = event.target.files

                for(var i=0; i < files.length; i++){
                    if(!this.max || this.allMedia.length < this.max){
                        if(files[i].size <= this.maxFilesize*1000000){
                            let formData = new FormData
                            let url = URL.createObjectURL(files[i])
                            formData.set('image', files[i])
    
                            const {data} = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(this.server, formData)
                            let addedImage = {url:url, name:data.name, size:files[i].size, type:files[i].type}
                            this.addedMedia.push(addedImage)
    
                            this.$emit('change', this.allMedia)
                            this.$emit('add', addedImage, this.addedMedia)
                        }else{
                            this.$emit('maxFilesize', files[i].size)
                            if(this.warnings){
                                alert('The file you are trying to upload is too big. \nMaximum Filesize: '+ this.maxFilesize +'MB')
                            }
                            break;
                        }
                    }else{
                        this.$emit('max')
                        if(this.warnings){
                            alert('You have reached the maximum number of files that you can upload. \nMaximum Files: '+ this.max)
                        }
                        break;
                    }
                }
                event.target.value = null
                this.isLoading = false
            },
            removeAddedMedia(index){
                let removedImage = this.addedMedia[index]
                this.addedMedia.splice(index,1)

                this.$emit('change', this.allMedia)
                this.$emit('remove', removedImage, this.removedMedia)
            },
            removeSavedMedia(index){
                let removedImage = this.savedMedia[index]
                this.removedMedia.push(removedImage)
                this.savedMedia.splice(index,1)

                this.$emit('change', this.allMedia)
                this.$emit('remove', removedImage, this.removedMedia)
            }
            
        },
        computed:{
            allMedia(){
                return [...this.savedMedia, ...this.addedMedia];
            }
        },
        emits: [
            'init',
            'change',
            'add',
            'remove',
            'max',
            'maxFilesize'
        ],
        components:{
            Loader: _loader_index_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
        }
    });
        


/***/ }),

/***/ "./node_modules/vue-media-upload/src/loader/index.vue":
/*!************************************************************!*\
  !*** ./node_modules/vue-media-upload/src/loader/index.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_4acf0df0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4acf0df0&scoped=true */ "./node_modules/vue-media-upload/src/loader/index.vue?vue&type=template&id=4acf0df0&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./node_modules/vue-media-upload/src/loader/index.vue?vue&type=script&lang=js");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_4acf0df0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=4acf0df0&scoped=true&lang=css */ "./node_modules/vue-media-upload/src/loader/index.vue?vue&type=style&index=0&id=4acf0df0&scoped=true&lang=css");
/* harmony import */ var _index_vue_vue_type_style_index_1_id_4acf0df0_lang_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=1&id=4acf0df0&lang=css */ "./node_modules/vue-media-upload/src/loader/index.vue?vue&type=style&index=1&id=4acf0df0&lang=css");
/* harmony import */ var C_laragon_www_cuba_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;



const __exports__ = /*#__PURE__*/(0,C_laragon_www_cuba_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_4acf0df0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-4acf0df0"],['__file',"node_modules/vue-media-upload/src/loader/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/loader/index.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/loader/index.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loaders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loaders */ "./node_modules/vue-media-upload/src/loader/loaders/index.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'vue-element-loading',
  props: {
    active: Boolean,
    spinner: {
      type: String,
      default: 'spinner'
    },
    text: {
      type: String,
      default: ''
    },
    textStyle: {
      type: Object,
      default: function () {
        return {}
      }
    },
    color: {
      type: String,
      default: '#000'
    },
    isFullScreen: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
      default: 'rgba(255, 255, 255, .9)'
    },
    size: {
      type: String,
      default: '40'
    },
    duration: {
      type: String,
      default: '0.6'
    },
    delay: {
      type: [String, Number],
      default: 0
    }
  },
  data () {
    return {
      isActive: this.active || false,
      isActiveDelay: false
    }
  },
  /**
   * Append class 'velmld-parent' to parent container.
   */
  mounted () {
    this.$refs.velmld.parentNode.classList.add('velmld-parent')

    if (this.delay) {
      const delayMs = (+this.delay) * 1000
      this.delayActive(delayMs)
    }
  },
  methods: {
    delayActive (ms) {
      this.isActiveDelay = true

      setTimeout(() => {
        this.isActiveDelay = false  
      }, ms)
    }
  },
  watch: {
    /**
     * Binding outside component value and inside component value.
     * Append class 'velmld-parent' to parent container.
     */
    active (value) {
      this.isActive = value
      if (value) {
        this.$refs.velmld.parentNode.classList.add('velmld-parent')
      }
    }
  },
  components: _loaders__WEBPACK_IMPORTED_MODULE_0__["default"]
});


/***/ }),

/***/ "./node_modules/vue-media-upload/src/loader/loaders/line-scale.vue":
/*!*************************************************************************!*\
  !*** ./node_modules/vue-media-upload/src/loader/loaders/line-scale.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _line_scale_vue_vue_type_template_id_4919e99a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line-scale.vue?vue&type=template&id=4919e99a */ "./node_modules/vue-media-upload/src/loader/loaders/line-scale.vue?vue&type=template&id=4919e99a");
/* harmony import */ var _line_scale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line-scale.vue?vue&type=script&lang=js */ "./node_modules/vue-media-upload/src/loader/loaders/line-scale.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_cuba_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_cuba_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_line_scale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_line_scale_vue_vue_type_template_id_4919e99a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"node_modules/vue-media-upload/src/loader/loaders/line-scale.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/loader/loaders/line-scale.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/loader/loaders/line-scale.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'line-scale',
  props: {
    color: {
      type: String,
      default: '#CCC'
    },
    size: {
      type: String,
      default: '40px'
    },
    duration: {
      type: String,
      default: '0.6s'
    }
  }
});


/***/ }),

/***/ "./resources/ts/vue/backend/pages/settings/AccountComponent.vue":
/*!**********************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/settings/AccountComponent.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AccountComponent_vue_vue_type_template_id_d5377816__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountComponent.vue?vue&type=template&id=d5377816 */ "./resources/ts/vue/backend/pages/settings/AccountComponent.vue?vue&type=template&id=d5377816");
/* harmony import */ var _AccountComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/settings/AccountComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _AccountComponent_vue_vue_type_style_index_0_id_d5377816_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccountComponent.vue?vue&type=style&index=0&id=d5377816&lang=css */ "./resources/ts/vue/backend/pages/settings/AccountComponent.vue?vue&type=style&index=0&id=d5377816&lang=css");
/* harmony import */ var C_laragon_www_cuba_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_laragon_www_cuba_admin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_AccountComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AccountComponent_vue_vue_type_template_id_d5377816__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/settings/AccountComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/settings/AccountComponent.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/settings/AccountComponent.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AccountComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AccountComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AccountComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/settings/AccountComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/settings/AccountComponent.vue?vue&type=template&id=d5377816":
/*!****************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/settings/AccountComponent.vue?vue&type=template&id=d5377816 ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AccountComponent_vue_vue_type_template_id_d5377816__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AccountComponent_vue_vue_type_template_id_d5377816__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AccountComponent.vue?vue&type=template&id=d5377816 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/settings/AccountComponent.vue?vue&type=template&id=d5377816");


/***/ }),

/***/ "./node_modules/vue-media-upload/src/Uploader.vue?vue&type=style&index=0&id=5b8c8e80&scoped=true&lang=css":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/vue-media-upload/src/Uploader.vue?vue&type=style&index=0&id=5b8c8e80&scoped=true&lang=css ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_cjs_js_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_Uploader_vue_vue_type_style_index_0_id_5b8c8e80_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../style-loader/dist/cjs.js!../../css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../vue-loader/dist/stylePostLoader.js!../../postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../vue-loader/dist/index.js??ruleSet[0].use[0]!./Uploader.vue?vue&type=style&index=0&id=5b8c8e80&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/Uploader.vue?vue&type=style&index=0&id=5b8c8e80&scoped=true&lang=css");


/***/ }),

/***/ "./node_modules/vue-media-upload/src/loader/index.vue?vue&type=style&index=0&id=4acf0df0&scoped=true&lang=css":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/vue-media-upload/src/loader/index.vue?vue&type=style&index=0&id=4acf0df0&scoped=true&lang=css ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_cjs_js_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_4acf0df0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../style-loader/dist/cjs.js!../../../css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../vue-loader/dist/stylePostLoader.js!../../../postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=0&id=4acf0df0&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/loader/index.vue?vue&type=style&index=0&id=4acf0df0&scoped=true&lang=css");


/***/ }),

/***/ "./node_modules/vue-media-upload/src/loader/index.vue?vue&type=style&index=1&id=4acf0df0&lang=css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/vue-media-upload/src/loader/index.vue?vue&type=style&index=1&id=4acf0df0&lang=css ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_cjs_js_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_1_id_4acf0df0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../style-loader/dist/cjs.js!../../../css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../vue-loader/dist/stylePostLoader.js!../../../postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=1&id=4acf0df0&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/loader/index.vue?vue&type=style&index=1&id=4acf0df0&lang=css");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/settings/AccountComponent.vue?vue&type=style&index=0&id=d5377816&lang=css":
/*!******************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/settings/AccountComponent.vue?vue&type=style&index=0&id=d5377816&lang=css ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AccountComponent_vue_vue_type_style_index_0_id_d5377816_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AccountComponent.vue?vue&type=style&index=0&id=d5377816&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/settings/AccountComponent.vue?vue&type=style&index=0&id=d5377816&lang=css");


/***/ }),

/***/ "./node_modules/vue-media-upload/src/Uploader.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./node_modules/vue-media-upload/src/Uploader.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _vue_loader_dist_index_js_ruleSet_0_use_0_Uploader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_index_js_ruleSet_0_use_0_Uploader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/dist/index.js??ruleSet[0].use[0]!./Uploader.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/Uploader.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./node_modules/vue-media-upload/src/loader/index.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./node_modules/vue-media-upload/src/loader/index.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/loader/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./node_modules/vue-media-upload/src/loader/loaders/line-scale.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/vue-media-upload/src/loader/loaders/line-scale.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _vue_loader_dist_index_js_ruleSet_0_use_0_line_scale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_index_js_ruleSet_0_use_0_line_scale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./line-scale.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/loader/loaders/line-scale.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./node_modules/vue-media-upload/src/Uploader.vue?vue&type=template&id=5b8c8e80&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./node_modules/vue-media-upload/src/Uploader.vue?vue&type=template&id=5b8c8e80&scoped=true ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_vue_loader_dist_index_js_ruleSet_0_use_0_Uploader_vue_vue_type_template_id_5b8c8e80_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_vue_loader_dist_index_js_ruleSet_0_use_0_Uploader_vue_vue_type_template_id_5b8c8e80_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../vue-loader/dist/index.js??ruleSet[0].use[0]!./Uploader.vue?vue&type=template&id=5b8c8e80&scoped=true */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/Uploader.vue?vue&type=template&id=5b8c8e80&scoped=true");


/***/ }),

/***/ "./node_modules/vue-media-upload/src/loader/index.vue?vue&type=template&id=4acf0df0&scoped=true":
/*!******************************************************************************************************!*\
  !*** ./node_modules/vue-media-upload/src/loader/index.vue?vue&type=template&id=4acf0df0&scoped=true ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_4acf0df0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_4acf0df0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=4acf0df0&scoped=true */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/loader/index.vue?vue&type=template&id=4acf0df0&scoped=true");


/***/ }),

/***/ "./node_modules/vue-media-upload/src/loader/loaders/line-scale.vue?vue&type=template&id=4919e99a":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/vue-media-upload/src/loader/loaders/line-scale.vue?vue&type=template&id=4919e99a ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_vue_loader_dist_index_js_ruleSet_0_use_0_line_scale_vue_vue_type_template_id_4919e99a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_vue_loader_dist_index_js_ruleSet_0_use_0_line_scale_vue_vue_type_template_id_4919e99a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./line-scale.vue?vue&type=template&id=4919e99a */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/loader/loaders/line-scale.vue?vue&type=template&id=4919e99a");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/Uploader.vue?vue&type=template&id=5b8c8e80&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/Uploader.vue?vue&type=template&id=5b8c8e80&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-5b8c8e80"),n=n(),(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(),n)
const _hoisted_1 = { class: "mu-elements-wraper" }
const _hoisted_2 = { class: "mu-plusbox-container" }
const _hoisted_3 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "mu-file-input",
  class: "mu-plusbox"
}, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    class: "mu-plus-icon",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    preserveAspectRatio: "xMidYMid meet",
    viewBox: "0 0 24 24"
  }, [
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", { fill: "none" }, [
      /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1zm1 15a1 1 0 1 1-2 0v-3H8a1 1 0 1 1 0-2h3V8a1 1 0 1 1 2 0v3h3a1 1 0 1 1 0 2h-3v3z",
        fill: "currentColor"
      })
    ])
  ])
], -1 /* HOISTED */))
const _hoisted_4 = ["src"]
const _hoisted_5 = ["onClick"]
const _hoisted_6 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  class: "mu-times-icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "0.65em",
  height: "0.65em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 352 512"
}, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    d: "m242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28L75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256L9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
    fill: "currentColor"
  })
], -1 /* HOISTED */))
const _hoisted_7 = [
  _hoisted_6
]
const _hoisted_8 = ["src"]
const _hoisted_9 = ["onClick"]
const _hoisted_10 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  class: "mu-times-icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "0.65em",
  height: "0.65em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 352 512"
}, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    d: "m242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28L75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256L9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
    fill: "currentColor"
  })
], -1 /* HOISTED */))
const _hoisted_11 = [
  _hoisted_10
]
const _hoisted_12 = ["value"]
const _hoisted_13 = ["value"]
const _hoisted_14 = {
  key: 0,
  class: "mu-mt-1"
}
const _hoisted_15 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  name: "media",
  value: "1",
  hidden: ""
}, null, -1 /* HOISTED */))
const _hoisted_16 = [
  _hoisted_15
]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Loader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Loader")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["mu-container", $props.isInvalid?'mu-red-border':''])
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Loader, {
        color: "#0275d8",
        active: $data.isLoading,
        spinner: "line-scale",
        "background-color": "rgba(255, 255, 255, .4)"
      }, null, 8 /* PROPS */, ["active"]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("UPLOAD BUTTON"),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
          _hoisted_3,
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            onChange: _cache[0] || (_cache[0] = (...args) => ($options.fileChange && $options.fileChange(...args))),
            id: "mu-file-input",
            type: "file",
            accept: "image/*",
            multiple: "",
            hidden: ""
          }, null, 32 /* HYDRATE_EVENTS */)
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("IMAGES PREVIEW"),
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.savedMedia, (image, index) => {
          return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
            key: index,
            class: "mu-image-container"
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
              src: $props.location +'/'+ image.name,
              alt: "",
              class: "mu-images-preview"
            }, null, 8 /* PROPS */, _hoisted_4),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
              onClick: $event => ($options.removeSavedMedia(index)),
              class: "mu-close-btn",
              type: "button"
            }, _hoisted_7, 8 /* PROPS */, _hoisted_5)
          ]))
        }), 128 /* KEYED_FRAGMENT */)),
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.addedMedia, (image, index) => {
          return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
            key: index,
            class: "mu-image-container"
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
              src: image.url,
              alt: "",
              class: "mu-images-preview"
            }, null, 8 /* PROPS */, _hoisted_8),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
              onClick: $event => ($options.removeAddedMedia(index)),
              class: "mu-close-btn",
              type: "button"
            }, _hoisted_11, 8 /* PROPS */, _hoisted_9)
          ]))
        }), 128 /* KEYED_FRAGMENT */))
      ])
    ], 2 /* CLASS */),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [
      ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.addedMedia, (image, index) => {
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: index,
          class: "mu-mt-1"
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "text",
            name: "added_media[]",
            value: image.name,
            hidden: ""
          }, null, 8 /* PROPS */, _hoisted_12)
        ]))
      }), 128 /* KEYED_FRAGMENT */)),
      ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.removedMedia, (image, index) => {
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: index,
          class: "mu-mt-1"
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "text",
            name: "removed_media[]",
            value: image.name,
            hidden: ""
          }, null, 8 /* PROPS */, _hoisted_13)
        ]))
      }), 128 /* KEYED_FRAGMENT */)),
      ($options.allMedia.length)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_14, _hoisted_16))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ])
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/loader/index.vue?vue&type=template&id=4acf0df0&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/loader/index.vue?vue&type=template&id=4acf0df0&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-4acf0df0"),n=n(),(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(),n)
const _hoisted_1 = { class: "velmld-spinner" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade",
    persisted: ""
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{ 'velmld-full-screen': $props.isFullScreen }, "velmld-overlay"]),
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({ backgroundColor: $props.backgroundColor }),
        ref: "velmld"
      }, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, () => [
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($props.spinner), {
              color: $props.color,
              size: `${$props.size}px`,
              duration: `${$props.duration}s`
            }, null, 8 /* PROPS */, ["color", "size", "duration"]))
          ], true),
          ($props.text.length)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                key: 0,
                style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({ color: $props.color, ...$props.textStyle })
              }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.text), 5 /* TEXT, STYLE */))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
        ])
      ], 6 /* CLASS, STYLE */), [
        [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.isActive || $data.isActiveDelay]
      ])
    ]),
    _: 3 /* FORWARDED */
  }))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/loader/loaders/line-scale.vue?vue&type=template&id=4919e99a":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-media-upload/src/loader/loaders/line-scale.vue?vue&type=template&id=4919e99a ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = ["width", "height"]
const _hoisted_2 = ["fill"]
const _hoisted_3 = ["dur"]
const _hoisted_4 = ["dur"]
const _hoisted_5 = ["fill"]
const _hoisted_6 = ["dur"]
const _hoisted_7 = ["dur"]
const _hoisted_8 = ["fill"]
const _hoisted_9 = ["dur"]
const _hoisted_10 = ["dur"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    width: $props.size,
    height: $props.size,
    viewBox: "0 0 24 30",
    style: {"enable-background":"new 0 0 50 50"},
    "xml:space": "preserve"
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
      x: "0",
      y: "13",
      width: "4",
      height: "5",
      fill: $props.color
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("animate", {
        attributeName: "height",
        attributeType: "XML",
        values: "5;21;5",
        begin: "0s",
        dur: $props.duration,
        repeatCount: "indefinite"
      }, null, 8 /* PROPS */, _hoisted_3),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("animate", {
        attributeName: "y",
        attributeType: "XML",
        values: "13; 5; 13",
        begin: "0s",
        dur: $props.duration,
        repeatCount: "indefinite"
      }, null, 8 /* PROPS */, _hoisted_4)
    ], 8 /* PROPS */, _hoisted_2),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
      x: "10",
      y: "13",
      width: "4",
      height: "5",
      fill: $props.color
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("animate", {
        attributeName: "height",
        attributeType: "XML",
        values: "5;21;5",
        begin: "0.15s",
        dur: $props.duration,
        repeatCount: "indefinite"
      }, null, 8 /* PROPS */, _hoisted_6),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("animate", {
        attributeName: "y",
        attributeType: "XML",
        values: "13; 5; 13",
        begin: "0.15s",
        dur: $props.duration,
        repeatCount: "indefinite"
      }, null, 8 /* PROPS */, _hoisted_7)
    ], 8 /* PROPS */, _hoisted_5),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
      x: "20",
      y: "13",
      width: "4",
      height: "5",
      fill: $props.color
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("animate", {
        attributeName: "height",
        attributeType: "XML",
        values: "5;21;5",
        begin: "0.3s",
        dur: $props.duration,
        repeatCount: "indefinite"
      }, null, 8 /* PROPS */, _hoisted_9),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("animate", {
        attributeName: "y",
        attributeType: "XML",
        values: "13; 5; 13",
        begin: "0.3s",
        dur: $props.duration,
        repeatCount: "indefinite"
      }, null, 8 /* PROPS */, _hoisted_10)
    ], 8 /* PROPS */, _hoisted_8)
  ], 8 /* PROPS */, _hoisted_1))
}

/***/ }),

/***/ "./node_modules/vue-media-upload/index.js":
/*!************************************************!*\
  !*** ./node_modules/vue-media-upload/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_Uploader_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Uploader.vue */ "./node_modules/vue-media-upload/src/Uploader.vue");


    
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_src_Uploader_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/vue-media-upload/src/loader/loaders/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vue-media-upload/src/loader/loaders/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _line_scale_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line-scale.vue */ "./node_modules/vue-media-upload/src/loader/loaders/line-scale.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  LineScale: _line_scale_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
});

/***/ })

}]);