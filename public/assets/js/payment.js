!function(n){function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var e={};t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:o})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=9)}([,,,,,,,,,function(n,t,e){n.exports=e(10)},function(n,t,e){var o,r,a={};o=e(11),Object.keys(o).some(function(n){return"default"!==n&&"__esModule"!==n})&&console.warn("[vue-loader] app/components/payment.vue: named exports in *.vue files are ignored."),r=e(12),n.exports=o||{},n.exports.__esModule&&(n.exports=n.exports.default);var i="function"==typeof n.exports?n.exports.options||(n.exports.options={}):n.exports;r&&(i.template=r),i.computed||(i.computed={}),Object.keys(a).forEach(function(n){var t=a[n];i.computed[n]=function(){return t}})},function(n,t,e){"use strict";n.exports={section:{label:"Payment",icon:"pk-icon-large-credit-card",priority:15},data:function(){return _.extend({config:{}},window.$payment)},events:{save:function(){this.$http.post("admin/system/settings/config",{name:this.name,config:this.config}).catch(function(n){this.$notify(n.data,"danger")})}}},window.Site.components.payment=n.exports},function(n,t){n.exports='\n\n<div class="uk-margin uk-flex uk-flex-space-between uk-flex-wrap" data-uk-margin>\n    <div data-uk-margin>\n        <h2 class="uk-margin-remove">{{ \'Payment\' | trans }}</h2>\n    </div>\n    <div data-uk-margin>\n        <button class="uk-button uk-button-primary" type="submit">{{ \'Save\' | trans }}</button>\n    </div>\n</div>\n\n<div class="uk-form uk-form-horizontal">\n    <div class="uk-form-row">\n        <label class="uk-form-label">{{ \'Logo Off-canvas\' | trans }}</label>\n        <div class="uk-form-controls uk-form-width-large">\n            <input v-model="config.atn"></input-image>\n            <p class="uk-form-help-block">{{ \'Select an optional logo for the off-canvas menu. for ATN\' | trans }}</p>\n        </div>\n    </div>\n</div>\n\n'}]);